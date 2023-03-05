console.log(1);
console.log("I");
setTimeout( () => {
    console.log("eat");
}, 2000)
console.log("Ice Cream");
console.log(5);
console.log(6);

function doSomething(){
    console.log(3);
}

let num = 0;
const intervalId = setInterval(()=>{
    console.log(num++)
}, 1000)