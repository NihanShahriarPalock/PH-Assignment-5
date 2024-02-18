
let totalPrice = 0;
function updateTotalPrice() {
    // Calculate total price
    let total = 0;
    const ticketPrices = document.getElementsByClassName('ticketPrice');
    for (let i = 0; i < ticketPrices.length; i++) {
        total += parseInt(ticketPrices[i].innerText);
    }

    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerText = total;
}
const tickets = document.getElementsByClassName("kbd");
// console.log(tickets);
for (let index = 0; index < tickets.length; index++) {
    const ticket = tickets[index];
    // console.log(element);
    ticket.addEventListener("click",function(){
        // console.log("Clicked");
        const ticketIdNumber = ticket.innerText;
       
        const ticketIdNumberShow = document.getElementById('ticketIdNumberShow');
        const tckIdShow = document.createElement("p");
        tckIdShow.innerText = ticketIdNumber;
        ticketIdNumberShow.appendChild(tckIdShow);


        const ticketClassShow = document.getElementById('ticketClassShow');
        const ticketClass = document.createElement("p");
        ticketClass.innerText = "Economy";
        ticketClassShow.appendChild(ticketClass);

        updateTotalPrice();
        const ticketPriceShow = document.getElementById('ticketPriceShow');
        const ticketPrice = document.createElement("p");
        ticketPrice.innerText = "550"; 
        ticketPrice.classList.add('ticketPrice'); 
        ticketPriceShow.appendChild(ticketPrice);
        updateTotalPrice();

    })
    
}

// For Coupon code
const couponBtn = document.getElementById('coupon-btn')
couponBtn.addEventListener("click",function(){
    const couponElement = document.getElementById("coupon-input").value;
    console.log(couponElement);
})


function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    element.classList.add('bg-[#1DD100]');
    element.classList.add('text-[#FFFFFF]');
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}



function selectSingleSeat(element){
    getElementTextById(element);
    setBackgroundColor(element);
    // setKeyboardColor(selectSingle);
    // console.log("Clicked", element);

}