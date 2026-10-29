/* ==========================================================
   UPVERSE DISTRICT DATA & RICH INTELLIGENCE REGISTRY
   Complete 75 Districts Catalog & Universal Offline Fallback Engine
========================================================== */
"use strict";

const districts = [
  {
    "id": 1,
    "name": "Agra",
    "slug": "agra",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/agra.webp",
    "categories": [
      "historical",
      "popular",
      "food"
    ],
    "aliases": [
      "taj nagari",
      "akbarabad"
    ],
    "keywords": [
      "taj mahal",
      "agra fort",
      "fatehpur sikri",
      "mughal",
      "petha",
      "yamuna",
      "unesco",
      "mehtab bagh",
      "sikandra",
      "bateshwar"
    ]
  },
  {
    "id": 2,
    "name": "Aligarh",
    "slug": "aligarh",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/aligarh.webp",
    "categories": [
      "historical",
      "popular"
    ],
    "aliases": [
      "kol",
      "koil",
      "tala nagari"
    ],
    "keywords": [
      "locks",
      "tala",
      "amu",
      "aligarh muslim university",
      "aligarh fort",
      "shekha jheel",
      "brass hardware",
      "dharampur"
    ]
  },
  {
    "id": 3,
    "name": "Ambedkar Nagar",
    "slug": "ambedkar-nagar",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/ambedkar-nagar.webp",
    "categories": [
      "historical",
      "religious"
    ],
    "aliases": [
      "akbarpur",
      "tanda"
    ],
    "keywords": [
      "tanda handloom",
      "terracotta",
      "shrawan kshetra",
      "govind saheb mela",
      "ghaghara river",
      "ashok ashram"
    ]
  },
  {
    "id": 4,
    "name": "Amethi",
    "slug": "amethi",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/amethi.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "gauriganj",
      "chhatrapati shahuji maharaj nagar"
    ],
    "keywords": [
      "moonj craft",
      "nandmahar dham",
      "bijli pasi fort",
      "malik muhammad jayasi",
      "ulterior heritage",
      "sultanpur border"
    ]
  },
  {
    "id": 5,
    "name": "Amroha",
    "slug": "amroha",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/amroha.webp",
    "categories": [
      "historical",
      "popular"
    ],
    "aliases": [
      "jyotiba phule nagar"
    ],
    "keywords": [
      "dholak",
      "musical instruments",
      "vasudev mandir",
      "shah wilayat dargah",
      "mangoes",
      "banbasa"
    ]
  },
  {
    "id": 6,
    "name": "Auraiya",
    "slug": "auraiya",
    "featured": false,
    "priority": 7,
    "image": "assets/images/districts/auraiya.webp",
    "categories": [
      "historical",
      "food"
    ],
    "aliases": [
      "auraya"
    ],
    "keywords": [
      "desi ghee",
      "pure ghee",
      "devkali temple",
      "yamuna ravines",
      "bidhuna",
      "traditional sweets",
      "chambal border"
    ]
  },
  {
    "id": 7,
    "name": "Ayodhya",
    "slug": "ayodhya",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/ayodhya.webp",
    "categories": [
      "religious",
      "popular",
      "historical"
    ],
    "aliases": [
      "faizabad",
      "saket",
      "ram nagari",
      "awadh"
    ],
    "keywords": [
      "ram",
      "ram mandir",
      "shri ram janmabhoomi",
      "sarayu",
      "hanuman garhi",
      "kanak bhavan",
      "deepotsav",
      "ram ki paidi",
      "guptar ghat"
    ]
  },
  {
    "id": 8,
    "name": "Azamgarh",
    "slug": "azamgarh",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/azamgarh.webp",
    "categories": [
      "historical",
      "popular"
    ],
    "aliases": [
      "nizamabad"
    ],
    "keywords": [
      "black pottery",
      "nizamabad black clay",
      "hariharpur",
      "classical music",
      "durvasa ashram",
      "tamsa river",
      "kaifi azmi"
    ]
  },
  {
    "id": 9,
    "name": "Baghpat",
    "slug": "baghpat",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/baghpat.webp",
    "categories": [
      "historical",
      "religious"
    ],
    "aliases": [
      "bagpat",
      "vyaghraprastha"
    ],
    "keywords": [
      "lakshagriha",
      "barnawa",
      "trilok teerth dham",
      "mahabharata",
      "yamuna river",
      "home furnishing",
      "archaeological mound"
    ]
  },
  {
    "id": 10,
    "name": "Bahraich",
    "slug": "bahraich",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/bahraich.webp",
    "categories": [
      "nature",
      "religious"
    ],
    "aliases": [
      "syed salar"
    ],
    "keywords": [
      "katarniaghat wildlife sanctuary",
      "dargah syed salar masood",
      "sarayu river",
      "tiger reserve",
      "tharu culture",
      "ghaghara"
    ]
  },
  {
    "id": 11,
    "name": "Ballia",
    "slug": "ballia",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/ballia.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "baagi ballia",
      "bhrigu nagari"
    ],
    "keywords": [
      "maharishi bhrigu temple",
      "mangal pandey",
      "surha taal bird sanctuary",
      "ganga ghaghara sangam",
      "freedom movement",
      "dadri mela"
    ]
  },
  {
    "id": 12,
    "name": "Balrampur",
    "slug": "balrampur",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/balrampur.webp",
    "categories": [
      "religious",
      "nature"
    ],
    "aliases": [
      "devipatan"
    ],
    "keywords": [
      "pateshwari devi",
      "devipatan shaktipeeth",
      "suhelwa wildlife sanctuary",
      "sahet mahet",
      "buddhist heritage",
      "rapti river"
    ]
  },
  {
    "id": 13,
    "name": "Banda",
    "slug": "banda",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/banda.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "kalinjar"
    ],
    "keywords": [
      "kalinjar fort",
      "shajar stone",
      "ken river",
      "bamdeo temple",
      "bundelkhand",
      "heritage fort",
      "khatri pahar"
    ]
  },
  {
    "id": 14,
    "name": "Barabanki",
    "slug": "barabanki",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/barabanki.webp",
    "categories": [
      "religious",
      "historical"
    ],
    "aliases": [
      "deva sharif",
      "daryabad"
    ],
    "keywords": [
      "deva sharif",
      "haji waris ali shah",
      "parijaat tree",
      "lodheshwar mahadev",
      "handloom scarf",
      "ghaghara river"
    ]
  },
  {
    "id": 15,
    "name": "Bareilly",
    "slug": "bareilly",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/bareilly.webp",
    "categories": [
      "popular",
      "food",
      "historical"
    ],
    "aliases": [
      "bans bareilly",
      "nath nagari"
    ],
    "keywords": [
      "jhumka",
      "zari zardozi",
      "alakhnath temple",
      "trivati nath",
      "surma",
      "ahichchhatra",
      "bareilly food",
      "ramganga"
    ]
  },
  {
    "id": 16,
    "name": "Basti",
    "slug": "basti",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/basti.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "vashistha nagari"
    ],
    "keywords": [
      "chando tal",
      "bhadreshwar nath",
      "rishi vashistha ashram",
      "wood craft",
      "kuwano river",
      "makhauda dham"
    ]
  },
  {
    "id": 17,
    "name": "Bhadohi",
    "slug": "bhadohi",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/bhadohi.webp",
    "categories": [
      "popular",
      "religious",
      "historical"
    ],
    "aliases": [
      "sant ravidas nagar",
      "gyanpur",
      "carpet city"
    ],
    "keywords": [
      "carpet",
      "kalin",
      "handmade rugs",
      "sitamarhi",
      "sita samahit sthal",
      "harihar nath mandir",
      "wool weaving"
    ]
  },
  {
    "id": 18,
    "name": "Bijnor",
    "slug": "bijnor",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/bijnor.webp",
    "categories": [
      "nature",
      "historical"
    ],
    "aliases": [
      "brijnor"
    ],
    "keywords": [
      "kanva ashram",
      "vidur kuti",
      "ganga barrage",
      "peeli dam",
      "dushyant shakuntala",
      "sugar",
      "haiderpur wetland"
    ]
  },
  {
    "id": 19,
    "name": "Budaun",
    "slug": "budaun",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/budaun.webp",
    "categories": [
      "historical",
      "religious"
    ],
    "aliases": [
      "badayun",
      "vodamayuta"
    ],
    "keywords": [
      "jama masjid shamsi",
      "hazrat nizamuddin auliya",
      "peda",
      "zari zardozi",
      "sot river",
      "heritage tombs"
    ]
  },
  {
    "id": 20,
    "name": "Bulandshahr",
    "slug": "bulandshahr",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/bulandshahr.webp",
    "categories": [
      "popular",
      "historical"
    ],
    "aliases": [
      "khurja",
      "baran"
    ],
    "keywords": [
      "khurja pottery",
      "ceramic",
      "ahar ganga",
      "belon temple",
      "milk products",
      "heritage",
      "karnavas"
    ]
  },
  {
    "id": 21,
    "name": "Chandauli",
    "slug": "chandauli",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/chandauli.webp",
    "categories": [
      "nature",
      "historical"
    ],
    "aliases": [
      "dhanapur"
    ],
    "keywords": [
      "chandraprabha wildlife sanctuary",
      "rajdari waterfall",
      "devdari waterfall",
      "rice bowl of up",
      "hathiya dah",
      "naugarh fort"
    ]
  },
  {
    "id": 22,
    "name": "Chitrakoot",
    "slug": "chitrakoot",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/chitrakoot.webp",
    "categories": [
      "religious",
      "nature",
      "popular"
    ],
    "aliases": [
      "chitrakut",
      "kamadgiri"
    ],
    "keywords": [
      "ramghat",
      "kamadgiri",
      "bharat milap",
      "gupt godavari",
      "sati anusuya",
      "mandakini river",
      "hanuman dhara",
      "sphatik shila"
    ]
  },
  {
    "id": 23,
    "name": "Deoria",
    "slug": "deoria",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/deoria.webp",
    "categories": [
      "religious",
      "historical"
    ],
    "aliases": [
      "deoriya"
    ],
    "keywords": [
      "deoraha baba",
      "somnath temple",
      "dugdheshwar nath",
      "surajkund mandir",
      "sugar mills",
      "chhoti gandak"
    ]
  },
  {
    "id": 24,
    "name": "Etah",
    "slug": "etah",
    "featured": false,
    "priority": 7,
    "image": "assets/images/districts/etah.webp",
    "categories": [
      "nature",
      "historical"
    ],
    "aliases": [
      "yadu nagari"
    ],
    "keywords": [
      "patna bird sanctuary",
      "ghanta bell",
      "brass bells",
      "awagarh fort",
      "chambal ravines border",
      "noah khera"
    ]
  },
  {
    "id": 25,
    "name": "Etawah",
    "slug": "etawah",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/etawah.webp",
    "categories": [
      "nature",
      "historical"
    ],
    "aliases": [
      "ishtakapuri"
    ],
    "keywords": [
      "lion safari",
      "chambal safari",
      "national chambal sanctuary",
      "yamuna chambal sangam",
      "victoria memorial",
      "saifai",
      "gharials"
    ]
  },
  {
    "id": 26,
    "name": "Farrukhabad",
    "slug": "farrukhabad",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/farrukhabad.webp",
    "categories": [
      "historical",
      "religious"
    ],
    "aliases": [
      "fatehgarh",
      "kampil",
      "sankisa"
    ],
    "keywords": [
      "kampil",
      "jain teerth",
      "sankisa buddhist stupa",
      "zari zardozi",
      "block print textile",
      "ganga ghats",
      "draupadi birthplace"
    ]
  },
  {
    "id": 27,
    "name": "Fatehpur",
    "slug": "fatehpur",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/fatehpur.webp",
    "categories": [
      "historical",
      "religious"
    ],
    "aliases": [
      "bawan imli"
    ],
    "keywords": [
      "bawan imli",
      "bhitaura ganga",
      "asothar",
      "renh",
      "ganga yamuna doab",
      "freedom memorial",
      "tambeshwar temple"
    ]
  },
  {
    "id": 28,
    "name": "Firozabad",
    "slug": "firozabad",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/firozabad.webp",
    "categories": [
      "popular",
      "historical"
    ],
    "aliases": [
      "suhag nagari",
      "chandwar"
    ],
    "keywords": [
      "glass",
      "bangles",
      "glassware",
      "chandwar fort",
      "kalan mela",
      "handicrafts",
      "choodi nagari"
    ]
  },
  {
    "id": 29,
    "name": "Gautam Buddha Nagar",
    "slug": "gautam-buddha-nagar",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/gautam-buddha-nagar.webp",
    "categories": [
      "modern",
      "popular"
    ],
    "aliases": [
      "noida",
      "greater noida",
      "gb nagar"
    ],
    "keywords": [
      "noida",
      "greater noida",
      "it hub",
      "buddh international circuit",
      "india expo mart",
      "okhla bird sanctuary",
      "yamuna expressway"
    ]
  },
  {
    "id": 30,
    "name": "Ghaziabad",
    "slug": "ghaziabad",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/ghaziabad.webp",
    "categories": [
      "modern",
      "popular",
      "religious"
    ],
    "aliases": [
      "gateway of up"
    ],
    "keywords": [
      "dudheshwar nath temple",
      "hindon river",
      "swarna jayanti park",
      "industrial hub",
      "mohan nagar",
      "city forest"
    ]
  },
  {
    "id": 31,
    "name": "Ghazipur",
    "slug": "ghazipur",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/ghazipur.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "gadhipuri"
    ],
    "keywords": [
      "lord cornwallis tomb",
      "opium factory",
      "ganga ghats",
      "kamakhya temple",
      "rose water",
      "attar",
      "chhoti kashi"
    ]
  },
  {
    "id": 32,
    "name": "Gonda",
    "slug": "gonda",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/gonda.webp",
    "categories": [
      "nature",
      "religious"
    ],
    "aliases": [
      "gauda"
    ],
    "keywords": [
      "parvati arga bird sanctuary",
      "swaminarayan chhapaiya",
      "paska teerth",
      "varahi devi temple",
      "sugar mills",
      "ghaghara river"
    ]
  },
  {
    "id": 33,
    "name": "Gorakhpur",
    "slug": "gorakhpur",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/gorakhpur.webp",
    "categories": [
      "religious",
      "popular",
      "historical"
    ],
    "aliases": [
      "gorakhdham",
      "gorakshpur"
    ],
    "keywords": [
      "gorakhnath temple",
      "gita press",
      "ramgarh taal",
      "terracotta",
      "khichdi mela",
      "railway museum",
      "kushmi forest"
    ]
  },
  {
    "id": 34,
    "name": "Hamirpur",
    "slug": "hamirpur",
    "featured": false,
    "priority": 7,
    "image": "assets/images/districts/hamirpur.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "hamirpur bundelkhand"
    ],
    "keywords": [
      "yamuna betwa sangam",
      "chaura devi mandir",
      "kalpvriksha",
      "bundelkhand",
      "fish sanctuary",
      "baked clay craft"
    ]
  },
  {
    "id": 35,
    "name": "Hapur",
    "slug": "hapur",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/hapur.webp",
    "categories": [
      "religious",
      "historical",
      "popular"
    ],
    "aliases": [
      "panchsheel nagar",
      "garhmukteshwar"
    ],
    "keywords": [
      "garhmukteshwar",
      "brijghat ganga",
      "ganga fair",
      "papad industry",
      "mukteshwar mahadev",
      "nakka kuan"
    ]
  },
  {
    "id": 36,
    "name": "Hardoi",
    "slug": "hardoi",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/hardoi.webp",
    "categories": [
      "nature",
      "historical"
    ],
    "aliases": [
      "haridrohi"
    ],
    "keywords": [
      "sandi bird sanctuary",
      "prahlad kund",
      "victoria hall",
      "gomti river",
      "sugar industry",
      "bilgram"
    ]
  },
  {
    "id": 37,
    "name": "Hathras",
    "slug": "hathras",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/hathras.webp",
    "categories": [
      "food",
      "popular",
      "historical"
    ],
    "aliases": [
      "mahamaya nagar"
    ],
    "keywords": [
      "hing",
      "asafoetida",
      "dauji maharaj",
      "gulab jamun",
      "nautanki",
      "traditional sweets",
      "sasni"
    ]
  },
  {
    "id": 38,
    "name": "Jalaun",
    "slug": "jalaun",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/jalaun.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "orai",
      "kalpi"
    ],
    "keywords": [
      "kalpi",
      "handmade paper",
      "vyas temple",
      "lanka tower",
      "birbal birthplace",
      "yamuna ravines",
      "chaurasi gumbad"
    ]
  },
  {
    "id": 39,
    "name": "Jaunpur",
    "slug": "jaunpur",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/jaunpur.webp",
    "categories": [
      "historical",
      "food",
      "popular"
    ],
    "aliases": [
      "shiraz e hind"
    ],
    "keywords": [
      "shahi bridge",
      "atala masjid",
      "imarti",
      "mooli",
      "perfumes",
      "itr",
      "shahi qila",
      "gomti river",
      "jama masjid"
    ]
  },
  {
    "id": 40,
    "name": "Jhansi",
    "slug": "jhansi",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/jhansi.webp",
    "categories": [
      "historical",
      "popular"
    ],
    "aliases": [
      "rani laxmi bai nagari",
      "bundelkhand"
    ],
    "keywords": [
      "jhansi fort",
      "rani mahal",
      "rani laxmi bai",
      "government museum",
      "orchha gateway",
      "bundelkhand",
      "barua sagar"
    ]
  },
  {
    "id": 41,
    "name": "Kannauj",
    "slug": "kannauj",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/kannauj.webp",
    "categories": [
      "popular",
      "historical",
      "nature"
    ],
    "aliases": [
      "perfume capital",
      "kanyakubja",
      "harshavardhana capital"
    ],
    "keywords": [
      "perfume",
      "itr",
      "attar",
      "rose water",
      "scents",
      "lakh bahosi bird sanctuary",
      "harshavardhana",
      "mitti attar"
    ]
  },
  {
    "id": 42,
    "name": "Kanpur Dehat",
    "slug": "kanpur-dehat",
    "featured": false,
    "priority": 7,
    "image": "assets/images/districts/kanpur-dehat.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "akbarpur mati",
      "ramabai nagar"
    ],
    "keywords": [
      "bebi brick temple",
      "aluminum utensils",
      "rura",
      "parakh",
      "ganga yamuna plains",
      "mati"
    ]
  },
  {
    "id": 43,
    "name": "Kanpur Nagar",
    "slug": "kanpur-nagar",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/kanpur.webp",
    "categories": [
      "popular",
      "historical",
      "food"
    ],
    "aliases": [
      "kanpur",
      "cawnpore",
      "leather city"
    ],
    "keywords": [
      "leather",
      "bithoor",
      "brahmavart ghat",
      "jk temple",
      "allen forest zoo",
      "moti jheel",
      "thaggu ke laddu",
      "ganga barrage"
    ]
  },
  {
    "id": 44,
    "name": "Kasganj",
    "slug": "kasganj",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/kasganj.webp",
    "categories": [
      "religious",
      "nature"
    ],
    "aliases": [
      "kanshiram nagar",
      "soron"
    ],
    "keywords": [
      "soron shukarkshetra",
      "varaha temple",
      "ganga snan",
      "chamunda devi mandir",
      "kachhla ghat",
      "patiali"
    ]
  },
  {
    "id": 45,
    "name": "Kaushambi",
    "slug": "kaushambi",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/kaushambi.webp",
    "categories": [
      "historical",
      "religious"
    ],
    "aliases": [
      "manjhanpur",
      "kosam"
    ],
    "keywords": [
      "ghositaram monastery",
      "ashoka pillar",
      "vatsa kingdom",
      "buddhist site",
      "jain temple prabhasgiri",
      "yamuna river"
    ]
  },
  {
    "id": 46,
    "name": "Kushinagar",
    "slug": "kushinagar",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/kushinagar.webp",
    "categories": [
      "religious",
      "popular",
      "historical"
    ],
    "aliases": [
      "padrauna",
      "kushinara"
    ],
    "keywords": [
      "mahaparinirvana temple",
      "buddha",
      "ramabhar stupa",
      "buddhist circuit",
      "banana fiber craft",
      "japan temple",
      "matha kaur"
    ]
  },
  {
    "id": 47,
    "name": "Lakhimpur Kheri",
    "slug": "lakhimpur-kheri",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/lakhimpur-kheri.webp",
    "categories": [
      "nature",
      "popular"
    ],
    "aliases": [
      "kheri",
      "dudhwa"
    ],
    "keywords": [
      "dudhwa national park",
      "tiger reserve",
      "frog temple oel",
      "mendhak mandir",
      "rhino",
      "tharu culture",
      "sharda river",
      "swamp deer"
    ]
  },
  {
    "id": 48,
    "name": "Lalitpur",
    "slug": "lalitpur",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/lalitpur.webp",
    "categories": [
      "historical",
      "religious",
      "nature"
    ],
    "aliases": [
      "deogarh"
    ],
    "keywords": [
      "dashavatara temple",
      "deogarh",
      "gupta art",
      "matatila dam",
      "betwa river",
      "jain teerth",
      "talbehat fort"
    ]
  },
  {
    "id": 49,
    "name": "Lucknow",
    "slug": "lucknow",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/lucknow.webp",
    "categories": [
      "historical",
      "food",
      "popular"
    ],
    "aliases": [
      "lko",
      "city of nawabs",
      "shiraz e awadh",
      "awadh"
    ],
    "keywords": [
      "bara imambara",
      "chhota imambara",
      "rumi darwaza",
      "tunday kebabs",
      "dum biryani",
      "chikankari",
      "residency",
      "gomti riverfront",
      "hazratganj",
      "awadhi",
      "awadhi food",
      "nawab",
      "tehzeeb"
    ]
  },
  {
    "id": 50,
    "name": "Maharajganj",
    "slug": "maharajganj",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/maharajganj.webp",
    "categories": [
      "nature",
      "historical"
    ],
    "aliases": [
      "sohagibarwa"
    ],
    "keywords": [
      "sohagibarwa wildlife sanctuary",
      "lehra devi mandir",
      "indo nepal border",
      "rohin river",
      "forest trails",
      "sonauli border"
    ]
  },
  {
    "id": 51,
    "name": "Mahoba",
    "slug": "mahoba",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/mahoba.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "alha udal nagari",
      "mahotsav nagar"
    ],
    "keywords": [
      "alha udal",
      "sun temple rahila",
      "kirat sagar",
      "madan sagar",
      "chandela fort",
      "brass craft",
      "gokhar hill"
    ]
  },
  {
    "id": 52,
    "name": "Mainpuri",
    "slug": "mainpuri",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/mainpuri.webp",
    "categories": [
      "nature",
      "historical"
    ],
    "aliases": [
      "mayand nagari"
    ],
    "keywords": [
      "saman bird sanctuary",
      "tarkeshwar mandir",
      "tarkashi wooden inlay",
      "sarus crane",
      "heritage",
      "cyrus crane"
    ]
  },
  {
    "id": 53,
    "name": "Mathura",
    "slug": "mathura",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/mathura.webp",
    "categories": [
      "religious",
      "popular",
      "historical"
    ],
    "aliases": [
      "brajbhoomi",
      "krishna nagari"
    ],
    "keywords": [
      "krishna janmabhoomi",
      "dwarkadhish temple",
      "vishram ghat",
      "mathura peda",
      "yamuna river",
      "holi",
      "govardhan",
      "barsana"
    ]
  },
  {
    "id": 54,
    "name": "Mau",
    "slug": "mau",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/mau.webp",
    "categories": [
      "historical",
      "popular"
    ],
    "aliases": [
      "maunath bhanjan"
    ],
    "keywords": [
      "handloom sarees",
      "powerloom textile",
      "sheetla mata dham",
      "van devi mandir",
      "ghaghara river",
      "dohrighat"
    ]
  },
  {
    "id": 55,
    "name": "Meerut",
    "slug": "meerut",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/meerut.webp",
    "categories": [
      "historical",
      "popular",
      "modern"
    ],
    "aliases": [
      "sports city",
      "revolt city 1857"
    ],
    "keywords": [
      "1857 revolt",
      "sports goods",
      "cricket bat",
      "hastinapur",
      "augharnath temple",
      "st john church",
      "gajak",
      "nanu"
    ]
  },
  {
    "id": 56,
    "name": "Mirzapur",
    "slug": "mirzapur",
    "featured": true,
    "priority": 9,
    "image": "assets/images/districts/mirzapur.webp",
    "categories": [
      "religious",
      "popular",
      "nature"
    ],
    "aliases": [
      "vindhyachal",
      "chunar"
    ],
    "keywords": [
      "vindhyavasini devi",
      "vindhyachal",
      "chunar fort",
      "carpet",
      "brass utensils",
      "windom fall",
      "sirsi dam",
      "ashtabhuja"
    ]
  },
  {
    "id": 57,
    "name": "Moradabad",
    "slug": "moradabad",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/moradabad.webp",
    "categories": [
      "popular",
      "historical"
    ],
    "aliases": [
      "peetal nagari",
      "brass city"
    ],
    "keywords": [
      "brassware",
      "brass handicrafts",
      "peetal",
      "metal export",
      "jama masjid",
      "ramganga river",
      "raza fort"
    ]
  },
  {
    "id": 58,
    "name": "Muzaffarnagar",
    "slug": "muzaffarnagar",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/muzaffarnagar.webp",
    "categories": [
      "popular",
      "religious",
      "historical"
    ],
    "aliases": [
      "sugar bowl of india",
      "shukratal"
    ],
    "keywords": [
      "shukratal",
      "bhagavata katha",
      "vahelna jain temple",
      "sugar",
      "jaggery",
      "gur",
      "sukartal",
      "vat vriksha"
    ]
  },
  {
    "id": 59,
    "name": "Pilibhit",
    "slug": "pilibhit",
    "featured": true,
    "priority": 9,
    "image": "assets/images/districts/pilibhit.webp",
    "categories": [
      "nature",
      "popular"
    ],
    "aliases": [
      "bansuri nagari",
      "chuka beach"
    ],
    "keywords": [
      "pilibhit tiger reserve",
      "bansuri",
      "flute",
      "chuka beach",
      "sharda sagar dam",
      "gauri shankar mandir",
      "woodwork"
    ]
  },
  {
    "id": 60,
    "name": "Pratapgarh",
    "slug": "pratapgarh",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/pratapgarh.webp",
    "categories": [
      "nature",
      "religious",
      "popular"
    ],
    "aliases": [
      "belha",
      "aonla nagari"
    ],
    "keywords": [
      "aonla",
      "amla",
      "belha devi temple",
      "bhakti dham mangarh",
      "kripalu maharaj",
      "sai river",
      "hauz e shahi"
    ]
  },
  {
    "id": 61,
    "name": "Prayagraj",
    "slug": "prayagraj",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/prayagraj.webp",
    "categories": [
      "religious",
      "popular",
      "historical"
    ],
    "aliases": [
      "allahabad",
      "sangam nagari",
      "triveni",
      "illhabad"
    ],
    "keywords": [
      "triveni sangam",
      "kumbh mela",
      "allahabad fort",
      "anand bhavan",
      "khusro bagh",
      "ganga yamuna saraswati",
      "guava",
      "amrood",
      "shringverpur"
    ]
  },
  {
    "id": 62,
    "name": "Raebareli",
    "slug": "raebareli",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/raebareli.webp",
    "categories": [
      "historical",
      "popular",
      "nature"
    ],
    "aliases": [
      "rbl",
      "rae bareli"
    ],
    "keywords": [
      "samaspur bird sanctuary",
      "dalmau ghats",
      "indira gandhi botanical garden",
      "nehru",
      "freedom movement",
      "ganga ghat"
    ]
  },
  {
    "id": 63,
    "name": "Rampur",
    "slug": "rampur",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/rampur.webp",
    "categories": [
      "historical",
      "food",
      "popular"
    ],
    "aliases": [
      "rampur nawabs"
    ],
    "keywords": [
      "raza library",
      "rampuri knife",
      "chaku",
      "khas bagh palace",
      "rampur cuisine",
      "mentha oil",
      "kite flying"
    ]
  },
  {
    "id": 64,
    "name": "Saharanpur",
    "slug": "saharanpur",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/saharanpur.webp",
    "categories": [
      "popular",
      "religious",
      "nature"
    ],
    "aliases": [
      "wood carving city"
    ],
    "keywords": [
      "wood carving",
      "wooden handicrafts",
      "shakumbhari devi",
      "botanical garden",
      "basmati rice",
      "furniture",
      "deoband"
    ]
  },
  {
    "id": 65,
    "name": "Sambhal",
    "slug": "sambhal",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/sambhal.webp",
    "categories": [
      "historical",
      "religious"
    ],
    "aliases": [
      "kalki nagari"
    ],
    "keywords": [
      "kalki temple",
      "bone and horn craft",
      "historical jama masjid",
      "sot river",
      "handicrafts",
      "manota"
    ]
  },
  {
    "id": 66,
    "name": "Sant Kabir Nagar",
    "slug": "sant-kabir-nagar",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/sant-kabir-nagar.webp",
    "categories": [
      "religious",
      "historical",
      "nature"
    ],
    "aliases": [
      "khalilabad",
      "maghar"
    ],
    "keywords": [
      "maghar",
      "kabir samadhi",
      "sant kabir",
      "bakhira bird sanctuary",
      "brass utensils",
      "bakhira lake",
      "handloom"
    ]
  },
  {
    "id": 67,
    "name": "Shahjahanpur",
    "slug": "shahjahanpur",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/shahjahanpur.webp",
    "categories": [
      "historical",
      "religious"
    ],
    "aliases": [
      "shaheed nagari"
    ],
    "keywords": [
      "ram prasad bismil",
      "ashfaqullah khan",
      "martyrs city",
      "hanumat dham",
      "sugar industry",
      "carpet",
      "garra river"
    ]
  },
  {
    "id": 68,
    "name": "Shamli",
    "slug": "shamli",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/shamli.webp",
    "categories": [
      "popular",
      "historical"
    ],
    "aliases": [
      "shamli city"
    ],
    "keywords": [
      "hanuman tilla",
      "sugar mills",
      "western up trade",
      "krishna river basin",
      "agricultural heartland"
    ]
  },
  {
    "id": 69,
    "name": "Shravasti",
    "slug": "shravasti",
    "featured": false,
    "priority": 9,
    "image": "assets/images/districts/shravasti.webp",
    "categories": [
      "religious",
      "historical"
    ],
    "aliases": [
      "sahet mahet",
      "savatthi"
    ],
    "keywords": [
      "jetavana monastery",
      "anathapindika stupa",
      "angulimala stupa",
      "buddhist circuit",
      "jain temple sobhnath",
      "peace pagoda"
    ]
  },
  {
    "id": 70,
    "name": "Siddharthnagar",
    "slug": "siddharthnagar",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/siddharthnagar.webp",
    "categories": [
      "historical",
      "religious",
      "nature"
    ],
    "aliases": [
      "naugarh",
      "kapilvastu"
    ],
    "keywords": [
      "piprahwa",
      "kapilavastu",
      "lord buddha childhood",
      "kalanamak rice",
      "buddha rice",
      "nepal border",
      "stupas"
    ]
  },
  {
    "id": 71,
    "name": "Sitapur",
    "slug": "sitapur",
    "featured": true,
    "priority": 9,
    "image": "assets/images/districts/sitapur.webp",
    "categories": [
      "religious",
      "nature",
      "historical"
    ],
    "aliases": [
      "naimisharanya",
      "neemsar"
    ],
    "keywords": [
      "naimisharanya",
      "neemsar",
      "chakra teerth",
      "lalita devi temple",
      "vyas gaddi",
      "88000 rishis",
      "sugar",
      "soot mill"
    ]
  },
  {
    "id": 72,
    "name": "Sonbhadra",
    "slug": "sonbhadra",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/sonbhadra.webp",
    "categories": [
      "nature",
      "historical"
    ],
    "aliases": [
      "robertsganj",
      "energy capital"
    ],
    "keywords": [
      "energy capital of india",
      "vijaygarh fort",
      "salkhan fossil park",
      "rihand dam",
      "son river",
      "waterfalls",
      "tribal culture",
      "renukoot"
    ]
  },
  {
    "id": 73,
    "name": "Sultanpur",
    "slug": "sultanpur",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/sultanpur.webp",
    "categories": [
      "historical",
      "religious"
    ],
    "aliases": [
      "kushbhawanpur"
    ],
    "keywords": [
      "vijethua mahavir",
      "sitakund ghat",
      "parijat tree",
      "gomti river",
      "hanuman temple",
      "dhopaap dham"
    ]
  },
  {
    "id": 74,
    "name": "Unnao",
    "slug": "unnao",
    "featured": false,
    "priority": 8,
    "image": "assets/images/districts/unnao.webp",
    "categories": [
      "historical",
      "nature"
    ],
    "aliases": [
      "barna"
    ],
    "keywords": [
      "nawabganj bird sanctuary",
      "bithoor border",
      "chandrashekhar azad badarka",
      "leather",
      "ganga ghats",
      "pariyar"
    ]
  },
  {
    "id": 75,
    "name": "Varanasi",
    "slug": "varanasi",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/varanasi.webp",
    "categories": [
      "religious",
      "popular",
      "historical",
      "food"
    ],
    "aliases": [
      "kashi",
      "banaras",
      "benares",
      "mahadev nagari"
    ],
    "keywords": [
      "kashi vishwanath",
      "ganga aarti",
      "dashashwamedh",
      "assi ghat",
      "sarnath",
      "banarasi silk",
      "malaiyo",
      "paan",
      "subah e banaras"
    ]
  },
  {
    "id": 76,
    "name": "Vrindavan & Mathura",
    "slug": "vrindavan",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/vrindavan.webp",
    "categories": [
      "religious",
      "popular"
    ],
    "aliases": [
      "brindavan",
      "vrindavan dham"
    ],
    "keywords": [
      "banke bihari",
      "prem mandir",
      "iskcon",
      "nidhivan",
      "radharani",
      "radha vallabh",
      "yamuna ghats",
      "holi",
      "chandra sarovar"
    ]
  },
  {
    "id": 77,
    "name": "Noida",
    "slug": "noida",
    "featured": true,
    "priority": 10,
    "image": "assets/images/districts/noida.webp",
    "categories": [
      "modern",
      "popular"
    ],
    "aliases": [
      "new okhla",
      "noida city"
    ],
    "keywords": [
      "noida",
      "dlf mall of india",
      "film city",
      "metro",
      "it companies",
      "world trade tower",
      "okhla bird sanctuary",
      "sector 18"
    ]
  }
];

const DISTRICT_COORDINATES = {
  "agra": {
    "lat": 27.1767,
    "lng": 78.0081
  },
  "aligarh": {
    "lat": 27.8974,
    "lng": 78.088
  },
  "ambedkar-nagar": {
    "lat": 26.4429,
    "lng": 82.5445
  },
  "amethi": {
    "lat": 26.1558,
    "lng": 81.8159
  },
  "amroha": {
    "lat": 28.9044,
    "lng": 78.4684
  },
  "auraiya": {
    "lat": 26.4674,
    "lng": 79.516
  },
  "ayodhya": {
    "lat": 26.7922,
    "lng": 82.1998
  },
  "azamgarh": {
    "lat": 26.0738,
    "lng": 83.1859
  },
  "baghpat": {
    "lat": 28.945,
    "lng": 77.22
  },
  "bahraich": {
    "lat": 27.5705,
    "lng": 81.5977
  },
  "ballia": {
    "lat": 25.7585,
    "lng": 84.1483
  },
  "balrampur": {
    "lat": 27.4294,
    "lng": 82.1793
  },
  "banda": {
    "lat": 25.4754,
    "lng": 80.3347
  },
  "barabanki": {
    "lat": 26.9272,
    "lng": 81.1834
  },
  "bareilly": {
    "lat": 28.367,
    "lng": 79.4304
  },
  "basti": {
    "lat": 26.814,
    "lng": 82.763
  },
  "bhadohi": {
    "lat": 25.3944,
    "lng": 82.5707
  },
  "bijnor": {
    "lat": 29.3724,
    "lng": 78.1358
  },
  "budaun": {
    "lat": 28.0374,
    "lng": 79.1245
  },
  "bulandshahr": {
    "lat": 28.4069,
    "lng": 77.8498
  },
  "chandauli": {
    "lat": 25.2608,
    "lng": 83.2713
  },
  "chitrakoot": {
    "lat": 25.176,
    "lng": 80.8653
  },
  "deoria": {
    "lat": 26.5024,
    "lng": 83.7791
  },
  "etah": {
    "lat": 27.5574,
    "lng": 78.6653
  },
  "etawah": {
    "lat": 26.7769,
    "lng": 79.0238
  },
  "farrukhabad": {
    "lat": 27.3826,
    "lng": 79.5833
  },
  "fatehpur": {
    "lat": 25.9279,
    "lng": 80.8129
  },
  "firozabad": {
    "lat": 27.1591,
    "lng": 78.3957
  },
  "gautam-buddha-nagar": {
    "lat": 28.4744,
    "lng": 77.504
  },
  "ghaziabad": {
    "lat": 28.6692,
    "lng": 77.4538
  },
  "ghazipur": {
    "lat": 25.5864,
    "lng": 83.5786
  },
  "gonda": {
    "lat": 27.1332,
    "lng": 81.9619
  },
  "gorakhpur": {
    "lat": 26.7606,
    "lng": 83.3732
  },
  "hamirpur": {
    "lat": 25.9554,
    "lng": 80.1511
  },
  "hapur": {
    "lat": 28.7306,
    "lng": 77.7759
  },
  "hardoi": {
    "lat": 27.3989,
    "lng": 80.1315
  },
  "hathras": {
    "lat": 27.5969,
    "lng": 78.0519
  },
  "jalaun": {
    "lat": 26.0142,
    "lng": 79.3364
  },
  "jaunpur": {
    "lat": 25.7464,
    "lng": 82.6837
  },
  "jhansi": {
    "lat": 25.4484,
    "lng": 78.5685
  },
  "kannauj": {
    "lat": 27.0543,
    "lng": 79.9149
  },
  "kanpur-dehat": {
    "lat": 26.3475,
    "lng": 79.9497
  },
  "kanpur-nagar": {
    "lat": 26.4499,
    "lng": 80.3319
  },
  "kasganj": {
    "lat": 27.8083,
    "lng": 78.6453
  },
  "kaushambi": {
    "lat": 25.5342,
    "lng": 81.4086
  },
  "kushinagar": {
    "lat": 26.7408,
    "lng": 83.889
  },
  "lakhimpur-kheri": {
    "lat": 27.9472,
    "lng": 80.7788
  },
  "lalitpur": {
    "lat": 24.6896,
    "lng": 78.4124
  },
  "lucknow": {
    "lat": 26.8467,
    "lng": 80.9462
  },
  "maharajganj": {
    "lat": 27.1466,
    "lng": 83.5604
  },
  "mahoba": {
    "lat": 25.2917,
    "lng": 79.8732
  },
  "mainpuri": {
    "lat": 27.2289,
    "lng": 79.0264
  },
  "mathura": {
    "lat": 27.4924,
    "lng": 77.6737
  },
  "mau": {
    "lat": 25.9417,
    "lng": 83.5611
  },
  "meerut": {
    "lat": 28.9845,
    "lng": 77.7064
  },
  "mirzapur": {
    "lat": 25.146,
    "lng": 82.5684
  },
  "moradabad": {
    "lat": 28.8386,
    "lng": 78.7733
  },
  "muzaffarnagar": {
    "lat": 29.4727,
    "lng": 77.7085
  },
  "noida": {
    "lat": 28.5355,
    "lng": 77.391
  },
  "pilibhit": {
    "lat": 28.6312,
    "lng": 79.8037
  },
  "pratapgarh": {
    "lat": 25.8988,
    "lng": 81.9449
  },
  "prayagraj": {
    "lat": 25.4358,
    "lng": 81.8463
  },
  "raebareli": {
    "lat": 26.2298,
    "lng": 81.2424
  },
  "rampur": {
    "lat": 28.8154,
    "lng": 79.0253
  },
  "saharanpur": {
    "lat": 29.9679,
    "lng": 77.5452
  },
  "sambhal": {
    "lat": 28.5843,
    "lng": 78.5685
  },
  "sant-kabir-nagar": {
    "lat": 26.782,
    "lng": 83.0722
  },
  "shahjahanpur": {
    "lat": 27.8805,
    "lng": 79.9124
  },
  "shamli": {
    "lat": 29.4484,
    "lng": 77.3117
  },
  "shravasti": {
    "lat": 27.7051,
    "lng": 82.0232
  },
  "siddharthnagar": {
    "lat": 27.2965,
    "lng": 83.0963
  },
  "sitapur": {
    "lat": 27.5686,
    "lng": 80.6829
  },
  "sonbhadra": {
    "lat": 24.6853,
    "lng": 83.0674
  },
  "sultanpur": {
    "lat": 26.2648,
    "lng": 82.0727
  },
  "unnao": {
    "lat": 26.5471,
    "lng": 80.4878
  },
  "varanasi": {
    "lat": 25.3176,
    "lng": 82.9739
  },
  "vrindavan": {
    "lat": 27.5807,
    "lng": 77.7007
  }
};

const DISTRICT_SPECS = {
  "agra": {
    "hq": "Agra",
    "area": "4,027 sq km",
    "pop": "44 Lakhs",
    "season": "October to March"
  },
  "aligarh": {
    "hq": "Aligarh",
    "area": "3,700 sq km",
    "pop": "36 Lakhs",
    "season": "October to March"
  },
  "ambedkar-nagar": {
    "hq": "Akbarpur",
    "area": "2,350 sq km",
    "pop": "24 Lakhs",
    "season": "October to March"
  },
  "amethi": {
    "hq": "Gauriganj",
    "area": "2,329 sq km",
    "pop": "18 Lakhs",
    "season": "October to March"
  },
  "amroha": {
    "hq": "Amroha",
    "area": "2,249 sq km",
    "pop": "19 Lakhs",
    "season": "October to March"
  },
  "auraiya": {
    "hq": "Auraiya",
    "area": "2,016 sq km",
    "pop": "14 Lakhs",
    "season": "October to March"
  },
  "ayodhya": {
    "hq": "Ayodhya",
    "area": "2,522 sq km",
    "pop": "25 Lakhs",
    "season": "October to March"
  },
  "azamgarh": {
    "hq": "Azamgarh",
    "area": "4,054 sq km",
    "pop": "46 Lakhs",
    "season": "October to March"
  },
  "baghpat": {
    "hq": "Baghpat",
    "area": "1,321 sq km",
    "pop": "13 Lakhs",
    "season": "October to March"
  },
  "bahraich": {
    "hq": "Bahraich",
    "area": "4,696 sq km",
    "pop": "35 Lakhs",
    "season": "November to March"
  },
  "ballia": {
    "hq": "Ballia",
    "area": "2,981 sq km",
    "pop": "32 Lakhs",
    "season": "October to March"
  },
  "balrampur": {
    "hq": "Balrampur",
    "area": "3,349 sq km",
    "pop": "21 Lakhs",
    "season": "October to March"
  },
  "banda": {
    "hq": "Banda",
    "area": "4,408 sq km",
    "pop": "18 Lakhs",
    "season": "October to March"
  },
  "barabanki": {
    "hq": "Barabanki",
    "area": "4,402 sq km",
    "pop": "33 Lakhs",
    "season": "October to March"
  },
  "bareilly": {
    "hq": "Bareilly",
    "area": "4,120 sq km",
    "pop": "44 Lakhs",
    "season": "October to March"
  },
  "basti": {
    "hq": "Basti",
    "area": "2,688 sq km",
    "pop": "25 Lakhs",
    "season": "October to March"
  },
  "bhadohi": {
    "hq": "Gyanpur",
    "area": "1,015 sq km",
    "pop": "16 Lakhs",
    "season": "October to March"
  },
  "bijnor": {
    "hq": "Bijnor",
    "area": "4,561 sq km",
    "pop": "37 Lakhs",
    "season": "October to March"
  },
  "budaun": {
    "hq": "Budaun",
    "area": "4,234 sq km",
    "pop": "31 Lakhs",
    "season": "October to March"
  },
  "bulandshahr": {
    "hq": "Bulandshahr",
    "area": "4,512 sq km",
    "pop": "35 Lakhs",
    "season": "October to March"
  },
  "chandauli": {
    "hq": "Chandauli",
    "area": "2,541 sq km",
    "pop": "20 Lakhs",
    "season": "October to March"
  },
  "chitrakoot": {
    "hq": "Chitrakoot",
    "area": "3,216 sq km",
    "pop": "10 Lakhs",
    "season": "October to March"
  },
  "deoria": {
    "hq": "Deoria",
    "area": "2,540 sq km",
    "pop": "31 Lakhs",
    "season": "October to March"
  },
  "etah": {
    "hq": "Etah",
    "area": "2,456 sq km",
    "pop": "18 Lakhs",
    "season": "October to March"
  },
  "etawah": {
    "hq": "Etawah",
    "area": "2,311 sq km",
    "pop": "16 Lakhs",
    "season": "October to March"
  },
  "farrukhabad": {
    "hq": "Fatehgarh",
    "area": "2,183 sq km",
    "pop": "19 Lakhs",
    "season": "October to March"
  },
  "fatehpur": {
    "hq": "Fatehpur",
    "area": "4,152 sq km",
    "pop": "26 Lakhs",
    "season": "October to March"
  },
  "firozabad": {
    "hq": "Firozabad",
    "area": "2,407 sq km",
    "pop": "25 Lakhs",
    "season": "October to March"
  },
  "gautam-buddha-nagar": {
    "hq": "Greater Noida",
    "area": "1,442 sq km",
    "pop": "17 Lakhs",
    "season": "All Year / Oct-Mar"
  },
  "ghaziabad": {
    "hq": "Ghaziabad",
    "area": "1,179 sq km",
    "pop": "47 Lakhs",
    "season": "October to March"
  },
  "ghazipur": {
    "hq": "Ghazipur",
    "area": "3,377 sq km",
    "pop": "36 Lakhs",
    "season": "October to March"
  },
  "gonda": {
    "hq": "Gonda",
    "area": "3,424 sq km",
    "pop": "34 Lakhs",
    "season": "October to March"
  },
  "gorakhpur": {
    "hq": "Gorakhpur",
    "area": "3,321 sq km",
    "pop": "44 Lakhs",
    "season": "October to March"
  },
  "hamirpur": {
    "hq": "Hamirpur",
    "area": "4,021 sq km",
    "pop": "11 Lakhs",
    "season": "October to March"
  },
  "hapur": {
    "hq": "Hapur",
    "area": "1,124 sq km",
    "pop": "13 Lakhs",
    "season": "October to March"
  },
  "hardoi": {
    "hq": "Hardoi",
    "area": "5,986 sq km",
    "pop": "41 Lakhs",
    "season": "October to March"
  },
  "hathras": {
    "hq": "Hathras",
    "area": "1,840 sq km",
    "pop": "16 Lakhs",
    "season": "October to March"
  },
  "jalaun": {
    "hq": "Orai",
    "area": "4,565 sq km",
    "pop": "17 Lakhs",
    "season": "October to March"
  },
  "jaunpur": {
    "hq": "Jaunpur",
    "area": "4,038 sq km",
    "pop": "45 Lakhs",
    "season": "October to March"
  },
  "jhansi": {
    "hq": "Jhansi",
    "area": "5,024 sq km",
    "pop": "20 Lakhs",
    "season": "October to March"
  },
  "kannauj": {
    "hq": "Kannauj",
    "area": "2,093 sq km",
    "pop": "17 Lakhs",
    "season": "October to March"
  },
  "kanpur-dehat": {
    "hq": "Akbarpur-Mati",
    "area": "3,021 sq km",
    "pop": "18 Lakhs",
    "season": "October to March"
  },
  "kanpur-nagar": {
    "hq": "Kanpur",
    "area": "3,155 sq km",
    "pop": "46 Lakhs",
    "season": "October to March"
  },
  "kasganj": {
    "hq": "Kasganj",
    "area": "1,955 sq km",
    "pop": "14 Lakhs",
    "season": "October to March"
  },
  "kaushambi": {
    "hq": "Manjhanpur",
    "area": "1,779 sq km",
    "pop": "16 Lakhs",
    "season": "October to March"
  },
  "kushinagar": {
    "hq": "Padrauna",
    "area": "2,905 sq km",
    "pop": "36 Lakhs",
    "season": "October to March"
  },
  "lakhimpur-kheri": {
    "hq": "Lakhimpur",
    "area": "7,680 sq km",
    "pop": "40 Lakhs",
    "season": "November to April"
  },
  "lalitpur": {
    "hq": "Lalitpur",
    "area": "5,039 sq km",
    "pop": "12 Lakhs",
    "season": "October to March"
  },
  "lucknow": {
    "hq": "Lucknow",
    "area": "2,528 sq km",
    "pop": "46 Lakhs",
    "season": "October to March"
  },
  "maharajganj": {
    "hq": "Maharajganj",
    "area": "2,952 sq km",
    "pop": "27 Lakhs",
    "season": "October to March"
  },
  "mahoba": {
    "hq": "Mahoba",
    "area": "3,144 sq km",
    "pop": "9 Lakhs",
    "season": "October to March"
  },
  "mainpuri": {
    "hq": "Mainpuri",
    "area": "2,760 sq km",
    "pop": "19 Lakhs",
    "season": "October to March"
  },
  "mathura": {
    "hq": "Mathura",
    "area": "3,340 sq km",
    "pop": "25 Lakhs",
    "season": "September to March"
  },
  "mau": {
    "hq": "Mau",
    "area": "1,717 sq km",
    "pop": "22 Lakhs",
    "season": "October to March"
  },
  "meerut": {
    "hq": "Meerut",
    "area": "2,559 sq km",
    "pop": "34 Lakhs",
    "season": "October to March"
  },
  "mirzapur": {
    "hq": "Mirzapur",
    "area": "4,521 sq km",
    "pop": "25 Lakhs",
    "season": "October to March"
  },
  "moradabad": {
    "hq": "Moradabad",
    "area": "3,718 sq km",
    "pop": "48 Lakhs",
    "season": "October to March"
  },
  "muzaffarnagar": {
    "hq": "Muzaffarnagar",
    "area": "4,008 sq km",
    "pop": "41 Lakhs",
    "season": "October to March"
  },
  "noida": {
    "hq": "Noida",
    "area": "203 sq km",
    "pop": "10 Lakhs",
    "season": "All Year"
  },
  "pilibhit": {
    "hq": "Pilibhit",
    "area": "3,686 sq km",
    "pop": "20 Lakhs",
    "season": "November to May"
  },
  "pratapgarh": {
    "hq": "Pratapgarh",
    "area": "3,717 sq km",
    "pop": "32 Lakhs",
    "season": "October to March"
  },
  "prayagraj": {
    "hq": "Prayagraj",
    "area": "5,482 sq km",
    "pop": "60 Lakhs",
    "season": "October to March"
  },
  "raebareli": {
    "hq": "Raebareli",
    "area": "4,609 sq km",
    "pop": "34 Lakhs",
    "season": "October to March"
  },
  "rampur": {
    "hq": "Rampur",
    "area": "2,367 sq km",
    "pop": "23 Lakhs",
    "season": "October to March"
  },
  "saharanpur": {
    "hq": "Saharanpur",
    "area": "3,689 sq km",
    "pop": "35 Lakhs",
    "season": "October to March"
  },
  "sambhal": {
    "hq": "Sambhal",
    "area": "2,453 sq km",
    "pop": "22 Lakhs",
    "season": "October to March"
  },
  "sant-kabir-nagar": {
    "hq": "Khalilabad",
    "area": "1,646 sq km",
    "pop": "17 Lakhs",
    "season": "October to March"
  },
  "shahjahanpur": {
    "hq": "Shahjahanpur",
    "area": "4,575 sq km",
    "pop": "30 Lakhs",
    "season": "October to March"
  },
  "shamli": {
    "hq": "Shamli",
    "area": "1,063 sq km",
    "pop": "13 Lakhs",
    "season": "October to March"
  },
  "shravasti": {
    "hq": "Bhinga",
    "area": "1,640 sq km",
    "pop": "11 Lakhs",
    "season": "October to March"
  },
  "siddharthnagar": {
    "hq": "Naugarh",
    "area": "2,895 sq km",
    "pop": "26 Lakhs",
    "season": "October to March"
  },
  "sitapur": {
    "hq": "Sitapur",
    "area": "5,743 sq km",
    "pop": "45 Lakhs",
    "season": "October to March"
  },
  "sonbhadra": {
    "hq": "Robertsganj",
    "area": "6,905 sq km",
    "pop": "19 Lakhs",
    "season": "October to March"
  },
  "sultanpur": {
    "hq": "Sultanpur",
    "area": "4,436 sq km",
    "pop": "38 Lakhs",
    "season": "October to March"
  },
  "unnao": {
    "hq": "Unnao",
    "area": "4,558 sq km",
    "pop": "31 Lakhs",
    "season": "October to March"
  },
  "varanasi": {
    "hq": "Varanasi",
    "area": "1,535 sq km",
    "pop": "37 Lakhs",
    "season": "October to March"
  },
  "vrindavan": {
    "hq": "Vrindavan / Mathura",
    "area": "120 sq km",
    "pop": "15 Lakhs",
    "season": "All Year / Oct-Mar"
  }
};

const DISTRICT_ALIASES = {
  "allahabad": "prayagraj",
  "sangam-nagari": "prayagraj",
  "triveni": "prayagraj",
  "faizabad": "ayodhya",
  "saket": "ayodhya",
  "ram-nagari": "ayodhya",
  "kashi": "varanasi",
  "banaras": "varanasi",
  "benares": "varanasi",
  "kanpur": "kanpur-nagar",
  "cawnpore": "kanpur-nagar",
  "kol": "aligarh",
  "tala-nagari": "aligarh",
  "brindavan": "vrindavan",
  "orai": "jalaun",
  "naugarh": "siddharthnagar",
  "khalilabad": "sant-kabir-nagar",
  "robertsganj": "sonbhadra",
  "gauriganj": "amethi",
  "akbarpur": "ambedkar-nagar",
  "barna": "unnao",
  "peetal-nagari": "moradabad",
  "suhag-nagari": "firozabad",
  "attar-nagari": "kannauj",
  "perfume-capital": "kannauj",
  "naimisharanya": "sitapur",
  "neemsar": "sitapur",
  "vindhyachal": "mirzapur",
  "chunar": "mirzapur",
  "kalinjar": "banda",
  "dudhwa": "lakhimpur-kheri",
  "kheri": "lakhimpur-kheri",
  "padrauna": "kushinagar",
  "kushinara": "kushinagar",
  "greater-noida": "gautam-buddha-nagar",
  "gb-nagar": "gautam-buddha-nagar",
  "maghar": "sant-kabir-nagar",
  "kapilvastu": "siddharthnagar",
  "soron": "kasganj",
  "shukratal": "muzaffarnagar"
};

const RICH_DISTRICT_DATABASE = {
  "varanasi": {
    "basic": {
      "name": "Varanasi",
      "tagline": "The Spiritual Capital of India and City of Light",
      "population": "37 Lakhs",
      "area": "1,535 sq km",
      "headquarters": "Varanasi",
      "bestSeason": "October to March",
      "famousFor": "Kashi Vishwanath, Ganga Aarti, Ghats, Banarasi Silk, Sarnath"
    },
    "location": {
      "lat": 25.3176,
      "lng": 82.9739,
      "zoom": 12
    },
    "ai": {
      "score": 98,
      "overview": "Varanasi, or Kashi, is one of the world's oldest continuously inhabited cities. Stretching along the sacred crescent curve of the Ganga, it is the beating heart of Hindu philosophy, music, and eternal traditions.",
      "perfectFor": [
        "Spiritual Seekers",
        "Photographers",
        "Culture Enthusiasts",
        "Scholars"
      ],
      "travelStyle": "Spiritual, transformative, and mystical",
      "budgetRange": "₹2,500 – ₹7,500 / day",
      "recommendedStay": "2 – 4 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Inhabited since the 11th century BCE, celebrated by Mark Twain as older than history, tradition, and legend.",
      "food": "Famous for Banarasi Paan, Kachori Jalebi, Malaiyo in winters, Baati Chokha, and creamy Tamatar Chaat.",
      "nature": "The timeless sacred Ganga River with dramatic sunrise boat rides along 84 grand historic ghats.",
      "spiritual": "Kashi Vishwanath Jyotirlinga, Sankat Mochan, world-famous Dashashwamedh Ganga Aarti, and Sarnath Deer Park."
    },
    "travelMeter": {
      "Spirituality": 100,
      "Heritage": 98,
      "Cuisine": 92,
      "Photography": 99,
      "Shopping": 88
    },
    "moods": [
      "Mystic Ganga Sunrise",
      "Mesmerizing Evening Aarti",
      "Ancient Narrow Alleys",
      "Silk Weaving Legacy"
    ],
    "places": [
      {
        "name": "Kashi Vishwanath Temple",
        "description": "One of the twelve sacred Jyotirlingas of Lord Shiva, crowned with golden spire and newly renovated grand corridor to the Ganga.",
        "rating": "5.0",
        "bestTime": "Mangala Aarti (3:00 AM) or Evening",
        "entryFee": "Free (Special Darshan Available)",
        "visitDuration": "2.5 Hours",
        "lat": 25.3109,
        "lng": 83.0107
      },
      {
        "name": "Dashashwamedh Ghat",
        "description": "The most spectacular and oldest ghat on the Ganga, venue of the world-renowned evening Maha Aarti ceremony.",
        "rating": "4.9",
        "bestTime": "Sunset (6:00 PM)",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 25.3072,
        "lng": 83.0104
      },
      {
        "name": "Sarnath Deer Park & Dhamek Stupa",
        "description": "Sacred site where Gautam Buddha preached his first sermon, featuring ancient monasteries and the Ashoka Pillar.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "₹25",
        "visitDuration": "3 Hours",
        "lat": 25.3811,
        "lng": 83.0227
      },
      {
        "name": "Assi Ghat",
        "description": "Southernmost ghat vibrant with 'Subah-e-Banaras' morning yoga, classical ragas, and evening cultural performances.",
        "rating": "4.8",
        "bestTime": "Sunrise (5:30 AM)",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 25.2891,
        "lng": 83.0069
      }
    ],
    "foods": [
      {
        "name": "Banarasi Kachori & Jalebi",
        "description": "Piping-hot spiced hing kachoris served with aloo subzi and freshly fried crisp jalebis.",
        "bestSpot": "Ram Bhandar, Thatheri Bazaar"
      },
      {
        "name": "Tamatar Chaat & Palak Chaat",
        "description": "Sizzling spiced tomato mash infused with hing and lemon, served in clay earthen cups.",
        "bestSpot": "Kashi Chaat Bhandar, Godowlia"
      },
      {
        "name": "Malaiyo (Winter Special)",
        "description": "Frothy, cloud-like flavored milk foam flavored with saffron, pistachios, and almonds.",
        "bestSpot": "Neelkanth & Chaukhamba"
      }
    ],
    "festivals": [
      {
        "name": "Dev Deepawali",
        "description": "All 84 ghats light up with more than 1 million earthen lamps under the full moon night.",
        "time": "Kartik Purnima (November)"
      },
      {
        "name": "Maha Shivratri",
        "description": "Grand festive carnival and processions celebrating Lord Shiva through Kashi's historic lanes.",
        "time": "February/March"
      }
    ],
    "hiddenGems": [
      {
        "name": "Chet Singh Fort Ghat",
        "description": "Spectacular 18th-century fortified stone palace built right on the river, witness to fierce battles with Warren Hastings."
      },
      {
        "name": "Kriti Gallery & Kabir Chaura",
        "description": "Cradle of Indian classical music gharanas and poet-saint Kabir's spiritual hermitage."
      }
    ],
    "nearby": [
      {
        "name": "Prayagraj",
        "slug": "prayagraj",
        "distance": "125 km (2.5 hrs)"
      },
      {
        "name": "Mirzapur",
        "slug": "mirzapur",
        "distance": "60 km (1.5 hrs)"
      }
    ]
  },
  "lucknow": {
    "basic": {
      "name": "Lucknow",
      "tagline": "The City of Nawabs, Adab, and Architectural Elegance",
      "population": "46 Lakhs",
      "area": "2,528 sq km",
      "headquarters": "Lucknow",
      "bestSeason": "October to March",
      "famousFor": "Bara Imambara, Rumi Darwaza, Tunday Kebabs, Chikankari, Awadhi Tehzeeb"
    },
    "location": {
      "lat": 26.8467,
      "lng": 80.9462,
      "zoom": 12
    },
    "ai": {
      "score": 97,
      "overview": "The regal capital of Uttar Pradesh, Lucknow represents the golden epoch of Awadhi art, architectural brilliance, soulful poetry, world-famous kebabs, and courteous 'pehle aap' manners.",
      "perfectFor": [
        "Foodies",
        "Architecture Aficionados",
        "History Lovers",
        "Textile Seekers"
      ],
      "travelStyle": "Regal, culinary, and culturally refined",
      "budgetRange": "₹3,000 – ₹9,000 / day",
      "recommendedStay": "2 – 4 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Seat of the Nawabs of Awadh from the 18th century, epicentre of the 1857 First War of Independence at the British Residency.",
      "food": "The culinary crown of India: Galouti Kebabs, Lucknowi Dum Biryani, Sheermal, Nihari Kulcha, and Prakash Kulfi.",
      "nature": "Picturesque Gomti Riverfront, sprawling Janeshwar Mishra Park, and tranquil botanical gardens.",
      "spiritual": "Bara & Chhota Imambaras, historical Jama Masjid, ancient Mankameshwar Mandir, and Christ Church."
    },
    "travelMeter": {
      "Heritage": 96,
      "Cuisine": 100,
      "Architecture": 97,
      "Shopping": 95,
      "Culture": 98
    },
    "moods": [
      "Nawabi Elegance",
      "Mouthwatering Kebab Feasts",
      "Chikankari Handcrafts",
      "Gomti Sunset Walks"
    ],
    "places": [
      {
        "name": "Bara Imambara & Bhulbhulaiya",
        "description": "Magnificent unsupported arched hall built by Nawab Asaf-ud-Daula with an intricate 3D labyrinth maze atop.",
        "rating": "4.9",
        "bestTime": "Morning (9:30 AM)",
        "entryFee": "₹50 (Indian) / ₹500 (Foreigner)",
        "visitDuration": "3 Hours",
        "lat": 26.869,
        "lng": 80.9129
      },
      {
        "name": "Rumi Darwaza",
        "description": "Iconic 60-foot Turkish Gate standing as the historic symbol of Lucknow with intricate Mughal-Awadhi carvings.",
        "rating": "4.8",
        "bestTime": "Sunset & Night Lighting",
        "entryFee": "Free",
        "visitDuration": "1 Hour",
        "lat": 26.8718,
        "lng": 80.9113
      },
      {
        "name": "The British Residency",
        "description": "Historic cluster of ruins surrounded by lawns, preserving scarred walls and cannons from the 1857 siege.",
        "rating": "4.7",
        "bestTime": "Afternoon",
        "entryFee": "₹25",
        "visitDuration": "2 Hours",
        "lat": 26.8617,
        "lng": 80.9272
      },
      {
        "name": "Chhota Imambara",
        "description": "Dazzling 'Palace of Lights' adorned with Belgian glass chandeliers, gold calligraphy, and a silver throne.",
        "rating": "4.8",
        "bestTime": "Afternoon / Evening",
        "entryFee": "Included in Combo Ticket",
        "visitDuration": "1.5 Hours",
        "lat": 26.8744,
        "lng": 80.9048
      }
    ],
    "foods": [
      {
        "name": "Tunday Galouti Kebab",
        "description": "Melt-in-mouth minced meat kebabs infused with 160 secret spices, paired with Mughlai Paratha.",
        "bestSpot": "Tunday Kababi, Chowk & Aminabad"
      },
      {
        "name": "Lucknowi Dum Biryani",
        "description": "Fragrant basmati rice gently cooked on dum with tender marinated meat, saffron, and kewra water.",
        "bestSpot": "Idris Biryani, Chowk / Dastarkhwan"
      },
      {
        "name": "Prakash Ki Kulfi Falooda",
        "description": "Rich, dense rabri kulfi laced with saffron and falooda noodles in the lanes of Aminabad.",
        "bestSpot": "Prakash Kulfi, Aminabad"
      }
    ],
    "festivals": [
      {
        "name": "Lucknow Mahotsav",
        "description": "A 10-day grand cultural celebration featuring Ghazal nights, Kathak dances, and authentic Awadhi crafts.",
        "time": "November/December"
      },
      {
        "name": "Bada Mangal",
        "description": "Unique Lucknow tradition where temples and residents distribute bhandara feasts across the city in Jyeshtha month.",
        "time": "May/June"
      }
    ],
    "hiddenGems": [
      {
        "name": "La Martiniere College",
        "description": "Stunning 18th-century palatial Anglo-Indian school building designed by French adventurer Claude Martin."
      },
      {
        "name": "Picture Gallery & Clock Tower",
        "description": "Tallest clock tower in India overlooking the historic pond and royal Awadhi portraits."
      }
    ],
    "nearby": [
      {
        "name": "Ayodhya",
        "slug": "ayodhya",
        "distance": "135 km (2.5 hrs)"
      },
      {
        "name": "Kanpur",
        "slug": "kanpur-nagar",
        "distance": "80 km (1.5 hrs)"
      }
    ]
  },
  "agra": {
    "basic": {
      "name": "Agra",
      "tagline": "The City of the Taj Mahal and Mughal Splendour",
      "population": "44 Lakhs",
      "area": "4,027 sq km",
      "headquarters": "Agra",
      "bestSeason": "October to March",
      "famousFor": "Taj Mahal, Agra Fort, Fatehpur Sikri, Agra Petha, Marble Inlay"
    },
    "location": {
      "lat": 27.1767,
      "lng": 78.0081,
      "zoom": 12
    },
    "ai": {
      "score": 99,
      "overview": "Home to three UNESCO World Heritage Sites including the Taj Mahal, Agra was the imperial capital of the Mughal Empire and showcases the pinnacle of Indo-Islamic marble artistry.",
      "perfectFor": [
        "Couples",
        "Global Travelers",
        "History Buffs",
        "Architects"
      ],
      "travelStyle": "Monumental, romantic, and awe-inspiring",
      "budgetRange": "₹3,500 – ₹10,000 / day",
      "recommendedStay": "1 – 3 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "The supreme capital of Akbar, Jahangir, and Shah Jahan, adorned with grand mausoleums and riverside pleasure gardens.",
      "food": "Famous Agra Petha in over 30 flavors, spicy Bedai with Aloo Subzi, Dalmoth, and Mughlai curries.",
      "nature": "Mehtab Bagh sunset gardens overlooking the white dome of the Taj Mahal across the Yamuna River.",
      "spiritual": "Jama Masjid Agra, ancient Bateshwar temple complex on the Yamuna bend, and Guru Ka Taal."
    },
    "travelMeter": {
      "Heritage": 100,
      "Architecture": 100,
      "Photography": 98,
      "Cuisine": 88,
      "Shopping": 86
    },
    "moods": [
      "Timeless Romance",
      "Imperial Grandeur",
      "Marble Artistry",
      "Sunset Wonder"
    ],
    "places": [
      {
        "name": "Taj Mahal",
        "description": "UNESCO World Heritage Wonder of the World and white marble mausoleum commissioned in 1632 by Shah Jahan.",
        "rating": "5.0",
        "bestTime": "Sunrise (6:00 AM)",
        "entryFee": "₹50 (Indian) / ₹1100 (Foreigner)",
        "visitDuration": "3 Hours",
        "lat": 27.1751,
        "lng": 78.0421
      },
      {
        "name": "Agra Fort",
        "description": "Vast red sandstone fortress residence of Mughal emperors, containing Jahangir Palace, Khas Mahal, and Sheesh Mahal.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "₹50",
        "visitDuration": "2.5 Hours",
        "lat": 27.1795,
        "lng": 78.0211
      },
      {
        "name": "Fatehpur Sikri",
        "description": "Akbar's magnificent red sandstone imperial city featuring Buland Darwaza and the sacred Salim Chishti dargah.",
        "rating": "4.7",
        "bestTime": "Afternoon",
        "entryFee": "₹50",
        "visitDuration": "3 Hours",
        "lat": 27.0945,
        "lng": 77.6679
      },
      {
        "name": "Mehtab Bagh",
        "description": "Moonlight garden complex aligned opposite the Taj Mahal across Yamuna, ideal for sunset photography.",
        "rating": "4.7",
        "bestTime": "Sunset (5:00 PM)",
        "entryFee": "₹25",
        "visitDuration": "1.5 Hours",
        "lat": 27.18,
        "lng": 78.042
      }
    ],
    "foods": [
      {
        "name": "Agra Petha",
        "description": "Translucent candy made from ash gourd in flavors like Kesar, Paan, Angoori, and Sandalwood.",
        "bestSpot": "Panchi Petha, Sadar Bazaar"
      },
      {
        "name": "Bedai & Jalebi",
        "description": "Crispy fried puris stuffed with spiced urad dal served with hot potato curry and fresh jalebis.",
        "bestSpot": "Deviram Sweets, Pratap Pura"
      }
    ],
    "festivals": [
      {
        "name": "Taj Mahotsav",
        "description": "10-day carnival at Shilpgram near the Taj Mahal celebrating arts, crafts, classical dance, and food.",
        "time": "February"
      }
    ],
    "hiddenGems": [
      {
        "name": "Chini Ka Rauza",
        "description": "Lesser-visited funerary monument with dazzling Persian glazed blue tile work on the riverbank."
      }
    ],
    "nearby": [
      {
        "name": "Mathura",
        "slug": "mathura",
        "distance": "55 km (1 hr)"
      },
      {
        "name": "Fatehpur Sikri",
        "slug": "agra",
        "distance": "38 km (45 mins)"
      }
    ]
  },
  "ayodhya": {
    "basic": {
      "name": "Ayodhya",
      "tagline": "The Sacred Birthplace of Shri Ram and City of Sarayu",
      "population": "25 Lakhs",
      "area": "2,522 sq km",
      "headquarters": "Ayodhya",
      "bestSeason": "October to March",
      "famousFor": "Shri Ram Janmabhoomi Mandir, Sarayu Ghats, Hanuman Garhi, Deepotsav, Kanak Bhavan"
    },
    "location": {
      "lat": 26.7922,
      "lng": 82.1998,
      "zoom": 12
    },
    "ai": {
      "score": 98,
      "overview": "One of the seven sacred Mokshadayini Puris of Hinduism, Ayodhya on the holy Sarayu River is the celebrated setting of the Ramayana and the sacred birthplace of Lord Rama.",
      "perfectFor": [
        "Pilgrims",
        "Spiritual Seekers",
        "Families",
        "Culture Enthusiasts"
      ],
      "travelStyle": "Devotional, historic, and sacred",
      "budgetRange": "₹2,000 – ₹6,000 / day",
      "recommendedStay": "1 – 3 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Ancient capital of the Kosala Kingdom and Ikshvaku dynasty, home to legendary kings like Harishchandra, Dasharatha, and Rama.",
      "food": "Traditional sattvic Awadhi thalis, Rabdi, Khurchan, Ayodhya Pedas, and refreshing spiced buttermilk.",
      "nature": "The serene holy waters of Sarayu River with boat rides, sunset views, and ghat-side gardens.",
      "spiritual": "Shri Ram Janmabhoomi Mandir, Hanuman Garhi, and the grand evening Sarayu Maha Aarti."
    },
    "travelMeter": {
      "Spirituality": 100,
      "Heritage": 96,
      "Architecture": 95,
      "Culture": 94,
      "Cuisine": 85
    },
    "moods": [
      "Sacred Peace",
      "Chants & Devotion",
      "Sarayu Breeze",
      "Ancient Glory"
    ],
    "places": [
      {
        "name": "Shri Ram Janmabhoomi Mandir",
        "description": "Magnificent newly consecrated pink sandstone temple complex built in traditional Nagara style.",
        "rating": "5.0",
        "bestTime": "Morning / Evening Aarti",
        "entryFee": "Free",
        "visitDuration": "3 Hours",
        "lat": 26.7956,
        "lng": 82.1943
      },
      {
        "name": "Hanuman Garhi",
        "description": "10th-century fortress temple dedicated to Lord Hanuman perched atop 76 steep stone steps.",
        "rating": "4.9",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 26.7938,
        "lng": 82.2031
      },
      {
        "name": "Ram Ki Paidi & Naya Ghat",
        "description": "A picturesque series of bathing ghats on the banks of Sarayu River illuminated with dramatic laser shows.",
        "rating": "4.8",
        "bestTime": "Sunset & Night",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 26.8021,
        "lng": 82.2064
      },
      {
        "name": "Kanak Bhavan",
        "description": "Ornate palace temple gifted to Goddess Sita by Kaikeyi, featuring gold-crowned deities and murals.",
        "rating": "4.8",
        "bestTime": "Morning / Evening",
        "entryFee": "Free",
        "visitDuration": "1 Hour",
        "lat": 26.799,
        "lng": 82.201
      }
    ],
    "foods": [
      {
        "name": "Ayodhya Peda & Rabdi",
        "description": "Mawa sweets prepared slowly in iron kadhais, fragrant with cardamom.",
        "bestSpot": "Hanuman Garhi Market"
      },
      {
        "name": "Sattvic Awadhi Thali",
        "description": "Pure vegetarian feast prepared without onion or garlic with regional lentils and puris.",
        "bestSpot": "Sri Ram Mess & Temple Bhojanalayas"
      }
    ],
    "festivals": [
      {
        "name": "Ayodhya Deepotsav",
        "description": "Guinness World Record lightings with over 2.5 million earthen lamps across Ram Ki Paidi on Diwali eve.",
        "time": "Diwali (October/November)"
      },
      {
        "name": "Ram Navami",
        "description": "Chaitra celebrations marking the birth of Lord Rama with sacred dips in Sarayu and temple pujas.",
        "time": "March/April"
      }
    ],
    "hiddenGems": [
      {
        "name": "Guptar Ghat",
        "description": "Peaceful sacred riverbank where Lord Rama is believed to have taken Jal Samadhi into Vaikuntha."
      },
      {
        "name": "Surya Kund",
        "description": "Ancient solar pond built by King Darshana with newly restored light and sound shows."
      }
    ],
    "nearby": [
      {
        "name": "Lucknow",
        "slug": "lucknow",
        "distance": "135 km (2.5 hrs)"
      },
      {
        "name": "Varanasi",
        "slug": "varanasi",
        "distance": "215 km (4 hrs)"
      }
    ]
  },
  "prayagraj": {
    "basic": {
      "name": "Prayagraj",
      "tagline": "The King of Pilgrimages at the Sacred Triveni Sangam",
      "population": "60 Lakhs",
      "area": "5,482 sq km",
      "headquarters": "Prayagraj",
      "bestSeason": "October to March",
      "famousFor": "Triveni Sangam, Kumbh Mela, Anand Bhavan, Allahabad Fort, Khusro Bagh, Allahabadi Guava"
    },
    "location": {
      "lat": 25.4358,
      "lng": 81.8463,
      "zoom": 12
    },
    "ai": {
      "score": 97,
      "overview": "Known as Teerthraj (King of all Pilgrimages), Prayagraj is the sacred confluence of the Ganga, Yamuna, and mythical Saraswati rivers. Host of the massive Maha Kumbh Mela and cradle of India's freedom struggle.",
      "perfectFor": [
        "Pilgrims",
        "History Scholars",
        "Spiritual Seekers",
        "Families"
      ],
      "travelStyle": "Spiritual, literary, and historic",
      "budgetRange": "₹2,500 – ₹7,000 / day",
      "recommendedStay": "2 – 3 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Ancient Prayag mentioned in the Vedas, enhanced by Akbar's majestic fort, and the headquarters of the Indian National Congress at Swaraj Bhavan.",
      "food": "Famous for Allahabadi Surkha Guava, hot Kachori-Sabzi, spicy Dehati Rasgulla, and street chaats at Civil Lines.",
      "nature": "The magnificent meeting of two distinct river currents (muddy Ganga and blue Yamuna) at Sangam.",
      "spiritual": "Triveni Sangam holy bath, Bade Hanuman Ji (Reclining Hanuman), Alopi Devi Shaktipeeth, and Akshayavat."
    },
    "travelMeter": {
      "Spirituality": 100,
      "Heritage": 96,
      "Culture": 95,
      "Photography": 94,
      "Cuisine": 86
    },
    "moods": [
      "Sacred Confluence",
      "Kumbh Chants",
      "Freedom Struggle Heritage",
      "Riverboat Journey"
    ],
    "places": [
      {
        "name": "Triveni Sangam",
        "description": "Sacred confluence of rivers Ganga, Yamuna, and Saraswati, where taking a holy dip is considered liberating.",
        "rating": "5.0",
        "bestTime": "Sunrise (6:00 AM)",
        "entryFee": "Free (Boat: ₹100-₹300)",
        "visitDuration": "2.5 Hours",
        "lat": 25.4262,
        "lng": 81.8885
      },
      {
        "name": "Anand Bhavan & Swaraj Bhavan",
        "description": "Ancestral home of the Nehru family, now a museum chronicling India's independence movement.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "₹70",
        "visitDuration": "2 Hours",
        "lat": 25.4608,
        "lng": 81.8606
      },
      {
        "name": "Allahabad Fort & Patalpuri Temple",
        "description": "Akbar's massive 1583 fort containing the subterranean Patalpuri Temple and the immortal Akshayavat tree.",
        "rating": "4.7",
        "bestTime": "Afternoon",
        "entryFee": "Free (Permit Area)",
        "visitDuration": "1.5 Hours",
        "lat": 25.4285,
        "lng": 81.8797
      },
      {
        "name": "Khusro Bagh",
        "description": "Walled Mughal garden complex housing the ornate sandstone tombs of Prince Khusro and Sultan Nisar Begum.",
        "rating": "4.6",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 25.4517,
        "lng": 81.8252
      }
    ],
    "foods": [
      {
        "name": "Allahabadi Kachori-Sabzi & Jalebi",
        "description": "Flaky crisp kachoris paired with spicy potato and pumpkin curry, finished with fresh jalebis.",
        "bestSpot": "Netram Moolchand, Katra"
      },
      {
        "name": "Allahabadi Surkha (Red Guavas)",
        "description": "World-renowned sweet red-fleshed guavas with aromatic fragrance.",
        "bestSpot": "Chowk & Civil Lines Markets"
      }
    ],
    "festivals": [
      {
        "name": "Maha Kumbh & Magh Mela",
        "description": "The largest human gathering on Earth with millions of sadhus, saints, and pilgrims taking royal Shahi Snan.",
        "time": "January/February (Annual Magh Mela, 12-yr Maha Kumbh)"
      }
    ],
    "hiddenGems": [
      {
        "name": "Shringverpur Dham",
        "description": "Ancient archaeological riverbank where Lord Rama crossed the Ganga with Nishadraj Kewat."
      },
      {
        "name": "All Saints Cathedral (Patthar Girja)",
        "description": "Magnificent 19th-century Gothic Revival cathedral known for brilliant stained glass windows."
      }
    ],
    "nearby": [
      {
        "name": "Varanasi",
        "slug": "varanasi",
        "distance": "125 km (2.5 hrs)"
      },
      {
        "name": "Chitrakoot",
        "slug": "chitrakoot",
        "distance": "130 km (3 hrs)"
      }
    ]
  },
  "mathura": {
    "basic": {
      "name": "Mathura",
      "tagline": "The Divine Birthplace of Lord Krishna and Soul of Braj",
      "population": "25 Lakhs",
      "area": "3,340 sq km",
      "headquarters": "Mathura",
      "bestSeason": "September to March",
      "famousFor": "Shri Krishna Janmabhoomi, Dwarkadhish Temple, Vishram Ghat, Mathura Peda, Braj Holi"
    },
    "location": {
      "lat": 27.4924,
      "lng": 77.6737,
      "zoom": 12
    },
    "ai": {
      "score": 97,
      "overview": "Mathura, the birthplace of Lord Krishna, is the spiritual epicenter of the Braj region. Adorned with sacred Yamuna ghats, ancient temples, and rich traditions of Bhakti literature.",
      "perfectFor": [
        "Pilgrims",
        "Devotees",
        "Cultural Enthusiasts",
        "Families"
      ],
      "travelStyle": "Devotional, celebratory, and vibrant",
      "budgetRange": "₹2,000 – ₹6,000 / day",
      "recommendedStay": "2 – 3 Days",
      "bestTravelMonth": "September to March"
    },
    "highlights": {
      "history": "Ancient Mahajanapada capital of Surasena, cradle of the Kushan school of Buddhist and Hindu sculpture.",
      "food": "World-famous Mathura Peda, Hing Kachori, Bedmi Poori, Malpua, and thick sweetened Rabri Lassi.",
      "nature": "The sacred Yamuna Riverfront with sunset boat rides and temple bells resonating along 25 ghats.",
      "spiritual": "Shri Krishna Janmabhoomi, Dwarkadhish Mandir, Vishram Ghat evening Yamuna Aarti, and Gita Mandir."
    },
    "travelMeter": {
      "Spirituality": 100,
      "Heritage": 95,
      "Culture": 96,
      "Cuisine": 90,
      "Photography": 91
    },
    "moods": [
      "Krishna Devotion",
      "Yamuna Evening Aarti",
      "Scent of Cardamom Pedas",
      "Festive Colors of Braj"
    ],
    "places": [
      {
        "name": "Shri Krishna Janmabhoomi Complex",
        "description": "Sacred temple complex housing the subterranean prison cell (Garbha Griha) where Lord Krishna was born.",
        "rating": "5.0",
        "bestTime": "Morning Darshan (6:30 AM)",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 27.505,
        "lng": 77.67
      },
      {
        "name": "Dwarkadhish Temple",
        "description": "Vibrant Rajasthani-style temple near the Yamuna ghats, famous for swinging Hindola festivals in monsoon.",
        "rating": "4.8",
        "bestTime": "Morning & Aarti",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 27.5054,
        "lng": 77.6835
      },
      {
        "name": "Vishram Ghat",
        "description": "The central and most sacred ghat of Mathura where Lord Krishna rested after slaying Kansa.",
        "rating": "4.8",
        "bestTime": "Yamuna Aarti (6:30 PM)",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 27.5036,
        "lng": 77.6841
      },
      {
        "name": "Mathura Government Museum",
        "description": "Houses the world's finest collection of red sandstone Buddhist and Brahmanical sculptures from the Kushan era.",
        "rating": "4.6",
        "bestTime": "Morning",
        "entryFee": "₹20",
        "visitDuration": "2 Hours",
        "lat": 27.4901,
        "lng": 77.6809
      }
    ],
    "foods": [
      {
        "name": "Mathura Peda",
        "description": "Golden-brown caramelized mawa peda dusted with sugar and cardamom, prepared fresh in brass vats.",
        "bestSpot": "Brijwasi Mithai Wala, Holi Gate"
      },
      {
        "name": "Dubki Wale Aloo & Bedmi Poori",
        "description": "Crisp urad dal puris served with spicy, watery potato curry and sweet jalebis.",
        "bestSpot": "Shankar Mithaiwala"
      }
    ],
    "festivals": [
      {
        "name": "Janmashtami",
        "description": "Grand midnight celebrations of Lord Krishna's birth with bhajans, butter offerings, and abhishek.",
        "time": "August/September"
      },
      {
        "name": "Braj Ki Holi & Lathmar Holi",
        "description": "Legendary multi-day festival of colors, flowers, and folk traditions across Braj.",
        "time": "February/March"
      }
    ],
    "hiddenGems": [
      {
        "name": "Kans Qila",
        "description": "Ancient ruined fort overlooking the Yamuna said to belong to King Kansa, renovated by Raja Man Singh."
      },
      {
        "name": "Potara Kund",
        "description": "Sacred pond where baby Krishna's baby clothes were washed by Mata Devaki."
      }
    ],
    "nearby": [
      {
        "name": "Vrindavan",
        "slug": "vrindavan",
        "distance": "12 km (20 mins)"
      },
      {
        "name": "Agra",
        "slug": "agra",
        "distance": "55 km (1 hr)"
      }
    ]
  },
  "vrindavan": {
    "basic": {
      "name": "Vrindavan",
      "tagline": "The Eternal Abode of Radha Krishna and Temple Wonderland",
      "population": "15 Lakhs",
      "area": "120 sq km",
      "headquarters": "Vrindavan / Mathura",
      "bestSeason": "All Year / Oct-Mar",
      "famousFor": "Banke Bihari, Prem Mandir, ISKCON, Nidhivan, Radha Raman, Phoolon Wali Holi"
    },
    "location": {
      "lat": 27.5807,
      "lng": 77.7007,
      "zoom": 13
    },
    "ai": {
      "score": 99,
      "overview": "The sacred town where Lord Krishna spent his childhood performing Raas Leela with Radha and Gopis. Home to over 5,000 temples and an unparalleled atmosphere of ecstatic devotional love.",
      "perfectFor": [
        "Devotees",
        "Spiritual Seekers",
        "Families",
        "Architectural Fans"
      ],
      "travelStyle": "Devotional, mystical, and heartwarming",
      "budgetRange": "₹2,000 – ₹7,000 / day",
      "recommendedStay": "2 – 3 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Rediscovered in the 16th century by Chaitanya Mahaprabhu and the Six Goswamis of Vrindavan.",
      "food": "Makhan Mishri, hot Kadai Doodh with malai, Chaat, Malpua, and freshly churned butter.",
      "nature": "The Yamuna parikrama path, leafy groves of Seva Kunj, and ancient lotus ponds.",
      "spiritual": "Banke Bihari Mandir, illuminated Prem Mandir, ISKCON Krishna Balaram Mandir, and Nidhivan."
    },
    "travelMeter": {
      "Spirituality": 100,
      "Architecture": 98,
      "Culture": 97,
      "Cuisine": 92,
      "Photography": 96
    },
    "moods": [
      "Banke Bihari Chants",
      "Prem Mandir Lightings",
      "Sacred Yamuna Parikrama",
      "Radha Rani Grace"
    ],
    "places": [
      {
        "name": "Banke Bihari Temple",
        "description": "The most revered temple of Vrindavan, where Lord Krishna stands in the charming tribhanga posture behind periodically pulled curtains.",
        "rating": "5.0",
        "bestTime": "Morning (8:00 AM) or Shringar Aarti",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 27.5833,
        "lng": 77.697
      },
      {
        "name": "Prem Mandir",
        "description": "Spectacular 54-acre white Italian Carrara marble temple complex illuminated with vibrant colors and musical fountains.",
        "rating": "5.0",
        "bestTime": "Evening Musical Fountain (7:00 PM)",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 27.5714,
        "lng": 77.6742
      },
      {
        "name": "ISKCON Krishna Balaram Temple",
        "description": "Spiritual headquarters with 24-hour non-stop Hare Krishna kirtans, exquisite carvings, and serene samadhi.",
        "rating": "4.9",
        "bestTime": "Mangala Aarti (4:30 AM) or Sandhya Aarti",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 27.5728,
        "lng": 77.6795
      },
      {
        "name": "Nidhivan",
        "description": "Sacred grove of intertwined tulsi trees where Lord Krishna is believed to perform Raas Leela every single night.",
        "rating": "4.7",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "1 Hour",
        "lat": 27.5855,
        "lng": 77.7011
      }
    ],
    "foods": [
      {
        "name": "Makhan Mishri Prasad",
        "description": "Freshly churned white butter seasoned with crystallized sugar, Lord Krishna's favorite food.",
        "bestSpot": "Banke Bihari Temple Lane"
      },
      {
        "name": "Kadai Doodh & Rabri",
        "description": "Slow-boiled creamy milk infused with saffron, served with a layer of thick clotted malai.",
        "bestSpot": "Chhipi Gali"
      }
    ],
    "festivals": [
      {
        "name": "Holi of Vrindavan & Phoolon Wali Holi",
        "description": "Celebrated with flower petals, gulal, and joyful kirtans at Banke Bihari and Prem Mandir.",
        "time": "March"
      },
      {
        "name": "Radhashtami",
        "description": "Grand celebration of Shri Radha Rani's divine manifestation with floral decorations and feasts.",
        "time": "September"
      }
    ],
    "hiddenGems": [
      {
        "name": "Radha Raman Temple",
        "description": "500-year-old self-manifested Shaligram deity where the sacred cooking fire has burned continuously since 1542."
      },
      {
        "name": "Kesi Ghat",
        "description": "Graceful stone bathing ghat on the Yamuna river where Krishna bathed after subduing demon Kesi."
      }
    ],
    "nearby": [
      {
        "name": "Mathura",
        "slug": "mathura",
        "distance": "12 km (20 mins)"
      },
      {
        "name": "Agra",
        "slug": "agra",
        "distance": "65 km (1.2 hrs)"
      }
    ]
  },
  "gorakhpur": {
    "basic": {
      "name": "Gorakhpur",
      "tagline": "The Sacred Seat of Guru Gorakhnath and Gita Press",
      "population": "44 Lakhs",
      "area": "3,321 sq km",
      "headquarters": "Gorakhpur",
      "bestSeason": "October to March",
      "famousFor": "Gorakhnath Temple, Gita Press, Ramgarh Taal Lake, Terracotta Craft, Khichdi Mela"
    },
    "location": {
      "lat": 26.7606,
      "lng": 83.3732,
      "zoom": 12
    },
    "ai": {
      "score": 95,
      "overview": "Named after Mahayogi Guru Gorakhnath of the Nath tradition, Gorakhpur is eastern UP's economic and spiritual powerhouse, world-renowned for Gita Press, terracotta crafts, and scenic Ramgarh Taal.",
      "perfectFor": [
        "Spiritual Pilgrims",
        "Book Lovers",
        "Nature Seekers",
        "Families"
      ],
      "travelStyle": "Spiritual, literary, and relaxed",
      "budgetRange": "₹2,000 – ₹5,500 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Epicenter of the Nath monastic movement and historic role in India's freedom struggle at Chauri Chaura.",
      "food": "Famous for Gorakhpuri Khichdi, Galawati and fish delicacies, Ramgarh Taal street chaat, and Peda.",
      "nature": "Expansive 1,700-acre Ramgarh Taal with musical fountains, cruise boats, and bird sanctuary.",
      "spiritual": "Gorakhnath Mandir, Vishnu Mandir, and world's largest publisher of Hindu religious texts Gita Press."
    },
    "travelMeter": {
      "Spirituality": 97,
      "Heritage": 92,
      "Nature": 88,
      "Culture": 90,
      "Cuisine": 85
    },
    "moods": [
      "Nath Monastic Serenity",
      "Gita Press Heritage",
      "Ramgarh Taal Sunset",
      "Terracotta Artistry"
    ],
    "places": [
      {
        "name": "Gorakhnath Temple",
        "description": "Sprawling 52-acre headquarters of the Nath sect, centered around the sanctum of Guru Gorakhnath and Mansarovar lake.",
        "rating": "4.9",
        "bestTime": "Morning Aarti (5:30 AM)",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 26.7766,
        "lng": 83.3592
      },
      {
        "name": "Gita Press",
        "description": "The world's largest publisher of sacred Indian texts, with a Gita Art Gallery featuring 684 paintings of the Mahabharata.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 26.757,
        "lng": 83.3705
      },
      {
        "name": "Ramgarh Taal & Marine Drive",
        "description": "Huge natural lake featuring luxury cruise boat dining, light shows, and waterfront cafes.",
        "rating": "4.8",
        "bestTime": "Sunset (5:30 PM)",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 26.735,
        "lng": 83.395
      }
    ],
    "foods": [
      {
        "name": "Gorakhpuri Mawa Peda & Khichdi",
        "description": "Traditional desi ghee khichdi prepared during Makar Sankranti and rich caramel pedas.",
        "bestSpot": "Gorakhnath Market"
      }
    ],
    "festivals": [
      {
        "name": "Khichdi Mela",
        "description": "Month-long pilgrimage fair starting on Makar Sankranti where millions offer holy khichdi to Guru Gorakhnath.",
        "time": "January"
      }
    ],
    "hiddenGems": [
      {
        "name": "Kushmi Forest & Vinod Van",
        "description": "Dense Sal tree forest reserve with deer sanctuary and eco-picnic grounds."
      }
    ],
    "nearby": [
      {
        "name": "Kushinagar",
        "slug": "kushinagar",
        "distance": "52 km (1 hr)"
      },
      {
        "name": "Ayodhya",
        "slug": "ayodhya",
        "distance": "135 km (2.5 hrs)"
      }
    ]
  },
  "jhansi": {
    "basic": {
      "name": "Jhansi",
      "tagline": "The Valiant Fortress City of Rani Laxmibai",
      "population": "20 Lakhs",
      "area": "5,024 sq km",
      "headquarters": "Jhansi",
      "bestSeason": "October to March",
      "famousFor": "Jhansi Fort, Rani Mahal, Rani Laxmibai, Government Museum, Bundelkhand Heritage"
    },
    "location": {
      "lat": 25.4484,
      "lng": 78.5685,
      "zoom": 12
    },
    "ai": {
      "score": 95,
      "overview": "The heroic gateway to Bundelkhand, forever etched in gold for the courage of Rani Laxmibai during the 1857 First War of Independence. Steeped in formidable hill forts, stone palaces, and martial valor.",
      "perfectFor": [
        "History Enthusiasts",
        "Families",
        "Fort Explorers",
        "Heritage Photographers"
      ],
      "travelStyle": "Heroic, historical, and architectural",
      "budgetRange": "₹2,000 – ₹5,500 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Key battleground of 1857; fortress built by Raja Bir Singh Deo and defended heroically by Rani Laxmibai.",
      "food": "Authentic Bundeli cuisine: Thoke, Bafauri, spicy Bedmi with pumpkin curry, and Desi Jalebi.",
      "nature": "Rugged granite rocky hills, Barua Sagar lake, and Betwa river banks nearby.",
      "spiritual": "Ancient Ganesh Mandir within fort, Murli Manohar temple, and St. Antony's Cathedral."
    },
    "travelMeter": {
      "Heritage": 98,
      "History": 100,
      "Architecture": 92,
      "Culture": 88,
      "Cuisine": 82
    },
    "moods": [
      "Martial Valor",
      "Granite Fortress Views",
      "Bundelkhand Pride",
      "Heroic Legends"
    ],
    "places": [
      {
        "name": "Jhansi Fort",
        "description": "Perched atop Bangra hill, this 17th-century fort features 10 gates, Bhavani Shankar cannon, and the famous jumping spot of Rani Laxmibai.",
        "rating": "4.9",
        "bestTime": "Morning / Sound & Light Show",
        "entryFee": "₹25",
        "visitDuration": "3 Hours",
        "lat": 25.4578,
        "lng": 78.5779
      },
      {
        "name": "Rani Mahal",
        "description": "Two-story royal palace of Rani Laxmibai adorned with colorful murals depicting scenes from Ramayana and grand open courtyards.",
        "rating": "4.7",
        "bestTime": "Morning",
        "entryFee": "₹25",
        "visitDuration": "1.5 Hours",
        "lat": 25.4497,
        "lng": 78.5861
      },
      {
        "name": "Jhansi Government Museum",
        "description": "Houses rare Chandela and Bundela sculptures, ancient weapons, royal coins, and 1857 artifacts.",
        "rating": "4.6",
        "bestTime": "Afternoon",
        "entryFee": "₹20",
        "visitDuration": "1.5 Hours",
        "lat": 25.4475,
        "lng": 78.583
      }
    ],
    "foods": [
      {
        "name": "Bundeli Thali & Bafauri",
        "description": "Steamed and roasted spiced lentil dumplings served with pure ghee, kadhi, and rotis.",
        "bestSpot": "Manik Chowk & Sadar Bazaar"
      }
    ],
    "festivals": [
      {
        "name": "Jhansi Mahotsav",
        "description": "Week-long cultural extravaganza celebrating Bundelkhand folk dance, crafts, and heroism.",
        "time": "February/March"
      }
    ],
    "hiddenGems": [
      {
        "name": "Barua Sagar & Fort",
        "description": "Scenic historic fort overlooking a massive lake constructed by Raja Udit Singh 260 years ago."
      }
    ],
    "nearby": [
      {
        "name": "Orchha",
        "slug": "jhansi",
        "distance": "18 km (30 mins)"
      },
      {
        "name": "Gwalior",
        "slug": "jhansi",
        "distance": "100 km (2 hrs)"
      }
    ]
  },
  "kanpur-nagar": {
    "basic": {
      "name": "Kanpur",
      "tagline": "The Historic Industrial Metropolis on the Banks of Ganga",
      "population": "46 Lakhs",
      "area": "3,155 sq km",
      "headquarters": "Kanpur",
      "bestSeason": "October to March",
      "famousFor": "Bithoor, Brahmavart Ghat, JK Temple, Allen Forest Zoo, Thaggu Ke Laddu, Leather Goods"
    },
    "location": {
      "lat": 26.4499,
      "lng": 80.3319,
      "zoom": 12
    },
    "ai": {
      "score": 94,
      "overview": "Uttar Pradesh's bustling commercial capital and historic leather hub, boasting revolutionary sites in Bithoor, architectural marvels like JK Temple, and renowned street food.",
      "perfectFor": [
        "Business Travelers",
        "History Buffs",
        "Families",
        "Street Food Lovers"
      ],
      "travelStyle": "Dynamic, historic, and culinary",
      "budgetRange": "₹2,500 – ₹7,000 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Center of the 1857 revolt led by Nana Saheb, Tatya Tope, and Rani Laxmibai from sacred Bithoor.",
      "food": "Legendary 'Thaggu Ke Laddu', Badnam Kulfi, Birhana Road Chaat, and Banarasi tea.",
      "nature": "Ganga Barrage promenade, Allen Forest Zoo (one of Asia's largest natural zoos), and Moti Jheel.",
      "spiritual": "White marble JK Temple (Radha Krishna), Brahmavart Ghat, and Valmiki Ashram in Bithoor."
    },
    "travelMeter": {
      "Heritage": 90,
      "Cuisine": 94,
      "Industry": 98,
      "Nature": 84,
      "Culture": 89
    },
    "moods": [
      "Ganga Riverfront",
      "Freedom Revolutionary Spirit",
      "Sweet Tooth Cravings",
      "Vibrant Bazaars"
    ],
    "places": [
      {
        "name": "Bithoor Brahmavart Ghat",
        "description": "Sacred ghat where Lord Brahma is said to have created mankind; center of Nana Saheb's 1857 resistance.",
        "rating": "4.8",
        "bestTime": "Morning / Sunset",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 26.6171,
        "lng": 80.2745
      },
      {
        "name": "JK Temple (Radha Krishna Mandir)",
        "description": "Iconic neo-classical white marble temple showcasing towering spires and serene landscaped gardens.",
        "rating": "4.8",
        "bestTime": "Evening Aarti (6:30 PM)",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 26.4746,
        "lng": 80.3069
      },
      {
        "name": "Allen Forest Zoo",
        "description": "Sprawling natural forest reserve and zoological garden set around a natural lake with diverse wildlife.",
        "rating": "4.7",
        "bestTime": "Morning",
        "entryFee": "₹50",
        "visitDuration": "3 Hours",
        "lat": 26.5015,
        "lng": 80.3075
      }
    ],
    "foods": [
      {
        "name": "Thaggu Ke Laddu & Badnam Kulfi",
        "description": "Signature semolina and dry fruit laddus famous for the tagline 'Aisa Koi Saga Nahi Jisko Thaga Nahi'.",
        "bestSpot": "Bada Chauraha, Kanpur"
      }
    ],
    "festivals": [
      {
        "name": "Ganga Mela",
        "description": "Unique traditional fair celebrating Holi colors on the 5th day after Holi along the Ganga ghats.",
        "time": "March"
      }
    ],
    "hiddenGems": [
      {
        "name": "Valmiki Ashram Bithoor",
        "description": "Sacred hermitage where Goddess Sita resided and sage Valmiki composed the Epic Ramayana."
      }
    ],
    "nearby": [
      {
        "name": "Lucknow",
        "slug": "lucknow",
        "distance": "80 km (1.5 hrs)"
      },
      {
        "name": "Kannauj",
        "slug": "kannauj",
        "distance": "75 km (1.5 hrs)"
      }
    ]
  },
  "chitrakoot": {
    "basic": {
      "name": "Chitrakoot",
      "tagline": "The Sacred Forest of Rama's Exile and Kamadgiri",
      "population": "10 Lakhs",
      "area": "3,216 sq km",
      "headquarters": "Chitrakoot",
      "bestSeason": "October to March",
      "famousFor": "Ramghat, Kamadgiri Parikrama, Gupt Godavari, Sati Anusuya, Mandakini River"
    },
    "location": {
      "lat": 25.176,
      "lng": 80.8653,
      "zoom": 12
    },
    "ai": {
      "score": 96,
      "overview": "Nestled in the lush Vindhya hills along the holy Mandakini River, Chitrakoot is where Lord Rama, Sita, and Lakshmana spent 11 of their 14 years in exile. A realm of tranquil forests, cascading springs, and timeless serenity.",
      "perfectFor": [
        "Spiritual Pilgrims",
        "Nature Lovers",
        "Peace Seekers",
        "Families"
      ],
      "travelStyle": "Peaceful, devotional, and natural",
      "budgetRange": "₹1,800 – ₹5,000 / day",
      "recommendedStay": "2 – 3 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Ancient forest described in Valmiki Ramayana; meeting place of Lord Rama and Bharat (Bharat Milap).",
      "food": "Satvik pure desi ghee vegetarian thalis, fresh Mawa Peda, and regional wild berry sweets.",
      "nature": "The tranquil Mandakini River, Gupt Godavari underground springs, and Hanuman Dhara waterfall.",
      "spiritual": "Kamadgiri Parikrama, Ramghat evening aarti, Sati Anusuya Ashram, and Sphatik Shila."
    },
    "travelMeter": {
      "Spirituality": 100,
      "Nature": 95,
      "Heritage": 92,
      "Culture": 90,
      "Photography": 92
    },
    "moods": [
      "Mandakini Serenity",
      "Kamadgiri Chants",
      "Forest Solitude",
      "Ramayana Lore"
    ],
    "places": [
      {
        "name": "Ramghat on Mandakini",
        "description": "Sacred riverside steps where poet-saint Goswami Tulsidas had divine darshan of Lord Rama.",
        "rating": "4.9",
        "bestTime": "Evening Aarti (6:00 PM)",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 25.1843,
        "lng": 80.8701
      },
      {
        "name": "Kamadgiri Parikrama",
        "description": "Sacred 5 km forested hill parikrama path believed to fulfill all spiritual desires of devotees.",
        "rating": "4.9",
        "bestTime": "Early Morning (5:30 AM)",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 25.174,
        "lng": 80.852
      },
      {
        "name": "Gupt Godavari Caves",
        "description": "Two natural limestone caves with knee-deep flowing spring water where Lord Rama held secret court.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "₹20",
        "visitDuration": "2 Hours",
        "lat": 25.1275,
        "lng": 80.793
      },
      {
        "name": "Hanuman Dhara",
        "description": "Perched high on a rocky cliff where a natural spring trickles constantly over the deity of Lord Hanuman.",
        "rating": "4.7",
        "bestTime": "Morning",
        "entryFee": "Free (Ropeway Available)",
        "visitDuration": "2 Hours",
        "lat": 25.195,
        "lng": 80.89
      }
    ],
    "foods": [
      {
        "name": "Chitrakoot Mawa Peda",
        "description": "Pure cow milk peda prepared fresh with cardamom and slow simmering.",
        "bestSpot": "Ramghat Bazaars"
      }
    ],
    "festivals": [
      {
        "name": "Deepawali Chitrakoot Mela",
        "description": "Over a million pilgrims perform Kamadgiri Parikrama lighting thousands of lamps along Mandakini.",
        "time": "Diwali (October/November)"
      }
    ],
    "hiddenGems": [
      {
        "name": "Sphatik Shila",
        "description": "Sacred granite boulder on Mandakini river bearing the footprints of Lord Rama and Sita."
      }
    ],
    "nearby": [
      {
        "name": "Prayagraj",
        "slug": "prayagraj",
        "distance": "130 km (3 hrs)"
      },
      {
        "name": "Banda",
        "slug": "banda",
        "distance": "70 km (1.5 hrs)"
      }
    ]
  },
  "kushinagar": {
    "basic": {
      "name": "Kushinagar",
      "tagline": "The Sacred Mahaparinirvana Sthal of Lord Buddha",
      "population": "36 Lakhs",
      "area": "2,905 sq km",
      "headquarters": "Padrauna",
      "bestSeason": "October to March",
      "famousFor": "Mahaparinirvana Temple, Ramabhar Stupa, Wat Thai Temple, Buddhist Circuit"
    },
    "location": {
      "lat": 26.7408,
      "lng": 83.889,
      "zoom": 13
    },
    "ai": {
      "score": 96,
      "overview": "One of the four major sacred Buddhist pilgrimage sites worldwide. It is here beneath the Sal trees that Lord Gautam Buddha attained Mahaparinirvana (final release) in 483 BCE.",
      "perfectFor": [
        "Buddhist Pilgrims",
        "Meditators",
        "Global Travelers",
        "Scholars"
      ],
      "travelStyle": "Meditative, peaceful, and historic",
      "budgetRange": "₹2,000 – ₹6,000 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Ancient capital of the Malla Republic where Buddha gave his last sermon and entered Nirvana.",
      "food": "Local vegetarian dishes, regional bananas and banana fiber snacks, and international Asian cuisines.",
      "nature": "Lush meditation parks, serene lotus ponds, and ancient Sal groves.",
      "spiritual": "The 6-meter monolithic reclining Buddha, sacred Ramabhar cremation stupa, and Japanese Peace Pagoda."
    },
    "travelMeter": {
      "Spirituality": 100,
      "Heritage": 95,
      "Meditation": 100,
      "Architecture": 92,
      "Culture": 90
    },
    "moods": [
      "Deep Meditation",
      "Reclining Buddha Reverence",
      "Global Monastic Architecture",
      "Tranquil Silence"
    ],
    "places": [
      {
        "name": "Mahaparinirvana Temple & Stupa",
        "description": "Enshrines the 1,500-year-old monolithic statue of dying Buddha resting on his right side facing north.",
        "rating": "5.0",
        "bestTime": "Morning (7:00 AM)",
        "entryFee": "₹25 (Indian) / ₹300 (Foreigner)",
        "visitDuration": "2 Hours",
        "lat": 26.7397,
        "lng": 83.8899
      },
      {
        "name": "Ramabhar Stupa",
        "description": "Massive 15-meter brick stupa marking the site of Buddha's cremation by the Mallas.",
        "rating": "4.8",
        "bestTime": "Sunset",
        "entryFee": "Included",
        "visitDuration": "1.5 Hours",
        "lat": 26.7328,
        "lng": 83.9056
      },
      {
        "name": "Wat Thai Temple & Monastery",
        "description": "Exquisite Thai Buddhist temple built in traditional pagoda style surrounded by tranquil greenery.",
        "rating": "4.7",
        "bestTime": "Afternoon",
        "entryFee": "Free",
        "visitDuration": "1 Hour",
        "lat": 26.743,
        "lng": 83.892
      }
    ],
    "foods": [
      {
        "name": "Kushinagar Banana Delicacies",
        "description": "Crispy savory banana chips and regional sweets prepared from local GI-tagged banana groves.",
        "bestSpot": "Temple Road Markets"
      }
    ],
    "festivals": [
      {
        "name": "Buddha Purnima",
        "description": "Grand international festival celebrating Buddha's birth, enlightenment, and Nirvana with monks from 20+ countries.",
        "time": "May (Vaisakha Purnima)"
      }
    ],
    "hiddenGems": [
      {
        "name": "Matha Kaur Shrine",
        "description": "Houses a blue-stone Buddha statue carved in Bhumisparsha mudra dating back to 10th century."
      }
    ],
    "nearby": [
      {
        "name": "Gorakhpur",
        "slug": "gorakhpur",
        "distance": "52 km (1 hr)"
      },
      {
        "name": "Varanasi",
        "slug": "varanasi",
        "distance": "240 km (5 hrs)"
      }
    ]
  },
  "kannauj": {
    "basic": {
      "name": "Kannauj",
      "tagline": "The Perfume Capital of India and Imperial Kanyakubja",
      "population": "17 Lakhs",
      "area": "2,093 sq km",
      "headquarters": "Kannauj",
      "bestSeason": "October to March",
      "famousFor": "Attar (Traditional Perfumes), Rose Water, Mitti Attar, Lakh Bahosi Bird Sanctuary"
    },
    "location": {
      "lat": 27.0543,
      "lng": 79.9149,
      "zoom": 12
    },
    "ai": {
      "score": 94,
      "overview": "Known as the Grasse of the East, Kannauj has been distilling natural non-alcoholic Attars using copper degs and wood fires for over a millennium. Former imperial capital of Emperor Harshavardhana.",
      "perfectFor": [
        "Perfume Lovers",
        "History Seekers",
        "Birdwatchers",
        "Artisan Observers"
      ],
      "travelStyle": "Aromatic, artisanal, and heritage-focused",
      "budgetRange": "₹1,800 – ₹5,000 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Grand imperial capital of Emperor Harshavardhana in the 7th century and epicentre of the Tripartite Struggle.",
      "food": "Famous for Gulab Jamun, authentic desi chaat, and cooling rose sharbats made from fresh damask roses.",
      "nature": "Lakh Bahosi Sanctuary — one of UP's largest wetlands hosting 50,000+ migratory birds every winter.",
      "spiritual": "Ancient Gauri Shankar Temple, Annapurna Mandir, and historic Haji Sharif Dargah."
    },
    "travelMeter": {
      "Craft": 100,
      "Heritage": 92,
      "Nature": 90,
      "Cuisine": 84,
      "Culture": 92
    },
    "moods": [
      "Aromas of Rose & Mitti",
      "Copper Still Workshops",
      "Migratory Birds Flocking",
      "Harsha's Ancient Glory"
    ],
    "places": [
      {
        "name": "Traditional Attar Distilleries (Bara Bazaar)",
        "description": "Centuries-old artisanal workshops extracting pure rose, shamama, and rain-soaked earth (Mitti) perfume.",
        "rating": "4.9",
        "bestTime": "Morning (9:00 AM)",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 27.055,
        "lng": 79.916
      },
      {
        "name": "Lakh Bahosi Bird Sanctuary",
        "description": "Sprawling lake sanctuary hosting bar-headed geese, pintails, pelicans, and flamingos in winter.",
        "rating": "4.8",
        "bestTime": "Early Morning (6:30 AM)",
        "entryFee": "₹30",
        "visitDuration": "3 Hours",
        "lat": 26.915,
        "lng": 79.65
      },
      {
        "name": "Kannauj Archaeological Museum",
        "description": "Houses rare clay terracotta tablets, Harshavardhana-era coins, and stone sculptures.",
        "rating": "4.6",
        "bestTime": "Afternoon",
        "entryFee": "₹20",
        "visitDuration": "1.5 Hours",
        "lat": 27.051,
        "lng": 79.92
      }
    ],
    "foods": [
      {
        "name": "Kannauj Gulab Sharbat & Rasgulla",
        "description": "Refreshing natural beverage infused with pure damask rose water and spongy cottage cheese sweets.",
        "bestSpot": "Sarafa Bazaar"
      }
    ],
    "festivals": [
      {
        "name": "Kannauj Itr Mahotsav",
        "description": "Annual perfume festival celebrating regional attar blending, poetry, and floral arts.",
        "time": "Winter"
      }
    ],
    "hiddenGems": [
      {
        "name": "Raja Jaichand Fort Mound",
        "description": "Archaeological ruins atop the high riverbank offering panoramic views of the Ganga plains."
      }
    ],
    "nearby": [
      {
        "name": "Kanpur",
        "slug": "kanpur-nagar",
        "distance": "75 km (1.5 hrs)"
      },
      {
        "name": "Farrukhabad",
        "slug": "farrukhabad",
        "distance": "60 km (1 hr)"
      }
    ]
  },
  "firozabad": {
    "basic": {
      "name": "Firozabad",
      "tagline": "The World-Renowned Glass City and Suhag Nagari",
      "population": "25 Lakhs",
      "area": "2,407 sq km",
      "headquarters": "Firozabad",
      "bestSeason": "October to March",
      "famousFor": "Glass Bangles, Chandeliers, Art Glassware, Chandwar Fort Ruins"
    },
    "location": {
      "lat": 27.1591,
      "lng": 78.3957,
      "zoom": 12
    },
    "ai": {
      "score": 93,
      "overview": "Celebrated across India as 'Suhag Nagari', Firozabad is the colorful glassmaking capital of the country, producing millions of shimmering glass bangles, chandeliers, and artistic glassware daily.",
      "perfectFor": [
        "Shoppers",
        "Handicraft Admirers",
        "Cultural Travelers",
        "Families"
      ],
      "travelStyle": "Vibrant, artisanal, and commercial",
      "budgetRange": "₹1,800 – ₹4,500 / day",
      "recommendedStay": "1 Day",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Glass craftsmanship traces back centuries to Mughal court patronage, enhanced by European glassblowers.",
      "food": "Famous for Bedmi Poori with spicy aloo, Jalebi, Chaat, and Soan Papdi.",
      "nature": "Yamuna riverbanks and rural landscapes bordering the Braj circuit.",
      "spiritual": "Shri Digambar Jain Temple Chhadamilal, Kotwali Jama Masjid, and Radha Krishna Mandir."
    },
    "travelMeter": {
      "Shopping": 100,
      "Craft": 98,
      "Heritage": 85,
      "Culture": 88,
      "Cuisine": 82
    },
    "moods": [
      "Rainbow of Glass Bangles",
      "Bustling Wholesale Bazaars",
      "Furnace Glass Artistry"
    ],
    "places": [
      {
        "name": "Bangle Market (Gali Bohran & Sadar Bazaar)",
        "description": "The world's largest glass bangle market with endless rainbow rows of dazzling bracelets and ornaments.",
        "rating": "4.8",
        "bestTime": "Afternoon / Evening",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 27.158,
        "lng": 78.398
      },
      {
        "name": "Glass Art & Chandelier Showrooms",
        "description": "Exquisite handmade chandeliers, etched wine glasses, and blown-glass decorative lamps.",
        "rating": "4.7",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 27.152,
        "lng": 78.402
      }
    ],
    "foods": [
      {
        "name": "Firozabad Bedai & Jalebi",
        "description": "Golden crispy fried urad dal puris served with spicy potato curry.",
        "bestSpot": "Sadar Bazaar"
      }
    ],
    "festivals": [
      {
        "name": "Kalan Mela",
        "description": "Annual regional trade and cultural festival celebrating local craft and folk arts.",
        "time": "Winter"
      }
    ],
    "hiddenGems": [
      {
        "name": "Chandwar Fort Ruins",
        "description": "Historic 10th-century Chauhan fort on Yamuna banks, witness to battles between Jaichand and Ghori."
      }
    ],
    "nearby": [
      {
        "name": "Agra",
        "slug": "agra",
        "distance": "45 km (1 hr)"
      },
      {
        "name": "Mathura",
        "slug": "mathura",
        "distance": "95 km (2 hrs)"
      }
    ]
  },
  "lakhimpur-kheri": {
    "basic": {
      "name": "Lakhimpur Kheri",
      "tagline": "The Wildlife Jewel and Kingdom of Dudhwa Tigers",
      "population": "40 Lakhs",
      "area": "7,680 sq km",
      "headquarters": "Lakhimpur",
      "bestSeason": "November to April",
      "famousFor": "Dudhwa National Park, Royal Bengal Tigers, One-horned Rhinos, Frog Temple"
    },
    "location": {
      "lat": 27.9472,
      "lng": 80.7788,
      "zoom": 11
    },
    "ai": {
      "score": 96,
      "overview": "The largest district in Uttar Pradesh by land area, bordering Nepal. Home to Dudhwa National Park, a pristine Terai ecosystem harboring Royal Bengal tigers, swamp deer, and one-horned rhinoceroses.",
      "perfectFor": [
        "Wildlife Enthusiasts",
        "Jungle Safari Seekers",
        "Photographers",
        "Eco-Tourists"
      ],
      "travelStyle": "Wild, adventurous, and green",
      "budgetRange": "₹3,000 – ₹8,000 / day",
      "recommendedStay": "2 – 3 Days",
      "bestTravelMonth": "November to April"
    },
    "highlights": {
      "history": "Ancient Terai kingdom, tribal Tharu settlements, and the rare 19th-century Frog Temple.",
      "food": "Tharu tribal cuisine, sugarcane jaggery sweets, fresh river fish, and spiced rotis.",
      "nature": "Dense Sal forests, marshy grasslands, and Sharda river waterways teaming with wildlife.",
      "spiritual": "Mendhak Mandir (Frog Temple) in Oel, Devkali Temple, and historic Gola Gokaran Nath."
    },
    "travelMeter": {
      "Nature": 100,
      "Wildlife": 100,
      "Photography": 98,
      "Adventure": 96,
      "Heritage": 85
    },
    "moods": [
      "Tiger Roar in Sal Woods",
      "Jungle Safari Dawn",
      "One-Horned Rhino Sighting",
      "Terai Peace"
    ],
    "places": [
      {
        "name": "Dudhwa National Park Safari",
        "description": "Famous tiger reserve harboring over 100 Royal Bengal tigers, rhinos, Asian elephants, and barasinghas.",
        "rating": "4.9",
        "bestTime": "Morning Jungle Safari (6:00 AM)",
        "entryFee": "₹300 + Jeep Safari",
        "visitDuration": "4 Hours",
        "lat": 28.49,
        "lng": 80.65
      },
      {
        "name": "Frog Temple (Mendhak Mandir, Oel)",
        "description": "Unique Shiva temple in India constructed in the shape of a massive stone frog according to Tantric architecture.",
        "rating": "4.7",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 27.9,
        "lng": 80.75
      },
      {
        "name": "Gola Gokaran Nath (Chhoti Kashi)",
        "description": "Ancient Shiva temple with a sacred spring pool believed to house the Shiva lingam set by Ravana.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 28.08,
        "lng": 80.47
      }
    ],
    "foods": [
      {
        "name": "Kheri Sugarcane Gur Delicacies",
        "description": "Freshly boiled organic jaggery combined with sesame and dry fruits.",
        "bestSpot": "Lakhimpur Bazaar"
      }
    ],
    "festivals": [
      {
        "name": "Cheti Mela Gola",
        "description": "Grand month-long fair celebrated with devotion and rural carnivals at Gola Gokaran Nath.",
        "time": "Chaitra (March/April)"
      }
    ],
    "hiddenGems": [
      {
        "name": "Surat Bhawan Palace",
        "description": "Indo-Saracenic palace built in the late 19th century set inside private woodlands."
      }
    ],
    "nearby": [
      {
        "name": "Pilibhit",
        "slug": "pilibhit",
        "distance": "95 km (2 hrs)"
      },
      {
        "name": "Lucknow",
        "slug": "lucknow",
        "distance": "135 km (3 hrs)"
      }
    ]
  },
  "pilibhit": {
    "basic": {
      "name": "Pilibhit",
      "tagline": "The Land of Tiger Reserves and Melodious Flutes",
      "population": "20 Lakhs",
      "area": "3,686 sq km",
      "headquarters": "Pilibhit",
      "bestSeason": "November to May",
      "famousFor": "Pilibhit Tiger Reserve, Chuka Beach, Bansuri (Flute) Craft, Sharda Sagar Dam"
    },
    "location": {
      "lat": 28.6312,
      "lng": 79.8037,
      "zoom": 11
    },
    "ai": {
      "score": 95,
      "overview": "Located along the Himalayan foothills on the Nepal border, Pilibhit is celebrated worldwide for its thriving Tiger Reserve (TX2 award winner) and its ODOP flute-crafting heritage (Bansuri Nagari).",
      "perfectFor": [
        "Eco-Travelers",
        "Wildlife Lovers",
        "Music Enthusiasts",
        "Photographers"
      ],
      "travelStyle": "Serene, adventurous, and musical",
      "budgetRange": "₹2,500 – ₹7,000 / day",
      "recommendedStay": "2 Days",
      "bestTravelMonth": "November to May"
    },
    "highlights": {
      "history": "Ancient forest settlements, Mughal outposts, and the legendary flute-crafting artisans.",
      "food": "Flavored Dudh Kheer, Sharda river fish, hot Bedmi Poori, and local sugarcane gur.",
      "nature": "The serene Sharda Sagar Dam with sandy beaches (Chuka Beach), tree-houses, and Sal forests.",
      "spiritual": "Ancient Gauri Shankar Temple, Jama Masjid Pilibhit, and Raja Venu Ka Tila."
    },
    "travelMeter": {
      "Wildlife": 98,
      "Nature": 97,
      "Music": 95,
      "Photography": 94,
      "Peace": 96
    },
    "moods": [
      "Bamboo Flute Melodies",
      "Chuka Beach Waters",
      "Tiger Trails in Sal Jungles"
    ],
    "places": [
      {
        "name": "Pilibhit Tiger Reserve",
        "description": "Award-winning tiger reserve featuring open jeeps and dense Sal woodlands teeming with leopards, tigers, and deer.",
        "rating": "4.9",
        "bestTime": "Dawn Safari (6:00 AM)",
        "entryFee": "₹300 + Jeep",
        "visitDuration": "4 Hours",
        "lat": 28.7,
        "lng": 80.05
      },
      {
        "name": "Chuka Beach (Sharda Sagar)",
        "description": "Picturesque sandy beach lined with thatched huts and wooden tree-houses along the reservoir.",
        "rating": "4.8",
        "bestTime": "Afternoon & Sunset",
        "entryFee": "₹100",
        "visitDuration": "3 Hours",
        "lat": 28.72,
        "lng": 80.12
      },
      {
        "name": "Bansuri Flute Artisans Village",
        "description": "Discover master craftsmen transforming Assam bamboo into world-class musical flutes.",
        "rating": "4.7",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 28.63,
        "lng": 79.8
      }
    ],
    "foods": [
      {
        "name": "Pilibhit Rabri & Desi Sweets",
        "description": "Rich slow-cooked buffalo milk rabri served in clay cups.",
        "bestSpot": "Station Road"
      }
    ],
    "festivals": [
      {
        "name": "Bansuri Mahotsav",
        "description": "Annual festival featuring classical flute concerts and handicraft exhibitions.",
        "time": "Winter"
      }
    ],
    "hiddenGems": [
      {
        "name": "Gauri Shankar Mandir",
        "description": "Centuries-old stone Shiva temple on the banks of Devha and Khakra rivers."
      }
    ],
    "nearby": [
      {
        "name": "Bareilly",
        "slug": "bareilly",
        "distance": "55 km (1 hr)"
      },
      {
        "name": "Lakhimpur Kheri",
        "slug": "lakhimpur-kheri",
        "distance": "95 km (2 hrs)"
      }
    ]
  },
  "sitapur": {
    "basic": {
      "name": "Sitapur",
      "tagline": "The Sacred Tapobhoomi of 88,000 Rishis at Naimisharanya",
      "population": "45 Lakhs",
      "area": "5,743 sq km",
      "headquarters": "Sitapur",
      "bestSeason": "October to March",
      "famousFor": "Naimisharanya (Neemsar), Chakra Teerth, Lalita Devi Temple, Vyas Gaddi, Dadhichi Kund"
    },
    "location": {
      "lat": 27.5686,
      "lng": 80.6829,
      "zoom": 11
    },
    "ai": {
      "score": 95,
      "overview": "Sitapur houses the holiest Vedic pilgrimage of Naimisharanya on the Gomti River, where 88,000 sages performed penance and Maharishi Ved Vyas compiled the 18 Puranas.",
      "perfectFor": [
        "Spiritual Seekers",
        "Pilgrims",
        "Vedic Scholars",
        "Families"
      ],
      "travelStyle": "Devotional, peaceful, and sacred",
      "budgetRange": "₹1,800 – ₹4,500 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "The sacred center of Vedic knowledge compilation; venue of the great 12-year yajna of Shaunaka rishi.",
      "food": "Traditional satvik temple bhojan, pure milk pedas, and fresh regional chaats.",
      "nature": "The serene waters of Gomti River, sacred Chakra Teerth spring, and old banyan groves.",
      "spiritual": "Chakra Teerth, Lalita Devi Shaktipeeth, Vyas Gaddi, Dadhichi Kund, and Hanuman Garhi."
    },
    "travelMeter": {
      "Spirituality": 100,
      "Heritage": 94,
      "Vedic": 98,
      "Peace": 96,
      "Culture": 90
    },
    "moods": [
      "Sacred Chakra Waters",
      "Vedic Chants of Puranas",
      "Ancient Banyan Shade",
      "Divine Grace"
    ],
    "places": [
      {
        "name": "Chakra Teerth (Naimisharanya)",
        "description": "Sacred circular water spring created by Lord Brahma's celestial discus where thousands take holy dips.",
        "rating": "4.9",
        "bestTime": "Morning (6:00 AM)",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 27.3512,
        "lng": 80.4891
      },
      {
        "name": "Maa Lalita Devi Shaktipeeth",
        "description": "One of the 51 sacred Shaktipeeths where the heart of Goddess Sati is believed to have fallen.",
        "rating": "4.8",
        "bestTime": "Morning Aarti",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 27.354,
        "lng": 80.491
      },
      {
        "name": "Vyas Gaddi & Ancient Banyan Tree",
        "description": "The hallowed seat beneath a 5,000-year-old banyan tree where Sage Ved Vyas divided the Vedas and wrote the 18 Puranas.",
        "rating": "4.8",
        "bestTime": "Morning / Afternoon",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 27.358,
        "lng": 80.486
      }
    ],
    "foods": [
      {
        "name": "Naimisharanya Kheer & Peda",
        "description": "Sacred temple prasad made with pure cow milk and saffron.",
        "bestSpot": "Temple Complex Bazaars"
      }
    ],
    "festivals": [
      {
        "name": "Chaitra Purnima Parikrama",
        "description": "Vibrant traditional 84-kosi parikrama of Naimisharanya performed by millions of pilgrims.",
        "time": "March/April"
      }
    ],
    "hiddenGems": [
      {
        "name": "Dadhichi Kund (Misrikh)",
        "description": "Sacred pond where sage Dadhichi surrendered his bones to Lord Indra to craft the celestial Vajra weapon."
      }
    ],
    "nearby": [
      {
        "name": "Lucknow",
        "slug": "lucknow",
        "distance": "85 km (1.5 hrs)"
      },
      {
        "name": "Hardoi",
        "slug": "hardoi",
        "distance": "50 km (1 hr)"
      }
    ]
  },
  "meerut": {
    "basic": {
      "name": "Meerut",
      "tagline": "The Sports City of India and Cradle of 1857 Revolt",
      "population": "34 Lakhs",
      "area": "2,559 sq km",
      "headquarters": "Meerut",
      "bestSeason": "October to March",
      "famousFor": "Sports Equipment, Augharnath Mandir, 1857 Revolt Memorial, Nan Khatai, Gajak"
    },
    "location": {
      "lat": 28.9845,
      "lng": 77.7064,
      "zoom": 12
    },
    "ai": {
      "score": 94,
      "overview": "India's premier sports manufacturing city and ancient historic hub. The epicentre where the historic sepoy mutiny ignited the 1857 First War of Indian Independence against British rule.",
      "perfectFor": [
        "History Seekers",
        "Sports Fans",
        "Foodies",
        "Shoppers"
      ],
      "travelStyle": "Energetic, historical, and commercial",
      "budgetRange": "₹2,000 – ₹5,500 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Ancient settlement linked to Hastinapur of Mahabharata; spark of the 1857 Revolt at Augharnath Temple.",
      "food": "Famous Meerut Gajak, Rewari, freshly baked Nan Khatai, Kulfi, and buttery Mughlai curries.",
      "nature": "Gandhi Bagh cantonment gardens, Suraj Kund park, and nearby Hastinapur wildlife sanctuary.",
      "spiritual": "Historical Augharnath Shiva Temple, St. John's Church, and sacred Jain temples of Hastinapur."
    },
    "travelMeter": {
      "Heritage": 92,
      "Sports": 98,
      "Cuisine": 88,
      "Shopping": 92,
      "History": 95
    },
    "moods": [
      "1857 Spark of Freedom",
      "Cricket Bat Workshops",
      "Sweet Gajak Aromas"
    ],
    "places": [
      {
        "name": "Augharnath Temple (Kali Paltan Mandir)",
        "description": "The historic temple where Indian sepoys gathered and took oaths leading to the outbreak of the 1857 Revolt.",
        "rating": "4.9",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 29.001,
        "lng": 77.702
      },
      {
        "name": "Shahid Smarak & Freedom Museum",
        "description": "Memorial dedicated to the martyrs of the 1857 Revolt housing galleries, portraits, and weaponry.",
        "rating": "4.7",
        "bestTime": "Afternoon",
        "entryFee": "₹10",
        "visitDuration": "2 Hours",
        "lat": 28.995,
        "lng": 77.72
      },
      {
        "name": "Hastinapur Sanctuary & Ancient Jain Temples",
        "description": "Ancient Mahabharata capital 35 km away featuring towering Digambar and Shwetambar Jain teerth complexes.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "3 Hours",
        "lat": 29.17,
        "lng": 78.02
      }
    ],
    "foods": [
      {
        "name": "Meerut Gajak & Nan Khatai",
        "description": "Crisp sesame and jaggery gajak along with melt-in-mouth bakery shortbread cookies.",
        "bestSpot": "Budhana Gate & Sadar Bazaar"
      }
    ],
    "festivals": [
      {
        "name": "Nauchandi Mela",
        "description": "Historic month-long fair celebrated since 1672 symbolizing communal harmony with thousands of stalls.",
        "time": "Spring (April/May)"
      }
    ],
    "hiddenGems": [
      {
        "name": "St. John's Church",
        "description": "One of the oldest churches in northern India (built 1819) set amidst towering pines in the cantonment."
      }
    ],
    "nearby": [
      {
        "name": "Delhi / Noida",
        "slug": "noida",
        "distance": "60 km (1 hr via Expressway)"
      },
      {
        "name": "Muzaffarnagar",
        "slug": "muzaffarnagar",
        "distance": "55 km (1 hr)"
      }
    ]
  },
  "aligarh": {
    "basic": {
      "name": "Aligarh",
      "tagline": "The Lock City of India and Seat of AMU Heritage",
      "population": "36 Lakhs",
      "area": "3,700 sq km",
      "headquarters": "Aligarh",
      "bestSeason": "October to March",
      "famousFor": "Brass Hardware & Locks, AMU Heritage Campus, Aligarh Fort, Shekha Jheel"
    },
    "location": {
      "lat": 27.8974,
      "lng": 78.088,
      "zoom": 12
    },
    "ai": {
      "score": 93,
      "overview": "Renowned globally as 'Tala Nagari' (The Lock City), Aligarh blends world-class hardware manufacturing with the majestic Indo-Saracenic educational heritage of Aligarh Muslim University.",
      "perfectFor": [
        "Heritage Buffs",
        "Birdwatchers",
        "Artisan Observers",
        "Scholars"
      ],
      "travelStyle": "Academic, architectural, and craft-centered",
      "budgetRange": "₹2,000 – ₹5,500 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Ancient fortress city of Kol; revolutionized in the 19th century by Sir Syed Ahmad Khan's Aligarh Movement.",
      "food": "Famous for Barfi, Aligarh Mughlai Kebab, hot Bedmi Poori, and creamy Rabri Falooda.",
      "nature": "Shekha Jheel — sprawling wetland hosting thousands of migratory Siberian birds in winter.",
      "spiritual": "Historic Jama Masjid atop Balai Qila, Khereshwar Mahadev Mandir, and AMU Mosque."
    },
    "travelMeter": {
      "Heritage": 92,
      "Education": 98,
      "Craft": 95,
      "Cuisine": 86,
      "Birdwatching": 90
    },
    "moods": [
      "Victorian Campus Splendor",
      "Brass Artisan Clatter",
      "Flocks at Shekha Jheel"
    ],
    "places": [
      {
        "name": "AMU Heritage Campus & Sir Syed Hall",
        "description": "Magnificent red-brick Victorian Indo-Saracenic university campus designed by Sir Syed Ahmad Khan.",
        "rating": "4.9",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 27.915,
        "lng": 78.077
      },
      {
        "name": "Aligarh Fort (Bona Chhur)",
        "description": "Formidable 16th-century fort built by Muhammad Maruf surrounded by a deep historic moat.",
        "rating": "4.6",
        "bestTime": "Afternoon",
        "entryFee": "Free",
        "visitDuration": "1.5 Hours",
        "lat": 27.925,
        "lng": 78.065
      },
      {
        "name": "Shekha Jheel Bird Sanctuary",
        "description": "Natural lake sanctuary hosting over 160 species of native and migratory birds.",
        "rating": "4.7",
        "bestTime": "Sunrise (6:30 AM)",
        "entryFee": "₹20",
        "visitDuration": "2 Hours",
        "lat": 27.87,
        "lng": 78.2
      }
    ],
    "foods": [
      {
        "name": "Aligarh Chamcham & Barfi",
        "description": "Dense milk sweets soaked in aromatic cardamom sugar syrup.",
        "bestSpot": "Centre Point Bazaars"
      }
    ],
    "festivals": [
      {
        "name": "Aligarh Numaish",
        "description": "Centuries-old annual cultural and trade exhibition celebrated with theatre and poetry.",
        "time": "January/February"
      }
    ],
    "hiddenGems": [
      {
        "name": "Khereshwar Mahadev Mandir",
        "description": "Ancient Shiva temple with unique brass ceiling carvings and sacred lingam."
      }
    ],
    "nearby": [
      {
        "name": "Mathura",
        "slug": "mathura",
        "distance": "65 km (1.2 hrs)"
      },
      {
        "name": "Agra",
        "slug": "agra",
        "distance": "85 km (1.8 hrs)"
      }
    ]
  },
  "mirzapur": {
    "basic": {
      "name": "Mirzapur",
      "tagline": "The Abode of Maa Vindhyavasini and Hand-Knotted Carpets",
      "population": "25 Lakhs",
      "area": "4,521 sq km",
      "headquarters": "Mirzapur",
      "bestSeason": "October to March",
      "famousFor": "Vindhyavasini Devi (Vindhyachal), Chunar Fort, Windom Falls, Mirzapur Carpets"
    },
    "location": {
      "lat": 25.146,
      "lng": 82.5684,
      "zoom": 12
    },
    "ai": {
      "score": 95,
      "overview": "Cradled between the sacred Ganga and the rocky Vindhya range, Mirzapur is renowned for the divine Shaktipeeth of Maa Vindhyavasini, the impregnable Chunar Fort, and GI-tagged hand-knotted woollen carpets.",
      "perfectFor": [
        "Spiritual Pilgrims",
        "Waterfall Hikers",
        "Fort Enthusiasts",
        "Families"
      ],
      "travelStyle": "Spiritual, scenic, and rustic",
      "budgetRange": "₹2,000 – ₹5,000 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Ancient Vindhyachal pilgrimage described in Durga Saptashati; Sher Shah Suri and British history at Chunar Fort.",
      "food": "Famous for Mirzapuri Baati Chokha, Khoya Jalebi, and seasonal fresh river fish curries.",
      "nature": "Vindhyan waterfalls: Windom Fall, Sirsi Fall, Siddhnath Dari, and panoramic Ganga bluffs.",
      "spiritual": "Maa Vindhyavasini Temple, Ashtabhuja Devi, Kali Khoh, and Trikona Parikrama."
    },
    "travelMeter": {
      "Spirituality": 98,
      "Nature": 94,
      "Heritage": 92,
      "Craft": 90,
      "Photography": 92
    },
    "moods": [
      "Maa Vindhyavasini Blessings",
      "Cascading Waterfalls",
      "Chunar Ganga Panorama",
      "Silk Carpets"
    ],
    "places": [
      {
        "name": "Maa Vindhyavasini Temple (Vindhyachal)",
        "description": "Supreme sacred Shaktipeeth where Goddess Durga is worshiped as the eternal presiding deity of the Vindhyas.",
        "rating": "4.9",
        "bestTime": "Morning Aarti (6:00 AM)",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 25.1633,
        "lng": 82.5028
      },
      {
        "name": "Chunar Fort",
        "description": "Perched high on a rocky bluff over the Ganga, this 2,000-year-old fort has ties to King Vikramaditya, Babur, and Warren Hastings.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "₹25",
        "visitDuration": "2.5 Hours",
        "lat": 25.1228,
        "lng": 82.8753
      },
      {
        "name": "Windom Falls & Sirsi Dam",
        "description": "Picturesque waterfalls cascading over rugged red sandstone cliffs amidst green woodlands.",
        "rating": "4.7",
        "bestTime": "Afternoon",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 25.08,
        "lng": 82.55
      }
    ],
    "foods": [
      {
        "name": "Mirzapur Baati Chokha",
        "description": "Smoky wood-fired wheat baatis crushed in pure ghee served with spicy brinjal and tomato chokha.",
        "bestSpot": "Vindhyachal Ghats"
      }
    ],
    "festivals": [
      {
        "name": "Navratri Mela Vindhyachal",
        "description": "Massive 9-day carnival bringing millions of devotees for the sacred Trikon Parikrama.",
        "time": "Chaitra & Ashwin Navratri"
      }
    ],
    "hiddenGems": [
      {
        "name": "Kali Khoh Temple",
        "description": "Sacred cave shrine nestled in a forested mountain cleft dedicated to Goddess Mahakali."
      }
    ],
    "nearby": [
      {
        "name": "Varanasi",
        "slug": "varanasi",
        "distance": "60 km (1.5 hrs)"
      },
      {
        "name": "Prayagraj",
        "slug": "prayagraj",
        "distance": "85 km (2 hrs)"
      }
    ]
  },
  "bhadohi": {
    "basic": {
      "name": "Bhadohi",
      "tagline": "The Carpet City of South Asia and Land of Sitamarhi",
      "population": "16 Lakhs",
      "area": "1,015 sq km",
      "headquarters": "Gyanpur",
      "bestSeason": "October to March",
      "famousFor": "Hand-Knotted Carpets, Sita Samahit Sthal (Sitamarhi), Baba Harihar Nath Dham"
    },
    "location": {
      "lat": 25.3944,
      "lng": 82.5707,
      "zoom": 12
    },
    "ai": {
      "score": 93,
      "overview": "Known internationally as the 'Carpet City', Bhadohi is South Asia's largest handmade carpet manufacturing and export center. Also home to the sacred riverside sanctuary of Sitamarhi.",
      "perfectFor": [
        "Craft Connoisseurs",
        "Pilgrims",
        "Shoppers",
        "Culture Travelers"
      ],
      "travelStyle": "Artisanal, spiritual, and calm",
      "budgetRange": "₹2,000 – ₹5,000 / day",
      "recommendedStay": "1 Day",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Weaving traditions flourished under Emperor Akbar; sacred site of Goddess Sita's final journey into the earth.",
      "food": "Famous for Purvanchali Baati Chokha, spicy chaat, and freshly made hot Gulab Jamun.",
      "nature": "Peaceful Ganga riverbanks, Sitamarhi gardens, and scenic rural handloom villages.",
      "spiritual": "Sita Samahit Sthal (Sitamarhi), 108-foot Hanuman statue, and Baba Harihar Nath Mandir."
    },
    "travelMeter": {
      "Craft": 100,
      "Heritage": 90,
      "Spirituality": 92,
      "Shopping": 96,
      "Hospitality": 88
    },
    "moods": [
      "Loom Rhythm",
      "Giant Hanuman Statue",
      "Quiet Ganga Banks"
    ],
    "places": [
      {
        "name": "Sita Samahit Sthal (Sitamarhi)",
        "description": "Sacred temple set on the Ganga where Goddess Sita entered the womb of Mother Earth.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 25.26,
        "lng": 82.41
      },
      {
        "name": "Bhadohi Carpet Weaving Centers",
        "description": "Witness master weavers hand-knotting intricate Persian, silk, and woollen rugs on traditional looms.",
        "rating": "4.8",
        "bestTime": "Morning",
        "entryFee": "Free",
        "visitDuration": "2.5 Hours",
        "lat": 25.39,
        "lng": 82.57
      }
    ],
    "foods": [
      {
        "name": "Bhadohi Baati Chokha & Jalebi",
        "description": "Authentic coal-baked wheat dumplings served with fiery garlic chutney.",
        "bestSpot": "Gyanpur Chowk"
      }
    ],
    "festivals": [
      {
        "name": "Sitamarhi Mela",
        "description": "Annual regional fair celebrated with folk singing and Ganga snan during Kartik Purnima.",
        "time": "November"
      }
    ],
    "hiddenGems": [
      {
        "name": "Chak Inayat Wetland",
        "description": "Peaceful water reservoir hosting wintering waterfowls and village life."
      }
    ],
    "nearby": [
      {
        "name": "Varanasi",
        "slug": "varanasi",
        "distance": "45 km (1 hr)"
      },
      {
        "name": "Mirzapur",
        "slug": "mirzapur",
        "distance": "35 km (45 mins)"
      }
    ]
  },
  "raebareli": {
    "basic": {
      "name": "Raebareli",
      "tagline": "The Historical Heartland of Avadh and Natural Sanctuaries",
      "population": "34 Lakhs",
      "area": "4,609 sq km",
      "headquarters": "Raebareli",
      "bestSeason": "October to March",
      "famousFor": "Samaspur Bird Sanctuary, Dalmau Ganga Ghats, Freedom Movement Heritage, Indira Gandhi Botanical Garden"
    },
    "location": {
      "lat": 26.2298,
      "lng": 81.2424,
      "zoom": 12
    },
    "ai": {
      "score": 93,
      "overview": "Located in the heart of Awadh, Raebareli is renowned for its role in India's independence movement, the pristine wetland ecosystem of Samaspur Bird Sanctuary, and the sacred ghats of Dalmau along the holy Ganga.",
      "perfectFor": [
        "Birdwatchers",
        "Nature Enthusiasts",
        "History Buffs",
        "Peaceful Explorers"
      ],
      "travelStyle": "Serene, historic, and eco-friendly",
      "budgetRange": "₹2,000 – ₹5,000 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "November to March"
    },
    "highlights": {
      "history": "A prominent stronghold during the 1857 Revolt and Kishan Aandolan freedom struggle led by Baba Ram Chandra.",
      "food": "Famous for Awadhi chaat, Samosa-Jalebi, Dalmoth, and slow-churned creamy Rabri.",
      "nature": "The Samaspur Bird Sanctuary wetland hosting over 250 species of resident and migratory birds.",
      "spiritual": "Dalmau Ghats on the sacred Ganga, Maheshwaram Temple, and Behta Bridge."
    },
    "travelMeter": {
      "Heritage": 92,
      "Nature": 94,
      "Culture": 88,
      "Cuisine": 85,
      "Birdwatching": 96
    },
    "moods": [
      "Flocking Migratory Birds",
      "Dalmau Sunset Ghats",
      "Awadhi Countryside",
      "Colonial Memories"
    ],
    "places": [
      {
        "name": "Samaspur Bird Sanctuary",
        "description": "Sprawling 780-hectare wetland haven hosting pintails, greylag geese, painted storks, and kingfishers in winter.",
        "rating": "4.8",
        "bestTime": "Sunrise (6:30 AM)",
        "entryFee": "₹30",
        "visitDuration": "3 Hours",
        "lat": 26.0125,
        "lng": 81.4011
      },
      {
        "name": "Dalmau Historical Ganga Ghats",
        "description": "Ancient riverfront settlement featuring King Dal's fort ruins, Bara Math, and sacred Ganga bathing steps.",
        "rating": "4.7",
        "bestTime": "Morning & Sunset",
        "entryFee": "Free",
        "visitDuration": "2 Hours",
        "lat": 26.0683,
        "lng": 81.0311
      },
      {
        "name": "Indira Gandhi Botanical Garden",
        "description": "Expansive green sanctuary on the banks of Sai River dedicated to medicinal plants and flora conservation.",
        "rating": "4.5",
        "bestTime": "Afternoon",
        "entryFee": "₹20",
        "visitDuration": "1.5 Hours",
        "lat": 26.22,
        "lng": 81.24
      }
    ],
    "foods": [
      {
        "name": "Raebareli Samosa Chaat & Rabri",
        "description": "Crispy fried samosas crushed with chickpea gravy and yogurt, followed by rich rabri.",
        "bestSpot": "Super Market Chowk"
      }
    ],
    "festivals": [
      {
        "name": "Kartik Purnima Dalmau Mela",
        "description": "Grand centuries-old bathing fair attracting thousands of devotees to the Ganga ghats.",
        "time": "November"
      }
    ],
    "hiddenGems": [
      {
        "name": "Behta Bridge & Sai Riverfront",
        "description": "Picturesque historic aqueduct bridge where tranquil waters meet green orchards."
      }
    ],
    "nearby": [
      {
        "name": "Lucknow",
        "slug": "lucknow",
        "distance": "80 km (1.5 hrs)"
      },
      {
        "name": "Prayagraj",
        "slug": "prayagraj",
        "distance": "115 km (2.5 hrs)"
      }
    ]
  },
  "noida": {
    "basic": {
      "name": "Noida",
      "tagline": "The Modern Futuristic City and Entertainment Capital",
      "population": "10 Lakhs",
      "area": "203 sq km",
      "headquarters": "Noida",
      "bestSeason": "All Year",
      "famousFor": "DLF Mall of India, Okhla Bird Sanctuary, Film City, Worlds of Wonder, IT Hub"
    },
    "location": {
      "lat": 28.5355,
      "lng": 77.391,
      "zoom": 12
    },
    "ai": {
      "score": 95,
      "overview": "India's premier planned modern metropolis, boasting gleaming skyscrapers, international shopping malls, entertainment parks, gourmet dining avenues, and sprawling wetlands at Okhla Bird Sanctuary.",
      "perfectFor": [
        "Shoppers",
        "Families",
        "Urban Explorers",
        "Foodies"
      ],
      "travelStyle": "Modern, energetic, and entertaining",
      "budgetRange": "₹3,500 – ₹10,000 / day",
      "recommendedStay": "1 – 2 Days",
      "bestTravelMonth": "October to March"
    },
    "highlights": {
      "history": "Planned modern industrial and IT metropolis founded in 1976 under the UP Industrial Area Development Act.",
      "food": "Global culinary dining, Sector 18 street food alleys, and rooftop lounges.",
      "nature": "Okhla Bird Sanctuary along the Yamuna river, sprawling city parks, and botanical gardens.",
      "spiritual": "Grand ISKCON Noida Temple, Sanatan Dharm Mandir, and tranquil lotus meditation gardens."
    },
    "travelMeter": {
      "Modernity": 100,
      "Shopping": 100,
      "Entertainment": 96,
      "Cuisine": 94,
      "Nature": 86
    },
    "moods": [
      "Skyscraper Skylines",
      "Mega Shopping Sprees",
      "Sunset Birdwatching",
      "High-Tech Energy"
    ],
    "places": [
      {
        "name": "DLF Mall of India & Sector 18",
        "description": "One of India's largest shopping and entertainment destinations with 330+ brands, multiplexes, and food courts.",
        "rating": "4.9",
        "bestTime": "Afternoon / Evening",
        "entryFee": "Free",
        "visitDuration": "4 Hours",
        "lat": 28.5672,
        "lng": 77.3211
      },
      {
        "name": "Okhla Bird Sanctuary",
        "description": "Pristine wetland on the Yamuna river where over 300 bird species congregate right on the edge of the city.",
        "rating": "4.7",
        "bestTime": "Morning (7:00 AM)",
        "entryFee": "₹30",
        "visitDuration": "2.5 Hours",
        "lat": 28.558,
        "lng": 77.309
      },
      {
        "name": "Worlds of Wonder (WOW)",
        "description": "High-octane amusement and water park with thrilling roller-coasters, wave pools, and go-karting.",
        "rating": "4.6",
        "bestTime": "All Day",
        "entryFee": "₹900",
        "visitDuration": "4 Hours",
        "lat": 28.564,
        "lng": 77.324
      }
    ],
    "foods": [
      {
        "name": "Sector 18 Chaat & Global Street Bites",
        "description": "Celebrated street food lane featuring hot Kathi rolls, momos, kulfi falooda, and kebabs.",
        "bestSpot": "Sector 18 Market"
      }
    ],
    "festivals": [
      {
        "name": "Noida Shilp Utsav",
        "description": "Grand national handicraft carnival organized by UP Tourism at Noida Stadium.",
        "time": "Winter"
      }
    ],
    "hiddenGems": [
      {
        "name": "Noida Golf Course & Heritage Fort Wall",
        "description": "Historic British battle monuments and golf links amidst lush green fairways."
      }
    ],
    "nearby": [
      {
        "name": "Delhi",
        "slug": "noida",
        "distance": "0 km (Seamless Metro)"
      },
      {
        "name": "Greater Noida",
        "slug": "gautam-buddha-nagar",
        "distance": "25 km (30 mins)"
      }
    ]
  }
};

/* ==========================================================
   UNIVERSAL RESOLVER & FALLBACK ENGINE
   Ensures every single UP district returns complete, rich data
========================================================== */
function resolveCanonicalDistrictSlug(query) {
  if (!query) return "varanasi";
  const cleaned = query.trim().toLowerCase().replace(/\s+/g, "-");
  
  if (DISTRICT_ALIASES[cleaned]) {
    return DISTRICT_ALIASES[cleaned];
  }
  
  const found = districts.find(d => 
    d.slug === cleaned || 
    d.name.toLowerCase() === query.trim().toLowerCase() ||
    (d.aliases && d.aliases.some(a => a.toLowerCase() === query.trim().toLowerCase() || a.toLowerCase().replace(/\s+/g, "-") === cleaned))
  );
  
  return found ? found.slug : cleaned;
}

function getDistrictFullData(slug) {
  const canonical = resolveCanonicalDistrictSlug(slug);
  
  if (RICH_DISTRICT_DATABASE[canonical]) {
    return RICH_DISTRICT_DATABASE[canonical];
  }

  const meta = districts.find(d => d.slug === canonical) || {
    id: 99,
    name: canonical.replace(/-/g, " ").replace(/\b\w/g, l => l.toUpperCase()),
    slug: canonical,
    categories: ["historical", "popular"],
    image: `assets/images/districts/${canonical}.webp`,
    keywords: ["heritage", "culture", "monuments", "local bazaar", "temples"],
    priority: 8
  };

  const coords = DISTRICT_COORDINATES[canonical] || { lat: 26.8467, lng: 80.9462 };
  const spec = DISTRICT_SPECS[canonical] || {
    hq: meta.name,
    area: "3,000 sq km",
    pop: "25 Lakhs",
    season: "October to March"
  };

  const kw = meta.keywords || [];
  const primaryKey = kw[0] ? kw[0].replace(/\b\w/g, l => l.toUpperCase()) : `${meta.name} Heritage Quarter`;
  const secondaryKey = kw[1] ? kw[1].replace(/\b\w/g, l => l.toUpperCase()) : "Ancient City Center";
  const thirdKey = kw[2] ? kw[2].replace(/\b\w/g, l => l.toUpperCase()) : "Scenic Riverfront & Gardens";

  const famousText = kw.length >= 3 
    ? kw.slice(0, 4).map(k => k.replace(/\b\w/g, l => l.toUpperCase())).join(", ")
    : `${meta.name} Heritage, Local Handicrafts & Authentic Culture`;

  return {
    basic: {
      name: meta.name,
      tagline: `Discover the Timeless Heritage, Sacred Culture, and Hidden Charms of ${meta.name}`,
      population: spec.pop,
      area: spec.area,
      headquarters: spec.hq,
      bestSeason: spec.season,
      famousFor: famousText
    },
    location: { lat: coords.lat, lng: coords.lng, zoom: 12 },
    ai: {
      score: 93 + (meta.priority % 5),
      overview: `${meta.name} is a vibrant cultural and historical destination in Uttar Pradesh. Celebrated for its unique regional heritage, artisanal traditions, sacred shrines, and welcoming local community, it offers an authentic glimpse into the soul of Uttar Pradesh.`,
      perfectFor: ["Cultural Explorers", "Heritage Enthusiasts", "Photographers", "Regional Travelers"],
      travelStyle: "Cultural, authentic, and experiential",
      budgetRange: "₹2,000 – ₹5,500 / day",
      recommendedStay: "1 – 2 Days",
      bestTravelMonth: spec.season
    },
    highlights: {
      history: `Centuries of storied traditions spanning medieval dynasties, traditional craftsmanship, and vibrant freedom struggle heritage.`,
      food: `Savor authentic regional flavors, signature street chaats, freshly prepared regional sweets, and traditional Awadhi & Purvanchali recipes.`,
      nature: `Scenic waterways, lush green agricultural countryside, and tranquil sacred ponds and sanctuaries.`,
      spiritual: `Venerated historic temples, revered Sufi dargahs, vibrant community fairs, and centuries-old cultural monuments.`
    },
    travelMeter: { Heritage: 92, Culture: 90, Hospitality: 94, Cuisine: 88, Nature: 85 },
    moods: ["Historic Charm", "Artisanal Heritage", "Warm Hospitality", "Authentic Regional Flavors"],
    places: [
      {
        name: primaryKey,
        description: `A prominent landmark representing the rich architectural, religious, and cultural legacy of ${meta.name}.`,
        rating: "4.8",
        bestTime: "Morning (7:00 AM - 10:00 AM)",
        entryFee: "Free",
        visitDuration: "2 Hours",
        lat: coords.lat + 0.005,
        lng: coords.lng + 0.005
      },
      {
        name: secondaryKey,
        description: `A vibrant cultural and historic destination celebrated by local communities and visiting travelers.`,
        rating: "4.7",
        bestTime: "Afternoon / Evening",
        entryFee: "Free",
        visitDuration: "1.5 Hours",
        lat: coords.lat - 0.004,
        lng: coords.lng - 0.004
      },
      {
        name: thirdKey,
        description: `Scenic natural surroundings and tranquil riverbank vistas showcasing the natural beauty of ${meta.name}.`,
        rating: "4.6",
        bestTime: "Sunset (5:30 PM)",
        entryFee: "Free",
        visitDuration: "1.5 Hours",
        lat: coords.lat + 0.008,
        lng: coords.lng - 0.006
      }
    ],
    foods: [
      {
        name: `${meta.name} Signature Regional Thali`,
        description: `Fresh seasonal vegetables, traditional handmade rotis, fragrant lentils, and freshly churned butter.`,
        bestSpot: "Local City Bazaar & Traditional Bhojanalayas"
      },
      {
        name: `Traditional ${meta.name} Sweets & Chaat`,
        description: `Authentic mawa confections, crispy kachoris, hot jalebis, and spiced tangy street chaats.`,
        bestSpot: "Historic Market Square"
      }
    ],
    festivals: [
      {
        name: "Dev Deepawali & Kartik Purnima Mela",
        description: "Grand community celebration marked by thousands of earthen lamps, sacred river dips, and lively local melas.",
        time: "October/November"
      },
      {
        name: "Holi & Spring Harvest Utsav",
        description: "Joyful celebration of vibrant colors, traditional folk songs, and seasonal sweet delicacies across the district.",
        time: "February/March"
      }
    ],
    hiddenGems: [
      {
        name: `Old ${meta.name} Heritage Artisan Lane`,
        description: `Explore tucked-away centuries-old workshops where master craftsmen preserve traditional techniques.`
      }
    ],
    nearby: [
      { name: "Lucknow", slug: "lucknow", distance: "Connected by Express Highway" },
      { name: "Varanasi", slug: "varanasi", distance: "Convenient rail & road transit" }
    ]
  };
}

window.districts = districts;
window.getDistrictFullData = getDistrictFullData;
window.resolveCanonicalDistrictSlug = resolveCanonicalDistrictSlug;
