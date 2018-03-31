let btn = document.getElementById('open-btn'),
    fields = {
        name: document.getElementsByClassName('name-value')[0],
        budget: document.getElementsByClassName('budget-value')[0],
        goods: document.getElementsByClassName('goods-value')[0],
        items: document.getElementsByClassName('items-value')[0],
        employers: document.getElementsByClassName('employers-value')[0],
        discount: document.getElementsByClassName('discount-value')[0],
        isopen: document.getElementsByClassName('isopen-value')[0],
    },
    categories = document.getElementsByClassName('goods-item'),
    buttons = document.getElementsByClassName('main-functions')[0].getElementsByTagName('button'), //чтобы искать только кнопки в .main-functions
    inputs = {
        items: document.querySelector('input[id=items]'),
        time: document.querySelector('input[id=time]'),
        dailyBudget: document.querySelector('input[id=budget]')
    },
    employersNames = document.querySelectorAll('input[class=hire-employers-item]');

    console.log(btn);
    console.log(fields);
    console.log(categories);
    console.log(buttons);
    console.log(inputs);
    console.log(employersNames);