document.addEventListener("DOMContentLoaded", function(event) { 

    let budget,
        storeName;

    budget = prompt('Ваш бюджет?');
    storeName = prompt('Название вашего магазина?');

    let shopGoods = [];

    for (let i = 0; i < 3; i++ ) {
        shopGoods.push(prompt('Какой тип товаров будем продавать?'));
    };

    mainList = {
            'budget': budget,
            'storeName': storeName,
            'shopGoods': shopGoods,
            'employers': {'employer1' : 'Vasya', 'employer2' : 'Petya', 'employer3' : 'Masha'},
            'open': true
        };
    console.log(mainList);
    console.dir( 'mainList object = ' + JSON.stringify(mainList, null, 4)); /* printable version of mainList object - but there is no open method - why? */

    let dayBudget = mainList.budget/30;
    document.getElementById("budget").innerHTML = dayBudget;
});