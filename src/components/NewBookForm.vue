<script setup lang="ts" >
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref, computed, watch, reactive } from 'vue'
import Button from '../components/Button.vue'


const emit = defineEmits(['close','addBook'])


const bookInfo = ref({
    name: '',
    author: '',
    image: 'paste the url link here',
    reviewScore: null,
    id: 0
})

const clear = () => {
    bookInfo.value.name = ''
    bookInfo.value.author = ''
    bookInfo.value.reviewScore = null

}

const saveBook = () => {
    bookInfo.value.reviewScore = parseInt(bookInfo.value?.reviewScore)
    emit ('addBook', bookInfo.value)


}

const close = () => {
    emit('close')
}

</script>

<template>
   
<div class="flex justify-end" style="height:86vh;position:absolute; right:0px; top:50px">
    <div class="border-2 border-slate-500 pt-1" style="background-color:grey; width:30%; min-width: 300px; border-top-left-radius:20px;border-bottom-left-radius:20px;">
        <div class="text-end pr-3">
            <button @click="close()">
                <font-awesome-icon :icon="['fas', 'xmark']" />
            </button>
        </div>
        <div class="flex justify-between p-4">
            <div class="width:15%">nome</div>
            <div class="width:15%">
                <input v-model="bookInfo.name"></input>
            </div>
        </div>
        <div class="flex justify-between  p-4">
            <div class="width:15%">author</div>
            <div class="width:15%">
                <input v-model="bookInfo.author"></input>
            </div>
        </div>
        <div class="flex justify-between  p-4">
            <div class="width:15%">score </div>
          
            <div class="width:15%">
                <input v-model="bookInfo.reviewScore"></input>
               
            </div>
        </div>
        <div class="flex justify-between p-4">
            <div class="width:15%">URL</div>
            <div class="width:15%">
                <input v-model="bookInfo.image"/>
            </div>
        </div>
        <div class="flex items-end justify-between" style="height: -webkit-fill-available; margin-bottom: 268px">
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



</style>