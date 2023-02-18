/* eslint-disable no-undef */
import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") self.skipWaiting();
});

// 推播設定
// self.addEventListener("push", (event) => {
//   // 後台推播的資料
//   const data = JSON.parse(event.data.text());
//   // 通知的設定、內容等
//   const options = {
//     // 樣式、內容設定
//     body: data.content,
//     icon: "/icon/logo.svg",
//     image: "/icon/logo.svg",
//     badge: "/icon/logo.svg",
//     timestamp: Date.now(),
//     // 操作設定
//     actions: [
//       {
//         action: "confirm",
//         title: "前往",
//       },
//       {
//         action: "cancel",
//         title: "取消",
//       },
//     ],
//     data,
//     // 行為設定
//     // tag: '<String>',
//     // requireInteraction: '<boolean>',
//     // renotify: '<Boolean>',
//     // sound: '<URL String>',
//     // silent: '<Boolean>',
//   };
//   // 進行推播
//   event.waitUntil(self.registration.showNotification(data.title, options));
// });

// // 通知點擊行為
// self.addEventListener("notificationclick", (event) => {
//   event.waitUntil(
//     clients.matchAll({ type: "window" }).then((clientsArr) => {
//       // 如果使用者有開啟頁面，就跳轉頁面，並 focus 此網頁
//       // 如果使用者沒有開啟頁面，就開啟網頁並 focus
//       function isOpenWeb(addUrl) {
//         const hadWindowToFocus = clientsArr.some((windowClient) => {
//           const url = windowClient.url;
//           if (url.includes(self.origin)) {
//             // 跳轉頁面
//             windowClient.navigate(self.origin + addUrl);
//             windowClient.focus();
//             return true;
//           } else {
//             return false;
//           }
//         });
//         if (!hadWindowToFocus) {
//           clients
//             .openWindow(self.origin)
//             .then((windowClient) =>
//               windowClient ? windowClient.focus() : null
//             );
//         }
//         event.notification.close();
//       }

//       // 判斷使用者動作為何
//       if (!event.action) {
//         // 直接點在通知上 (通常不做任何處理)
//         console.log("使用者點擊畫面");
//         return;
//       }
//       // 點在按鈕上，用 action 當 key 判斷
//       switch (event.action) {
//         case "confirm":
//           console.log("使用者點擊確認");
//           isOpenWeb("/test");
//           break;
//         case "cancel":
//           console.log("使用者點擊取消");
//           isOpenWeb("/");
//           break;
//         default:
//           console.log(`未定義 Action: '${event.action}'`);
//           break;
//       }
//     })
//   );
// });

cleanupOutdatedCaches();
precacheAndRoute(self.__WB_MANIFEST);
