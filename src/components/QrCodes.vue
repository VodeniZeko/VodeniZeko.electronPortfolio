<template>
<div class="flex flex-col items-center text-center w-full">
  <div class="py-2">
      <p class="text-2xl font-mono py-10">{{name}}</p>
      <qr-code 
        :text=name
        :size=size
        color="#34495e"
        bg-color="#ffffff" 
        error-level="L">
      </qr-code>
      </div>
    <div v-if=!loading class="flex space-x-12 py-2" >
        <Code 
          v-for="(crypto, i) in cryptos.length"
          :key="crypto[i]"
          :index="i"
          :coin="cryptos[i]"
        />
    </div>
    <div v-else>
      Loading...
    </div>
</div>
</template>

<script>
import axios from  "axios";
import Code from "./Code.vue";

    export default {
    name: "QrCodes",
   components: {
    Code,
  },
        data() {
            return {
                name:`Edvin Saletovic`,
                size:Number(300),
                loading: false,
                cryptos: [],
            }
        },
        created() {
            this.getDataFromApi()
        },
        methods: {
            getDataFromApi() {
                this.loading = true
                axios.get('https://api.nomics.com/v1/currencies/ticker?key=69770a47c1e50212df8bec38dc4011c9afbbae9c&ids=BURST,ADA,XTZ&interval=1d')
                .then(res => {
                    this.loading = false
                    this.cryptos = res.data
                })
                .catch(err => {
                    this.loading = false
                    console.log(err)
                })
            }

   },
};
</script>

