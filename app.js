function ac() {
var start = performance.now();
let karma = 3;
let age = document.getElementById("age").value;
let avatar = age/karma;
document.getElementById("reps").innerHTML = Math.ceil(avatar);
var end = performance.now();
var wpn = end-start;
alert("Calculated in "+wpn+" ms 😎");
}
