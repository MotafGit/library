<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import NewBookForm from '@/components/NewBookForm.vue'
import ShowBookDetails from '@/components/ShowBookDetails.vue'
import debounce from 'lodash.debounce'

import StarRating from 'vue-star-rating'
import Button from '../components/Button.vue'


import { ref, computed, watch, onUpdated, provide } from 'vue'
 import { RouterLink, RouterView } from 'vue-router'

const search = ref ('')
const showNewBookMenu = ref (false)
const selectFilter = ref ();
const cleansSearch = () => {

        search.value = "";
    
}

const selectedOption = ref (0);
const filterOptions = ref([
    { text: 'All Genres', value: 0 },
    { text: 'Epic Fantasy', value: 1 },
    { text: 'Comedy', value: 2 },
    { text: 'Romance', value: 3 }
])

const filterByName = ref ([{}])
const filteredBySelect = ref ([{}])

const testArray = ref ([])
const testeName = ref ('');


const close = () => {
    showNewBookMenu.value= false
}



const addBook = (obj) => {
    let teste = JSON.parse(JSON.stringify(obj))
    console.log(teste)
    teste.id = bookList.value.length + 1


    bookList.value.push(teste)
    console.log (bookList);
    //console.log(bookList)
    close();

}

/* watch(search, (currentValue, oldValue) => {
    if (search.value == 'Search' || search.value == ''){
        filterByName.value.length = 0;
    }
    }); */ 


    watch(selectedOption, (currentValue, oldValue) => {
        filteredBySelect.value = []

        bookList.value.forEach(element => { 
            if (element.genre === filterOptions.value[selectedOption.value].text){
                filteredBySelect.value.push(element)
            }
        })
    
    });



watch(search, debounce(() => {
    
    filterByName.value.length = 0;
    if ( search.value != '' ){
        console.log ("entrou ca?????")
        console.log(search.value)
    bookList.value.forEach(element => { 
        console.log (element.name)
        if (element.name.toUpperCase().includes(search.value.toUpperCase())){
            console.log ("entrou ca")
            filterByName.value.push(element)
    }

    
    })}

}, 100));


    




/* const genreDescr = computed ( () => {

bookList.value.forEach(element => { 
    testArray.value.push(element?.author); 
})

testArray.value.forEach(el => {
    if (el.includes(search.value)){
        filterByName.value.push(el)
    }
})
    return filterByName
});*/


const checkPrime = () => {
  //  bookList.value.forEach(element => { testArray.value.push(element?.author) })

    //testArray.value.forEach ((el) => console.log(el))
    filterByName.value.forEach((el) => console.log(el));

    console.log (filterByName.value.length)
    console.log (filterByName.value)

}


const bookList = ref( [
    {
        name: "Harry Potter",
        author: "J.K. Rolling",
        image: "https://prodimage.images-bn.com/lf?set=key%5Bresolve.pixelRatio%5D,value%5B1%5D&set=key%5Bresolve.width%5D,value%5B600%5D&set=key%5Bresolve.height%5D,value%5B10000%5D&set=key%5Bresolve.imageFit%5D,value%5Bcontainerwidth%5D&set=key%5Bresolve.allowImageUpscaling%5D,value%5B0%5D&set=key%5Bresolve.format%5D,value%5Bwebp%5D&source=url%5Bhttps://prodimage.images-bn.com/pimages/9780439358071_p0_v4_s600x595.jpg%5D&scale=options%5Blimit%5D,size%5B600x10000%5D&sink=format%5Bwebp%5D",
        genre: "Epic Fantasy",
        reviewScore: 4.3,
        id: 1,
        intro: "Harry Potter is about to start his fifth year at Hogwarts School of Witchcraft and Wizardry. Unlike most schoolboys, Harry never enjoys his summer holidays, but this summer is even worse than usual. The Dursleys, of course, are making his life a misery, but even his best friends, Ron and Hermione, seem to be neglecting him. Harry has had enough. He is beginning to think he must do something, anything, to change his situation, when the summer holidays come to an end in a very dramatic fashion. What Harry is about to discover in his new year at Hogwarts will turn his world upside down..."
    },
    {
        name: "Doors of stone",
        author: "Patrick Rothfuss",
        image: "https://images.thedirect.com/media/photos/doors_of_stone.jpg",
        genre: "Epic Fantasy",
        reviewScore: 3.7,
        id: 2,
        intro: "The third book of The Kingkiller Chronicle."
    },
    {
        name: "Game of Thrones",
        author: "George R.R. Martin",
        image: "https://img.wook.pt/images/a-game-of-thrones-george-r-r-martin/MXwxMTIwMTQ3Nnw2NzcyMzEwfDE1NTUwODYzMDEwMDB8d2VicA==/550x",
        genre: "Epic Fantasy",
        reviewScore: 4.6,
        id: 3,
        intro: "Long ago, in a time forgotten, a preternatural event threw the seasons out of balance. In a land where summers can last decades and winters a lifetime, trouble is brewing. The cold is returning, and in the frozen wastes to the north of Winterfell, sinister forces are massing beyond the kingdom’s protective Wall. To the south, the king’s powers are failing—his most trusted adviser dead under mysterious circumstances and his enemies emerging from the shadows of the throne. At the center of the conflict lie the Starks of Winterfell, a family as harsh and unyielding as the frozen land they were born to. Now Lord Eddard Stark is reluctantly summoned to serve as the king’s new Hand, an appointment that threatens to sunder not only his family but the kingdom itself. Sweeping from a harsh land of cold to a summertime kingdom of epicurean plenty, A Game of Thrones tells a tale of lords and ladies, soldiers and sorcerers, assassins and bastards, who come together in a time of grim omens. Here an enigmatic band of warriors bear swords of no human metal; a tribe of fierce wildlings carry men off into madness; a cruel young dragon prince barters his sister to win back his throne; a child is lost in the twilight between life and death; and a determined woman undertakes a treacherous journey to protect all she holds dear. Amid plots and counter-plots, tragedy and betrayal, victory and terror, allies and enemies, the fate of the Starks hangs perilously in the balance, as each side endeavors to win that deadliest of conflicts: the game of thrones."
    },
    {
        name: "The Eye Of The World",
        author: "Robert Jordan",
        image: "https://m.media-amazon.com/images/I/418q+-8vmxL._SY445_SX342_.jpg",
        genre: "Epic Fantasy",
        reviewScore: 4.9,
        id: 4,
        intro: "The Wheel of Time turns and Ages come and pass, leaving memories that become legend. Legend fades to myth, and even myth is long forgotten when the Age that gave it birth returns again. What was, what will be, and what is, may yet fall under the Shadow.Moiraine Damodred arrives in Emond’s Field on a quest to find the one prophesized to stand against The Dark One, a malicious entity sowing the seeds of chaos and destruction. When a vicious band of half-men, half beasts invade the village seeking their master’s enemy, Moiraine persuades Rand al’Thor and his friends to leave their home and enter a larger unimaginable world filled with dangers waiting in the shadows and in the light."
    },
    {
        name: "The Unknown",
        author: "J W LYnne",
        image: "https://m.media-amazon.com/images/I/31l7Cfuq8oL._SY445_SX342_.jpg",
        genre: "Romance",
        reviewScore: 3.7,
        id: 5,
        intro:"Eight kids, ages nine to seventeen, awaken to find that almost everything they have ever known has been stolen from them. They were ripped from their beds in the middle of the night and transported to an unfamiliar and unforgiving new world where there are strict rules, and they are punished if they refuse to obey.As the kids grapple with their mysterious new reality, they struggle with disconcerting questions. Where in the world are they? Why were they taken away from their families? Will they ever get to go back home? And the most frightening question of all: Will this be the place where they die?"
    },
    {
        name: "Asterix and Cleopatra",
        author: "René Goscinny",
        image: "https://asterix.com/wp-content/uploads/2017/06/alb06gb.png",
        genre: "Comedy",
        reviewScore: 3.7,
        id: 6,
        intro:"To impress Julius Caesar, Queen Cleopatra promises to build the Roman Emperor a magnificent palace in just three months. Of course, Asterix has to get involved. By the time his feisty group from Gaul have finished, they’ve outwitted the Roman army, too."
    }
])
</script>

<template>
    <div>
        <Navbar></Navbar>

    </div>
    <div v-if="showNewBookMenu === true" style="position:sticky; z-index:1000">
        <NewBookForm @close="close" @addBook="addBook"></NewBookForm>
    </div>
    <div class="flex h-8" style="padding:1px; padding-top:9px;margin-bottom:9px ">
        <div class="sm:basis-1/12"></div>
        <div class="pr-2" style="min-width:66px;">
            Filter by
        </div>
        <div class="">
            <select v-model="selectedOption" class="border-2 border-black rounded-lg">
                <option v-for="option in filterOptions" :value="option.value">
                  {{ option.text }}
                </option>
              </select>
        </div>
        
        <div class="basis-full pr-2 pl-2">
            <input type="search" v-model="search" @click="cleansSearch()" class="rounded-lg searchBar w-full pl-2 border focus:border-2" style="border-color:black;" ></input>
        </div>
        <div class="" style="min-width:87px; ">
            <Button message="Add Book" height="27" @click="showNewBookMenu = true" class="" style="">
                
            </Button>
        </div>
        <div class="sm:basis-1/12"></div>
        
    </div>
    <div>
      
        <div v-if=" search == '' && selectedOption == 0" class="grid xl:grid-cols-4 gap-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" style="z-index:500">
            <div class="" v-for="books in bookList" :key="books.id" >
              <router-link 
              :to="{
                name: 'showBookDetails', 
                params: { 
                    booksObj:  JSON.stringify({...books})
                        
                    
                } }">

                

                <div class="clickBook">
                  
                        <div class="text-center text-nowrap titulo" style="max-width:135px;overflow:hidden">{{books.name}}</div>
                        <div class="booksBox">
                            <img style="width:inherit; height:inherit" :src= books.image />
                        </div>
                        <div class="text-center" style=""> <star-rating :rating="books.reviewScore" :round-start-rating="false" :star-size="25" :inline="true" :read-only="true"></star-rating></div>
                    
                </div>
                </router-link> 
            </div>
            
        </div>
        <div v-if=" search != '' && filterByName.length>0 && selectedOption == 0" class="grid xl:grid-cols-4 gap-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 " style="z-index:500">
            <div v-for="b in filterByName">
                <div v-if="b.name != null" class="clickBook">
                  
                    <div class="text-center text-nowrap titulo" style="max-width:135px;overflow:hidden">{{b.name}}</div>
                    <div class="booksBox">
                        <img style="width:inherit; height:inherit" :src= b.image />
                    </div>
                    <div class="text-center" style=""> <star-rating :rating="b.reviewScore" :round-start-rating="false" :star-size="25" :inline="true" :read-only="true"></star-rating></div>
                
                </div>
            </div>
        </div>
        <div v-if="selectedOption > 0" class="grid xl:grid-cols-4 gap-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" style="z-index:500">
            <div v-for="filter in filteredBySelect">
                <div class="clickBook">
                  
                    <div class="text-center text-nowrap titulo" style="max-width:135px;overflow:hidden">{{filter.name}}</div>
                    <div class="booksBox">
                        <img style="width:inherit; height:inherit" :src= filter.image />
                    </div>
                    <div class="text-center" style=""> <star-rating :rating="filter.reviewScore" :round-start-rating="false" :star-size="25" :inline="true" :read-only="true"></star-rating></div>
                
                </div>
            </div>
        </div>
       
    </div>
    <div>

    </div>

</template>


<style>


.vue-star-rating-rating-text{
    margin-top:7px;
}
/*



*/


.searchBar{
    outline: none;
}

.booksBox{
    height:180px;
    width:145px;
    background-color: orange;

}

.titulo:hover{
    overflow: none;
    text-wrap: wrap;
}

.clickBook:hover{
    cursor:pointer;
}

.clickBook{
    text-align: -webkit-center;
}

</style>