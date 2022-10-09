`use strict`;

// veriable
const billedEl = document.getElementById('BilledAmount');
const paidEl = document.getElementById('PaidAmount')
const CalculateEl = document.getElementById(`calculate`)
const errorEl =  document.getElementById('correction')
let change = Number(billedEl.value) - Number(paidEl.value)


//function for calculating balance
function balance(){
    errorEl.textContent = 'balance is '+change
}

//function for calculating denominator
const OldDenominator = [2000,500,100,50,10,1]
const newDenominatoe = []

function calcdeno(){
    let i = 1
    while(i < OldDenominator.length ){
        newDenominatoe.push(Math.floor(change/OldDenominator[i]))
        change = change % newDenominatoe[i] 
    }

}
console.log(calcdeno())

//event Listener for calculation
CalculateEl.addEventListener('click',()=>{
    if (billedEl.value === '' || paidEl.value ===''){
        errorEl.className = 'error'
    }else{
        errorEl.className = 'sucess'
        balance();
    }
})