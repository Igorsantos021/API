function Converter(valorcep) {
    fetch("https://cep.awesomeapi.com.br/json/" + valorcep)
        .then((response) => response.json())
        .then((data) => alert( data.address+ " "+ data.district+ " " +  data.city))   
        .then((error) => console.log(error))
        }


document.getElementById("VerCep").addEventListener("click",()=>{
    let valorcep = document.getElementById("valorcep").value
    Converter(valorcep)
})




