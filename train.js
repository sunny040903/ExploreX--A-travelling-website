let generatedOTP;
let ticketData;

const form = document.getElementById("trainForm");
const otpSection = document.getElementById("otpSection");
const ticketSection = document.getElementById("ticketSection");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    generatedOTP = Math.floor(100000 + Math.random() * 900000);
    alert("Your OTP is: " + generatedOTP); // Simulation

    ticketData = {
        name: name.value,
        mobile: mobile.value,
        from: from.value,
        to: to.value,
        date: date.value,
        class: document.getElementById("class").value,
        seats: seats.value
    };

    otpSection.classList.remove("hidden");
});

function verifyOTP() {
    const enteredOTP = document.getElementById("otpInput").value;

    if (enteredOTP == generatedOTP) {

        // Save ticket data for payment page
        localStorage.setItem("pendingTicket", JSON.stringify(ticketData));

        // Redirect to payment page
        window.location.href = "payment.html";

    } else {
        document.getElementById("otpMsg").innerText = "Invalid OTP!";
        document.getElementById("otpMsg").style.color = "red";
    }
}

function showTicket() {
    otpSection.classList.add("hidden");
    ticketSection.classList.remove("hidden");

    tName.innerText = ticketData.name;
    tMobile.innerText = ticketData.mobile;
    tRoute.innerText = ticketData.from + " → " + ticketData.to;
    tDate.innerText = ticketData.date;
    tClass.innerText = ticketData.class;
    tSeats.innerText = ticketData.seats;
}

function printTicket() {
    window.print();
}
const stations = [
    { code: "DAD", name: "Dadar" },
    { code: "BAWA", name: "Bandra Terminus" },
    { code: "BVI", name: "Borivali" },
    { code: "LTT", name: "Lokmanya Tilak Terminus" },
    { code: "KYN", name: "Kalyan Junction" },
    { code: "CSMT", name: "Chhatrapati Shivaji Maharaj Terminus" },
    { code: "THN", name: "Thane" },
    { code: "PUNE", name: "Pune Junction" },
    { code: "MMCT", name: "Mumbai Central" },
    { code: "NDLS", name: "New Delhi" },
    { code: "ANVT", name: "Anand Vihar Terminal" },
    { code: "PNBE", name: "Patna Junction" },
    { code: "HYB", name: "Hyderabad Deccan" },
    { code: "NGP", name: "Nagpur" },
    { code: "JBP", name: "Jabalpur Junction" },
    { code: "MMR", name: "Manmad Junction" },
    { code: "PNQ", name: "Panjim (Madgaon)" },
    { code: "BSL", name: "Bhusaval Junction" },
    { code: "ST", name: "Satna" },
    { code: "PRYJ", name: "Prayagraj Junction" },
    { code: "LKO", name: "Lucknow" },
    { code: "MAS", name: "Chennai Central" },
    { code: "SBC", name: "Bengaluru City" },
    { code: "TPTY", name: "Tirupati" },
    { code: "PURI", name: "Puri" },
    { code: "UDZ", name: "Udaipur City" },
    { code: "JP", name: "Jaipur" },
    { code: "ADI", name: "Ahmedabad Junction" },
    { code: "ST", name: "Surat" },
    { code: "BHC", name: "Gandhinagar Capital" },
    { code: "BRC", name: "Vadodara Junction" },
    { code: "VAPI", name: "Vapi" },
    { code: "JAT", name: "Jalandhar Cantt" },
    { code: "ASR", name: "Amritsar" },
    { code: "AGTL", name: "Agartala" },
    { code: "VSKP", name: "Visakhapatnam" },
    { code: "BZA", name: "Vijayawada Junction" },
    { code: "NZM", name: "Hazrat Nizamuddin" },
    { code: "NJP", name: "New Jalpaiguri" },
    { code: "TVC", name: "Thiruvananthapuram Central" },
    { code: "ERS", name: "Ernakulam Junction" },
    { code: "CLT", name: "Kozhikode" },
    { code: "YPR", name: "Yesvantpur Junction" },
    { code: "UBL", name: "Hubballi Junction" },
    { code: "MYS", name: "Mysuru Junction" },
    { code: "MDU", name: "Madurai Junction" },
    { code: "UMB", name: "Ambala Cantt" },
    { code: "GZB", name: "Ghaziabad" },
    { code: "SNP", name: "Sonipat" },
    { code: "PNP", name: "Panipat Junction" }
];

const datalist = document.getElementById("stationsList");

stations.forEach(s => {
    const option = document.createElement("option");
    option.value = `${s.name} (${s.code})`;
    datalist.appendChild(option);
});