
let callCount = 0; //counter (1-5)
async function getInfo(){
    if(callCount>5) return;
    callCount++;
    let rawData = await fetch('https://randomuser.me/api')
    let obj = await rawData.json();
    let data = obj.results[0];

    console.log(data)
    document.getElementById("img" + callCount).src = data.picture.large;
    document.getElementById("name" + callCount).innerHTML = data.name.title + " " + data.name.first + " " + data.name.last;
    document.getElementById("cell" + callCount).innerHTML = data.cell;
    document.getElementById("city" + callCount).innerHTML = data.location.city;
    document.getElementById("country" + callCount).innerHTML = data.location.country;

}