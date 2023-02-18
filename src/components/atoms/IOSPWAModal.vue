<template>
  <VueFinalModal
    name="IOSPWAModal"
    classes="flex justify-end items-center flex-col mb-5"
    v-bind="$attrs"
    :lock-scroll="false"
    :content-style="{
      width: '95%',
      maxWidth: '450px',
      backgroundColor: '#fff',
      borderRadius: '10px',
    }"
  >
    <div class="h-full w-full p-2">
      <p class="text-lg font-black">IOS用戶安裝網頁APP到設備上</p>
      <p>
        請點擊下表中
        <font-awesome-icon
          icon="fa-solid fa-arrow-up-from-bracket"
          class="mx-1 text-2xl text-blue-500"
        />
        此圖示，並將此網頁加至首頁即可
      </p>
    </div>
  </VueFinalModal>
</template>
<script>
export default {
  name: "IOSPWAModal",
};
</script>
