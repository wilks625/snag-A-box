$( document ).ready(function() {
  console.log( "ready!" );
let checkBoxSeriesX = $("#checkbox-seriesX");
let checkBoxSeriesS = $("#checkbox-seriesS");

console.log($("#zip-input").val());
let radiusInput = $("#radius-input");

let bbItemName = document.getElementById("item-name");
let bbInstoreAvail = document.getElementById("instore-avail");
let bbOnlineAvail = document.getElementById("online-avail");

let searchBtn =$("#search-btn");

searchBtn.on('click', getTargetStoreApi);
});
// working on this code below to fetch target stores API
function getTargetStoreApi() {
  let zipInput = $("#zip-input").val();
  debugger;
  // var searchInputVal = document.querySelector('#search-input').value;
  // var formatInputVal = document.querySelector('#format-input').value;
  console.log(zipInput);
  
  
  
  // if (!searchInputVal) {
    //   console.error('You need a search input value!');
    //   return;
    
    
    const settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip=" + zipInput + "&radius=10",
      "method": "GET",
      "headers": {
        "x-rapidapi-key": "ba80895230msh463bb1fa36014d2p15cc15jsne8204157e9a4",
        "x-rapidapi-host": "target-com-store-product-reviews-locations-data.p.rapidapi.com"
      }
    };
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      console.log("lets hope this works!")
      location.assign("url");
      
    });
    // getTargetStoreApi (zipInput);
  }
  

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
// working code above/ }}