function sft() {
var start = performance.now();
document.getElementById("reps").innerHTML = Math.ceil(document.getElementById("age").value / 2);
var end = performance.now();
var wpn = end-start;
alert("Calculated in "+wpn+" ms 😎");
}
