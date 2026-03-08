const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");

/* welcome */
window.onload = () => {
    botReply("Hello,  I am your ExploreX.AI. Ask me anything about trips, hotels, visas.");
};

/* add message */
function addMessage(text, type) {
    const div = document.createElement("div");
    div.classList.add("message", type);
    div.innerText = text;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

/* typing */
function botReply(text) {
    const typing = document.createElement("div");
    typing.classList.add("message", "bot");
    typing.innerText = "Typing...";
    chatBox.appendChild(typing);
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        typing.innerText = text;
        speak(text);
    }, 1000);
}

/* voice */
function speak(text) {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    window.speechSynthesis.speak(speech);
}

/* AI brain */
function getAnswer(msg) {
    msg = msg.toLowerCase();

    if (msg.includes("goa")) return "Goa offers beaches, water sports and nightlife.";
    if (msg.includes("pariss")) return "Paris is famous for Eiffel Tower and romantic vibes.";
    if (msg.includes("book")) return "You can book hotels from our hotel section.";
    if (msg.includes("visa")) return "Visa depends on nationality. Always check embassy.";
    if (msg.includes("hello") || msg.includes("hi"))
        return "Hi 👋 Welcome to ExploreX Travel AI! Where would you like to go?";

    if (msg.includes("goa"))
        return "Goa offers Baga Beach, Calangute, Anjuna, Dudhsagar Waterfalls and vibrant nightlife.";

    if (msg.includes("hotels in paris"))
        return "You can find budget hotels like Ibis and luxury stays like Ritz Paris.";

    if (msg.includes("cheap flights to dubai"))
        return "Book 2-3 months early and travel between July to September for cheaper fares.";

    if (msg.includes("weather in tokyo"))
        return "Spring is pleasant, summer is hot, and winter is cold in Tokyo.";

    if (msg.includes("visa for usa"))
        return "Indian travelers need a B1/B2 tourist visa for USA.";

    if (msg.includes("best time to visit kerala"))
        return "October to March is the best time to visit Kerala.";

    if (msg.includes("honeymoon places in india"))
        return "Manali, Kashmir, Andaman, Udaipur and Goa are perfect honeymoon destinations.";

    if (msg.includes("budget hotels in delhi"))
        return "Paharganj area offers budget hotels between ₹1000 to ₹3000 per night.";

    if (msg.includes("beaches in thailand"))
        return "Phuket, Krabi, Phi Phi Islands and Koh Samui are famous beaches in Thailand.";

    if (msg.includes("three day trip to manali"))
        return "Day 1 Mall Road, Day 2 Solang Valley, Day 3 Rohtang Pass.";

    if (msg.includes("family vacation europe"))
        return "Switzerland, Italy, Austria and France are great for families.";

    if (msg.includes("cheap countries from india"))
        return "Thailand, Vietnam, Nepal and Sri Lanka are budget-friendly options.";

    if (msg.includes("paris and rome itinerary"))
        return "Spend 3 days in Paris and 3 days in Rome including Vatican visit.";

    if (msg.includes("hotel near eiffel"))
        return "Ibis Tour Eiffel and Hotel Duquesne are good options under ₹8000.";

    if (msg.includes("australia visa"))
        return "Apply online with passport, financial proof and travel plan.";

    if (msg.includes("adventure asia"))
        return "Nepal trekking, Bali surfing and Thailand scuba diving are popular.";

    if (msg.includes("europe on budget"))
        return "Use Eurail pass, stay in hostels and travel in off-season.";

    if (msg.includes("honeymoon islands"))
        return "Maldives, Bali and Mauritius are top honeymoon islands.";

    if (msg.includes("weekend trip from mumbai"))
        return "Lonavala, Alibaug and Mahabaleshwar are perfect weekend trips.";

    if (msg.includes("bali vs maldives"))
        return "Bali is budget-friendly with culture, Maldives is luxury with private villas.";

    if (msg.includes("dubai or singapore cheaper"))
        return "Dubai is slightly cheaper for shopping and accommodation.";

    if (msg.includes("7 days japan budget"))
        return "You may need around ₹1.2 to 1.5 lakh for 7 days in Japan.";

    if (msg.includes("switzerland crowd"))
        return "Visit in April or October to avoid tourist crowds.";

    if (msg.includes("schengen visa"))
        return "Yes, Schengen visa is valid for Italy, France and other Schengen countries.";

    if (msg.includes("eco friendly destinations"))
        return "Bhutan, Costa Rica and Norway promote sustainable tourism.";

    if (msg.includes("fast tourist visa"))
        return "Thailand, Sri Lanka and UAE offer quick tourist visas.";

    if (msg.includes("hidden gems south india"))
        return "Gokarna, Hampi and Vagamon are beautiful hidden gems.";

    if (msg.includes("10 day europe"))
        return "France, Switzerland, Italy and Austria make a great 10-day backpacking plan.";

    if (msg.includes("travel credit cards india"))
        return "HDFC Regalia and SBI Elite are popular travel credit cards.";

    if (msg.includes("luxury europe under 2 lakh"))
        return "France, Switzerland and Italy luxury plan under ₹2 lakh is possible with smart bookings.";

    if (msg.includes("solo female safe"))
        return "Japan, Iceland, Switzerland and Singapore are very safe.";

    if (msg.includes("offbeat himachal"))
        return "Tirthan Valley, Kalpa and Chitkul are offbeat gems.";

    if (msg.includes("cheapest month usa"))
        return "February and September usually offer cheapest fares.";

    if (msg.includes("india thailand bali"))
        return "A 10-day trip may cost ₹1 to 1.3 lakh approx.";

    if (msg.includes("hotel vs airbnb"))
        return "Hotels offer service and security, Airbnb gives space and local experience.";

    if (msg.includes("digital nomad"))
        return "Bali, Thailand and Portugal are popular digital nomad hubs.";

    if (msg.includes("2 week world tour"))
        return "Dubai, Turkey and Europe budget combo can fit in ₹3 lakh.";

    if (msg.includes("travel elderly parents"))
        return "Kerala, Rishikesh and Singapore are senior-friendly destinations.";

    if (msg.includes("visa free countries"))
        return "Thailand, Maldives, Nepal and Bhutan are visa-friendly for Indians.";

    if (msg.includes("surprise me"))
        return "How about Cappadocia in Turkey? 🎈";

    if (msg.includes("romantic anniversary"))
        return "Santorini, Maldives and Udaipur are romantic choices.";

    if (msg.includes("spiritual travel"))
        return "Varanasi, Rishikesh and Bodh Gaya are spiritual destinations.";

    if (msg.includes("northern lights"))
        return "You can see Northern Lights in Iceland, Norway and Finland.";

    if (msg.includes("monsoon travel"))
        return "Coorg, Munnar and Meghalaya are beautiful in monsoon.";

    if (msg.includes("coldest place in summer"))
        return "Ladakh remains very cold even in summer.";

    if (msg.includes("food travel"))
        return "Italy, Thailand and Japan are top food destinations.";

    if (msg.includes("luxury hotels world"))
        return "Burj Al Arab and Ritz Paris are among the most luxurious.";

    if (msg.includes("without passport"))
        return "You can travel anywhere within India without passport.";

    if (msg.includes("dream world tour"))
        return "Japan, Switzerland, Italy, Maldives and USA make a dream world tour 🌍✨";



    if (msg.includes("hello") || msg.includes("hi")) return "Hello traveler! Where do you want to go?";

    ;
}

/* send */
function sendMessage() {
    const msg = input.value.trim();
    if (msg === "") return;

    addMessage(msg, "user");
    input.value = "";

    setTimeout(() => {
        botReply(getAnswer(msg));
    }, 500);
}

/* mic */
function startListening() {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
        alert("Not supported");
        return;
    }

    const recognition = new SpeechRecognition();
    recognition.start();

    recognition.onresult = function(e) {
        input.value = e.results[0][0].transcript;
        sendMessage();
    };
}