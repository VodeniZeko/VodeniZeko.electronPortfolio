
<template>
    <div id="app" class="bg-gray-100 h-screen">
      <ScreenShot :onClick="exportPDF" :clicked="isClicked"/>
      <QrCodes />
      <TwitterFeed/>
      <Footer />
    </div>
</template>


 <script>

import QrCodes from "./components/QrCodes.vue";
import  Footer from "./components/Footer.vue"
import TwitterFeed from "./components/TwitterFeed.vue"
import ScreenShot from "./components/ScreenShoot.vue"

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


export default {
  
  name: 'App',
  components: {
    QrCodes,
    Footer,
    TwitterFeed,
    ScreenShot
  },
  data() {
      return {
          isClicked:false
      }
        },
      methods: {
        exportPDF(){
         window.html2canvas = html2canvas;
         var doc = new jsPDF("p","pt","a1");
         doc. html(document.querySelector("#app"),{
           callback:function(pdf){
             pdf.save('screenshoot.pdf')
           }
         });
         this.isClicked=true;
        },
    },
  }

</script>

