function ac() {
var start = performance.now();
let karma = 3;
let age = document.getElementById("age").value;
let avatar = age/karma;
let aham = avatar/age;
document.getElementById("avts").innerHTML = Math.ceil(avatar);
document.getElementById("aham").value = aham;
var end = performance.now();
var wpn = end-start;
alert("Calculated in "+wpn+" ms 😎");
}
