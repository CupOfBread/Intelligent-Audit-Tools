<template>
  <t-card title="软件信息" class="row-container">
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
import { getTauriVersion, getVersion } from '@tauri-apps/api/app';
import axios from 'axios';
import { ref } from 'vue';

import { request } from '@/utils/request';

const stripe = ref(true);
const bordered = ref(true);
const hover = ref(false);
const tableLayout = ref(false);
const showHeader = ref(true);
const data = ref([]);
const columns = ref([
  { colKey: 'name', title: '参数名' },
  { colKey: 'value', title: '版本号', ellipsis: true },
]);

const getSysInfo = async () => {
  const appVersion = await getVersion();
  const tauriVersion = await getTauriVersion();

  data.value.push({ name: 'Intelligent Audit Tools', value: `Ver. ${appVersion} ` });
  data.value.push({ name: 'Tauri', value: tauriVersion });
};
getSysInfo();
</script>

<style lang="less" scoped></style>
