let x = "John";
let y = "Doe";
console.log(x, " <> ", y);

const myself = {
myname: "Francesco",
mysurname: "Stefan",
emailaddress: "francescostefan98@gmail.com"

}

delete myself.emailaddress
console.log(myself);

let arrayofstrings = ["apple", "banana", "mango", "peach", "apricot", "pear", "pineapple", "sreawberry", "blackcurrant", "raspberry"]
console.log(arrayofstrings);

const generatearray = (count, max) => {
    const rands = [];
    while (rands.length < count) {
        const r = Math.floor(Math.random() * max);
        if (rands.indexOf(r) == -1) {
            rands.push(r);
        }
    }
    return rands;
}

generatearray(100, 100); 

const arrofnumberi = [];
for (let i = 0; i < 100; i++) {
    const randomizenumber = Math.floor(Math.random() * 100);
    arrofnumberi.push(randomizenumber)
}
console.log(arrofnumberi);

let arrofnumber = [2, 4, 45, 8, 78]

let minimum = Math.min(...arrofnumber);
console.log(minimum);
let maximum = Math.max(...arrofnumber)
console.log(maximum);

let arrayof = ["apple", "banana", "mango", "peach", "apricot", "pear", "pineapple", "sreawberry",]

let returnlongestarray = arrayof.length > arrayofstrings.length ? "arrayof" : "arrayofstrings";
console.log(returnlongestarray);

let thisarr = [];
for (let i = 0; i < 4; i++) {
    let current = []
    for (let k = 0; k < 10; k++) {
        current.push(Math.floor(Math.random() * 10))
    }
    thisarr.push(current)
}

console.log(thisarr);

const array = [1, 2, 3, 4]; 
let sum = 0; 
for (let i = 0; i < array.length; i++) {
     sum += array[i]; 
    } 
     console.log(sum);

let sum2 = 0;
 for (let i = 0; i < arrofnumber.length; i++) {
        sum2 += arrofnumber[i]; 
       } 
        console.log(sum2);

let biggernumber = sum > sum2 ? "array" : "arrofnumber" ;
console.log(biggernumber);

//------------------------------------------Dom Exercise----------------------------------------------//

const getelement = document.getElementById("container");
const gettd = document.querySelectorAll("td");

const changinginnertext = function () {
    const gettdd = document.querySelectorAll("td")
    gettdd.innerHTML = "cells"
}


const changingheading = function () {
    const geth1 = document.querySelector("h1")
    geth1.innerText = "page modified"

}

const appendrow = function () {
    const get3 = document.querySelector("tbody")
    const newTr = document.createElement("tr")
    const newtd = document.createElement("td")
    newTr.appendChild(newtd)

    get3.appendChild(newTr)
}

const addclass = function () {
    const addd = document.querySelector("td")
   
    addd.classList.add("text")
}

const background = function () {
    const geta = document.querySelector("tbody")
    const getas = geta.querySelectorAll("tr")
    getas.classList.add("text")
    const gettd = gettr.querySelectorAll("tr")

    const getele = gettd.querySelectorAll("a")
    getele.style.background = "red"
}



const createNewElement = function () {
    let text = document.createElement("li");
    text.innerText = "new list"
    text.appendChild(document.createElement("li"))
    document.getElementById("eee").appendChild(text)
  };


  const firstUlDisappear = function () {

   let getid = document.getElementById("eee")
    
   const ul = document.removeElement("li");
    getid.removeChild(ul);
  };

window.onload = function () {
    changingheading()
    changinginnertext()
    appendrow()
    addclass()
    background()
    createNewElement()
    firstUlDisappear()
}
