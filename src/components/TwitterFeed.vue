<template>
  <div class="font-sans container py-2 mx-auto">
      <div class="w-full md:w-3/5 mx-auto p-8 ">
         <div class="shadow-md bg-gray-50">
            <div class="tab w-full overflow-hidden border-t">
               <input class="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs">
               <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-one">
                   <a href="https://twitter.com/ethereum/status/1324087600349696002">@Ethereum - <i class="fab fa-twitter text-blue-500"></i></a>
               </label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p class="p-5"><span class="text-blue-700" >#Ethereum</span> ’s Serenity upgrade, the Beacon Chain’s deposit contract, is live. This begins a transition to <a href="https://twitter.com/hashtag/Eth2?src=hash&amp;ref_src=twsrc%5Etfw"><span class="text-blue-700" >#Eth2</span></a>.<a href="https://twitter.com/ethdotorg?ref_src=twsrc%5Etfw"><span class="text-blue-700" >@EthDotOrg</span></a> Guide: <a class="underline" href="https://t.co/PkKwLnXKS4">https://t.co/PkKwLnXKS4</a><br>Launchpad: <a class="underline" href="https://t.co/CFgFwAs46f">https://t.co/CFgFwAs46f</a><br>Deposit Contract Address: 0x00000000219ab540356cBB839Cbe05303d7705Fa</p>
               </div>
            </div>
            <div class="tab w-full overflow-hidden border-t">
               <input class="absolute opacity-0" id="tab-multi-two" type="checkbox" name="tabs">
               <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-two">
                   <a href="https://twitter.com/BBCAfrica/status/1411316804220239873?ref_src=twsrc%5Etfw">@BBCAfrica -<i class="fab fa-twitter text-blue-500"></i></a>
                   </label>
               <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal">
                  <p class="p-5">Earlier this week we also heard from protesters in Eswatini and why they’re calling for the end of the absolute monarchy <a class="underline" href="https://t.co/I8VDDcrv1S">https://t.co/I8VDDcrv1S</a><br/>
                  <a class="text-blue-700" href="https://twitter.com/BBCAfrica/status/1411316804220239873?ref_src=twsrc%5Etfw">&mdash; BBC News Africa (@BBCAfrica) July 3, 2021</a></p>
               </div>
            </div>

         </div>
      </div>
    
  </div>
</template>

<script>
export default {
  head: {
    name:"TwitterFeed",
  },
}
</script>

<style scoped>
         .tab-content {
         max-height: 0;
         -webkit-transition: max-height .35s;
         -o-transition: max-height .35s;
         transition: max-height .35s;
         }
        
         .tab input:checked ~ .tab-content {
         max-height: 100vh;
         }
       
         .tab input:checked + label{
         /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/
         font-size: 1.25rem; /*.text-xl*/
         padding: 1.25rem; /*.p-5*/
         border-left-width: 2px; /*.border-l-2*/
         border-color: #6574cd; /*.border-indigo*/
         background-color: #f8fafc; /*.bg-gray-100 */
         color: #6574cd; /*.text-indigo*/
         }
         
         .tab label::after {
         float:right;
         right: 0;
         top: 0;
         display: block;
         width: 1.5em;
         height: 1.5em;
         line-height: 1.5;
         font-size: 1.25rem;
         text-align: center;
         -webkit-transition: all .35s;
         -o-transition: all .35s;
         transition: all .35s;
         }
         
         .tab input[type=checkbox] + label::after {
         content: "+";
         font-weight:bold; 
         border-width: 1px; 
         border-radius: 9999px; 
         border-color: #b8c2cc;
         }
         .tab input[type=radio] + label::after {
         content: "\25BE";
         font-weight:bold; 
         border-width: 1px; 
         border-radius: 9999px; 
         border-color: #b8c2cc; 
         }
        
         .tab input[type=checkbox]:checked + label::after {
         transform: rotate(315deg);
         background-color: #6574cd; 
         color: #f8fafc;
         }
         .tab input[type=radio]:checked + label::after {
         transform: rotateX(180deg);
         background-color: #6574cd; 
         color: #f8fafc; 
         }

</style>