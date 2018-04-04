document.addEventListener("DOMContentLoaded", function(event) { 
    let btn_open = document.getElementById('open-btn'),
        name_value = document.getElementsByClassName('name-value')[0],
        budget_value = document.getElementsByClassName('budget-value')[0],
        goods_value = document.getElementsByClassName('goods-value')[0],
        items_value = document.getElementsByClassName('items-value')[0],
        employers_value = document.getElementsByClassName('employers-value')[0],
        discount_value = document.getElementsByClassName('discount-value')[0],
        isopen_value = document.getElementsByClassName('isopen-value')[0],
        goods_item = document.getElementsByClassName('goods-item'),
        goods_button = document.getElementsByTagName('button')[1],
        budget_button = document.getElementsByTagName('button')[2],
        employers_button = document.getElementsByTagName('button')[3],
        choose_items = document.querySelector('input[id=items]'),
        time_value = document.querySelector('input[id=time]'),
        budget_input = document.querySelector('input[id=budget]'),
        employers_input = document.querySelectorAll('input[class=hire-employers-item]'),
        money,
        storeName,
        price;

    btn_open.addEventListener('click', () => {
         money = prompt('Ваш бюджет?');
         while (isNaN(money) || money == '' || money == null) {
             money = prompt('Ваш бюджет?','');
         }
         budget_value.textContent = money;
         mainList.budget = money;
         storeName = prompt('Название вашего магазина?','').toUpperCase();
         name_value.textContent = storeName;
         mainList.storeName = storeName;
    });

    goods_button.addEventListener('click', () => {
        for (let i = 0; i < goods_item.length; i++ ) {
            let a = goods_item[i].value;
            
            if ((typeof(a)) === 'string' && (typeof(a)) !== null && /*a != '' && */a.length < 50) {
                mainList.shopGoods[i] = a;
                goods_value.textContent = mainList.shopGoods;
            } else {
                i = i - 1;
            }
        }
    });

    choose_items.addEventListener('change', () => {
        let items = choose_items.value;
        if (isNaN(items) && items != '' ) {
            mainList.shopItems = items.split(','); 
            mainList.shopItems.sort();
            items_value.textContent = mainList.shopItems;
        }

    });

    time_value.addEventListener('change', () => {
        let time = time_value.value;
        if (time < 0) {
            console.log('This can\'t be!');
            mainList.open = false;
        } else if(time > 8 && time < 20) {
                console.log('It\'s working time :)');
                mainList.open = true;
            } else if (time < 24) {
                    console.log('It\'s too late :(');
                    mainList.open = false;
                } else {
                    console.log('Something is wrong, there is only 24hrs in a day!');
                    mainList.open = false;
                };
        if (mainList.open == true) {
            isopen_value.style.backgroundColor = 'green';
        } else {
            isopen_value.style.backgroundColor = 'red';
        }
    });

    budget_button.addEventListener('click', () => {
        let dailyBudget = money / 30;
        budget_input.value = dailyBudget;
        if (dailyBudget > 300) {
            mainList.discount = true;
            discount_value.style.backgroundColor = 'green';
            price = price*8/10;
        } else {
            mainList.discount = false;
            discount_value.style.backgroundColor = 'red';
            price = price;
        }
    });

    employers_button.addEventListener('click', () => {
        for (let i = 0; i < employers_input.length; i++) {
            let name = employers_input[i].value;
            mainList.employers['employee' + i] = name;

            employers_value.textContent += mainList.employers['employee' + i] + ', ';
        }
    });
     

    mainList = {
            budget: money,
            storeName: storeName,
            shopGoods: [],
            employers: {},
            open: false,
            discount: false,
            shopItems: []
        };
});