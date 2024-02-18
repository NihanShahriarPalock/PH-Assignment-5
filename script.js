// let total = 0;
function updateTotalPrice() {
    
    total = 0;
    const ticketPrices = document.getElementsByClassName('ticketPrice');
    for (let i = 0; i < ticketPrices.length; i++) {
        total += parseInt(ticketPrices[i].innerText);
    }

    // Update total price display
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.innerText = total;

    let grandTotalElement = document.getElementById("grandTotal");
    grandTotalElement.innerText = total;

}

// Adding event listeners to ticket buttons
const tickets = document.getElementsByClassName("kbd");
for (let index = 0; index < tickets.length; index++) {
    const ticket = tickets[index];
    ticket.addEventListener("click", function () {
        const ticketIdNumber = ticket.innerText;

        const ticketIdNumberShow = document.getElementById('ticketIdNumberShow');
        const tckIdShow = document.createElement("p");
        tckIdShow.innerText = ticketIdNumber;
        if (document.getElementsByClassName('ticketPrice').length < 4) {
            ticketIdNumberShow.appendChild(tckIdShow);
        }

        const ticketClassShow = document.getElementById('ticketClassShow');
        const ticketClass = document.createElement("p");
        ticketClass.innerText = "Economy";
        if (document.getElementsByClassName('ticketPrice').length < 4) {
            ticketClassShow.appendChild(ticketClass);
        }

        // Update total price after adding ticket
        if (document.getElementsByClassName('ticketPrice').length < 4) {
            const ticketPrice = document.createElement("p");
            ticketPrice.innerText = "550"; // Example ticket price
            ticketPrice.classList.add('ticketPrice'); 
            ticketPriceShow.appendChild(ticketPrice);

            // Update total price after adding ticket
            updateTotalPrice();
        } else {
            alert("Sorry, you cannot buy more than 4 tickets");
        }
    })
}

// Coupon button click event listener
const couponBtn = document.getElementById('coupon-btn')
couponBtn.addEventListener("click", function () {
    const couponElement = document.getElementById("coupon-input").value;
    if (total == 2200) {
        if (couponElement==="NEW15"){
            couponCode(0.15);
        }

        else if (couponElement==="Couple 20"){
            couponCode(0.20);
        }
        else{
            alert("Enter Correct Coupon");
        }
   
    }
    else {
        alert("Coupon only validate if you buy 4 tickets");
    }
})


let grandTotalElement = document.getElementById("grandTotal");
grandTotalElement.innerText = total;



function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId)
    if (document.getElementsByClassName('ticketPrice').length < 4){
        element.classList.add('bg-[#1DD100]');
        element.classList.add('text-[#FFFFFF]');

    }
   
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

function couponCode(elementId){
    const discountElement = total * elementId;

    let grandTotalElement = document.getElementById("grandTotal");
    grandTotalElement.innerText = total - discountElement ;


    // const discountPrice = total - discountElement;
    // console.log(discountElement);
    const discountId = document.getElementById('discount');
    const discountCreateElement = document.createElement("p");
    discountCreateElement.innerText = discountElement;
    discountId.appendChild(discountCreateElement);
    
    const addElement = document.getElementById('couponBox');
    addElement.classList.add('hidden');
    const removeElement = document.getElementById('discountDiv');
    removeElement.classList.remove('hidden');

}
