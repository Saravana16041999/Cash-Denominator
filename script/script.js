`use strict`;

// veriable
const billedEl = document.getElementById('BilledAmount');
const paidEl = document.getElementById('PaidAmount')
const CalculateEl = document.getElementById(`calculate`)
const errorEl =  document.getElementById('correction')
let sucesscontainer = document.getElementById('sucessContainer')

//function for calculating denominator
const OldDenominator = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
const Count = [];

function calculation(change){
    for(i = 1; i <= OldDenominator.length; i++ ){
        let deno = Math.floor(change/OldDenominator[i])
        Count.push(deno)
        change = change % OldDenominator[i]
        
        }
}
let valueEl = document.getElementById('value')
let countEl = document.getElementById('count')
function display(){
    valueEl.className = 'value'
    countEl.className = 'count'
    valueEl.innerText = 'value'
    countEl.innerText = 'count'
    // let addul = document.createElement('ul')    
    // sucesscontainer.appendChild(addul);
    // addul.classList.add('demo')

    for(i =1 ; i < OldDenominator.length; i ++){
        let liel = document.createElement('li')
        valueEl.appendChild(liel) 
        liel.classList.add('listiteam')
        liel.innerHTML = OldDenominator[i]
        

        let liel2 = document.createElement('li')
        countEl.appendChild(liel2) 
        liel2.classList.add('listiteam1')
        liel2.innerHTML = Count [i]
    }
    // for(i =1 ; i < OldDenominator.length; i ++){
        
    // }
    
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
