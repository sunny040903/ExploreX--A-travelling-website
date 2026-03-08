const ticket = JSON.parse(localStorage.getItem("pendingTicket"));
const upiDetails = document.getElementById("upiDetails");

if (!ticket) {
    alert("No payment data found!");
    window.location.href = "train.html";
}

upiDetails.innerHTML = `
    <p><b>Passenger:</b> ${ticket.name}</p>
    <p><b>Route:</b> ${ticket.from} → ${ticket.to}</p>
    
`;

function confirmPayment() {
    alert("UPI Payment Successful!");

    ticket.status = "CONFIRMED";
    ticket.transactionId = "UPI" + Math.floor(Math.random() * 1000000000);

    localStorage.setItem("confirmedTicket", JSON.stringify(ticket));
    localStorage.removeItem("pendingTicket");

    window.location.href = "ticket.html";
}
const berthTypes = ["LB", "UB", "MB"];

ticket.berths = [];

for (let i = 0; i < ticket.passengers; i++) {
    const berth = berthTypes[Math.floor(Math.random() * berthTypes.length)];
    const number = Math.floor(Math.random() * 60) + 1;
    ticket.berths.push(`${berth} ${number}`);
}