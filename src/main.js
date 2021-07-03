import Vue from "vue";
import "../public/index.css";
import App from "./App.vue";
import QRCode from "vue-qrcode-component";
import TwitterFeed from "vuejs-twitter-feed";

Vue.use(TwitterFeed);

Vue.config.productionTip = false;
Vue.component("qr-code", QRCode);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
