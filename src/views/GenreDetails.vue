<script lang="ts" setup>


import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'


import { ref, computed, watch, onUpdated, inject, watchEffect, shallowRef } from 'vue'


const description = ref ('')

const props = defineProps ({
    booksObj1: {
      type: String,
      required: true
    },
    bList: {
        type:String,
        required: true
    }
})
const booksList = ref ([{}]);
const book = ref ({});
const filteredBooks = ref ([{}]);

const test = () => {
    filteredBooks.value = [];
   // console.log(objArray)
    //console.log(objArray[0])
    //console.log(objArray[0].name)
    console.log(booksList.value)
   // console.log(Object.keys(object1));
    console.log(Object.values(booksList.value))
    Object.values(booksList.value).forEach((element) => {
        console.log(element.genre + " " + book.value.genre)
        if (element.genre === book.value.genre && element.name !== book.value.name){
            filteredBooks.value.push(element);
        }
    })
    console.log(filteredBooks.value)
   // objArray.forEach((element) => console.log(element) )
}

watchEffect(() => {
    book.value = JSON.parse(props.booksObj1);
    console.log(book.value)
    booksList.value = JSON.parse(props.bList);
   // console.log(booksList.value);
    test();
});





const genresDescription = ref ([
    {
        type: "Epic Fantasy",
        description: "Epic Fantasy is a subgenre of fantasy that is set in invented or parallel world. It is most commonly considered to be the same genre as High Fantasy, since they share many of the same elements, but Epic Fantasy takes the story even farther, in a bigger and more epic way (e.g. the stakes are greater; the land/world is in peril; a great evil threatens the world; the conflict shakes all who dwell in the world of the story). Epic Fantasy became more famous through the works of such as: Brandon Sanderson, Brent Weeks, Robert Jordan, Robin Hobb, Patrick Rothfuss, Scott Lynch, Joe Abercrombie, Terry Brooks, Raymond E. Feist, Tad Williams, George R.R. Martin, Steven Erikson, and more; though it's origins come long before, from J.R.R. Tolkien's The Lord of the Rings.",
    },
    {
        type : "Romance",
        description: "According to the Romance Writers of America, Two basic elements comprise every romance novel: a central love story and an emotionally-satisfying and optimistic ending. Both the conflict and the climax of the novel should be directly related to that core theme of developing a romantic relationship, although the novel can also contain subplots that do not specifically relate to the main characters' romantic love. Other definitions of a romance novel may be broader, including other plots and endings or more than two people, or narrower, restricting the types of romances or conflicts.",
    },
    {
        type : "Comedy",
        description: "In a modern sense, comedy (from the Greek: κωμῳδία, kōmōidía) refers to any discourse or work generally intended to be humorous or to amuse by inducing laughter, especially in theatre, television, film and stand-up comedy. The origins of the term are found in Ancient Greece.",
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

    const found = genresDescription.value.find(( element) => element.type === book.value.genre)
    return found?.description
})

watch(book.value, (currentValue, oldValue) => {
   // books.forEach((element) => filteredBooks.value.push(element) )
})

const verifica = () => {
    // filteredBooks.value.forEach((el) => console.log (el))
}




</script>


<template>

    <Navbar style="borderBottom: 1px solid #ebebeb"></Navbar>

    <div class ="firstDiv" style="position:relative;top:80px;">
        <div class="pr-5 pl-5 pt-10">
            {{ genreDescr }}
        </div>
        <div class="pt-5 pl-5">
            Others {{ book.genre }} books you might like
        </div>
        <div class="pt-5 grid md:grid-cols-3 sm:grid grid-cols-1 justify-items-center gap-6">
            <div v-for="filtered in filteredBooks" class="bookFromGrid" >

                <router-link 
                    :to="{
                        name: 'ShowBookDetails', 
                        params: { 
                            booksObj:  JSON.stringify({...filtered}),
                            bList: bList
                        } }">
                    <img class="" style="width:inherit; height:-webkit-fill-available" :src= filtered.image />

                </router-link> 

            </div>
    </div>

        <div  v-for="(genres, index) in genresDescription" class="ml-20 flex flex-row">
            <div v-for="child in genres.bookList" class="pt-5 grid md:grid-cols-3 sm:grid grid-cols-1 justify-items-center gap-6" >
                <div v-if="genres.type === book.genre" >
                    <div v-if="child.name !== book.name" class="bookFromGrid">
                        <button @click="console.log(book)">teste</button>

                        <router-link 
                        :to="{
                            name: 'ShowBookDetails', 
                            params: { 
                                booksObj:  JSON.stringify({book}),
                                bList: bList
                                    
                                
                            } }">
                        <img class="" style="width:inherit; height:inherit" :src= child.image />

                            </router-link> 
                    </div>
                
                </div>
            </div>



        </div> 
        <div style="" class="footerClass">
        <Footer></Footer>
    </div>
    </div>




    





</template>

<style>


.bookFromGrid{
    height:250px;
    width:180px;
}


</style>