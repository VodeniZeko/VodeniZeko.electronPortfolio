import Vue from "vue";
import "../public/index.css";
import App from "./App.vue";
import QRCode from "vue-qrcode-component";

Vue.config.productionTip = false;
Vue.component("qr-code", QRCode);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
