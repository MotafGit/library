<script setup lang="ts">
import './style.css'
import Navbar from './components/Navbar.vue'



// function abola () =>   {


</script>

<template>

      
        <div>
                <router-view></router-view>
        </div>
</template> 

<style>


#app{
        
        min-height: 100vh;
}

#app .firstDiv{
        min-height: 100vh;
        display: flex;
        flex-direction: column;
}


#app .footerClass{
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        justify-content: flex-end;
        padding-top:20px;
}





</style>
