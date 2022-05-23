
/*
//что если я хочу скопировать один массив и вставить его в новый ка это сделать?

let task1 = ['liza', 'vasiliy', 'vadim'];
let i;
for (i = task1.length - 1; i >= 0;  i--){
    console.log(task1[i]);
}

let task2 = [10, 20, 50, 100, 0, 0, 300, 0, 500, 600, 0, 0];
let count=0;
for (i = 0; i < task2.length; i++){
    if (task2[i] == 0) {
        console.log(i);
        count += 1;
    }
}

for (i = 0; i < task2.length; i++){
    if (task2[i] == 0) break;
    console.log(task2[i]);
    count++
}

for (i; i < task2.length-1; i++){
    count = task2[i] + task2[i + 1];
    console.log(count);
}

let arr = []; j; 
for (i = 0; i < task2.length; i++){
    count[j] = a[j] + task2[i + 1];
}

for (i = 0; i < task2.length; i++){
    if (task2[i] == 0) break;
    console.log(task2[i]);
}

let arrZeroIndexes = [];

for (i = 0; i < task2.length; i++){
    if (task2[i] == 0) {
        arrZeroIndexes[] = i;
    }
} 
*/



// task 1
function repeatMsg(countMaxMsg) {
    countMaxMsg = prompt('Hi, enter some value');
    let i;
    for (i = 1; i <= countMaxMsg; i++){
        console.log('*');
    }
}

//task2
let arr = [50, 75, 2, 35, 55, 16, 100, 40, 97, 356, 899];
lim1 = 10; lim2 = 300; i;
function task2(arr){
    for (i = lim1; i <= lim2; i++){
        if (arr[i] % 5 == 0) {
            console.log(arr[i]);
        }
    }
}

//task3

let summEvenNumber = 0;
function task3(arr) {
    for (i = 0; i <= arr[i]; i++){
        if (arr[i] % 2 == 0) {
            summEvenNumber += i;
            console.log(summEvenNumber);
        }
    }
}


//task4
function task4(arr) {
    for (i = 0; i <= arr[i]; i++) {
        if (arr[i] <= 10) {
            arr[i] == 0;
        }
    }
}

//task5

let wholeNumbers = [-4, 6, 10, 5, 8, -3, -5.3]; i;
let finishedResult = [];
function num(wholeNumbers) {
    if (wholeNumbers[i] < 0) {
        wholeNumbers[i] *= 1000;
        finishedResult[wholeNumbers];
    }
    else {
        wholeNumbers[i] = i + ',0';
        finishedResult[wholeNumbers];
    }
}











    













    




