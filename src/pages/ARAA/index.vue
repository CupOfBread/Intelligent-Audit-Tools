<template>
  <t-card title="账龄分析" description="Account Receivable Age Analysis" header-bordered>
    <template #actions>
      <t-link theme="primary" @click="handleTemplateDownload">模板下载</t-link>
    </template>
    <t-space direction="vertical">
      <t-form colon prevent-submit-default show-error-message>
        <t-form-item label="匹配项" name="name">
          <t-select v-model="matchType" default-value="match3" @change="handleFileSelect">
            <t-option key="apple" label="公司主体、客户" value="match2" />
            <t-option key="banana" label="公司主体、客户、款项性质" value="match3" />
          </t-select>
        </t-form-item>
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
        <t-button v-show="currentYearIds.length > 0" theme="success" size="large" variant="outline" @click="exportExcel"
          >导出分析文件</t-button
        >
      </t-form>
    </t-space>
  </t-card>
</template>

<script setup lang="ts">
import { save } from '@tauri-apps/api/dialog';
import { BaseDirectory, writeBinaryFile } from '@tauri-apps/api/fs';
import { number } from 'echarts/core';
import * as ExcelJS from 'exceljs';
import { last } from 'lodash';
import NProgress from 'nprogress'; // progress bar
import { MessagePlugin } from 'tdesign-vue-next';
import { ref } from 'vue';
import * as XLSX from 'xlsx';

import { headerData } from './headerData';

const files = ref([]);
const lastYear = ref(new Map());
const currentYear = ref(new Map());
const currentYearIds = ref([]);
const result = ref([]);
const matchType = ref('match3');

const generateSheetStyle = (sheet: ExcelJS.Worksheet) => {
  for (let i = 1; i <= 15; i++) {
    sheet.getColumn(i).width = 15;
  }
  sheet.mergeCells('A1:A2');
  sheet.mergeCells('B1:B2');
  sheet.mergeCells('C1:C2');
  sheet.mergeCells('D1:D2');
  sheet.mergeCells('E1:E2');
  sheet.mergeCells('F1:F2');
  sheet.mergeCells('G1:G2');
  sheet.mergeCells('O1:O2');
  sheet.mergeCells('H1:N1');
  sheet.properties.defaultRowHeight = 20;

  for (let i = 1; i <= sheet.rowCount; i++) {
    for (let j = 1; j <= sheet.columnCount; j++) {
      sheet.getCell(i, j).border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
      sheet.getCell(i, j).alignment = { vertical: 'middle', horizontal: 'center' };
    }
  }

  return sheet;
};

const handleTemplateDownload = async () => {
  const savePath = await save({
    title: '保存文件',
    filters: [
      {
        name: 'Excel',
        extensions: ['xlsx', 'xls'],
      },
    ],
    defaultPath: `${BaseDirectory.Desktop}/模板_账龄分析.xlsx`,
  });
  if (!savePath) return;

  const workbook = new ExcelJS.Workbook();
  let sheet = workbook.addWorksheet('上期数');
  sheet.addRows(headerData);
  sheet = generateSheetStyle(sheet);

  let sheet2 = workbook.addWorksheet('本期数');
  sheet2.addRows(headerData);
  sheet2 = generateSheetStyle(sheet2);

  const buffer = await workbook.xlsx.writeBuffer();

  await writeBinaryFile({ contents: buffer, path: savePath });
};

const handleFileSelect = () => {
  handleReset();
};

const handleAnalyse = () => {
  if (files.value.length === 0) return;
  NProgress.start();
  const fileReader = new FileReader();
  const excel = files.value[0].raw;
  fileReader.readAsArrayBuffer(excel);
  fileReader.onload = (e) => {
    dealWithExcel(e.target.result);
  };
  NProgress.done();
};

const exportExcel = async () => {
  if (currentYearIds.value.length === 0) return;
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
  result.value.push(headerData[0]);
  result.value.push(headerData[1]);

  currentYearIds.value.forEach((item) => {
    const data = currentYear.value.get(item);

    for (let i = 0; i < data.length; i++) {
      data[i] = data[i] === 0 ? '' : data[i];
    }

    result.value.push(data);
  });

  // excelJS 导出
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('result');
  sheet.addRows(result.value);
  sheet.getColumn(1).width = 15;
  sheet.getColumn(2).width = 15;
  sheet.getColumn(3).width = 20;
  sheet.getColumn(4).width = 18;
  sheet.getColumn(5).width = 18;
  sheet.getColumn(6).width = 18;
  sheet.getColumn(7).width = 18;
  sheet.getColumn(8).width = 15;
  sheet.getColumn(9).width = 15;
  sheet.getColumn(10).width = 15;
  sheet.getColumn(11).width = 15;
  sheet.getColumn(12).width = 15;
  sheet.getColumn(13).width = 15;
  sheet.getColumn(14).width = 15;
  sheet.getColumn(15).width = 40;
  sheet.mergeCells('A1:A2');
  sheet.mergeCells('B1:B2');
  sheet.mergeCells('C1:C2');
  sheet.mergeCells('D1:D2');
  sheet.mergeCells('E1:E2');
  sheet.mergeCells('F1:F2');
  sheet.mergeCells('G1:G2');
  sheet.mergeCells('O1:O2');
  sheet.mergeCells('H1:N1');
  sheet.properties.defaultRowHeight = 20;
  for (let i = 1; i <= sheet.rowCount; i++) {
    for (let j = 1; j <= sheet.columnCount; j++) {
      sheet.getCell(i, j).border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' },
      };
      if (typeof sheet.getCell(i, j).value === 'number') {
        sheet.getCell(i, j).numFmt = '#,##0.00';
        sheet.getCell(i, j).alignment = { vertical: 'middle', horizontal: 'right' };
      } else if (j === 15 && i > 2) {
        sheet.getCell(i, j).alignment = { vertical: 'middle', horizontal: 'left' };
      } else {
        sheet.getCell(i, j).alignment = { vertical: 'middle', horizontal: 'center' };
      }
    }
  }

  const buffer = await workbook.xlsx.writeBuffer();

  try {
    await writeBinaryFile({ contents: buffer, path: savePath });
  } catch {
    MessagePlugin.error('请关闭与导出文件重名的表格');
  }

  NProgress.done();
};

const dealWithExcel = (fileArrayBuffer: string | ArrayBuffer) => {
  const wb = XLSX.read(fileArrayBuffer);
  // 读取去年报表====================
  const workSheet = wb.Sheets[wb.SheetNames[0]];
  const data: any[][] = XLSX.utils.sheet_to_json(workSheet, { defval: 0, header: 1 });
  for (let i = 2; i < data.length; i++) {
    if (data[i][0] === 0 || data[i][0] === '') {
      continue;
    }

    let id = data[i][0] + data[i][1];
    if (matchType.value === 'match3') {
      id = data[i][0] + data[i][1] + data[i][2];
    }

    lastYear.value.set(id, data[i]);
  }
  // 读取今年报表====================
  const workSheet2 = wb.Sheets[wb.SheetNames[1]];
  const data2: any[][] = XLSX.utils.sheet_to_json(workSheet2, { defval: 0, header: 1 });
  for (let i = 2; i < data2.length; i++) {
    if (data2[i][0] === 0 || data2[i][0] === '') {
      continue;
    }

    let id = data2[i][0] + data2[i][1];
    if (matchType.value === 'match3') {
      id = data2[i][0] + data2[i][1] + data2[i][2];
    }

    currentYearIds.value.push(id);
    currentYear.value.set(id, data2[i]);
  }

  // 处理数据====================
  for (const [id, val] of currentYear.value) {
    const lastYearData = lastYear.value.get(id);
    const currentYearData = currentYear.value.get(id);

    // 1、去年期末报表没有数据，那么只处理今年
    if (lastYearData == null) {
      if (currentYearData[3] > 0) {
        currentYearData[14] = ' 今年期初数据与去年期末数据不符(去年不存在)';
        currentYear.value.set(id, currentYearData);
        continue;
      }
      const periodChange = currentYearData[4] - currentYearData[5];

      currentYearData[7] = periodChange;
      currentYearData[8] = 0.0;
      currentYearData[9] = 0.0;
      currentYearData[10] = 0.0;
      currentYearData[11] = 0.0;
      currentYearData[12] = 0.0;
      currentYear.value.set(id, currentYearData);

      continue;
    }
    // 2、条件检查：今年的期初数是否能跟去年的期末数对得上；考虑是否重分类
    if (lastYearData[6] !== currentYearData[3]) {
      // console.log(`${lastYearData[6]} ${currentYearData[3]}`);
      currentYearData[14] = ' 今年期初数据与去年期末数据不符';
      continue;
    }
    if (Number(currentYearData[6]) < 0) {
      currentYearData[14] += ' 考虑是否重分类';
      continue;
    }
    // 3、计算出今年增减差额
    let periodChange = currentYearData[4] - currentYearData[5];
    // 4、账龄分析
    for (let i = 0; i < 4; i++) {
      currentYearData[i + 8] = lastYearData[i + 8 - 1];
    }
    currentYearData[12] = lastYearData[11] + lastYearData[12];
    // 5、根据本期增减差额调整账龄
    if (periodChange < 0) {
      for (let i = 0; i < 5; i++) {
        if (currentYearData[5 - i + 7] + periodChange > 0) {
          currentYearData[5 - i + 7] = currentYearData[5 - i + 7] + periodChange;
          periodChange = 0.0;
          break;
        } else {
          periodChange += currentYearData[5 - i + 7];
          currentYearData[5 - i + 7] = 0;
        }
      }
    } else {
      for (let i = 0; i < 5; i++) {
        if (currentYearData[5 - i + 7] < 0) {
          if (currentYearData[5 - i + 7] + periodChange > 0) {
            periodChange += currentYearData[5 - i + 7];
            currentYearData[5 - i + 7] = 0;
          } else {
            currentYearData[5 - i + 7] += periodChange;
            periodChange = 0.0;
            break;
          }
        }
      }
    }

    currentYearData[7] = periodChange;
    let amount = 0.0;
    for (let i = 0; i < 6; i++) {
      amount += currentYearData[i + 7];
    }
    currentYearData[13] = amount;
    currentYear.value.set(id, currentYearData);
  }
};

const handleReset = () => {
  lastYear.value = new Map();
  currentYear.value = new Map();
  currentYearIds.value = [];
  result.value = [];
};
</script>

<style scoped lang="less"></style>
