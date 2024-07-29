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
    },
    {
        name: "Beach Read",
        author: "Emily Henry",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1589881197i/52867387.jpg",
        genre: "Comedy",
        reviewScore: 4.0,
        id: 7,
        intro:"A romance writer who no longer believes in love and a literary writer stuck in a rut engage in a summer-long challenge that may just upend everything they believe about happily ever afters. Augustus Everett is an acclaimed author of literary fiction. January Andrews writes bestselling romance. When she pens a happily ever after, he kills off his entire cast. They’re polar opposites. In fact, the only thing they have in common is that for the next three months, they’re living in neighboring beach houses, broke, and bogged down with writer’s block. Until, one hazy evening, one thing leads to another and they strike a deal designed to force them out of their creative ruts: Augustus will spend the summer writing something happy, and January will pen the next Great American Novel. She’ll take him on field trips worthy of any rom-com montage, and he’ll take her to interview surviving members of a backwoods death cult (obviously). Everyone will finish a book and no-one will fall in love. Really."
    },
    {
        name: "Book Lovers",
        author: "Emily Henry",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1638867089i/58690308.jpg",
        genre: "Romance",
        reviewScore: 4.13,
        id: 8,
        intro:"One summer. Two rivals. A plot twist they didn't see coming....Nora Stephens’ life is books—she’s read them all—and she is not that type of heroine. Not the plucky one, not the laidback dream girl, and especially not the sweetheart. In fact, the only people Nora is a heroine for are her clients, for whom she lands enormous deals as a cutthroat literary agent, and her beloved little sister Libby. Which is why she agrees to go to Sunshine Falls, North Carolina for the month of August when Libby begs her for a sisters’ trip away—with visions of a small-town transformation for Nora, who she’s convinced needs to become the heroine in her own story. But instead of picnics in meadows, or run-ins with a handsome country doctor or bulging-forearmed bartender, Nora keeps bumping into Charlie Lastra, a bookish brooding editor from back in the city. It would be a meet-cute if not for the fact that they’ve met many times and it’s never been cute. If Nora knows she’s not an ideal heroine, Charlie knows he’s nobody’s hero, but as they are thrown together again and again—in a series of coincidences no editor worth their salt would allow—what they discover might just unravel the carefully crafted stories they’ve written about themselves."
    },
    {
        name: "The Hating Game",
        author: "Sally Thorne",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1481566824i/27213238.jpg",
        genre: "Romance",
        reviewScore: 3.89,
        id: 9,
        intro:"Lucy Hutton and Joshua Templeman hate each other. Not dislike. Not begrudgingly tolerate. Hate. And they have no problem displaying their feelings through a series of ritualistic passive aggressive maneuvers as they sit across from each other, executive assistants to co-CEOs of a publishing company. Lucy can’t understand Joshua’s joyless, uptight, meticulous approach to his job. Joshua is clearly baffled by Lucy’s overly bright clothes, quirkiness, and Pollyanna attitude. Now up for the same promotion, their battle of wills has come to a head and Lucy refuses to back down when their latest game could cost her her dream job…But the tension between Lucy and Joshua has also reached its boiling point, and Lucy is discovering that maybe she doesn’t hate Joshua. And maybe, he doesn’t hate her either. Or maybe this is just another game."
    },
    {
        name: "The Kiss Quotient",
        author: "René Goscinny",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1688188444i/36199084.jpg",
        genre: "Romance",
        reviewScore: 3.7,
        id: 10,
        intro:"A heartwarming and refreshing debut novel that proves one thing: there's not enough data in the world to predict what will make your heart tick. Stella Lane thinks math is the only thing that unites the universe. She comes up with algorithms to predict customer purchases—a job that has given her more money than she knows what to do with, and way less experience in the dating department than the average thirty-year-old. It doesn't help that Stella has Asperger's and French kissing reminds her of a shark getting its teeth cleaned by pilot fish. Her conclusion: she needs lots of practice—with a professional. Which is why she hires escort Michael Phan. The Vietnamese and Swedish stunner can't afford to turn down Stella's offer, and agrees to help her check off all the boxes on her lesson plan—from foreplay to more-than-missionary position...Before long, Stella not only learns to appreciate his kisses, but to crave all the other things he's making her feel. Soon, their no-nonsense partnership starts making a strange kind of sense. And the pattern that emerges will convince Stella that love is the best kind of logic..."
    },
    {
        name: "Bossypants",
        author: "Tina Fey",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1481509554i/9418327.jpg",
        genre: "Comedy",
        reviewScore: 3.96,
        id: 11,
        intro:"To impress Julius Caesar, Queen Cleopatra promises to build the Roman Emperor a magnificent palace in just three months. Of course, Asterix has to get involved. By the time his feisty group from Gaul have finished, they’ve outwitted the Roman army, too."
    },{
        name: "Layover",
        author: "Emily Henry",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715590893i/60904334.jpg",
        genre: "Romance",
        reviewScore: 4.54,
        id: 6,
        intro:"Before Liz Lemon, before Weekend Update, before Sarah Palin, Tina Fey was just a young girl with a dream: a recurring stress dream that she was being chased through a local airport by her middle-school gym teacher. She also had a dream that one day she would be a comedian on TV. She has seen both these dreams come true. At last, Tina Fey's story can be told. From her youthful days as a vicious nerd to her tour of duty on Saturday Night Live; from her passionately halfhearted pursuit of physical beauty to her life as a mother eating things off the floor; from her one-sided college romance to her nearly fatal honeymoon—from the beginning of this paragraph to this final sentence. Tina Fey reveals all, and proves what we've all suspected: you're no one until someone calls you bossy."
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
                name: 'ShowBookDetails', 
                params: { 
                    booksObj:  JSON.stringify({...books}),
                    bList: JSON.stringify({...bookList}), 

                        
                    
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
            <div v-for="books in filterByName">
                <div v-if="books.name != null">
                    <router-link 
                        :to="{
                        name: 'ShowBookDetails', 
                        params: { 
                            booksObj:  JSON.stringify({...books}),
                            bList: JSON.stringify({...bookList}), 
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
        </div>
        <div v-if="selectedOption > 0" class="grid xl:grid-cols-4 gap-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" style="z-index:500">
            <div v-for="books in filteredBySelect">
                <router-link 
                :to="{
                name: 'ShowBookDetails', 
                params: { 
                    booksObj:  JSON.stringify({...books}),
                    bList: JSON.stringify({...bookList}), 
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