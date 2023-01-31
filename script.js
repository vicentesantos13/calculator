
function insert(n){
    var number = document.querySelector('.screen').innerHTML;
    document.querySelector('.screen').innerHTML = number + n;
}

function clean(){
    document.querySelector('.screen').innerHTML = '';
}

function calc(){
    let result = document.querySelector('.screen').innerHTML;
    if(result){
        document.querySelector('.screen').innerHTML = eval(result)
    }
}
function back(){
    let result = document.querySelector('.screen').innerHTML;
    document.querySelector('.screen').innerHTML = result.substring(0, result.length -1);
}