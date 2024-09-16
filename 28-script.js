console.log("====== DOM API - getElementById() ===========");
const headingElement = document.getElementById("heading");
console.log(headingElement);
console.log(headingElement.innerHTML);

console.log("====== DOM API - getElementsByTagName()  ===========");
const h3Element = document.getElementsByTagName("h3");
console.log(h3Element[0].innerHTML);

console.log("====== DOM API - getElementsByClassName()  ===========");
const techElements = document.getElementsByClassName("tech");
console.log(techElements);
for (const element of techElements) {
  console.log(element.innerHTML);
}

console.log("====== DOM API - querySelector()  ===========");
console.log(`========Fetching an element with it's tag name======== `);
const elementH3 = document.querySelector("h3");
console.log(elementH3.innerHTML);

console.log(`========Fetching an element with it's id ======== `);
const elementAng = document.querySelector("#ang");
console.log(elementAng.innerHTML);

console.log(`========Fetching an element with it's class name ======== `);
const elementTech = document.querySelector(".tech");
console.log(elementTech.innerHTML);

console.log("====== DOM API - querySelectorAll()  ===========");
console.log(`========Fetching all elements with li tag name ======== `);
const elementsLi = document.querySelectorAll("li");
for (const element of elementsLi) {
  console.log(element.innerHTML);
}

console.log(`========Fetching all elements with class name as tech ======== `);
const elementsTech = document.querySelectorAll(".tech");
for (const element of elementsTech) {
  console.log(element.innerHTML);
}

console.log(`======= Modifying the element==========`);
const h3_element = document.querySelector("h3");
h3_element.innerHTML = "My Skills";

console.log(`======= Applying style ==========`);
const angElement = document.querySelector("#ang");
angElement.style.color = "purple";
angElement.style.fontSize = "larger";

console.log(`======= Changing an attribute ==========`);
const elementA = document.querySelector("a");
elementA.setAttribute("href", "https://www.facebook.com/");

console.log(`======= Creating new node ==========`);
const element_h2 = document.createElement("h2");
const textNode = document.createTextNode("E-Commerce : Student Management");
element_h2.appendChild(textNode);
const elementSection = document.querySelector("section");
elementSection.appendChild(element_h2);

console.log(`======= Remove Child ==========`);
const elementUL = document.querySelector("ul");
const elementReact = document.querySelector("#react");
elementUL.removeChild(elementReact);
console.log("=========== Events =============");
const gradPara = document.querySelector("#grad");
gradPara.addEventListener("click", () => {
  console.log(`You clicked me aa...`);
  alert("Hey.. Man you clicked me ah!!");
});
const numberToSquare = document.querySelector("#numberToSquare");
const btnSquare = document.querySelector("#squareBtn");
btnSquare.addEventListener("click", () => {
  alert(numberToSquare.value * numberToSquare.value);
});

const btnVowels = document.querySelector("#vowelsBtn");
const vowels = "aeiou";
let vowelsStr = "";
btnVowels.addEventListener("click", () => {
  const givenName = prompt("Enter your name", "Jenny");
  const nameInLowerCase = givenName.toLowerCase();
  const isConfirm = confirm("Are you Sure ?");
  if (isConfirm) {
    for (const char of nameInLowerCase) {
      if (vowels.includes(char)) {
        vowelsStr = vowelsStr + char;
      }
    }
    alert(
      `Vowels : ${vowelsStr} in given name and it's count is : ${vowelsStr.length}`
    );
  }
});
