// Cruise Data
const cruises = [{
        id: 1,
        name: "Indian Ocean Explorer",
        route: "India → South Africa",
        days: "12 Days",
        price: 85000
    },
    {
        id: 2,
        name: "Pacific Dream Cruise",
        route: "India → Australia",
        days: "15 Days",
        price: 110000
    },
    {
        id: 3,
        name: "Atlantic Luxury Cruise",
        route: "UK → USA",
        days: "18 Days",
        price: 140000
    },
    {
        id: 4,
        name: "South America Delight",
        route: "Brazil → Argentina",
        days: "7 Days",
        price: 65000
    },
    {
        id: 5,
        name: "European Grand Cruise",
        route: "UK → France → Spain → Portugal → Italy",
        days: "14 Days",
        price: 125000
    },
    {
        id: 6,
        name: "International Party Cruise",
        route: "India / UK / USA / Hawaii / Brazil / Italy",
        days: "10 Days",
        price: 160000
    }
];


function searchCruise() {
    localStorage.setItem("from", from.value);
    localStorage.setItem("to", to.value);
    localStorage.setItem("date", date.value);
    window.location.href = "cruise-list.html";
}

// Show Cruises
if (document.getElementById("cruiseList")) {
    let list = document.getElementById("cruiseList");
    cruises.forEach(c => {
        list.innerHTML += `
        <div class="cruise-card">
            <h3>${c.name}</h3>
            <p><b>Route:</b> ${c.route}</p>
            <p><b>Duration:</b> ${c.days}</p>
            <p><b>Fare:</b> ₹${c.price}</p>
            <button onclick="selectCruise(${c.id})">Select Cruise</button>
        </div>`;
    });
}

function selectCruise(id) {
    localStorage.setItem("cruiseId", id);
    window.location.href = "cabin.html";
}

// Cabin Selection
if (document.getElementById("cabins")) {
    let div = document.getElementById("cabins");
    ["Standard", "Deluxe", "Ocean View", "Luxury Suite", "Party Deck"].forEach(c => {
        div.innerHTML += `<div class="seat" onclick="selectCabin(this)">${c}</div>`;
    });
}

let selectedCabin = "";

function selectCabin(cabin) {
    document.querySelectorAll(".seat").forEach(s => s.classList.remove("selected"));
    cabin.classList.add("selected");
    selectedCabin = cabin.innerText;
}

function confirmCabin() {
    localStorage.setItem("cabin", selectedCabin);
    window.location.href = "cruise-ticket.html";
}

// Prices
const foodPrices = {
    "Veg Buffet": 3000,
    "Non-Veg Buffet": 4500,
    "Seafood Special": 6000,
    "Luxury Dining": 8000
};

const partyPrices = {
    "No Party": 0,
    "DJ Night": 2500,
    "International DJ": 5000,
    "VIP Party Deck": 10000
};

// Existing confirmCabin function (MODIFIED)
function confirmCabin() {
    localStorage.setItem("cabin", selectedCabin);
    window.location.href = "food.html";
}

// Save food & party
function saveFood() {
    let food = document.getElementById("food").value;
    let party = document.getElementById("party").value;

    localStorage.setItem("food", food);
    localStorage.setItem("party", party);

    let cruise = cruises.find(c => c.id == localStorage.getItem("cruiseId"));

    let total =
        cruise.price +
        foodPrices[food] +
        partyPrices[party];

    localStorage.setItem("totalAmount", total);
    window.location.href = "cruisepayment.html";
}

// Show total on payment page
if (document.getElementById("amount")) {
    document.getElementById("amount").innerText =
        localStorage.getItem("totalAmount");
}

// Payment (Demo)
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
    window.location.href = "cruise-ticket.html";
}


// Ticket Page (UPDATED)
if (document.getElementById("ticket")) {
    let cruise = cruises.find(c => c.id == localStorage.getItem("cruiseId"));
    document.getElementById("ticket").innerHTML = `
        <h3>🚢 CRUISE TICKET</h3>
        <p><b>Booking ID:</b> CRZ${Math.floor(Math.random()*100000)}</p>
        <p><b>Cruise:</b> ${cruise.name}</p>
        <p><b>Route:</b> ${cruise.route}</p>
        <p><b>Duration:</b> ${cruise.days}</p>
        <p><b>Cabin:</b> ${localStorage.getItem("cabin")}</p>
        <p><b>Food:</b> ${localStorage.getItem("food")}</p>
        <p><b>Party:</b> ${localStorage.getItem("party")}</p>
        <p><b>Travel Date:</b> ${localStorage.getItem("date")}</p>
        <p><b>Payment ID:</b> ${localStorage.getItem("paymentId")}</p>
        <p><b>Status:</b> ✅ Payment Successful</p>
        <p><b>Total Paid:</b> ₹${localStorage.getItem("totalAmount")}</p>
    `;
}