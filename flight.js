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
        airline: document.getElementById("airline").value,
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
    tAirline.innerText = ticketData.airline;
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
    { code: "ATL", name: "Hartsfield–Jackson Atlanta International Airport, USA" },
    { code: "LAX", name: "Los Angeles International Airport, USA" },
    { code: "YYZ", name: "Toronto Pearson International Airport, Canada" },
    { code: "MEX", name: "Mexico City International Airport, Mexico" },
    { code: "LHR", name: "London Heathrow Airport, United Kingdom" },
    { code: "CDG", name: "Paris Charles de Gaulle Airport, France" },
    { code: "FRA", name: "Frankfurt Airport, Germany" },
    { code: "AMS", name: "Amsterdam Schiphol Airport, Netherlands" },
    { code: "PEK", name: "Beijing Capital International Airport, China" },
    { code: "DXB", name: "Dubai International Airport, UAE" },
    { code: "HND", name: "Tokyo Haneda Airport, Japan" },
    { code: "SIN", name: "Singapore Changi Airport, Singapore" },
    { code: "JNB", name: "O.R. Tambo International Airport, South Africa" },
    { code: "CAI", name: "Cairo International Airport, Egypt" },
    { code: "ADD", name: "Addis Ababa Bole International Airport, Ethiopia" },
    { code: "SYD", name: "Sydney Kingsford Smith Airport, Australia" },
    { code: "AKL", name: "Auckland Airport, New Zealand" },
    { code: "NAN", name: "Nadi International Airport, Fiji" },
    { code: "GRU", name: "São Paulo–Guarulhos International Airport, Brazil" },
    { code: "EZE", name: "Buenos Aires Ezeiza International Airport, Argentina" },
    { code: "BOG", name: "El Dorado International Airport, Colombia" },
    { code: "DEL", name: "Indira Gandhi International Airport, Delhi" },
    { code: "BOM", name: "Chhatrapati Shivaji Maharaj International Airport, Mumbai" },
    { code: "BLR", name: "Kempegowda International Airport, Bengaluru" },
    { code: "MAA", name: "Chennai International Airport, Chennai" },
    { code: "HYD", name: "Rajiv Gandhi International Airport, Hyderabad" },
    { code: "CCU", name: "Netaji Subhas Chandra Bose International Airport, Kolkata" },
    { code: "COK", name: "Cochin International Airport, Kochi" },
    { code: "TRV", name: "Trivandrum International Airport, Thiruvananthapuram" },
    { code: "GOI", name: "Goa International Airport, Dabolim" },
    { code: "GOX", name: "Manohar International Airport, North Goa" },
    { code: "AMD", name: "Sardar Vallabhbhai Patel International Airport, Ahmedabad" },
    { code: "PNQ", name: "Pune International Airport, Pune" },
    { code: "JAI", name: "Jaipur International Airport, Jaipur" },
    { code: "LKO", name: "Chaudhary Charan Singh International Airport, Lucknow" },
    { code: "IXC", name: "Chandigarh International Airport, Chandigarh" },
    { code: "ATQ", name: "Sri Guru Ram Dass Jee International Airport, Amritsar" },
    { code: "IXR", name: "Birsa Munda Airport, Ranchi" },
    { code: "GAU", name: "Lokpriya Gopinath Bordoloi International Airport, Guwahati" },
    { code: "IXB", name: "Bagdogra International Airport, Siliguri" },
    { code: "VNS", name: "Lal Bahadur Shastri International Airport, Varanasi" },
    { code: "PAT", name: "Jay Prakash Narayan International Airport, Patna" },
    { code: "BBI", name: "Biju Patnaik International Airport, Bhubaneswar" },
    { code: "SXR", name: "Sheikh ul-Alam International Airport, Srinagar" },
    { code: "JDH", name: "Jodhpur Airport, Jodhpur" },
    { code: "UDR", name: "Maharana Pratap Airport, Udaipur" },
    { code: "TRZ", name: "Tiruchirappalli International Airport, Trichy" },
    { code: "IXM", name: "Madurai International Airport, Madurai" },
    { code: "CJB", name: "Coimbatore International Airport, Coimbatore" },
    { code: "VTZ", name: "Visakhapatnam International Airport, Visakhapatnam" },
    { code: "IDR", name: "Devi Ahilya Bai Holkar Airport, Indore" },
    { code: "BHO", name: "Raja Bhoj Airport, Bhopal" },
    { code: "NAG", name: "Dr. Babasaheb Ambedkar International Airport, Nagpur" },
    { code: "RAJ", name: "Rajkot Airport, Rajkot" },
    { code: "STV", name: "Surat Airport, Surat" },
    { code: "BDQ", name: "Vadodara Airport, Vadodara" },
    { code: "IXU", name: "Aurangabad Airport, Aurangabad" },
    { code: "HBX", name: "Hubballi Airport, Hubballi" },
    { code: "MYQ", name: "Mysuru Airport, Mysuru" },
    { code: "TIR", name: "Tirupati Airport, Tirupati" },
    { code: "RPR", name: "Swami Vivekananda Airport, Raipur" },
    { code: "JLR", name: "Jabalpur Airport, Jabalpur" },
    { code: "GWL", name: "Gwalior Airport, Gwalior" },
    { code: "AGR", name: "Agra Airport, Agra" },
    { code: "ALD", name: "Prayagraj Airport, Prayagraj" },
    { code: "DED", name: "Jolly Grant Airport, Dehradun" },
    { code: "IXA", name: "Agartala Airport, Agartala" },
    { code: "IMF", name: "Imphal Airport, Imphal" },
    { code: "DMU", name: "Dimapur Airport, Dimapur" },
    { code: "AJL", name: "Lengpui Airport, Aizawl" },
    { code: "SHL", name: "Shillong Airport, Shillong" },
    { code: "IXZ", name: "Veer Savarkar International Airport, Port Blair" }
];

const datalist = document.getElementById("stationsList");

stations.forEach(s => {
    const option = document.createElement("option");
    option.value = `${s.name} (${s.code})`;
    datalist.appendChild(option);
});

const classPrice = {
    "Economy": 8791,
    "1st Class": 11678,
    "2ND Class": 17897,
    "Business Class": 26899
};

document.getElementById("class").addEventListener("change", calculatePrice);
document.getElementById("seats").addEventListener("input", calculatePrice);

function calculatePrice() {

    let seatCount = document.getElementById("seats").value;
    let selectedClass = document.getElementById("class").value;

    if (!seatCount) return;

    let pricePerSeat = classPrice[selectedClass];

    let total = pricePerSeat * seatCount;

    document.getElementById("totalPrice").value = "₹ " + total;

}