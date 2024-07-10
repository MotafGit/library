<script setup lang="ts">
import './style.css'
import Navbar from './components/Navbar.vue'
import UnderNav from './components/UnderNav.vue'
import MainPageBody from './components/MainPageBody.vue'
import { ref, computed, watch } from 'vue'

const abc = ref (window.scrollY)

const testaScroll = () => {
  console.log (abc.value)
}



// function abola () =>   {


</script>

<template>
  <div  >
    <Navbar></Navbar>


  </div>
 
</template> 

<style scoped>

.teste{
  color:blue;
}

</style>
