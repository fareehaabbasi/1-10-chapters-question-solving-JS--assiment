//chapter#1 --------------------Alerts.
// alert ('Hello to js land.....')
// alert("Happy Coding");
// alert("Hello I can run js through my web browser's console");

//---------------------------------END------------------------------

//chapter#2 -------------------Variables For Strings.
//1;-
// var userName = 'Ali';
// alert (userName);

// //2
// var fullName = "Fareeha Abbasi";
// alert(fullName);

// //3
// let message = "Hello World!";
// alert(message);

// //4
// let Name = "John";
// let age = 16;
// let work = "Certificate Mobile applicant Development";
// alert(Name);
// alert(age);
// alert(work);

// //5
// let food = ["pizza", "burger", "sandwich"];
// alert(food);

//6
// let email = "abbasi@.com";
// alert("This is my email address " + "" + email);

//7
// let book = "A smarter way to learn javascript";
// alert("I am trying to learn from the Book " + book);

//8
// let display = "Yah! I can write HTML content through Javascript";
// document.write(display);

//9
// let food = ["pizza", "burger", "sandwich"];
// alert(food);
// document.write (food);

//---------------------------------END------------------------------

//Chapter#3 ------------- Variables For Number.
//1
// let age = 19;
// alert("I am " + age + " years old.");

//2
// let visit = 14;
// alert("You have visit this website " + visit + " times");

//3
// let birthday = 2005;
// alert("My birth year is " + birthday);
// document.write("My birth year is " + birthday);

//4
// let visitorName = "Minhan abeer";
// let productTitle = "M-size-Maxi";
// let quantity = 5;
// document.write(visitorName + " ordered " + productTitle + " total quantity is " + quantity + " in XYZ store");

//----------------------------------END---------------------------------

//Chapter#4 ----------------Variables Names: Legal & Illegal
//1
// let x = 10, y = 20, z = 30;
// document.write(x , y ,z);

//2
// ------------- 5 Legal Variable Names
// let firstName;     //Valid: Starts with a letter, uses camelCase.
// let _count;        //Valid: Starts with an underscore.
// let totalAmount$;  //Valid: Contains a dollar sign (allowed in variable names).
// let user2;         //Valid: Contains a number, but doesn't start with one.
// let myVar;         //Valid: Simple and follows naming conventions.
// -------------- 5 Illegal Variable Names
// let 1stPlace;      //Invalid: Starts with a number.
// let my-var;        //Invalid: Contains a hyphen (-), which is not allowed.
// let var;           //Invalid: var is a reserved keyword in JavaScript.
// let my var;        //Invalid: Contains a space.
// let @email;        //Invalid: Starts with a special character (@), which is not allowed.

//3
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<h4>Variables names can only contained $, numbers, _, letter, Or Capitalized</h4>");
// document.write("<h4>Variables must begins with a letter, $, or Capitalized</h4>");
// document.write("<h4>Variable names are Case Sensitive</h4>");
// document.write("<h4>Variable should not be JS keywords</h4>");

//----------------------------------END---------------------------------

//Chapter#5 --------------- Math Expression
// 1
// let num1 = 6;
// let num2 = 10;
// let num = (6 + 10);
// document.write("Sum of " + num1 + " and " + num2 + " is " + num);

//2
// let num1 = 6;
// let num2 = 10;
// let num = (6 - 10);
// document.write("Subtraction of " + num1 + " and " + num2 + " is " + num);

// let num1 = 6;
// let num2 = 10;
// let num = (6 * 10);
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + num);

// let num1 = 6;
// let num2 = 10;
// let num = (6 % 10);
// document.write("Modulus of " + num1 + " and " + num2 + " is " + num);

// let num1 = 6;
// let num2 = 10;
// let num = (6 / 10);
// document.write("Division of " + num1 + " and " + num2 + " is " + num);

//3
// let decl;
// document.write("<ul><li>Value after declaration is: " + decl + "</li></ul>");
// decl = 5;
// document.write("<ul><li>Initialized value is: " + decl + "</li></ul>");
// let decl1 = ++decl;
// document.write("<ul><li>Value after increment is: " + decl1 + "</li></ul>");
// let decl2 = decl1 + 7;
// document.write("<ul><li>Value after addition is: " + decl2 + "</li></ul>");
// let decl3 = --decl2;
// document.write("<ul><li>Value after decrement is: " + decl3 + "</li></ul>");
// let rem = decl3 % 3;
// document.write("<ul><li>The Reminder is: " + rem + "</li></ul>");

//4
//Buying-ticket cost
// let price = 600;
// let calc = price * 5;

// document.write("Total cost to buy 5 tickets is " + calc);

//5
// document.write("<h1>Table of 5</h1>");
// let table = 5;
// let table1 = table * 1;
// document.write("<p> 5 x 1 = " + table1 + "</p>")
// let table2 = table * 2;
// document.write("<p> 5 x 2 = " + table2 + "</p>");
// let table3 = table * 3;
// document.write("<p> 5 x 3 = " + table3 + "</p>");
// let table4 = table * 4;
// document.write("<p> 5 x 4 = " + table4 + "</p>");
// let table5 = table * 5;
// document.write("<p> 5 x 5 = " + table5 + "</p>");
// let table6 = table * 6;
// document.write("<p> 5 x 6 = " + table6 + "</p>");
// let table7 = table * 7;
// document.write("<p> 5 x 7 = " + table7 + "</p>");
// let table8 = table * 8;
// document.write("<p> 5 x 8 = " + table8 + "</p>");
// let table9 = table * 9;
// document.write("<p> 5 x 9 = " + table9 + "</p>");
// let table10 = table * 10;
// document.write("<p> 5 x 10 = " + table10 + "</p>");

//6
// let claus = 25;
// let fahrenheit = (claus * 9 / 5) + 32;
// document.write("<p>" + claus + "°C is " + fahrenheit + "°F" +"</p>");

// let fahrenheit2 = 70;
// let celsius2 = ((fahrenheit2 - 32) * 5) / 9;
// document.write(fahrenheit + "°F is " + claus + "°C");

//7
// let product1 = "Laptop";
// let price1 = 50000;
// let quantity1 = 2;

// let product2 = "Headphone";
// let price2 = 5000;
// let quantity2 = 1;

// let subtotal1 = price1 * quantity1;
// let subtotal2 = price2 * quantity2;
// let total = subtotal1 + subtotal2;
// let discount = total > 50000 ? total * 0.1 : 0;
// let finalTotal = total - discount;

// document.write("<p>" + `Product: ${product1}, Quantity: ${quantity1}, Subtotal: Rs.${subtotal1}` +"</p>");
// document.write("<p>" + `Product: ${product2}, Quantity: ${quantity2}, Subtotal: Rs.${subtotal2}` +"</p>");
// document.write("<p>" + `Total: Rs.${total}` +"</p>");
// document.write("<p>" + `Discount: Rs.${discount}` +"</p>");
// document.write("<p>" + `Final Total: Rs.${finalTotal}` +"</p>");

//----------------------------------END---------------------------------

//Chapter#6-9 --------------- Math Expression
//1
// document.write("Result");
// let a = 10;
// document.write ("<p> The Value of a is " + a +  "</p>");
// a = ++a;
// document.write("<p> The Value of ++a is " + a + "</p>");
// document.write("<p> Now the Value of a is " + a + "</p>");
// a = a++;
// document.write('')
// document.write("<p> The Value of a++ is " + a + "</p>");
// document.write("<p> Now the Value of a is " + a + "</p>");
// a = --a;
// document.write("");
// document.write("<p> The Value of --a is " + a + "</p>");
// document.write("<p> Now the Value of a is " + a + "</p>");
// a = a--;
// document.write("");
// document.write("<p> The Value of a-- is " + a + "</p>");
// document.write("<p> Now the Value of a is " + a + "</p>");

//2
// let a = 2, b = 1;
// let result = (--a - --b + ++b + b--);

// document.write("<p> a is " + a + ";</p>");
// document.write("<p> b is " + b + ";</p>");
// document.write("<p> Result is " + result + ";</p>");

//3
// let Name = prompt("What is your Name?");
// alert("Hello, " + Name + "! Welcome to our Website.")

//4
// let numWant = prompt("Enter a number for multiplication table:", 5);
// document.write("<h2>Multiplication Table of " + numWant + "</h2>");
// for (var i = 1; i <= 10; i++) {
//   document.write(numWant + " x " + i + " = " + numWant * i + "<br>");
// }

//5
// let m = "Math";
// let e = "English";
// let u = "Urdu";
// let totalMarks = 100;
// let obtMark1 = 70;
// let obtMark2 = 68;
// let Marks = (totalMarks + 200);
// let obtained = (obtMark1 + obtMark2)

// let calc1 = (obtMark1 / totalMarks) * 100;
// let calc2 = (obtMark2 / totalMarks) * 100;
// let percentage = (calc2 / calc1) * 100

// document.write("<h1>Subject total marks obtained marks percentage</h1>")
// document.write(m + " " + totalMarks + " " + obtMark1 + " " + calc1 + "%" +"<br>");
// document.write(e + " " + totalMarks + " " + obtMark2 + " " + calc2 + "%" +"<br>");
// document.write(u + " " + totalMarks + " " + obtMark2 + " " + calc2 + "%" + "<br>");
// document.write( " " + Marks + " " + obtained + " " + percentage + "%" );

//----------------------------------END---------------------------------

//Chapter# 9-11 --------------- User Input & Conditional statement.
//1
// let city = "Karachi";
// let enter = prompt("Enter Your city");

// if(enter === city){
//     document.write("Welcome! to the city of lights");
// }

//2
// let gender = "Male";
// let pro = prompt("Gender");

// if(pro === gender){
//     document.write("Good Morning, Sir")
// }else {
//     document.write("Good Morning, ma'am");
// }

//3
// let colors = prompt("Enter Traffic light color (Red):");
// let colors1 = prompt("Enter Traffic light color (Green):");
// let colors2 = prompt("Enter Traffic light color (Yellow):");
// let message = "";

// if (colors.toLowerCase === "Red") {
//   message = "Must Stop";
// } else if (colors1.toLowerCase === "Green") {
//   message = "Ready to move";
// } else if (colors2.toLowerCase === "Yellow") {
//   message = "Move now";
// } else {
//   message = "Invalid color!";
// }

// let tableHtml = `
//     <table class="table table-bordered table-striped table-hover">
//         <thead class="table-dark">
//             <tr>
//                 <th>Signal Color</th>
//                 <th>Message</th>
//             </tr>
//         </thead>
//         <tbody>
//             <tr>
//                 <td class="text-danger"><strong>Red</strong></td>
//                 <td>Must Stop</td>
//             </tr>
//             <tr>
//                 <td class="text-warning"><strong>Green</strong></td>
//                 <td>Ready to move</td>
//             </tr>
//             <tr>
//                 <td class="text-success"><strong>Yellow</strong></td>
//                 <td>Move now</td>
//             </tr>
//         </tbody>
//         <tfoot class="table-info">
//             <tr>
//                 <td><strong>You entered:</strong></td>
//                 <td>${message}</td>
//             </tr>
//         </tfoot>
//     </table>
// `;
// document.write(tableHtml);

//4
// let takeInp = +prompt("Enter your fuel");

// if(0.25 >= takeInp){
//     alert("Please refill the fuel of your car");
// }else {
//     alert("Your fuel is on the way");
// }

//5
//part-a
// let a = 4
// if(++a === 5){
//     alert("Given condition of variable is true"); //true
// }

//part-b
// let b = 82;
// if(b++ === 83){
//     alert("Given condition of variable is true"); //False
// }

//part-c
// let c = 12;
// if(c++ === 13){
//     alert("Condition 1 is true"); //false
// };
// if(c === 13){
//     alert("Condition 2 is true"); //true
// };
// if(++c === 14){
//     alert("Condition 3 is true"); //true
// };
// if(c === 14){
//     alert("Condition 4 is true"); //true
// }

//part-d
// let materialCost = 2000;
// let laborCost = 2000;
// let totalCost = materialCost + laborCost;
// if(totalCost === materialCost + laborCost){
//     alert("The cost equals");  //true
// }

//part-e
// if(true){
//     alert("true");  //This code is run
// };
// if(false){
//     alert("False")  //Not execute
// };

// //part-f
// if("car" < "car"){
//     alert("Car is smaller than car");  //False
// };

//6
function calculation() {
  let english = +prompt("Enter your english score");
  let urdu = +prompt("Enter your urdu score");
  let maths = +prompt("Enter your maths score");
  let totalMarks = 300;
  let obtained = english + urdu + maths;
  let percent = (obtained / totalMarks) * 100;

  let message = "";
  let grade = "";
  let remarks = "";
  let message1 = "";
  let grade1 = "";
  let remarks1 = "";
  let message2 = "";
  let grade2 = "";
  let remarks2 = "";
  let message3 = "";
  let grade3 = "";
  let remarks3 = "";
  let highlight = "";
  let highlight1 = "";
  let highlight2 = "";
  let highlight3 = "";

  if (percent >= 80) {
    grade = "A-one";
    remarks = "Brilliant";
    highlight = "table-success";
  }  else if (percent >= 70) {
    grade1 = "A";
    remarks1 = "Very Good";
    highlight1 = "table-success";
  } else if (percent >= 60) {
    grade2 = "B";
    remarks2 = "You need to improve";
    highlight2 = "table-success";
  } else {
    message3 = "Less then 50";
    grade3 = "Fail";
    remarks3 = "Sorry";
    highlight3 = "table-danger";
  }

  document.write(`
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" href="style.css">

      <div class="container d-flex justify-content-center align-items-center">
        <table class="table table-bordered table-striped table-hover">
            <thead class="table-dark">
                <tr>
                    <th>Percentage</th>
                    <th>Grade</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <tbody> 
                <tr class="${highlight}">
                    <td>Greater than 80</td>
                    <td>A-one</td>
                    <td>Excellent</td>
                </tr>
                <tr class="${highlight1}">
                    <td>Greater than 70</td>
                    <td>A</td>
                    <td>Good</td>
                </tr>
                <tr class="${highlight2}">
                    <td>Greater than 60</td>
                    <td>B</td>
                    <td>You need to improve</td>
                </tr>
                <tr class="${highlight3}">
                    <td>Greater than 50</td>
                    <td>Fail</td>
                    <td>sorry</td>
                </tr>
            </tbody>
        </table>
      </div>
    `);
}

calculation();
