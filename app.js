// ch 21-25
//q 1
var fName = prompt('Enter your First Name');
var lName = prompt('Enter your last Name');
document.write('Question # 1 <br>');
var fullName = fName.toUpperCase() + ' ' + lName.toUpperCase();
document.write('Hello! ' + fullName + '<br>');
//q 2
var mobile = prompt('Enter your favorite mobile phone model');
document.write('Question # 2 <br>');
document.write('Your favorite phone is: ' + mobile + '<br>');
document.write('Lenght of String: ' + mobile.length + '<br>');
//q 3
document.write('Question # 3 <br>');
var str = 'Pakistan';
document.write('String: ' + str + '<br>');
document.write('Index of \'n\': ' + str.indexOf('n') + ' <br>');
//q 4
document.write('Question # 4 <br>');
str = 'Hello World';
document.write('String: ' + str + '<br>');
document.write('Last index of \'l\': ' + str.lastIndexOf('l') + ' <br>');
//q 5
document.write('Question # 5 <br>');
str = 'Pakistani';
document.write('String: ' + str + '<br>');
document.write('character at index 3: ' + str.slice(3, 4) + ' <br>');
//q 6
fName = fName + ' ';
document.write('Question # 6 <br>');
document.write('full Name: ' + fName.concat(lName) + ' <br>');
//q 7
document.write('Question # 7 <br>');
var city = 'Hyderabad';
document.write('City: ' + city + '<br>');
document.write('After Replace: ' + city.replace('Hyder', 'Islam') + '<br>');
//q 8
document.write('Question # 8 <br>');
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write(message + '<br>');
document.write(message.replace(/and/g, '&') + '<br>');
//q 9
document.write('Question # 9 <br>');
var str = '472';
document.write('Value: ' + str + ' <br>');
document.write('Type: ' + typeof str + ' <br>');
document.write('Value: ' + str + ' <br>');
document.write('Type: ' + typeof parseInt(str) + ' <br>');
//q 10
document.write('Question # 10 <br>');
var input = prompt('Write any thing');
document.write('User input: ' + input + '<br>');
document.write('Upper case: ' + input.toUpperCase() + '<br>');
//q 11
document.write('Question # 11 <br>');
document.write('User input: ' + input + '<br>');
var output = input.slice(0, 1).toUpperCase() + input.slice(1,)
document.write('Title case: ' + output + '<br>');
//q 12
document.write('Question # 12 <br>');
var num = 35.36;
var afterDot = (num.toString().split(".")[1]);
var beforeDot = (num.toString().split(".")[0]);
document.write('Number: ' + num + ' <br>');
document.write('Result: ' + afterDot + beforeDot + ' <br>');
//q 13
document.write('Question # 13 <br>');
var userName = prompt('Enter your Name');
if (userName.search(charCodeAt(33))) {
    alert('Please enter valid user name');
}
else if (userName.search(charCodeAt(44))) {
    alert('Please enter valid user name');
}
else if (userName.search(charCodeAt(46))) {
    alert('Please enter valid user name');
}
else if (userName.search(charCodeAt(64))) {
    alert('Please enter valid user name');
}
else {
    document.write('Your namr is: ' + userName + ' <br>');
}
// q 14
document.write('Question # 14 <br>');
var listofitmes = ["cake", "apple pie", "cookie", "chips", "patties"];
var finding = prompt("ENter the value to be find out in our bakery:");
finding = finding.toLowerCase();
var avaiable = false;
for (var i = 0; i <= listofitmes.length; i++) {
    if (finding === listofitmes[i]) {
        document.write(finding + " " + "is avaiable at index of" + " " + i + "<br>");
        avaiable = true;
        break;
    }
}
if (!avaiable) {
    document.write("We are sorry. " + finding + " is <b>not avaiable </b>in our bakery<br>");
}
// q 15
document.write('Question # 15 <br>');
var reg = /^[A-Za-z]+[A-Za-z0-9]*$/;
var str = prompt('Enter password');
if (str.match(reg)) {
    console.log('ok')
} else {
    console.log('no')
}
// q 16
document.write('Question # 16 <br>');
var university = "University of Karachi";
for (i = 0; i <= university.length; i++) {
    document.write(university.split(' ') + '<br>')
}
// q 17
document.write('Question # 17 <br>');
document.write('User input: ' + input + '<br>');
document.write('Last Charachter of input: ' + input[input.length - 1] + '<br>');
//q 18
document.write('Question # 18 <br>');
var text = "The quick brown fox jumps over the lazy dog";
var count = (text.match(/the/g) || []).length;
document.write('Text: ' + text + '<br>');
document.write('There are: ' + count + ' occurrence(s) of word \'the\'<br>');

// ch 26-30
document.write('Chapter 26-30 <br>');
// q 1
document.write('Question # 1 <br>');
var pnumber = prompt('Enter positive integer');
pnumber = Number(pnumber);
document.write('pnumber: ' + pnumber + '<br>');
document.write('round off vlaue: ' + Math.round(pnumber) + '<br>');
document.write('floor value: ' + Math.floor(pnumber) + '<br>');
document.write('ceil value: ' + Math.ceil(pnumber) + '<br>');
//q 2
document.write('Question # 2 <br>');
var nnumber = prompt('Enter negative floating point');
nnumber = Number(nnumber);
document.write('nnumber: ' + nnumber + '<br>');
document.write('round off vlaue: ' + Math.round(nnumber) + '<br>');
document.write('floor value: ' + Math.floor(nnumber) + '<br>');
document.write('ceil value: ' + Math.ceil(nnumber) + '<br>');
//q 3
document.write('Question # 3 <br>');
document.write('The absolute value of -4' + Math.abs(-4) + '<br>');
//q 4
document.write('Question # 4 <br>');
var rand = Math.round(Math.random() * 6);
// q 5
document.write('Question # 5 <br>');
var select = prompt('Head or Tail');
var toss = Math.ceil(Math.random() * 2);
console.log(toss);
if (toss === 1) {
    document.write('Its head <br>');
} else {
    document.write('Its tail <br>');
}
//q 6
document.write('Question # 6 <br>');
var randonRange = Math.ceil(Math.random() * 100);
document.write('random number b/w 1 and 100: ' + randonRange + '<br>');
//q 7
document.write('Question # 7 <br>');
var weight = prompt('Enter your weight in KG');
document.write('The weight of user is: ' + Number(weight) + ' KG<br>');
//q 8
document.write('Question # 8 <br>');
var guess = prompt('Enter number b/w 1 and 10');
var game = Math.ceil(Math.random() * 10);
if (guess == game) {
    alert('congratulate the user');
} else {
    alert('Try again');
}
// ch 31-34
document.write('Chapter 31-34 <br>');
// q1
document.write('Question # 1 <br>');
var date = new Date();
document.write(date + '<br>');
//q 2
document.write('Question # 2 <br>');
var mL = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var month = date.getMonth();
document.write('Current month: ' + mL[month] + ' <br>');
//q 3
document.write('Question # 3 <br>');
var daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var day = date.getDay();
document.write('Today is: ' + daysInWeek[day] + ' <br>');
//q 4
document.write('Question # 4 <br>');
if (day == 0 || day == 6) {
    document.write('Its Funday <br>');
}
//q 5
document.write('Question # 5 <br>');
var currentDate = date.getDate();
if (currentDate <= 15) {
    document.write('First fifteen days of the month <br>');
} else {
    document.write('Last days of the month <br>');
}
//q 6
document.write('Question # 6 <br>');
var minutes = (date.getTime() / 1000) / 60;
document.write('Current Date: ' + date + '<br>');
document.write('Elapsed miliseconds since January 1, 1970: ' + date.getTime() + '<br>');
document.write('Elapsed minutes since January 1, 1970: ' + minutes + '<br>');
//q 7
document.write('Question # 7 <br>');
var hour = date.getHours();
if (hour < 12) {
    document.write('It\'s AM <br>');
} else {
    document.write('It\'s PM <br>');
}
//q 8
document.write('Question # 8 <br>');
var laterDate = new Date('31 dec 2020');
document.write('laterDate: ' + laterDate + '<br>');
// ch 35-38
document.write('Chapter 35-38<br>');
// q1
document.write('Question # 1 <br>');
date();
function date() {
    var date = new Date();
    document.write(date);
}
// q 2
document.write('Question # 2 <br>');
greeting('Muneeb', 'Mansoor')
function greeting(fName, lName) {
    document.write('Hello ' + fName + ' ' + lName + '<br>');
}
// q 3
document.write('Question # 3 <br>');
var firstNum = prompt('Enter first number to add');
var secNum = prompt('Enter second number to add');
add(firstNum, secNum);
function add(firstNum, secNum) {
    document.write(Number(firstNum) + Number(secNum) + '<br>');
}
// q 4
document.write('Question # 4 <br>');
var first = prompt('Enter first number');
var opr = prompt('Enter operator');
var second = prompt('Enter second number');
cal(first, second, opr)
function cal(first, second, opr) {
    var result = eval(first + opr + second)
    document.write(result + '<br>');
}
// q 5
document.write('Question # 5 <br>');
var sqaureNum = prompt('Enter number for square');
square(sqaureNum)
function square(sqaureNum) {
    var result = sqaureNum * sqaureNum;
    document.write(result + '<br>');
}
// q 6
document.write('Question # 6 <br>');
var factorialNum = prompt('Enter number for factorial');
document.write('factorial of ' + factorialNum + ': ' + factorial(parseInt(factorialNum)) + '<br>');
function factorial(factorialNum) {
    var result = 1;
    for (var i = factorialNum; i >= 1; i--) {
        result *= i;
    }
    return result;
}
// q 7
document.write('Question # 7 <br>');
var start = prompt('Enter start number');
var end = prompt('Enter end number');
counting(Number(start),Number(end));
function counting(start,end) {
    var count = 0;
    for (var i = start; i <= end; i++) {
        document.write(i + ' ');
        count ++;
        if(count == 10){
            document.write('<br>');
            count = 0;
        }
    }
}
// // q 8
document.write('Question # 8 <br>');
// var hypotenuse = prompt('Enter Hypotenuse');
var base = prompt('Enter Base');
var perpendicular = prompt('Enter Perpendicular');
document.write('Hypotenuse: ' + hypo(Number(base, Number(perpendicular))) + '<br>');
function hypo(base, perpendicular) {
    var hypotenuse = square(base) * square(perpendicular);
    return Math.sqrt(hypotenuse);
}