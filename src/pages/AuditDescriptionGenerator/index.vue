<template>
  <t-card title="一键生成审计说明" description="Audit Description Generator" header-bordered>
    <template #actions>
      <t-link theme="primary" @click="downloadTemplate">示例下载</t-link>
    </template>
    <t-space direction="vertical">
      <t-form colon prevent-submit-default show-error-message>
        <t-form-item label="选择文件" name="tel">
          <div style="width: 350px">
            <t-upload
              v-model="files"
              action="https://service-bv448zsw-1257786608.gz.apigw.tencentcs.com/api/upload-demo"
              :abridge-name="[8, 6]"
              :auto-upload="false"
              theme="file-input"
              placeholder="未选择文件"
              @change="handleFileSelect"
            ></t-upload>
          </div>
        </t-form-item>
        <t-form-item>
          <t-space>
            <t-button theme="primary" variant="outline" @click="handleAnalyse">提交分析</t-button>
            <t-button theme="default" variant="base" @click="handleReset">重置</t-button>
          </t-space>
        </t-form-item>
        <t-divider></t-divider>
        <t-button v-show="exportFlag" theme="success" size="large" variant="outline" @click="exportExcel"
          >导出分析文件</t-button
        >
      </t-form>
    </t-space>
  </t-card>
</template>

<script setup lang="ts">
import { save } from '@tauri-apps/api/dialog';
import { BaseDirectory, writeBinaryFile } from '@tauri-apps/api/fs';
import * as ExcelJS from 'exceljs';
import NProgress from 'nprogress'; // progress bar
import { MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';

import { headerData } from './headerData';

const files = ref([]);
const exportFlag = ref(false);

// 总表
const AauditDescription = ref([]);

const downloadTemplate = () => {
  const File = new URL('@/assets/adg_demo.xlsx', import.meta.url);
  fetch(File)
    .then((response) => response.blob())
    .then(async (blob) => {
      const savePath = await save({
        title: '保存文件',
        filters: [
          {
            name: 'Excel',
            extensions: ['xlsx', 'xls'],
          },
        ],
        defaultPath: `${BaseDirectory.Desktop}/example.xlsx`,
      });
      if (!savePath) return;
      const fileReader = new FileReader();
      fileReader.readAsArrayBuffer(blob);
      fileReader.onload = async (e) => {
        const excelContent = e.target.result;
        console.log(excelContent);
        if (excelContent instanceof ArrayBuffer) {
          try {
            await writeBinaryFile({ contents: excelContent, path: savePath });
            MessagePlugin.success('示例导出成功');
          } catch {
            MessagePlugin.error('请关闭与导出文件重名的表格');
          }
        }
      };
    });
};

const handleFileSelect = () => {
  exportFlag.value = false;
  AauditDescription.value = [];
};

const handleAnalyse = () => {
  if (files.value.length === 0) return;
  NProgress.start();
  const fileReader = new FileReader();
  const excel = files.value[0].raw;
  console.log(excel);

  fileReader.readAsArrayBuffer(excel);
  fileReader.onload = (e) => {
    dealWithExcel(e.target.result);
  };
  NProgress.done();
};

const exportExcel = async () => {
  const savePath = await save({
    title: '保存文件',
    filters: [
      {
        name: 'Excel',
        extensions: ['xlsx', 'xls'],
      },
    ],
    defaultPath: `${BaseDirectory.Desktop}/result.xlsx`,
  });
  if (!savePath) return;
  NProgress.start();

  // excelJS 导出
  // 创建工作簿
  const workbook = new ExcelJS.Workbook();

  for (let i = 0; i < AauditDescription.value.length; i++) {
    // 创建工作表
    const workSheet = workbook.addWorksheet(`${AauditDescription.value[i].sheetName}-审计说明`);
    workSheet.addRow(headerData);
    // 遍历每一个表
    for (let j = 0; j < AauditDescription.value[i].company.length; j++) {
      exportCompanyData(
        workSheet,
        AauditDescription.value[i].company[j],
        AauditDescription.value[i].companyAuditData[j],
      );
    }

    // excel样式设置
    for (let i = 1; i <= 9; i++) {
      workSheet.getCell(1, i).border = { bottom: { style: 'medium' } };
      workSheet.getCell(1, i).alignment = { vertical: 'middle', horizontal: 'center' };
    }
    workSheet.getRow(1).height = 28;
    workSheet.getColumn(1).width = 18;
    workSheet.getColumn(2).width = 18;
    workSheet.getColumn(3).width = 80;
    workSheet.getColumn(9).width = 30;
  }

  try {
    const buffer = await workbook.xlsx.writeBuffer();
    await writeBinaryFile({ contents: buffer, path: savePath });
    MessagePlugin.success('导出成功');
  } catch {
    MessagePlugin.error('请关闭与导出文件重名的表格');
  }

  NProgress.done();
};

const dealWithExcel = async (fileArrayBuffer: any) => {
  // =============读取数据/初始化=============
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.load(fileArrayBuffer);

  workbook.eachSheet((worksheet, sheetId) => {
    dealWithWorkSheet(worksheet);
  });
  // dealWithWorkSheet(workbook.getWorksheet(1));
};

const dealWithWorkSheet = (worksheet: ExcelJS.Worksheet) => {
  console.log(`===开始处理:《${worksheet.name}》`);

  // var:公司
  const company: string[] = [];
  // var:审计说明数据
  const companyAuditData: companyAuditDataItem[][] = [];
  // 计算出公司数量，写入公司名称
  const compamyCount = (worksheet.getRow(1).cellCount - 2) / 2;
  for (let i = 0; i < compamyCount; i++) {
    company[i] = worksheet.getRow(1).getCell(i + 3).text;
  }

  // =============遍历表，整理数据（i=行数）
  for (let i = 2; i < worksheet.rowCount; i++) {
    const currentRow = worksheet.getRow(i);
    // console.log(currentRow.values);

    // 获取说明desc
    const desc = currentRow.getCell(2).text;

    // 遍历公司，是否有公司存在审计说明
    for (let j = 3; j < company.length + 3; j++) {
      if (currentRow.getCell(j).text !== '') {
        if (currentRow.getCell(j).text === '√' && currentRow.getCell(1).text !== '') {
          // 无专属审计说明：新数据
          const dataItem: companyAuditDataItem = {
            flagSP: false,
            levelNum: getLevelNum(currentRow),
            description: desc,
            descriptionSP: [],
            index: [currentRow.getCell(j + compamyCount).text],
          };
          if (companyAuditData[j - 3] == null) companyAuditData[j - 3] = [];
          companyAuditData[j - 3].push(dataItem);
        }
        if (
          currentRow.getCell(j).text === '√' &&
          currentRow.getCell(1).text === '' &&
          currentRow.getCell(j + compamyCount).text !== ''
        ) {
          // 无专属审计说明：老数据
          const dataItem = companyAuditData[j - 3].pop();
          dataItem.index.push(currentRow.getCell(j + compamyCount).text);
          companyAuditData[j - 3].push(dataItem);
        }
        if (currentRow.getCell(j).text !== '√' && currentRow.getCell(1).text !== '') {
          // 有专属审计说明：新数据
          const dataItem: companyAuditDataItem = {
            flagSP: true,
            levelNum: getLevelNum(currentRow),
            description: desc,
            descriptionSP: [currentRow.getCell(j).text],
            index: [currentRow.getCell(j + compamyCount).text],
          };
          if (companyAuditData[j - 3] == null) companyAuditData[j - 3] = [];
          companyAuditData[j - 3].push(dataItem);
        }
        if (currentRow.getCell(j).text !== '√' && currentRow.getCell(1).text === '') {
          // 有专属审计说明：旧数据
          const dataItem = companyAuditData[j - 3].pop();
          dataItem.descriptionSP.push(currentRow.getCell(j).text);
          dataItem.index.push(currentRow.getCell(j + compamyCount).text);
          companyAuditData[j - 3].push(dataItem);
        }
      }
    }
  }
  console.log(companyAuditData);
  // 向总表推送数据
  AauditDescription.value.push({
    sheetName: worksheet.name,
    company,
    companyAuditData,
  });
  MessagePlugin.success('分析完毕');
  exportFlag.value = true;
  console.log(AauditDescription);
};

const handleReset = () => {
  exportFlag.value = false;
  files.value = [];
  AauditDescription.value = [];
};

const getLevelNum = (row: ExcelJS.Row) => {
  // 计算“程序选择”数据层级level
  const program = row.getCell(1).text;
  const match = program.match(/^(\d+(\.\d+)*)/);
  return match[0].split('.').length;
};

const getNextLevelStr = (preLevemNum: string, levelNum: number, companyName: string, workSheet: ExcelJS.Worksheet) => {
  const pre = preLevemNum.split('.');
  if (levelNum === 1) {
    if (preLevemNum !== '1' && preLevemNum !== '0') workSheet.addRow([companyName, '']);
    return `${Number(pre[0]) + 1}`;
  }
  if (levelNum === 2) {
    if (pre[1] === '' || pre[1] == null) pre[1] = '0';
    return `${Number(pre[0])}.${Number(pre[1]) + 1}`;
  }
  if (levelNum === 3) {
    if (pre[1] === '' || pre[1] == null) pre[1] = '1';
    if (pre[2] === '' || pre[2] == null) pre[2] = '0';
    return `${Number(pre[0])}.${Number(pre[1])}.${Number(pre[2]) + 1}`;
  }
  return '0';
};

const exportCompanyData = (workSheet: ExcelJS.Worksheet, companyName: string, companyData: companyAuditDataItem[]) => {
  let lastLevelStr = '0';
  for (let i = 0; i < AauditDescription.value.length; i++) {
    // 设置头行与样式
    const companyHeader = workSheet.addRow([companyName, '实质性程序编号', '一、审计说明：']);
    companyHeader.getCell(2).font = { bold: true };
    companyHeader.getCell(2).alignment = { horizontal: 'center' };
    companyHeader.getCell(3).font = { bold: true };
    for (let j = 1; j <= 9; j++) {
      companyHeader.getCell(j).border = { top: { style: 'thin' } };
    }

    console.log(companyData);
    // 开始导出公司数据
    for (let j = 0; j < companyData.length; j++) {
      const data = companyData[j];
      lastLevelStr = getNextLevelStr(lastLevelStr, data.levelNum, companyName, workSheet);
      let row;
      if (!data.flagSP) {
        row = workSheet.addRow([companyName, lastLevelStr, data.description]);
      } else {
        row = workSheet.addRow([companyName, lastLevelStr, data.descriptionSP[0]]);
      }

      const index = data.index[0];
      row.getCell(9).value = index;
      row.getCell(2).alignment = { horizontal: 'center' };

      if (data.flagSP && data.descriptionSP.length > 1) {
        // 有专属审计说明且数量大于1
        for (let k = 1; k < data.descriptionSP.length; k++) {
          const rowSP = workSheet.addRow([companyName, '', data.descriptionSP[k]]);
          rowSP.getCell(9).value = data.index[k];
        }
      }

      if (!data.flagSP && data.index.length > 1) {
        // 索引数量大于1
        for (let k = 1; k < data.index.length; k++) {
          const rowSP = workSheet.addRow([companyName, '']);
          rowSP.getCell(9).value = data.index[k];
        }
      }
    }

    // 尾部加上审计结论
    workSheet.addRow([companyName, '']);
    const tail = workSheet.addRow([companyName, '', '二、审计结论：可以接受']);
    tail.getCell(3).font = { bold: true };
    for (let i = 0; i < 3; i++) {
      workSheet.addRow([companyName, '']);
    }
  }
};

interface companyAuditDataItem {
  // 是否有专属说明
  flagSP: boolean;
  // 级别
  levelNum: number;
  // 说明
  description: string;
  // 专属说明
  descriptionSP: string[];
  // 索引
  index: string[];
}
</script>

<style scoped lang="less"></style>
