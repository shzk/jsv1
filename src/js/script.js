document.addEventListener("DOMContentLoaded", function(event) { 

    let budget,
        storeName,
        time,
        price,
        employeeCount;      

    mainList = {
            'budget': budget,
            'storeName': storeName,
            'shopGoods': [],
            'employers': {},
            'open': true,
            'discount': true
        };

    function start() {
        budget = prompt('Ваш бюджет?');
        while (isNaN(budget) || budget == '' || budget == null) {
            budget = prompt('Ваш бюджет?');
        }
        storeName = prompt('Название вашего магазина?').toUpperCase();
        time = 21;
    };
    start();

    function chooseGoods() {
        for (let i = 0; i < 3; i++ ) {
            let a = prompt('Какой тип товаров будем продавать?');
            
            if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1;
            }
        }
    };
    chooseGoods();
    
    function workTime(time) {
        if (time < 0) {
            console.log('This can\'t be!');
        } else if(time > 8 && time < 20) {
                console.log('It\'s working time :)');
            } else if (time < 24) {
                    console.log('It\'s too late :(');
                } else {
                    console.log('Something is wrong, there is only 24hrs in a day!');
                }
    };
    workTime(12);

    function discountPrice(price) {
        if (mainList.discount == true) {
            price = price*8/10;
        } else {
            price = price;
        };
        return price;
    };
    console.log('Total price = ' + discountPrice(200));

    function hireEmployee(employeeCount) {

        for (let i = 1; i <= employeeCount; i++) {
            let name = prompt('Укажите имя сотрудника?');
            if ((typeof(name)) !== 'string' || name == '' || name == null ) {
                i = i - 1;
            } else {
                mainList.employers['employee' + i] = name;
            }
            
        }
    };
    hireEmployee(4);



    console.log(mainList);
    console.dir( 'mainList object = ' + JSON.stringify(mainList, null, 4)); /* printable version of mainList object */

    let dayBudget = mainList.budget/30;
    document.getElementById("budget").innerHTML = dayBudget;

});