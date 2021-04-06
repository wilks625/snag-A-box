let checkBoxSeriesX = $("#checkbox-seriesX");
let checkBoxSeriesS = $("#checkbox-seriesS");

// let zipInput = $("#zip-input").value;
let zipInput = document.getElementById("zip-input").value;
let radiusInput = $("#radius-input");

let bbItemName = document.getElementById("item-name");
let bbInstoreAvail = document.getElementById("instore-avail");
let bbOnlineAvail = document.getElementById("online-avail");

let searchBtn =$("#search-btn");

// testing below
// var zipHandler = function (event) {
//   event.preventDefault();

//   var userZipInput = zipInput.value.trim();

//   if (userZipInput) {
//     getTargetStoreApi(userZipInput);

//     repoContainerEl.textContent = '';
//     nameInputEl.value = '';
//   } else {
//     alert('Please enter a GitHub username');
//   }
// };

// var searchButtonHandler = function (event) {
//   var language = event.target.getAttribute('data-language');

//   if (language) {
//     getFeaturedRepos(language);

//     repoContainerEl.textContent = '';
//   }
// };
// testing above






// working on this code below to fetch target stores API
function getTargetStoreApi() {

  // var searchInputVal = document.querySelector('#search-input').value;
  // var formatInputVal = document.querySelector('#format-input').value;
  // let zipInput = $("#zip-input").value;
  


  // if (!searchInputVal) {
  //   console.error('You need a search input value!');
  //   return;
  

  const settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip=23231&radius=10",
    "method": "GET",
    "headers": {
      "x-rapidapi-key": "306906be15msh8ff129144edc60ep1c73e2jsnd886232499eb",
      "x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com"
    }
  };
  $.ajax(settings).done(function (response) {
    console.log(response);
    console.log("lets hope this works!")
  });
}
searchBtn.on('click', getTargetStoreApi);
// working on this code below to fetch target stores API









// working code below
// function getSeriesXApi() {
//     var requestUrl = 'https://api.bestbuy.com/v1/products((search=6428324))?apiKey=FCCrvACW16ZNhJEclroeeQ8f&pageSize=21&format=json';
//     console.log(requestUrl);
//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) {
//         //Using console.log to examine the data
//         console.log(data);
//         console.log("lets go?")
        
//         // for (var i = 0; i < data.length; i++) {
//           //Creating a h3 element and a p elementddddddd
//           // var userName = document.createElement('h3');
//           var itemName = document.createElement("h3")
//           var instoreAvail = document.createElement("p")
//           var onlineAvail = document.createElement("p")
//           console.log("lets go????")

  
//           //Setting the text of the h3 element and p element.
//           // instoreAvail.textContent = data.products.[i].activeUpdateDate;
//           itemName = data.products[0].albumTitle;
//           instoreAvail = data.products[0].inStoreAvailability;
//           onlineAvail = data.products[0].onlineAvailability;
          
  
//           //Appending the dynamically generated html to the div associated with the id="users"
//           //Append will attach the element as the bottom most child.
//           bbItemName.textContent = itemName
//           bbInstoreAvail.textContent = instoreAvail
//           bbOnlineAvail.textContent = onlineAvail
//           console.log(itemName)
//           console.log(instoreAvail)
//           console.log(onlineAvail)
//       });
//   }
//   searchBtn.on('click', getSeriesXApi);
// working code above