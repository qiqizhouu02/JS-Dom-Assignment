const paragraphs = document.getElementsByTagName("p");
const numShanghai = document.getElementById("Shanghai").getElementsByTagName("p");
const numBeijing = document.getElementById("Beijing").getElementsByTagName("p");

document.getElementById('All Food').addEventListener('click', e => {
    totalElements();
})

document.getElementById('ShanghaiBut').addEventListener('click', e => {
    totalShanghai();
})

document.getElementById('BeijingBut').addEventListener('click', e => {
    totalBeijing();
})

function totalElements() {
    document.getElementById("One").innerHTML = `There are ` + (paragraphs.length) + ` total dishes on the page.`;
}

function totalShanghai() {
    document.getElementById("Two").innerHTML = `I recommend these ` + (numShanghai.length) + ` Shanghai dishes.`;
}

function totalBeijing() {
    document.getElementById("Three").innerHTML = `I recommend these ` + (numBeijing.length) + ` Beijing dishes.`;
}