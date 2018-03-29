document.addEventListener("DOMContentLoaded", function(event) { 

    let budget,
        storeName,
        time = 19;

    budget = prompt('Ваш бюджет?');
    storeName = prompt('Название вашего магазина?');  

    mainList = {
            'budget': budget,
            'storeName': storeName,
            'shopGoods': [],
            'employers': {'employer1' : 'Vasya', 'employer2' : 'Petya', 'employer3' : 'Masha'},
            'open': true
        };

    //initial solution
    /*for (let i = 0; i < 3; i++ ) {
        mainList.shopGoods.push(prompt('Какой тип товаров будем продавать?'));
    };*/

    //1st cycle method
    /*let i = 0;
    while (i < 3) {
        mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?');
        i++;
    };*/

    //2nd cycle method
    /*let i = 0;
    do {
        mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?');
        i++;
    } while (i < 3);*/

    //3rd cycle method
    for (let i = 0; i < 3; i++ ) {
        let a = prompt('Какой тип товаров будем продавать?');
        
        if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
            console.log('ok!');
            mainList.shopGoods[i] = a;
        }
    };
    
    if (time < 0) {
        console.log('This can\'t be!');
    } else if(time > 8 && time < 20) {
            console.log('It\'s working time :)');
        } else if (time < 24) {
                console.log('It\'s too late :(');
            } else {
                console.log('Something is wrong, there is only 24hrs in a day!');
            }

    console.log(mainList);
    console.dir( 'mainList object = ' + JSON.stringify(mainList, null, 4)); /* printable version of mainList object */

    let dayBudget = mainList.budget/30;
    document.getElementById("budget").innerHTML = dayBudget;
});