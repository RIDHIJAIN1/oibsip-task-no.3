var celcius = document.getElementById("Celcius")
var fahrenheit = document.getElementById("Fahr")

Celcius.addEventListener('input',function(){
    let c = this.value;
    let f = (c*9/5) + 32;

    Fahr.value = f;
})
Fahr.addEventListener('input',function(){
    let f= this.value;
    let c = (f - 32) * 5/9;

    Celcius.value = c;
})