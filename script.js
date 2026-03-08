// Demo Online Hotel Server (Fake API style)
const hotelsByCity = {

    // INDIA
    "India, Delhi": ["Taj Palace", "The Leela", "ITC Maurya", "Radisson", "Oberoi"],
    "India, Mumbai": ["Taj Mahal Palace", "Trident", "ITC Maratha", "Leela Mumbai"],
    "India, Chennai": ["ITC Grand", "Taj Coromandel", "Leela Palace"],
    "India, Kolkata": ["Oberoi", "ITC Royal", "Hyatt Regency"],
    "India, Jaipur": ["Rambagh Palace", "Trident Jaipur"],
    "India, Goa": ["W Goa", "Taj Exotica", "Novotel"],

    // USA
    "USA, New York": ["The Plaza", "Hilton Midtown", "Marriott Marquis"],
    "USA, Los Angeles": ["Beverly Hills Hotel", "Freehand LA"],
    "USA, Chicago": ["The Langham", "Hyatt Regency"],
    "USA, Washington": ["Watergate", "Willard"],
    "USA, Las Vegas": ["Bellagio", "MGM Grand"],

    // UK
    "UK, London": ["The Savoy", "Park Plaza", "Hilton London"],
    "UK, Manchester": ["The Lowry", "Radisson Blu"],
    "UK, Liverpool": ["Titanic Hotel", "Malmaison"],
    "UK, Birmingham": ["Hyatt Regency", "Clayton"],
    "UK, Edinburgh": ["Balmoral", "Radisson Collection"],

    // FRANCE
    "France, Paris": ["Four Seasons", "Le Bristol", "Lutetia"],
    "France, Nice": ["Hyatt Nice", "Le Negresco"],
    "France, Lyon": ["Villa Florentine", "Boscolo"],
    "France, Cannes": ["Majestic", "JW Marriott"],
    "France, Marseille": ["InterContinental", "Sofitel"],

    // AUSTRALIA
    "Australia, Sydney": ["Park Hyatt", "Shangri-La"],
    "Australia, Melbourne": ["Crown Towers", "Grand Hyatt"],
    "Australia, Perth": ["QT Perth", "Duxton"],
    "Australia, Brisbane": ["W Brisbane", "Emporium"],
    "Australia, Adelaide": ["Mayfair", "Hilton"],

    // CANADA
    "Canada, Toronto": ["Fairmont Royal York", "Chelsea Hotel"],
    "Canada, Vancouver": ["Pan Pacific", "Rosewood"],
    "Canada, Montreal": ["Ritz Carlton", "Hotel Omni"],
    "Canada, Calgary": ["Hotel Arts", "Hyatt"],
    "Canada, Ottawa": ["Fairmont Chateau", "Westin"],

    // UAE
    "UAE, Dubai": ["Burj Al Arab", "Atlantis", "JW Marriott"],
    "UAE, Abu Dhabi": ["Emirates Palace", "W Abu Dhabi"],
    "UAE, Sharjah": ["Sheraton", "Hilton"],
    "UAE, Ajman": ["Fairmont Ajman", "Ramada"],
    "UAE, Ras Al Khaimah": ["Waldorf Astoria", "Hilton Resort"],

    // JAPAN
    "Japan, Tokyo": ["Park Hyatt", "Imperial Hotel"],
    "Japan, Osaka": ["St Regis", "Swissotel"],
    "Japan, Kyoto": ["Ritz Carlton", "Hyatt Regency"],
    "Japan, Hiroshima": ["Sheraton Grand", "ANA Crowne"],
    "Japan, Sapporo": ["JR Tower", "Mercure"],

    // GERMANY
    "Germany, Berlin": ["Adlon Kempinski", "Hilton Berlin"],
    "Germany, Munich": ["Bayerischer Hof", "Marriott"],
    "Germany, Frankfurt": ["Jumeirah", "Steigenberger"],
    "Germany, Hamburg": ["Fairmont Vier", "Westin"],
    "Germany, Cologne": ["Excelsior Ernst", "Hilton"],

    // SOUTH AFRICA
    "South Africa, Cape Town": ["Table Bay", "Cape Grace"],
    "South Africa, Durban": ["Hilton Durban", "Oyster Box"],
    "South Africa, Johannesburg": ["Michelangelo", "Radisson Blu"],
    "South Africa, Pretoria": ["Sheraton Pretoria", "Court Classique"],
    "South Africa, Port Elizabeth": ["Boardwalk Hotel", "Radisson"]
};


const locationSelect = document.getElementById("location");
const hotelList = document.getElementById("hotelList");

locationSelect.addEventListener("change", function() {
    let location = this.value;
    hotelList.innerHTML = "";

    if (hotelsByCity[location]) {
        hotelsByCity[location].forEach(hotel => {
            let option = document.createElement("option");
            option.text = hotel;
            hotelList.add(option);
        });
    } else {
        let option = document.createElement("option");
        option.text = "No hotels available";
        hotelList.add(option);
    }
});


// price calculation
function calculatePrice() {
    let guests = document.getElementById("guests").value;
    let price = guests * 200; // $200 per guest demo
    document.getElementById("price").innerText =
        "Total Price: $" + price;
}

function showPayment() {
    document.getElementById("paymentSection").classList.remove("hidden");
}

// receipt generation
function generateReceipt() {
    let country = countrySelect.value;
    let stay = document.getElementById("stayType").value;
    let hotel = hotelList.value;
    let inDate = document.getElementById("checkin").value;
    let outDate = document.getElementById("checkout").value;
    let guests = document.getElementById("guests").value;

    let receiptHTML = `
        <p><b>Country:</b> ${country}</p>
        <p><b>Stay:</b> ${stay}</p>
        <p><b>Hotel:</b> ${hotel}</p>
        <p><b>Check In:</b> ${inDate}</p>
        <p><b>Check Out:</b> ${outDate}</p>
        <p><b>Guests:</b> ${guests}</p>
        <p><b>Status:</b> Confirmed ✅</p>
    `;

    document.getElementById("receipt").innerHTML = receiptHTML;

    document.getElementById("receiptSection").classList.remove("hidden");
}

function printReceipt() {
    window.print();
}




//-------------------------------------------------------------------------------------------------------------------------------------

// - const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

// add message to UI
function addMessage(text, sender) {
    const div = document.createElement("div");
    div.className = sender;
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// text to speech
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

// simple AI brain
function getBotReply(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("goa"))
        return "Goa is famous for beaches, nightlife and Portuguese heritage.";

    if (msg.includes("paris"))
        return "Paris offers the Eiffel Tower, Louvre Museum and romantic cruises.";

    if (msg.includes("visa"))
        return "Visa rules depend on nationality. Please check embassy website.";

    if (msg.includes("cheap flight"))
        return "Booking 2 to 3 months early usually gives cheaper flights.";

    if (msg.includes("hotel"))
        return "I can help you find hotels. Please select city in booking page.";

    if (msg.includes("hello") || msg.includes("hi"))
        return "Hello! How can I help with your travel plans today?";

    return "I am your travel assistant. Ask me about destinations, hotels, or visas.";
}

// send typed message
function sendMessage() {
    const msg = input.value.trim();
    if (msg === "") return;

    addMessage(msg, "user");

    const reply = getBotReply(msg);
    setTimeout(() => {
        addMessage(reply, "bot");
        speak(reply);
    }, 500);

    input.value = "";
}

// speech recognition
function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech recognition not supported in this browser");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.start();

    recognition.onresult = function(event) {
        const voiceText = event.results[0][0].transcript;
        input.value = voiceText;
        sendMessage();
    };
}

function sendMessage() {
    const msg = document.getElementById("userInput").value;
    if (msg.trim() === "") return;
    alert("You asked: " + msg);
}

function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Speech recognition not supported");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.start();

    recognition.onresult = function(e) {
        document.getElementById("userInput").value = e.results[0][0].transcript;
    };
}


document.getElementById("language").addEventListener("change", function() {

    let title = document.getElementById("title");

    if (this.value == "eng") {
        title.innerText = "Dashboard";
    }

    if (this.value == "hin") {
        title.innerText = "डैशबोर्ड";
    }

    if (this.value == "hing") {
        title.innerText = "Admin Dashboard";
    }

});