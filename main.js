let stack = document.querySelector(".stack");

// console.log([...stack.children].reverse().forEach(i => stack.append(i)));

[...stack.children].reverse().forEach(i => stack.append(i));



stack.addEventListener("click", swap);

function swap(e) {
let card = document.querySelector(".card:last-child");
console.log(card);
if (e.target !== card) return;
card.style.animation = "swap 700ms forwards";

setTimeout(() => {
    card.style.animation = "";
    stack.prepend(card);
}, 700);
}