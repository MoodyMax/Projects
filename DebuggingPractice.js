function countdown(num){
    let timer = setInterval(function(){
        num--;
        if(num <= 0){
            clearInterval(timer);
            console.log('DONE!');
        } else {
            console.log(num);
        }
    },1000)
}

function randomGame(){
    let counter = 1;
    let num;
    let timer = setInterval(function(){
        num = (Math.floor(Math.random() * 100)) / 100;
        if(num > .75){
            clearInterval(timer);
            console.log(`It took ${counter} tries before we got a number above .75! Your number: ${num}`);
        } else {
            console.log(`Your number ${num} is not above .75 (Tries:${counter})`);
            counter++;
        }
    },1000)
}