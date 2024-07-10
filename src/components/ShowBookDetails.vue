<script lang="ts" setup>

import StarRating from 'vue-dynamic-star-rating';
import Navbar from '../components/Navbar.vue'

const props = defineProps ({
    id: {
      type: String,
      required: true
    },
   name: {
    type: String,
    required: true
   },
   author: {
    type: String,
    required: true
   },
   genre: {
    type: String,
    required: true
   },
   intro: {
    type: String,
    required: true
   },
   image: {
    type: String,
    required: true
   },
   reviewScore: {
    type: Number,
    required: true
   }
  })


const verifica = () => {
    console.log(props?.name)
}

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

</script>

<template>


    <div>
       <Navbar></Navbar>
        <div class="flex" style="padding-top:45px">
            <div class="flex flex-col basis-2/5 items-end">
                <div class="flex flex-col items-center"> 
                <div class="bookCover">
                    <img style="width:inherit; height:inherit" :src= props.image />
                </div>
                <div class="addToWish pt-2 text-center" style="width:180px">
                    <button class="wishButton" @click="addWishList()"> Add to my wish list  </button>
                </div>
                <div class="buyBook mt-2 text-center" style="width:180px">
                    <button class="addBasketButton" @click="addToBasket()"> Add to Basket</button>
                </div>
                <div class="starRating pt-2">
                    <star-rating :rating="props.reviewScore" :starStyle="starStyle"></star-rating>
                </div>
            </div>
        </div>
            <div class="flex flex-col basis-3/4 pl-10">
                <div class="font-medium text-5xl"> {{ props.name}}</div>
                <div class="pt-5 text-2xl"> By: {{props.author}}</div>
                <div class="intro"> {{props.intro}}</div>
            </div>
        </div>
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


</style>