const accesskey ="8_90j9CuueUiZqX-BjBto9moYA-3ZHsczYv3Z4B87ME"

const formEl =document.querySelector("form");
const inputEl =document.getElementById("serach-input")
const searchResults=document.querySelector(".search-result")
const showMore =document.getElementById("show-more-button")

let inputData = ""
let page=1;

async function searchImages(){
  inputData = inputEl.value;
  const url = `https://api.unsplash.com/search/photo?page=
  ${page}&query=${inputData}&client_id=${accesskey}`

  const response = await fetch(url)
  const data= await response.json()

  const results = data.results

  if (page === 1){
    searchResults.innerHTML =""
  }

  results.map((result)=>{
    const imagewrapper = document.createElement('div')
    imagewrapper.classList.add("serach-result")
    const image = document.createElement('img')

    image.src=result.urls.small
    image.alt=result.alt_description

    const imageLink= document.createElement('a')
    imageLink.href =result.links.html
    imageLink.target= "_blank"
    imageLink.textContent = result.alt_description;

    imagewrapper.appendChild(image);
    imagewrapper.appendChild(imageLink);
    imagewrapper.appendChild(imagewrapper);
  });

  page++
  if(page > 1){
    showMore.style.display="block"
  }
}


formEl.addEventListener("submit", (event) =>{
  event.preventDefault()
  page =1;
  searchImages()
})


showMore.addEventListener("click", () =>{ 
  searchImages()
})

