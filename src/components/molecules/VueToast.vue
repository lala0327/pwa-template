<template>
  <div
    class="mb-2 flex w-max max-w-full overflow-hidden rounded-lg bg-white shadow-md"
  >
    <!-- 左邊 Icon 顯示 -->
    <div class="center w-12" :class="classes[variant].bg">
      <font-awesome-icon
        :icon="classes[variant].icon"
        class="text-xl text-white"
      />
    </div>

    <!-- 右邊文字資訊 -->
    <div class="center px-3 py-2">
      <!-- Title -->
      <div>
        <span class="font-semibold capitalize" :class="classes[variant].text">
          {{ title || variant }}
        </span>
        <p class="text-sm opacity-75">{{ text }}</p>
      </div>

      <!-- action & dismiss-->
      <div v-if="action" class="center ml-3">
        <VueButton variant="link" class="mx-2" @click="action">
          <font-awesome-icon icon="check" class="text-green-500" />
        </VueButton>
        <VueButton variant="link" class="mx-2" @click="dismiss">
          <font-awesome-icon icon="times" class="text-red-500" />
        </VueButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import VueButton from "../atoms/VueButton.vue";

defineProps({
  variant: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  action: {
    type: String,
    default: "",
  },
  dismiss: {
    type: String,
    default: "",
  },
});
</script>

<script>
export default {
  name: "VueToast",

  data() {
    return {
      classes: {
        success: {
          bg: "bg-orange-500",
          text: "text-orange-500",
          icon: "check-circle",
        },
        info: {
          bg: "bg-orange-300",
          text: "text-orange-300",
          icon: "info-circle",
        },
        warning: {
          bg: "bg-yellow-400",
          text: "text-yellow-400",
          icon: "exclamation-circle",
        },
        error: {
          bg: "bg-red-500",
          text: "text-primary-500",
          icon: "times-circle",
        },
      },
    };
  },
};
</script>
