
<template>
    <div class="text-xl font-mono">
      <span  >{{coin.name}}</span>
        <p class="py-2">{{coin.price}}</p>
    <qr-code 
            :text=data
            :size=size
            color="#000000"
            bg-color="#ffffff" 
            error-level="L">
        </qr-code>
  </div>

</template>
 
<script>
export default {
    name: "Code",
    props: ["coin", "index"],
    data(){
        console.log(this.coin.name, `we made it yay`)
        return {
            size: Number(150),
            data: `Name: ${this.coin.name} 
Price: ${this.coin.price}`
        }
        
    }
}
</script>

