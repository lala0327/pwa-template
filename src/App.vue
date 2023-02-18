<template>
  <!-- 若有 SW 有檢測到更新，會提示使用者可重整頁面進行更新 -->
  <InitPwa />
  <div class="h-full w-full"><router-view /> <ModalsContainer /></div>

  <!-- 用來顯示 Toast -->
  <ToastList :array="[]" />
</template>

<script setup>
import { ModalsContainer } from "vue-final-modal";

import { InitPwa, ToastList } from "./components/organisms";
</script>
