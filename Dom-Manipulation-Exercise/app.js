// 1.
const cont = document.getElementById('container');
// 2.
const newCont = document.querySelector('section')
// 3.
const secondLi = document.querySelectorAll('.second')
// 4.
const thirdOlLi = document.querySelector('ol .third')
// 5. 
const newH1 = document.createElement('h1');
newH1.textContent = "Hello!";
cont.prepend(newH1);
// 6.
const div = document.querySelector('.footer');
div.classList.add('main');
// 7.
div.classList.remove('main');
// 8.
const li = document.createElement('li');
// 9.
li.textContent = "four";
// 10.
const ul = document.querySelector('ul');
ul.append(li);
// 11. 
//CSS
// .green{
//     background-color: green;
// }
const ol = document.querySelectorAll('ol li');

for(let lis of ol){
    lis.classList.add('green');
}
// 12.
div.remove();