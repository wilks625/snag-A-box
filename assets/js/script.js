let checkBoxSeriesX = $("#checkbox-seriesX");
let checkBoxSeriesS = $("#checkbox-seriesS");

let zipInput = $("#zip-input");
let radiusInput = $("#radius-input");

let bbItemName = document.getElementById("item-name");
let bbInstoreAvail = document.getElementById("instore-avail");
let bbOnlineAvail = document.getElementById("online-avail");

let searchBtn =$("#search-btn");

// testing below
var formSubmitHandler = function (event) {
  event.preventDefault();

  var username = nameInputEl.value.trim();

  if (username) {
    getUserRepos(username);

    repoContainerEl.textContent = '';
    nameInputEl.value = '';
  } else {
    alert('Please enter a GitHub username');
  }
};
// testing above


// working code below
// function getSeriesXApi() {
//     var requestUrl = 'https://api.bestbuy.com/v1/products((search=6428324))?apiKey=XjL9LhCyOmECuslGN2ftjQG9&pageSize=21&format=json';
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


// testing below to incorporate zip code and distance input from user
function getApi() {
  var requestUrl = 'https://api.bestbuy.com/v1/stores((area(23060,200))&((storeType=big box)))+products(sku%20in%20(6430277))?apiKey=XjL9LhCyOmECuslGN2ftjQG9&show=products.sku,products.name,products.shortDescription,products.salePrice,products.regularPrice,products.addToCartURL,products.url,products.image,products.customerReviewCount,products.customerReviewAverage&format=json';
  console.log(requestUrl);
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //Using console.log to examine the data
      console.log(data);
      console.log("lets go?")
      
      // for (var i = 0; i < data.length; i++) {
        //Creating a h3 element and a p elementddddddd
        // var userName = document.createElement('h3');
        //
        // var itemName = document.createElement("h3")
        // var instoreAvail = document.createElement("p")
        // var onlineAvail = document.createElement("p")
        // console.log("lets go????")


        //Setting the text of the h3 element and p element.
        // instoreAvail.textContent = data.products.[i].activeUpdateDate;
        //
        // itemName = data.products[0].albumTitle;
        // instoreAvail = data.products[0].inStoreAvailability;
        // onlineAvail = data.products[0].onlineAvailability;
        

        //Appending the dynamically generated html to the div associated with the id="users"
        //Append will attach the element as the bottom most child.
        //
        // bbItemName.textContent = itemName
        // bbInstoreAvail.textContent = instoreAvail
        // bbOnlineAvail.textContent = onlineAvail
        // console.log(itemName)
        // console.log(instoreAvail)
        // console.log(onlineAvail)
    });
}
searchBtn.on('click', getApi);
//testing above to incorporate zip code and distance input from user