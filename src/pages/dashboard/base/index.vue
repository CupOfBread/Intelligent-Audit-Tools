<template>
  <div>
    <!-- <top-panel class="row-container" /> -->
    <!-- <middle-chart class="row-container" /> -->
    <!-- <rank-list class="row-container" /> -->
    <!-- <output-overview class="row-container" /> -->
    <t-watermark
      is-repeat
      :removable="false"
      :watermark-content="{ text: 'IA Tools' }"
      :y="120"
      :x="80"
      :width="120"
      :height="60"
      :z-index="1000"
      :alpha="80"
    >
      <announcement />
      <software-info />
      <system-info />
    </t-watermark>
  </div>
</template>

<script lang="ts">
export default {
  name: 'DashboardBase',
};
</script>

<script setup lang="ts">
import { setup } from 'mockjs';
import { onMounted } from 'vue';

import Announcement from './components/Announcement.vue';
import MiddleChart from './components/MiddleChart.vue';
import OutputOverview from './components/OutputOverview.vue';
import RankList from './components/RankList.vue';
import SoftwareInfo from './components/SoftwareInfo.vue';
import SystemInfo from './components/SystemInfo.vue';
import TopPanel from './components/TopPanel.vue';
</script>

<style scoped>
.row-container:not(:last-child) {
  margin-bottom: 16px;
}
</style>
