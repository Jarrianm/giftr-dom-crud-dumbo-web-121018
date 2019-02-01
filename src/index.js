document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM has been fully loaded')

  let nameInput = document.getElementById("gift-name-input")
  let imageInput = document.getElementById("gift-image-input")
  let list = document.getElementById("gift-list")
  let img = document.getElementsByTagName("img")
  let searchInput = document.getElementById('filter-input')

function individualGifts(gifts){
  gifts.forEach((gift) => {
    showGift(gift)
  })
};

function showGift(gift){
  let li = document.createElement("li")
  list.append(li)
  li.innerHTML = `<p id="name">${gift.name}</p>
  <br><img id=${gift.id} src=${gift.image}>
  <form id="edit-gift-form" class="ui form" action="index.html" method="POST" display="none">
    <label for="name">Gift Name: </label>
    <input id="gift-name-input" type="text" name="name" value="">
    <label for="image">Gift Image: </label>
    <input id="gift-image-input" type="text" name="image" value="">
    <br>
  </form>
  <button id="edit">Edit Gift</button><button id="delete">Delete</button>`
};

document.addEventListener("submit",createGift)

function createGift(e){
  e.preventDefault()
  showGift({name: nameInput.value, image: imageInput.value})
};

list.addEventListener("click",updateGifts)
searchInput.addEventListener("input",searchGifts)

function updateGifts(e){
  e.preventDefault()
  if(e.target.id === 'edit'){
        editGift(e)
          }
  else if(e.target.id === 'delete') {
        deleteGift(e)
    }
    else if(e.target.id === 'edit-gift-form'){
      editGift(e)
    }
};

function editGift(e){
  console.log(e)
  e.target.previousElementSibling.style.display = "block"

  };

function searchGifts(e){
  console.log(e.target.value)
  // filteredGifts
  let filteredGifts = gifts.filter(gift => gift.name.includes(e.target.value))
  list.innerHTML = ''
  filteredGifts.forEach(showGift)
  // console.log(gifts.filter(function(gift){
  //   console.log(gift.name.includes("a"))
  //   gift.name.includes(e.target.value)
  // }))
  // console.log(filteredGifts)
}

function deleteGift(e){
  e.target.parentElement.remove()
};






individualGifts(gifts)
})

// function searchBar() {
//   Declare variables
//   var input, filter, ul, li, a, i, txtValue;
//   input = document.getElementById('myInput');
//   filter = input.value.toUpperCase();
//   ul = document.getElementById("myUL");
//   li = ul.getElementsByTagName('li');
//
//   Loop through all list items, and hide those who don't match the search query
//   for (i = 0; i < li.length; i++) {
//     a = li[i].getElementsByTagName("a")[0];
//     txtValue = a.textContent || a.innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       li[i].style.display = "";
//     } else {
//       li[i].style.display = "none";
//     }
//   }
// }
