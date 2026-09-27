// WRITTEN BY ME

const sources = {
  alerts: {
    source: "Ready.gov",
    sourceTopic: "Emergency Alerts and Preparedness",
    sourceUrl: "https://www.ready.gov/"
  },

  plan: {
    source: "American Red Cross",
    sourceTopic: "Make a Plan",
    sourceUrl:
      "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/make-a-plan.html"
  },

  kit: {
    source: "American Red Cross",
    sourceTopic: "Survival Kit Supplies",
    sourceUrl:
      "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/survival-kit-supplies.html"
  },

  personalKit: {
    source: "CDC",
    sourceTopic: "Building an Emergency Kit",
    sourceUrl:
      "https://www.cdc.gov/disability-emergency-preparedness/people-with-disabilities/build-a-kit.html"
  },

  personalNeeds: {
    source: "CDC",
    sourceTopic: "Personal Needs",
    sourceUrl:
      "https://www.cdc.gov/prepare-your-health/take-action/personal-needs.html"
  },

  earthquakeDuring: {
    source: "CDC",
    sourceTopic: "Safety Guidelines: During an Earthquake",
    sourceUrl:
      "https://www.cdc.gov/earthquakes/safety/stay-safe-during-an-earthquake.html"
  },

  earthquakeAfter: {
    source: "CDC",
    sourceTopic: "Safety Guidelines: After an Earthquake",
    sourceUrl:
      "https://www.cdc.gov/earthquakes/safety/stay-safe-after-an-earthquake.html"
  },

  earthquakeBefore: {
    source: "CDC",
    sourceTopic: "Preparing for Earthquakes",
    sourceUrl:
      "https://www.cdc.gov/earthquakes/safety/index.html"
  },

  earthquakeAdaptations: {
    source: "New Zealand Civil Defence",
    sourceTopic: "Drop, Cover and Hold",
    sourceUrl:
      "https://getready.govt.nz/emergency/earthquakes/drop-cover-hold"
  },

  flood: {
    source: "National Weather Service",
    sourceTopic: "During a Flood",
    sourceUrl:
      "https://www.weather.gov/safety/flood-during"
  },

  floodwater: {
    source: "CDC",
    sourceTopic: "Safety Guidelines: Floodwater",
    sourceUrl:
      "https://www.cdc.gov/floods/safety/floodwater-after-a-disaster-or-emergency-safety.html"
  },

  lightning: {
    source: "National Weather Service",
    sourceTopic: "Lightning Tips",
    sourceUrl:
      "https://www.weather.gov/safety/lightning-tips"
  },

  storm: {
    source: "National Weather Service",
    sourceTopic: "What to Do During Severe Weather",
    sourceUrl:
      "https://www.weather.gov/safety/thunderstorm-during"
  },

  fireResponse: {
    source: "American Red Cross",
    sourceTopic: "What To Do if a Fire Starts",
    sourceUrl:
      "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/types-of-emergencies/fire/if-a-fire-starts.html"
  },

  alarms: {
    source: "U.S. Fire Administration",
    sourceTopic: "Smoke Alarms",
    sourceUrl:
      "https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/smoke-alarms/"
  },

  escape: {
    source: "U.S. Fire Administration",
    sourceTopic: "Home Fire Escape Plans",
    sourceUrl:
      "https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/home-fire-escape-plans/"
  },

  firstAid: {
    source: "American Red Cross",
    sourceTopic: "First Aid Steps",
    sourceUrl:
      "https://www.redcross.org/take-a-class/first-aid/performing-first-aid/first-aid-steps"
  },

  emergencyActions: {
    source: "American Red Cross",
    sourceTopic: "Check, Call, Care",
    sourceUrl:
      "https://www.redcross.org/take-a-class/resources/articles/the-three-cs-of-first-aid-check-call-care"
  },

  skills: {
    source: "CDC",
    sourceTopic: "Practical Skills",
    sourceUrl:
      "https://www.cdc.gov/prepare-your-health/take-action/practical-skills.html"
  },

  burns: {
    source: "American Red Cross",
    sourceTopic: "Burns: How To Help",
    sourceUrl:
      "https://www.redcross.org/take-a-class/resources/learn-first-aid/burns"
  },

  cpr: {
    source: "American Red Cross",
    sourceTopic: "CPR Steps",
    sourceUrl:
      "https://www.redcross.org/take-a-class/cpr/performing-cpr/cpr-steps"
  },

  cleanup: {
    source: "CDC",
    sourceTopic: "Guidelines for Cleaning Safely After a Disaster",
    sourceUrl:
      "https://www.cdc.gov/natural-disasters/safety/index.html"
  },

  returningHome: {
    source: "CDC",
    sourceTopic: "Returning Home After a Natural Disaster",
    sourceUrl:
      "https://www.cdc.gov/natural-disasters/safety/returning-home-after-natural-disaster.html"
  },

  food: {
    source: "CDC",
    sourceTopic: "Keep Food Safe After a Disaster or Emergency",
    sourceUrl:
      "https://www.cdc.gov/food-safety/foods/keep-food-safe-after-emergency.html"
  },

  coping: {
    source: "Ready.gov",
    sourceTopic: "Coping with Disaster",
    sourceUrl:
      "https://www.ready.gov/coping-with-disaster"
  }
};

export const questions = [
  // GENERAL PREPAREDNESS — 10 QUESTIONS

  {
    id: 1,
    category: "general",
    difficulty: "easy",
    question:
      "What should a household decide about emergency alerts before a disaster?",
    options: [
      "Which neighbour will always warn everyone",
      "How to receive official warnings",
      "Which social media rumour to follow first",
      "How long to wait before checking warnings"
    ],
    answer: "How to receive official warnings",
    explanation:
      "Official alerts provide urgent information. Know how your local authorities issue warnings.",
    ...sources.alerts
  },

  {
    id: 2,
    category: "general",
    difficulty: "easy",
    question:
      "Which device can receive broadcasts without mains electricity?",
    options: [
      "A television without backup power",
      "A desktop computer without backup power",
      "A battery-powered or hand-crank radio",
      "A plug-in speaker on its own"
    ],
    answer: "A battery-powered or hand-crank radio",
    explanation:
      "This type of radio can receive updates during a power outage.",
    ...sources.kit
  },

  {
    id: 3,
    category: "general",
    difficulty: "medium",
    question:
      "Why might two households need different emergency supplies?",
    options: [
      "Their members may have different medical and accessibility needs",
      "Only large households need emergency supplies",
      "A kit should contain only items used by everyone",
      "A standard kit always covers every person's needs"
    ],
    answer:
      "Their members may have different medical and accessibility needs",
    explanation:
      "A kit should account for the daily supplies and support each person needs.",
    ...sources.personalKit
  },

  {
    id: 4,
    category: "general",
    difficulty: "medium",
    question:
      "What should a household plan before an evacuation?",
    options: [
      "Only the shortest route home",
      "A destination without checking how to reach it",
      "One route with no alternatives",
      "Safe destinations, routes, and meeting places"
    ],
    answer: "Safe destinations, routes, and meeting places",
    explanation:
      "Planning destinations and alternative routes helps when usual roads or your home are inaccessible.",
    ...sources.plan
  },

  {
    id: 5,
    category: "general",
    difficulty: "hard",
    question:
      "Local phone networks are overloaded and your family is separated. Which earlier plan would help?",
    options: [
      "Depending entirely on one group video call",
      "Choosing an out-of-area contact and meeting locations",
      "Agreeing to return home regardless of conditions",
      "Keeping contact details on only one person's phone"
    ],
    answer:
      "Choosing an out-of-area contact and meeting locations",
    explanation:
      "An outside contact may be easier to reach. Agreed meeting places provide another way to reconnect.",
    ...sources.plan
  },

  {
    id: 6,
    category: "general",
    difficulty: "hard",
    question:
      "Which preparation gives a household several communication options during an outage?",
    options: [
      "A television and a single online contact list",
      "Several phones with nearly empty batteries",
      "A battery radio, phone charging supplies, and written contacts",
      "A home Wi-Fi router without backup power"
    ],
    answer:
      "A battery radio, phone charging supplies, and written contacts",
    explanation:
      "Different tools provide backup ways to receive information and contact others.",
    ...sources.kit
  },

  {
    id: 37,
    category: "general",
    difficulty: "easy",
    question:
      "When should an emergency kit be checked?",
    options: [
      "Only after everything has been used",
      "Only when moving house",
      "Never after it has been packed",
      "Regularly, to check supplies and equipment"
    ],
    answer: "Regularly, to check supplies and equipment",
    explanation:
      "Supplies can expire or stop working. CDC recommends checking kits every six months.",
    ...sources.personalKit
  },

  {
    id: 38,
    category: "general",
    difficulty: "medium",
    question:
      "A household member uses hearing aids. What belongs in their emergency planning?",
    options: [
      "Suitable batteries or charging arrangements",
      "A plan to stop using the hearing aids",
      "Only the same supplies as everyone else",
      "Waiting until evacuation to consider their needs"
    ],
    answer: "Suitable batteries or charging arrangements",
    explanation:
      "Backup power for assistive equipment helps maintain access and communication.",
    ...sources.personalKit
  },

  {
    id: 39,
    category: "general",
    difficulty: "medium",
    question:
      "Someone in your household has a food allergy. How should this affect emergency supplies?",
    options: [
      "Store any food because allergies do not matter in emergencies",
      "Choose suitable foods that meet their needs",
      "Assume shelters will always have every suitable food",
      "Leave all food out of the kit"
    ],
    answer: "Choose suitable foods that meet their needs",
    explanation:
      "Emergency food planning should include allergies and other dietary requirements.",
    ...sources.personalNeeds
  },

  {
    id: 40,
    category: "general",
    difficulty: "hard",
    question:
      "Your planned evacuation road is closed. What should your preparation allow you to do?",
    options: [
      "Continue past the closure",
      "Wait on the closed road for other drivers",
      "Use a safe alternative route and current official directions",
      "Choose an unfamiliar shortcut without checking conditions"
    ],
    answer:
      "Use a safe alternative route and current official directions",
    explanation:
      "Backup routes help when roads are impassable; current safety directions still take priority.",
    ...sources.plan
  },

  // EARTHQUAKE PREPAREDNESS — 10 QUESTIONS

  {
    id: 7,
    category: "earthquake",
    difficulty: "easy",
    question:
      "For someone able to get down safely, what is the recommended action when earthquake shaking begins indoors?",
    options: [
      "Drop, Cover, and Hold On",
      "Run downstairs",
      "Stand beside a window",
      "Rush outside"
    ],
    answer: "Drop, Cover, and Hold On",
    explanation:
      "Getting low and taking cover helps protect against falls and falling objects.",
    ...sources.earthquakeAdaptations
  },

  {
    id: 8,
    category: "earthquake",
    difficulty: "easy",
    question:
      "Which areas should you especially protect during earthquake shaking?",
    options: [
      "Only your hands",
      "Only your feet",
      "Only your knees",
      "Your head and neck"
    ],
    answer: "Your head and neck",
    explanation:
      "Cover these areas while taking shelter from falling objects.",
    ...sources.earthquakeAdaptations
  },

  {
    id: 9,
    category: "earthquake",
    difficulty: "medium",
    question:
      "You are in bed when earthquake shaking begins. What is generally recommended?",
    options: [
      "Run barefoot to the stairs",
      "Stay in bed and protect your head and neck with a pillow",
      "Move to a window to look outside",
      "Stand in the nearest doorway"
    ],
    answer:
      "Stay in bed and protect your head and neck with a pillow",
    explanation:
      "Remaining in bed avoids moving across a floor that may contain debris.",
    ...sources.earthquakeDuring
  },

  {
    id: 10,
    category: "earthquake",
    difficulty: "easy",
    question:
      "What may happen after the main earthquake ends?",
    options: [
      "All damaged structures immediately become stable",
      "All utilities automatically become safe",
      "Aftershocks",
      "A guaranteed period without further shaking"
    ],
    answer: "Aftershocks",
    explanation:
      "Further earthquakes can follow the main event, so remain ready to protect yourself.",
    ...sources.earthquakeAfter
  },

  {
    id: 11,
    category: "earthquake",
    difficulty: "medium",
    question:
      "Why is rushing outside during earthquake shaking usually unsafe?",
    options: [
      "Glass and building materials may fall near exits",
      "Earthquakes only affect outdoor spaces",
      "Standing is always safer than taking cover",
      "Buildings stop shaking when doors are closed"
    ],
    answer: "Glass and building materials may fall near exits",
    explanation:
      "Areas close to exterior walls can expose people to falling debris.",
    ...sources.earthquakeDuring
  },

  {
    id: 12,
    category: "earthquake",
    difficulty: "hard",
    question:
      "After an earthquake, you see damage around a building entrance. Someone wants to retrieve a bag. What is safest?",
    options: [
      "Go in together so nobody is alone",
      "Enter if the lights still work",
      "Stand beneath the entrance while deciding",
      "Stay away and wait for an official safety assessment"
    ],
    answer:
      "Stay away and wait for an official safety assessment",
    explanation:
      "A damaged building may be unstable even when belongings appear easy to reach.",
    ...sources.earthquakeAfter
  },

  {
    id: 41,
    category: "earthquake",
    difficulty: "medium",
    question:
      "You are outdoors when shaking begins. Which nearby location is safer?",
    options: [
      "Beside a building's exterior wall",
      "An open area away from buildings and overhead wires",
      "Under a large shop window",
      "Beneath a utility pole"
    ],
    answer:
      "An open area away from buildings and overhead wires",
    explanation:
      "Open space reduces exposure to falling objects. Get low once there.",
    ...sources.earthquakeDuring
  },

  {
    id: 42,
    category: "earthquake",
    difficulty: "hard",
    question:
      "A wheelchair user cannot safely transfer to the floor during shaking. What is recommended?",
    options: [
      "Try to stand immediately",
      "Leave the wheels unlocked",
      "Lock the wheels and protect the head and neck as able",
      "Move towards a window"
    ],
    answer:
      "Lock the wheels and protect the head and neck as able",
    explanation:
      "Earthquake protection should be adapted to the person's mobility and abilities.",
    ...sources.earthquakeAdaptations
  },

  {
    id: 43,
    category: "earthquake",
    difficulty: "easy",
    question:
      "Where should heavy household objects generally be stored to reduce earthquake hazards?",
    options: [
      "On lower shelves",
      "Above beds",
      "On the highest open shelves",
      "Balanced on top of tall cupboards"
    ],
    answer: "On lower shelves",
    explanation:
      "Lower placement reduces the hazard from heavy objects falling from above.",
    ...sources.earthquakeBefore
  },

  {
    id: 44,
    category: "earthquake",
    difficulty: "hard",
    question:
      "An earthquake has stopped, but a fallen power line crosses your route. What should you do?",
    options: [
      "Step over it without touching it",
      "Move it with an object",
      "Assume it is safe because nearby lights are off",
      "Stay clear and report it to the electricity provider"
    ],
    answer:
      "Stay clear and report it to the electricity provider",
    explanation:
      "Damaged power lines remain a hazard after shaking ends.",
    ...sources.earthquakeAfter
  },

  // FLOODS & SEVERE WEATHER — 10 QUESTIONS

  {
    id: 13,
    category: "weather",
    difficulty: "easy",
    question:
      "Floodwater covers the road ahead. What should a driver do?",
    options: [
      "Follow a larger vehicle through",
      "Turn around and find a safe alternative route",
      "Cross slowly if the water looks still",
      "Continue if familiar with the road"
    ],
    answer:
      "Turn around and find a safe alternative route",
    explanation:
      "Floodwater can hide road damage and can sweep vehicles away.",
    ...sources.flood
  },

  {
    id: 14,
    category: "weather",
    difficulty: "easy",
    question:
      "Rising water threatens a low-lying area. Where should people seek safety?",
    options: [
      "A nearby underpass",
      "A basement",
      "Higher ground or a safe shelter following official directions",
      "The riverbank to observe conditions"
    ],
    answer:
      "Higher ground or a safe shelter following official directions",
    explanation:
      "Move away from rising water rather than waiting in a low area.",
    ...sources.flood
  },

  {
    id: 15,
    category: "weather",
    difficulty: "medium",
    question:
      "Why can apparently shallow floodwater still be dangerous?",
    options: [
      "It may contain currents, contamination, and hidden hazards",
      "It is safe if the bottom is visible",
      "Only water above knee height is hazardous",
      "Clear-looking water cannot contain contamination"
    ],
    answer:
      "It may contain currents, contamination, and hidden hazards",
    explanation:
      "Appearance alone cannot establish whether floodwater is safe.",
    ...sources.floodwater
  },

  {
    id: 16,
    category: "weather",
    difficulty: "medium",
    question:
      "After a flood evacuation, when should you return to the affected area?",
    options: [
      "As soon as the rain stops",
      "When the first neighbour returns",
      "When you can see the road again",
      "When authorities say returning is safe"
    ],
    answer: "When authorities say returning is safe",
    explanation:
      "Flood-related hazards may remain after water recedes.",
    ...sources.returningHome
  },

  {
    id: 17,
    category: "weather",
    difficulty: "hard",
    question:
      "Reaching a home's electrical switch would require entering standing water. What is safest?",
    options: [
      "Enter while wearing ordinary shoes",
      "Stay out and contact a qualified electrician",
      "Ask someone to hold your hand while entering",
      "Test a nearby appliance first"
    ],
    answer: "Stay out and contact a qualified electrician",
    explanation:
      "Do not enter water to operate electrical equipment.",
    ...sources.cleanup
  },

  {
    id: 18,
    category: "weather",
    difficulty: "hard",
    question:
      "Floodwater has receded, but a house has visible structural cracks. What should happen before entry?",
    options: [
      "A neighbour should briefly check inside",
      "Someone should switch on all the lights",
      "A qualified professional should assess its safety",
      "The occupants should wait only until the floor dries"
    ],
    answer:
      "A qualified professional should assess its safety",
    explanation:
      "Visible damage needs assessment even if the surrounding area has reopened.",
    ...sources.returningHome
  },

  {
    id: 45,
    category: "weather",
    difficulty: "easy",
    question:
      "You hear thunder during an outdoor activity. What should you do?",
    options: [
      "Seek shelter in a substantial building",
      "Wait until rain reaches you",
      "Stand beneath an isolated tree",
      "Continue until lightning is visible"
    ],
    answer: "Seek shelter in a substantial building",
    explanation:
      "Hearing thunder means lightning is close enough to pose a danger.",
    ...sources.lightning
  },

  {
    id: 46,
    category: "weather",
    difficulty: "medium",
    question:
      "How long should you remain in safe shelter after the last sound of thunder?",
    options: [
      "Until the rain briefly stops",
      "Five minutes",
      "Until a patch of blue sky appears",
      "At least 30 minutes"
    ],
    answer: "At least 30 minutes",
    explanation:
      "Lightning danger can continue after the most obvious storm activity passes.",
    ...sources.lightning
  },

  {
    id: 47,
    category: "weather",
    difficulty: "medium",
    question:
      "Strong winds and hail are approaching your school. Which response is safer?",
    options: [
      "Watch from the windows",
      "Follow staff to the designated shelter away from windows",
      "Gather outside under trees",
      "Move into a large open hall without checking the plan"
    ],
    answer:
      "Follow staff to the designated shelter away from windows",
    explanation:
      "Windows and large open rooms can be hazardous during severe thunderstorms.",
    ...sources.storm
  },

  {
    id: 48,
    category: "weather",
    difficulty: "hard",
    question:
      "Rain has stopped during a thunderstorm, but you heard thunder ten minutes ago. What is the best decision?",
    options: [
      "Resume outdoor activities because the rain stopped",
      "Stand on the porch while waiting",
      "Remain sheltered until at least 30 minutes after the last thunder",
      "Use a nearby tree as temporary shelter"
    ],
    answer:
      "Remain sheltered until at least 30 minutes after the last thunder",
    explanation:
      "The waiting period is measured from the last thunder, not the end of rainfall.",
    ...sources.lightning
  },

  // FIRE SAFETY — 10 QUESTIONS

  {
    id: 19,
    category: "fire",
    difficulty: "easy",
    question:
      "A smoke alarm sounds and there may be a fire. What is the priority?",
    options: [
      "Get outside safely and stay outside",
      "Collect valuables before leaving",
      "Find the fire before deciding",
      "Hide in a room without telling anyone"
    ],
    answer: "Get outside safely and stay outside",
    explanation:
      "Leave promptly and contact emergency services from safety.",
    ...sources.fireResponse
  },

  {
    id: 20,
    category: "fire",
    difficulty: "easy",
    question:
      "How often should household smoke alarms generally be tested?",
    options: [
      "Only when they chirp",
      "Only after a fire",
      "Once every five years",
      "Every month"
    ],
    answer: "Every month",
    explanation:
      "Monthly testing helps check that alarms work. Follow their maintenance instructions.",
    ...sources.alarms
  },

  {
    id: 21,
    category: "fire",
    difficulty: "medium",
    question:
      "What should a home fire escape plan identify?",
    options: [
      "Only the front door",
      "Two ways out of each room where possible",
      "A place to leave packed valuables",
      "A lift to use during a fire"
    ],
    answer: "Two ways out of each room where possible",
    explanation:
      "An alternative exit matters if the usual route is blocked.",
    ...sources.escape
  },

  {
    id: 22,
    category: "fire",
    difficulty: "medium",
    question:
      "Why should everyone know the outdoor fire meeting place?",
    options: [
      "It replaces contacting emergency services",
      "It is where people decide who will reenter",
      "It helps the household account for everyone",
      "It is where valuables should be stored"
    ],
    answer: "It helps the household account for everyone",
    explanation:
      "A shared gathering point helps identify anyone who may still be missing.",
    ...sources.escape
  },

  {
    id: 23,
    category: "fire",
    difficulty: "hard",
    question:
      "During a fire escape, a closed door feels warm. What should you do?",
    options: [
      "Keep it closed and use another safe escape route",
      "Open it slightly to investigate",
      "Force it open quickly",
      "Wait beside it for it to cool"
    ],
    answer:
      "Keep it closed and use another safe escape route",
    explanation:
      "Heat may indicate fire beyond the door. Do not open it.",
    ...sources.fireResponse
  },

  {
    id: 24,
    category: "fire",
    difficulty: "hard",
    question:
      "Which arrangement provides better smoke-alarm coverage?",
    options: [
      "One alarm near the front door",
      "Alarms only in rooms used during the day",
      "One alarm for the entire building",
      "Interconnected alarms in bedrooms, outside sleeping areas, and on every level"
    ],
    answer:
      "Interconnected alarms in bedrooms, outside sleeping areas, and on every level",
    explanation:
      "Coverage throughout the home and linked alerts help warn occupants.",
    ...sources.alarms
  },

  {
    id: 49,
    category: "fire",
    difficulty: "easy",
    question:
      "Boxes are blocking an exit at home. What should happen before an emergency?",
    options: [
      "Leave them until an alarm sounds",
      "Arrange for the exit route to be cleared",
      "Use that exit only in daylight",
      "Mark the boxes without moving the obstruction"
    ],
    answer: "Arrange for the exit route to be cleared",
    explanation:
      "Escape doors and windows need to remain unobstructed.",
    ...sources.escape
  },

  {
    id: 50,
    category: "fire",
    difficulty: "medium",
    question:
      "Someone cannot reliably hear a standard smoke alarm. What should the household consider?",
    options: [
      "Relying only on another person waking them",
      "Removing the bedroom alarm",
      "Suitable alarms with visual or vibration alerts",
      "Keeping an ordinary alarm in a drawer"
    ],
    answer: "Suitable alarms with visual or vibration alerts",
    explanation:
      "Alarm systems should meet the occupants' hearing and accessibility needs.",
    ...sources.alarms
  },

  {
    id: 51,
    category: "fire",
    difficulty: "medium",
    question:
      "What is a useful way to prepare the household for a fire?",
    options: [
      "Practise the escape plan together",
      "Let only one person read the plan",
      "Assume everyone knows all exits",
      "Wait for a real alarm before discussing routes"
    ],
    answer: "Practise the escape plan together",
    explanation:
      "Practice helps everyone learn the routes and meeting place.",
    ...sources.escape
  },

  {
    id: 52,
    category: "fire",
    difficulty: "hard",
    question:
      "You have escaped a fire but your phone is still inside. What should you do?",
    options: [
      "Go back if no flames are visible",
      "Ask another person to retrieve it",
      "Reenter through a different door",
      "Stay outside and use another safe way to contact emergency services"
    ],
    answer:
      "Stay outside and use another safe way to contact emergency services",
    explanation:
      "Belongings are not a reason to reenter a burning building.",
    ...sources.fireResponse
  },

  // FIRST AID & EMERGENCY RESPONSE — 10 QUESTIONS

  {
    id: 25,
    category: "first_aid",
    difficulty: "easy",
    question:
      "Before approaching someone who needs help, what should you check?",
    options: [
      "Whether they have identification",
      "Whether the scene is safe",
      "Whether someone is filming",
      "Whether their belongings are nearby"
    ],
    answer: "Whether the scene is safe",
    explanation:
      "Check for hazards before approaching so you do not also need rescuing.",
    ...sources.firstAid
  },

  {
    id: 26,
    category: "first_aid",
    difficulty: "easy",
    question: "What does AED stand for?",
    options: [
      "Automatic Emergency Direction",
      "Advanced Electrical Detector",
      "Automated External Defibrillator",
      "Assisted Evacuation Device"
    ],
    answer: "Automated External Defibrillator",
    explanation:
      "Learning CPR and AED skills is part of emergency preparation.",
    ...sources.skills
  },

  {
    id: 27,
    category: "first_aid",
    difficulty: "medium",
    question:
      "Which sequence summarizes the Red Cross emergency action steps?",
    options: [
      "Check, Call, Care",
      "Move, Feed, Wait",
      "Watch, Record, Leave",
      "Call, Leave, Return"
    ],
    answer: "Check, Call, Care",
    explanation:
      "Check safety and the person, summon needed help, then provide appropriate care.",
    ...sources.emergencyActions
  },

  {
    id: 28,
    category: "first_aid",
    difficulty: "medium",
    question:
      "What is appropriate immediate care for a minor burn caused by heat?",
    options: [
      "Apply butter",
      "Press ice directly against it",
      "Rub the area firmly",
      "Cool it with clean, cool running water"
    ],
    answer: "Cool it with clean, cool running water",
    explanation:
      "Cooling helps relieve pain. More serious burns need prompt medical care.",
    ...sources.burns
  },

  {
    id: 29,
    category: "first_aid",
    difficulty: "hard",
    question:
      "An adult is unresponsive and only gasping. After checking scene safety, what response is needed?",
    options: [
      "Give them water",
      "Call emergency services, start CPR, and use an AED as soon as available",
      "Wait to see whether they wake up",
      "Sit them upright"
    ],
    answer:
      "Call emergency services, start CPR, and use an AED as soon as available",
    explanation:
      "Gasping is not normal breathing. Follow dispatcher guidance and do not delay CPR while waiting for an AED.",
    ...sources.cpr
  },

  {
    id: 30,
    category: "first_aid",
    difficulty: "medium",
    question:
      "Why should you listen carefully to an emergency dispatcher?",
    options: [
      "They can guarantee an immediate recovery",
      "Their advice removes every danger at the scene",
      "They can guide immediate care while help is coming",
      "Their instructions replace all future medical care"
    ],
    answer:
      "They can guide immediate care while help is coming",
    explanation:
      "Dispatchers may give practical instructions for the emergency you describe.",
    ...sources.emergencyActions
  },

  {
    id: 53,
    category: "first_aid",
    difficulty: "easy",
    question:
      "An injured person is awake and able to understand you. What should you do before helping?",
    options: [
      "Explain your intention and ask permission",
      "Begin touching them without speaking",
      "Ask a bystander instead of the person",
      "Assume being nearby means consent"
    ],
    answer: "Explain your intention and ask permission",
    explanation:
      "Obtain consent from a responsive person before providing care.",
    ...sources.firstAid
  },

  {
    id: 54,
    category: "first_aid",
    difficulty: "medium",
    question:
      "Why might disposable gloves be useful when giving first aid?",
    options: [
      "They replace hand hygiene",
      "They make every scene safe",
      "They prevent every possible injury",
      "They provide a barrier against contact with body fluids"
    ],
    answer:
      "They provide a barrier against contact with body fluids",
    explanation:
      "Suitable protective equipment reduces exposure while helping someone.",
    ...sources.firstAid
  },

  {
    id: 55,
    category: "first_aid",
    difficulty: "hard",
    question:
      "A person may have injured their neck after a fall, but there is no immediate environmental danger. What should you avoid?",
    options: [
      "Calling for medical help",
      "Asking them to stand and test their movement",
      "Reassuring them",
      "Following dispatcher instructions"
    ],
    answer: "Asking them to stand and test their movement",
    explanation:
      "Suspected head, neck, or spinal injuries are a reason not to ask the person to move.",
    ...sources.firstAid
  },

  {
    id: 56,
    category: "first_aid",
    difficulty: "hard",
    question:
      "Emergency help is coming, but you are unsure how to perform a procedure. What is the best approach?",
    options: [
      "Improvise using a technique you vaguely remember",
      "Try any procedure a bystander suggests",
      "Follow dispatcher guidance and provide care within your training",
      "Leave without telling anyone"
    ],
    answer:
      "Follow dispatcher guidance and provide care within your training",
    explanation:
      "Care should match the person's condition and the helper's training.",
    ...sources.emergencyActions
  },

  // RECOVERY & AFTERMATH — 10 QUESTIONS

  {
    id: 31,
    category: "recovery",
    difficulty: "easy",
    question:
      "When is it appropriate to enter a disaster-damaged building?",
    options: [
      "After its safety has been assessed and entry is permitted",
      "As soon as the weather improves",
      "Whenever the door opens",
      "When another person offers to go with you"
    ],
    answer:
      "After its safety has been assessed and entry is permitted",
    explanation:
      "Damage may make a building unsafe even after the immediate disaster ends.",
    ...sources.returningHome
  },

  {
    id: 32,
    category: "recovery",
    difficulty: "easy",
    question:
      "Why must fuel-powered generators never be used inside homes or garages?",
    options: [
      "They stop phone signals",
      "They make drinking water evaporate",
      "They prevent smoke alarms from being tested",
      "Dangerous carbon monoxide can accumulate"
    ],
    answer: "Dangerous carbon monoxide can accumulate",
    explanation:
      "Carbon monoxide cannot be seen or smelled; open doors do not make indoor operation safe.",
    ...sources.earthquakeAfter
  },

  {
    id: 33,
    category: "recovery",
    difficulty: "medium",
    question:
      "You notice a gas smell while returning to a building. What should you do?",
    options: [
      "Switch on lights to investigate",
      "Leave and contact emergency authorities from a safe location",
      "Look for the leak yourself",
      "Stay inside near an open window"
    ],
    answer:
      "Leave and contact emergency authorities from a safe location",
    explanation:
      "Avoid switches, flames, and anything that could create a spark.",
    ...sources.cleanup
  },

  {
    id: 34,
    category: "recovery",
    difficulty: "medium",
    question:
      "For adults undertaking approved cleanup work, which habit helps reduce heat-related risks?",
    options: [
      "Skipping breaks to finish sooner",
      "Drinking less to avoid interruptions",
      "Taking breaks, drinking water, and avoiding overheating",
      "Continuing despite feeling unwell"
    ],
    answer:
      "Taking breaks, drinking water, and avoiding overheating",
    explanation:
      "Recovery work needs pacing, especially in hot conditions.",
    ...sources.cleanup
  },

  {
    id: 35,
    category: "recovery",
    difficulty: "hard",
    question:
      "You hear unusual shifting noises inside a disaster-damaged building. What is the safest response?",
    options: [
      "Leave immediately because the structure may be unstable",
      "Go upstairs to locate the noise",
      "Continue until visible debris falls",
      "Move heavy furniture to test the floor"
    ],
    answer:
      "Leave immediately because the structure may be unstable",
    explanation:
      "Unusual structural noises can indicate a collapse risk.",
    ...sources.cleanup
  },

  {
    id: 36,
    category: "recovery",
    difficulty: "medium",
    question:
      "What helps a household prepare again after using its emergency supplies?",
    options: [
      "Put the partly empty kit away without checking it",
      "Discard the household plan",
      "Wait until the next warning to replace supplies",
      "Restock supplies and update the emergency plan"
    ],
    answer: "Restock supplies and update the emergency plan",
    explanation:
      "Recovery is an opportunity to replace used items and improve preparation.",
    ...sources.coping
  },

  {
    id: 57,
    category: "recovery",
    difficulty: "easy",
    question:
      "You feel upset after a disaster. Which action can support recovery?",
    options: [
      "Keep every concern to yourself",
      "Talk with a trusted person and seek support when needed",
      "Assume everyone must recover at the same speed",
      "Spend all day watching disaster footage"
    ],
    answer:
      "Talk with a trusted person and seek support when needed",
    explanation:
      "People respond differently. Support from trusted people and professionals can help.",
    ...sources.coping
  },

  {
    id: 58,
    category: "recovery",
    difficulty: "medium",
    question:
      "During a power outage, how can you help refrigerated food stay cold longer?",
    options: [
      "Open the fridge frequently to check",
      "Leave the door slightly open",
      "Keep refrigerator and freezer doors closed",
      "Move all food onto the counter"
    ],
    answer: "Keep refrigerator and freezer doors closed",
    explanation:
      "Closed doors retain cold air; food safety still depends on temperature and time.",
    ...sources.food
  },

  {
    id: 59,
    category: "recovery",
    difficulty: "hard",
    question:
      "After an outage, you are unsure whether perishable food stayed cold enough. Should you taste it to check?",
    options: [
      "No; do not taste-test it, and discard it if safety is uncertain",
      "Yes; a small taste always reveals contamination",
      "Yes; if it smells normal first",
      "Only if it is reheated briefly"
    ],
    answer:
      "No; do not taste-test it, and discard it if safety is uncertain",
    explanation:
      "Unsafe food may seem normal. Taste and smell do not establish safety.",
    ...sources.food
  },

  {
    id: 60,
    category: "recovery",
    difficulty: "hard",
    question:
      "A friend remains distressed after a disaster and it is affecting daily life. What is a helpful response?",
    options: [
      "Tell them others had worse experiences",
      "Insist they describe everything that happened",
      "Promise to keep every concern secret",
      "Listen without pressure and help them reach a trusted adult or professional"
    ],
    answer:
      "Listen without pressure and help them reach a trusted adult or professional",
    explanation:
      "Persistent distress deserves support rather than dismissal or pressure.",
    ...sources.coping
  },
    // GENERAL PREPAREDNESS: 61–70

  {
    id: 61,
    category: 'general',
    difficulty: 'easy',
    question:
      'Your kit contains tins without ring pulls. What else is needed?',
    options: [
      'Only an electric opener',
      'Extra drinking cups',
      'A manual tin opener',
      'A phone charger'
    ],
    answer: 'A manual tin opener',
    explanation:
      'Choose a way to open stored food without mains power.',
    source: 'UK Government Prepare',
    sourceTopic: 'Get prepared for emergencies',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/'
  },
  {
    id: 62,
    category: 'general',
    difficulty: 'easy',
    question:
      'What should a household with pets add to its emergency supplies?',
    options: [
      'Suitable pet food and extra water',
      'Only human snacks',
      'Only pet toys',
      'Nothing beyond human supplies'
    ],
    answer: 'Suitable pet food and extra water',
    explanation:
      'Pets also need food and drinking water during disruption.',
    source: 'UK Government Prepare',
    sourceTopic: 'Get prepared for emergencies',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/'
  },
  {
    id: 63,
    category: 'general',
    difficulty: 'easy',
    question:
      'How can a household prepare when buying a full kit at once is difficult?',
    options: [
      'Wait until an emergency',
      'Build supplies gradually as affordable',
      'Buy only expensive equipment',
      'Abandon all planning'
    ],
    answer: 'Build supplies gradually as affordable',
    explanation:
      'Preparing over time is a practical alternative to one large purchase.',
    source: 'UK Government Prepare',
    sourceTopic: 'Get prepared for emergencies',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/'
  },
  {
    id: 64,
    category: 'general',
    difficulty: 'hard',
    question:
      'A fire starts at home. Should you delay escape to collect your emergency bag?',
    options: [
      'Yes, always collect the bag',
      'Only if the bag is expensive',
      'Wait until someone brings it',
      'No, leave without collecting belongings'
    ],
    answer: 'No, leave without collecting belongings',
    explanation:
      'A prepared bag must never delay escape from a fire.',
    source: 'UK Government Prepare',
    sourceTopic: 'Get prepared for emergencies',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/'
  },
  {
    id: 65,
    category: 'general',
    difficulty: 'medium',
    question:
      'A telecare alarm needs power or internet. What backup should be planned?',
    options: [
      'Assume it always works',
      'Rely only on its app',
      'Check-ins with a trusted support person',
      'Wait for a failure to plan'
    ],
    answer: 'Check-ins with a trusted support person',
    explanation:
      'An agreed check-in plan helps when an electronic alert service fails.',
    source: 'UK Government Prepare',
    sourceTopic: 'Advice for disabled persons and carers',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/advice-for-disabled-persons-and-carers/'
  },
  {
    id: 66,
    category: 'general',
    difficulty: 'hard',
    question:
      'Someone depends on powered medical equipment. Who should help plan for outages?',
    options: [
      'Their care team and equipment provider',
      'An anonymous online commenter',
      'Only a general weather app',
      'Nobody until power fails'
    ],
    answer: 'Their care team and equipment provider',
    explanation:
      'Equipment-specific contingency plans should be arranged with the relevant care professionals.',
    source: 'UK Government Prepare',
    sourceTopic: 'Advice for disabled persons and carers',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/advice-for-disabled-persons-and-carers/'
  },
  {
    id: 67,
    category: 'general',
    difficulty: 'medium',
    question:
      'Where should a personal emergency support plan be kept?',
    options: [
      'Somewhere nobody else knows',
      'Accessible, with trusted helpers knowing where',
      'Only on an unavailable work computer',
      'Only in memory'
    ],
    answer: 'Accessible, with trusted helpers knowing where',
    explanation:
      'A plan is useful only if the people providing support can find it.',
    source: 'UK Government Prepare',
    sourceTopic: 'Advice for disabled persons and carers',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/advice-for-disabled-persons-and-carers/'
  },
  {
    id: 68,
    category: 'general',
    difficulty: 'medium',
    question:
      'Disruption is forecast before a train journey. What should you check?',
    options: [
      "Only last month's timetable",
      'Only an old social-media post',
      'Only the ticket price',
      'Current updates from the transport operator'
    ],
    answer: 'Current updates from the transport operator',
    explanation:
      'Check current service information before deciding when and how to travel.',
    source: 'UK Government Prepare',
    sourceTopic: 'Transport disruption and delays',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/travel-advice/'
  },
  {
    id: 69,
    category: 'general',
    difficulty: 'easy',
    question:
      'What should you tell a trusted person before essential travel during disruption?',
    options: [
      'Only your clothing colour',
      'Only your ticket cost',
      'Your destination and expected arrival time',
      'Nothing until the next day'
    ],
    answer: 'Your destination and expected arrival time',
    explanation:
      'Sharing your plans helps others notice delays and understand your whereabouts.',
    source: 'UK Government Prepare',
    sourceTopic: 'Transport disruption and delays',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/travel-advice/'
  },
  {
    id: 70,
    category: 'general',
    difficulty: 'medium',
    question:
      'An essential journey changes because of disruption. What should you do?',
    options: [
      'Update your contact and follow official travel advice',
      'Keep everyone guessing',
      'Rely on the original timetable',
      'Ignore transport staff'
    ],
    answer:
      'Update your contact and follow official travel advice',
    explanation:
      'Keep others informed when plans change and use current official information.',
    source: 'UK Government Prepare',
    sourceTopic: 'Transport disruption and delays',
    sourceUrl:
      'https://prepare.campaign.gov.uk/get-prepared-for-emergencies/travel-advice/'
  },

  // EARTHQUAKE PREPAREDNESS: 71–80

  {
    id: 71,
    category: 'earthquake',
    difficulty: 'medium',
    question:
      'Where should a driver avoid stopping during an earthquake?',
    options: [
      'A clear area away from traffic',
      'Under a bridge or overhead power lines',
      'An open area away from structures',
      'A safe pull-off without overhead hazards'
    ],
    answer: 'Under a bridge or overhead power lines',
    explanation:
      'Stop carefully away from structures and objects that could fall.',
    source: 'USGS',
    sourceTopic: 'What should I do DURING an earthquake?',
    sourceUrl:
      'https://www.usgs.gov/faqs/what-should-i-do-during-earthquake'
  },
  {
    id: 72,
    category: 'earthquake',
    difficulty: 'easy',
    question:
      'A driver has stopped safely away from earthquake hazards. What next?',
    options: [
      'Stand beside the vehicle',
      'Resume driving immediately',
      'Run towards nearby buildings',
      'Remain inside until the shaking stops'
    ],
    answer: 'Remain inside until the shaking stops',
    explanation:
      'USGS advises staying in the safely stopped vehicle during shaking.',
    source: 'USGS',
    sourceTopic: 'What should I do DURING an earthquake?',
    sourceUrl:
      'https://www.usgs.gov/faqs/what-should-i-do-during-earthquake'
  },
  {
    id: 73,
    category: 'earthquake',
    difficulty: 'medium',
    question:
      'Which additional hazard can an earthquake trigger in mountainous terrain?',
    options: [
      'Guaranteed safer slopes',
      'Instantly repaired roads',
      'Rockfalls and landslides',
      'The removal of loose rocks'
    ],
    answer: 'Rockfalls and landslides',
    explanation:
      'Shaking can dislodge rocks, trees and other slope material.',
    source: 'USGS',
    sourceTopic: 'What should I do DURING an earthquake?',
    sourceUrl:
      'https://www.usgs.gov/faqs/what-should-i-do-during-earthquake'
  },
  {
    id: 74,
    category: 'earthquake',
    difficulty: 'easy',
    question:
      'Which household preparation reduces hazards from movable furniture?',
    options: [
      'Arrange suitable securing of unstable items',
      'Move tall furniture beside beds',
      'Stack more items on top',
      'Leave all movable items unsecured'
    ],
    answer: 'Arrange suitable securing of unstable items',
    explanation:
      'Identifying and securing movable hazards is an earthquake-preparation step.',
    source: 'USGS',
    sourceTopic: 'What can I do to be prepared for an earthquake?',
    sourceUrl:
      'https://www.usgs.gov/faqs/what-can-i-do-be-prepared-earthquake'
  },
  {
    id: 75,
    category: 'earthquake',
    difficulty: 'medium',
    question:
      'Which preparation can help with financial recovery after an earthquake?',
    options: [
      'Discard property records',
      'Organise important records and review insurance needs',
      'Assume every loss is covered',
      'Wait until documents are damaged'
    ],
    answer:
      'Organise important records and review insurance needs',
    explanation:
      'USGS includes document organisation and consideration of insurance in preparedness.',
    source: 'USGS',
    sourceTopic: 'What can I do to be prepared for an earthquake?',
    sourceUrl:
      'https://www.usgs.gov/faqs/what-can-i-do-be-prepared-earthquake'
  },
  {
    id: 76,
    category: 'earthquake',
    difficulty: 'easy',
    question:
      'How should earthquake emergency supplies be organised?',
    options: [
      'All beneath unstable heavy furniture',
      'Only at a distant holiday home',
      'Where household members cannot find them',
      'In convenient, accessible locations'
    ],
    answer: 'In convenient, accessible locations',
    explanation:
      'Supplies should be arranged where they can be reached when needed.',
    source: 'USGS',
    sourceTopic: 'What can I do to be prepared for an earthquake?',
    sourceUrl:
      'https://www.usgs.gov/faqs/what-can-i-do-be-prepared-earthquake'
  },
  {
    id: 77,
    category: 'earthquake',
    difficulty: 'hard',
    question:
      "A viral post gives an exact date and magnitude for next month's earthquake. How should it be treated?",
    options: [
      'As proven because it is precise',
      'As official if widely shared',
      'As an unverified claim, not a reliable prediction',
      'As more reliable than scientific guidance'
    ],
    answer:
      'As an unverified claim, not a reliable prediction',
    explanation:
      "Scientists cannot reliably predict an earthquake's exact time, location and magnitude.",
    source: 'USGS',
    sourceTopic: 'Can you predict earthquakes?',
    sourceUrl:
      'https://www.usgs.gov/faqs/can-you-predict-earthquakes'
  },
  {
    id: 78,
    category: 'earthquake',
    difficulty: 'medium',
    question:
      'Does a long-term earthquake probability identify the exact day of an earthquake?',
    options: [
      'No, it describes a chance over a time period',
      'Yes, it gives an exact appointment',
      'Yes, if shared online',
      'Yes, for every building'
    ],
    answer: 'No, it describes a chance over a time period',
    explanation:
      'Probability estimates describe risk; they are not precise event predictions.',
    source: 'USGS',
    sourceTopic: 'Can you predict earthquakes?',
    sourceUrl:
      'https://www.usgs.gov/faqs/can-you-predict-earthquakes'
  },
  {
    id: 79,
    category: 'earthquake',
    difficulty: 'hard',
    question:
      'When does an earthquake early-warning system detect an event?',
    options: [
      'Months before the earthquake starts',
      'After the earthquake has started',
      'Only after all aftershocks end',
      'Before any fault movement occurs'
    ],
    answer: 'After the earthquake has started',
    explanation:
      'Detection after onset may allow a brief warning before shaking reaches some locations.',
    source: 'USGS',
    sourceTopic:
      'Earthquake early warning, forecasts and probabilities',
    sourceUrl:
      'https://www.usgs.gov/faqs/what-difference-between-earthquake-early-warning-earthquake-forecasts-earthquake-probabilities'
  },
  {
    id: 80,
    category: 'earthquake',
    difficulty: 'easy',
    question:
      'What does an aftershock forecast describe?',
    options: [
      'A guarantee that no shaking remains',
      'The safety of every building',
      'An exact schedule for every tremor',
      'The chance of further earthquakes within a period'
    ],
    answer:
      'The chance of further earthquakes within a period',
    explanation:
      'Aftershock forecasts express probabilities rather than guaranteed event times.',
    source: 'USGS',
    sourceTopic:
      'Earthquake early warning, forecasts and probabilities',
    sourceUrl:
      'https://www.usgs.gov/faqs/what-difference-between-earthquake-early-warning-earthquake-forecasts-earthquake-probabilities'
  },

  // FLOODS & SEVERE WEATHER: 81–90

  {
    id: 81,
    category: 'weather',
    difficulty: 'medium',
    question:
      'What determines a UK Met Office weather-warning colour?',
    options: [
      'Only the month',
      "Only the warning area's size",
      'Expected impact together with its likelihood',
      'Only the temperature'
    ],
    answer: 'Expected impact together with its likelihood',
    explanation:
      'The warning system combines potential consequences with how likely they are.',
    source: 'Met Office',
    sourceTopic: 'Weather warnings guide',
    sourceUrl:
      'https://weather.metoffice.gov.uk/guides/warnings'
  },
  {
    id: 82,
    category: 'weather',
    difficulty: 'medium',
    question:
      'A UK Met Office yellow warning is issued. What should you do?',
    options: [
      'Read the details and assess effects on your plans',
      'Assume no one can be affected',
      'Treat it as an evacuation order everywhere',
      'Ignore it unless it turns red'
    ],
    answer:
      'Read the details and assess effects on your plans',
    explanation:
      'Yellow warnings cover different combinations of impact and likelihood.',
    source: 'Met Office',
    sourceTopic: 'Weather warnings guide',
    sourceUrl:
      'https://weather.metoffice.gov.uk/guides/warnings'
  },
  {
    id: 83,
    category: 'weather',
    difficulty: 'hard',
    question:
      'A UK Met Office red warning covers your area. Which response fits the guidance?',
    options: [
      'Continue every plan unchanged',
      'Avoid travel where possible and follow official directions',
      'Go sightseeing in the affected area',
      'Wait for visible damage before responding'
    ],
    answer:
      'Avoid travel where possible and follow official directions',
    explanation:
      'Red indicates dangerous weather requiring protective action.',
    source: 'Met Office',
    sourceTopic: 'Weather warnings guide',
    sourceUrl:
      'https://weather.metoffice.gov.uk/guides/warnings'
  },
  {
    id: 84,
    category: 'weather',
    difficulty: 'easy',
    question:
      'Why can black ice be particularly hazardous?',
    options: [
      'It always looks like deep snow',
      'It makes roads less slippery',
      'It occurs only indoors',
      'It can be difficult to see'
    ],
    answer: 'It can be difficult to see',
    explanation:
      'Ice may be present even when a surface does not look obviously frozen.',
    source: 'Met Office',
    sourceTopic: 'Travelling in heavy snow and ice',
    sourceUrl:
      'https://weather.metoffice.gov.uk/warnings-and-advice/seasonal-advice/travel/travelling-in-heavy-snow-and-ice'
  },
  {
    id: 85,
    category: 'weather',
    difficulty: 'easy',
    question:
      'Which clothing approach helps in cold, snowy conditions?',
    options: [
      'Wear wet clothing',
      'Use one thin layer regardless of weather',
      'Wear layers and keep clothing dry',
      'Remove layers whenever wind increases'
    ],
    answer: 'Wear layers and keep clothing dry',
    explanation:
      'Layers and dry clothing help limit heat loss.',
    source: 'Met Office',
    sourceTopic: 'Travelling in heavy snow and ice',
    sourceUrl:
      'https://weather.metoffice.gov.uk/warnings-and-advice/seasonal-advice/travel/travelling-in-heavy-snow-and-ice'
  },
  {
    id: 86,
    category: 'weather',
    difficulty: 'medium',
    question:
      'Heavy snow and ice make a non-essential trip hazardous. What is the safer choice?',
    options: [
      'Postpone it until conditions improve',
      'Travel faster to finish sooner',
      'Ignore warnings on familiar routes',
      'Assume every route is treated'
    ],
    answer: 'Postpone it until conditions improve',
    explanation:
      'Avoiding unnecessary travel reduces exposure to dangerous conditions.',
    source: 'Met Office',
    sourceTopic: 'Travelling in heavy snow and ice',
    sourceUrl:
      'https://weather.metoffice.gov.uk/warnings-and-advice/seasonal-advice/travel/travelling-in-heavy-snow-and-ice'
  },
  {
    id: 87,
    category: 'weather',
    difficulty: 'easy',
    question:
      'Before strong winds arrive, what should be done about loose garden furniture?',
    options: [
      'Leave it beside a public path',
      'Arrange for it to be secured while conditions are safe',
      'Put it on a roof',
      'Wait until it starts moving'
    ],
    answer:
      'Arrange for it to be secured while conditions are safe',
    explanation:
      'Wind can turn unsecured outdoor items into hazards.',
    source: 'Met Office',
    sourceTopic: 'Top tips to be WeatherReady',
    sourceUrl:
      'https://weather.metoffice.gov.uk/warnings-and-advice/weatherready/top-tips-to-be-weatherready'
  },
  {
    id: 88,
    category: 'weather',
    difficulty: 'hard',
    question:
      'Why is standing under trees risky during strong winds?',
    options: [
      'Trees stop every gust',
      'Branches cannot fall in wind',
      'Trees make nearby roofs secure',
      'Branches or trees may fall'
    ],
    answer: 'Branches or trees may fall',
    explanation:
      'Wind damage can bring down trees and branches.',
    source: 'Met Office',
    sourceTopic: 'Top tips to be WeatherReady',
    sourceUrl:
      'https://weather.metoffice.gov.uk/warnings-and-advice/weatherready/top-tips-to-be-weatherready'
  },
  {
    id: 89,
    category: 'weather',
    difficulty: 'easy',
    question:
      'Which action can reduce sunlight heating a room during hot weather?',
    options: [
      'Switch on extra heaters',
      'Leave every curtain open',
      'Close curtains on sun-facing windows',
      'Run the oven to circulate air'
    ],
    answer: 'Close curtains on sun-facing windows',
    explanation:
      'Shading sun-facing rooms helps reduce indoor heat gain.',
    source: 'Met Office',
    sourceTopic: 'Tips for keeping cool in hot weather',
    sourceUrl:
      'https://weather.metoffice.gov.uk/warnings-and-advice/seasonal-advice/health-wellbeing/tips-for-keeping-older-people-cool'
  },
  {
    id: 90,
    category: 'weather',
    difficulty: 'medium',
    question:
      'Who may need extra check-ins during a heatwave?',
    options: [
      'People who struggle to stay cool or hydrated',
      'Only people playing sport',
      'Only people outdoors',
      'Nobody who remains at home'
    ],
    answer:
      'People who struggle to stay cool or hydrated',
    explanation:
      'Older people, people with health conditions and those living alone may need support.',
    source: 'Met Office',
    sourceTopic: 'Tips for keeping cool in hot weather',
    sourceUrl:
      'https://weather.metoffice.gov.uk/warnings-and-advice/seasonal-advice/health-wellbeing/tips-for-keeping-older-people-cool'
  },

  // FIRE SAFETY: 91–100

  {
    id: 91,
    category: 'fire',
    difficulty: 'easy',
    question:
      'Why close internal doors before bed?',
    options: [
      'To replace smoke alarms',
      'To help limit smoke spreading if a fire starts',
      'To guarantee no fire can start',
      'To make escape routes harder to find'
    ],
    answer:
      'To help limit smoke spreading if a fire starts',
    explanation:
      'Closed internal doors form part of the London Fire Brigade bedtime checklist.',
    source: 'London Fire Brigade',
    sourceTopic: 'Bedtime fire safety checks',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/bedtime-checks/'
  },
  {
    id: 92,
    category: 'fire',
    difficulty: 'easy',
    question:
      'Where should household members keep keys needed for escape?',
    options: [
      'In a different hiding place each night',
      'Only with someone away from home',
      'In an inaccessible locked box',
      'In an agreed place everyone can find'
    ],
    answer:
      'In an agreed place everyone can find',
    explanation:
      'Searching for keys can delay an escape.',
    source: 'London Fire Brigade',
    sourceTopic: 'Bedtime fire safety checks',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/bedtime-checks/'
  },
  {
    id: 93,
    category: 'fire',
    difficulty: 'medium',
    question:
      'Which laundry habit reduces unattended overnight fire risk?',
    options: [
      'Start it just before bed',
      'Cover its vents to reduce noise',
      'Avoid running the dryer while everyone sleeps',
      'Ignore its maintenance instructions'
    ],
    answer:
      'Avoid running the dryer while everyone sleeps',
    explanation:
      'London Fire Brigade advises against leaving these appliances running overnight unattended.',
    source: 'London Fire Brigade',
    sourceTopic: 'Bedtime fire safety checks',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/bedtime-checks/'
  },
  {
    id: 94,
    category: 'fire',
    difficulty: 'easy',
    question:
      'Why register a new household appliance with its manufacturer?',
    options: [
      'To help receive safety-recall information',
      'To eliminate every fire risk',
      'To avoid all maintenance',
      'To replace smoke alarms'
    ],
    answer:
      'To help receive safety-recall information',
    explanation:
      'Registration helps manufacturers contact owners about safety problems.',
    source: 'London Fire Brigade',
    sourceTopic: 'Fire safety and electrical items',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/electrical-items/'
  },
  {
    id: 95,
    category: 'fire',
    difficulty: 'medium',
    question:
      'A safety recall names your appliance model. What should you do?',
    options: [
      'Ignore it if the appliance still works',
      'Follow the official recall instructions',
      'Remove its identification label',
      'Pass it to someone without mentioning the recall'
    ],
    answer:
      'Follow the official recall instructions',
    explanation:
      'An appliance can work normally while still having a recalled safety defect.',
    source: 'London Fire Brigade',
    sourceTopic: 'Fire safety and electrical items',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/electrical-items/'
  },
  {
    id: 96,
    category: 'fire',
    difficulty: 'hard',
    question:
      'A socket has scorch marks. Who should assess the electrical fault?',
    options: [
      'Anyone with household tape',
      'A friend without electrical training',
      'Nobody if power still works',
      'A qualified electrician'
    ],
    answer: 'A qualified electrician',
    explanation:
      'Scorching can indicate dangerous wiring; arrange a qualified assessment.',
    source: 'London Fire Brigade',
    sourceTopic: 'Fire safety and electrical items',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/electrical-items/'
  },
  {
    id: 97,
    category: 'fire',
    difficulty: 'easy',
    question:
      'Which item should be kept away from a portable heater?',
    options: [
      "The manufacturer's required clear space",
      'A clear walking route',
      'Drying clothes',
      'A suitable uncluttered surrounding area'
    ],
    answer: 'Drying clothes',
    explanation:
      'Clothing near heaters can catch fire; heaters should not be used for drying it.',
    source: 'London Fire Brigade',
    sourceTopic:
      'Portable heaters, gas fires and open fires',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/portable-heaters-gas-fires-and-open-fires/'
  },
  {
    id: 98,
    category: 'fire',
    difficulty: 'medium',
    question:
      'Why must heater placement account for someone using a mobility aid?',
    options: [
      'To reduce the risk of trips or falls onto it',
      'To place it directly across their route',
      'To make it easier to lean on',
      'To replace their mobility aid'
    ],
    answer:
      'To reduce the risk of trips or falls onto it',
    explanation:
      'Placement must consider both access needs and burn or fire hazards.',
    source: 'London Fire Brigade',
    sourceTopic:
      'Portable heaters, gas fires and open fires',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/portable-heaters-gas-fires-and-open-fires/'
  },
  {
    id: 99,
    category: 'fire',
    difficulty: 'easy',
    question:
      'Which decorative light avoids an open candle flame?',
    options: [
      'A taller wax candle',
      'A flameless LED candle',
      'Several small tea lights',
      'A candle behind a curtain'
    ],
    answer: 'A flameless LED candle',
    explanation:
      'Flameless alternatives remove the open-flame hazard of ordinary candles.',
    source: 'London Fire Brigade',
    sourceTopic: 'Candle safety',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/candles/'
  },
  {
    id: 100,
    category: 'fire',
    difficulty: 'hard',
    question:
      'Paper decorations are close to a lit candle. What risk is present?',
    options: [
      'Decorations make the flame safer',
      'Only large candles can ignite paper',
      'Indoor decorations cannot burn',
      'The decorations could catch fire'
    ],
    answer:
      'The decorations could catch fire',
    explanation:
      'Combustible decorations must be kept away from open flames.',
    source: 'London Fire Brigade',
    sourceTopic: 'Candle safety',
    sourceUrl:
      'https://www.london-fire.gov.uk/safety/the-home/candles/'
  },

  // FIRST AID & EMERGENCY RESPONSE: 101–110

  {
    id: 101,
    category: 'first_aid',
    difficulty: 'easy',
    question:
      'For an ordinary nosebleed, which posture is recommended?',
    options: [
      'Tilt the head backwards',
      'Lie flat on the back',
      'Sit and lean forward',
      'Walk around with the head raised'
    ],
    answer: 'Sit and lean forward',
    explanation:
      'Leaning forward helps keep blood from flowing down the throat.',
    source: 'NHS',
    sourceTopic: 'Nosebleed',
    sourceUrl:
      'https://www.nhs.uk/conditions/nosebleed/'
  },
  {
    id: 102,
    category: 'first_aid',
    difficulty: 'medium',
    question:
      'According to NHS guidance, how long should the nose be pinched for an ordinary nosebleed?',
    options: [
      '10 to 15 minutes',
      'A few seconds',
      'One minute with frequent checks',
      'Only until the first breath'
    ],
    answer: '10 to 15 minutes',
    explanation:
      'Pinch just above the nostrils while leaning forward and breathing through the mouth. Seek urgent help if bleeding is heavy or persists.',
    source: 'NHS',
    sourceTopic: 'Nosebleed',
    sourceUrl:
      'https://www.nhs.uk/conditions/nosebleed/'
  },
  {
    id: 103,
    category: 'first_aid',
    difficulty: 'easy',
    question:
      'What useful observation should a helper record during a seizure?',
    options: [
      'Only the room temperature',
      'When it starts and finishes',
      "Only the person's shoe size",
      "Only the nearest clock's brand"
    ],
    answer: 'When it starts and finishes',
    explanation:
      'The duration helps inform emergency decisions and medical assessment.',
    source: 'NHS',
    sourceTopic: 'What to do if someone has a seizure',
    sourceUrl:
      'https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/'
  },
  {
    id: 104,
    category: 'first_aid',
    difficulty: 'hard',
    question:
      'Someone has a seizure for the first time. What help is needed?',
    options: [
      'Wait until another seizure occurs',
      'Arrange only a routine visit next month',
      'Assume help is unnecessary if it stops',
      'Call emergency services for an ambulance'
    ],
    answer:
      'Call emergency services for an ambulance',
    explanation:
      'NHS guidance identifies a first seizure as a reason to request an ambulance.',
    source: 'NHS',
    sourceTopic: 'What to do if someone has a seizure',
    sourceUrl:
      'https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/'
  },
  {
    id: 105,
    category: 'first_aid',
    difficulty: 'medium',
    question:
      'A person is having a seizure on the ground, away from immediate danger. What helps?',
    options: [
      'Hold their limbs still',
      'Put an object in their mouth',
      'Cushion their head and stay nearby',
      'Give them a drink during the seizure'
    ],
    answer:
      'Cushion their head and stay nearby',
    explanation:
      'Protect them from injury, time the seizure and seek emergency help when indicated. Do not restrain them or put anything in their mouth.',
    source: 'NHS',
    sourceTopic: 'What to do if someone has a seizure',
    sourceUrl:
      'https://www.nhs.uk/symptoms/what-to-do-if-someone-has-a-seizure-fit/'
  },
  {
    id: 106,
    category: 'first_aid',
    difficulty: 'medium',
    question:
      'After assessment, someone is unresponsive but breathing normally, with no suspected spinal injury. Which position is appropriate while help is called?',
    options: [
      'The recovery position',
      'Sitting unsupported',
      'Standing with assistance',
      'Flat on their back without monitoring'
    ],
    answer: 'The recovery position',
    explanation:
      'The recovery position helps maintain an open airway. Follow emergency-dispatcher guidance.',
    source: 'St John Ambulance',
    sourceTopic:
      'How to put someone in the recovery position',
    sourceUrl:
      'https://www.sja.org.uk/first-aid-advice/recovery-position/'
  },
  {
    id: 107,
    category: 'first_aid',
    difficulty: 'easy',
    question:
      'After placing someone in the recovery position and calling for help, what next?',
    options: [
      'Leave them alone',
      'Stay and monitor breathing and responsiveness',
      'Give food before they recover',
      'Assume their condition cannot change'
    ],
    answer:
      'Stay and monitor breathing and responsiveness',
    explanation:
      'Continue monitoring while help is coming. Report changes to the dispatcher.',
    source: 'St John Ambulance',
    sourceTopic:
      'How to put someone in the recovery position',
    sourceUrl:
      'https://www.sja.org.uk/first-aid-advice/recovery-position/'
  },
  {
    id: 108,
    category: 'first_aid',
    difficulty: 'easy',
    question:
      'Which sudden changes are highlighted by FAST stroke awareness?',
    options: [
      'Hair colour and nail growth',
      'Appetite alone',
      'Long-standing shoe discomfort',
      'Facial weakness, arm weakness and speech problems'
    ],
    answer:
      'Facial weakness, arm weakness and speech problems',
    explanation:
      'Suspected stroke requires an immediate emergency call; FAST prompts rapid recognition.',
    source: 'NHS',
    sourceTopic: 'Symptoms of a stroke',
    sourceUrl:
      'https://www.nhs.uk/conditions/stroke/symptoms/'
  },
  {
    id: 109,
    category: 'first_aid',
    difficulty: 'hard',
    question:
      'Stroke-like symptoms occurred minutes ago but have stopped. What should happen?',
    options: [
      'Ignore the episode',
      'Wait for symptoms tomorrow',
      'Call emergency services immediately',
      'Drive yourself to seek help'
    ],
    answer: 'Call emergency services immediately',
    explanation:
      'Recent stroke symptoms remain urgent even when they disappear.',
    source: 'NHS',
    sourceTopic: 'Symptoms of a stroke',
    sourceUrl:
      'https://www.nhs.uk/conditions/stroke/symptoms/'
  },
  {
    id: 110,
    category: 'first_aid',
    difficulty: 'medium',
    question:
      'Should sudden stroke-like symptoms be dismissed because someone is young?',
    options: [
      'No, stroke can occur at any age',
      'Yes, only older adults have strokes',
      'Yes, if they can walk',
      'Yes, if they were previously healthy'
    ],
    answer: 'No, stroke can occur at any age',
    explanation:
      'Age does not rule out a stroke; get emergency help for suspected symptoms.',
    source: 'NHS',
    sourceTopic: 'Symptoms of a stroke',
    sourceUrl:
      'https://www.nhs.uk/conditions/stroke/symptoms/'
  },

  // RECOVERY & AFTERMATH: 111–120

  {
    id: 111,
    category: 'recovery',
    difficulty: 'medium',
    question:
      'Before disposing of non-hazardous flood-damaged belongings, what should an insured household check?',
    options: [
      "Only a neighbour's policy",
      "The insurer's documentation and disposal instructions",
      "Only the item's colour",
      'Nothing before discarding records'
    ],
    answer:
      "The insurer's documentation and disposal instructions",
    explanation:
      'Contact the insurer early, document damage safely and follow disposal advice.',
    source: 'GOV.UK',
    sourceTopic: 'What to do after a flood',
    sourceUrl:
      'https://www.gov.uk/after-flood'
  },
  {
    id: 112,
    category: 'recovery',
    difficulty: 'easy',
    question:
      'In the UK, who can a household contact about emergency housing after flooding?',
    options: [
      'Only a weather presenter',
      'Only a parcel company',
      'Only an appliance manufacturer',
      'Its local council'
    ],
    answer: 'Its local council',
    explanation:
      'GOV.UK directs people needing emergency housing after flooding to their council.',
    source: 'GOV.UK',
    sourceTopic: 'What to do after a flood',
    sourceUrl:
      'https://www.gov.uk/after-flood'
  },
  {
    id: 113,
    category: 'recovery',
    difficulty: 'hard',
    question:
      'In the UK, who advises on disposal of items contaminated by sewage or chemicals after flooding?',
    options: [
      'An anonymous resale account',
      'Only a furniture shop',
      "The council's environmental health department",
      'Only a delivery driver'
    ],
    answer:
      "The council's environmental health department",
    explanation:
      'Contaminated items may require hazardous-waste arrangements.',
    source: 'GOV.UK',
    sourceTopic: 'What to do after a flood',
    sourceUrl:
      'https://www.gov.uk/after-flood'
  },
  {
    id: 114,
    category: 'recovery',
    difficulty: 'medium',
    question:
      'Tap water changes colour or smell after flooding. What should you do?',
    options: [
      'Avoid using it and contact the water supplier',
      'Taste it to decide',
      'Assume clear glasses make it safe',
      'Ignore changes after one day'
    ],
    answer:
      'Avoid using it and contact the water supplier',
    explanation:
      'Follow supplier advice rather than assuming changed water is safe.',
    source: 'GOV.UK',
    sourceTopic: 'What to do after a flood',
    sourceUrl:
      'https://www.gov.uk/after-flood'
  },
  {
    id: 115,
    category: 'recovery',
    difficulty: 'easy',
    question:
      'After contact with flood-contaminated items, what hygiene step is important before eating?',
    options: [
      'Only wipe hands on clothes',
      'Wash hands with clean water and soap',
      'Rinse with floodwater',
      'Skip washing if hands look clean'
    ],
    answer:
      'Wash hands with clean water and soap',
    explanation:
      'Thorough handwashing helps remove contamination; rinse and dry afterwards.',
    source: 'UK Health Security Agency',
    sourceTopic: 'How to recover from flooding',
    sourceUrl:
      'https://www.gov.uk/government/publications/flooding-and-health-advice-for-frontline-responders/how-to-recover-from-flooding'
  },
  {
    id: 116,
    category: 'recovery',
    difficulty: 'easy',
    question:
      'What should happen to children and pets near areas contaminated by wastewater?',
    options: [
      'Let them play once rain stops',
      'Allow access if the water looks clear',
      'Ask them to explore for damage',
      'Keep them away from the affected area'
    ],
    answer:
      'Keep them away from the affected area',
    explanation:
      'Wastewater may contain harmful contamination even when hazards are not obvious.',
    source: 'UK Health Security Agency',
    sourceTopic: 'How to recover from flooding',
    sourceUrl:
      'https://www.gov.uk/government/publications/flooding-and-health-advice-for-frontline-responders/how-to-recover-from-flooding'
  },
  {
    id: 117,
    category: 'recovery',
    difficulty: 'hard',
    question:
      'Mould remains extensive after a flooded home dries. What is appropriate?',
    options: [
      'Cover it and ignore it',
      'Assume dry weather removes every risk',
      'Arrange specialist assessment and seek medical advice for health concerns',
      'Ask children to clean it'
    ],
    answer:
      'Arrange specialist assessment and seek medical advice for health concerns',
    explanation:
      'Persistent or widespread mould may need specialist help and can affect health.',
    source: 'UK Health Security Agency',
    sourceTopic: 'How to recover from flooding',
    sourceUrl:
      'https://www.gov.uk/government/publications/flooding-and-health-advice-for-frontline-responders/how-to-recover-from-flooding'
  },
  {
    id: 118,
    category: 'recovery',
    difficulty: 'medium',
    question:
      'If safe to document, which detail helps identify a flood-damaged appliance for an insurance claim?',
    options: [
      'Its serial number',
      "Only the room's paint colour",
      "Only a neighbour's appliance brand",
      'Only the time of sunset'
    ],
    answer: 'Its serial number',
    explanation:
      'Serial numbers can support identification of damaged electronics and appliances.',
    source: 'National Flood Insurance Program',
    sourceTopic: 'Document flood damage',
    sourceUrl:
      'https://www.floodsmart.gov/recover/document-damage'
  },
  {
    id: 119,
    category: 'recovery',
    difficulty: 'easy',
    question:
      'Which records should be kept for flood-related repairs and replacements?',
    options: [
      'Only unrelated shopping receipts',
      'Receipts and relevant product records',
      'No records after payment',
      'Only verbal estimates from friends'
    ],
    answer:
      'Receipts and relevant product records',
    explanation:
      'Receipts help document recovery costs for a claim.',
    source: 'National Flood Insurance Program',
    sourceTopic: 'Document flood damage',
    sourceUrl:
      'https://www.floodsmart.gov/recover/document-damage'
  },
  {
    id: 120,
    category: 'recovery',
    difficulty: 'medium',
    question:
      'Officials restrict access to a flooded home. How should damage documentation be handled?',
    options: [
      'Enter anyway for photographs',
      'Ask a child to enter instead',
      'Climb past the safety barrier',
      'Respect the restriction and contact the insurer about next steps'
    ],
    answer:
      'Respect the restriction and contact the insurer about next steps',
    explanation:
      'Do not enter unsafe areas for evidence. Explain the access restriction to the insurer.',
    source: 'National Flood Insurance Program',
    sourceTopic: 'Document flood damage',
    sourceUrl:
      'https://www.floodsmart.gov/recover/document-damage'
  }
];