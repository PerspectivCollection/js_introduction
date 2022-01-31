const obj1 = [
    { name: "anne", age: 18 },
    { name: "knut", age: 22 },
    { name: "kalle", age: 20 },
    { name: "berit", age: 24 },
    { name: "per", age: 27 },
    { name: "linnea", age: 29 },
    { name: "hans", age: 15 },
    { name: "hege", age: 56 },
    { name: "anette", age: 34 },
    { name: "tommas", age: 45 }
];


const innerLi = document.getElementById("listName"); //ul element
const btnsearch = document.getElementById("search") //search id 
const searchName = document.getElementById("name") //input search id 
const searchAge = document.getElementById("age") //input search id 
const valueName = document.getElementById("personName"); //li name 
const valueAge = document.getElementById("personeAge")


const array1 = [];
innerLi.innerHTML = null;

for (let i = 0; i < obj1.length; i++) {
    array1.push(Object.values(obj1[i].name));
    array1.join("")
    //print name "a", "n"
    innerLi.innerHTML += `<li><span>${obj1[i].name}</span>  <span>${obj1[i].age}</span></li>`;
}

const nameArray = [];

//print normal "an" from array name "a", "n",
for (let t = 0; t < array1.length; t++) {
    nameArray.push(array1[t].join(""));
}

//input search name 
let compereName = [];

const found = document.getElementById("finnes");

const btnName = () => {
    const k = searchName.value;
    compereName.push(k);

    function equal(a, b) {
        return a.some(function (arr) {
            return b === arr;
        })
    }
    let trueName = false;

    for (var i = 0; i < nameArray.length; i++) {
        trueName += equal(compereName, nameArray[i])
    }

    if (trueName) {
        found.innerHTML = "navnet finnes i listen"
        found.style.border = "2px solid green";
    } else {
        found.innerHTML = "dette navnet finnes ikke i listen"
        found.style.border = "2px solid red";
    }
}
btnsearch.addEventListener("click", (btnName));
