$(document).ready(function () {
  console.log("ready!");

  let searchBtn = $("#search-btn");

  searchBtn.on("click", getTargetStoreApi);

});
// working on this code below to fetch target stores API
let locationName = document.createElement("div");


function getTargetStoreApi() {
  locationName.innerHTML = "";
  let zipInput = $("#zip-input").val();
  let radiusInput = $("#radius-input").val();

  console.log(zipInput);
  console.log(radiusInput);

  // if (!searchInputVal) {
  //   console.error("You need a search input value!");
  //   return;
  var endpoint1 =
    "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/location/search?zip=" +
    zipInput +
    "&radius=" +
    radiusInput;
  console.log(endpoint1);
  const settings1 = {
    async: true,
    crossDomain: true,
    url: endpoint1,
    method: "GET",
    headers: {
      "x-rapidapi-key": "306906be15msh8ff129144edc60ep1c73e2jsnd886232499eb",
      "x-rapidapi-host":
        "target-com-store-product-reviews-locations-data.p.rapidapi.com",
    },
  };

  $.ajax(settings1).done(function (response1) {
    console.log(response1);
    let tcin;

    if (document.getElementById("radio-seriesX").checked) {
      //Xbox series X is chosen
      tcin = 80790841;
      console.log(tcin);
    } else if (document.getElementById("radio-seriesS").checked) {
      // Xbox series S is chosen
      tcin = 80790842;
      console.log(tcin);
    } // if there is time, add validation for if user does not select a radio

    console.log(tcin);
    for (var i = 0; i < response1.locations.length; i++) {
      let storeID = response1.locations[i].location_id;
      var endpoint2 =
        "https://target-com-store-product-reviews-locations-data.p.rapidapi.com/product/details?store_id=" +
        storeID +
        "&tcin=" +
        tcin;
      const settings2 = {
        async: false,
        crossDomain: true,
        url: endpoint2,
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "306906be15msh8ff129144edc60ep1c73e2jsnd886232499eb",
          "x-rapidapi-host":
            "target-com-store-product-reviews-locations-data.p.rapidapi.com",
        },
      };

      locationName = document.createElement("div");
      let productAPI;
      $.ajax(settings2).done(function (response2) {
        console.log(response2);
        console.log(response1);
        productAPI = response2;
        //testing zone
        //           for (var i = 0; i < response1.locations.length; i++) {
        //           itemName = response2.product.title;
        //           inStock = response2.product.availibility_status;

        //         productsDisplay.setAttribute("id", "products" + i);

        //         var tarItemName = document.createElement('p');
        //         var tarItemAvail = document.createElement('p');

        //         tarItemName.textContent = itemName;
        //         tarItemAvail.textContent = inStock;
        // console.log(itemName)
        //         productsDisplay.appendChild(tarItemName);
        //         productsDisplay.appendChild(tarItemAvail)
      });
      console.log(productAPI)
      console.log(response1)
        
//////////////////////////////////////////////////////////////////////
      
      city = response1.locations[i].location_names[0].name;

      targetAddress1 = response1.locations[i].address.address_line1;
      targetAddress2 = response1.locations[i].address.city;
      targetAddress3 = response1.locations[i].address.county;
      targetAddress4 = response1.locations[i].address.postal_code;
      targetAddress5 = response1.locations[i].address.region;
      targetAddress6 = response1.locations[i].address.state;
      targetTelephone =
        response1.locations[i].contact_information.telephone_number;
      itemName = productAPI.product.title;
      inStock = productAPI.product.availability_status;

      // itemName = response2.product.title;
      // console.log(response2);

      // inStock = response2.product.availibility_status;


      
      locationName.setAttribute("id", "listings" + i);
      




      // locationName.setAttribute("id", "listings" + i);

      var title = document.createElement("h3");
      var tarAddress1 = document.createElement("p");
      var tarAddress2 = document.createElement("p");
      var tarAddress3 = document.createElement("p");
      var tarAddress4 = document.createElement("p");
      var tarAddress5 = document.createElement("p");
      var tarAddress6 = document.createElement("p");
      var tarTelephone = document.createElement("p");
      var tarItemName = document.createElement("p");
      var tarItemAvail = document.createElement("p");

      // var tarItemName = document.createElement('p')

      // $(selector).addClass(className);

      title.textContent = city;
      tarAddress1.textContent = targetAddress1;
      tarAddress2.textContent = targetAddress2;
      tarAddress3.textContent = targetAddress3;
      tarAddress4.textContent = targetAddress4;
      tarAddress5.textContent = targetAddress5;
      tarAddress6.textContent = targetAddress6;
      tarTelephone.textContent = targetTelephone;
      tarItemName.textContent = itemName;
      tarItemAvail.textContent = inStock;

      

      locationName.appendChild(title);
      locationName.appendChild(tarAddress1);
      locationName.appendChild(tarAddress2);
      locationName.appendChild(tarAddress3);
      locationName.appendChild(tarAddress4);
      locationName.appendChild(tarAddress5);
      locationName.appendChild(tarAddress6);
      locationName.appendChild(tarTelephone);
      locationName.appendChild(tarItemName);
      locationName.appendChild(tarItemAvail);
      

      $("#listings").append(locationName);
    }
    
  });
  // display to target box (h3)Location name, (p)Address, Telephone number, store hours, item name Item in stock value
}

// function displayTarget (locationName, targetAddress, targetTelephone, itemName, inStock) {

//   console.log(locationName)

//   locationName = document.locations[0].location_names[0].name;
//   targetAddress = document.locations[1].address;
// targetTelephone = document.location[0].contact_information.telephone_number;
// itemName = document.product.esp_item.tcin;
// inStock = document.product.availibility_status;
//   console.log("hello");

//   targetContainer.textContent = locationName;

// // searchBtn.on('click', displayTarget)
// console.log("testing")

// }

// IMPORTANT!!!!!!!!
// incorporate 2nd server side API
// incorporate local storage for users last inputs
// mobile friendly, media queries???
// take data from API and display in target information container
// display to target box (h3)Location name, (p)Address, Telephone number, store hours, item name Item in stock value

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

//         for (var i = 0; i < data.length; i++) {
//           //Creating a h3 element and a p elementd
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
