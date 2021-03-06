let bodyElement = document.querySelector('body');
let topM = 0;
let leftM = 0;
let rightM = 0;
let bottomM = 0;
bodyElement.addEventListener('keydown', event => {
    console.log(event.keyCode)
    let car = document.getElementById("img")

    if (event.keyCode == 38) {
        topM-=20
        car.setAttribute('style',`transform: matrix(1, 0, 0, 1, ${leftM}, ${topM}) rotate(90deg)`)
    }
    if(event.keyCode == 37){
        leftM-=20;
        car.setAttribute('style',`transform: matrix(1, 0, 0, 1, ${leftM},  ${topM})`)
    }
    if(event.keyCode == 40){
        topM+=20;
        car.setAttribute('style',`transform: matrix(1, 0, 0, 1, ${leftM}, ${topM}) rotate(-90deg)`)
    }
    if(event.keyCode == 39){
        leftM+=20;
        car.setAttribute('style',`transform: matrix(1, 0, 0, 1, ${leftM}, ${topM}) rotate(180deg)`)
    }
});
 