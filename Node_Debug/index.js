var axios=require('axios');

var URL="https://restcountries.eu/rest/v2/all";


axios.get(URL).then(function (response) {


    let CountryList=response.data;
    let StatusCode=response.status;

    console.log(CountryList)
    console.log(StatusCode)


}).catch(function (error){
    console.log(error)
})