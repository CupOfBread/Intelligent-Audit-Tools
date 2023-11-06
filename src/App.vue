<template>
  <t-config-provider :global-config="getComponentsLocale">
    <router-view :key="locale" :class="[mode]"
  /></t-config-provider>
  <t-dialog
    :visible="showExitDialog"
    :close-btn="false"
    :header="false"
    :on-cancel="closeExitDialog"
    :on-confirm="exitApplication"
  >
    <p>退出应用？</p>
  </t-dialog>
</template>
<script setup lang="ts">
import { emit, listen } from '@tauri-apps/api/event';
import { exit } from '@tauri-apps/api/process';
import { computed, onMounted, ref } from 'vue';

import { useLocale } from '@/locales/useLocale';
import { useSettingStore, useUserStore } from '@/store';

const store = useSettingStore();

const mode = computed(() => {
  return store.displayMode;
});

const { getComponentsLocale, locale } = useLocale();

const showExitDialog = ref(false);
const userStore = useUserStore();

onMounted(() => {
  const unlisten = listen<string>('exit', (event) => {
    showExitDialog.value = true;
  });
});
const closeExitDialog = () => {
  showExitDialog.value = false;
};
const exitApplication = async () => {
  if (localStorage.getItem('isRememberMe') !== 'true') {
    userStore.logout();
  }
  await exit(1);
};
</script>
<style lang="less" scoped>
#nprogress .bar {
  background: var(--td-brand-color) !important;
}
</style>
