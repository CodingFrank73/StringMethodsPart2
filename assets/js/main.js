
// ------------------------------- Aufgabe 1_4 ------------------------
const A = 'Susi is going to codingschool';

let a = A.slice(0, 4);
let b = A.slice(5, 7);
let c = A.slice(5, 17);
let d = A.slice(23);

document.write(a + "<br>" + b + "<br>" + c + d + "<br>" + d + "<br>" + a + " " + b + " " + d);


// ------------------------------- Aufgabe 1_5 ------------------------
const text = 'Susi is back from codingschool';

let txt1 = text.slice(0, 4);
let txt2 = text.slice(5, 7)
let txt3 = text.slice(24)

document.write("<br>" + "<br>" + txt1 + "<br>" + txt2 + "<br>" + txt3 + "<br>" + txt1 + " " + txt2 + " " + txt3);


// ------------------------------- Aufgabe 1_9 ------------------------
const text1 = "Sam is going to codingschool";
const text2 = "Susi";
const text3 = "programming bike";
const text4 = "and";

let t1 = text1.slice(0, 3);
let t2 = text1.slice(3, 16);
let t3 = text1.slice(22);

let result1 = t1.concat(t2, t3, " ", text4, " to the movie theater");
let result2 = t1.concat(t2, "movie theater");
let result3 = text2.concat(" ", text4, " ", t1, " are going to ", t3);
let result4 = text2.concat(" ", text4, " ", t1, " are going to gym and to the movie theater");
let result5 = text2.concat(t2, t3, " and to the movie theater")

document.write("<br>" + "<br>");
document.write(result1 + "<br>");
document.write(result2 + "<br>");
document.write(result3 + "<br>");
document.write(result4 + "<br>");
document.write(result5 + "<br>");