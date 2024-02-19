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

// Code Select Seat and Price 
let seatCount = 0;
let preventDouble = 0;
const tickets = document.getElementsByClassName("seatClass");
for (let index = 0; index < tickets.length; index++) {
    const ticket = tickets[index];
    ticket.addEventListener("click", function (event) {

        const elementId = event.target.getAttribute("id");

        if (preventDouble < 4) {
            const buttonElement = document.getElementById(elementId);
            if (buttonElement) {
                buttonElement.disabled = true;
            }
            preventDouble++;
        }

        const ticketIdNumber = ticket.innerText;

        const ticketIdNumberShow = document.getElementById('ticketIdNumberShow');
        const tckIdShow = document.createElement("p");
        tckIdShow.innerText = ticketIdNumber;
        if (document.getElementsByClassName('ticketPrice').length < 4) {
            ticketIdNumberShow.appendChild(tckIdShow);
            event.target.style.backgroundColor = "#1DD100";
            event.target.style.color = "white";
        }

        const ticketClassShow = document.getElementById('ticketClassShow');
        const ticketClass = document.createElement("p");
        ticketClass.innerText = "Economy";
        if (document.getElementsByClassName('ticketPrice').length < 4) {
            ticketClassShow.appendChild(ticketClass);
        }

        // Update total ticket price after adding ticket
        if (document.getElementsByClassName('ticketPrice').length < 4) {
            const ticketPrice = document.createElement("p");
            ticketPrice.innerText = "550";
            ticketPrice.classList.add('ticketPrice');
            ticketPriceShow.appendChild(ticketPrice);

            updateTotalPrice();
        } else {
            alert("Sorry, you cannot buy more than 4 tickets");
        }


        // Total Seat Left Number
        const totalSeat = document.getElementById('seatsLeft');
        const minSeats = 36;
        if (parseInt(totalSeat.innerText) > minSeats) {
            let minusSeatNumber = parseInt(totalSeat.innerText) - 1;
            totalSeat.innerText = minusSeatNumber;
        }

        //Total Buy Ticket Number 
        if (parseInt(document.getElementById('selectedSeat').innerText) < 4) {
            seatCount++;
            const currentSelectedSeat = document.getElementById('selectedSeat');
            currentSelectedSeat.innerText = seatCount;
        }

    })

}

// Coupon button click event listener
const couponBtn = document.getElementById('coupon-btn')
couponBtn.addEventListener("click", function () {
    const couponElement = document.getElementById("coupon-input").value;
    if (total == 2200) {
        if (couponElement === "NEW15") {
            couponCode(0.15);
        }

        else if (couponElement === "Couple 20") {
            couponCode(0.20);
        }
        else {
            alert("Enter A Valid Coupon");
        }

    }
    else {
        alert("Coupon only validate if you buy 4 tickets");
    }
})

let grandTotalElement = document.getElementById("grandTotal");

function couponCode(elementId) {
    const discountElement = total * elementId;

    let grandTotalElement = document.getElementById("grandTotal");
    grandTotalElement.innerText = total - discountElement;

    const discountId = document.getElementById('discount');
    const discountCreateElement = document.createElement("p");
    discountCreateElement.innerText = discountElement;
    discountId.appendChild(discountCreateElement);

    const addElement = document.getElementById('couponBox');
    addElement.classList.add('hidden');
    const removeElement = document.getElementById('discountDiv');
    removeElement.classList.remove('hidden');

}


function scrollSection() {
    var currentSection = document.getElementById('PHParibahan');
    if (currentSection) {
        var offsetTop = currentSection.offsetTop;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}



// For Modal Function 
function modalHide() {
    const addElement = document.getElementById('bodyID');
    addElement.classList.add('opacity-0');
}

function modalShow() {
    const addElement = document.getElementById('bodyID');
    addElement.classList.remove('opacity-0');
}

function modalActive() {
    if (seatCount <= 0) {
        alert("Please select at least one ticket");
        buttonIdDisable.disabled = true;
    } else {
        // buttonIdDisable.disabled = false;       
        modalHide();
    }

}



document.addEventListener('DOMContentLoaded', function () {
    var nameInput = document.getElementById("name-Input");
    var phoneInput = document.getElementById("phone-Input");
    var nextButton = document.getElementById("next-button");

    function checkValidity() {
        if (nameInput.value.trim() !== "" && phoneInput.value.trim() !== "") {
            nextButton.disabled = false;
        } else {
            nextButton.disabled = true;
        }
    }

    nameInput.addEventListener('input', checkValidity);
    phoneInput.addEventListener('input', checkValidity);
});