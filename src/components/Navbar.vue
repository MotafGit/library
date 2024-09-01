<script setup lang="ts">
import { ref, computed, watch } from 'vue'
 import { RouterLink, RouterView } from 'vue-router'

const inactiveButtonColors = ref ('red');
const navbarPosition = ref ('relative');
const navbarBgColor = ref ('grey');
const borderNav = ref ('1 px solid black')
const windowY = ref (window.scrollY)
const changePos = ref (0);


const interval = setInterval (myTeste,50)

function myTeste () {
    if (window.scrollY > 1){
        navbarPosition.value = 'fixed'
        inactiveButtonColors.value = 'white'
        navbarBgColor.value = '#b9b9b9'
        changePos.value = 0
    }
    else{
        navbarPosition.value = 'fixed'
        inactiveButtonColors.value = 'black'
        navbarBgColor.value = 'transparent'
        changePos.value = 0
        
    }
}







</script>

<template>

        <div class="h-16 bg-blue-400 flex flex-row w-full" :style="{position:navbarPosition, backgroundColor: navbarBgColor, top: changePos + 'px', zIndex:'600'} ">
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
                <div>button3</div>
                <div>button4</div>
            </div>
        </div>

</template>


<style>

</style>