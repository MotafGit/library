<script lang="ts" setup>


import Navbar from '../components/Navbar.vue'
import { ref, computed, watch, onUpdated, inject } from 'vue'


const description = ref ('')
const injected = inject('injected')

const props = defineProps ({
    genre: {
      type: String,
      required: true
    },
})





const genresDescription = ref ([
    {
        type: "Epic Fantasy",
        description: "Epic Fantasy is a subgenre of fantasy that is set in invented or parallel world. It is most commonly considered to be the same genre as High Fantasy, since they share many of the same elements, but Epic Fantasy takes the story even farther, in a bigger and more epic way (e.g. the stakes are greater; the land/world is in peril; a great evil threatens the world; the conflict shakes all who dwell in the world of the story). Epic Fantasy became more famous through the works of such as: Brandon Sanderson, Brent Weeks, Robert Jordan, Robin Hobb, Patrick Rothfuss, Scott Lynch, Joe Abercrombie, Terry Brooks, Raymond E. Feist, Tad Williams, George R.R. Martin, Steven Erikson, and more; though it's origins come long before, from J.R.R. Tolkien's The Lord of the Rings.",
        bookList: [
            {
                name: "Harry Potter",
                image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780439358071_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
            },
            {
                name: "Doors of stone",
                image: "https://images.thedirect.com/media/photos/doors_of_stone.jpg",
            },
            {
                name: "Game of Thrones",
                image: "https://img.wook.pt/images/a-game-of-thrones-george-r-r-martin/MXwxMTIwMTQ3Nnw2NzcyMzEwfDE1NTUwODYzMDEwMDB8d2VicA==/550x",

            },
            {
                name: "The Eye Of The World",
                image: "https://m.media-amazon.com/images/I/418q+-8vmxL._SY445_SX342_.jpg",

            },
        ],
    },
    {
        type : "Romance",
        description: "According to the Romance Writers of America, Two basic elements comprise every romance novel: a central love story and an emotionally-satisfying and optimistic ending. Both the conflict and the climax of the novel should be directly related to that core theme of developing a romantic relationship, although the novel can also contain subplots that do not specifically relate to the main characters' romantic love. Other definitions of a romance novel may be broader, including other plots and endings or more than two people, or narrower, restricting the types of romances or conflicts.",
        bookList: [
            {
                name: "The Unknown",
                image: "https://m.media-amazon.com/images/I/31l7Cfuq8oL._SY445_SX342_.jpg",
            },
        ]
    },
    {
        type : "Comedy",
        description: "In a modern sense, comedy (from the Greek: κωμῳδία, kōmōidía) refers to any discourse or work generally intended to be humorous or to amuse by inducing laughter, especially in theatre, television, film and stand-up comedy. The origins of the term are found in Ancient Greece.",
        bookList: [
            {
                name: "Asterix and Cleopatra",
                image: "https://asterix.com/wp-content/uploads/2017/06/alb06gb.png",

            },
        ]
    },



])

/*
watch(props.genre, (currentValue, oldValue) => {
      console.log(currentValue);
      console.log(oldValue);
    }); 


    watch(() => props.genre, (first, second) => {
      console.log(
        "Watch props.selected function called with args:",
        first,
        second
      );
    }); */

const genreDescr = computed ( () => {

    const found = genresDescription.value.find(( element) => element.type === props.genre)
    return found?.description
})




</script>


<template>

    <Navbar></Navbar>
    <div class="pr-5 pl-5 pt-10">
        {{ genreDescr }}
    </div>
    <div class="pt-5 pl-5">
        Others {{ props.genre }} you might like
    </div>
   
        <div class="pt-5 grid md:grid-cols-3 sm:grid grid-cols-1 justify-items-center gap-6"  v-for="(genres, index) in genresDescription">
             <div v-if="genres.type === props.genre" v-for="child in genres.bookList" class="bookFromGrid">
                
                    <img class="" style="width:inherit; height:inherit" :src= child.image />
              
             </div>



    </div>
    <div>
        <button @click="console.log(injected)">
            show inject
        </button>
    </div>




</template>

<style>


.bookFromGrid{
    height:250px;
    width:180px;
}


</style>



