<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

import NewBookForm from '@/components/NewBookForm.vue'
// import ShowBookDetails from '@/components/ShowBookDetails.vue'
import debounce from 'lodash.debounce'

import StarRating from 'vue-star-rating'
import Button from '../components/Button.vue'


import { ref, computed, watch, onUpdated, provide, onMounted } from 'vue'
 import { RouterLink, RouterView } from 'vue-router'

const search = ref ('')
const showNewBookMenu = ref (false)
const selectFilter = ref ();
const cleansSearch = () => {

        search.value = "";
    
}

const auxedBooks = ref ([])

const selectedOption = ref (0);
const filterOptions = ref([
    { text: 'All Genres', value: 0 },
    { text: 'Epic Fantasy', value: 1 },
    { text: 'Comedy', value: 2 },
    { text: 'Romance', value: 3 }
])

const auxTeste = ref ([])

const filterByName = ref ([{}])
const filteredBySelect = ref ([{}])

const testArray = ref ([])
const testeName = ref ('');

onUpdated (() => {
    console.log (bookList.value)
})

onMounted (() => {
    console.log(bookList.value)
})



const close = () => {
    showNewBookMenu.value= false
}



const addBook = (obj) => {
    let teste = JSON.parse(JSON.stringify(obj))
    console.log(teste)
    teste.id = bookList.value.length + 1
    auxedBooks.value.push(teste)


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
    if (currentValue != oldValue){search.value= ''}
    filteredBySelect.value = []
    
    if (search.value == ''){
        bookList.value.forEach(element => { 
            if (element.genre === filterOptions.value[selectedOption.value].text){
                filteredBySelect.value.push(element)
            }
        })
    }


});



watch(search, debounce(() => {
    
    filterByName.value.length = 0;
    if ( search.value != '' ){
        console.log ("entrou ca?????")
        console.log(search.value)
    bookList.value.forEach(element => { 
        console.log (element.name)
        if (element.name.toUpperCase().includes(search.value.toUpperCase()) || element.author.toUpperCase().includes(search.value.toUpperCase())){
            console.log ("entrou ca")
            filterByName.value.push(element)
    }
    
    })}

    if (search.value != '' && selectedOption.value != 0){
        filteredBySelect.value = []
        bookList.value.forEach(element => { 
        console.log (element.name)
        if (element.genre === filterOptions.value[selectedOption.value].text && (element.name.toUpperCase().includes(search.value.toUpperCase()) || element.author.toUpperCase().includes(search.value.toUpperCase()))){
            filteredBySelect.value.push(element)
        }
        }
    )}

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
        author: "J.K. Rowling",
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
    },
    {
        name: "Layover",
        author: "Emily Henry",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1715590893i/60904334.jpg",
        genre: "Romance",
        reviewScore: 4.54,
        id: 12,
        intro:"Before Liz Lemon, before Weekend Update, before Sarah Palin, Tina Fey was just a young girl with a dream: a recurring stress dream that she was being chased through a local airport by her middle-school gym teacher. She also had a dream that one day she would be a comedian on TV. She has seen both these dreams come true. At last, Tina Fey's story can be told. From her youthful days as a vicious nerd to her tour of duty on Saturday Night Live; from her passionately halfhearted pursuit of physical beauty to her life as a mother eating things off the floor; from her one-sided college romance to her nearly fatal honeymoon—from the beginning of this paragraph to this final sentence. Tina Fey reveals all, and proves what we've all suspected: you're no one until someone calls you bossy."
    },
    {
        name: "The Shadow of the Gods",
        author: "John Gwynne",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1610375894i/52694527.jpg",
        genre: "Epic Fantasy",
        reviewScore: 4.84,
        id: 13,
        intro:"After the gods warred and drove themselves to extinction, the cataclysm of their fall shattered the land of Vigrið.Now a new world is rising, where power-hungry jarls feud and monsters stalk the woods and mountains. A world where the bones of the dead gods still hold great power for those brave - or desperate - enough to seek them out.Now, as whispers of war echo across the mountains and fjords, fate follows in the footsteps of three people: a huntress on a dangerous quest, a noblewoman who has rejected privilege in pursuit of battle fame, and a thrall who seeks vengeance among the famed mercenaries known as the Bloodsworn.All three will shape the fate of the world as it once more falls under the shadow of the gods . . ."
    },
    {
        name: "The Sunlit Man",
        author: "Brandon Sanderson",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1696146860i/60531420.jpg",
        genre: "Epic Fantasy",
        reviewScore: 4.34,
        id: 14,
        intro:"From #1 New York Times bestselling author Brandon Sanderson―creator of The Stormlight Archive, the Mistborn Saga, and countless bestselling works of science fiction and fantasy―comes this standalone novel showing a rare glimpse of a future Cosmere universe.Running. Putting distance between himself and the relentless Night Brigade has been Nomad’s strategy for years. Staying one or two steps ahead of his pursuers by skipping through the Cosmere from one world to the next.But now, his powers too depleted to escape, Nomad finds himself trapped on Canticle, a planet that will kill anyone who doesn’t keep moving. Fleeing the fires of a sunrise that melts the very stones, he is instantly caught up in the struggle between a heartless tyrant and the brave rebels who defy him.Failure means a quick death, incinerated by the sun… or a lifetime as a mindless slave. Tormented by the consequences of his past, Nomad must fight not only for his survival―but also for his very soul."
    },
    {
        name: "Empire of the Damned",
        author: "Jay Kristoff",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687870963i/126918599.jpg",
        genre: "Epic Fantasy",
        reviewScore: 4.58,
        id: 15,
        intro:"From the New York Times bestselling author of the Nevernight Chronicle, Jay Kristoff, comes the much-anticipated sequel to the #1 international bestselling sensation EMPIRE OF THE VAMPIRE.From holy cup comes holy light;The faithful hands sets world aright.And in the Seven Martyrs’ sight,Mere man shall end this endless night.Gabriel de León has saved the Holy Grail from death, but his chance to end the endless night is lost. Drawn into an uneasy alliance with the mysterious vampire Liathe, Gabriel must now deliver the Grail to ancients of the Blood Esani, and learn the truth of how Daysdeath might be finally undone.But the Last Silversaint faces peril, within and without. Pursued by terrors of the Blood Voss, drawn into warfare between the Blood Dyvok and duskdancers of the frozen Highlands, and ravaged by his own rising bloodlust, Gabriel may not survive to see the Grail learn her truth.And that truth may be too awful for any to imagine."
    },
    {
        name: "The Grandest Game",
        author: "Jennifer Lynn Barnes",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1697487477i/197392670.jpg",
        genre: "Romance",
        reviewScore: 4.13,
        id: 16,
        intro:"Get caught up in the puzzles, games, danger, romance, and riches of this lush new chapter in the #1 bestselling Inheritance Games saga.Seven tickets. An island of dreams. The chance of a lifetime.Welcome to the Grandest Game, an annual competition run by billionaire Avery Grambs and the four infamous Hawthorne brothers, whose family fortune she inherited. Designed to give anyone a shot at fame and fortune, this year’s game requires one of seven golden tickets to enter. With millions on the line, those seven players will do whatever it takes to win.Some of the players are in it for the money. Some for power. Some for reasons all their own. Every single one of them has secrets. Amidst it all is Grayson Hawthorne, tasked with a vital role in this year’s game. But as tensions rise and the mind-bending challenges push the players to their limits—physically, mentally, and emotionally—it soon becomes clear that not everyone is playing by the rules.#1 New York Times bestselling author Jennifer Lynn Barnes delivers a brand-new series in the world of The Inheritance Games, where fan-favorite and new characters collide in a game you’ll never forget. Do you have what it takes to play?"
    },
    {
        name: "Five Brothers",
        author: "Penelope Douglas",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1698922067i/201102380.jpg",
        genre: "Romance",
        reviewScore: 4.03,
        id: 17,
        intro:"One woman learns the secrets of the five Jaeger brothers.On the other side of town, in the dark glades, under the rain…Macon is the oldest. Thirty-one. Ex-Marine. I don’t think I’ve ever seen him smile.Army is twenty-eight. A single dad with the most beautiful green eyes. He has no idea who he is, if not a Jaeger brother.Iron will be in prison soon. You’d never think it to meet him. He’s a nice guy, actually. But he can’t stop reacting to everything.Dallas is the one I hate. Twenty-one, cruel, and selfish. He takes and then throws away whatever’s left.And Trace is mine. Or he was for about two seconds. No one can tame him for long.Not that I ever wanted to. It was fun, but now I need to go home. Back to my side of the tracks. Away from the swamps and these men. To my parents’ big house. On my clean street. Where I’m never dirty or messy or hot. And I will. I’ll leave first thing tomorrow morning. I just want to crash on the couch tonight.Their house is dark and quiet, everyone else is asleep. Except for one. He sees me crying and comes at me from behind. I let him wrap his arms around my body and hold me tightly. His breath is on my neck, his fingers are in my hair, and he doesn’t stop there.I don’t think it was Trace."
    },
    {
        name: "The Game Changer",
        author: "Lana Ferguson",
        image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1701658833i/199355848.jpg",
        genre: "Romance",
        reviewScore: 3.67,
        id: 18,
        intro:"A hockey player and a baker shoot their shot in this steamy new romance. When a very public breakup becomes a PR nightmare for Ian Chase's team, he hopes to focus on his game, but that suddenly seem less likely than a hat trick. With his career and the team’s image in jeopardy, Ian is surprised to find a solution through none other than Delilah Baker, his best friend and teammate's little sister…who isn’t so little anymore. Delilah Baker is known as “the darling of baking” on her local cable show, and being in the public eye is her bread and butter. But with her numbers dwindling and her producers turning up the heat, Delilah offers up the half-baked idea to collaborate with her brother’s team to entice the hockey fans of Boston to tune in to her show. Delilah thinks it will be a piece of cake—until the team sends Ian Chase, her brother’s best friend and the object of a decade-long crush that she’s never quite gotten over. Delilah's and Ian’s teams think it’s a true win-win situation—gaining higher numbers for Delilah’s show and casting Ian in a more positive light. And viewers are eating them up like a cupcake, sparking the idea to play up their relationship for the goal of good press. With more than just their careers on thin ice, the line between what’s real and what’s for show begins to blur, but one thing’s for certain: This PR stunt will either be a total game changer—or leave them both totally pucked."
    },
])
</script>

<template>
    <div>
        <Navbar></Navbar>
    </div>

    <div v-if="showNewBookMenu === true" style="position:sticky; z-index:1000">
        <NewBookForm @close="close" @addBook="addBook"></NewBookForm>
    </div>
    <div class="firstDiv" style="position:relative; top:80px">
        <div class="flex h-8 items-center" style="padding:1px; padding-top:9px;margin-bottom:9px ">
            <div class="sm:basis-1/12"></div>
            <div class="" style="min-width:90px;">
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
            <div class="" style="min-width:107px; ">
                <Button message="Add Book" height="30" @click="showNewBookMenu = true" class="" style="">
                    
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
            <div v-if="selectedOption > 0 && search == ''" class="grid xl:grid-cols-4 gap-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" style="z-index:500">
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

    <!--  -->

    <div v-if="selectedOption > 0 && search != ''" class="grid xl:grid-cols-4 gap-5 justify-items-center lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" style="z-index:500">
                
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

            <!--  -->
        
        </div>
        <div>

        </div>
        <div class="footerClass">
    <Footer></Footer>
    </div>
        
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
.titulo {
    text-overflow: ellipsis;
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