<script setup lang="ts" >
import { ref, computed, watchEffect, reactive } from 'vue'



const props = defineProps({
  message: String,
  height: String
})


watchEffect(() => {
    console.log(props.height)
});

</script>


<template>

    <div class="" :style="{height:props.height+'px'}">
        <button class="mainButton" :style="{ height:props.height+'px' }">
            <div>
                {{props.message}}
            </div>
        </button>
    </div>


</template>


<style>

.mainButton{

    padding-left: 6px;
    padding-right: 6px;
    color: white;
    border-radius: 20px;
    background-color: rgb(14, 186, 230);
    border-width: 2px;
    border-color:rgb(14, 186, 230);
}


.mainButton:hover{
    color:rgb(14, 186, 230);
    background-color: white;
    border-color:rgb(14, 186, 230);
    
}

</style>