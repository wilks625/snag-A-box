let checkBoxSeriesX = $("#checkbox-seriesX");
let checkBoxSeriesS = $("#checkbox-seriesS");

let zipInput = $("#zip-input");
let radiusInput = $("#radius-input");

let searchBtn =$("#search-btn");

// let bestBuy = $("#bestbuy-instore-avail")
let bestBuy = document.getElementById("bestbuy-instore-avail")

// searchBtn.on("click", function (){
//     console.log("lets gooooo");
// })








function getApi() {
    var requestUrl = 'https://api.bestbuy.com/v1/products((search=6428324))?apiKey=XjL9LhCyOmECuslGN2ftjQG9&pageSize=21&format=json';
    console.log(requestUrl);
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        //Using console.log to examine the data
        console.log(data);
        
        for (var i = 0; i < data.length; i++) {
          //Creating a h3 element and a p element
          // var userName = document.createElement('h3');
          
          var instoreAvail = document.createElement("p")
          console.log("lets go?")

  
          //Setting the text of the h3 element and p element.
          instoreAvail.textContent = data[i].inStoreAvailability;
          
  
          //Appending the dynamically generated html to the div associated with the id="users"
          //Append will attach the element as the bottom most child.
          bestBuy.append(instoreAvail);
          
         
        }
      });
  }
  searchBtn.on('click', getApi);

// $("#search-btn").on("click", function () {
//     console.log("get it, erick?")
// });

// $.get("url", data,
//     function (data, textStatus, jqXHR) {
        
//     },
//     "dataType"
// );