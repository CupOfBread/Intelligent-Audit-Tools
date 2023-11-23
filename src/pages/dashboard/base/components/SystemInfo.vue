<template>
  <t-card title="系统信息" class="row-container">
    <t-table
      row-key="index"
      :data="data"
      :columns="columns"
      :stripe="stripe"
      :bordered="bordered"
      :hover="hover"
      :table-layout="tableLayout ? 'auto' : 'fixed'"
      :show-header="showHeader"
      cell-empty-content="-"
      resizable
      lazy-load
    >
    </t-table>
  </t-card>
</template>

<script lang="ts" setup>
import { arch, platform, type, version } from '@tauri-apps/api/os';
import { ref } from 'vue';

const stripe = ref(true);
const bordered = ref(true);
const hover = ref(false);
const tableLayout = ref(false);
const showHeader = ref(true);
const data = ref([]);
const columns = ref([
  { colKey: 'name', title: '参数名' },
  { colKey: 'value', title: '参数值', ellipsis: true },
]);

const getSysInfo = async () => {
  const archName = await arch();
  const platformName = await platform();
  const osType = await type();
  const osVersion = await version();
  data.value.push({ name: 'CPU架构', value: archName });
  data.value.push({ name: '平台名称', value: platformName });
  data.value.push({ name: '系统类型', value: osType });
  data.value.push({ name: '系统版本', value: osVersion });
};
getSysInfo();
</script>

<style lang="less" scoped></style>
