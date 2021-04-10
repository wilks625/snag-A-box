$(document).ready(function () {
  console.log("ready!");

  let searchBtn = $("#search-btn");

  searchBtn.on("click", getTargetStoreApi);

});
let locationName = document.createElement("div");

function getTargetStoreApi() {
  locationName.innerHTML = "";
  let zipInput = $("#zip-input").val();
  let radiusInput = $("#radius-input").val();

  console.log(zipInput);
  console.log(radiusInput);

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
    } 

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
      });
      // console.log(productAPI)
      // console.log(response1)
        

      
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

      locationName.setAttribute("id", "listings" + i);
      
      var title = document.createElement("h2");
      var tarAddress1 = document.createElement("p");
      var tarAddress2 = document.createElement("p");
      var tarAddress3 = document.createElement("p");
      var tarAddress4 = document.createElement("p");
      var tarAddress5 = document.createElement("p");
      var tarAddress6 = document.createElement("p");
      var tarTelephone = document.createElement("p");
      var tarItemName = document.createElement("h4");
      var tarItemAvail = document.createElement("h4");

      title.textContent = city;
      tarAddress1.textContent = targetAddress1;
      tarAddress2.textContent = targetAddress2;
      tarAddress3.textContent = targetAddress3;
      tarAddress4.textContent = targetAddress4;
      tarAddress5.textContent = targetAddress5;
      tarAddress6.textContent = targetAddress6;
      tarTelephone.textContent = targetTelephone;
      tarItemName.textContent = itemName;
      tarItemAvail.textContent = "Availability: " + inStock;

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
}

