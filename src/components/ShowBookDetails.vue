<script lang="ts" setup>

import { ref, computed, watch, watchEffect } from 'vue'


import StarRating from 'vue-star-rating'

import Navbar from '../components/Navbar.vue'

const props = defineProps ({

   booksObj:{
    type: String,
    required: true,
   } 
})

const expandIntro = ref (120);
const overflowIntro = ref ('hidden');
const hideButton = ref (false)
const marginIntro = ref (0)


const books = ref ({})

const starStyle = {
            fullStarColor: '#ed8a19',
            emptyStarColor: '#737373',
            starWidth: 27,
            starHeight: 27
        }


const addWishList = () => {
    console.log ('por fazer')
}

const addToBasket = () => {
    console.log ("por fazer")
}


watchEffect(() => {
    books.value = JSON.parse(props.booksObj)
});



</script>

<template>


       <Navbar></Navbar>
       <div>
            <div class="booksView" style="padding-top:45px">
                <div class="flex flex-col items-end leftSide w-1/3" style="">
                    <div class="flex flex-col items-center"> 
                    <div class="bookCover">
                        <img style="width:inherit; height:inherit" :src= books.image />
                    </div>
                    <div class="addToWish pt-2 text-center" style="width:180px">
                        <button class="wishButton" @click="addWishList()"> Add to my wish list  </button>
                    </div>
                    <div class="buyBook mt-2 text-center" style="width:180px">
                        <button class="addBasketButton" @click="addToBasket()"> Add to Basket</button>
                    </div>
                    <div class="starRating pt-2">
                        <star-rating :rating="parseInt(books.reviewScore)" :starStyle="starStyle"></star-rating>
                    </div>
                </div>
            </div>
                <div class="flex flex-col  ml-20 rightSide w-1/2" style="">
                    <div class="font-medium text-5xl"> {{ books.name}}</div>
                    <div class="pt-5 text-2xl" style="font-weight:600"> By: {{books.author}}</div>
                    <div v-if="hideButton == false" class="intro pt-5" :style="{height: expandIntro + 'px', overflow: overflowIntro}"> {{books.intro}}</div>
                    <div v-if="hideButton == false" @click="expandIntro = 200; overflowIntro = 'unset'; hideButton = true; marginIntro= 70 " class="pl-5, font-medium">
                        <button>
                             Show more <span><font-awesome-icon :icon="['fas', 'angles-down']" /></span>
                        </button>
                    </div>
                    <div v-if="hideButton == true" class="pt-4 font-semibold"> {{books.intro}} </div>
                    <div class="pt-4" >
                        Genres: 
                        <router-link
                        :to="{
                            name: 'GenreDetails',
                            params: {
                            booksObj1: props.booksObj,
                         } }" >
                        <span class="font-medium"> {{  books.genre }} </span>
                        </router-link>
                    </div>


                        
                </div>
            </div>
       </div>
       <div>
     
       </div>

</template>

<style>

.bookCover{
    height:333px;
    width:220px;
}

.wishButton{
    background-color: rgb(0, 175, 0);
    border-radius: 20px;
    padding:4px;
    padding-left: 20px;
    padding-right: 20px;
    width: inherit;

}
.wishButton:hover{
    color:white;
    background-color: rgb(8, 131, 8);
}

.addBasketButton{
    background-color: rgb(0, 140, 255);
    width: inherit;
    border-radius: 20px;
    padding:4px;
    padding-left: 20px;
    padding-right: 20px;
}

.addBasketButton:hover{
    color:white;
    background-color: rgb(9, 91, 158);
}

.intro{
    font-weight:500;
}

.booksView{
    display: flex;
    flex-direction: row;
}

@media screen and (max-width: 800px) {
    .booksView{
        display: flex;
        flex-direction: column;
        align-items: center;
        
    }

    .leftSide{
        width: 100%;
        align-items: center;


    }

    .rightSide{
        width: 100%;
        align-items: center;
        margin-left:0px;

    }
    
}

@media screen and (max-width: 600px) {
    .rightSide{
        width: 100%;
        padding-left:2%;
        padding-right:2%;
        text-align: left;
    }
}



</style>


