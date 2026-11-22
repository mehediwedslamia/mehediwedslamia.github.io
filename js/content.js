/*
  All text on the site lives here, in English (en) and Bangla (bn).
  Edit this file to change details; no other file needs to be touched.
  Items marked "placeholder" are sample content to be replaced.
*/
window.SITE = {
  // Countdown target (Bangladesh time, UTC+6)
  weddingDate: '2026-12-16T13:00:00+06:00',

  // Initials on the wax seal
  monogram: 'M&L',

  // Venue links
  mapsUrl: 'https://maps.app.goo.gl/yrsVZNHewR99YdjU6',
  mapsEmbed: 'https://maps.google.com/maps?q=23.8787538,90.4016957&z=16&output=embed',
  facebookUrl: 'https://www.facebook.com/RoyalGardenDhaka',

  // Background music. Leave empty to use the built-in soft piano piece, or
  // set an MP3 path such as 'assets/audio/wedding.mp3'.
  music: '',

  // Gallery (placeholder). Add photos to assets/images/ and set `src`,
  // e.g. 'assets/images/01.jpg'. Empty `src` shows a decorative tile.
  gallery: [
    { src: '', en: 'First meeting', bn: 'প্রথম দেখা' },
    { src: '', en: 'Golden hour', bn: 'সোনালি বিকেল' },
    { src: '', en: 'Laughter', bn: 'হাসি-আড্ডা' },
    { src: '', en: 'Two families', bn: 'দুই পরিবার' },
    { src: '', en: 'Henna night', bn: 'মেহেদির রাত' },
    { src: '', en: 'Together', bn: 'একসাথে' }
  ],

  en: {
    meta: { title: 'Mehedi & Lamia · 16 December 2026' },
    ui: {
      menu: 'Menu',
      close: 'Close menu',
      scroll: 'Scroll',
      invited: 'You are cordially invited',
      tap: 'Tap the seal to open',
      open: 'Open the invitation',
      langSwitch: 'বাংলা',
      langSwitchLabel: 'বাংলায় দেখুন',
      soundOn: 'Turn music on',
      soundOff: 'Turn music off',
      backToTop: 'Back to top'
    },
    envelope: { names: 'Mehedi & Lamia', date: '16 · 12 · 2026' },
    nav: [
      { id: 'invitation', label: 'The Invitation' },
      { id: 'story', label: 'Our Story' },
      { id: 'events', label: 'The Wedding' },
      { id: 'schedule', label: 'The Day' },
      { id: 'venue', label: 'Venue' },
      { id: 'gallery', label: 'Gallery' },
      { id: 'faq', label: 'FAQ' }
    ],
    card: {
      families: 'Together with their families',
      groom: 'Mehedi Hasan',
      and: '&',
      bride: 'Tasmim Afroj Lamia',
      request: 'request the honour of your presence at the celebration of their marriage',
      weekday: 'Wednesday',
      day: '16',
      month: 'Dec 2026',
      banglaDate: '১ পৌষ ১৪৩৩',
      time: 'at one o’clock in the afternoon',
      venue: 'The Royal Garden',
      city: 'Plot No 9/B, Sector 08, Uttara\nDhaka-Mymensingh Highway\nNear Abdullahpur Bus Stand, Dhaka 1230'
    },
    countdown: {
      eyebrow: 'Save the date',
      title: 'Until the big day',
      days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds',
      when: 'Wednesday · 16 December 2026 · 1:00 PM',
      done: 'Today is the day!'
    },
    story: { // placeholder
      eyebrow: 'How we met',
      title: 'Our Story',
      body: [
        'We met at BRAC University, in an online teaching session. After that we kept chatting, mostly gossip, and somehow never ran out of things to say. Then we met in person, and kept meeting after that.',
        'We chose each other first, and later our families gave their blessing too. We would love to have you with us on our wedding day.'
      ],
      milestones: [
        { label: 'Chapter one', title: 'An online class at BRAC', text: 'We met in an online teaching session and started chatting.' },
        { label: 'Chapter two', title: 'The first meeting', text: 'We finally met in person.' },
        { label: 'Chapter three', title: 'We kept meeting', text: 'One meeting led to the next, and the next.' },
        { label: 'Chapter four', title: 'Our families said yes', text: 'Both families gave their blessing.' },
        { label: '16 · 12 · 2026', title: 'Our wedding', text: 'We start our life together.' }
      ],
      quoteOriginal: '“যে ভালোবাসা ব্যাপ্তভাবে আকাশে মুক্ত থাকে, অন্তরের মধ্যে সে দেয় সঙ্গ; যে ভালোবাসা বিশেষভাবে প্রতিদিনের সব-কিছুতে যুক্ত হয়ে থাকে, সংসারে সে দেয় আসঙ্গ। দুটোই আমি চাই।”',
      quote: 'Love that stays free like the open sky keeps the heart company; love woven into every ordinary day makes a home. I want both.',
      quoteBy: 'Rabindranath Tagore · Shesher Kobita'
    },
    events: { // placeholder except The Wedding
      eyebrow: 'Join us for',
      title: 'The Celebration',
      labels: { time: 'Time', venue: 'Venue', dress: 'Dress code' },
      items: [
        { icon: 'rings', name: 'The Wedding', date: 'Wednesday, 16 December 2026', time: '1:00 PM onwards', venue: 'The Royal Garden', address: 'Plot No 9/B, Sector 08, Uttara\nDhaka-Mymensingh Highway\nNear Abdullahpur Bus Stand, Dhaka 1230', dress: 'Traditional festive' }
      ]
    },
    schedule: { // placeholder
      eyebrow: 'On the day',
      title: 'Order of the Day',
      items: [
        { time: '12:30 PM', title: 'Guests arrive' },
        { time: '1:00 PM', title: 'Wedding lunch' },
        { time: '2:30 PM', title: 'Photos with the couple' },
        { time: '4:00 PM', title: 'Farewell' }
      ],
      note: 'Times are approximate.'
    },
    venue: {
      eyebrow: 'Location',
      title: 'The Venue',
      name: 'The Royal Garden',
      address: 'Plot No 9/B, Sector 08, Uttara\nDhaka-Mymensingh Highway\nNear Abdullahpur Bus Stand, Dhaka 1230',
      when: 'Wednesday, 16 December 2026 · 1:00 PM',
      directions: 'Get directions',
      facebook: 'View on Facebook'
    },
    gallery: { eyebrow: 'Photos', title: 'Gallery', soon: 'Photo coming soon' },
    faq: { // placeholder
      eyebrow: 'Good to know',
      title: 'Questions & Answers',
      items: [
        { q: 'What should I wear?', a: 'Traditional festive wear is ideal: sarees, salwar kameez, panjabis or suits.' },
        { q: 'What time should I arrive?', a: 'Guests are welcome from 12:30 PM, and lunch will be served at around 1:00 PM.' },
        { q: 'Is there parking at the venue?', a: 'Parking details will be shared closer to the date.' },
        { q: 'Who can I contact with questions?', a: 'Please contact either of our families.' }
      ]
    },
    footer: {
      line: 'We look forward to seeing you',
      withLove: 'With love,',
      names: 'Mehedi & Lamia',
      date: '16 · 12 · 2026'
    }
  },

  bn: {
    meta: { title: 'মেহেদী ও লামিয়া · ১৬ ডিসেম্বর ২০২৬' },
    ui: {
      menu: 'মেনু',
      close: 'মেনু বন্ধ করুন',
      scroll: 'নিচে স্ক্রল করুন',
      invited: 'আপনাকে সাদর আমন্ত্রণ',
      tap: 'খুলতে সিলে ট্যাপ করুন',
      open: 'আমন্ত্রণপত্র খুলুন',
      langSwitch: 'English',
      langSwitchLabel: 'View in English',
      soundOn: 'গান চালু করুন',
      soundOff: 'গান বন্ধ করুন',
      backToTop: 'উপরে যান'
    },
    envelope: { names: 'মেহেদী ও লামিয়া', date: '১৬ · ১২ · ২০২৬' },
    nav: [
      { id: 'invitation', label: 'আমন্ত্রণপত্র' },
      { id: 'story', label: 'আমাদের গল্প' },
      { id: 'events', label: 'বিয়ে' },
      { id: 'schedule', label: 'দিনের আয়োজন' },
      { id: 'venue', label: 'অনুষ্ঠানস্থল' },
      { id: 'gallery', label: 'ছবি' },
      { id: 'faq', label: 'প্রশ্নোত্তর' }
    ],
    card: {
      families: 'দুই পরিবারের পক্ষ থেকে',
      groom: 'মেহেদী হাসান',
      and: 'ও',
      bride: 'তাসমিম আফরোজ লামিয়া',
      request: 'শুভ বিবাহ অনুষ্ঠানে আপনার উপস্থিতি ও দোয়া একান্ত কাম্য',
      weekday: 'বুধবার',
      day: '১৬',
      month: 'ডিসেম্বর ২০২৬',
      banglaDate: '১ পৌষ ১৪৩৩',
      time: 'দুপুর ১টা',
      venue: 'দ্য রয়্যাল গার্ডেন',
      city: 'প্লট নং ৯/বি, সেক্টর ০৮, উত্তরা\nঢাকা-ময়মনসিংহ মহাসড়ক\nআব্দুল্লাহপুর বাসস্ট্যান্ডের কাছে, ঢাকা ১২৩০'
    },
    countdown: {
      eyebrow: 'তারিখটা মনে রাখবেন',
      title: 'আর মাত্র কটা দিন',
      days: 'দিন', hours: 'ঘণ্টা', minutes: 'মিনিট', seconds: 'সেকেন্ড',
      when: 'বুধবার · ১৬ ডিসেম্বর ২০২৬ · দুপুর ১টা',
      done: 'আজ আমাদের বিয়ে!'
    },
    story: {
      eyebrow: 'যেভাবে শুরু',
      title: 'আমাদের গল্প',
      body: [
        'আমাদের পরিচয় ব্র্যাক ইউনিভার্সিটির এক অনলাইন টিচিং সেশনে। তারপর শুরু হলো চ্যাট আর আড্ডা, কথা আর শেষই হতো না। একদিন সামনাসামনি দেখা হলো, তারপর থেকে দেখা হতেই থাকল।',
        'আমরা নিজেরা আগেই ঠিক করে ফেলেছিলাম, পরে দুই পরিবারও খুশিমনে রাজি হলো। বিয়ের দিনে আপনি এলে আমরা খুব খুশি হব।'
      ],
      milestones: [
        { label: 'শুরু', title: 'অনলাইন সেশনে পরিচয়', text: 'ব্র্যাকের এক অনলাইন টিচিং সেশনে প্রথম কথা, তারপর চ্যাট আর আড্ডা।' },
        { label: 'তারপর', title: 'প্রথম দেখা', text: 'একদিন সামনাসামনি দেখা হলো।' },
        { label: 'এরপর', title: 'দেখা হতেই থাকল', text: 'একবার দেখা হলো, তারপর বারবার।' },
        { label: 'পরিবার', title: 'দুই পরিবারের সম্মতি', text: 'দুই পরিবারই খুশিমনে রাজি হলো।' },
        { label: '১৬ · ১২ · ২০২৬', title: 'আমাদের বিয়ে', text: 'আপনাদের দোয়া চাই।' }
      ],
      quoteOriginal: '',
      quote: '“যে ভালোবাসা ব্যাপ্তভাবে আকাশে মুক্ত থাকে, অন্তরের মধ্যে সে দেয় সঙ্গ; যে ভালোবাসা বিশেষভাবে প্রতিদিনের সব-কিছুতে যুক্ত হয়ে থাকে, সংসারে সে দেয় আসঙ্গ। দুটোই আমি চাই।”',
      quoteBy: 'রবীন্দ্রনাথ ঠাকুর · শেষের কবিতা'
    },
    events: {
      eyebrow: 'আমন্ত্রণ',
      title: 'শুভ বিবাহ',
      labels: { time: 'সময়', venue: 'স্থান', dress: 'পোশাক' },
      items: [
        { icon: 'rings', name: 'বিয়ে', date: 'বুধবার, ১৬ ডিসেম্বর ২০২৬', time: 'দুপুর ১টা থেকে', venue: 'দ্য রয়্যাল গার্ডেন', address: 'প্লট নং ৯/বি, সেক্টর ০৮, উত্তরা\nঢাকা-ময়মনসিংহ মহাসড়ক\nআব্দুল্লাহপুর বাসস্ট্যান্ডের কাছে, ঢাকা ১২৩০', dress: 'দেশীয় পোশাক' }
      ]
    },
    schedule: {
      eyebrow: 'বিয়ের দিন',
      title: 'দিনের আয়োজন',
      items: [
        { time: 'দুপুর ১২:৩০', title: 'অতিথিদের আগমন' },
        { time: 'দুপুর ১:০০', title: 'দুপুরের খাবার' },
        { time: 'দুপুর ২:৩০', title: 'বর-কনের সাথে ছবি' },
        { time: 'বিকেল ৪:০০', title: 'বিদায়' }
      ],
      note: 'সময় সামান্য এদিক-ওদিক হতে পারে।'
    },
    venue: {
      eyebrow: 'কোথায়',
      title: 'অনুষ্ঠানস্থল',
      name: 'দ্য রয়্যাল গার্ডেন',
      address: 'প্লট নং ৯/বি, সেক্টর ০৮, উত্তরা\nঢাকা-ময়মনসিংহ মহাসড়ক\nআব্দুল্লাহপুর বাসস্ট্যান্ডের কাছে, ঢাকা ১২৩০',
      when: 'বুধবার, ১৬ ডিসেম্বর ২০২৬ · দুপুর ১টা',
      directions: 'ম্যাপে দেখুন',
      facebook: 'ফেসবুক পেজ'
    },
    gallery: { eyebrow: 'অ্যালবাম', title: 'ছবি', soon: 'শিগগিরই যোগ হবে' },
    faq: {
      eyebrow: 'জেনে রাখুন',
      title: 'প্রশ্নোত্তর',
      items: [
        { q: 'কী পরে আসব?', a: 'দেশীয় পোশাক হলেই ভালো: শাড়ি, সালোয়ার-কামিজ, পাঞ্জাবি বা স্যুট।' },
        { q: 'কখন আসব?', a: 'দুপুর সাড়ে ১২টা থেকে আসতে পারেন। খাবার শুরু হবে ১টার দিকে।' },
        { q: 'পার্কিংয়ের ব্যবস্থা আছে?', a: 'পার্কিংয়ের বিস্তারিত বিয়ের আগেই জানিয়ে দেব।' },
        { q: 'কিছু জানার থাকলে কাকে জিজ্ঞেস করব?', a: 'আমাদের দুই পরিবারের যে কাউকে জিজ্ঞেস করুন।' }
      ]
    },
    footer: {
      line: 'বিয়েতে দেখা হবে',
      withLove: 'ভালোবাসাসহ,',
      names: 'মেহেদী ও লামিয়া',
      date: '১৬ · ১২ · ২০২৬'
    }
  }
};
