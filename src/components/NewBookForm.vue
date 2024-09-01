<script setup lang="ts" >
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, computed, watch, reactive } from 'vue'
import Button from '../components/Button.vue'


const emit = defineEmits(['close','addBook'])


const bookInfo = ref({
    name: '',
    author: '',
    image: '',
    reviewScore: null,
    intro: '',
    genre: '',
    id: 0
})

const selectedOption = ref ('');
const filterOptions = ref([
    { text: 'Epic Fantasy', value: 1 },
    { text: 'Comedy', value: 2 },
    { text: 'Romance', value: 3 }
])


const clear = () => {
    bookInfo.value.name = ''
    bookInfo.value.author = ''
    bookInfo.value.reviewScore = null

}

const saveBook = () => {
    bookInfo.value.reviewScore = parseInt(bookInfo.value?.reviewScore)
    bookInfo.value.genre = selectedOption.value
    console.log(bookInfo.value)
    emit ('addBook', bookInfo.value)


}

const close = () => {
    emit('close')
}

</script>

<template>
   
<div class="flex justify-end" style="height:80%;position:fixed; right:0px; top:130px;width:40%;">
    <div class="flex flex-col border-2 border-slate-500 pt-1 w-full" style="background-color: #d5d5d5;min-width: 300px;max-width:600px; border-top-left-radius:20px;border-bottom-left-radius:20px;">
        <div class="text-end pr-3">
            <button @click="close()">
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </button>
        </div>

        <div class="flex justify-between p-4">
            <div style="min-width:70px" class="pr-2">nome</div>
            <div style="" class="flex-grow newBookDivInput">
                <input class="w-full newBookInput" v-model="bookInfo.name"></input>
            </div>
        </div>

        <div class="flex justify-between p-4">
            <div style="min-width:70px" class="pr-2">Autor</div>
            <div style="" class="flex-grow newBookDivInput">
                <input class="w-full newBookInput" v-model="bookInfo.author"></input>
            </div>
        </div>
        <div class="flex justify-between p-4">
            <div style="min-width:70px" class="pr-2">Intro</div>
            <div style="" class="flex-grow newBookDivInput">
                <input class="w-full newBookInput" v-model="bookInfo.intro"></input>
            </div>
        </div>
        <div class="flex justify-between p-4">
            <div style="min-width:70px" class="pr-2">Genre</div>
            <div style="" class="flex-grow newBookDivInput">
                <!-- <input class="w-full newBookInput" v-model="bookInfo.genre"></input> -->
                <select v-model="selectedOption" class="w-full newBookInput" style="height:30px;">
                <option v-for="option in filterOptions" :value="option.text">
                  {{ option.text }}
                </option>
              </select>
            </div>
        </div>

        <div class="flex justify-between p-4">
            <div style="min-width:70px" class="pr-2">Score</div>
            <div style="" class="flex-grow newBookDivInput">
                <input class="w-full newBookInput" v-model="bookInfo.reviewScore"></input>
            </div>
        </div>

        <div class="flex justify-between p-4">
            <div style="min-width:70px" class="pr-2">url</div>
            <div style="" class="flex-grow newBookDivInput">
                <input class="w-full newBookInput" v-model="bookInfo.image"></input>
            </div>
        </div>

        

        
        
        <div class="flex grow items-end justify-between pb-2" style="">
            <div class="flex pl-5" style="">
                    <Button @click="close()" message="Close"></Button>
                </div>
                <div class="flex items-end justify-end pr-5" style="">
                    <div class="pr-2">
                        <Button message="Clear" @click="clear()"></Button>
                    </div>
                    <div>
                        <Button message="Save" @click="saveBook()"></Button>
                    </div>
                 
                </div>
            </div>
        </div>
        


    
    
</div>

</template>


<style>



.newBookInput{
    border-radius:20px;
    padding-left:20px;
}
@media screen and (max-width: 600px) {
    .newBookInput{
        padding-left:5px;
    }

    /* .bookForm{
        
    } */
    
}
.newBookInput:focus-visible{
    outline:none;
}

</style>