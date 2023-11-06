<template>
  <div>
    <announcement />
    <top-panel class="row-container" />
    <middle-chart class="row-container" />
    <!-- <rank-list class="row-container" /> -->
    <!-- <output-overview class="row-container" /> -->
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
import TopPanel from './components/TopPanel.vue';
</script>

<style scoped>
.row-container:not(:last-child) {
  margin-bottom: 16px;
}
</style>
