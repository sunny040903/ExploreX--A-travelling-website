/***********************
 * BUS DATA
 ***********************/
const buses = [
    { id: 1, name: "RedBus Express", from: "Mumbai", to: "Pune", time: "22:30", price: 899 },
    { id: 2, name: "Volvo AC Sleeper", from: "Mumbai", to: "Pune", time: "09:00", price: 1200 },
    { id: 3, name: "InterCity Travels", from: "Delhi", to: "Jaipur", time: "06:00", price: 750 }
];

/***********************
 * SEARCH BUS
 ***********************/
function searchBus() {
    localStorage.setItem("from", document.getElementById("from").value);
    localStorage.setItem("to", document.getElementById("to").value);
    localStorage.setItem("date", document.getElementById("date").value);
    window.location.href = "bus-list.html";
}

/***********************
 * SHOW BUS LIST
 ***********************/
if (document.getElementById("busList")) {
    let list = document.getElementById("busList");
    list.innerHTML = "";

    buses.forEach(bus => {
        list.innerHTML += `
            <div class="bus-card">
                <h3>${bus.name}</h3>
                <p><b>Route:</b> ${bus.from} → ${bus.to}</p>
                <p><b>Time:</b> ${bus.time}</p>
                <p><b>Fare:</b> ₹${bus.price}</p>
                <button onclick="selectBus(${bus.id})">Select Bus</button>
            </div>
        `;
    });
}

function selectBus(id) {
    localStorage.setItem("busId", id);
    window.location.href = "seat.html";
}

/***********************
 * SEAT SELECTION
 ***********************/
let selectedSeat = "";

if (document.getElementById("seats")) {
    let seatsDiv = document.getElementById("seats");
    seatsDiv.innerHTML = "";

    for (let i = 1; i <= 20; i++) {
        seatsDiv.innerHTML += `<div class="seat" onclick="selectSeat(this)">S${i}</div>`;
    }
}

function selectSeat(seat) {
    document.querySelectorAll(".seat").forEach(s => s.classList.remove("selected"));
    seat.classList.add("selected");
    selectedSeat = seat.innerText;
}

function confirmSeat() {
    if (!selectedSeat) {
        alert("Please select a seat");
        return;
    }
    localStorage.setItem("seat", selectedSeat);
    window.location.href = "buspassenger.html";
}

/***********************
 * PASSENGER DETAILS
 ***********************/
function savePassenger() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let email = document.getElementById("email").value;

    if (!name || !mobile) {
        alert("Please enter passenger name and mobile number");
        return;
    }

    localStorage.setItem("pname", name);
    localStorage.setItem("mobile", mobile);
    localStorage.setItem("email", email);

    window.location.href = "buspayment.html";
}

/***********************
 * PAYMENT PAGE
 ***********************/
if (document.getElementById("amount")) {
    let bus = buses.find(b => b.id == localStorage.getItem("busId"));
    document.getElementById("amount").innerText = bus.price;
    localStorage.setItem("totalAmount", bus.price);
}

function showPayment(method) {
    let box = document.getElementById("paymentBox");

    if (method === "UPI") {
        box.innerHTML = `<input type="text" placeholder="example@upi">`;
    } else if (method === "QR Code") {
        box.innerHTML = `
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=BUS_PAYMENT" />
            <p>Scan QR to Pay</p>
        `;
    } else if (method === "Credit Card" || method === "Debit Card") {
        box.innerHTML = `
            <input type="text" placeholder="Card Number">
            <input type="text" placeholder="Expiry MM/YY">
            <input type="password" placeholder="CVV">
        `;
    } else if (method === "Net Banking") {
        box.innerHTML = `<input type="text" placeholder="Net Banking User ID">`;
    }
}

function payNow() {
    localStorage.setItem("paymentStatus", "SUCCESS");
    localStorage.setItem("paymentId", "BUSPAY" + Math.floor(Math.random() * 1000000));
    window.location.href = "busticket.html";
}

/***********************
 * TICKET PAGE
 ***********************/
if (document.getElementById("ticket")) {
    let bus = buses.find(b => b.id == localStorage.getItem("busId"));

    document.getElementById("ticket").innerHTML = `
        <h3>🚌 BUS TICKET</h3>
        <p><b>Booking ID:</b> BUS${Math.floor(Math.random() * 100000)}</p>
        <p><b>Passenger:</b> ${localStorage.getItem("pname")}</p>
        <p><b>Mobile:</b> ${localStorage.getItem("mobile")}</p>
        <p><b>Bus:</b> ${bus.name}</p>
        <p><b>Route:</b> ${bus.from} → ${bus.to}</p>
        <p><b>Date:</b> ${localStorage.getItem("date")}</p>
        <p><b>Seat:</b> ${localStorage.getItem("seat")}</p>
        <p><b>Payment ID:</b> ${localStorage.getItem("paymentId")}</p>
        <p><b>Status:</b> ✅ Payment Successful</p>
        <p><b>Total Paid:</b> ₹${localStorage.getItem("totalAmount")}</p>
    `;
}