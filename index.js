//1
let x = 11, y = true, z = 'java script', q = '100';
console.log(typeof x); //number
console.log(typeof y); //boolean
console.log(typeof z); //string
console.log(typeof q); //string

//1 function

// function task1(answer) {
//     answer = prompt('enter something');
//     console.log(typeof answer);
// }
// task1();

//2
// let greeting = 'Hello ', userName;
// if (confirm('lets get acquainted')){
//     userName = prompt('What is your name?');
//     alert(greeting+ userName);
// } else {
//     alert('you canceled the action');
// }

//2function

// function task2(greeting, userName) {
//     let greeting="Hello "
//     if (confirm('lets get acquainted')){
//     userName = prompt('What is your name?');
//     alert(greeting+ userName);
// } else {
//     alert('you canceled the action');
// }
// }
// task2()

//3
let quater = 22;
if (quater <= 15) {
    console.log('the first quater');
} else if (quater <= 30) {
    console.log('second quater');
} else if (quater <= 45) {
    console.log('third quater');
} else if (quater <= 59) {
    console.log('forth quater')
} else {
    console.log('does not exist');
}
// function 3
function task3(quater) {
    if (quater <= 15) {
    console.log('the first quater');
} else if (quater <= 30) {
    console.log('second quater');
} else if (quater <= 45) {
    console.log('third quater');
} else if (quater <= 59) {
    console.log('forth quater')
} else {
    console.log('does not exist');
}
}
console.log(task3(5));

//4

for (num = 10; num <= 50; num++){
    if(num%5==0){
    console.log(num)};
}
// function 4
function task4(minlim,maxlim) {
    let num;
    for (num = minlim; num <= maxlim; num++){
    if(num%5==0){
    console.log(num)};
}  
}

//5
 res5=5;
for (lim1=5; res5 <= 12; lim1++){
    res5 = lim1 * res5;

}
console.log(res5);
//не уверена в правильности задания 5

function task5(lim1, lim2) {
    if (lim1 >= 5 && lim2 <= 12) {
        result6 = lim1 * lim2;
    }
}
task5(5, 6);
// последнее задание 

function menu(number) {
    number = prompt(' enter task number');
    if (number = 1) {
        alert('Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль');
    }
     else if (number = 2) {
        alert('Создайте переменные greeting со значением...');
    }
    else if(number = 3) {
        alert('Определите в какую четверть часа попадает ввыденное количество мин');
    }
    else if (number = 4) {
        alert(' Вывод чисел от 10 до 50, которые кратны 5');
    }
    else if (number = 5) {
        alert('Найти произведение чисел в пределах от lim1 до lim2 ');
    }
    else {
        alert('Задание 5 оформите функцией');
    }
}













    




