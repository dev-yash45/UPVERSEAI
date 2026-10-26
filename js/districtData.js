/* ==========================================================
   UPVERSE DISTRICT DATA & RICH INTELLIGENCE REGISTRY
   Curated district catalog and offline-resilient fallback engine
========================================================== */
"use strict";

const districts = [
  {
    id: 1,
    name: "Raebareli",
    slug: "raebareli",
    featured: true,
    priority: 10,
    image: "assets/images/districts/raebareli.webp",
    categories: ["historical", "popular"],
    aliases: ["rbl", "rae bareli", "rai bareli"],
    keywords: ["indira gandhi", "nehru", "heritage", "politics", "freedom movement", "temple", "samathe"]
  },
  {
    id: 2,
    name: "Lucknow",
    slug: "lucknow",
    featured: false,
    priority: 10,
    image: "assets/images/districts/lucknow.webp",
    categories: ["historical", "food", "popular"],
    aliases: ["lko", "nawabs"],
    keywords: ["awadhi", "biryani", "imambara", "nawab", "capital", "tehzeeb", "chikankari", "rumi darwaza"]
  },
  {
    id: 3,
    name: "Agra",
    slug: "agra",
    featured: false,
    priority: 10,
    image: "assets/images/districts/agra.webp",
    categories: ["historical", "popular"],
    aliases: ["taj nagari"],
    keywords: ["taj mahal", "agra fort", "mughal", "unesco", "yamuna", "love monument", "petha"]
  },
  {
    id: 4,
    name: "Ayodhya",
    slug: "ayodhya",
    featured: false,
    priority: 10,
    image: "assets/images/districts/ayodhya.webp",
    categories: ["religious", "popular"],
    aliases: ["faizabad", "saket", "ram nagari"],
    keywords: ["ram", "ram mandir", "shri ram", "sarayu", "hindu temple", "diwali", "hanuman garhi"]
  },
  {
    id: 5,
    name: "Varanasi",
    slug: "varanasi",
    featured: false,
    priority: 10,
    image: "assets/images/districts/varanasi.webp",
    categories: ["religious", "historical", "popular"],
    aliases: ["kashi", "banaras"],
    keywords: ["ganga", "ghat", "shiv", "aarti", "temple", "kashi vishwanath", "sarnath", "silk"]
  },
  {
    id: 6,
    name: "Prayagraj",
    slug: "prayagraj",
    featured: false,
    priority: 9,
    image: "assets/images/districts/prayagraj.webp",
    categories: ["religious", "historical"],
    aliases: ["allahabad"],
    keywords: ["kumbh", "triveni", "sangam", "ganga", "yamuna", "anand bhavan", "akbar fort"]
  },
  {
    id: 7,
    name: "Mathura",
    slug: "mathura",
    featured: false,
    priority: 9,
    image: "assets/images/districts/mathura.webp",
    categories: ["religious", "popular"],
    aliases: ["braj"],
    keywords: ["krishna", "vrindavan", "janmabhoomi", "holi", "peda", "yamuna"]
  },
  {
    id: 8,
    name: "Noida",
    slug: "noida",
    featured: false,
    priority: 8,
    image: "assets/images/districts/noida.webp",
    categories: ["modern", "popular"],
    aliases: ["gautam buddha nagar"],
    keywords: ["startup", "technology", "it park", "metro", "business", "cyber hub"]
  },
  {
    id: 9,
    name: "Kanpur Nagar",
    slug: "kanpur-nagar",
    featured: false,
    priority: 8,
    image: "assets/images/districts/kanpur.webp",
    categories: ["historical", "modern"],
    aliases: ["kanpur", "cawnpore"],
    keywords: ["iit kanpur", "leather", "industry", "ganga", "bithoor", "manchester of the east"]
  },
  {
    id: 10,
    name: "Jhansi",
    slug: "jhansi",
    featured: false,
    priority: 8,
    image: "assets/images/districts/jhansi.webp",
    categories: ["historical"],
    aliases: ["bundelkhand"],
    keywords: ["rani lakshmibai", "fort", "1857", "freedom fighter", "bundelkhand", "heritage"]
  },
  {
    id: 11,
    name: "Gorakhpur",
    slug: "gorakhpur",
    featured: false,
    priority: 8,
    image: "assets/images/districts/gorakhpur.webp",
    categories: ["religious", "historical"],
    aliases: ["gkp"],
    keywords: ["gorakhnath", "temple", "nath", "math", "gita press", "ramgarh taal"]
  },
  {
    id: 12,
    name: "Meerut",
    slug: "meerut",
    featured: false,
    priority: 7,
    image: "assets/images/districts/meerut.webp",
    categories: ["historical", "popular"],
    aliases: [],
    keywords: ["1857", "sports goods", "cricket bat", "hastinapur", "scooters"]
  },
  {
    id: 13,
    name: "Bareilly",
    slug: "bareilly",
    featured: false,
    priority: 7,
    image: "assets/images/districts/bareilly.webp",
    categories: ["historical", "popular"],
    aliases: ["bans bareilly"],
    keywords: ["jhumka", "market", "culture", "zari zardozi", "surma"]
  },
  {
    id: 14,
    name: "Aligarh",
    slug: "aligarh",
    featured: false,
    priority: 7,
    image: "assets/images/districts/aligarh.webp",
    categories: ["historical"],
    aliases: ["kol"],
    keywords: ["amu", "aligarh muslim university", "locks", "tala", "brass"]
  },
  {
    id: 15,
    name: "Fatehpur",
    slug: "fatehpur",
    featured: false,
    priority: 6,
    image: "assets/images/districts/fatehpur.webp",
    categories: ["historical"],
    aliases: [],
    keywords: ["heritage", "temple", "yamuna", "ganga", "doab"]
  },
  {
    id: 16,
    name: "Saharanpur",
    slug: "saharanpur",
    featured: false,
    priority: 6,
    image: "assets/images/districts/saharanpur.webp",
    categories: ["nature", "popular"],
    aliases: [],
    keywords: ["wood carving", "shivalik", "craft", "forest", "heritage", "mangoes"]
  },
  {
    id: 17,
    name: "Muzaffarnagar",
    slug: "muzaffarnagar",
    featured: false,
    priority: 6,
    image: "assets/images/districts/muzaffarnagar.webp",
    categories: ["popular"],
    aliases: [],
    keywords: ["sugarcane", "jaggery", "agriculture", "ganga canal", "sugar bowl"]
  },
  {
    id: 18,
    name: "Shamli",
    slug: "shamli",
    featured: false,
    priority: 5,
    image: "assets/images/districts/shamli.webp",
    categories: ["nature"],
    aliases: [],
    keywords: ["agriculture", "green fields", "sugarcane", "western up"]
  },
  {
    id: 19,
    name: "Baghpat",
    slug: "baghpat",
    featured: false,
    priority: 5,
    image: "assets/images/districts/baghpat.webp",
    categories: ["historical"],
    aliases: [],
    keywords: ["mahabharata", "yamuna", "heritage", "lakshagriha"]
  },
  {
    id: 20,
    name: "Ghaziabad",
    slug: "ghaziabad",
    featured: false,
    priority: 8,
    image: "assets/images/districts/ghaziabad.webp",
    categories: ["modern", "popular"],
    aliases: ["gateway of up"],
    keywords: ["hindon", "ncr", "metro", "technology", "industry"]
  },
  {
    id: 21,
    name: "Hapur",
    slug: "hapur",
    featured: false,
    priority: 5,
    image: "assets/images/districts/hapur.webp",
    categories: ["popular"],
    aliases: ["panchsheel nagar"],
    keywords: ["grain market", "papad", "business", "garhmukteshwar"]
  },
  {
    id: 22,
    name: "Bulandshahr",
    slug: "bulandshahr",
    featured: false,
    priority: 6,
    image: "assets/images/districts/bulandshahr.webp",
    categories: ["historical"],
    aliases: [],
    keywords: ["khurja", "ceramics", "pottery", "heritage"]
  },
  {
    id: 23,
    name: "Gautam Buddha Nagar",
    slug: "gautam-buddha-nagar",
    featured: false,
    priority: 8,
    image: "assets/images/districts/gautam-buddha-nagar.webp",
    categories: ["modern", "popular"],
    aliases: ["greater noida"],
    keywords: ["expo mart", "formula 1", "startup", "technology", "it park", "buddh circuit"]
  },
  {
    id: 24,
    name: "Bijnor",
    slug: "bijnor",
    featured: false,
    priority: 5,
    image: "assets/images/districts/bijnor.webp",
    categories: ["nature"],
    aliases: [],
    keywords: ["ganga", "forest", "wildlife", "agriculture", "kanva ashram"]
  },
  {
    id: 25,
    name: "Amroha",
    slug: "amroha",
    featured: false,
    priority: 5,
    image: "assets/images/districts/amroha.webp",
    categories: ["historical"],
    aliases: ["jyotiba phule nagar"],
    keywords: ["mango", "musical instruments", "craft", "dholak"]
  },
  {
    id: 26,
    name: "Moradabad",
    slug: "moradabad",
    featured: false,
    priority: 7,
    image: "assets/images/districts/moradabad.webp",
    categories: ["historical", "popular"],
    aliases: ["peetal nagri"],
    keywords: ["brass city", "handicrafts", "export", "metal craft"]
  },
  {
    id: 27,
    name: "Rampur",
    slug: "rampur",
    featured: false,
    priority: 6,
    image: "assets/images/districts/rampur.webp",
    categories: ["historical"],
    aliases: [],
    keywords: ["rampur raza library", "nawab", "heritage", "knife", "chaaku"]
  },
  {
    id: 28,
    name: "Sambhal",
    slug: "sambhal",
    featured: false,
    priority: 5,
    image: "assets/images/districts/sambhal.webp",
    categories: ["historical"],
    aliases: ["bheem nagar"],
    keywords: ["horn craft", "heritage", "handicrafts", "kalki"]
  },
  {
    id: 29,
    name: "Budaun",
    slug: "budaun",
    featured: false,
    priority: 5,
    image: "assets/images/districts/budaun.webp",
    categories: ["historical"],
    aliases: [],
    keywords: ["jama masjid", "heritage", "history", "sufi shrine"]
  },
  {
    id: 30,
    name: "Vrindavan & Mathura",
    slug: "vrindavan",
    featured: false,
    priority: 9,
    image: "assets/images/districts/vrindavan.webp",
    categories: ["religious", "popular"],
    aliases: ["braj dham"],
    keywords: ["banke bihari", "prem mandir", "iskcon", "radha rani", "yamuna", "holi", "nidhivan"]
  }
];

/* ==========================================================
   OFFLINE & HIGH-SPEED FALLBACK DATABASE
   Complete, rich district datasets so the UI NEVER renders blank
========================================================== */
const RICH_DISTRICT_DATABASE = {
  varanasi: {
    basic: {
      name: "Varanasi",
      tagline: "The Spiritual Capital of India",
      population: "36.76 Lakhs",
      area: "1,535 sq km",
      headquarters: "Varanasi",
      bestSeason: "October to March",
      famousFor: "Sacred Ghats, Kashi Vishwanath, Ganga Aarti, Banarasi Silk"
    },
    location: { lat: 25.3176, lng: 82.9739, zoom: 12 },
    ai: {
      score: 98,
      overview: "Varanasi, or Kashi, is one of the world's oldest continuously inhabited cities. Situated on the holy banks of the Ganges, it is a sublime nexus of spirituality, ancient philosophy, classical arts, and timeless rituals.",
      perfectFor: ["Pilgrims", "Culture Seekers", "Photographers", "Solo Travelers"],
      travelStyle: "Spiritual, slow-paced, and culturally immersive",
      budgetRange: "₹2,500 – ₹7,000 / day",
      recommendedStay: "2 – 4 Days",
      bestTravelMonth: "November to February"
    },
    highlights: {
      history: "Inhabited for over 3,000 years, revered as the eternal abode of Lord Shiva and the birthplace of timeless spiritual traditions.",
      food: "Famous for melt-in-mouth Malaiyo, Tamatar Chaat, Banarasi Paan, Baati Chokha, and steaming hot Kachoris.",
      nature: "The sunrise boat rides on the sacred River Ganges and tranquil river islands.",
      spiritual: "84 historic river ghats, continuous temple bells, and the hypnotic evening Dashashwamedh Ganga Aarti."
    },
    travelMeter: { Heritage: 98, Spirituality: 99, Cuisine: 92, Photography: 96, Nightlife: 60 },
    moods: ["Soulful & Divine", "Ancient Alleyways", "Atmospheric Aarti", "Silk Weaving Legacy"],
    places: [
      { name: "Kashi Vishwanath Temple", description: "One of the 12 Jyotirlingas, newly restored into a magnificent corridor connected directly to the Ganges.", rating: "4.9", bestTime: "Early Morning (4:00 AM - 7:00 AM)", entryFee: "Free", visitDuration: "2 Hours", lat: 25.3109, lng: 83.0107 },
      { name: "Dashashwamedh Ghat", description: "The vibrant heart of the city where the world-renowned Grand Ganga Aarti takes place every evening.", rating: "4.8", bestTime: "Evening (5:30 PM - 7:30 PM)", entryFee: "Free", visitDuration: "2 Hours", lat: 25.3069, lng: 83.0104 },
      { name: "Assi Ghat", description: "Vibrant southernmost ghat famous for Subah-e-Banaras morning music, yoga, and youthful cafe culture.", rating: "4.7", bestTime: "Sunrise (5:00 AM)", entryFee: "Free", visitDuration: "2 Hours", lat: 25.2896, lng: 83.0069 },
      { name: "Sarnath", description: "The sacred deer park where Gautama Buddha delivered his first sermon; home to the Dhamek Stupa and Ashoka Pillar.", rating: "4.8", bestTime: "Morning & Afternoon", entryFee: "₹25", visitDuration: "3 Hours", lat: 25.3811, lng: 83.0214 }
    ],
    foods: [
      { name: "Banarasi Paan", description: "Iconic betel leaf creation with fragrant gulkand, spices, and centuries of Awadhi-Banarasi prestige.", bestSpot: "Keshav Tambool Bhandar" },
      { name: "Tamatar Chaat", description: "A one-of-a-kind savory delicacy made with slow-simmered tomatoes, hing, spices, and sugar syrup.", bestSpot: "Kashi Chaat Bhandar" },
      { name: "Malaiyo", description: "Delicate winter foam dessert flavored with saffron, cardamom, and topped with crunchy pistachios.", bestSpot: "Thatheri Bazaar" }
    ],
    festivals: [
      { name: "Dev Deepawali", description: "Millions of earthen lamps illuminate all 84 ghats on Kartik Poornima, turning the river into a cosmic mirror of stars.", time: "November" },
      { name: "Maha Shivaratri", description: "A grand procession and night-long celebrations honoring Lord Shiva across every alleyway.", time: "February / March" }
    ],
    hiddenGems: [
      { name: "Chet Singh Fort", description: "A majestic 18th-century riverside fortress witness to battle between Maharaja Chet Singh and Warren Hastings." },
      { name: "Ramnagar Fort Museum", description: "17th-century sandstone fortress across the river housing rare vintage car and royal palanquin collections." }
    ],
    nearby: [
      { name: "Prayagraj", slug: "prayagraj", distance: "125 km (2.5 hrs)" },
      { name: "Ayodhya", slug: "ayodhya", distance: "215 km (4 hrs)" },
      { name: "Lucknow", slug: "lucknow", distance: "300 km (5 hrs)" }
    ]
  },
  lucknow: {
    basic: {
      name: "Lucknow",
      tagline: "The City of Nawabs & Tehzeeb",
      population: "38.5 Lakhs",
      area: "2,528 sq km",
      headquarters: "Lucknow",
      bestSeason: "October to March",
      famousFor: "Bara Imambara, Awadhi Cuisine, Chikankari, Rumi Darwaza"
    },
    location: { lat: 26.8467, lng: 80.9462, zoom: 12 },
    ai: {
      score: 97,
      overview: "Capital of Uttar Pradesh, Lucknow is the undisputed cradle of Indo-Islamic refinement, Awadhi high cuisine, Urdu poetry, monumental architecture, and warm hospitality.",
      perfectFor: ["Foodies", "Architecture Aficionados", "History Lovers", "Shoppers"],
      travelStyle: "Opulent, regal, and culinary-centered",
      budgetRange: "₹3,000 – ₹9,000 / day",
      recommendedStay: "2 – 3 Days",
      bestTravelMonth: "November to February"
    },
    highlights: {
      history: "Golden age of the Nawabs of Awadh who fostered refined arts, Kathak dance, literature, and architectural marvels.",
      food: "World capital of Dum Biryani, Galouti Kebabs, Nihari Kulcha, Sheermal, and Royal Kulfi.",
      nature: "Janeshwar Mishra Park, Gomti Riverfront promenade, and lush heritage gardens.",
      spiritual: "Bara and Chhota Imambaras, historical churches, and ancient Hanuman temples."
    },
    travelMeter: { Heritage: 96, Cuisine: 99, Shopping: 94, Architecture: 97, Culture: 98 },
    moods: ["Regal Sophistication", "Nawabi Hospitality", "Gourmet Awakening", "Poetic Elegance"],
    places: [
      { name: "Bara Imambara & Bhulbhulaiya", description: "Architectural wonder built in 1784 with an unsupported arched central hall and a baffling labyrinth of corridors.", rating: "4.8", bestTime: "Morning (9:00 AM - 12:00 PM)", entryFee: "₹50", visitDuration: "2.5 Hours", lat: 26.8692, lng: 80.9128 },
      { name: "Rumi Darwaza", description: "Iconic 60-foot Turkish gate that has stood as the quintessential symbol of Lucknow for centuries.", rating: "4.7", bestTime: "Evening / Illuminated Night", entryFee: "Free", visitDuration: "45 Mins", lat: 26.8711, lng: 80.9126 },
      { name: "The Residency", description: "Historic British compound preserved as ruins, bearing scarred marks of the famous 1857 Siege of Lucknow.", rating: "4.6", bestTime: "Afternoon", entryFee: "₹25", visitDuration: "2 Hours", lat: 26.8604, lng: 80.9272 }
    ],
    foods: [
      { name: "Galouti Kebab", description: "Melt-in-mouth kebabs crafted with over 160 secret spices originally made for Nawab Asad-ud-Daula.", bestSpot: "Tunday Kababi, Chowk" },
      { name: "Lucknowi Dum Biryani", description: "Fragrant basmati rice gently layered with slow-cooked meat and scented saffron broth.", bestSpot: "Idris Biryani / Dastarkhwan" }
    ],
    festivals: [
      { name: "Lucknow Mahotsav", description: "A 10-day celebration of Awadhi art, music, crafts, and food in November.", time: "November / December" }
    ],
    hiddenGems: [
      { name: "Dilkusha Kothi", description: "Eighteenth-century English baroque-style hunting lodge nestled within serene green lawns." }
    ],
    nearby: [
      { name: "Ayodhya", slug: "ayodhya", distance: "135 km (2.5 hrs)" },
      { name: "Kanpur", slug: "kanpur-nagar", distance: "80 km (1.5 hrs)" }
    ]
  },
  agra: {
    basic: {
      name: "Agra",
      tagline: "The Imperial City of Eternal Love",
      population: "44.2 Lakhs",
      area: "4,027 sq km",
      headquarters: "Agra",
      bestSeason: "October to March",
      famousFor: "Taj Mahal, Agra Fort, Fatehpur Sikri, Petha"
    },
    location: { lat: 27.1767, lng: 78.0081, zoom: 12 },
    ai: {
      score: 99,
      overview: "Home to three UNESCO World Heritage Sites including the Taj Mahal, Agra sits on the banks of Yamuna and was the supreme imperial seat of the Mughal Empire at its zenith.",
      perfectFor: ["Couples", "Global Travelers", "History Buffs", "Architects"],
      travelStyle: "Monumental, romantic, and awe-inspiring",
      budgetRange: "₹3,500 – ₹10,000 / day",
      recommendedStay: "1 – 3 Days",
      bestTravelMonth: "October to March"
    },
    highlights: {
      history: "The imperial capital of Akbar, Jahangir, and Shah Jahan, showcasing the pinnacle of Indo-Persian architecture.",
      food: "Famous Agra Petha in over 30 flavors, spicy Bedmi Poori with Aloo, and Mughlai curries.",
      nature: "Mehtab Bagh sunset gardens overlooking the Taj Mahal across the Yamuna River.",
      spiritual: "Jama Masjid, ancient Bateshwar temples, and sacred riverfront sanctuaries."
    },
    travelMeter: { Heritage: 100, Architecture: 100, Photography: 98, Cuisine: 88, Shopping: 86 },
    moods: ["Timeless Romance", "Imperial Grandeur", "Marble Artistry", "Sunset Wonder"],
    places: [
      { name: "Taj Mahal", description: "World wonder and ivory-white marble mausoleum commissioned in 1632 by Shah Jahan for his wife Mumtaz Mahal.", rating: "5.0", bestTime: "Sunrise (6:00 AM)", entryFee: "₹50 (Indian) / ₹1100 (Foreigner)", visitDuration: "3 Hours", lat: 27.1751, lng: 78.0421 },
      { name: "Agra Fort", description: "Vast red sandstone fortress residence of Mughal emperors, containing Jahangir Palace, Khas Mahal, and Sheesh Mahal.", rating: "4.8", bestTime: "Morning", entryFee: "₹50", visitDuration: "2.5 Hours", lat: 27.1795, lng: 78.0211 },
      { name: "Fatehpur Sikri", description: "Akbar's magnificent red sandstone imperial city featuring Buland Darwaza and the Salim Chishti shrine.", rating: "4.7", bestTime: "Afternoon", entryFee: "₹50", visitDuration: "3 Hours", lat: 27.0945, lng: 77.6679 }
    ],
    foods: [
      { name: "Agra Petha", description: "Translucent candy made from ash gourd in flavours like Kesar, Paan, Angoori, and Sandalwood.", bestSpot: "Panchi Petha" },
      { name: "Bedai & Jalebi", description: "Crispy fried puri stuffed with spiced urad dal served with hot potato curry and sweet jalebis.", bestSpot: "Deviram Sweets" }
    ],
    festivals: [
      { name: "Taj Mahotsav", description: "10-day carnival at Shilpgram near the Taj Mahal celebrating arts, crafts, and food.", time: "February" }
    ],
    hiddenGems: [
      { name: "Chini Ka Rauza", description: "Lesser-visited funerary monument with dazzling Persian glazed blue tile work on the riverbank." }
    ],
    nearby: [
      { name: "Mathura", slug: "mathura", distance: "55 km (1 hr)" },
      { name: "Fatehpur", slug: "fatehpur", distance: "38 km (45 mins)" }
    ]
  },
  ayodhya: {
    basic: {
      name: "Ayodhya",
      tagline: "The Sacred Birthplace of Shri Ram",
      population: "25 Lakhs",
      area: "2,522 sq km",
      headquarters: "Ayodhya",
      bestSeason: "October to March",
      famousFor: "Shri Ram Janmabhoomi Mandir, Sarayu Ghats, Hanuman Garhi, Deepotsav"
    },
    location: { lat: 26.7922, lng: 82.1998, zoom: 12 },
    ai: {
      score: 98,
      overview: "One of the seven sacred Puris of Hinduism, Ayodhya on the holy Sarayu River is the celebrated setting of the Ramayana and the birthplace of Lord Rama.",
      perfectFor: ["Pilgrims", "Spiritual Seekers", "Families", "Culture Enthusiasts"],
      travelStyle: "Devotional, historic, and sacred",
      budgetRange: "₹2,000 – ₹6,000 / day",
      recommendedStay: "1 – 3 Days",
      bestTravelMonth: "October to March"
    },
    highlights: {
      history: "Ancient capital of the Kosala Kingdom and Ikshvaku dynasty, rich with millennia of Vedic lore and monuments.",
      food: "Traditional sattvic Awadhi thalis, Rabdi, Khurchan, Pedas, and refreshing spiced buttermilk.",
      nature: "The serene holy waters of Sarayu River with boat rides and ghat-side gardens.",
      spiritual: "Shri Ram Janmabhoomi Mandir, Hanuman Garhi, and the grand evening Sarayu Aarti."
    },
    travelMeter: { Spirituality: 100, Heritage: 96, Architecture: 95, Culture: 94, Cuisine: 85 },
    moods: ["Sacred Peace", "Chants & Devotion", "Sarayu Breeze", "Ancient Glory"],
    places: [
      { name: "Shri Ram Janmabhoomi Mandir", description: "Magnificent newly consecrated pink sandstone temple complex built in traditional Nagara style.", rating: "5.0", bestTime: "Morning / Evening Aarti", entryFee: "Free", visitDuration: "3 Hours", lat: 26.7956, lng: 82.1943 },
      { name: "Hanuman Garhi", description: "10th-century fortress temple dedicated to Lord Hanuman perched atop 76 steep steps.", rating: "4.9", bestTime: "Morning", entryFee: "Free", visitDuration: "1.5 Hours", lat: 26.7938, lng: 82.2031 },
      { name: "Ram Ki Paidi", description: "A picturesque series of bathing ghats on the banks of Sarayu River illuminated with dramatic laser shows.", rating: "4.8", bestTime: "Sunset & Night", entryFee: "Free", visitDuration: "2 Hours", lat: 26.8021, lng: 82.2064 }
    ],
    foods: [
      { name: "Ayodhya Peda & Rabdi", description: "Mawa sweets prepared slowly in iron kadhais, fragrant with cardamom.", bestSpot: "Hanuman Garhi Market" }
    ],
    festivals: [
      { name: "Ayodhya Deepotsav", description: "Guinness World Record lightings with over 2.5 million earthen lamps across Ram Ki Paidi.", time: "Diwali (October/November)" }
    ],
    hiddenGems: [
      { name: "Guptar Ghat", description: "Peaceful sacred riverbank where Lord Rama is believed to have taken Jal Samadhi into Vaikuntha." }
    ],
    nearby: [
      { name: "Lucknow", slug: "lucknow", distance: "135 km (2.5 hrs)" },
      { name: "Varanasi", slug: "varanasi", distance: "215 km (4 hrs)" }
    ]
  }
};

/* ==========================================================
   GENERATE DYNAMIC INTELLIGENCE FOR ANY DISTRICT
========================================================== */
function getDistrictFullData(slug) {
  const normalized = slug ? slug.trim().toLowerCase() : "varanasi";
  if (RICH_DISTRICT_DATABASE[normalized]) {
    return RICH_DISTRICT_DATABASE[normalized];
  }

  const meta = districts.find(d => d.slug === normalized) || {
    name: normalized.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
    slug: normalized,
    categories: ["historical", "popular"],
    image: `assets/images/districts/${normalized}.webp`
  };

  return {
    basic: {
      name: meta.name,
      tagline: `Discover the Timeless Culture and Hidden Wonders of ${meta.name}`,
      population: "Vibrant Community",
      area: "Historical District",
      headquarters: meta.name,
      bestSeason: "October to March",
      famousFor: meta.keywords ? meta.keywords.slice(0, 4).join(", ") : "Heritage, Cuisine & Culture"
    },
    location: { lat: 26.8467, lng: 80.9462, zoom: 11 },
    ai: {
      score: 93,
      overview: `${meta.name} is a key cultural and historic destination in Uttar Pradesh, renowned for its heritage, friendly community, local artisanal crafts, and rich regional traditions.`,
      perfectFor: ["Explorers", "History Enthusiasts", "Regional Travellers"],
      travelStyle: "Cultural and experiential",
      budgetRange: "₹2,000 – ₹5,000 / day",
      recommendedStay: "1 – 2 Days",
      bestTravelMonth: "November to February"
    },
    highlights: {
      history: `A land with deep roots in Indian freedom movement, medieval traditions, and cultural harmony.`,
      food: `Famous for savory chaats, local sweets, street delicacies, and traditional recipes.`,
      nature: `Scenic riverbanks, green agricultural fields, and natural waterways.`,
      spiritual: `Historic shrines, sacred ponds, and vibrant local temple festivals.`
    },
    travelMeter: { Heritage: 90, Cuisine: 86, Nature: 84, Culture: 88, Hospitality: 92 },
    moods: ["Historical Discovery", "Warm Hospitality", "Local Flavors", "Tranquil Ambiance"],
    places: [
      { name: `${meta.name} Heritage Center`, description: `Ancient historical landmark representing the architectural and cultural legacy of ${meta.name}.`, rating: "4.7", bestTime: "Morning", entryFee: "Free", visitDuration: "2 Hours", lat: 26.85, lng: 80.95 },
      { name: `Central Ghat & Bazaar`, description: `Lively marketplace with local handicrafts, regional street food, and vibrant community life.`, rating: "4.6", bestTime: "Evening", entryFee: "Free", visitDuration: "2 Hours", lat: 26.86, lng: 80.96 }
    ],
    foods: [
      { name: `Traditional Regional Thali`, description: `Authentic regional thali featuring freshly prepared seasonal curries, rotis, and sweets.`, bestSpot: "Local Bazaar" },
      { name: `Signature Sweets of ${meta.name}`, description: `Pure mawa and khoya confections made fresh daily using centuries-old recipes.`, bestSpot: "City Center" }
    ],
    festivals: [
      { name: `Diwali & Dev Deepawali`, description: `Grand festival of lights celebrated with earthen diyas, sweets, and community fireworks.`, time: "Autumn" },
      { name: `Holi & Cultural Mela`, description: `Vibrant festival of colors and spring harvest celebrated across the whole district.`, time: "Spring" }
    ],
    hiddenGems: [
      { name: `Old Town Heritage Walk`, description: `Explore tucked-away courtyards, ancient stepwells, and artisan workshops.` }
    ],
    nearby: [
      { name: "Lucknow", slug: "lucknow", distance: "Quick transit" },
      { name: "Varanasi", slug: "varanasi", distance: "Connected by rail" }
    ]
  };
}

window.districts = districts;
window.getDistrictFullData = getDistrictFullData;
