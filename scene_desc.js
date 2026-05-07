
/* ═══════════════════════════════════════════
   SCENE DATA
═══════════════════════════════════════════ */
export const SCENES = [
  {
    type: "narration",
    act: "ACT I",
    title: "The Emperor's Order",
    footer: "January 1665 · Mughal Court, Agra",
    audio: "murmur.ogg",
    // ADDED: media panel — map showing Agra and the Deccan theatre
    media: {
      type: "image",
      src: "durbar.webp",
      alt:"An image showing the durbar of Aurangzeb",
    },
    narration: [
      "The failure of Shaista Khan and the sack of Surat caused bitter mortification to Aurangzib and his Court, and he decided to send his ablest Hindu and Muhammadan generals to the Deccan.",
      "Among the promotions and transfers on his birthday, 30th September, 1664, the Emperor appointed Mirza Rajah Jai Singh to put down Shivaji.",
      "Under him were deputed Dilir Khan, Daud Khan Qureshi, Rajah Rai Singh Sisodia, Ihtisham Khan Shaikhzada, Qubad Khan, Rajah Sujan Singh Bundela, Kirat Singh, Mulla Yahia Nawaiyat, and many other officers, with 14,000 troopers. ",
      /*"After making the necessary preparations, Jai Singh left Upper India and crossed the Narmada at Handia on 9th January, 1665 arriving at Aurangabad on 10th February",
      "At Aurangabad, Prince Muazzam was holding Court as viceroy of the Deccan. In just three days Jai Singh finished the work of waiting on the Prince, receiving and returning the visits of the local officers and nobles, and settling some points connected with the expedition. " 
      I want you to put a map based on this commented info here*/
    ]
  },
  {
    type: "decision",
    act: "ACT II",
    title: "The Approach",
    deckMap: true,
    role: "You are Jai Singh II, Mirza Raja of Amber",
   
    narrative: "Your column has crossed the Narmada. The Deccan plateau opens before you. Shivaji's network of hill forts stretches from Pune to the Konkan coast. Your cavalry is strong, your artillery slow. The monsoon is four months away hence, time is your most precious resource.",
    question: "How do you approach the Maratha heartland?",
    footer: "February 1665 · Northern Deccan",
    options: [
  {
    text: "Advance into the Konkan and strike Shivaji’s coastal strongholds.",
    correct: false,
    explanation: "The Konkan’s dense forests and narrow ghats neutralise Mughal cavalry and artillery. Shivaji’s forces excelled in this terrain, and previous campaigns here had failed disastrously."
  },
  {
    text: "Launch a direct offensive into the Western Ghats against the hill forts.",
    correct: false,
    explanation: "The hill forts of the Ghats were designed for prolonged resistance. A direct assault would exhaust Mughal resources while exposing the army to guerrilla attacks by Shivaji’s Mavles."
  },
  {
    text: "Divide the army to simultaneously pressure Bijapur, Golkonda, and Shivaji.",
    correct: false,
    explanation: "With multiple enemies and difficult terrain, dividing forces would weaken Mughal strength. Shivaji could exploit interior lines and defeat isolated columns in detail."
  },
  {
    text: "Establish position in the eastern plains near Pune, between Shivaji and Bijapur.",
    correct: true,
    explanation: "Jai Singh chose to operate from the eastern plains, allowing mobility for cavalry, control over key routes, and the ability to threaten both Shivaji and Bijapur. This strategic positioning forced the Marathas into a defensive situation."
  }
]
  },
  /*Here, another map showing the Maratha empire, Golkondas and bijapur and the relative position of saswad where he set up his base later*/
  {
    
    type: "narration",
    act: "ACT III",
    title: "The Western Ghats",
    footer: "March, 1665 · Sahyadri Ranges",
    deckMap: true,
    audio: "audio1.ogg",
    narration: [
      
      "In Western Maharashtra with its heavy rainfall, campaigning is impossible during the monsoons. It was already 3rd March when Jai Singh reached Puna, and if he was to effect anything it must be done in the next three months. ",
      "The Western Ghats form a long towering wall running north to south along the western side of the Deccan. They have thrown off a number of short spurs eastwards, every two of which enclose a valley, the bed of some stream rolling east to join its sisters and form the mighty rivers of the south, the Godavari and the Krishna. ",
      "Towards the east the spurs end, the valleys widen out and merge in the vast plains of the kingdom of Bijapur and this is the cradle of the Maratha kingdom, open  and therefore vulnerable, on the east, it is almost impenetrable from the west on account of hills and jungles .",
      "And it is in the west that the historic forts of Shivaji are situated, almost every peak being crowned with the Maratha eagle's eyrie",
      /*Here too just refer to the main text and then we can think of a static map again showing different locations.*/
    ]
  },
  {
    type: "narration",
    act: "ACT IV",
    title: "The Purandar Fort",
    footer: "1665 · Purandar Fort",
    // ADDED: map showing Purandar geography
    deckMap: true,
    narration: [
      "Six miles south of Saswad rises the stupendous mountain mass of Purandar, the highest point of which towers 4,364 feet above sea-level and more than 2,500 feet above the plain at its foot. It is really a double fort, with an independent and very strong sister enclosure, named Vajragarh. on a ridge running out east of it.",
      "The Western Ghats form a long towering wall running north to south along the western side of the Deccan. They have thrown off a number of short spurs eastwards, every two of which enclose a valley, the bed of some stream rolling east to join its sisters and form the mighty rivers of the south, the Godavari and the Krishna. ",
      "Purandar consists of an upper fort or citadel with precipitous sides all around and a lower fort or machi, 300 feet or more below it. The latter is a ledge running round the waist of the hill with many a winding, the entire circuit being four miles.",
      "On the north side the ledge widens out into a broad terrace, containing the barracks and offices of the garrison. This terrace is bounded on the east by the high spur named Bhairav Khind, which starts from the base of the steep overhanging north-eastern tower (called Khand-kala) of the upper fort, and runs for about a mile eastwards in a narrow ridge, ending in a small tableland (3,618 feet above sea-level), crowned with the fort of Rudramala, (Vajragarh)",
      "This Vajragarh commands the machi or lower fort of Purandar on its northern and most important face, as the garrison has to live here.",
      /*Here too just refer to the main text and then we can think of a static map again showing different locations.*/
    ]
  },
  {
    type: "decision",
    act: "ACT V",
    title: "The First Attack",
    deckMap: true,
    role: "You are Jai Singh II, Mirza Raja of Amber",
    narrative: "Before you rises Purandar, a formidable double fortress. Its upper citadel stands atop sheer precipices, nearly impossible to storm directly. Below it lies the machi, a sprawling fortified terrace housing the garrison. Yet to the east, along a narrow ridge, stands Vajragarh, a smaller but commanding fort overlooking Purandar’s most vital approaches. The geography is clear: whoever holds Vajragarh holds the key to Purandar. A direct assault would be costly, but time is limited and the monsoon approaches.",
    question: "Where do you attack first?",
    footer: "1665 · Saswad",
   options: [
  {
    text: "Launch a direct assault on Purandar’s main fortifications.",
    correct: false,
    explanation: "Purandar’s upper citadel rises behind steep, nearly vertical slopes, making a direct assault extremely costly and likely to fail. Its defenses are designed to withstand frontal attacks, and the garrison could hold out while inflicting heavy losses."
  },
  {
    text: "Capture Vajragarh first to command Purandar’s lower defenses.",
    correct: true,
    explanation: "Vajragarh overlooks the machi, where Purandar’s garrison resides. By capturing it, Jai Singh could place artillery above the Maratha positions and bombard the lower fort effectively. Historically, this strategic move allowed the Mughals to break Purandar’s defenses."
  }
]
  },
  {
    type: "narration",
    act: "ACT VI",
    title: "The Siege Begins",
    footer: "March - April, 1665 · Vajragad",
    deckMap: true,
    narration: [
      "Dilir Khan with his nephews and Afghan troops, Hari Bhan and Udai Bhan Gaur, entrenched between Purandar and Rudramal. In front of him were the chief of the artillery, Turktaz Khan, and the party sent by Jai Singh.",
      "Kirat Singh with the 3,000 troopers of the Rajah and a few other mansabdars made a stockade opposite the north gate of Purandar. On the right were the trenches of Rajah Narsingh Gaur, Karn Rathor, among others. Behind Purandar and facing its postern gate (khirfy) was the position of Daud Khan, Rajah Rai Singh, Md. Salih Tarkhan, among others. ",
      "To the right of this position were posted Rasul Beg Rozbhani and his Rozbhani followers. Opposite Rudramal, Chaturbhuj Chauhan with a party of Dilir Khan's followers entrenched, and behind these Mitrasen, Indraman Bundela and some other officers.",
      "Jai Singh removed his quarters from the camp to the foot of the hill to be nearer the besieged fort, while the soldiers pitched their tents along the hill-side. He visited the trenches every day, encouraged his men, and supervised the progress of the siege. ",
      "At first all his efforts were directed to dragging guns to the top of the steep and difficult hill. It took three days to raise a gun, named Abdullah Khan, and mount it opposite Rudramal. In 3½ days more a second gun, named Fath Lashkar, was taken there. A third, named Haheli, was painfully approaching the summit. The incessant bombardment of the Mughals demolished the bases of the tower in front, and pioneers were sent to its foot to dig a hole underneath."
    ]
  },
  {
    type: "narration",
    act: "ACT VII",
    title: "Capture of Vajragarh",
    deckMap: true,
    footer: "April, 1665 · Vajragad",
    narration: [
      "At midday, 13th April, Dilir Khan's division stormed the tower and drove the enemy into an enclosure behind it. ",
      "Next day, the victorious Mughals pushed on to the inner enclosure and tried to capture it by escalade. The garrison, oppressed by their fire, capitulated in the evening (14th April), left the fort, and were disarmed. But Jai Singh very wisely allowed them to return home in order to tempt the garrison of Purandar, by this example of leniency, to surrender instead of fighting to the last.",
      "The possession of Vajragarh was the stepping-stone to the capture of Purandar, or in Jai Singh's own language, 'the key that would unlock Purandar'. ",
      "Dilir Khan now turned to the latter fort, while Jai Singh organised raids into the Maratha country, in order, as he wrote to the Emperor, to convince Shiva and the Sultan of Bijapur that the Mughal army was large enough to be able to spare troops from the siege, and also to prevent any concentration of forces round Shivaji by creating constant terror and disturbance in various parts of his kingdom.",
    ]
  },
  {
    type: "decision",
    act: "ACT VIII",
    title: "Capture of Vajragarh",
    deckMap: true,
    role: "You are Jai Singh II, Mirza Raja of Amber",
    narrative: "Before you rises Purandar, a formidable double fortress. Its upper citadel stands atop sheer precipices, nearly impossible to storm directly. Below it lies the machi, a sprawling fortified terrace housing the garrison. Yet to the east, along a narrow ridge, stands Vajragarh, a smaller but commanding fort overlooking Purandar’s most vital approaches. The geography is clear: whoever holds Vajragarh holds the key to Purandar. A direct assault would be costly, but time is limited and the monsoon approaches.",
    question: "A key officer is failing in duty and spreading doubt about the siege. What do you do?",
    footer: "May, 1665 · Vajragarh",
options: [
  {
    text: "Ignore his conduct and allow him to continue at his post.",
    correct: false,
    explanation: "He had already shown negligence by allowing Marathas to enter through the postern gate. Ignoring such behaviour would weaken discipline and endanger the siege."
  },
  {
    text: "Publicly punish or dismiss him to set an example.",
    correct: false,
    explanation: "While punishment might restore discipline, it risks creating factional conflict within the Mughal command. Jai Singh preferred controlled reallocation over open confrontation."
  },
  {
    text: "Replace him with other officers, but keep him within the siege camp.",
    correct: false,
    explanation: "Jai Singh initially reassigned positions, but Daud Khan (officer in question) continued to spread discouragement and disrupt operations. Simply shifting roles did not remove the underlying problem."
  },
  {
    text: "Reassign him away from the siege and send him to lead a separate raiding column.",
    correct: true,
    explanation: "Jai Singh removed the source of disruption without provoking open conflict by assigning Daud Khan to an independent flying column. This preserved unity in the siege command while neutralising internal dissent."
  }
]},
  {
    type: "narration",
    act: "ACT IX",
    deckMap: true,
    title: "Storming of the Outworks of Purandhar",
    footer: "May, 1665 · Purandhar",
     
    narration: [
      "When, in the course of May, the Mughal trenches reached the foot of the two White Towers, which had been dismantled by bombardment, the garrison began to throw down lighted naphtha oil, leather bags full of gunpowder, bombs and heavy stones which effectually stopped the further advance of the Mughals",
      "Jai Singh ordered a high wooden platform of logs and planks to be made, on which guns were to be mounted and parties of gunners and musketeers placed, to command the enemy's position.",
      "Over the course of a few days, the wooden structure was completed and two small pieces of cannon were mounted on it. The stockade was untenable, and they retired to the trenches behind it. Thus, five towers and one stockade of the lower fort fell into the hands of the Mughals.",
      "Purandar now seemed doomed. And, as if to complete its destruction, the Emperor had at Jai Singh's request despatched a train of very heavy artillery which were now on the way to the fort. The garrison had originally numbered only 2,000 against at least ten times that number of Mughals, and they had suffered heavy casualties during two months of incessant fighting. ",
      "Unfortunately, early in the siege they had lost their gallant commandant Murar Baji Prabhu.",
      
    ]
  },
{
    type: "decision",
    act: "ACT X",
    title: "Treaty of Purandhar",
    role: "You are Shivaji, the ruler of Maratha Empire",
    narrative: "Purandar is closely invested, the garrison has been wofully thinned by two months of fighting, and now the capture of five bastions of the lower fort made the stronghold untenable. ",
    question: "What will you do?",
    footer: "June, 1665 · Purandar",
options: [
  {
    text: "Prolong the resistance.",
    correct: false,
    explanation: ""
  },
  {
    text: "Negotiate with jai Singh.",
    correct: true,
    explanation: "The families of the Maratha officers were sheltered in Purandar, and its capture would mean their captivity and dishonour. He had also failed to prevent the Mughal flying columns from ravaging his country. "
  },
 
]},
{
  type: "narration",
  act: "ACT XI",
  title: "The Treaty of Purandar",
  deckMap: true,
  footer: "June 1665 · Purandar",
  narration: [
    "Shivaji agreed to cede 23 forts to the Mughal Empire, yielding an annual revenue of four lakh hun.",
    "He was allowed to retain 12 forts, including Rajgarh, with a reduced revenue of one lakh hun.",
    "He accepted Mughal supremacy, but refused to attend the imperial court in person.",
    "Instead, his son Sambhaji would serve the Emperor with a contingent of 5,000 cavalry.",
    "Shivaji agreed to assist the Mughals in their Deccan campaigns when required.",
    "He committed 2,000 cavalry under Sambhaji and 7,000 infantry under his own command.",
    "He proposed a conditional agreement: if granted territories in Konkan and Balaghat, he would pay 40 lakh hun in installments.",
    "These lands were to be conquered from Bijapur by Shivaji himself.",
    "Jai Singh’s strategy created a rift between Shivaji and Bijapur, turning former adversaries into rivals.",
    "The Mughals gained revenue, reduced military burden, and shifted the conflict onto Shivaji."
  ]
},
{
  type: "narration",
  act: "ACT XII",
  title: "After Purandar",
  deckMap: true,
  footer: "June 1665 – January 1666",
  narration: [
    "12 June 1665: The Treaty is enforced; Purandar is surrendered, and Mughal forces take possession of the fort.",
    "12 June 1665: Thousands of Maratha troops and families evacuate the fort, while Mughal officers take control of remaining strongholds.",
    "14–18 June 1665: Shivaji returns to Rajgarh, while Sambhaji is sent to the Mughal camp to enter imperial service.",
    "23 June 1665: Aurangzeb ratifies the treaty at Delhi, formally accepting Shivaji’s submission.",
    "September 1665: Shivaji is restored to imperial favour and ceremonially receives Mughal honours in Jai Singh’s camp.",
    "November 1665: January 1666: Shivaji joins Jai Singh in the Bijapur campaign, marking his transition from adversary to Mughal ally.",
    "January 1666: Shivaji attempts to capture Panhala but is repulsed after heavy losses, forcing a retreat to Vishalgarh."
  ]
},
{
  type: "decision",
  act: "ACT XIII",
  title: "The Journey to Agra",
  deckMap: true,
  role: "You are Shivaji Bhonsle",
  narrative: "The Treaty of Purandar has been signed, but a greater test lies ahead. Jai Singh urges you to visit Aurangzeb’s court at Agra. You have never bowed before any ruler, and your people distrust the Mughal Emperor. Your council is divided and the decision is yours alone.",
  
  question: "Will you go to the Mughal Court at Agra?",
  
  options: [
    {
      text: "Go to Agra and meet Aurangzeb.",
      correct: "true",
      explanation: "Despite the risks, the journey offers immense political opportunity. A personal audience could secure imperial recognition, territorial gains, and influence in Deccan affairs. Trusting Jai Singh’s assurances, you choose to take the calculated risk."
    },
    {
      text: "Refuse to go and remain in the Deccan.",
      correct: "false",
      explanation: "You have strong reasons to distrust Aurangzeb. The Mughal court is a place of intrigue and possible treachery, and you have never served under any ruler. Avoiding the journey preserves your independence and prevents the danger of falling into imperial captivity. But then, it might result into moreproblms with the Mughal sultanate."
    }
  ]
},
{
  type: "narration",
  act: "ACT XIV",
  title: "Agra: Humiliation and Captivity",
  deckMap: true,
  footer: "May–August 1666 · Agra",
  narration: [
    "12 May 1666: Shivaji enters the Diwan-i-Am at Agra on Aurangzeb’s fiftieth lunar birthday, amid imperial splendor, expecting honour after Purandar and service in the Bijapur campaign.",
    
    "Instead of receiving distinction, he is placed among third-rank nobles beside commanders of five thousand, a station he sees as a calculated public slight to his status and achievements.",
    
    "Enraged at the insult, Shivaji openly protests to Ram Singh, refuses to accept the humiliation, and in the charged atmosphere of the court collapses amid astonished courtiers.",
    
    "Removed from the darbar, Shivaji returns convinced that imperial promises have been broken. The hope of political advancement at the Mughal court begins to dissolve.",
    
    "Aurangzeb soon places him under guarded residence in Jaipur House, with Ram Singh made responsible for his custody; Shivaji realizes he is no honoured ally, but effectively a prisoner.",
    
    "Through Raghunath Pant Korde and other agents, Shivaji attempts diplomacy, offering aid in conquering Bijapur and Golkonda, and even seeking private audience with the Emperor. Alas, each petition is evaded or denied.",
    
    "He tries to win over influential nobles like Jafar Khan, but imperial suspicion only deepens; rumours of Shivaji’s cunning and past exploits make even private meetings impossible.",
    
    "Fulad Khan then places armed guards and artillery around Shivaji’s residence, transforming guarded hospitality into open captivity and extinguishing hopes of release through negotiation.",
    
    "For nearly three months Shivaji endures confinement, uncertainty, and growing danger, while outwardly submitting and inwardly studying every weakness in the system around him.",
    
    "As diplomacy fails and surveillance tightens, the struggle changes in character, the contest is no longer for honour at court, but for survival and the idea of escape begins to take shape."
  ]

},
{
  type: "narration",
  act: "ACT XV",
  title: "Escape from Agra",
  deckMap: true,
  footer: "August 1666 · Agra to the Deccan",
  narration: [
    "With every appeal for release rejected and surveillance growing tighter, Shivaji abandoned hope in diplomacy and quietly began preparing his escape while feigning illness and submission.",
    
    "For days, baskets of sweets were sent from his residence to Brahmans and mendicants, until the guards, accustomed to the routine, ceased to search them with suspicion.",
    
    "On 19 August 1666, the plan was executed: while Hiraji Farzand lay in Shivaji’s bed sustaining the deception, Shivaji and Sambhaji concealed themselves in two baskets and passed unnoticed through the Mughal cordon.",
    
    "Once beyond Agra, the fugitives emerged at a lonely rendezvous, mounted waiting horses, adopted the disguise of wandering ascetics, and began their journey toward Mathura as the party split to confuse pursuit.",
    
    "Only the following day was the deception discovered. Aurangzib ordered a vast search across the roads to the Deccan, but Shivaji had already gained a decisive lead over imperial pursuit.",
    
    "Through disguise, speed and stratagem, he escaped the heart of the Mughal Empire, and the Agra flight entered history as one of Shivaji’s most celebrated acts of daring."
  ]
},
{
  type: "narration",
  act: "ACT XVI",
  title: "The Route",
  footer: "August 1666 · Agra to the Deccan",
  audio: "horse.ogg",
  // ADDED: escape route map
  deckMap: true,
  narration: [
    "With consummate cunning Shiva threw his pursuers off the scent, by following a route exactly opposite to that which leads to Maharashtra. ",
    
    "Instead of moving due south-west from Agra. through Malwa and Khandesh or Gujrat, he travelled eastwards to Mathura, Allahabad, Benares, Gay a, and Puri, and then south-westwards through Gondwana and Golkonda, describing a vast loop round India before returning to Rajgarh.",
    
    "Shivaji had crammed the hollow core of a sannyasi's staff with gems and gold coins. Some more money was concealed in his shoes, and a diamond of great value and several rubies coated with wax were sewn in the dresses of his servants or carried in their mouths. ",
    
    "At Mathura, which was reached within six hours of leaving Agra, he shaved off his beard and moustaches, smeared himself with ashes, and put on the disguise of sannyasis. Travelling in the darkness of the night with swift Deccani couriers, who were practised in the art of moving in various disguises and assumed characters, he rapidly left the capital behind him. Forty or fifty of his servants accompanied him divided into three parties and dressed as monks of the three Hindu orders, Bairagis, Gosains, and Udasis.",
    
    "The fugitives pursued their way, constantly changing their disguise, sometimes passing for religious mendicants, sometimes as petty traders, and escaped detection because no one dreamt of their going to the eastern provinces of India while their destination was the west. They, however, had some hairbreadth escapes.",
    
  ]
},
{
  type: "narration",
  act: "ACT XVII",
  title: "The Route",
  deckMap: true,
  footer: "August 1666 · Agra to the Deccan",
  narration: [
    "In one town they were arrested on suspicion by the faujdar Ali Quli, who had learnt of Shivaji's flight from a letter of his Court agent before he received the official intimation of it. A close examination of the prisoners was begun.",
    
    "But at midnight Shivaji met the faujdar in private, boldly disclosed his identity and offered him a diamond and a ruby worth a lakh of Rupees as 'the price of his liberation'. The faujdar preferred the bribe to his duty.",
    
    "After performing his bath at the junction of the Ganges and Jamuna at Allahabad, Shivaji proceeded to Benares. Here he hurriedly went through all the rites of a pilgrim in the dim morning twilight and slipped out of the town just as a courier arrived from Agra with the proclamation for his arrest and a hue and cry was started",
    
    "Still moving eastwards, he visited the famous shrine of (Hindu) Gaya and was joined by two of his men whom he had sent there beforehand. Then they started for the temple of Jagannath at Puri on the seashore of Orissa.",
        
  ]
},
{
  type: "narration",
  act: "ACT XVIII",
  deckMap: true,
  title: "Homecoming",
  footer: "End of December, 1666 · Rajgarh",
  audio: "tutari.ogg",
  narration: [
    "Towards the end of December 1666, Shivaji returned at last to Rajgad in the garb of a wandering ascetic. Led into Jijabai’s presence as an unknown Bairagi, he fell at her feet; only when he laid his head in her lap did the mother recognize the son she had feared lost.",
    
    "Rajgad erupted in joy. After months of captivity, pursuit and uncertainty, Shivaji’s return felt to his people less like the arrival of a king than the return of one rescued by destiny.",
    
    "Yet the danger was not fully past. To shield Sambhaji from Mughal suspicion, Shivaji spread the false news of his son’s death and even observed mourning, while quietly preparing for the prince’s return.",
    
    "Months later Sambhaji too was brought back in disguise from Mathura, protected by loyal companions who carried him safely through Mughal outposts until father and son were reunited once more in Maharashtra.",
    
    "Shivaji did not forget those who had made the escape possible. He richly rewarded the faithful companions of Agra, honouring their loyalty, as the tale of captivity, escape and homecoming passed into legend."
  ]
},
];