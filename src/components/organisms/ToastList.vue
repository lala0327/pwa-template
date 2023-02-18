<template>
  <div
    class="fixed bottom-14 left-1/2 flex max-w-max -translate-x-1/2 flex-col items-center justify-center"
  >
    <transition-group
      name="toast"
      enter-active-class="duration-300"
      leave-active-class="duration-300"
      enter-from-class="-translate-x-8 opacity-0"
      leave-to-class="translate-x-8 opacity-0"
    >
      <VueToast
        v-for="item in getToasts"
        :key="item.id"
        :variant="item.variant"
        :title="item.title"
        :text="item.text"
        :action="item.action"
        :dismiss="item.dismiss"
      />
    </transition-group>
  </div>
</template>

<script setup>
import { VueToast } from "../molecules";
defineProps({
  array: {
    type: Array,
    default: () => [],
  },
});
</script>

<script>
export default {
  name: "ToastList",

  computed: {
    getToasts() {
      return this.array.map((row) => ({
        ...row,
        variant: row.variant || "success",
      }));
    },
  },
};
</script>
