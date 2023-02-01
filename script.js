// https://api.dictionaryapi.dev/api/v2/entries/en/apple
let input = document.getElementById("search");
const btn = document.getElementById("searchBtn");
const para = document.querySelector(".para");
btn.addEventListener("click", () => {
    let link = `https://api.dictionaryapi.dev/api/v2/entries/en/${input.value}`;
    fetchData(link);
})
async function fetchData(passLink) {
    try {
        let request = await fetch(passLink);
        let data = await request.json();
        para.innerHTML = data[0].meanings[0].definitions[0].definition;
        let audio = document.querySelector(".audio");
        audio.src = data[0].phonetics[0].audio;
        audio.style.display = "block";
    } catch (error) {
        if (error) {
            para.innerHTML = "No meaning available for this word please search for any other word";
            para.style.color = "red";
            console.clear();
        }
    }

}