// const key="TPZTm7hT3PtCBloRpUc92n5r2iSmU9CgK4kPGGL24SpRVHRCrFQfMzJI";
// const photo=document.querySelector(".photos")
// const form=document.querySelector("form")
// const searchIn=document.querySelector("#ms");

// const btn=document.querySelector(".btn-1");


//  let searchTerm;
//  searchIn.addEventListener('input',updateValue);
//  form.addEventListener('submit',(e)=>{
//    e.preventDefault();
//    searchPhotos(searchTerm)
//  })
// function updateValue(e){
//   searchTerm=e.target.value;
//   console.log(searchTerm)
// }
// async function curated(){
//    const response=await fetch("https://api.pexels.com/v1/curated?per_page=10",{
//     method:"GET",
//     headers:{
//         Accept:"application/json",
//         Authorization: key
//     }
//       });
//       const data= await response.json();

//       data.photos.forEach(images=>{
//         const image=document.createElement('div');
//         image.classList.add('photos');
//         image.innerHTML=`<img src=${images.src.large}</img><p>${images.photographer}</p>`;
//         photo.appendChild(image);
//       })
// }
// async function searchPhotos(){

//   console.log("aman search launched");
//   const response=await fetch(`https://api.pexels.com/v1/search?query=${term}&per_page=5`,{
//     method:"GET",
//     headers:{
//         Accept:"application/json",
//         Authorization: key
//     }
// });
// const data= await response.json();

//       data.photos.forEach(images=>{
//         const image=document.createElement('div');
//         image.classList.add('photos');
//         image.innerHTML=`<img src=${images.src.large}</img><p>${images.photographer}</p>`;
//         photo.appendChild(image);
//       })
// }
// searchPhotos();
// curated();


const key = "TPZTm7hT3PtCBloRpUc92n5r2iSmU9CgK4kPGGL24SpRVHRCrFQfMzJI";
const photo = document.querySelector(".photos");
const form = document.querySelector("form");
const searchIn = document.querySelector("#ms");

// Fixed the missing 'e' parameter in the arrow function for form submission
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission behavior
  searchPhotos(searchIn.value); // Use searchIn.value directly here
});

let searchTerm = ''; // Initialize searchTerm

searchIn.addEventListener('input', updateValue);

function updateValue(e) {
  searchTerm = e.target.value;
  console.log(searchTerm);
}

async function curated() {
  const response = await fetch("https://api.pexels.com/v1/curated?per_page=10", {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: key
    }
  });

  const data = await response.json();

  data.photos.forEach(images => {
    const image = document.createElement('div');
    image.classList.add('mycon');
    image.innerHTML = `<img src=${images.src.large}></img><p style="color:white">${images.photographer}</p>`;
    photo.appendChild(image);
  });
}

async function searchPhotos(term) { // Use 'term' as a parameter here
  console.log("Search launched");
  const response = await fetch(`https://api.pexels.com/v1/search?query=${term}&per_page=10`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: key
    }
  });

  const data = await response.json();

  data.photos.forEach(images => {
    const image = document.createElement('div');
    //image.classList.add('photos');
    image.classList.add('mycon');
    image.innerHTML = `<img src=${images.src.large}></img><p>${images.photographer}</p>`;
    //photo.appendChild(image);
    photo.insertAdjacentElement("afterbegin", image);
  });
}

searchPhotos(searchIn.value); // Initialize with default search value
curated();


