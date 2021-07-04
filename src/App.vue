
<template>
  <div class="bg-gray-100 h-full">
    <QrCodes />
    <TwitterFeed/>
    <Footer />
  </div>

</template>

 <script>
import QrCodes from "./components/QrCodes.vue";
import  Footer from "./components/Footer.vue"
 import TwitterFeed from "./components/TwitterFeed.vue"



export default {
  name: 'App',
  components: {
    QrCodes,
    Footer,
    TwitterFeed
  }
}
</script>

