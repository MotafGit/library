<script setup lang="ts">
import { ref, computed, watch } from 'vue'
 import { RouterLink, RouterView } from 'vue-router'

const inactiveButtonColors = ref ('red');
const navbarPosition = ref ('relative');
const navbarBgColor = ref ('grey');
const windowY = ref (window.scrollY)
const changePos = ref (0);


const interval = setInterval (myTeste,50)

function myTeste () {
    if (window.scrollY > 20){
        navbarPosition.value = 'sticky'
        inactiveButtonColors.value = 'blue'
        navbarBgColor.value = 'green'
        changePos.value = 0
    }
    else{
        navbarPosition.value = 'relative'
        inactiveButtonColors.value = 'red'
        navbarBgColor.value = 'grey'
        changePos.value = 0
    }
}


watch(windowY, (newValue, oldValue) => {

})




</script>

<template>

        <div class="h-16 bg-blue-400 flex flex-row w-full" :style="{position:navbarPosition, backgroundColor: navbarBgColor, top: changePos + 'px'} ">
            <div>
                LOGO
            </div>
            <div class="flex justify-around w-full self-center" :style="{color: inactiveButtonColors}">
                <div>
                    <button>
                        <RouterLink to="/">Home Page</RouterLink>
                    </button>
                </div>
                <div>
                    <button>
                        <RouterLink to="/books">Books</RouterLink>
                    </button>
                </div>
                <div>butao3</div>
                <div>butao4</div>
            </div>
        </div>

</template>


<style>

</style>