/* ==========================================================
   UPVERSE AI API
========================================================== */

const AI_CONFIG = {

    BASE_URL:
    "https://api.dify.ai/v1/workflows/run",

    API_KEY:
    "app-Ui0TQfWZhqFYfWw8FWcoDj5K",
    
    DIFY_API_KEY_AI : "app-XoLRyFK8rXlFkM47DMujCfC6",
    
    TIMEOUT:
    30000

};


/* ==========================================================
   DEFAULT HEADERS
========================================================== */

const API_HEADERS = {

    "Authorization":
    `Bearer ${AI_CONFIG.API_KEY}`,

    "Content-Type":
    "application/json"

};


/* ==========================================================
   TIMEOUT FETCH
========================================================== */

async function fetchWithTimeout(url, options = {}) {

    const controller = new AbortController();

    const timeout = setTimeout(() => {

        controller.abort();

    }, AI_CONFIG.TIMEOUT);

    try {

        const response = await fetch(url, {

            ...options,

            signal: controller.signal

        });

        clearTimeout(timeout);

        return response;

    }

    catch (error) {

        clearTimeout(timeout);

        throw error;

    }

}


/* ==========================================================
   SAFE JSON PARSER
========================================================== */

function safeJSON(text) {

    try {

        return JSON.parse(text);

    }

    catch {

        return null;

    }

}


/* ==========================================================
   RESPONSE VALIDATOR
========================================================== */

function isValidResponse(data) {

    if (!data) return false;

    if (typeof data !== "object") return false;

    return true;

}


/* ==========================================================
   ERROR OBJECT
========================================================== */

function createError(message) {

    return {

        success: false,

        error: message

    };

}

/* ==========================================================
   RUN DIFY WORKFLOW
========================================================== */

async function runWorkflow({

    mode,

    slug,

    question = "",

    preferences = ""

}) {

    const body = {

        inputs: {

            mode,

            slug,

            question,

            preferences

        },

        response_mode: "blocking",

        user: "upverse-user"

    };

    try {

        const response = await fetchWithTimeout(

            AI_CONFIG.BASE_URL,

            {

                method: "POST",

                headers: API_HEADERS,

                body: JSON.stringify(body)

            }

        );

        if (!response.ok) {

            throw new Error(

                `HTTP ${response.status}`

            );

        }

        const json = await response.json();

        return parseWorkflowResponse(json);

    }

    catch (error) {

        console.error(

            "UPVERSE API Error:",

            error

        );

        throw createError(

            error.message ||

            "Unknown API Error"

        );

    }

}


/* ==========================================================
   PARSE DIFY RESPONSE
========================================================== */

function parseWorkflowResponse(response){

    if(!response){
        throw new Error("Empty response.");
    }

    const outputs = response.data?.outputs;

    if(!outputs){
        throw new Error("No outputs found.");
    }

    let raw = outputs.output || outputs.result;

    if(!raw){
        throw new Error("Invalid workflow output.");
    }

    // Agar already object hai
    if(typeof raw === "object"){
        return raw;
    }

    // String hai
    if(typeof raw === "string"){

        // Remove markdown if any
        raw = raw
            .replace(/```json/g,"")
            .replace(/```/g,"")
            .trim();

        // Sirf first { se last } tak ka JSON nikalo
        const start = raw.indexOf("{");
        const end = raw.lastIndexOf("}");

        if(start !== -1 && end !== -1){
            raw = raw.substring(start, end + 1);
        }

        try{
            return JSON.parse(raw);
        }
        catch(err){

            console.error("RAW OUTPUT:", raw);

            throw new Error("Invalid JSON returned by Dify.");

        }
    }

    throw new Error("Unknown workflow format.");
}

/* ==========================================================
   RETRY HELPER
========================================================== */

async function retryRequest(

    callback,

    retries = 2

) {

    let lastError;

    for (

        let i = 0;

        i <= retries;

        i++

    ) {

        try {

            return await callback();

        }

        catch (error) {

            lastError = error;

        }

    }

    throw lastError;

}

/* ==========================================================
   DISTRICT MODE
========================================================== */

async function callDistrictAI(slug){

    return retryRequest(async()=>{

        const response = await runWorkflow({

            mode: "district",

            slug

        });

        if(!isValidResponse(response)){

            throw new Error(

                "Invalid district response."

            );

        }

        return response;

    });

}


/* ==========================================================
   ASK AI MODE
========================================================== */

async function askDistrictAI(

    slug,

    question

){

    return retryRequest(async()=>{

        const response = await runWorkflow({

            mode: "ask",

            slug,

            question

        });

        if(

            !response ||

            !response.answer

        ){

            throw new Error(

                "Invalid Ask AI response."

            );

        }

        return response;

    });

}


/* ==========================================================
   FUTURE SEARCH
========================================================== */

async function searchDistrictAI(query){

    return retryRequest(async()=>{

        const response = await runWorkflow({

            mode: "search",

            slug: query

        });

        return response;

    });

}


/* ==========================================================
   CONNECTION TEST
========================================================== */

async function testAI(){

    try{

        const result =

        await callDistrictAI(

            "agra"

        );

        console.log(

            "✅ AI Connected",

            result

        );

        return true;

    }

    catch(error){

        console.error(

            "❌ AI Connection Failed",

            error

        );

        return false;

    }

}

/* ==========================================================
   CACHE
========================================================== */

const AI_CACHE = new Map();

function getCacheKey(mode, slug, extra = "") {

    return `${mode}:${slug}:${extra}`;

}

function getCached(key) {

    return AI_CACHE.get(key);

}

function setCached(key, value) {

    AI_CACHE.set(key, value);

}


/* ==========================================================
   DISTRICT WITH CACHE
========================================================== */

async function getDistrictAIData(slug){

    const key = getCacheKey(

        "district",

        slug

    );

    const cached = getCached(key);

    if(cached){

        console.log("⚡ Cache Hit");

        return cached;

    }

    try{

        const data = await callDistrictAI(slug);

        setCached(key, data);

        return data;

    }

    catch(error){
        console.warn("Using rich offline intelligence fallback:", error);
        if (typeof window.getDistrictFullData === "function") {
            const fallback = window.getDistrictFullData(slug);
            if (fallback) {
                setCached(key, fallback);
                return fallback;
            }
        }
        if (typeof districts !== "undefined") {
            const district = districts.find(d => d.slug === slug);
            if (district) return district;
        }
        throw error;
    }
}


/* ==========================================================
   DEBUG
========================================================== */

const DEBUG = true;

function log(...args){

    if(DEBUG){

        console.log(

            "[UPVERSE]",

            ...args

        );

    }

}


/* ==========================================================
   HEALTH CHECK
========================================================== */

async function checkAPI(){

    try{

        await testAI();

        log(

            "API Ready"

        );

        return true;

    }

    catch(error){

        console.error(error);

        return false;

    }

}


/* ==========================================================
   CLEAR CACHE
========================================================== */

function clearAICache(){

    AI_CACHE.clear();

    log(

        "Cache Cleared"

    );

}


/* ==========================================================
   EXPORTS
========================================================== */

window.UPVERSE_API = {

    getDistrictAIData,

    askDistrictAI,

    generateTripPlan,

    clearAICache,

    checkAPI

};


/* ==========================================================
   GENERATE AI TRIP PLAN
========================================================== */

async function generateTripPlan(tripData){

    try{

        const response =

        await fetch(

            AI_CONFIG.BASE_URL,

            {

                method:"POST",

                headers:{

                    "Authorization":

                    `Bearer ${AI_CONFIG.DIFY_API_KEY_AI}`,

                    "Content-Type":

                    "application/json"

                },

                body:JSON.stringify({

                    inputs:{

                        district:

                        tripData.district,
                        
                        startingLocation:
                        tripData.startingLocation,

                        startDate:

                        tripData.startDate,

                        duration:

                        tripData.duration,

                        budget:

                        tripData.budget,

                        travellers:

                        tripData.travellers,

                        travelStyle:

                        tripData.travelStyle,

                        stay:

                        tripData.stay,

                        transport:

                        tripData.transport,

                        food:

                        tripData.food,

                        specialRequest:

                        tripData.specialRequest

                    },

                    response_mode:

                    "blocking",

                    user:

                    "upverse-trip-planner"

                })

            }

        );

        if(!response.ok){

            throw new Error(

                "Failed to generate trip."

            );

        }
        
        
        
        const result = await response.json();
        return parseWorkflowResponse(result);
    }
    catch(error){
        console.warn("Using offline trip intelligence generator:", error);
        return createFallbackTripPlan(tripData);
    }
}

function createFallbackTripPlan(tripData) {
    const dest = (tripData.district || "Varanasi").trim();
    const start = (tripData.startingLocation || "Lucknow").trim();
    const dur = (tripData.duration || "2 Days").trim();
    const rawStyle = (tripData.travelStyle || "Heritage").trim();
    const budget = (tripData.budget || "₹3000–₹7000").trim();
    const travellers = tripData.travellers || "2";
    const stayType = tripData.stay || "Hotel";
    const transportType = tripData.transport || "Train";
    const foodPref = tripData.food || "Veg";
    const specialRequest = (tripData.specialRequest || "").trim();

    // Refined and polished style phrasing
    const styleMap = {
        "mixed": "a well-balanced cultural journey",
        "adventure": "an exhilarating adventure expedition",
        "nature": "a tranquil nature retreat",
        "photography": "a scenic photography expedition",
        "heritage": "an immersive heritage journey",
        "food": "a delightful culinary exploration",
        "spiritual": "a soulful spiritual pilgrimage",
        "for couples": "a romantic couples getaway",
        "couples": "a romantic couples getaway",
        "solo": "a solo discovery journey",
        "family": "a memorable family vacation"
    };
    const styleKey = rawStyle.toLowerCase().trim();
    const stylePhrase = styleMap[styleKey] || `an authentic ${rawStyle.toLowerCase()} experience`;

    // Determine day count
    let dayCount = 2;
    if (dur.includes("1 Day")) dayCount = 1;
    else if (dur.includes("2 Day")) dayCount = 2;
    else if (dur.includes("3 Day")) dayCount = 3;
    else if (dur.includes("4 Day")) dayCount = 4;
    else if (dur.includes("5 Day")) dayCount = 5;
    else if (dur.includes("Week") || dur.includes("7")) dayCount = 7;
    else if (dur.includes("Month")) dayCount = 7;

    // District-specific day catalogs
    const districtPlans = {
        "ayodhya": [
            {
                Title: "Shri Ram Janmabhoomi & Evening Sarayu Aarti",
                Morning: "Arrive in Ayodhya, check in, and proceed for divine darshan at the magnificent Shri Ram Janmabhoomi Mandir.",
                Afternoon: "Visit the historic Kanak Bhawan and Dashrath Mahal with beautiful traditional devotional music.",
                Evening: "Experience the mesmerizing Maha Aarti at Sarayu Ghat (Ram Ki Paidi) with illuminated river reflections."
            },
            {
                Title: "Hanuman Garhi & Ancient Sacred Shrines",
                Morning: "Climb the steps to Hanuman Garhi for blessings, followed by hot kachori-jalebi breakfast.",
                Afternoon: "Explore the ancient Nageshwarnath Temple, Ramkatha Museum, and peaceful Chhoti Chhavani ashram.",
                Evening: "Stroll along the revitalized Ram Path, savor famous Ayodhya Peda, and enjoy local Bhajan sessions."
            },
            {
                Title: "Guptar Ghat & Surya Kund Heritage",
                Morning: "Visit serene Guptar Ghat for a peaceful sunrise boat ride on the sacred Sarayu River.",
                Afternoon: "Explore the historic Surya Kund lake complex and surrounding sun temple gardens.",
                Evening: "Witness the spectacular laser & musical fountain show at Surya Kund depicting the Ramayana epic."
            },
            {
                Title: "Bharat Kund & Rural Heritage Trail",
                Morning: "Take an excursion to historic Bharat Kund (Nandigram) where Bharat ruled during Ram's exile.",
                Afternoon: "Explore quiet village groves, traditional gaushalas, and taste freshly churned buttermilk.",
                Evening: "Return to Ayodhya city center for sunset photography at Laxman Ghat."
            },
            {
                Title: "Mani Parbat & Artisan Heritage",
                Morning: "Climb Mani Parbat for panoramic views of ancient Ayodhya and visit Sugriv Kila.",
                Afternoon: "Visit local craft clusters known for sandalwood items, brass bells, and handmade wooden deities.",
                Evening: "Enjoy authentic Awadhi vegetarian thali at a heritage dining courtyard."
            },
            {
                Title: "Gulab Bari & Nawabi Architectural Heritage",
                Morning: "Explore the grand gardens and historical architecture of Gulab Bari and Bahu Begum Tomb in Faizabad.",
                Afternoon: "Visit the Faizabad Clock Tower market for traditional weaves and attar (natural perfume).",
                Evening: "Relax by the tranquil riverfront promenade with sunset chai and local snacks."
            },
            {
                Title: "Final Blessings, Souvenirs & Departure",
                Morning: "Attend peaceful morning Mangala Aarti at Ram Janmabhoomi and take sacred prasad.",
                Afternoon: "Pick up sacred tulsi malas, authentic peda boxes, and Ramcharitmanas calligraphy prints.",
                Evening: "Conclude your memorable pilgrimage and begin your comfortable return journey."
            }
        ],
        "varanasi": [
            {
                Title: "Kashi Vishwanath Darshan & Iconic Ganga Aarti",
                Morning: "Arrive in the spiritual capital, check into your stay, and take holy blessings at Shri Kashi Vishwanath Golden Temple.",
                Afternoon: "Navigate through vibrant historic Vishwanath Gali and savor hot Banarasi kachori with jalebi.",
                Evening: "Witness the world-famous Grand Maha Aarti at Dashashwamedh Ghat from a traditional boat."
            },
            {
                Title: "Subah-e-Banaras & 84 Ghats Sunrise Boating",
                Morning: "Experience ethereal sunrise Subah-e-Banaras at Assi Ghat with morning yoga and classical sitar melody.",
                Afternoon: "Visit Banaras Hindu University (BHU), Bharat Kala Bhavan museum, and the lofty New Vishwanath Temple.",
                Evening: "Taste iconic street chaat (Tamatar Chaat & Palak Chaat) at Kashi Chaat Bhandar."
            },
            {
                Title: "Sarnath Buddhist Heritage & Stupas",
                Morning: "Excursion to sacred Sarnath where Lord Buddha gave his first sermon; visit Dhamek Stupa and Deer Park.",
                Afternoon: "Admire the original Lion Capital of Ashoka (National Emblem) at the Sarnath Archaeological Museum.",
                Evening: "Visit peaceful Thai and Japanese Buddhist monasteries and experience evening meditation."
            },
            {
                Title: "Ancient Weavers Colony & Banarasi Silk",
                Morning: "Visit the historic Sarai Mohana weavers village to watch master artisans craft pure Banarasi silk sarees on handlooms.",
                Afternoon: "Explore the ancient Sankat Mochan Hanuman Temple, Durga Kund, and Tulsi Manas Mandir.",
                Evening: "Sunset boat ride from Manikarnika to Harishchandra Ghat understanding the timeless cycle of life."
            },
            {
                Title: "Ramnagar Fort & River Crossing",
                Morning: "Cross the Ganga to explore the 18th-century sandstone Ramnagar Fort, royal vintage car museum, and armory.",
                Afternoon: "Taste famous Ramnagar Lassi served in traditional clay kulhads.",
                Evening: "Rooftop heritage dining with panoramic evening views over the twinkling river crescent."
            },
            {
                Title: "Hidden Alleys, Stepwells & Classical Music",
                Morning: "Take an offbeat walking tour through ancient stepwells (Kunds) and historic muths.",
                Afternoon: "Interact with local classical instrument makers (tanpura, tabla) in Kabir Chaura musicians quarter.",
                Evening: "Attend an authentic intimate Baithak (Indian classical music session) in a heritage haveli."
            },
            {
                Title: "Morning Ganga Dip, Souvenirs & Departure",
                Morning: "Final sunrise prayer at Panchganga Ghat followed by fragrant Banarasi Paan and creamy Malaiyo.",
                Afternoon: "Shop for pure silk stoles, brass handicrafts, and organic Ganga Gangajal vessels in Thatheri Bazar.",
                Evening: "Transfer to Varanasi airport/railway station with unforgettable spiritual memories."
            }
        ],
        "agra": [
            {
                Title: "The Wonder of Taj Mahal & Agra Fort",
                Morning: "Witness the ethereal sunrise at the Taj Mahal as morning light turns the white marble golden.",
                Afternoon: "Tour the majestic red sandstone ramparts of Agra Fort, royal Diwan-i-Khas, and Jahangiri Mahal.",
                Evening: "Watch sunset silhouettes of the Taj across the river from Mehtab Bagh gardens."
            },
            {
                Title: "UNESCO Fatehpur Sikri Excursion",
                Morning: "Drive to the deserted royal Mughal capital of Fatehpur Sikri and marvel at the 54-meter Buland Darwaza.",
                Afternoon: "Explore the white marble Dargah of Sheikh Salim Chishti, Panch Mahal, and Jodha Bai's Palace.",
                Evening: "Return to Agra and explore Sadar Bazar for famous Angoori Petha and Dalmoth."
            },
            {
                Title: "Baby Taj & Royal Tombs",
                Morning: "Visit the delicate jewel box Tomb of I'timad-ud-Daulah (Baby Taj) featuring exquisite pietra dura inlay.",
                Afternoon: "Explore Akbar's grand mausoleum at Sikandra surrounded by deer and peacocks.",
                Evening: "Dine at a rooftop restaurant overlooking the illuminated dome of the Taj Mahal."
            },
            {
                Title: "Old City Heritage Walk & Mughlai Delicacies",
                Morning: "Take a walking heritage tour through Rawatpara spice market, Jama Masjid, and Kinari Bazar.",
                Afternoon: "Visit traditional marble inlay craftsman studios and watch the centuries-old art of Parchin Kari.",
                Evening: "Savor authentic Mughlai banquet including rich biryanis, bedmi puri, and slow-cooked korma."
            },
            {
                Title: "Wildlife SOS & Soor Sarovar Sanctuary",
                Morning: "Visit the ethically managed Elephant and Bear Conservation Sanctuary at Wildlife SOS.",
                Afternoon: "Birdwatching walk along Keetham Lake inside Soor Sarovar Bird Sanctuary.",
                Evening: "Relaxing high tea at a garden cafe."
            },
            {
                Title: "Yamuna Heritage Trail & Chhatris",
                Morning: "Explore the riverside Chini Ka Rauza and picturesque Ram Bagh (India's oldest Mughal garden).",
                Afternoon: "Shop for genuine leather goods and embroidered Zardozi tapestries.",
                Evening: "Sunset boat ride on the Yamuna for rare photography perspectives."
            },
            {
                Title: "Final Morning View & Departure",
                Morning: "Enjoy a leisurely breakfast and visit local sweet shops for packed petha varieties (Paan, Kesar, Dry Fruit).",
                Afternoon: "Final stroll along the Taj Nature Walk trails.",
                Evening: "Board your return express train or drive back with unforgettable memories."
            }
        ],
        "lucknow": [
            {
                Title: "Grand Nawabi Architecture & Bhool Bhulaiya",
                Morning: "Explore the awe-inspiring pillarless hall of Bara Imambara and get lost in the Bhool Bhulaiya labyrinth.",
                Afternoon: "Walk through the colossal Rumi Darwaza and marvel at the ornate chandeliers of Chhota Imambara.",
                Evening: "Evening stroll at Hazratganj ('Ganjing') and sample royal basket chaat at Royal Cafe."
            },
            {
                Title: "The British Residency & Royal Gardens",
                Morning: "Walk through the poignant 1857 historic ruins of The Residency with museum displays and serene gardens.",
                Afternoon: "Visit the historic Husainabad Clock Tower and the grand Picture Gallery displaying Nawabi portraits.",
                Evening: "Savor world-famous melt-in-mouth Galawati Kebabs at the legendary Tunday Kababi."
            },
            {
                Title: "Chikankari Handloom & Old Chowk Bazaar",
                Morning: "Visit master artisans in Chowk to observe intricate Chikankari and Zardozi hand-embroidery.",
                Afternoon: "Shop for authentic designer Chikan kurtas and pure modal silk fabrics.",
                Evening: "Taste traditional Awadhi Dum Biryani and Prakash Kulfi in Aminabad."
            },
            {
                Title: "Palaces, Colleges & Riverfront",
                Morning: "Admire the Victorian-Gothic architecture of La Martiniere College and Dilkusha Kothi ruins.",
                Afternoon: "Visit the Lucknow State Museum and Nawab Wajid Ali Shah Zoological Garden.",
                Evening: "Relax at the Gomti Riverfront Park with musical evening fountains."
            },
            {
                Title: "Heritage Haveli Dining & Cultural Arts",
                Morning: "Visit the grand Safed Baradari and Butler Palace in Kaiserbagh.",
                Afternoon: "Attend a Kathak dance demonstration or sitar musical recital at Bhatkhande Sanskriti Vishwavidyalaya.",
                Evening: "Royal Nawabi Dastarkhwan multi-course dinner with Sheermal and Shahi Tukda."
            },
            {
                Title: "Ambedkar Memorial Park & Modern Lucknow",
                Morning: "Explore the monumental pink sandstone architecture of Ambedkar Memorial Park in Gomti Nagar.",
                Afternoon: "Visit modern cafes, artisan bakeries, and contemporary art galleries in Vibhuti Khand.",
                Evening: "Sunset photography along the expansive Marine Drive river stretch."
            },
            {
                Title: "Sweet Delights & Departure",
                Morning: "Taste morning Makhan Malai (Nimish) and hot Malai Pan from Ram Asrey (operating since 1805).",
                Afternoon: "Pick up handloom gifts, natural attars, and packed sweets.",
                Evening: "Board your flight or express train back home."
            }
        ],
        "mathura": [
            {
                Title: "Shri Krishna Janmabhoomi & Ancient Dwarkadhish Mandir",
                Morning: "Begin in sacred Mathura with morning Mangala Darshan at Shri Krishna Janmasthan and Keshavdev Temple.",
                Afternoon: "Visit the ornate Dwarkadhish Temple along the banks of the Yamuna and taste hot Mathura Peda.",
                Evening: "Witness the peaceful Yamuna Maha Aarti at historical Vishram Ghat with floating clay diyas."
            },
            {
                Title: "Vrindavan Heritage & Divine Bankey Bihari Darshan",
                Morning: "Visit the revered Shri Bankey Bihari Temple in Vrindavan and experience mesmerizing devotional bhajans.",
                Afternoon: "Stroll through the mystical groves of Nidhivan, historic Radha Raman Temple, and ISKCON Vrindavan.",
                Evening: "Be spellbound by the colorful musical laser fountains and white Italian marble glow of Prem Mandir."
            },
            {
                Title: "Govardhan Hill & Sacred Kunds Expedition",
                Morning: "Take the sacred Govardhan Parikrama trail; visit sacred Mansi Ganga and historic Daan Ghati Temple.",
                Afternoon: "Explore the serene Radha Kund and Shyam Kund surrounded by ancient terracotta chhatris.",
                Evening: "Sunset reflection photography at the grand sandstone cenotaphs of Kusum Sarovar."
            },
            {
                Title: "Barsana & Nandgaon Braj Heritage",
                Morning: "Ascend the Bhanugarh hill in Barsana to visit the magnificent Shri Radha Rani (Ladli Ji) Temple.",
                Afternoon: "Drive to neighboring Nandgaon to explore the hilltop temple of Nand Baba and Yashoda Ma.",
                Evening: "Taste traditional Braj delicacies like Bedmi Puri with Aloo and creamy Malai Rabri in the bazaar."
            },
            {
                Title: "Gokul & Raman Reti Spiritual Trail",
                Morning: "Cross the Yamuna to historic Gokul, visiting Chaurasi Khamba and the childhood shrine of Lord Krishna.",
                Afternoon: "Walk barefoot on the sacred soft sands of Raman Reti and feed deer in the peaceful sanctuary gardens.",
                Evening: "Experience an intimate evening flute recital and temple bell chimes along the riverbank."
            },
            {
                Title: "Radha Vallabh & Hidden Temples of Braj",
                Morning: "Explore the historic 16th-century red sandstone Govind Dev Ji Temple and Radha Damodar Mandir.",
                Afternoon: "Interact with local garland makers and artisan weavers crafting deities' silk costumes (Poshak).",
                Evening: "Enjoy pure vegetarian Satvik thali at an authentic Braj heritage dining hall."
            },
            {
                Title: "Final Blessings, Souvenirs & Departure",
                Morning: "Attend peaceful morning prayers at Chamunda Devi Temple and take a final sunrise boat ride on the Yamuna.",
                Afternoon: "Pack fresh gift boxes of authentic Mathura Peda, brass idols, and fragrant incense.",
                Evening: "Conclude your spiritual pilgrimage with cherished memories and begin your return journey."
            }
        ],
        "prayagraj": [
            {
                Title: "Holy Triveni Sangam Dip & Boat Journey",
                Morning: "Experience sunrise boat ride to the sacred confluence (Sangam) of Ganga, Yamuna, and mystical Saraswati.",
                Afternoon: "Visit the ancient underground Patalpuri Temple and the immortal sacred banyan tree (Akshayavat).",
                Evening: "Witness the divine Sangam Aarti on the riverbank as hundreds of oil lamps float across the water."
            },
            {
                Title: "Anand Bhavan & Freedom Heritage Trail",
                Morning: "Explore Anand Bhavan and Swaraj Bhavan, historic ancestral home of the Nehru family and center of the freedom movement.",
                Afternoon: "Walk through lush Chandrashekhar Azad Park (Company Bagh) and the Allahabad Archaeological Museum.",
                Evening: "Taste world-famous Prayagraj Chaat and crunchy Samosas at Netram Sweets."
            },
            {
                Title: "Khusro Bagh & Mughal Architecture",
                Morning: "Marvel at the sandstone mausoleums, Persian calligraphy, and manicured gardens of historic Khusro Bagh.",
                Afternoon: "Admire the Victorian Gothic architecture of All Saints Cathedral (Patthar Girja).",
                Evening: "Sunset boat ride along the new Yamuna Bridge with spectacular twilight skyline views."
            },
            {
                Title: "Sacred Shaktipeeths & Temples Trail",
                Morning: "Seek blessings at Alopi Devi Shaktipeeth and the ancient Bade Hanuman Ji (reclining Hanuman) Temple.",
                Afternoon: "Visit the historic Mankameshwar Temple on the banks of Yamuna and Shankar Viman Mandapam.",
                Evening: "Relax by the Boat Club promenade with evening kulhad chai."
            },
            {
                Title: "University Heritage & Literary Legacy",
                Morning: "Tour the prestigious Allahabad University campus ('Oxford of the East') with its iconic Senate Hall and Vijayanagaram Hall.",
                Afternoon: "Visit local libraries, heritage bookshops, and memorial halls celebrating Hindi literary titans.",
                Evening: "Sample fragrant red Guavas (Allahabadi Surkha) and traditional Gulab Jamun."
            },
            {
                Title: "Shringverpur Archaeological Excursion",
                Morning: "Excursion to Shringverpur, the legendary capital of Nishadraj Guha where Lord Ram crossed the holy Ganga.",
                Afternoon: "Explore the massive ancient hydraulic water tank system discovered by the Archaeological Survey of India.",
                Evening: "Peaceful riverside picnic and sunset photography over the rural Ganga floodplains."
            },
            {
                Title: "Handicrafts, Souvenirs & Departure",
                Morning: "Final morning prayers along Saraswati Ghat and souvenir shopping in Civil Lines.",
                Afternoon: "Pick up local Moonj grass handicrafts, brassware, and packed sweets.",
                Evening: "Transfer to Prayagraj Junction or airport for your comfortable return trip."
            }
        ],
        "jhansi": [
            {
                Title: "The Heroic Jhansi Fort & Citadel",
                Morning: "Explore the formidable 17th-century ramparts of Jhansi Fort built atop Bangira hill by Bir Singh Deo.",
                Afternoon: "Stand at the historic jumping spot where Rani Laxmibai leaped on horseback with child Damodar Rao.",
                Evening: "Watch the stirring evening Sound & Light show at Jhansi Fort narrating the First War of Independence (1857)."
            },
            {
                Title: "Rani Mahal & Government Museum",
                Morning: "Visit the royal palace of Rani Laxmibai (Rani Mahal) adorned with vibrant murals and historic arches.",
                Afternoon: "Explore the Jhansi Government Museum housing rare Chandela sculptures, royal weapons, and terracotta artifacts.",
                Evening: "Stroll through the lively Sadar Bazar and sample spicy Bundelkhandi snacks."
            },
            {
                Title: "Historic Orchha Royal Citadel Excursion",
                Morning: "Short scenic drive to the neighboring medieval royal town of Orchha on the pristine Betwa River.",
                Afternoon: "Tour the majestic Jehangir Mahal, Raja Mahal, and the unique Ram Raja Temple where Lord Ram is worshipped as King.",
                Evening: "Sunset photography at the 14 royal cenotaphs (Chhatris) reflecting in the serene waters of the Betwa."
            },
            {
                Title: "Barua Sagar Historic Lake & Temple",
                Morning: "Visit the scenic Barua Sagar lake, site of the historic 1744 battle between Peshwas and Bundelas.",
                Afternoon: "Explore the 9th-century granite tower of Jarai Ka Math temple dedicated to Lord Shiva and Parvati.",
                Evening: "Relax beside the peaceful lakeside embankment surrounded by date palms and quiet hills."
            },
            {
                Title: "Sukma-Dukma Dam & Countryside Heritage",
                Morning: "Visit the impressive British-era Sukma-Dukma weir dam built across the Betwa River with cascading waterfalls.",
                Afternoon: "Explore traditional Bundeli villages, organic farms, and artisan pottery workshops.",
                Evening: "Savor an authentic Bundelkhandi Thali with Thopra, Bafla, and freshly churned desi makhana."
            },
            {
                Title: "Betwa Riverfront Adventure & Nature Walk",
                Morning: "Enjoy morning nature trails along Orchha Wildlife Sanctuary bordering the Betwa.",
                Afternoon: "Optional river rafting or serene kayaking amidst medieval fortress backdrops.",
                Evening: "Rooftop heritage dinner with panoramic views of illuminated medieval domes."
            },
            {
                Title: "Handloom Weaves, Souvenirs & Departure",
                Morning: "Visit local craft clusters for famous Chanderi sarees, brass dhokra craft, and Bundeli stone carvings.",
                Afternoon: "Pick up authentic regional pickles, amla candy, and royal souvenir keepsakes.",
                Evening: "Board your express train from Jhansi Junction with inspiring memories of valour and heritage."
            }
        ]
    };

    // Lookup district or create high-quality customized template
    const destKey = dest.toLowerCase();
    let templateList = districtPlans[destKey];
    if (!templateList) {
        // Universal intelligent fallback for any UP district
        templateList = [
            {
                Title: "Arrival, Heritage Check-in & Iconic Landmarks",
                Morning: `Arrive in ${dest}, check into your comfortable ${stayType.toLowerCase()}, and enjoy local breakfast.`,
                Afternoon: `Visit the central historic landmarks, ancient city center, and prominent heritage sites of ${dest}.`,
                Evening: `Witness the serene evening temple/river ceremonies and sample popular local street cuisine.`
            },
            {
                Title: "Cultural Immersion & Famous Attractions",
                Morning: `Experience a tranquil morning walk around ${dest}'s most scenic viewpoints and sacred shrines.`,
                Afternoon: `Explore local heritage courtyards, museums, and historical architecture with a knowledgeable local guide.`,
                Evening: `Visit local artisan craft centers and dine at an authentic regional culinary restaurant.`
            },
            {
                Title: "Hidden Gems & Nature Trails",
                Morning: `Take an off-the-beaten-path excursion to peaceful countryside lakes, groves, and stepwells.`,
                Afternoon: `Discover centuries-old lesser-known temples, ancient forts, and photography viewpoints.`,
                Evening: `Enjoy sunset tea at a panoramic viewpoint followed by traditional folk music and dining.`
            },
            {
                Title: "Artisan Workshops & Handicraft Trails",
                Morning: `Visit indigenous handicraft workshops where master craftsmen create authentic UP specialty crafts.`,
                Afternoon: `Interactive session with local artisans, understanding traditional weaving, pottery, or metalwork.`,
                Evening: `Taste specialty regional snacks and savor seasonal hot sweets in the historic bazaar.`
            },
            {
                Title: "Spiritual Retreat & Wellness Experience",
                Morning: `Participate in morning meditation or yoga session in a tranquil sacred garden or riverside ghat.`,
                Afternoon: `Savor an authentic pure ${foodPref.toLowerCase()} Satvik meal prepared with organic seasonal produce.`,
                Evening: `Attend a peaceful devotional aarti and enjoy an evening boat ride or illuminated stroll.`
            },
            {
                Title: "Excursion & Scenic Countryside Expedition",
                Morning: `Take a short scenic drive to neighboring historical sites and natural reserves around ${dest}.`,
                Afternoon: `Picnic lunch amidst nature and visit ancient architectural ruins.`,
                Evening: `Return to town for celebratory dinner featuring ${dest}'s most celebrated royal dishes.`
            },
            {
                Title: "Souvenir Shopping, Memories & Departure",
                Morning: `Enjoy a relaxed breakfast and pick up authentic local sweets, handicrafts, and travel souvenirs.`,
                Afternoon: `Capture final commemorative photographs at ${dest}'s most iconic monuments.`,
                Evening: `Conclude your enriching ${dur} journey and begin your return travel to ${start}.`
            }
        ];
    }

    // Build the dynamic Day-by-Day itinerary list matching dayCount
    const days = [];
    for (let i = 0; i < dayCount; i++) {
        const t = templateList[i % templateList.length];
        days.push({
            "Day": `Day ${i + 1}`,
            "Title": t.Title,
            "Morning": t.Morning,
            "Afternoon": t.Afternoon,
            "Evening": t.Evening
        });
    }

    // Adapt Food Recommendations based on food preference
    let foodList = [
        { "Dish": `${dest} Signature Thali`, "Description": `Traditional ${foodPref} multi-course meal featuring regional lentils, seasonal curries, and hot bread.` },
        { "Dish": "Famous Street Chaat & Crispy Kachori", "Description": "Tangy, flavorful local street delights prepared fresh with aromatic ground spices." },
        { "Dish": "Authentic Regional Sweets", "Description": `Celebrated local confections like hot Jalebi, Rabri, Peda, or Khoya sweets.` }
    ];
    if (foodPref === "Non-Veg" || foodPref === "Non Veg") {
        foodList = [
            { "Dish": "Awadhi Dum Biryani & Galawati Kebabs", "Description": "Slow-cooked tender meats infused with saffron, rose water, and 32 secret spices." },
            { "Dish": "Handi Mutton & Shahi Korma", "Description": "Rich, aromatic slow-simmered regional gravy cooked in earthen pots with fragrant spices." },
            { "Dish": "Sheermal & Mughlai Breads", "Description": "Warm saffron-flavored sweet flatbreads paired with rich gravies, followed by royal Shahi Tukda." }
        ];
    } else if (foodPref === "Both") {
        foodList = [
            { "Dish": `${dest} Awadhi Royal Platter`, "Description": "A harmonious feast combining regional vegetarian delicacies with renowned Awadhi specialties." },
            { "Dish": "Crispy Street Chaat & Hot Bedmi Puri", "Description": "Iconic local street flavors made fresh daily with tamarind and mint chutneys." },
            { "Dish": "Authentic Kulfi Falooda & Hot Jalebi", "Description": "Celebrated rich milk sweets and saffron-infused sweets served fresh." }
        ];
    } else if (foodPref === "Jain") {
        foodList = [
            { "Dish": `Pure Jain Satvik Thali`, "Description": "Prepared strictly without onion, garlic, or root vegetables using fresh desi ghee and whole spices." },
            { "Dish": "Jain Special Dal Baati & Steamed Delights", "Description": "Nutritious traditional meals served in certified pure vegetarian kitchens." },
            { "Dish": "Dry Fruit Kheer & Kesariya Rabri", "Description": "Delectable slow-simmered milk desserts garnished with almonds and Kashmiri saffron." }
        ];
    }

    // Recommended Stays
    let stayPrice = "₹1,800 - ₹3,500 / night";
    if (budget.includes("Below")) stayPrice = "₹800 - ₹1,500 / night";
    else if (budget.includes("7000–₹15000") || budget.includes("7000")) stayPrice = "₹3,500 - ₹6,500 / night";
    else if (budget.includes("Luxury")) stayPrice = "₹8,000 - ₹22,000 / night";

    // Transit details
    let estTravelTime = "4 - 6 Hours";
    const tLower = transportType.toLowerCase();
    if (tLower.includes("flight")) estTravelTime = "1.5 - 2.5 Hours";
    else if (tLower.includes("train")) estTravelTime = "4 - 6 Hours";
    else if (tLower.includes("car")) estTravelTime = "4.5 - 6.5 Hours";
    else if (tLower.includes("bus")) estTravelTime = "6 - 8 Hours";
    else if (tLower.includes("bike")) estTravelTime = "6 - 8 Hours";

    const travellersCount = parseInt(travellers) || 2;
    const travellerText = travellersCount === 1 ? "1 solo traveller" : `${travellersCount} travellers`;
    const specialNote = specialRequest ? ` Custom request prioritized: "${specialRequest}".` : "";

    const safetyTips = [
        "Keep digital and printed copies of photo IDs handy during transit.",
        "Wear comfortable walking shoes for heritage paved walkways and temple stairs.",
        "Stay hydrated and prefer freshly prepared hot food from busy local stalls."
    ];
    if (specialRequest) {
        safetyTips.unshift(`Custom Note: ${specialRequest}`);
    }

    return {
        "🌍 Personalized Trip Overview": `Welcome to your customized ${dur} journey to ${dest} starting from ${start} for ${travellerText}. Meticulously organized for ${stylePhrase} within a ${budget} budget, this itinerary balances iconic landmarks, authentic regional cuisine, seamless transit, and hidden treasures.${specialNote}`,
        "🚗 Journey Summary": {
            "Starting Location": start,
            "Destination": dest,
            "Suggested Transport": `${transportType} (Direct / Express)`,
            "Estimated Distance": "Approx. 280 - 450 km",
            "Estimated Travel Time": estTravelTime,
            "Best Departure Time": "Early Morning (6:00 AM - 7:30 AM)"
        },
        "💰 Smart Budget Breakdown": {
            "Total Estimated Cost": budget,
            "Stay": "35%",
            "Food": "25%",
            "Transport": "25%",
            "Activities & Entry": "15%"
        },
        "🏨 Recommended Stays": [
            {
                "Name": `${dest} Heritage ${stayType} / Verified Boutique`,
                "Type": stayType,
                "Price Range": stayPrice,
                "Highlights": `Central location, excellent connectivity to sacred landmarks, verified cleanliness, and authentic breakfast.`
            }
        ],
        "📅 Day-by-Day Itinerary": days,
        "🍽️ Local Food Guide": foodList,
        "📸 Top Photography Spots": [
            `Iconic Heritage Courtyards & Ghats of ${dest} at Golden Hour`,
            `Ancient architectural gateways and bustling heritage market alleys`
        ],
        "🎯 Hidden Gems": [
            {
                "Place": `Centuries-old Heritage Stepwell & Quiet Riverside Sanctuary in ${dest}`,
                "Tip": "Visit between 7:30 AM and 10:00 AM for tranquil exploration without tourist crowds."
            }
        ],
        "🛍️ Shopping & Souvenirs": [
            "Handloom textiles, brass handicrafts, and traditional woodwork",
            `Authentic packed sweets and famous local delicacies of ${dest}`
        ],
        "🛡️ Safety & Travel Tips": safetyTips,
        "🎒 Packing Checklist": [
            "Breathable cotton clothes and respectful attire for sacred places",
            "Power bank, smartphone camera, and protective sunglasses",
            "Reusable water bottle and basic personal travel first-aid kit"
        ]
    };
}

/* ==========================================================
   READY
========================================================== */

log("🚀 UPVERSE AI API Loaded");
