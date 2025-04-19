let subT = document.getElementById("subtitle")
const subtitles = ["Miśka Montis!", "Strona typu internetowa", "Kurzy jeździec", "Przynajmniej działa", "Top text bottom text", "lol xd"]


function randomSubtitle(){
    subT.innerHTML = subtitles[Math.floor(Math.random() * subtitles.length)];
}

window.addEventListener("load", (event)=>{
    randomSubtitle();
});