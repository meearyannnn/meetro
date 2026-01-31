const metroData = {
  yellow: {
    name: "Yellow Line",
    color: "#FFD200",
    direction: "Samaypur Badli → Millennium City Centre Gurugram",
    platform: 2,

    stations: [
      { name: "Samaypur Badli", interchange: false },
      { name: "Rohini Sector 18, 19", interchange: false },
      { name: "Haiderpur Badli Mor", interchange: true},
      { name: "Jahangirpuri", interchange: false },
      { name: "Adarsh Nagar", interchange: false },
      { name: "Azadpur", interchange: true }, // Pink, Magenta (future)
      { name: "Model Town", interchange: false },
      { name: "Guru Tegh Bahadur Nagar", interchange: false },
      { name: "Vishwavidyalaya", interchange: false },
      { name: "Vidhan Sabha", interchange: false },
      { name: "Civil Lines", interchange: false },
      { name: "Kashmere Gate", interchange: true }, // Red, Violet
      { name: "Chandni Chowk", interchange: false },
      { name: "Chawri Bazar", interchange: false },
      { name: "New Delhi", interchange: true }, // Airport Express, Green (future)
      { name: "Rajiv Chowk", interchange: true }, // Blue
      { name: "Patel Chowk", interchange: false },
      { name: "Central Secretariat", interchange: true }, // Violet, Magenta
      { name: "Udyog Bhawan", interchange: false },
      { name: "Lok Kalyan Marg", interchange: false },
      { name: "Jor Bagh", interchange: false },
      { name: "Dilli Haat – INA", interchange: true }, // Pink
      { name: "AIIMS", interchange: false },
      { name: "Green Park", interchange: false },
      { name: "Hauz Khas", interchange: true }, // Magenta
      { name: "Malviya Nagar", interchange: false },
      { name: "Saket", interchange: false },
      { name: "Qutab Minar", interchange: false },
      { name: "Chhatarpur", interchange: false }, // Golden (future)
      { name: "Sultanpur", interchange: false },
      { name: "Ghitorni", interchange: false },
      { name: "Arjan Garh", interchange: false },
      { name: "Guru Dronacharya", interchange: false },
      { name: "Sikanderpur", interchange: true }, // Rapid Metro
      { name: "MG Road", interchange: false },
      { name: "IFFCO Chowk", interchange: false },
      { name: "Millennium City Centre Gurugram", interchange: false }
    ]
  },
red: {
    name: "Red Line",
    color: "#E11C2A",
    direction: "Shaheed Sthal → Nathupur",
    platform: 1,

    stations: [
      { name: "Shaheed Sthal", interchange: false },
      { name: "Hindon River", interchange: false },
      { name: "Arthala", interchange: false },
      { name: "Mohan Nagar", interchange: false }, // Blue (future)
      { name: "Shyam Park", interchange: false },
      { name: "Major Mohit Sharma Rajendra Nagar", interchange: false },
      { name: "Raj Bagh", interchange: false },
      { name: "Shaheed Nagar", interchange: false },
      { name: "Dilshad Garden", interchange: false },
      { name: "Jhilmil", interchange: false },
      { name: "Mansarovar Park", interchange: false },
      { name: "Shahdara", interchange: false },
      { name: "Welcome", interchange: true }, // Pink
      { name: "Seelampur", interchange: false },
      { name: "Shastri Park", interchange: false },
      { name: "Kashmere Gate", interchange: true }, // Yellow, Violet
      { name: "Tis Hazari", interchange: false },
      { name: "Pul Bangash", interchange: false }, // Magenta (future)
      { name: "Pratap Nagar", interchange: false },
      { name: "Shastri Nagar", interchange: false },
      { name: "Inderlok", interchange: true }, // Green
      { name: "Kanhaiya Nagar", interchange: false },
      { name: "Keshav Puram", interchange: false },
      { name: "Netaji Subhash Place", interchange: true }, // Pink
      { name: "Kohat Enclave", interchange: false },
      { name: "Madhuban Chowk", interchange: false }, // Magenta (future)
      { name: "Rohini East", interchange: false },
      { name: "Rohini West", interchange: false },
      { name: "Rithala", interchange: false },

      // -------- Future / Approved Extension --------

    ]
  },
blueMain: {
  name: "Blue Line (Main Line)",
  color: "#0057FF",
  direction: "Noida Electronic City → Dwarka Sector 21",
  platform: 1,

  stations: [
    { name: "Noida Electronic City", interchange: false },
    { name: "Noida Sector 62", interchange: false },
    { name: "Noida Sector 59", interchange: false },
    { name: "Noida Sector 61", interchange: false },
    { name: "Noida Sector 52", interchange: true }, // Aqua Line
    { name: "Noida Sector 34", interchange: false },
    { name: "Noida City Centre", interchange: false },
    { name: "Golf Course", interchange: false },
    { name: "Botanical Garden", interchange: true }, // Magenta
    { name: "Noida Sector 18", interchange: false },
    { name: "Noida Sector 16", interchange: false },
    { name: "Noida Sector 15", interchange: false },
    { name: "New Ashok Nagar", interchange: false },
    { name: "Mayur Vihar Extension", interchange: false },
    { name: "Mayur Vihar-I", interchange: true }, // Pink
    { name: "Akshardham", interchange: false },
    { name: "Yamuna Bank", interchange: true }, // Branch line split
    { name: "Indraprastha", interchange: false },
    { name: "Supreme Court", interchange: false },
    { name: "Mandi House", interchange: true }, // Violet
    { name: "Barakhamba Road", interchange: false },
    { name: "Rajiv Chowk", interchange: true }, // Yellow
    { name: "Ramakrishna Ashram Marg", interchange: false }, // Magenta (future)
    { name: "Jhandewalan", interchange: false },
    { name: "Karol Bagh", interchange: false },
    { name: "Rajendra Place", interchange: false },
    { name: "Patel Nagar", interchange: false },
    { name: "Shadipur", interchange: false },
    { name: "Kirti Nagar", interchange: true }, // Green
    { name: "Moti Nagar", interchange: false },
    { name: "Ramesh Nagar", interchange: false },
    { name: "Rajouri Garden", interchange: true }, // Pink
    { name: "Tagore Garden", interchange: false },
    { name: "Subhash Nagar", interchange: false },
    { name: "Tilak Nagar", interchange: false },
    { name: "Janakpuri East", interchange: false },
    { name: "Janakpuri West", interchange: true }, // Magenta
    { name: "Uttam Nagar East", interchange: false },
    { name: "Uttam Nagar West", interchange: false },
    { name: "Nawada", interchange: false },
    { name: "Dwarka Mor", interchange: false },
    { name: "Dwarka", interchange: true }, // Grey
    { name: "Dwarka Sector 14", interchange: false },
    { name: "Dwarka Sector 13", interchange: false },
    { name: "Dwarka Sector 12", interchange: false },
    { name: "Dwarka Sector 11", interchange: false },
    { name: "Dwarka Sector 10", interchange: false },
    { name: "Dwarka Sector 9", interchange: false },
    { name: "Dwarka Sector 8", interchange: false },
    { name: "Dwarka Sector 21", interchange: true } // Airport Express
  ]
},
blueBranch: {
  name: "Blue Line (Branch Line)",
  color: "#0057FF",
  direction: "Yamuna Bank → Vaishali",
  platform: 1,

  stations: [
    { name: "Yamuna Bank", interchange: true }, // Main Blue
    { name: "Laxmi Nagar", interchange: false },
    { name: "Nirman Vihar", interchange: false },
    { name: "Preet Vihar", interchange: false },
    { name: "Karkarduma", interchange: true }, // Pink
    { name: "Anand Vihar", interchange: true }, // Pink, Rail, Bus
    { name: "Kaushambi", interchange: false },
    { name: "Vaishali", interchange: false }
  ]
},
green: {
  name: "Green Line",
  color: "#2E8B57",
  direction: "Indraprastha → Brigadier Hoshiyar Singh",
  platform: 1,

  stations: [

    // -------- Existing Operational Section --------
    { name: "Inderlok", interchange: true }, // Red
    { name: "Ashok Park Main", interchange: true }, // Green branch
    { name: "Punjabi Bagh East", interchange: false },
    { name: "Punjabi Bagh West", interchange: true }, // Pink
    { name: "Shivaji Park", interchange: false },
    { name: "Madipur", interchange: false },
    { name: "Paschim Vihar East", interchange: false },
    { name: "Paschim Vihar West", interchange: false },
    { name: "Peeragarhi", interchange: false }, // Magenta (future)
    { name: "Udyog Nagar", interchange: false },
    { name: "Maharaja Surajmal Stadium", interchange: false },
    { name: "Nangloi", interchange: false },
    { name: "Nangloi Railway Station", interchange: false },
    { name: "Rajdhani Park", interchange: false },
    { name: "Mundka", interchange: false },
    { name: "Mundka Industrial Area (MIA)", interchange: false },
    { name: "Ghevra Metro Station", interchange: false },
    { name: "Tikri Kalan", interchange: false },
    { name: "Tikri Border", interchange: false },
    { name: "Pandit Shree Ram Sharma (Modern Industrial Estate)", interchange: false },
    { name: "Bahadurgarh City (Bus Stand)", interchange: false },
    { name: "Brigadier Hoshiyar Singh (Bahadurgarh City Park)", interchange: false }
  ]
},
violet: {
  name: "Violet Line",
  color: "#230830",
  direction: "Kashmere Gate → Raja Nahar Singh",
  platform: 1,

  stations: [
    { name: "Kashmere Gate", interchange: true }, // Red, Yellow
    { name: "Lal Qila", interchange: false },
    { name: "Jama Masjid", interchange: false },
    { name: "Delhi Gate", interchange: false }, // Green (future)
    { name: "ITO", interchange: false },
    { name: "Mandi House", interchange: true }, // Blue
    { name: "Janpath", interchange: false },
    { name: "Central Secretariat", interchange: true }, // Yellow, Magenta
    { name: "Khan Market", interchange: false },
    { name: "Jawaharlal Nehru Stadium", interchange: false },
    { name: "Jangpura", interchange: true }, // RRTS
    { name: "Lajpat Nagar", interchange: true }, // Pink
    { name: "Moolchand", interchange: false },
    { name: "Kailash Colony", interchange: false },
    { name: "Nehru Place", interchange: false },
    { name: "Kalkaji Mandir", interchange: false }, // Magenta
    { name: "Govindpuri", interchange: false },
    { name: "Harkesh Nagar Okhla", interchange: false },
    { name: "Jasola Apollo", interchange: false },
    { name: "Sarita Vihar", interchange: false },
    { name: "Mohan Estate", interchange: false },
    { name: "Tughlakabad Station", interchange: false }, // Golden (future)
    { name: "Badarpur Border", interchange: false },
    { name: "Sarai", interchange: false },
    { name: "NHPC Chowk", interchange: false },
    { name: "Mewla Maharajpur", interchange: false },
    { name: "Sector 28", interchange: false },
    { name: "Badkal Mor", interchange: false },
    { name: "Old Faridabad", interchange: false },
    { name: "Neelam Chowk Ajronda", interchange: false },
    { name: "Bata Chowk", interchange: false },
    { name: "Escorts Mujesar", interchange: false },
    { name: "Sant Surdas - Sihi", interchange: false },
    { name: "Raja Nahar Singh", interchange: false }
  ]
},
airportExpress: {
  name: "Delhi Airport Express",
  color: "#FF8C00",
  direction: "New Delhi → Yashobhoomi Dwarka Sector 25",
  platform: 1,

  stations: [
    { name: "New Delhi", interchange: false }, // Yellow, Green (future)
    { name: "Shivaji Stadium", interchange: false },
    { name: "Dhaula Kuan", interchange: true }, // Pink (via skywalk)
    { name: "Delhi Aerocity", interchange: false }, // Golden (future)
    { name: "IGI Airport", interchange: true }, // Airport T3
    { name: "Dwarka Sector 21", interchange: true }, // Blue
    { name: "Yashobhoomi Dwarka Sector 25", interchange: false }
  ]
},
pink: {
  name: "Pink Line",
  color: "#E91E63",
  direction: "Majlis Park → Maujpur - Babarpur (Circular)",
  platform: 1,

  stations: [
    // -------- North & North-East (Future Extension) --------
    { name: "Maujpur - Babarpur", interchange: true }, // Self-loop / future
    { name: "Yamuna Vihar", interchange: false },
    { name: "Bhajanpura", interchange: false },
    { name: "Khajuri Khas", interchange: false },
    { name: "Sonia Vihar", interchange: false },
    { name: "Soorghat", interchange: false },
    { name: "Jagatpur Village", interchange: false },
    { name: "Jharoda Majra", interchange: false },
    { name: "Burari", interchange: false },

    // -------- North-West --------
    { name: "Majlis Park", interchange: true }, // Magenta
    { name: "Azadpur", interchange: true }, // Yellow, Magenta
    { name: "Shalimar Bagh", interchange: false },
    { name: "Netaji Subhash Place", interchange: true }, // Red
    { name: "Shakurpur", interchange: false },
    { name: "Punjabi Bagh West", interchange: true }, // Green
    { name: "ESI - Basaidarapur", interchange: false },
    { name: "Rajouri Garden", interchange: true }, // Blue
    { name: "Mayapuri", interchange: false },
    { name: "Naraina Vihar", interchange: false },
    { name: "Delhi Cantonment", interchange: false },

    // -------- South --------
    { name: "Durgabai Deshmukh South Campus", interchange: true }, // Airport Express
    { name: "Sir M. Vishweshwaraiah Moti Bagh", interchange: false },
    { name: "Bhikaji Cama Place", interchange: false },
    { name: "Sarojini Nagar", interchange: false },
    { name: "Dilli Haat - INA", interchange: true }, // Yellow
    { name: "South Extension", interchange: false },
    { name: "Lajpat Nagar", interchange: true }, // Violet
    { name: "Vinobapuri", interchange: false },
    { name: "Ashram", interchange: false },
    { name: "Sarai Kale Khan Nizamuddin", interchange: true }, // Rail, Bus

    // -------- East --------
    { name: "Mayur Vihar-I", interchange: true }, // Blue
    { name: "Mayur Vihar Pocket I", interchange: false },
    { name: "Trilokpuri Sanjay Lake", interchange: false },
    { name: "East Vinod Nagar - Mayur Vihar-II", interchange: false },
    { name: "Mandawali - West Vinod Nagar", interchange: false },
    { name: "IP Extension", interchange: false },
    { name: "Anand Vihar", interchange: true }, // Blue, Rail, Bus
    { name: "Karkarduma", interchange: true }, // Blue
    { name: "Karkarduma Court", interchange: false },
    { name: "Krishna Nagar", interchange: false },
    { name: "East Azad Nagar", interchange: false },
    { name: "Welcome", interchange: true }, // Red
    { name: "Jaffrabad", interchange: false }
  ]
},
magenta: {
  name: "Magenta Line",
  color: "#8E44AD",
  direction: "Indraprastha → Botanical Garden",
  platform: 1,

  stations: [
    // -------- Central / Future Approved Section --------
    { name: "Indraprastha", interchange: true }, // Blue, Green
    { name: "Bharat Mandapam", interchange: false },
    { name: "Baroda House", interchange: false },
    { name: "War Memorial–High Court", interchange: false },
    { name: "India Gate", interchange: false },
    { name: "Kartavya Bhawan", interchange: false },
    { name: "Central Secretariat", interchange: true }, // Yellow, Violet
    { name: "Shivaji Stadium", interchange: true }, // Airport Express

    // -------- North / Central --------
    { name: "Ramakrishna Ashram Marg", interchange: true }, // Blue
    { name: "Nabi Karim", interchange: false }, // Green (future)
    { name: "Sadar Bazar", interchange: false },
    { name: "Pul Bangash", interchange: true }, // Red
    { name: "Ghanta Ghar", interchange: false },
    { name: "Derawal Nagar", interchange: false },
    { name: "Ashok Vihar", interchange: false },
    { name: "Azadpur", interchange: true }, // Yellow, Pink
    { name: "Majlis Park", interchange: true }, // Pink
    { name: "Bhalaswa", interchange: false },

    // -------- North-West --------
    { name: "Haiderpur Badli Mor", interchange: false }, // Yellow
    { name: "Haiderpur Village", interchange: false },
    { name: "North Pitampura–Prashant Vihar", interchange: false },
    { name: "Madhuban Chowk", interchange: true }, // Red
    { name: "Deepali Chowk", interchange: false },
    { name: "Pushpanjali", interchange: false },
    { name: "West Enclave", interchange: false },
    { name: "Mangolpuri", interchange: false },
    { name: "Peeragarhi", interchange: true }, // Green
    { name: "Paschim Vihar", interchange: false },
    { name: "Meerabagh", interchange: false },
    { name: "Keshopur", interchange: false },

    // -------- West / South-West --------
    { name: "Krishna Park Extension", interchange: false },
    { name: "Janakpuri West", interchange: true }, // Blue
    { name: "Dabri Mor - Janakpuri South", interchange: false },
    { name: "Dashrath Puri", interchange: false },
    { name: "Palam", interchange: false },
    { name: "Sadar Bazaar Cantonment", interchange: false },
    { name: "Terminal 1-IGI Airport", interchange: false }, // Airport, Golden (future)
    { name: "Shankar Vihar", interchange: false },

    // -------- South --------
    { name: "Vasant Vihar", interchange: false },
    { name: "Munirka", interchange: false },
    { name: "R. K. Puram", interchange: false },
    { name: "IIT", interchange: false },
    { name: "Hauz Khas", interchange: true }, // Yellow
    { name: "Panchsheel Park", interchange: false },
    { name: "Chirag Delhi", interchange: false },
    { name: "Greater Kailash", interchange: false },
    { name: "Nehru Enclave", interchange: false },
    { name: "Kalkaji Mandir", interchange: false }, // Violet

    // -------- South-East --------
    { name: "Okhla NSIC", interchange: false },
    { name: "Sukhdev Vihar", interchange: false },
    { name: "Jamia Millia Islamia", interchange: false },
    { name: "Okhla Vihar", interchange: false },
    { name: "Jasola Vihar Shaheen Bagh", interchange: false },
    { name: "Kalindi Kunj", interchange: false },
    { name: "Okhla Bird Sanctuary", interchange: false },
    { name: "Botanical Garden", interchange: true } // Blue
  ]
},
grey: {
  name: "Grey Line",
  color: "#9E9E9E",
  direction: "Dwarka → Dhansa Bus Stand",
  platform: 1,

  stations: [
    { name: "Dwarka", interchange: true }, // Blue Line
    { name: "Nangli", interchange: false },
    { name: "Najafgarh", interchange: false },
    { name: "Dhansa Bus Stand", interchange: false }
  ]
}
};
