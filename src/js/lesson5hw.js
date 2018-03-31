let menu = document.getElementsByClassName('menu')[0],
    li = document.getElementsByClassName('menu-item'),
    tempLi = li[1];

menu.replaceChild(li[2], li[1]);
menu.insertBefore(tempLi, li[2]);
let newLi = li[3].cloneNode(true);
newLi.innerHTML = 'Пятый элемент';
menu.appendChild(newLi);


document.body.style.backgroundImage = 'url(img/apple_true.jpg)';


let title = document.getElementById('title');
let words = title.textContent.trim();
words = words.split(' ');
words.splice(3, 0, 'оригинальную');
words = words.join(' ');
title.textContent = words; //решил сделать так, а не через замену textContent - так интереснее )


document.querySelector('.adv').remove();


let reply = prompt('Как вы относитесь к технике Эпол?\
                     \nВаш ответ будет записан и отправлен в корпорацию добра\
                     \nПросто имейте это ввиду :)'); //стандартные проверки не стал добавлять
document.getElementById('prompt').textContent = reply;