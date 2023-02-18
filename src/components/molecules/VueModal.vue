<template>
  <!-- 通知視窗排版-->
  <VueFinalModal
    v-slot="{ close }"
    name="Alert"
    v-bind="$attrs"
    classes="flex justify-center items-center flex-col"
    :lock-scroll="false"
    :content-style="{
      width: '90%',
      maxWidth: '450px',
    }"
  >
    <div
      v-motion-pop
      class="center h-full w-full flex-col rounded-3xl bg-white"
    >
      <!-- Title -->
      <div
        class="center w-full flex-col rounded-t-3xl bg-red-500 py-3 pt-5 text-2xl font-black text-white"
      >
        {{ title }}
      </div>
      <div class="center w-full flex-col p-5">
        <!-- 內容 -->
        <slot></slot>
        <!-- 按鈕 -->
        <div class="center w-full">
          <VueButton class="w-full" color="slate" @click="close">
            返回
          </VueButton>
          <VueButton
            v-if="isOther"
            class="ml-3 w-full"
            color="red"
            @click="otherFunc"
          >
            {{ otherText }}
          </VueButton>
        </div>
      </div>
    </div>
  </VueFinalModal>
</template>

<script setup>
import { VueButton } from "../atoms";
defineProps({
  title: {
    type: String,
    default: "測試用",
  },
  // 是否有其他按鈕
  isOther: {
    type: Boolean,
    defalut: false,
  },
  // 其他按鈕文字
  otherText: {
    type: String,
    default: "",
  },
  // 其他按鈕的Function
  otherFunc: {
    type: Function,
    default: () => {
      return;
    },
  },
});
</script>

<script>
export default {
  name: "VueModal",
};
</script>
