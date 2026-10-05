const FOLLOWING_COUNT = '739';
const FOLLOWER_COUNT = '212.3K';
const LIKES_COUNT = '4.4M';
const PROFILE_BIO = `His. †\nIG: @yaunah.jhanee\n💌 Kyaunahlove28@gmail.com 💌`;
const PROFILE_PHOTO = 'assets/yaunah-profile.jpeg';
const PROFILE_STORAGE_KEY = 'yaunah-tiktok-profile-v1';
const DEFAULT_PROFILE_SETTINGS = {
  displayName: 'Yaunah Jhanee †',
  handle: 'yaunahjhanee',
  bio: PROFILE_BIO,
  profilePhoto: '',
  thumbnailImages: {},
  thumbnailTitles: {}
};
let profileSettings = { ...DEFAULT_PROFILE_SETTINGS, thumbnailImages: {} };
const FRAME_MAP = {
  'start-here': PROFILE_PHOTO,
  'culture-in-christ': 'assets/frames/open-bible-pages.jpg',
  'what-i-believe': 'assets/frames/open-holy-bible.jpg',
  'natural-portrait': 'assets/frames/bedroom-mirror.jpg',
  'before-the-cross': 'assets/frames/bible-hands.jpg',
  'study-with-me': 'assets/frames/bible-and-pen.jpg',
  'wait-verses': 'assets/frames/car-cabin.jpg',
  'economy-of-god': 'assets/frames/bible-handwriting.jpg',
  'pink-mirror': 'assets/frames/makeup-mirror.jpg',
  'hebrews-10-26': 'assets/frames/finger-scripture.jpg',
  'what-does-new-testament-actually-mean': 'assets/frames/book-window.jpg',
  'not-turn-30-sec-answer': 'assets/frames/phone-notes.jpg',
  'identity-over-performance': 'assets/frames/mirror-bedroom.jpg',
  'teaching-prep': 'assets/frames/study-notebook.jpg',
  'how-to-discern': 'assets/frames/open-bible.jpg',
  'natural-portrait-2': 'assets/frames/daylight-bedroom.jpg',
  'eternal-salvation': 'assets/frames/hands-open-book.jpg',
  'armor-of-god': 'assets/frames/bible-bookmark.jpg'
};

const posts = [
  {
    id: 'start-here',
    title: 'START HERE',
    category: 'YAUNAH',
    titleStyle: 'editorial',
    duration: '1:12',
    viewCount: '2,418',
    likeCount: 8420,
    commentCount: 164,
    saveCount: 982,
    shareCount: 150,
    caption: 'Who I am / testimony',
    teachingCaptions: [
      'I keep coming back to one simple truth: Christ is the center of everything I teach.',
      'What I say is not just theology — it is lived out in real life and real obedience.',
      'Jesus changes the way we read Scripture and the way we live it out.'
    ],
    pinned: true,
    coverStyle: 'editorial',
    comments: [
      { name: 'marygrace', text: 'This is exactly the kind of teaching I needed today 🙌' },
      { name: 'sharperthan', text: 'The way you bring Jesus into the text is so clear.' },
      { name: 'beth.reads', text: 'This feels personal and deeply rooted in Scripture.' }
    ]
  },
  {
    id: 'culture-in-christ',
    title: 'CULTURE IN CHRIST',
    category: 'TEACH',
    contentType: 'teaching',
    duration: '5:51',
    viewCount: '8,907',
    likeCount: 22980,
    commentCount: 640,
    saveCount: 4200,
    shareCount: 730,
    caption: 'Christian culture and Christ’s culture are not always the same thing.',
    teachingCaptions: [
      'Christian culture and Christ’s culture are not always the same thing.',
      'Sometimes we have inherited Christian habits and assumed they came directly from Christ.',
      'Jesus repeatedly confronted religious traditions when they obscured what God was revealing.',
      'The question is not simply, “Is this what Christians do?”',
      'The question is, “Is this consistent with Christ?”',
      'Something can be normal in church and still need to be examined through Jesus.'
    ],
    pinned: true,
    coverStyle: 'editorial',
    titleStyle: 'editorial',
    captionInterval: 3400,
    comments: [
      { name: 'keilyn', text: 'Waitttt this context changes everything 😭' },
      { name: 'philo.study', text: 'Can you do part 2? This was so helpful.' },
      { name: 'julesys', text: 'The reminder that Christ is the standard is so important.' }
    ]
  },
  {
    id: 'what-i-believe',
    title: 'WHAT I BELIEVE',
    category: 'TEACH',
    contentType: 'teaching',
    titleStyle: 'plain',
    duration: '3:42',
    viewCount: '6,404',
    likeCount: 14820,
    commentCount: 418,
    saveCount: 2930,
    shareCount: 620,
    caption: 'The gospel is not one message we repeat — it is the heart of the good news.',
    teachingCaptions: [
      'The gospel is not an abstract idea — it is the living message of reconciliation through Christ.',
      'Whenever we define the gospel by culture, performance, or tradition, we miss the heart of it.',
      'The good news is that God is revealing Himself in Christ, and we are invited into that life.'
    ],
    pinned: true,
    coverStyle: 'ordinary',
    comments: [
      { name: 'maraalso', text: 'This is the clearest explanation I’ve heard on the gospel in a while.' },
      { name: 'meganstrives', text: 'I needed this reminder today.' },
      { name: 'cassiedoesbible', text: 'The clarity of your wording is so refreshing.' }
    ]
  },
  {
    id: 'natural-portrait',
    title: '',
    category: 'YAUNAH',
    contentType: 'personal',
    duration: '0:17',
    viewCount: '1,332',
    likeCount: 4760,
    commentCount: 122,
    saveCount: 520,
    shareCount: 88,
    caption: 'Day in my life + feminine rest',
    teachingCaptions: ['A quiet little reminder that we can be both thoughtful and real in our walk with God.'],
    pinned: false,
    coverStyle: 'personal',
    titleStyle: 'hidden',
    comments: [
      { name: 'suzana.l', text: 'This smile is so warm' },
      { name: 'bethanyd', text: 'You look so peaceful here.' },
      { name: 'puffinreads', text: 'A good reminder of the beauty of everyday obedience.' }
    ]
  },
  {
    id: 'before-the-cross',
    title: 'BEFORE THE CROSS',
    category: 'TEACH',
    contentType: 'teaching',
    titleStyle: 'plain',
    duration: '7:08',
    viewCount: '14.2K',
    likeCount: 35700,
    commentCount: 1180,
    saveCount: 6940,
    shareCount: 930,
    caption: 'Before the cross, the heart of Scripture is already moving toward redemption.',
    teachingCaptions: [
      'Before the cross, people were still living under the weight of brokenness and law.',
      'The story of Scripture is not a random collection of events — it is a story of God’s redemptive plan.',
      'When we read the Old Testament with the cross in view, we see continuity rather than contradiction.',
      'The cross is not the end of the story — it is the center of it.'
    ],
    pinned: false,
    coverStyle: 'ordinary',
    comments: [
      { name: 'livelonglearn', text: 'This is the clearest explanation of scripture continuity I’ve seen.' },
      { name: 'danielle.g', text: 'I’ve literally never heard Hebrews explained like this.' },
      { name: 'jordinreads', text: 'This is exactly what I needed to hear.' }
    ]
  },
  {
    id: 'study-with-me',
    title: 'Bible Study With Me',
    category: 'STUDY',
    contentType: 'study',
    titleStyle: 'plain',
    duration: '0:37',
    viewCount: '3,761',
    likeCount: 7130,
    commentCount: 203,
    saveCount: 830,
    shareCount: 120,
    caption: 'Bible study with me: context over assumptions.',
    teachingCaptions: ['A short study prompt: read the verse, ask what it meant in context, then ask what it means for us today.'],
    pinned: false,
    coverStyle: 'study',
    comments: [
      { name: 'readingliving', text: 'This is such a good reminder to slow down and read context.' },
      { name: 'morganjaye', text: 'I love the practical approach.' },
      { name: 'ekaterina', text: 'This is my study mode now.' }
    ]
  },
  {
    id: 'wait-verses',
    title: 'Wait… that’s not what this verse means.',
    category: 'BREAK IT DOWN',
    contentType: 'study',
    duration: '1:12',
    viewCount: '5,209',
    likeCount: 11820,
    commentCount: 256,
    saveCount: 1740,
    shareCount: 271,
    caption: 'Reading the verse in context changes everything.',
    teachingCaptions: [
      'Reading a verse in isolation can lead to confusion and false assumptions.',
      'When you pull the surrounding context into view, the meaning becomes much more clear.',
      'A verse is part of a larger story — not a standalone slogan.'
    ],
    pinned: false,
    coverStyle: 'study',
    comments: [
      { name: 'kellee.b', text: 'This is the exact kind of teaching I need in my Bible reading.' },
      { name: 'p.chelsea', text: 'The verse context point is so important.' },
      { name: 'sarahhsays', text: 'I’ve been guilty of this and it really helps.' }
    ]
  },
  {
    id: 'economy-of-god',
    title: 'THE ECONOMY OF GOD',
    category: 'TEACH',
    contentType: 'teaching',
    titleStyle: 'editorial',
    duration: '5:16',
    viewCount: '12.8K',
    likeCount: 28670,
    commentCount: 914,
    saveCount: 5270,
    shareCount: 840,
    caption: 'God’s economy is not about scarcity — it is about obedience, surrender, and fruitfulness.',
    teachingCaptions: [
      'The economy of God is not built on fear or scarcity — it is rooted in divine wisdom and obedience.',
      'Often what looks like a loss in our lives is actually a necessary part of obedience.',
      'When we walk under God’s economy, our trust is not in self-preservation but in His provision.'
    ],
    pinned: false,
    coverStyle: 'editorial',
    comments: [
      { name: 'zurie', text: 'The phrase “economy of God” is so impactful.' },
      { name: 'trevor.study', text: 'I’m saving this for later because it’s so rich.' },
      { name: 'xoxojessica', text: 'This made the idea of obedience feel so much deeper.' }
    ]
  },
  {
    id: 'pink-mirror',
    title: '',
    category: 'YAUNAH',
    contentType: 'personal',
    duration: '0:32',
    viewCount: '2,941',
    likeCount: 6870,
    commentCount: 230,
    saveCount: 915,
    shareCount: 107,
    caption: 'A little pink mirror moment.',
    teachingCaptions: ['A quiet little reminder that personality matters too — we are not only teachers but people being formed by grace.'],
    pinned: false,
    coverStyle: 'personal',
    titleStyle: 'hidden',
    comments: [
      { name: 'sisterhoodread', text: 'This feels so real and natural.' },
      { name: 'ninaalltheway', text: 'You carry femininity and clarity together so beautifully.' },
      { name: 'tamarabib', text: 'This is very refreshing to see.' }
    ]
  },
  {
    id: 'hebrews-10-26',
    title: 'HEBREWS 10:26',
    category: 'TEACH',
    contentType: 'teaching',
    titleStyle: 'plain',
    duration: '6:21',
    viewCount: '9,506',
    likeCount: 22490,
    commentCount: 860,
    saveCount: 3980,
    shareCount: 711,
    caption: 'Read the context. Hebrews 10:26 cannot be detached from its surrounding warning.',
    teachingCaptions: [
      'Hebrews 10:26 is not a verse to weaponize apart from context.',
      'The writer is warning believers to take the gospel seriously, not to take grace lightly.',
      'When we read the surrounding context, the verse becomes a warning rooted in love, not fear.'
    ],
    pinned: false,
    coverStyle: 'ordinary',
    comments: [
      { name: 'amandamore', text: '“Read the context” is the best line ever.' },
      { name: 'theologynotes', text: 'This is exactly why context matters.' },
      { name: 'jordanwritedown', text: 'I needed this reminder in such a practical way.' }
    ]
  },
  {
    id: 'what-does-new-testament-actually-mean',
    title: 'What does “new testament” actually mean?',
    category: 'STUDY',
    titleStyle: 'plain',
    duration: '2:06',
    viewCount: '4,384',
    likeCount: 11260,
    commentCount: 247,
    saveCount: 1580,
    shareCount: 218,
    caption: 'A quick study note: the phrase has more meaning than we often assume.',
    teachingCaptions: ['Often we use the phrase “new testament” as a label without understanding what it means in Scripture and history.'],
    pinned: false,
    coverStyle: 'study',
    comments: [
      { name: 'michellechapel', text: 'This exact question keeps coming up in conversations.' },
      { name: 'curiousfortruth', text: 'This was so clear and helpful.' },
      { name: 'goodnewsstudy', text: 'This is such a good short breakdown.' }
    ]
  },
  {
    id: 'not-turn-30-sec-answer',
    title: 'me trying not to turn a 30 sec answer into a 2 hour Bible study',
    category: 'YAUNAH',
    contentType: 'personal',
    duration: '0:48',
    viewCount: '6,118',
    likeCount: 14320,
    commentCount: 311,
    saveCount: 2008,
    shareCount: 220,
    caption: 'Somebody stop me before I turn a short answer into a six-part theology series.',
    teachingCaptions: ['Humor is part of teaching too — a little honesty keeps the heart soft and the mind anchored in Jesus.'],
    pinned: false,
    coverStyle: 'portrait',
    comments: [
      { name: 'watchingwithgrace', text: 'This is honestly so me 😂' },
      { name: 'caitlynreads', text: 'The balance of humor and theology is beautiful.' },
      { name: 'hazel.dev', text: 'This made me laugh and nod at the same time.' }
    ]
  },
  {
    id: 'identity-over-performance',
    title: 'IDENTITY OVER PERFORMANCE',
    category: 'TEACH',
    contentType: 'teaching',
    titleStyle: 'plain',
    duration: '4:44',
    viewCount: '10.9K',
    likeCount: 25420,
    commentCount: 670,
    saveCount: 4830,
    shareCount: 640,
    caption: 'Our worth is not measured by performance, but by who God says we are in Christ.',
    teachingCaptions: [
      'The temptation to perform is not new, but it is always exhausting.',
      'Identity in Christ is not merely a teaching point — it is the ground of our peace.',
      'When we know who we are in Christ, we are no longer living to be accepted by the world.'
    ],
    pinned: false,
    coverStyle: 'ordinary',
    comments: [
      { name: 'faithbecoming', text: 'This is exactly where my heart needed to land.' },
      { name: 'shelby.reading', text: 'The practical explanation here is so gentle and strong.' },
      { name: 'thebibledaily', text: 'This is such a needed message in today’s culture.' }
    ]
  },
  {
    id: 'teaching-prep',
    title: 'what teaching prep actually looks like',
    category: 'YAUNAH',
    contentType: 'personal',
    titleStyle: 'plain',
    duration: '0:49',
    viewCount: '3,020',
    likeCount: 8700,
    commentCount: 204,
    saveCount: 1210,
    shareCount: 154,
    caption: 'Behind-the-scenes: context, notes, prayer, and a little caffeine.',
    teachingCaptions: ['Studying Scripture is not just gathering information — it is listening, praying, and letting the Spirit shape the message.'],
    pinned: false,
    coverStyle: 'study',
    comments: [
      { name: 'theocurious', text: 'I love seeing the real prep behind the content.' },
      { name: 'jesse.verse', text: 'This is so encouraging.' },
      { name: 'graceandliturgy', text: 'The process matters so much.' }
    ]
  },
  {
    id: 'how-to-discern',
    title: 'HOW TO DISCERN',
    category: 'TEACH',
    contentType: 'teaching',
    titleStyle: 'plain',
    duration: '5:03',
    viewCount: '11.4K',
    likeCount: 26980,
    commentCount: 831,
    saveCount: 4960,
    shareCount: 630,
    caption: 'Discernment begins with Scripture, context, and humility before God.',
    teachingCaptions: [
      'Discernment is not merely a spiritual instinct — it is a practice of reading, praying, and being shaped by the Word.',
      'When we approach Scripture with humility, the Holy Spirit gives clarity and conviction.',
      'We cannot discern what we do not know, and we cannot grow without a willingness to be corrected.'
    ],
    pinned: false,
    coverStyle: 'ordinary',
    comments: [
      { name: 'sylvia.p', text: 'This is such a practical and needed explanation.' },
      { name: 'doctrineanddeeply', text: 'This made discernment feel approachable and grounded.' },
      { name: 'becoming_yes', text: 'The humility piece is everything.' }
    ]
  },
  {
    id: 'natural-portrait-2',
    title: '',
    category: 'YAUNAH',
    contentType: 'personal',
    duration: '0:24',
    viewCount: '1,984',
    likeCount: 5210,
    commentCount: 128,
    saveCount: 756,
    shareCount: 95,
    caption: 'No title, just a little personal presence.',
    teachingCaptions: ['Sometimes a simple post is the best way to let people feel like they know you.'],
    pinned: false,
    coverStyle: 'personal',
    titleStyle: 'hidden',
    comments: [
      { name: 'readingwithgrace', text: 'You have such a warm presence.' },
      { name: 'restless2rooted', text: 'This feels like a genuine moment.' },
      { name: 'hannahsays', text: 'So grateful for the personal side of this account.' }
    ]
  },
  {
    id: 'eternal-salvation',
    title: 'ETERNAL SALVATION',
    category: 'TEACH',
    contentType: 'teaching',
    titleStyle: 'plain',
    duration: '6:38',
    viewCount: '8,221',
    likeCount: 19250,
    commentCount: 559,
    saveCount: 3910,
    shareCount: 477,
    caption: 'Salvation is not a slogan; it is the grace of God through Christ that transforms us.',
    teachingCaptions: [
      'The gospel is not a set of ideas to memorize — it is the power of God for salvation and transformation.',
      'We are saved by grace through faith, and that grace produces a life that belongs to Christ.',
      'The heart of the message is not only forgiveness, but restoration into relationship with God.'
    ],
    pinned: false,
    coverStyle: 'ordinary',
    comments: [
      { name: 'huntochrist', text: 'This is such a grounded and beautiful explanation.' },
      { name: 'tessalonica', text: 'This was deeply comforting and clear.' },
      { name: 'himandhithy', text: 'It feels like the gospel is being explained in a way that is gentle but firm.' }
    ]
  },
  {
    id: 'armor-of-god',
    title: 'THE ARMOR OF GOD',
    category: 'TEACH',
    contentType: 'teaching',
    titleStyle: 'editorial',
    duration: '4:27',
    viewCount: '9,873',
    likeCount: 21710,
    commentCount: 624,
    saveCount: 4050,
    shareCount: 527,
    caption: 'Spiritual armor is not about becoming fierce by ourselves — it is about standing in Christ.',
    teachingCaptions: [
      'The armor of God is not a list of traits we conjure up — it is the posture of standing in Christ.',
      'Truth, righteousness, peace, faith, salvation, and the Word are all anchored in who God is and what He has done.',
      'The armor is not merely defensive; it is the way we stand faithfully in the midst of spiritual battle.'
    ],
    pinned: false,
    coverStyle: 'editorial',
    comments: [
      { name: 'Biblebaby', text: 'I have been thinking about this passage in a different way since your video.' },
      { name: 'surely.understood', text: 'This is so practical and grounded in truth.' },
      { name: 'writersofhope', text: 'The reminder that it is Christ-centered really hit me.' }
    ]
  }
];

const shootPlans = {
  'start-here': { scene: 'testimony', title: 'START HERE', style: 'plain', photoSlot: true, direction: 'Tight eye-level portrait, warm window light, quiet room; leave the left side open for the title.' },
  'culture-in-christ': { scene: 'culture', title: 'CULTURE IN CHRIST', style: 'editorial', direction: 'Seated three-quarter portrait on the right; clean cream wall and soft side light leave negative space on the left.' },
  'what-i-believe': { scene: 'talking-head', title: 'WHAT I BELIEVE', style: 'plain', direction: 'Casual eye-level phone camera, shoulders in frame, natural bedroom light; keep the Bible visible but secondary.' },
  'natural-portrait': { scene: 'candid', title: '', style: 'hidden', photoSlot: true, direction: 'Unposed daylight moment, medium crop, no designed title; let the personal image carry the post.' },
  'before-the-cross': { scene: 'intimate', title: 'BEFORE THE CROSS', style: 'editorial', direction: 'Close, intimate crop with a darker background and one warm side light; place the short title low in the open area.' },
  'study-with-me': { scene: 'study-table', title: '', style: 'hidden', direction: 'Overhead desk angle: open Bible centered, pen and notes in frame, window light from the upper left.' },
  'wait-verses': { scene: 'car', title: 'READ THE WHOLE PASSAGE', style: 'plain', direction: 'Casual car Scripture breakdown, recorded on a phone with one short native caption.' },
  'economy-of-god': { scene: 'scholarly', title: "GOD'S ECONOMY", style: 'editorial', direction: 'Study-table composition with open Bible and notes in the foreground; teacher in soft focus at the right.' },
  'pink-mirror': { scene: 'mirror', title: '', style: 'hidden', photoSlot: true, direction: 'Vertical mirror framing, casual outfit and phone visible, soft pink room accent; no title.' },
  'hebrews-10-26': { scene: 'car', title: 'NOT WHAT YOU THINK', kicker: 'HEBREWS 10:26', style: 'plain', direction: 'Dash-mounted eye-level car shot, face area unobstructed, daylight through the side window; use bold on-screen text.' },
  'what-does-new-testament-actually-mean': { scene: 'open-pages', title: 'NEW TESTAMENT', style: 'plain', direction: 'Top-down close-up of open Bible pages with one handwritten margin note; avoid a face or poster layout.' },
  'not-turn-30-sec-answer': { scene: 'humor', title: 'TWO-HOUR BIBLE STUDY', style: 'plain', direction: 'Quick bedroom phone frame with a notebook and playful reaction prop; casual light, not a polished graphic.' },
  'identity-over-performance': { scene: 'identity', title: 'IDENTITY OVER PERFORMANCE', style: 'editorial', direction: 'Soft bright personal frame with gentle daylight; elegant title sits in open space.' },
  'teaching-prep': { scene: 'prep-desk', title: 'TEACHING PREP', style: 'plain', direction: 'Overhead behind-the-scenes desk: handwritten outline, Bible, highlighter and coffee, with natural side light.' },
  'how-to-discern': { scene: 'discern', title: 'HOW TO DISCERN', style: 'plain', direction: 'Straight-on conversational teaching frame, calm room, Bible at the lower edge; title on a compact dark strip.' },
  'natural-portrait-2': { scene: 'personal', title: '', style: 'hidden', photoSlot: true, direction: 'Candid medium shot in a lived-in room, daylight and relaxed posture; no designed title.' },
  'eternal-salvation': { scene: 'salvation', title: 'ETERNAL SALVATION', style: 'editorial', direction: 'Still portrait by a window, composed and serious; restrained cream serif title over a darkened lower corner.' },
  'armor-of-god': { scene: 'explainer', title: 'THE ARMOR OF GOD', style: 'plain', direction: 'Seated Bible-teaching setup at eye level; no costume or symbolic props, just Yaunah explaining the passage.' }
};

function blueprintPerson(x, y, scale, clothing, skin = '#9b725e', hair = '#332820') {
  return `<g transform="translate(${x} ${y}) scale(${scale})"><path d="M-74 294Q-68 190 0 184Q68 190 74 294Z" fill="${clothing}"/><ellipse cx="0" cy="75" rx="43" ry="55" fill="${skin}"/><path d="M-44 73Q-54 15-9 8Q39 1 47 51L43 90Q31 63 17 54Q-5 77-43 82Z" fill="${hair}"/></g>`;
}

function blueprintBible(x, y, scale = 1, page = '#f7efdd') {
  return `<g transform="translate(${x} ${y}) scale(${scale})"><path d="M0 8Q55-4 104 18V110Q54 91 0 106Z" fill="${page}" stroke="#9a805e" stroke-width="2"/><path d="M104 18Q153-4 208 8V106Q154 91 104 110Z" fill="#fff9ed" stroke="#9a805e" stroke-width="2"/><path d="M104 18V110" stroke="#b9a17c" stroke-width="2"/><path d="M16 29Q55 20 87 31M16 44Q54 35 87 46M16 59Q54 50 87 61M121 31Q155 20 192 29M121 46Q155 35 192 44M121 61Q155 50 192 59" fill="none" stroke="#b6a58b" stroke-width="3" opacity=".8"/></g>`;
}

function renderBlueprintArt(scene) {
  const art = {
    testimony: `<rect width="300" height="500" fill="#c9a78d"/><rect x="22" y="38" width="126" height="220" rx="3" fill="#e8d6bd"/><path d="M83 38V258M22 145H148" stroke="#a78068" stroke-width="7"/><rect x="10" y="330" width="280" height="170" fill="#806351"/>${blueprintPerson(205, 105, 1.05, '#5b3935')}`,
    culture: `<rect width="300" height="500" fill="#374039"/><path d="M22 0H188V500H22Z" fill="#efdfc8"/><path d="M50 0Q105 28 160 0V270H50Z" fill="#d8c4a5"/>${blueprintPerson(224, 120, .98, '#4f5548', '#a57860', '#2e2520')}<circle cx="258" cy="82" r="52" fill="#d6bd8e" opacity=".23"/>`,
    'talking-head': `<rect width="300" height="500" fill="#e6d8cb"/><rect x="0" y="332" width="300" height="168" fill="#b9947b"/><rect x="21" y="51" width="86" height="132" rx="4" fill="#faf3e8"/><path d="M64 51V183M21 116H107" stroke="#d1bba4" stroke-width="4"/>${blueprintPerson(153, 115, 1.05, '#65594b')}<path d="M236 267q26-49 52 0v65h-52Z" fill="#567061"/>`,
    candid: `<rect width="300" height="500" fill="#e9d9d2"/><circle cx="235" cy="100" r="72" fill="#f6e7ca"/><path d="M0 376Q120 340 300 385V500H0Z" fill="#b77e79"/><rect x="20" y="66" width="90" height="235" rx="45" fill="#d8b5a8" opacity=".55"/>${blueprintPerson(152, 136, .96, '#efe1d8', '#986e5a', '#332622')}`,
    intimate: `<rect width="300" height="500" fill="#252828"/><path d="M0 0H142L76 500H0Z" fill="#887465"/><ellipse cx="194" cy="185" rx="154" ry="190" fill="#ad896d" opacity=".24"/>${blueprintPerson(202, 66, 1.35, '#393537', '#946d59', '#201c1a')}<rect x="26" y="374" width="106" height="8" fill="#e7d6bd" opacity=".75"/>`,
    'study-table': `<rect width="300" height="500" fill="#d3c2aa"/><path d="M0 288H300V500H0Z" fill="#735b49"/><rect x="18" y="27" width="264" height="215" fill="#eadfcf"/><path d="M150 27V242M18 135H282" stroke="#baa383" stroke-width="5"/><ellipse cx="150" cy="392" rx="119" ry="63" fill="#604a39"/>${blueprintBible(48, 322, .92)}<rect x="218" y="330" width="33" height="45" rx="5" fill="#8c5f48"/><path d="M224 325Q235 303 245 325" fill="none" stroke="#f0dcb8" stroke-width="4"/>`,
    'marked-page': `<rect width="300" height="500" fill="#a98e70"/><path d="M-20 68Q126 5 322 76V490Q130 427-20 480Z" fill="#fff8eb"/><path d="M18 141Q137 98 280 143M15 183Q140 140 285 185M12 225Q139 182 288 227M8 267Q140 224 290 269M5 309Q142 266 293 311" stroke="#9e907d" stroke-width="5" opacity=".72"/><path d="M190 83V314" stroke="#d5ab62" stroke-width="14" opacity=".52"/><path d="M262 360Q218 319 202 280" stroke="#8e6850" stroke-width="22" stroke-linecap="round"/>`,
    scholarly: `<rect width="300" height="500" fill="#3b403a"/><rect x="14" y="26" width="273" height="240" fill="#687366"/><path d="M42 56H258M42 90H258M42 124H258" stroke="#d7c7aa" stroke-width="7" opacity=".6"/><rect x="0" y="300" width="300" height="200" fill="#795b43"/>${blueprintPerson(232, 75, .77, '#494b43')} ${blueprintBible(18, 353, .92)}<rect x="225" y="364" width="48" height="84" fill="#a67e57"/>`,
    mirror: `<rect width="300" height="500" fill="#e5c2c6"/><rect x="37" y="40" width="226" height="413" rx="112" fill="#fff0e8" stroke="#bb8690" stroke-width="12"/><path d="M54 178Q150 107 246 178V437H54Z" fill="#d5a6aa"/>${blueprintPerson(150, 112, .86, '#544045', '#a77e68', '#342724')}<rect x="204" y="238" width="27" height="64" rx="5" fill="#38343a"/><circle cx="217" cy="246" r="3" fill="#f1d1c5"/>`,
    car: `<rect width="300" height="500" fill="#53616a"/><path d="M0 0H300V221Q150 175 0 221Z" fill="#ced8d5"/><path d="M17 22H136V166H17ZM164 22H282V166H164Z" fill="#e7eee8" stroke="#37444a" stroke-width="12"/><path d="M0 231Q150 190 300 231V500H0Z" fill="#34383a"/>${blueprintPerson(143, 124, .95, '#6d4f47', '#a97d64', '#282322')}<path d="M0 400Q72 339 123 430M300 400Q228 339 177 430" fill="none" stroke="#111719" stroke-width="24"/><circle cx="150" cy="416" r="49" fill="none" stroke="#111719" stroke-width="14"/><rect x="260" y="280" width="17" height="29" rx="4" fill="#e2c78f"/>`,
    'open-pages': `<rect width="300" height="500" fill="#b39b7e"/><path d="M-15 114Q135 54 150 114V446Q83 395-15 442Z" fill="#fff9eb"/><path d="M315 114Q165 54 150 114V446Q217 395 315 442Z" fill="#f5eddd"/><path d="M150 114V446" stroke="#9c8466" stroke-width="4"/><path d="M12 169Q77 145 129 164M12 203Q77 179 129 198M12 237Q77 213 129 232M12 271Q77 247 129 266M170 164Q225 145 288 169M170 198Q225 179 288 203M170 232Q225 213 288 237M170 266Q225 247 288 271" stroke="#a99a82" stroke-width="5"/><path d="M27 238Q78 220 119 235" stroke="#cb9860" stroke-width="13" opacity=".65"/>`,
    humor: `<rect width="300" height="500" fill="#d8c6bc"/><rect x="0" y="326" width="300" height="174" fill="#b08982"/><path d="M0 326Q150 270 300 326" fill="#eee0d5"/><rect x="24" y="40" width="109" height="100" rx="22" fill="#fff9ef"/><path d="M52 143L40 164L77 141" fill="#fff9ef"/><circle cx="61" cy="87" r="8" fill="#4b4441"/><circle cx="97" cy="87" r="8" fill="#4b4441"/><path d="M63 111Q79 101 96 111" stroke="#4b4441" stroke-width="5" fill="none"/><rect x="171" y="205" width="89" height="152" rx="9" fill="#39383b"/><rect x="180" y="218" width="71" height="119" fill="#f3e5cf"/><path d="M190 250H241M190 271H232M190 292H238" stroke="#827363" stroke-width="5"/><path d="M27 456Q78 413 135 452" stroke="#594940" stroke-width="13" fill="none"/>`,
    identity: `<rect width="300" height="500" fill="#f1e8dc"/><circle cx="72" cy="102" r="95" fill="#fff9ee"/><path d="M0 316Q150 286 300 316V500H0Z" fill="#d8c8b3"/><rect x="202" y="45" width="65" height="209" fill="#fffaf0" opacity=".7"/>${blueprintPerson(143, 95, .98, '#d8bcb0', '#a27a64', '#392c27')}`,
    'prep-desk': `<rect width="300" height="500" fill="#8f725b"/><rect x="18" y="26" width="126" height="176" rx="4" fill="#f2eadc" transform="rotate(-7 18 26)"/><path d="M38 77L124 66M35 103L120 92M33 128L116 117M31 153L110 142" stroke="#958674" stroke-width="5"/><rect x="163" y="30" width="117" height="199" fill="#efe6d6" transform="rotate(6 163 30)"/><path d="M183 79L263 87M180 108L258 116M177 137L253 145" stroke="#a08f79" stroke-width="5"/><ellipse cx="150" cy="350" rx="134" ry="91" fill="#614a38"/>${blueprintBible(48, 299, .85)}<rect x="218" y="299" width="31" height="61" rx="5" fill="#bd965e"/>`,
    discern: `<rect width="300" height="500" fill="#c6b59e"/><rect x="0" y="0" width="300" height="500" fill="#e6ddd0"/><rect x="18" y="37" width="78" height="218" fill="#c5d0c4"/><path d="M57 37V255M18 145H96" stroke="#a4b19f" stroke-width="4"/>${blueprintPerson(157, 104, 1.04, '#586052')}<rect x="32" y="408" width="236" height="92" fill="#775f49"/><rect x="111" y="379" width="78" height="21" rx="10" fill="#34383a"/><path d="M150 399V425" stroke="#34383a" stroke-width="6"/>`,
    personal: `<rect width="300" height="500" fill="#dfd1c2"/><rect x="28" y="28" width="123" height="222" fill="#f7efdF"/><path d="M90 28V250M28 139H151" stroke="#b6a28b" stroke-width="5"/><path d="M0 360Q150 315 300 360V500H0Z" fill="#73816e"/><rect x="199" y="257" width="72" height="111" rx="8" fill="#936e53"/><path d="M205 255Q235 205 265 255" fill="none" stroke="#f0d9b4" stroke-width="8"/>${blueprintPerson(105, 177, .78, '#ba8e7f')}`,
    salvation: `<rect width="300" height="500" fill="#343a3a"/><rect x="161" y="0" width="139" height="293" fill="#d7c8ab"/><path d="M230 0H300V293H230Z" fill="#f5e7c7" opacity=".58"/><path d="M0 347Q150 311 300 347V500H0Z" fill="#514a43"/>${blueprintPerson(130, 103, 1.03, '#464849', '#96705a', '#252321')}<rect x="181" y="340" width="105" height="11" fill="#c3ab85" opacity=".75"/>`,
    explainer: `<rect width="300" height="500" fill="#d9d0c1"/><rect x="15" y="31" width="270" height="251" fill="#b8c1b0"/><path d="M34 61H266M34 94H266" stroke="#edf0e5" stroke-width="6" opacity=".72"/><rect x="0" y="336" width="300" height="164" fill="#765c47"/>${blueprintPerson(124, 115, .91, '#5b5045')}<rect x="177" y="305" width="95" height="34" fill="#9a7955"/><path d="M184 308Q220 293 264 308" fill="none" stroke="#f8efd9" stroke-width="7"/>${blueprintBible(161, 348, .62)}`
  };
  return `<svg class="thumb__art" width="300" height="500" viewBox="0 0 300 500" aria-hidden="true" focusable="false">${art[scene] || art['talking-head']}</svg>`;
}

posts.forEach((post) => {
  const plan = shootPlans[post.id];
  Object.assign(post, plan, {
    titleStyle: plan.style,
    coverStyle: plan.style === 'editorial' ? 'editorial' : 'ordinary'
  });
});
const DEFAULT_THUMBNAIL_CONTENT = Object.fromEntries(posts.map((post) => [post.id, {
  title: post.title || '',
  image: FRAME_MAP[post.id],
  titleStyle: post.titleStyle
}]));

const profileAvatar = document.getElementById('profileAvatar');
const bioBlock = document.getElementById('bioBlock');
const profileEditDialog = document.getElementById('profileEditDialog');
const profileEditForm = document.getElementById('profileEditForm');
const profileEditStatus = document.getElementById('profileEditStatus');
const photoSaveStatus = document.getElementById('photoSaveStatus');
const thumbGrid = document.getElementById('thumbGrid');
const thumbnailImagePicker = document.getElementById('thumbnailImagePicker');
const profilePhotoPicker = document.getElementById('profilePhotoPicker');
const profilePhotoButton = document.getElementById('profilePhotoButton');
const photoEditToggle = document.getElementById('photoEditToggle');
const prototypePlanningToggle = document.getElementById('prototypePlanningToggle');
const shootBlueprint = document.getElementById('shootBlueprint');
const shootBlueprintClose = document.getElementById('shootBlueprintClose');
const themeToggle = document.getElementById('themeToggle');
const thumbnailEditDialog = document.getElementById('thumbnailEditDialog');
const thumbnailEditForm = document.getElementById('thumbnailEditForm');
const thumbnailEditStatus = document.getElementById('thumbnailEditStatus');
const creatorWorkspace = document.getElementById('creatorWorkspace');
const editProfileButton = document.getElementById('editProfileButton');
const profileOptionsDialog = document.getElementById('profileOptionsDialog');
const pendingThumbnailEdits = new Map();
let editingThumbnailId = null;
let isFollowing = false;

function setTheme(isDark, persist = false) {
  document.body.classList.toggle('theme-dark', isDark);
  if (themeToggle) {
    const label = isDark ? 'Switch to light mode' : 'Switch to dark mode';
    themeToggle.setAttribute('aria-label', label);
    themeToggle.setAttribute('title', label);
    themeToggle.setAttribute('aria-pressed', String(isDark));
  }
  if (persist) {
    try {
      localStorage.setItem('yaunah-profile-theme', isDark ? 'dark' : 'light');
    } catch (error) {
      // Theme switching still works for this page if storage is unavailable.
    }
  }
}

let initialDarkTheme = false;
try {
  initialDarkTheme = localStorage.getItem('yaunah-profile-theme') === 'dark';
} catch (error) {
  initialDarkTheme = false;
}
setTheme(initialDarkTheme);

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    setTheme(!document.body.classList.contains('theme-dark'), true);
  });
}

if (profileAvatar) {
  profileAvatar.style.backgroundImage = 'linear-gradient(135deg, #d7b69e 0%, #6d7d69 100%)';
}

function setProfilePhoto(filename) {
  if (!profileAvatar) return;

  profileAvatar.style.backgroundImage = `url('${filename}')`;
  profileAvatar.classList.add('has-photo');

  const miniAvatar = document.querySelector('.mini-avatar');
  if (miniAvatar) {
    miniAvatar.style.backgroundImage = `url('${filename}')`;
    miniAvatar.classList.add('has-photo');
  }
}

function loadProfileSettings() {
  try {
    const saved = JSON.parse(localStorage.getItem(PROFILE_STORAGE_KEY) || '{}');
    profileSettings = {
      ...DEFAULT_PROFILE_SETTINGS,
      ...saved,
      thumbnailImages: saved.thumbnailImages && typeof saved.thumbnailImages === 'object'
        ? saved.thumbnailImages
        : {},
      thumbnailTitles: saved.thumbnailTitles && typeof saved.thumbnailTitles === 'object'
        ? saved.thumbnailTitles
        : {}
    };
  } catch (error) {
    profileSettings = { ...DEFAULT_PROFILE_SETTINGS, thumbnailImages: {}, thumbnailTitles: {} };
  }
}

function saveProfileSettings(settings = profileSettings) {
  try {
    localStorage.setItem(PROFILE_STORAGE_KEY, JSON.stringify(settings));
    return true;
  } catch (error) {
    return false;
  }
}

function applySavedProfileSettings() {
  const handle = `@${profileSettings.handle}`;
  const displayName = document.querySelector('.display-name');
  if (displayName) displayName.textContent = profileSettings.displayName;
  document.querySelectorAll('.handle-row, .topbar-username, .video-author span, .caption-user').forEach((node) => {
    node.textContent = handle;
  });
  const musicTitle = document.querySelector('.music-meta strong');
  if (musicTitle) musicTitle.textContent = profileSettings.displayName;
  setBioText();
  setProfilePhoto(profileSettings.profilePhoto || PROFILE_PHOTO);
  posts.forEach((post) => {
    const defaults = DEFAULT_THUMBNAIL_CONTENT[post.id];
    const hasTitleOverride = Object.prototype.hasOwnProperty.call(profileSettings.thumbnailTitles, post.id);
    post.title = hasTitleOverride ? profileSettings.thumbnailTitles[post.id] : defaults.title;
    post.titleStyle = hasTitleOverride && defaults.titleStyle === 'hidden' && post.title
      ? 'plain'
      : defaults.titleStyle;
    post.customImage = profileSettings.thumbnailImages[post.id] || defaults.image;
  });
}

function openProfileEditor() {
  document.getElementById('profileNameInput').value = profileSettings.displayName;
  document.getElementById('profileHandleInput').value = profileSettings.handle;
  document.getElementById('profileBioInput').value = profileSettings.bio;
  profileEditStatus.textContent = '';
  profileEditDialog.showModal();
}

async function imageFileToDataUrl(file) {
  const objectUrl = URL.createObjectURL(file);
  try {
    const image = await new Promise((resolve, reject) => {
      const element = new Image();
      element.onload = () => resolve(element);
      element.onerror = reject;
      element.src = objectUrl;
    });
    const scale = Math.min(1, 1200 / Math.max(image.naturalWidth, image.naturalHeight));
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    canvas.getContext('2d').drawImage(image, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.82));
    if (!blob) throw new Error('This image could not be prepared.');
    return await new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
}

function applyDefaultRealAssetMap() {
  posts.forEach((post) => {
    post.customImage = FRAME_MAP[post.id];
  });
}

function setPlanningMode(isOpen) {
  if (!shootBlueprint) return;
  shootBlueprint.classList.toggle('is-open', isOpen);
  document.body.classList.toggle('prototype-planning-on', isOpen);
  if (prototypePlanningToggle) {
    prototypePlanningToggle.setAttribute('aria-pressed', String(isOpen));
    prototypePlanningToggle.classList.toggle('is-active', isOpen);
  }
}

if (thumbnailImagePicker) {
  thumbnailImagePicker.addEventListener('change', async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const postIndex = Number(thumbnailImagePicker.dataset.postIndex || 0);
    const post = posts[postIndex];
    const pending = getPendingThumbnailEdit(post);
    thumbnailEditStatus.textContent = 'Preparing photo…';
    try {
      pending.customImage = await imageFileToDataUrl(file);
      pending.imageDirty = true;
      post.customImage = pending.customImage;
      post.imageSize = 'cover';
      post.imagePosition = 'center center';
      renderThumbGrid();
      thumbnailEditStatus.textContent = 'Photo preview updated. Save this thumbnail or use Save all.';
      updateThumbnailSaveControls();
    } catch (error) {
      thumbnailEditStatus.textContent = error.message || 'Could not load this photo.';
    } finally {
      thumbnailImagePicker.value = '';
      delete thumbnailImagePicker.dataset.postIndex;
    }
  });
}

if (profilePhotoPicker) {
  profilePhotoPicker.addEventListener('change', async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const previous = profileSettings.profilePhoto;
    if (photoSaveStatus) photoSaveStatus.textContent = 'Saving profile photo…';
    try {
      profileSettings.profilePhoto = await imageFileToDataUrl(file);
      if (!saveProfileSettings()) throw new Error('Browser storage is full. Try a smaller image.');
      setProfilePhoto(profileSettings.profilePhoto);
      if (photoSaveStatus) photoSaveStatus.textContent = 'Profile photo saved in this browser.';
    } catch (error) {
      profileSettings.profilePhoto = previous;
      if (photoSaveStatus) photoSaveStatus.textContent = error.message || 'Could not save this photo.';
    } finally {
      profilePhotoPicker.value = '';
    }
  });
}

if (photoEditToggle) {
  photoEditToggle.addEventListener('click', () => {
    const isEditing = !document.body.classList.contains('photo-edit-mode');
    if (!isEditing && hasPendingThumbnailEdits()) {
      photoSaveStatus.textContent = 'Save or reset your pending thumbnail changes before finishing.';
      return;
    }
    document.body.classList.toggle('photo-edit-mode', isEditing);
    photoEditToggle.setAttribute('aria-pressed', String(isEditing));
    photoEditToggle.querySelector('span').textContent = isEditing ? 'Done' : 'Edit thumbnails';
    updateThumbnailSaveControls();
  });
}

if (profilePhotoButton && profilePhotoPicker) {
  profilePhotoButton.addEventListener('click', () => profilePhotoPicker.click());
}

function getPendingThumbnailEdit(post){
  if(!pendingThumbnailEdits.has(post.id)){
    pendingThumbnailEdits.set(post.id, {
      title: post.title || '',
      customImage: post.customImage,
      titleDirty: false,
      imageDirty: false
    });
  }
  return pendingThumbnailEdits.get(post.id);
}

function hasPendingThumbnailEdits(){
  return Array.from(pendingThumbnailEdits.values()).some(edit => edit.titleDirty || edit.imageDirty);
}

function updateThumbnailSaveControls(){
  const saveAll = document.getElementById('saveAllThumbnailsButton');
  if(saveAll) saveAll.disabled = !hasPendingThumbnailEdits();
}

function openThumbnailEditor(postIndex){
  const post = posts[postIndex];
  if(!post) return;
  editingThumbnailId = post.id;
  getPendingThumbnailEdit(post);
  document.getElementById('thumbnailEditTitle').textContent = 'Edit ' + (post.title || post.caption || 'thumbnail');
  document.getElementById('thumbnailTitleInput').value = pendingThumbnailEdits.get(post.id).title;
  thumbnailEditStatus.textContent = '';
  thumbnailEditDialog.showModal();
}

function commitThumbnailEdits(postIds){
  const edits = postIds.map(id => [id, pendingThumbnailEdits.get(id)]).filter(([, edit]) => edit && (edit.titleDirty || edit.imageDirty));
  if(!edits.length) return false;
  const nextSettings = {
    ...profileSettings,
    thumbnailImages: { ...profileSettings.thumbnailImages },
    thumbnailTitles: { ...profileSettings.thumbnailTitles }
  };
  edits.forEach(([id, edit]) => {
    const defaults = DEFAULT_THUMBNAIL_CONTENT[id];
    if(edit.titleDirty){
      if(edit.title === defaults.title) delete nextSettings.thumbnailTitles[id];
      else nextSettings.thumbnailTitles[id] = edit.title;
    }
    if(edit.imageDirty){
      if(edit.customImage === defaults.image) delete nextSettings.thumbnailImages[id];
      else nextSettings.thumbnailImages[id] = edit.customImage;
    }
  });
  if(!saveProfileSettings(nextSettings)){
    const message = 'Browser storage is full. Try a smaller image.';
    thumbnailEditStatus.textContent = message;
    photoSaveStatus.textContent = message;
    return false;
  }
  profileSettings = nextSettings;
  edits.forEach(([id]) => pendingThumbnailEdits.delete(id));
  applySavedProfileSettings();
  renderThumbGrid();
  updateThumbnailSaveControls();
  return true;
}

document.getElementById('thumbnailTitleInput').addEventListener('input', (event) => {
  const post = posts.find(item => item.id === editingThumbnailId);
  if(!post) return;
  const edit = getPendingThumbnailEdit(post);
  edit.title = event.target.value;
  edit.titleDirty = edit.title !== (Object.prototype.hasOwnProperty.call(profileSettings.thumbnailTitles, post.id)
    ? profileSettings.thumbnailTitles[post.id]
    : DEFAULT_THUMBNAIL_CONTENT[post.id].title);
  post.title = edit.title;
  if(edit.title && post.titleStyle === 'hidden') post.titleStyle = 'plain';
  else if(!edit.title && DEFAULT_THUMBNAIL_CONTENT[post.id].titleStyle === 'hidden') post.titleStyle = 'hidden';
  renderThumbGrid();
  updateThumbnailSaveControls();
});

document.getElementById('changeThumbnailPhotoButton').addEventListener('click', () => {
  const postIndex = posts.findIndex(item => item.id === editingThumbnailId);
  if(postIndex < 0) return;
  thumbnailImagePicker.dataset.postIndex = String(postIndex);
  thumbnailImagePicker.click();
});

document.getElementById('closeThumbnailEdit').addEventListener('click', () => thumbnailEditDialog.close());
document.getElementById('cancelThumbnailEdit').addEventListener('click', () => thumbnailEditDialog.close());
thumbnailEditDialog.addEventListener('click', event => {
  if(event.target === thumbnailEditDialog) thumbnailEditDialog.close();
});
thumbnailEditForm.addEventListener('submit', event => {
  event.preventDefault();
  if(!commitThumbnailEdits([editingThumbnailId])){
    if(!hasPendingThumbnailEdits()) thumbnailEditStatus.textContent = 'No thumbnail changes to save.';
    return;
  }
  thumbnailEditDialog.close();
  photoSaveStatus.textContent = 'Thumbnail saved in this browser.';
});

document.getElementById('resetThumbnailButton').addEventListener('click', () => {
  const post = posts.find(item => item.id === editingThumbnailId);
  if(!post) return;
  const defaults = DEFAULT_THUMBNAIL_CONTENT[post.id];
  const nextSettings = {
    ...profileSettings,
    thumbnailImages: { ...profileSettings.thumbnailImages },
    thumbnailTitles: { ...profileSettings.thumbnailTitles }
  };
  delete nextSettings.thumbnailImages[post.id];
  delete nextSettings.thumbnailTitles[post.id];
  if(!saveProfileSettings(nextSettings)){
    thumbnailEditStatus.textContent = 'Could not reset this thumbnail in browser storage.';
    return;
  }
  profileSettings = nextSettings;
  pendingThumbnailEdits.delete(post.id);
  post.title = defaults.title;
  post.titleStyle = defaults.titleStyle;
  post.customImage = defaults.image;
  delete post.imageSize;
  delete post.imagePosition;
  renderThumbGrid();
  updateThumbnailSaveControls();
  thumbnailEditDialog.close();
  photoSaveStatus.textContent = 'Thumbnail restored to its original photo and text.';
});

document.getElementById('saveAllThumbnailsButton').addEventListener('click', () => {
  const ids = Array.from(pendingThumbnailEdits.keys());
  if(!hasPendingThumbnailEdits()){
    photoSaveStatus.textContent = 'There are no unsaved thumbnail changes.';
    return;
  }
  if(!commitThumbnailEdits(ids)) return;
  photoSaveStatus.textContent = 'All changed thumbnails saved in this browser.';
});

document.getElementById('resetAllThumbnailsButton').addEventListener('click', () => {
  if(!window.confirm('Reset every thumbnail photo and text overlay to its original version? Your profile photo and profile details will stay as they are.')) return;
  const nextSettings = { ...profileSettings, thumbnailImages: {}, thumbnailTitles: {} };
  if(!saveProfileSettings(nextSettings)){
    photoSaveStatus.textContent = 'Could not reset thumbnails in browser storage.';
    return;
  }
  profileSettings = nextSettings;
  pendingThumbnailEdits.clear();
  applyDefaultRealAssetMap();
  applySavedProfileSettings();
  renderThumbGrid();
  updateThumbnailSaveControls();
  photoSaveStatus.textContent = 'All thumbnails restored to their original photos and text.';
});

function setCreatorMode(enabled){
  if(!enabled && hasPendingThumbnailEdits()){
    photoSaveStatus.textContent = 'Save all or reset the staged thumbnail changes before switching to follower view.';
    return;
  }
  document.body.classList.toggle('creator-mode', enabled);
  creatorWorkspace.hidden = !enabled;
  editProfileButton.textContent = enabled ? 'Follower preview' : isFollowing ? 'Following' : 'Follow';
  editProfileButton.setAttribute('aria-label', enabled ? 'Switch to follower view' : isFollowing ? 'Unfollow this profile' : 'Follow this profile');
  editProfileButton.setAttribute('aria-pressed', String(!enabled && isFollowing));
  if(!enabled && document.body.classList.contains('photo-edit-mode')){
    document.body.classList.remove('photo-edit-mode');
    photoEditToggle.setAttribute('aria-pressed', 'false');
    photoEditToggle.querySelector('span').textContent = 'Edit thumbnails';
  }
}

editProfileButton.addEventListener('click', () => {
  if(document.body.classList.contains('creator-mode')){
    setCreatorMode(false);
    return;
  }
  isFollowing = !isFollowing;
  editProfileButton.textContent = isFollowing ? 'Following' : 'Follow';
  editProfileButton.setAttribute('aria-label', isFollowing ? 'Unfollow this profile' : 'Follow this profile');
  editProfileButton.setAttribute('aria-pressed', String(isFollowing));
});
document.getElementById('profileOptionsButton').addEventListener('click', () => profileOptionsDialog.showModal());
document.getElementById('closeProfileOptions').addEventListener('click', () => profileOptionsDialog.close());
profileOptionsDialog.addEventListener('click', event => {
  if(event.target === profileOptionsDialog) profileOptionsDialog.close();
});
document.getElementById('enterCreatorModeButton').addEventListener('click', () => {
  profileOptionsDialog.close();
  setCreatorMode(true);
});
document.getElementById('editProfileDetailsButton').addEventListener('click', openProfileEditor);
document.getElementById('closeProfileEdit').addEventListener('click', () => profileEditDialog.close());
document.getElementById('cancelProfileEdit').addEventListener('click', () => profileEditDialog.close());
profileEditDialog.addEventListener('click', (event) => {
  if (event.target === profileEditDialog) profileEditDialog.close();
});
profileEditForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const displayName = document.getElementById('profileNameInput').value.trim();
  const handle = document.getElementById('profileHandleInput').value.trim().replace(/^@/, '');
  const bio = document.getElementById('profileBioInput').value.trim();
  if (!displayName) {
    profileEditStatus.textContent = 'Please enter a display name.';
    return;
  }
  if (!/^[A-Za-z0-9._]{2,24}$/.test(handle)) {
    profileEditStatus.textContent = 'Use 2–24 letters, numbers, periods, or underscores for the username.';
    return;
  }
  const nextSettings = { ...profileSettings, displayName, handle, bio };
  if (!saveProfileSettings(nextSettings)) {
    profileEditStatus.textContent = 'Could not save changes in this browser. Free up storage and try again.';
    return;
  }
  profileSettings = nextSettings;
  applySavedProfileSettings();
  profileEditDialog.close();
});
document.getElementById('resetProfileButton').addEventListener('click', () => {
  if (!window.confirm('Reset the profile text and all uploaded profile photos to the original version? This cannot be undone.')) return;
  try {
    localStorage.removeItem(PROFILE_STORAGE_KEY);
  } catch (error) {
    profileEditStatus.textContent = 'Could not reset this browser’s saved profile.';
    return;
  }
  profileSettings = { ...DEFAULT_PROFILE_SETTINGS, thumbnailImages: {} };
  pendingThumbnailEdits.clear();
  applyDefaultRealAssetMap();
  applySavedProfileSettings();
  renderThumbGrid();
  updateThumbnailSaveControls();
  profileEditDialog.close();
  if (photoSaveStatus) photoSaveStatus.textContent = 'Profile reset to its original version.';
});

function openThumbnailPicker(postIndex) {
  openThumbnailEditor(postIndex);
}

if (thumbGrid) {
  thumbGrid.addEventListener('click', (event) => {
    const editButton = event.target.closest('.thumb-edit-button');
    if (!editButton) return;
    event.preventDefault();
    event.stopPropagation();
    openThumbnailPicker(Number(editButton.dataset.postIndex));
  });
}

const videoOverlay = document.getElementById('videoOverlay');
const videoStage = document.getElementById('videoStage');
const captionSequence = document.getElementById('captionSequence');
const videoCaptionText = document.getElementById('videoCaptionText');
const commentSheet = document.getElementById('commentSheet');
const commentList = document.getElementById('commentList');
const videoProgressFill = document.getElementById('videoProgressFill');
const shootDirection = document.getElementById('shootDirection');
const profileView = document.getElementById('profileView');

const state = {
  currentIndex: 0,
  profileScrollY: 0,
  captionIndex: 0,
  intervalId: null,
  currentPost: null,
  lastWheelTime: 0,
};

function formatCount(value) {
  if (typeof value === 'number') {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return String(value);
  }
  return value;
}

function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[character]);
}

function setBioText() {
  bioBlock.textContent = profileSettings.bio;
}

function setStats() {
  document.getElementById('followingCount').textContent = FOLLOWING_COUNT;
  document.getElementById('followerCount').textContent = FOLLOWER_COUNT;
  document.getElementById('likesCount').textContent = LIKES_COUNT;
}

function imageStyleFromPost(post) {
  const size = post.imageSize || 'cover';
  const position = post.imagePosition || 'center center';
  return `background-image:url('${post.customImage}'); background-size:${size}; background-position:${position};`;
}

function renderThumbGrid() {
  thumbGrid.innerHTML = posts.map((post, index) => {
    const hasTitleOverride = Object.prototype.hasOwnProperty.call(profileSettings.thumbnailTitles, post.id) || pendingThumbnailEdits.has(post.id);
    const showTitle = !!post.title && (post.titleStyle !== 'hidden' || hasTitleOverride);
    const titleVariant = post.titleStyle === 'hidden' && hasTitleOverride ? 'plain' : post.titleStyle || 'plain';
    const kickerMarkup = post.kicker ? `<span class="thumb__kicker">${post.kicker}</span>` : '';
    const titleMarkup = showTitle ? `<div class="thumb__overlay thumb__overlay--${titleVariant}">${kickerMarkup}<div class="thumb__title thumb__title--${titleVariant}">${escapeHtml(post.title)}</div></div>` : '';
    const pinnedMarkup = post.pinned ? '<span class="thumb__pin">Pinned</span>' : '';
    const noTextClass = !showTitle ? 'thumb--no-text' : '';
    const photoClass = 'thumb--real-photo';
    const photoMarkup = post.customImage ? `<span class="thumb__photo" style="${imageStyleFromPost(post)}"></span>` : '';
    const edit = pendingThumbnailEdits.get(post.id);
    const unsavedMarkup = edit && (edit.titleDirty || edit.imageDirty) ? '<span class="thumb-unsaved-badge">Unsaved</span>' : '';
    const replyMarkup = post.id === 'how-to-discern'
      ? '<span class="thumb__reply-comment"><strong>Replying to a comment</strong> How do I know if this teaching is biblical?</span>'
      : '';

    return `
      <div class="thumb-item">
        <button class="thumb ${noTextClass} ${photoClass} thumb--${post.id}" type="button" data-index="${index}" data-post-id="${post.id}" data-scene="${post.scene}" data-cover="${post.coverStyle}" aria-label="${escapeHtml(post.title || post.caption)}">
          ${photoMarkup}
          ${replyMarkup}
          ${pinnedMarkup}
          ${unsavedMarkup}
          <span class="thumb__count">${post.viewCount}</span>
          ${titleMarkup}
          <span class="thumb__duration">${post.duration}</span>
        </button>
        <button class="thumb-edit-button" type="button" data-post-index="${index}" aria-label="Edit thumbnail for ${escapeHtml(post.title || post.caption)}">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h2l1.2-1.5h4.6L15.5 6h2A2.5 2.5 0 0 1 20 8.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-9Z" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"/><circle cx="12" cy="12.5" r="3.2" stroke="currentColor" stroke-width="1.8"/></svg>
        </button>
      </div>
    `;
  }).join('');

  thumbGrid.querySelectorAll('.thumb').forEach((button) => {
    const postIndex = Number(button.dataset.index);
    button.addEventListener('click', () => openVideo(postIndex));
  });
}

function renderComments(post) {
  commentList.innerHTML = (post.comments || []).map((comment) => `
    <div class="comment-row">
      <div class="comment-avatar" aria-hidden="true"></div>
      <div class="comment-body">
        <span class="comment-name">${comment.name}</span>
        <div class="comment-text">${comment.text}</div>
      </div>
    </div>
  `).join('');
}

function updateProgress() {
  const totalSteps = Math.max(captionsForPost(state.currentPost).length, 1);
  const progress = ((state.captionIndex + 1) / totalSteps) * 100;
  videoProgressFill.style.width = `${progress}%`;
}

function startCaptionLoop() {
  if (state.intervalId) clearInterval(state.intervalId);
  state.captionIndex = 0;
  state.currentPost = posts[state.currentIndex];
  const captions = captionsForPost(state.currentPost);
  const intervalMs = state.currentPost.captionInterval || {
    personal: 1800,
    study: 2600,
    teaching: 3400,
  }[state.currentPost.contentType || 'teaching'];

  captionSequence.textContent = captions[0];
  updateProgress();

  state.intervalId = setInterval(() => {
    state.captionIndex = (state.captionIndex + 1) % captions.length;
    captionSequence.textContent = captions[state.captionIndex];
    updateProgress();
  }, intervalMs);
}

function captionsForPost(post) {
  if (post.contentType === 'personal') {
    return [post.caption, 'A little moment from the day.'];
  }

  if (post.contentType !== 'teaching') {
    return post.teachingCaptions || [post.caption];
  }

  const passages = {
    'culture-in-christ': 'Mark 7:8',
    'what-i-believe': '1 Corinthians 15:1-4',
    'before-the-cross': 'Luke 24:27',
    'economy-of-god': 'Matthew 6:33',
    'hebrews-10-26': 'Hebrews 10:19-31',
    'identity-over-performance': 'Galatians 2:20',
    'how-to-discern': '1 John 4:1',
    'eternal-salvation': 'Ephesians 2:8-10',
    'armor-of-god': 'Ephesians 6:10-18'
  };
  const notes = post.teachingCaptions || [post.caption];
  return [
    `HOOK: ${post.caption}`,
    `SCRIPTURE: ${passages[post.id] || 'Read the passage in context.'}`,
    `CONTEXT: ${notes[0]}`,
    `EXPLANATION: ${notes[1] || notes[0]}`,
    `IN PLAIN LANGUAGE: ${notes[2] || notes[1] || notes[0]}`,
    `TAKEAWAY: ${notes[notes.length - 1]}`
  ];
}

function updateVideoUi() {
  const post = posts[state.currentIndex];
  state.currentPost = post;
  videoStage.style.backgroundImage = `url('${post.customImage}')`;
  videoStage.dataset.type = post.contentType || 'teaching';
  videoCaptionText.textContent = post.caption;
  setPlanningMode(false);
  captionSequence.textContent = captionsForPost(post)[0];
  document.getElementById('overlayHeartCount').textContent = formatCount(post.likeCount);
  document.getElementById('overlayCommentCount').textContent = formatCount(post.commentCount);
  document.getElementById('overlaySaveCount').textContent = formatCount(post.saveCount);
  document.getElementById('overlayShareCount').textContent = formatCount(post.shareCount);

  const heartBtn = document.querySelector('.heart-action');
  const saveBtn = document.querySelector('.save-action');
  heartBtn.classList.toggle('is-liked', !!post.isLiked);
  saveBtn.classList.toggle('is-saved', !!post.isSaved);
  heartBtn.setAttribute('aria-label', post.isLiked ? 'Unlike video' : 'Like video');
  saveBtn.setAttribute('aria-label', post.isSaved ? 'Remove from saved posts' : 'Save post');

  renderComments(post);
  startCaptionLoop();
}

function openVideo(index) {
  state.currentIndex = index;
  state.profileScrollY = window.scrollY;
  state.captionIndex = 0;
  updateVideoUi();
  videoOverlay.classList.add('active');
  document.body.classList.add('video-open');
  if (profileView) {
    profileView.classList.add('dimmed');
  }
}

function closeVideo() {
  if (state.intervalId) {
    clearInterval(state.intervalId);
    state.intervalId = null;
  }
  videoOverlay.classList.remove('active');
  document.body.classList.remove('video-open');
  if (profileView) {
    profileView.classList.remove('dimmed');
  }
  commentSheet.classList.remove('active');
  setTimeout(() => {
    window.scrollTo({ top: state.profileScrollY, behavior: 'instant' });
  }, 0);
}

function nextVideo() {
  state.currentIndex = (state.currentIndex + 1) % posts.length;
  updateVideoUi();
}

function previousVideo() {
  state.currentIndex = (state.currentIndex - 1 + posts.length) % posts.length;
  updateVideoUi();
}

function toggleLike() {
  const post = posts[state.currentIndex];
  post.isLiked = !post.isLiked;
  if (post.isLiked) {
    post.likeCount += 1;
  } else {
    post.likeCount = Math.max(0, post.likeCount - 1);
  }
  document.getElementById('overlayHeartCount').textContent = formatCount(post.likeCount);
  const heartBtn = document.querySelector('.heart-action');
  heartBtn.classList.toggle('is-liked', post.isLiked);
  heartBtn.setAttribute('aria-label', post.isLiked ? 'Unlike video' : 'Like video');
  heartBtn.setAttribute('aria-pressed', String(post.isLiked));
}

function toggleSave() {
  const post = posts[state.currentIndex];
  post.isSaved = !post.isSaved;
  if (post.isSaved) {
    post.saveCount += 1;
  } else {
    post.saveCount = Math.max(0, post.saveCount - 1);
  }
  document.getElementById('overlaySaveCount').textContent = formatCount(post.saveCount);
  const saveBtn = document.querySelector('.save-action');
  saveBtn.classList.toggle('is-saved', post.isSaved);
  saveBtn.setAttribute('aria-label', post.isSaved ? 'Remove from saved posts' : 'Save post');
  saveBtn.setAttribute('aria-pressed', String(post.isSaved));
}

function openComments() {
  renderComments(posts[state.currentIndex]);
  commentSheet.classList.add('active');
}

function closeComments() {
  commentSheet.classList.remove('active');
}

function bindVideoControls() {
  document.querySelector('.close-video').addEventListener('click', closeVideo);
  if (prototypePlanningToggle) {
    prototypePlanningToggle.addEventListener('click', () => setPlanningMode(!shootBlueprint.classList.contains('is-open')));
  }
  if (shootBlueprintClose) {
    shootBlueprintClose.addEventListener('click', () => setPlanningMode(false));
  }
  document.querySelector('.heart-action').addEventListener('click', toggleLike);
  document.querySelector('.save-action').addEventListener('click', toggleSave);
  document.querySelector('.comment-action').addEventListener('click', openComments);
  document.querySelector('.close-comments').addEventListener('click', closeComments);
  document.querySelector('.share-action').addEventListener('click', () => {
    captionSequence.textContent = 'Ready to share from @yaunahjhanee.';
  });

  document.addEventListener('keydown', (event) => {
    if (!videoOverlay.classList.contains('active')) return;

    if (event.key === 'ArrowDown') { event.preventDefault(); nextVideo(); }
    if (event.key === 'ArrowUp') { event.preventDefault(); previousVideo(); }
    if (event.key === 'Escape' && commentSheet.classList.contains('active')) { closeComments(); return; }
    if (event.key === 'Escape' || event.key === 'Backspace') { closeVideo(); }
  });

  document.addEventListener('wheel', (event) => {
    if (!videoOverlay.classList.contains('active')) return;
    if (Math.abs(event.deltaY) < 18) return;

    const now = Date.now();
    if (now - state.lastWheelTime < 280) return;
    state.lastWheelTime = now;

    if (event.deltaY > 0) nextVideo();
    else previousVideo();
  }, { passive: true });

  let touchStartY = 0;
  videoOverlay.addEventListener('touchstart', (event) => {
    touchStartY = event.touches[0].clientY;
  }, { passive: true });

  videoOverlay.addEventListener('touchend', (event) => {
    if (!videoOverlay.classList.contains('active')) return;
    const deltaY = event.changedTouches[0].clientY - touchStartY;
    if (deltaY < -52) nextVideo();
    if (deltaY > 52) previousVideo();
  }, { passive: true });
}

loadProfileSettings();
setStats();
applyDefaultRealAssetMap();
applySavedProfileSettings();
renderThumbGrid();
updateThumbnailSaveControls();
bindVideoControls();

if (profileView) {
  profileView.scrollTop = 0;
}
