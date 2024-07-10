<script setup lang="ts" >
import { ref, computed, watch, reactive } from 'vue'

defineProps({
  message: String
})

</script>


<template>

    <div >
        <button class="mainButton" style="">{{message}}</button>
    </div>


</template>


<style>

.mainButton{
    padding:2px;
    padding-left: 6px;
    padding-right: 6px;
    color: white;
    border-radius: 20px;
    background-color: rgb(14, 186, 230);
}


.mainButton:hover{
    color:rgb(14, 186, 230);
    background-color: white;
    border-color:rgb(14, 186, 230);
}

</style>