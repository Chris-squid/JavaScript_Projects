function My_First_Function() {      //Defining a function and naming it
    var str = "This text is green!"; //Defining a variable and giving it a
                                     //string value
    var result = str.fontcolor("green");//Using the fontcolor method on //str variable
    
    document.getElementById("Green_Text").innerHTML = result;//Putting the value //of result into HTML element with "Green_Text" id
}

function myFunction() {   //Added a window alert ()
    alert("Hello\nHow are you?")//text for window alert ()
}

document.write("<h1>HELLO!</h1><p>JAVA SCRIPT IS FUN!</p>");// used the document.write () method

var Family = "The Robinsons", Dad = "Chris", Mom = "Kat";//added variables with strings and font colors
var Family = Family.fontcolor("red");
var Dad = Dad.fontcolor("green");
var Mom = Mom.fontcolor("purple");
document.write(Dad + Mom + Family);

var X,Y; 

X = 5;
Y = 6;

document.write(X + Y);






