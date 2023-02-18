<template>
  <div class="hidden"></div>
</template>

<script setup>
import { useRegisterSW } from "virtual:pwa-register/vue";
import { watch } from "vue";
import { useModal } from "vue-final-modal";

import store from "./../../store";
const { needRefresh, updateServiceWorker } = useRegisterSW();

// 若有可進行的更新，彈出更新提示
watch(
  needRefresh,
  (value) => {
    if (value)
      store.dispatch("fireToast", {
        id: "pwaReloadMsg",
        title: "檢測到有可更新的版本",
        text: "請點擊確認以進行重整更新",
        variant: "info",
        action: updateServiceWorker,
        dismiss: () => store.commit("dismissToast", "pwaReloadMsg"),
      });
  },
  {
    immediate: true,
  }
);
</script>

<script>
import { IOSPWAModal } from "./../atoms";
export default {
  name: "InitPWA",

  data: () => ({
    // 自定義 PWA 安裝提示
    deferredPrompt: null,
  }),

  watch: {
    deferredPrompt: function () {
      if (this.deferredPrompt) {
        this.$store.dispatch("fireToast", {
          id: "pwaInstallationMsg",
          title: "安裝網頁APP到設備上",
          text: "可加速網頁開啟, 並提供離線操作",
          variant: "info",
          action: () => {
            this.deferredPrompt.prompt();
            this.$store.commit("dismissToast", "pwaInstallationMsg");
          },
        });
      }
    },
  },

  created() {
    if (
      ("standalone" in window.navigator && window.navigator.standalone) ||
      window.matchMedia("(display-mode: standalone)").matches
    ) {
      // "standalone" in window.navigator && window.navigator.standalone IOS桌面圖示啟動
      // window.matchMedia("(display-mode: standalone)").matches Android桌面圖示啟動
    } else {
      const u = navigator.userAgent;
      const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //判斷484 IOS 裝置
      if (isiOS) {
        //IOS

        const { open } = useModal({
          component: IOSPWAModal,
        });
        open();
      } else {
        // Android
        window.addEventListener("beforeinstallprompt", (e) => {
          e.preventDefault();
          this.deferredPrompt = e;
        });
        window.addEventListener("appinstalled", () => {
          this.deferredPrompt = null;
        });
      }
    }
  },
};
</script>
