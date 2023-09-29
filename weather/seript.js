//    to get class name in html
let sk = document.querySelector(".sk")
let siva=document.querySelector(".siva")
let as = document.querySelector(".as")

// to click function for the weather detalies to get the api values
    siva.addEventListener('click',(event)=>{
    event.preventDefault();
// to enter the name city is store by Name
    let Name=(sk.value)
    
    let apiKey = "cc86f1689f25fe0c147c87a9e570177c";
        // to api for the weather
        
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${Name}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => {
    as.innerHTML="";
// temperature and main from the api weather
    let temperature = data.main.temp;
    let weat=data.weather[0].main
        console.log(temperature);
        // to create the element temprature
    let mains=document.createElement('p')
        mains.innerHTML = `<b>Temperature : ${temperature}℃</b>
    <br><b>☁️${weat}</b>`
    as.appendChild(mains)

    })
    .catch(error=>{
    console.log('enter correct',error)
})
})