const api_key='api_key=9300aaba558bf68025826a47b2b667b9';
const base_url='https://api.themoviedb.org/3';
const api_url=base_url+'/discover/movie?sort_by=popularity.desc&'+api_key;
const main=document.querySelector("main");
const search=document.querySelector("#searchbar1"); 
search.addEventListener('keyup',cont=>{
    const term=cont.target.value.toLowerCase();
    const titles=document.querySelector(".title");
    titles.forEach(title=>{
        if(title.textContent.toLowerCase().indexOf(term)!=-1){
            title.parentElement.style.display="block";
        }
        else{
            title.parentElement.style.display="none";
        }
    })
})
fetch(api_url).then(res=>res.json())
.then(data=>{
    const movele=data.results;
    movele.forEach(movie=>{
        main.innerHTML+=`<div class="relative moviebox md:my-5 sm:my-4">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="w-full">
        <p class="absolute bottom-8 pl-5 pr-3 text-4xl font-sans font-bold  text-white ">${movie.title}</p>
        </div>`
    })
    const titles_div=document.querySelector("main").children;
    const tit=Array.from(titles_div)
    tit.forEach(tit=>{
    })
    search.addEventListener('keyup',cont=>{
    const term=cont.target.value.toLowerCase();
    console.log(term);
    tit.forEach(tit=>{
        if(tit.lastElementChild.textContent.toLowerCase().indexOf(term)!=-1){
            tit.classList.add("block");
            tit.classList.remove("hidden");
        }
        else{
            tit.classList.add("hidden");
            tit.classList.remove("block");
        }
    })

    })
})


