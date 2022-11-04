const url = 'https://api.openweathermap.org/data/2.5/';
const key = '6a45b581f7ffdc442cf9d6c40e7ece34';
const cityBar = document.getElementById('cityBar');
const btn = document.getElementById('btn');

function getResult(cityName){
   // console.log(cityName);
    let request = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=eng`
   //console.log(request);
   fetch(request)
   .then(weather => {
    return weather.json();
   })
   .then(display)
}


function display(object){
    console.log(object);
    const city = document.querySelector(".city");
    city.innerHTML=`${object.name}`
    const temp = document.querySelector(".temp");
    temp.innerHTML=`${Math.round(object.main.temp)}`+ " °C";
    const text = document.querySelector(".text");
    text.innerHTML = `${object.weather[0].main}`;
}
btn.addEventListener('click',((event)=>{
        getResult(cityBar.value)
}));


