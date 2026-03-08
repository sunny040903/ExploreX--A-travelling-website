const ticket = JSON.parse(localStorage.getItem("pendingTicket"));
const summary = document.getElementById("paymentSummary");

if (!ticket) {
    alert("No booking found!");
    window.location.href = "train.html";
}

// Fare calculation
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const fareMap = {
    "Sleeper": randomBetween(550, 960),
    "3A": randomBetween(1500, 2500),
    "2A": randomBetween(3000, 4000),
    "1A": randomBetween(4500, 5500)
};

const totalFare = fareMap[ticket.class] * ticket.passengers;
ticket.fare = totalFare;


// Save fare for UPI page
ticket.fare = fare;
localStorage.setItem("pendingTicket", JSON.stringify(ticket));

summary.innerHTML = `
    <p><b>Passenger:</b> ${ticket.name}</p>
    <p><b>Route:</b> ${ticket.from} → ${ticket.to}</p>
    <p><b>Date:</b> ${ticket.date}</p>
    <p><b>Class:</b> ${ticket.class}</p>
    <p><b>Seats:</b> ${ticket.seats}</p>
    
`;

function payUPI() {
    window.location.href = "upi.html";
}