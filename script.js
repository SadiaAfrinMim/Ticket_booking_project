function anyidindicate(id){
  const anyid=  document.getElementById(id)
  return anyid;
}

let selectedseat =[]
let totalprice = 0
function handleSelectSeat(event){
    const value = event.innerText
    console.log(event.innerText);
    if(selectedseat.includes(value)){
        return alert("selected seat already added")
    }
    else if(selectedseat.length< 4){
        event.classList.add('bg-green-500','text-white')
    selectedseat.push(event.innerText)
   
    let totalbooked = anyidindicate('total-booked')
    totalbooked.innerText = selectedseat.length
    // decrease availabel seat
    const availablesit = anyidindicate('available-seat')
    const availableseatvalue = parseFloat(availablesit.innerText)
    const availablesitdecrease = availableseatvalue - 1
    availablesit.innerText = availablesitdecrease
    
    console.log(typeof availableseatvalue);
    const selctedseatEl = anyidindicate('selected-seat')
    // remove default text 
    const defaulttext = anyidindicate('default-text')
    defaulttext.classList.add('hidden')
    selctedseatEl.innerHTML += `



     <li class="text-base flex justify-between font-normal">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        
    </li>
    `
    // update price
    const totalpriceEl = anyidindicate('total-price')

    totalprice +=550
    totalpriceEl.innerText = totalprice.toFixed(2)

    console.log(selectedseat);
    // coupon btn
    const couponbtn = anyidindicate('coupon-btn')
    const couponinputfield =anyidindicate('coupon-field')
    if(selectedseat.length > 3){
        couponbtn.removeAttribute('disabled')
        couponinputfield.removeAttribute('disabled')

    }


    }
    else{
        return alert("maximum seat booked")
    }

    

  
    
}

document.getElementById('coupon-btn').addEventListener('click',function(){
    copunsave = 0
    const couponinputvalue = anyidindicate('coupon-field').value
    console.log(couponinputvalue);
    if(couponinputvalue !== 'mim660' && couponinputvalue !== 'sadia660'){
        alert("your provided coupon is not valided")
        return;
    }
      
   console.log(totalprice);
    if(couponinputvalue === 'mim660'){
          copunsave = totalprice * .15
    }
    else if(couponinputvalue === 'sadia660'){
         copunsave = totalprice * .20
    }

    // show couponn price 
    const showcouponprice = anyidindicate('show-coupon-price')
    showcouponprice.innerHTML = `
    <P>DISCOUNT</P<p>-BDT :<span>${copunsave.toFixed(2)}</span> </P
    
    `
    const grandtotal = anyidindicate('grand-total')
    const grandtotalvalue = totalprice - copunsave
    console.log(grandtotalvalue);
    grandtotal.innerText =  grandtotalvalue.toFixed(2)
})


document.getElementById('phone-number').addEventListener('input',function(e){
    const inputvalue = e.target.value
    console.log(inputvalue);
    if(inputvalue >=11){
       const nextbtn = anyidindicate('next-btn'); 
       nextbtn.removeAttribute('disabled')
    }
})

document.getElementById('btn-continue').addEventListener('click',function(){
    window.location.reload()
})
