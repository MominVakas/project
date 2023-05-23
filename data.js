
const apiUrl = "https://646c1ce9fb1d0909485d10e7--thriving-youtiao-d2c1ca.netlify.app/script.json";

async function api(){
    try{
        const response = await fetch(apiUrl);
    var data = await response.json();
        console.log(data[0].address);
    }catch{
        console.log("Please Check Internet Connection !  ")
    }


}
api();