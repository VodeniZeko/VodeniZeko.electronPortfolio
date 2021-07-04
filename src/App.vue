
<template>
  <div>
    <QrCodes />
    <Footer />
  </div>
</template>

 <script>
import QrCodes from "./components/QrCodes.vue";
import  Footer from "./components/Footer.vue"
 



export default {
  name: 'App',
  components: {
    QrCodes,
    Footer
  }
}
</script>

