<template>
  <p>111</p>
  <button
    class="border border-black"
    @click="
      () => {
        $router.push('/test');
      }
    "
  >
    go
  </button>
  <p class="bg-yellow-100 text-red-300">aaa</p>
</template>
<script>
export default {
  name: "Home",

  data() {
    return {};
  },
  watch: {},

  methods: {},
};
</script>
