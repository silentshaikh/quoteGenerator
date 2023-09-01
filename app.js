let myQuote = document.getElementById("para");
let headQuote = document.getElementById("head");
let quoteBtn = document.getElementById("btn");
const quoteGenerator = async () => {
    try {
        let myFetch = await fetch("https://api.quotable.io/random");
    let myData = await myFetch.json();
    myQuote.innerHTML = myData.content;
    headQuote.innerHTML = myData.author;
    } catch (error) {
        alert(error);
    }
};
quoteBtn.addEventListener("click",quoteGenerator);
quoteGenerator();