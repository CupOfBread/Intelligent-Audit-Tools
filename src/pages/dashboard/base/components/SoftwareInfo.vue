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
      :loading="loading"
      cell-empty-content="-"
      resizable
      lazy-load
    >
    </t-table>
  </t-card>
</template>

<script lang="ts" setup>
import { getTauriVersion, getVersion } from '@tauri-apps/api/app';
import { getClient } from '@tauri-apps/api/http';
import axios from 'axios';
import { ref } from 'vue';

import { request } from '@/utils/request';

const loading = ref(true);
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

  const client = await getClient();
  const response = await client.request<Updater>({
    method: 'GET',
    url: 'https://github.com/CupOfBread/Intelligent-Audit-Tools/releases/download/updater/update.json',
  });

  const latestVersion = response.data.version;
  if (latestVersion !== appVersion) {
    data.value.push({
      name: 'Intelligent Audit Tools',
      value: `Ver. ${appVersion}      (发现新版本 Ver. ${latestVersion})`,
    });
  } else {
    data.value.push({ name: 'Intelligent Audit Tools', value: `Ver. ${appVersion}` });
  }

  data.value.push({ name: 'Tauri', value: `Ver. ${tauriVersion}` });
  loading.value = false;
};
getSysInfo();

interface Updater {
  version: string;
  notes: string;
  pub_date: Date;
}
</script>

<style lang="less" scoped></style>
