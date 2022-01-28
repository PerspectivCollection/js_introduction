//oppgave 1
let btnRemove = document.getElementById("remove-btn");

let pRemove = document.getElementById("remove");

btnRemove.addEventListener("click", () => {
    pRemove.remove();
    //event.preventDefault();
    console.log("show remove-btn in log")
})

// Oppgave 2
let btnChange = document.getElementById("change-btn");

let pChange = document.getElementById("change");

btnChange.addEventListener("click", () => {
    pChange.innerHTML = "hei";
    //event.preventDefault();
    console.log("show when change, text in log")
})

// Oppgave 3
let pText = document.querySelector("#input-text");
let inputText = document.querySelector("#input")
pText.innerHTML = null;

inputText.addEventListener("keyup", (e) => {
    let c = e.key;
    console.log(`show input, text in log = ${c}`);
    pText.innerHTML += c;
});

// Oppgave 4
const myList = ['item one', 'item two', 'item three'];

const btnCreateLi = document.getElementById("write-list");

const getUl = document.getElementById("ul");

const createLi = document.createElement("li");

btnCreateLi.addEventListener("click", () => {
    for (let i = 0; i < myList.length; i++) {
        createLi.innerHTML = myList[i];
        getUl.appendChild(createLi.cloneNode(true));
    }
})

// Oppgave 5

//prøv å skrive denne på en annen måte 
const btnSelect = document.getElementById("create");
const addHtml = document.getElementById("text");
const section = document.getElementById("select")
const placeholder = document.getElementById("placeholder")

btnSelect.addEventListener("click", () => {
    const sectionHtml = section.value;
    const text = addHtml.value;
    placeholder.innerHTML += `<${sectionHtml}> ${text} <${sectionHtml}>`;
});


// Oppgave 6
let liEl = document.getElementById("list");

const btnRemoveLi = document.getElementById("remove-li");


const liRemevEvent = () => {
    const remLi = liEl;
    if (remLi) {
        liEl.removeChild(remLi.firstChild);
    }
}
//have to dubbel click   
btnRemoveLi.addEventListener("click", liRemevEvent);

// Oppgave 7
const inputLength = document.getElementById("name");
const btn4Lengt = document.getElementById("order");

inputLength.addEventListener("keyup", () => {
    const count = 4;
    const word4 = inputLength.value;
    const word = word4.slice(0, count) + (word4.length > count ? "..." : "");
    console.log(`inneholder  ${word}`)
    if (word.length >= 4) {
        btn4Lengt.style.border = "2px solid red";
    }
    if (word.length <= 4) {
        btn4Lengt.style.border = "";
    }
})

// Oppgave 8
const childColor = document.querySelectorAll(".children li");
const btnColor = document.getElementById("color");

btnColor.addEventListener("click", () => {
    //I used the see the listconsole.log(childColor)
    for (let i = 0; i < childColor.length; i++) {
        childColor[i].i = i + 1;
        if ((childColor[i].i % 2) == 0) {
            childColor[i].style.backgroundColor = "green";
            //i used the console.log(childColor[i] +"red") se where it worked
        }
        else {
            childColor[i].style.backgroundColor = "pink";
        }
    }
})

