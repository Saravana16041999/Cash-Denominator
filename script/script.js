`use strict`;

// veriable
const billedEl = document.getElementById('BilledAmount');
const paidEl = document.getElementById('PaidAmount')
const CalculateEl = document.getElementById(`calculate`)
const errorEl =  document.getElementById('correction')


//function for calculating denominator
const OldDenominator = [2000 , 500, 200, 100, 50, 20, 10, 5, 1];
const newDenominatoe = [];

function calculation(change){
    for(i = 1; i < OldDenominator.length; i++){
        newDenominatoe.push(Math.trunc(change / OldDenominator[i])) 
        change = change % OldDenominator[i];  
    }
    console.log(newDenominatoe)
}

let valueEl = document.getElementById('value')
let countEl = document.getElementById('count')
function display(){
    valueEl.className = 'value'
    countEl.className = 'count'
    valueEl.innerText = 'value'
    countEl.innerText = 'count'
    let addul = document.createElement('ul')
    addul.clssList.add('deno')
    sucesscontainer = document.getElementById('sucessContainer')
    sucesscontainer.appendChild(addul);
}




//event Listener for calculation
CalculateEl.addEventListener('click',()=>{
    const billamt = Number(billedEl.value)
    const paidamt = Number(paidEl.value)
    let Change = paidamt - billamt
    if (billamt > 0 && paidamt > 0){
        if(Change >= 0){
            errorEl.className = 'sucess'
            errorEl.textContent = `balance ${Change}`
            calculation(Change)
            display()
        }else{
            errorEl.className = 'error'
            errorEl.textContent = 'No Balance is There '+ Change
        }
        
    }else{
        errorEl.className = 'error'
    }
})
