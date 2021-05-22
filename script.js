let container = document.getElementsByClassName('container');
let searchButton = document.getElementsByClassName('#searchBtn');
//let searchWeather = document.getElementById('#search-weather');

//search button function



$(document).ready(function() {
    $("#searchBtn").on("click",function(e){
        e.preventDefault;
        
        // get value of search input
        let searchValue = $("#search-value").val();
        console.log(searchValue);
        coordinates(searchValue);
        return //coordinates(searchWeather);// pass searchInput here

    })
})



$(".history").on("click", "li", function() {
    search($(this).text())
})



//add recent searches to list
function row(text) {
    var li = $("li").addClass("list-recent-item list-recent-item-action").text(text)
    $(".history").append(li);
}

//weather function from API




function coordinates(search) {
    let searchQuery = search;
    console.log("searchQuery Data")
    console.log(searchQuery);
    let geocode = "https://api.openweathermap.org/data/2.5/weather?q=" + searchQuery + "&appid=1cd324bf48ec9ab030c05f3011f59f34&units=imperial"
    //let geocode = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchQuery + "&appid=1cd324bf48ec9ab030c05f3011f59f34&units=imperial"
    
        fetch(geocode)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
        console.log(data);
        let coord = data.coord;
        searchWeather(coord)
        
        return;
        
         })
        }
   
function searchWeather(coord) {

    let lat = coord.lat;
    let lon = coord.lon;
    console.log(lat);
    console.log(lon);
    let requestUrl = "http://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=1cd324bf48ec9ab030c05f3011f59f34&units=imperial";
    //run function on click
    //searchButton.addEventListener('click', weather)  
    //display function here
   

    
    //let coord = data[0];
   
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
       
        })  
        .then(function (data) {
            console.log(data);
        }
        ) 
        //display function here
    }
    //clear search
    //$("#today").empty();



        








