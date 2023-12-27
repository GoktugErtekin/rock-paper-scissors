let scissors = document.querySelector('.scissors');
let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let spock = document.querySelector('.spock');
let lizard = document.querySelector('.lizard');


scissors.addEventListener("click", (e) => {
    let selectedElement = e.target.className;
    console.log(selectedElement, "seçildi");
});
// rock.addEventListener("click", (e) => {
//     let selectedElement = e.target;
//     console.log(selectedElement, "seçildi");
// });
// paper.addEventListener("click", (e) => {
//     let selectedElement = e.target;
//     console.log(selectedElement, "seçildi");
// });
// spock.addEventListener("click", (e) => {
//     let selectedElement = e.target;
//     console.log(selectedElement, "seçildi");
// });
// lizard.addEventListener("click", (e) => {
//     let selectedElement = e.target;
//     console.log(selectedElement, "seçildi");
// });