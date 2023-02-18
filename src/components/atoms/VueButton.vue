<template>
  <button
    class="font-black transition-all"
    type="button"
    :class="[
      classes,
      variant === 'default'
        ? {
            'center rounded-md p-3 text-xl shadow-md shadow-slate-400 active:translate-y-0.5 active:shadow-none': true,
            'bg-blue-500 text-white': color === 'blue',
            'bg-slate-100  hover:bg-slate-50': color === 'white',
            'bg-slate-300  hover:bg-slate-200': color === 'slate',
            'bg-red-500 text-white hover:bg-red-400': color === 'red',
            'bg-green-500 text-white hover:bg-green-400': color === 'green',
          }
        : {
            'text-slate-500 hover:text-slate-400': variant === 'link',
          },
    ]"
  >
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  variant: {
    type: String,
    default: "default",
  },
  color: {
    type: String,
    default: "red",
  },
  classes: {
    type: String,
    default: "",
  },
});
</script>

<script>
export default {
  name: "VueButton",
};
</script>
