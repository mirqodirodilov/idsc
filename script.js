/* ============================================================
   IDSC — Information and Decision Support Center
   Main JavaScript — Vanilla JS Only
   ============================================================ */

'use strict';

/* ============================================================
   TRANSLATIONS
   ============================================================ */
const translations = {
  uz: {
    brandFull: "Information and Decision Support Center",
    navHome: "Bosh sahifa",
    navAbout: "Biz haqimizda",
    navServices: "Xizmatlar",
    navProjects: "Loyihalar",
    navPartners: "Hamkorlar",
    navMedia: "Media",
    navTeam: "Jamoa",
    navContact: "Bog'lanish",
    ctaConsultation: "Konsultatsiya",

    heroHeading: "Raqamli yechimlar orqali ishonchli boshqaruv va samarali qarorlar",
    heroParagraph: "IDSC davlat va nodavlat tashkilotlar uchun zamonaviy axborot tizimlari, B2B IT xizmatlari, raqamli platformalar va texnik yechimlarni ishlab chiqadi.",
    heroCta1: "Xizmatlarimiz",
    heroCta2: "Bog'lanish",
    trust1: "Davlat va korporativ sektor",
    trust2: "Xavfsiz yechimlar",
    trust3: "Professional IT hamkor",
    heroPanelLabel: "Digital Infrastructure",

    trustStrip1: "Davlat va nodavlat tashkilotlar uchun yechimlar",
    trustStrip2: "B2B yo'nalishidagi IT xizmatlar",
    trustStrip3: "Texnik hujjatlashtirish va qo'llab-quvvatlash",
    trustStrip4: "Mas'uliyatli uzoq muddatli hamkorlik",

    aboutLabel: "Biz haqimizda",
    aboutTitle: "Information and Decision Support Center",
    aboutText: "IDSC — davlat va nodavlat tashkilotlarning raqamli rivojlanishi uchun axborot tizimlari, veb-platformalar, mobil ilovalar va professional IT xizmatlarini ishlab chiqishga yo'naltirilgan kompaniya. Biz mijoz ehtiyojlarini chuqur tahlil qilib, barqaror, xavfsiz va foydalanishga qulay texnologik yechimlar yaratamiz.",

    missionTitle: "Missiya",
    missionText: "Raqamli texnologiyalar orqali tashkilotlarning ish jarayonlarini takomillashtirish va samarali yechimlar yaratish.",
    visionTitle: "Vizyon",
    visionText: "Davlat va biznes sektori uchun ishonchli raqamli hamkor sifatida barqaror IT ekotizimlarini rivojlantirish.",
    valuesTitle: "Qadriyatlar",
    valuesText: "Ishonchlilik, aniqlik, sifat, xavfsizlik va uzoq muddatli hamkorlik.",

    servicesLabel: "IT Xizmatlar",
    servicesTitle: "Professional IT xizmatlar",
    servicesIntro: "IDSC tashkilotlarning raqamli ehtiyojlariga mos, loyihalashdan texnik qo'llab-quvvatlashgacha bo'lgan kompleks IT xizmatlarni taqdim etadi.",
    s1Title: "B2B IT xizmatlari",
    s1Text: "Biznes va tashkilotlar uchun ichki jarayonlarni raqamlashtirish, samaradorlikni oshirish va texnologik hamkorlikni rivojlantirishga qaratilgan professional IT yechimlar.",
    s2Title: "Axborot tizimlarini ishlab chiqish",
    s2Text: "Tashkilot faoliyatiga mos boshqaruv, ma'lumot almashinuvi, monitoring va hisobot jarayonlarini qamrab oluvchi ishonchli axborot tizimlari.",
    s3Title: "Veb-saytlar va portallar ishlab chiqish",
    s3Text: "Korporativ saytlar, tashkilot portallari va raqamli xizmat platformalarini zamonaviy dizayn, qulay interfeys va barqaror arxitektura asosida yaratamiz.",
    s4Title: "Mobil ilovalar ishlab chiqish",
    s4Text: "Tashkilotlar va ularning foydalanuvchilari uchun qulay, funksional va xavfsiz mobil ilovalarni ishlab chiqamiz.",
    s5Title: "Loyiha va texnik hujjatlarni ishlab chiqish",
    s5Text: "Axborot tizimlari va IT loyihalari uchun texnik topshiriqlar, konsepsiyalar, arxitektura hujjatlari va loyiha hujjatlarini professional shaklda tayyorlaymiz.",
    s6Title: "Texnik qo'llab-quvvatlash",
    s6Text: "Joriy qilingan tizimlarning uzluksiz ishlashi, yangilanishi, monitoringi va texnik muammolarini tezkor hal qilish uchun qo'llab-quvvatlash xizmatlari.",
    s7Title: "IT konsalting",
    s7Text: "Tashkilotlar uchun raqamlashtirish strategiyasi, texnologik tanlovlar, tizim arxitekturasi va IT loyihalarni rivojlantirish bo'yicha ekspert maslahatlar.",

    projectsLabel: "Loyihalar",
    projectsTitle: "Loyihalar va yechimlar",
    projCat1: "Iqtisodiy-ijtimoiy tizim",
    projCat2: "Korporativ portal",
    projCat3: "Mobil ilovalar",
    projCat4: "Texnik hujjatlar",
    projStatus: "Qilingan ishlar",
    projChallenge: "Yo‘nalish",
    projSolution: "Qanday yechim berdik",
    proj1Title: "Iqtisodiy-ijtimoiy sohalar uchun axborot tizimlari",
    proj1Challenge: "Iqtisodiy va ijtimoiy sohalarda ma’lumotlar, xizmatlar, monitoring va hisobot jarayonlarini raqamli boshqarish yo‘nalishi.",
    proj1Solution: "Ma’lumotlarni yig‘ish, saqlash, tahlil qilish, elektron hisobot va monitoring yuritish imkonini beruvchi axborot tizimlari ishlab berdik.",
    proj2Title: "Korxonalar uchun korporativ portal",
    proj2Challenge: "Korxona ichki jarayonlari, xodimlar, hujjatlar, vazifalar va xizmatlarni yagona portal orqali yuritish yo‘nalishi.",
    proj2Solution: "Korporativ portal, xodimlar kabineti, ichki xizmatlar, hujjat aylanishi va vazifalar nazorati bo‘yicha yechimlar ishlab berdik.",
    proj3Title: "Mobil ilovalar",
    proj3Challenge: "Tashkilot xizmatlari va ichki jarayonlarini telefon orqali qulay, tezkor va xavfsiz ishlatish yo‘nalishi.",
    proj3Solution: "iOS va Android uchun shaxsiy kabinet, bildirishnomalar, integratsiyalar va xavfsiz API asosida mobil ilovalar ishlab berdik.",
    proj4Title: "Texnik hujjatlar",
    proj4Challenge: "IT loyihalar, axborot tizimlari va raqamli platformalar uchun aniq texnik asos yaratish yo‘nalishi.",
    proj4Solution: "Texnik topshiriq, loyiha konsepsiyasi, arxitektura hujjatlari, API spetsifikatsiyasi va foydalanuvchi yo‘riqnomalarini tayyorlab berdik.",

    partnersLabel: "Hamkorlik",
    partnersTitle: "Hamkorlik",
    partnersText: "IDSC davlat va nodavlat tashkilotlar bilan mas'uliyatli, ochiq va uzoq muddatli texnologik hamkorlikni qadrlaydi.",
    partnerGov: "Government Organization",
    partnerPrivate: "Private Organization",
    partnerEnterprise: "Enterprise Client",
    partnerTech: "Technology Partner",
    partnerStrategic: "Strategic Partner",

    processLabel: "Jarayon",
    processTitle: "Biz qanday ishlaymiz",
    step1Title: "Tahlil",
    step1Text: "Tashkilot ehtiyojlari va mavjud tizimlarni chuqur o'rganish.",
    step2Title: "Talablarni shakllantirish",
    step2Text: "Loyiha maqsadlari, funksiyalari va texnik talablarni aniqlash.",
    step3Title: "Texnik hujjatlashtirish",
    step3Text: "Arxitektura, texnik topshiriqlar va loyiha hujjatlarini tayyorlash.",
    step4Title: "Dizayn va ishlab chiqish",
    step4Text: "UI/UX dizayn va dasturiy ta'minot ishlab chiqish bosqichi.",
    step5Title: "Test va sifat nazorati",
    step5Text: "Funksionallik, xavfsizlik va ishlash samaradorligini sinab ko'rish.",
    step6Title: "Joriy etish",
    step6Text: "Tizimni ishga tushirish, xodimlarni o'qitish va texnik ko'mak.",
    step7Title: "Texnik qo'llab-quvvatlash",
    step7Text: "Uzoq muddatli monitoring, yangilanish va texnik yordam xizmatlari.",

    securityLabel: "Ishonchlilik",
    securityTitle: "Barqaror, xavfsiz va mas'uliyatli IT yechimlar",
    securityText: "Har bir loyiha ishonchlilik, ma'lumotlar xavfsizligi, texnik barqarorlik va uzoq muddatli qo'llab-quvvatlash tamoyillari asosida ishlab chiqiladi.",
    sec1Title: "Xavfsiz arxitektura",
    sec1Text: "Zamonaviy xavfsizlik standartlariga mos tizim arxitekturasi.",
    sec2Title: "Ma'lumotlar himoyasi",
    sec2Text: "Shaxsiy va korporativ ma'lumotlarning ishonchli himoyasi.",
    sec3Title: "Tizim barqarorligi",
    sec3Text: "Yuqori ishonchlilik va uzluksiz ishlash kafolati.",
    sec4Title: "Hujjatlashtirish",
    sec4Text: "To'liq va aniq texnik hujjatlar to'plami.",
    sec5Title: "Monitoring",
    sec5Text: "Real vaqtli tizim monitoringi va ogohlantirishlar.",
    sec6Title: "Uzoq muddatli qo'llab-quvvatlash",
    sec6Text: "Tizimlarni rivojlantirish va uzluksiz texnik xizmat ko'rsatish.",

    techLabel: "Texnologiyalar",
    techTitle: "Texnologik yo'nalishlar",

    mediaLabel: "Media",
    mediaTitle: "Media va yangiliklar",
    mediaIntro: "IDSC faoliyati, texnologik yondashuvlar va raqamli yechimlar bo'yicha yangiliklar hamda materiallar.",
    filterAll: "Barchasi",
    filterNews: "Yangiliklar",
    filterArticles: "Maqolalar",
    filterProjects: "Loyihalar",
    filterEvents: "Tadbirlar",
    media0Title: "Avtotransport vositalarining yo‘l-transport hodisasiga uchragani bo‘yicha ma’lumot olish servisi ishlab chiqilmoqda",
    media0Text: "IDSC markazi tomonidan banklar, sug‘urta tashkilotlari, lizing kompaniyalari va boshqa moliyaviy xizmat ko‘rsatuvchi subyektlar uchun yangi elektron axborot servisi ishlab chiqilmoqda.",
    media0P1: "IDSC markazi tomonidan banklar, sug‘urta tashkilotlari, lizing kompaniyalari, baholash tashkilotlari hamda boshqa moliyaviy xizmat ko‘rsatuvchi subyektlar uchun yangi elektron axborot servisini ishlab chiqish ishlari boshlandi.",
    media0P2: "Mazkur servis orqali avtotransport vositasining yo‘l-transport hodisasiga uchragan yoki uchramaganligi bo‘yicha elektron ma’lumot olish imkoniyati yaratilishi rejalashtirilmoqda.",
    media0P3: "Yangi servis moliya va sug‘urta bozorida transport vositalari bilan bog‘liq risklarni baholash, garovga qo‘yilayotgan avtotransport vositasining holatini aniqlash, sug‘urta hodisalari bo‘yicha tahlil yuritish hamda lizing va kredit munosabatlarida qaror qabul qilish jarayonlarini takomillashtirishga xizmat qiladi.",
    media0P4: "Servisning joriy etilishi natijasida banklar va moliya tashkilotlari avtotransport vositasi bo‘yicha qo‘shimcha ishonchli ma’lumotga ega bo‘ladi. Bu esa transport vositasini garov sifatida qabul qilish, uning bozor qiymatini baholash, sug‘urta tavakkalchiliklarini aniqlash hamda mijozlar bilan shartnomaviy munosabatlarda yuzaga kelishi mumkin bo‘lgan xavflarni oldindan baholash imkonini beradi.",
    media0P5: "Shuningdek, mazkur servis transport vositalari tarixi bo‘yicha ma’lumotlarni raqamli shaklda olish, qo‘lda tekshirish jarayonlarini qisqartirish, inson omilini kamaytirish hamda qaror qabul qilish tezligini oshirishga xizmat qiladi.",
    media0P6: "Mazkur tashabbus moliyaviy xizmatlar ko‘rsatishda risklarni kamaytirish, garov obyektlarini baholash sifatini oshirish, sug‘urta jarayonlarini takomillashtirish hamda avtotransport vositalari bilan bog‘liq ma’lumotlardan samarali foydalanish imkoniyatini kengaytirishga qaratilgan.",
    media1Title: "IDSC yangi raqamli platforma ustida ish boshladi",
    media1Text: "IDSC markazi zamonaviy texnologiyalar asosida tashkilotlar uchun yangi raqamli xizmat platformasini ishlab chiqish jarayonini boshladi. Platforma xizmatlarni markazlashtirish, murojaatlarni elektron shaklda yuritish va ichki jarayonlarni tezlashtirishga qaratilgan.",
    media1P1: "Yangi raqamli platforma tashkilot ichki jarayonlarini yagona elektron muhitga birlashtirish, xizmat ko‘rsatish sifatini oshirish va foydalanuvchilar uchun qulay interfeys yaratish maqsadida ishlab chiqilmoqda.",
    media1P2: "Platformada foydalanuvchi kabineti, xizmatlar katalogi, elektron ariza yuborish, holatni kuzatish, bildirishnomalar hamda ma’lumotlarni tahlil qilish imkoniyatlari nazarda tutilmoqda.",
    media1P3: "Mazkur yechim tashkilotlar uchun ish jarayonlarini shaffoflashtirish, hujjatlar almashinuvini tezlashtirish va operatsion samaradorlikni oshirishga xizmat qiladi.",
    media1P4: "IDSC loyihani bosqichma-bosqich tahlil, texnik hujjatlashtirish, dizayn, ishlab chiqish, test va joriy etish tartibida amalga oshiradi.",
    media2Title: "Axborot tizimlarini ishlab chiqishda zamonaviy yondashuvlar",
    media2Text: "Zamonaviy IT tizimlarni loyihalashda qo'llaniladigan eng yangi metodologiyalar va yondashuvlar haqida.",
    media2P1: "Axborot tizimlarini ishlab chiqishda eng muhim bosqichlardan biri — tashkilot ehtiyojlarini to‘g‘ri tahlil qilish va biznes jarayonlarni aniq tushunishdir.",
    media2P2: "Zamonaviy yondashuvlarda modulli arxitektura, xavfsiz API, ma’lumotlar bazasi optimizatsiyasi, audit jurnallari va foydalanuvchi rollarini boshqarish muhim o‘rin egallaydi.",
    media2P3: "Bunday yondashuv tizimning keyinchalik kengaytirilishi, boshqa servislar bilan integratsiya qilinishi va katta hajmdagi ma’lumotlar bilan barqaror ishlashiga yordam beradi.",
    media2P4: "IDSC axborot tizimlarini ishlab chiqishda texnik barqarorlik, xavfsizlik, qulay interfeys va aniq hujjatlashtirish tamoyillariga tayanadi.",
    media3Title: "Texnik hujjatlashtirishning IT loyihadagi ahamiyati",
    media3Text: "Sifatli texnik hujjatlashtirish IT loyihalarning muvaffaqiyatli amalga oshirilishida qanday rol o'ynaydi.",
    media3P1: "Texnik hujjatlar IT loyihaning asosiy tayanchi hisoblanadi. Ular loyiha maqsadi, funksional talablar, arxitektura va integratsiyalarni aniq belgilab beradi.",
    media3P2: "Sifatli hujjatlashtirish ishlab chiquvchilar, buyurtmachi va texnik qo‘llab-quvvatlash jamoasi o‘rtasida yagona tushuncha shakllanishiga yordam beradi.",
    media3P3: "Texnik topshiriq, API spetsifikatsiyasi, ma’lumotlar modeli, foydalanuvchi yo‘riqnomasi va test ssenariylari loyiha sifatini oshiradi.",
    media3P4: "IDSC loyihalarda hujjatlarni amaliy va tushunarli shaklda tayyorlash orqali joriy etish, ekspluatatsiya va keyingi rivojlantirish jarayonlarini yengillashtiradi.",
    media4Title: "Tashkilotlar uchun B2B IT xizmatlarining afzalliklari",
    media4Text: "B2B yo'nalishidagi IT xizmatlar tashkilotlar samaradorligini qanday oshiradi va raqamli o'zgarishni qanday tezlashtiradi.",
    media4P1: "B2B IT xizmatlari tashkilotlarga ichki jarayonlarni raqamlashtirish, xarajatlarni optimallashtirish va boshqaruv qarorlarini tezlashtirish imkonini beradi.",
    media4P2: "Korporativ portallar, axborot tizimlari, mobil ilovalar va integratsion yechimlar xodimlar, mijozlar hamda hamkorlar o‘rtasidagi aloqalarni samarali qiladi.",
    media4P3: "Bunday xizmatlar yordamida ma’lumotlar yagona bazada jamlanadi, hisobotlar avtomatlashtiriladi, inson omili kamayadi va nazorat mexanizmlari kuchayadi.",
    media4P4: "IDSC tashkilotlar uchun ehtiyojga mos B2B IT yechimlarni loyihalash, ishlab chiqish, joriy etish va texnik qo‘llab-quvvatlash xizmatlarini taqdim etadi.",
    readMore: "Batafsil →",
    closeArticle: "Yopish",

    teamLabel: "Jamoa",
    teamTitle: "Bizning jamoa",
    teamIntro: "IDSC loyihalarida boshqaruv, tahlil, texnik yechim va sifatga mas’ul mutaxassislar ishlaydi.",
    teamCardKicker: "IDSC boshqaruvi",
    teamDirectorName: "Odilov Mirqodir",
    teamDirectorRole: "Direktor",
    teamDirectorDesc: "Strategik boshqaruv, mijozlar bilan hamkorlik va IT loyihalarni rivojlantirish yo‘nalishlariga mas’ul.",
    teamManagementKicker: "Rahbariyat",
    teamFinanceKicker: "Moliya",
    teamTechKicker: "Texnik yo‘nalish",
    teamKamalovName: "Kamalov Sarvar",
    teamKamalovRole: "Direktor",
    teamKamalovDesc: "Tashkiliy boshqaruv va loyiha yo‘nalishlarida mas’ul mutaxassis.",
    teamYagudinName: "Yagudin Islam",
    teamYagudinRole: "Direktor o‘rinbosari",
    teamYagudinDesc: "Ichki jarayonlar, muvofiqlashtirish va boshqaruv masalalariga mas’ul.",
    teamRaxmanovaName: "Raxmanova Iroda",
    teamRaxmanovaRole: "Bosh buxgalter",
    teamRaxmanovaDesc: "Moliyaviy hisob, hujjatlar va ichki moliyaviy nazorat jarayonlariga mas’ul.",
    teamMurodovName: "Murodov Shaxzod",
    teamMurodovRole: "Bosh dasturchi",
    teamMurodovDesc: "Dasturiy yechimlar, texnik arxitektura va tizim ishlab chiqish jarayonlariga mas’ul.",
    teamAddNote: "Keyinchalik yangi xodimlar qo‘shilganda ushbu slider kengaytiriladi.",

    contactLabel: "Aloqa",
    contactTitle: "Loyihangizni muhokama qilaylik",
    contactIntro: "Tashkilotingiz uchun mos IT yechimni tanlash va loyiha imkoniyatlarini muhokama qilish uchun biz bilan bog'laning.",
    contactPhone: "Telefon",
    contactPhoneValue: "+998 94 677 39 39",
    contactEmail: "Email",
    contactEmailValue: "idsc.uzbekistan@gmail.com",
    contactAddress: "Manzil",
    contactAddressValue: "Toshkent sh., Yashnobod tumani, Maxtumquli ko‘chasi, 114A, IT Park (Ashxobod sayilgohi oldi)",
    contactHours: "Ish vaqti",
    contactHoursVal: "Dushanba – Juma: 9:00 – 18:00",
    contactTrust: "IDSC sizning tashkilotingiz uchun ishonchli, barqaror va professional IT hamkor.",
    formName: "Ism va familiya",
    formOrg: "Tashkilot",
    formPhone: "Telefon",
    formEmail: "Email",
    formService: "Kerakli xizmat",
    formServicePlaceholder: "Xizmatni tanlang",
    formMessage: "Xabar",
    formMessagePlaceholder: "Loyihangiz haqida qisqacha ma'lumot bering...",
    formSubmit: "Yuborish",

    footerBrandText: "Information and Decision Support Center — davlat va nodavlat tashkilotlar uchun professional IT yechimlar va raqamli xizmatlar.",
    footerServices: "Xizmatlar",
    footerNav: "Navigatsiya",
    footerContact: "Aloqa",
    footerCopy: "© 2026 IDSC — Information and Decision Support Center. All rights reserved."
  },

  ru: {
    brandFull: "Information and Decision Support Center",
    navHome: "Главная",
    navAbout: "О нас",
    navServices: "Услуги",
    navProjects: "Проекты",
    navPartners: "Партнёры",
    navMedia: "Медиа",
    navTeam: "Команда",
    navContact: "Контакты",
    ctaConsultation: "Консультация",

    heroHeading: "Надёжное управление и эффективные решения благодаря цифровым технологиям",
    heroParagraph: "IDSC разрабатывает современные информационные системы, B2B IT-услуги, цифровые платформы и технические решения для государственных и частных организаций.",
    heroCta1: "Наши услуги",
    heroCta2: "Связаться с нами",
    trust1: "Государственный и корпоративный сектор",
    trust2: "Безопасные решения",
    trust3: "Профессиональный IT-партнёр",
    heroPanelLabel: "Digital Infrastructure",

    trustStrip1: "Решения для государственных и частных организаций",
    trustStrip2: "B2B IT-услуги",
    trustStrip3: "Техническая документация и сопровождение",
    trustStrip4: "Ответственное долгосрочное партнёрство",

    aboutLabel: "О нас",
    aboutTitle: "Information and Decision Support Center",
    aboutText: "IDSC — компания, ориентированная на разработку информационных систем, веб-платформ, мобильных приложений и профессиональных IT-услуг для цифрового развития государственных и частных организаций. Мы глубоко анализируем потребности клиентов и создаём устойчивые, безопасные и удобные технологические решения.",

    missionTitle: "Миссия",
    missionText: "Совершенствовать рабочие процессы организаций и создавать эффективные решения с помощью цифровых технологий.",
    visionTitle: "Видение",
    visionText: "Развивать устойчивые IT-экосистемы, выступая надёжным цифровым партнёром для государственного и бизнес-сектора.",
    valuesTitle: "Ценности",
    valuesText: "Надёжность, точность, качество, безопасность и долгосрочное партнёрство.",

    servicesLabel: "IT Услуги",
    servicesTitle: "Профессиональные IT-услуги",
    servicesIntro: "IDSC предоставляет комплексные IT-услуги, соответствующие цифровым потребностям организаций — от проектирования до технической поддержки.",
    s1Title: "B2B IT-услуги",
    s1Text: "Профессиональные IT-решения для бизнеса и организаций, направленные на цифровизацию внутренних процессов, повышение эффективности и развитие технологического партнёрства.",
    s2Title: "Разработка информационных систем",
    s2Text: "Надёжные информационные системы для управления, обмена данными, мониторинга и отчётности в соответствии с деятельностью организации.",
    s3Title: "Разработка веб-сайтов и порталов",
    s3Text: "Создаём корпоративные сайты, организационные порталы и цифровые сервисные платформы на основе современного дизайна, удобного интерфейса и устойчивой архитектуры.",
    s4Title: "Разработка мобильных приложений",
    s4Text: "Разрабатываем удобные, функциональные и безопасные мобильные приложения для организаций и их пользователей.",
    s5Title: "Разработка проектной и технической документации",
    s5Text: "Профессионально подготавливаем технические задания, концепции, архитектурную и проектную документацию для информационных систем и IT-проектов.",
    s6Title: "Техническая поддержка",
    s6Text: "Услуги сопровождения для стабильной работы, обновления, мониторинга и оперативного решения технических вопросов внедрённых систем.",
    s7Title: "IT-консультирование",
    s7Text: "Экспертные консультации по стратегии цифровизации, выбору технологий, архитектуре систем и развитию IT-проектов организаций.",

    projectsLabel: "Проекты",
    projectsTitle: "Проекты и решения",
    projCat1: "Социально-экономические системы",
    projCat2: "Корпоративный портал",
    projCat3: "Мобильные приложения",
    projCat4: "Технические документы",
    projStatus: "Выполненные работы",
    projChallenge: "Направление",
    projSolution: "Что мы разработали",
    proj1Title: "Информационные системы для социально-экономических сфер",
    proj1Challenge: "Цифровое управление данными, услугами, мониторингом и отчётностью в экономических и социальных сферах.",
    proj1Solution: "Мы разработали информационные системы для сбора, хранения, анализа данных, формирования электронной отчётности и мониторинга.",
    proj2Title: "Корпоративный портал для предприятий",
    proj2Challenge: "Ведение внутренних процессов, сотрудников, документов, задач и сервисов предприятия через единый портал.",
    proj2Solution: "Мы разработали решения для корпоративного портала, кабинета сотрудников, внутренних сервисов, документооборота и контроля задач.",
    proj3Title: "Мобильные приложения",
    proj3Challenge: "Удобный, быстрый и безопасный доступ к услугам и внутренним процессам организации через мобильные устройства.",
    proj3Solution: "Мы разработали мобильные приложения для iOS и Android с личным кабинетом, уведомлениями, интеграциями и безопасным API.",
    proj4Title: "Технические документы",
    proj4Challenge: "Создание точной технической основы для IT-проектов, информационных систем и цифровых платформ.",
    proj4Solution: "Мы подготовили технические задания, концепции проектов, архитектурные документы, API-спецификации и пользовательские инструкции.",

    partnersLabel: "Партнёрство",
    partnersTitle: "Партнёрство",
    partnersText: "IDSC ценит ответственное, прозрачное и долгосрочное технологическое партнёрство с государственными и частными организациями.",
    partnerGov: "Government Organization",
    partnerPrivate: "Private Organization",
    partnerEnterprise: "Enterprise Client",
    partnerTech: "Technology Partner",
    partnerStrategic: "Strategic Partner",

    processLabel: "Процесс",
    processTitle: "Как мы работаем",
    step1Title: "Анализ",
    step1Text: "Глубокое изучение потребностей организации и существующих систем.",
    step2Title: "Формирование требований",
    step2Text: "Определение целей, функций и технических требований проекта.",
    step3Title: "Техническая документация",
    step3Text: "Подготовка архитектуры, технических заданий и проектной документации.",
    step4Title: "Дизайн и разработка",
    step4Text: "Этап UI/UX-дизайна и разработки программного обеспечения.",
    step5Title: "Тестирование и контроль качества",
    step5Text: "Проверка функциональности, безопасности и производительности.",
    step6Title: "Внедрение",
    step6Text: "Запуск системы, обучение сотрудников и техническая поддержка.",
    step7Title: "Техническая поддержка",
    step7Text: "Долгосрочный мониторинг, обновления и техническое сопровождение.",

    securityLabel: "Надёжность",
    securityTitle: "Стабильные, безопасные и ответственные IT-решения",
    securityText: "Каждый проект разрабатывается на основе принципов надёжности, безопасности данных, технической устойчивости и долгосрочного сопровождения.",
    sec1Title: "Безопасная архитектура",
    sec1Text: "Архитектура системы, соответствующая современным стандартам безопасности.",
    sec2Title: "Защита данных",
    sec2Text: "Надёжная защита персональных и корпоративных данных.",
    sec3Title: "Стабильность системы",
    sec3Text: "Гарантия высокой надёжности и бесперебойной работы.",
    sec4Title: "Документация",
    sec4Text: "Полный и точный пакет технической документации.",
    sec5Title: "Мониторинг",
    sec5Text: "Мониторинг системы в реальном времени и оповещения.",
    sec6Title: "Долгосрочная поддержка",
    sec6Text: "Развитие систем и непрерывное техническое обслуживание.",

    techLabel: "Технологии",
    techTitle: "Технологические направления",

    mediaLabel: "Медиа",
    mediaTitle: "Медиа и новости",
    mediaIntro: "Новости и материалы о деятельности IDSC, технологических подходах и цифровых решениях.",
    filterAll: "Все",
    filterNews: "Новости",
    filterArticles: "Статьи",
    filterProjects: "Проекты",
    filterEvents: "События",
    media0Title: "Разрабатывается сервис получения сведений об участии автотранспортных средств в ДТП",
    media0Text: "Центр IDSC разрабатывает новый электронный информационный сервис для банков, страховых организаций, лизинговых компаний и других субъектов финансовых услуг.",
    media0P1: "Центр IDSC начал работы по разработке нового электронного информационного сервиса для банков, страховых организаций, лизинговых компаний, оценочных организаций и других субъектов, оказывающих финансовые услуги.",
    media0P2: "Планируется, что сервис позволит получать электронные сведения о том, участвовало ли автотранспортное средство в дорожно-транспортном происшествии.",
    media0P3: "Новый сервис будет способствовать оценке рисков, связанных с транспортными средствами, определению состояния автомобиля, передаваемого в залог, анализу страховых случаев, а также совершенствованию процессов принятия решений в лизинговых и кредитных отношениях.",
    media0P4: "После внедрения сервиса банки и финансовые организации смогут получать дополнительные достоверные сведения об автотранспортном средстве. Это поможет принимать автомобиль в качестве залога, оценивать его рыночную стоимость, определять страховые риски и заранее оценивать возможные риски в договорных отношениях с клиентами.",
    media0P5: "Также сервис позволит получать сведения об истории транспортных средств в цифровом формате, сократить ручные проверки, снизить влияние человеческого фактора и повысить скорость принятия решений.",
    media0P6: "Данная инициатива направлена на снижение рисков при оказании финансовых услуг, повышение качества оценки залоговых объектов, совершенствование страховых процессов и расширение возможностей эффективного использования данных, связанных с автотранспортными средствами.",
    media1Title: "IDSC начала работу над новой цифровой платформой",
    media1Text: "Центр IDSC начал разработку новой цифровой сервисной платформы на основе современных технологий. Платформа направлена на централизацию услуг, электронную обработку обращений и ускорение внутренних процессов.",
    media1P1: "Новая цифровая платформа разрабатывается для объединения внутренних процессов организации в единой электронной среде, повышения качества обслуживания и создания удобного интерфейса для пользователей.",
    media1P2: "В платформе предусматриваются личный кабинет пользователя, каталог услуг, подача электронных заявок, отслеживание статуса, уведомления и инструменты анализа данных.",
    media1P3: "Данное решение позволит организациям повысить прозрачность рабочих процессов, ускорить документооборот и улучшить операционную эффективность.",
    media1P4: "IDSC реализует проект поэтапно: анализ, техническая документация, дизайн, разработка, тестирование и внедрение.",
    media2Title: "Современные подходы к разработке информационных систем",
    media2Text: "О новейших методологиях и подходах, применяемых при проектировании современных IT-систем.",
    media2P1: "Один из ключевых этапов разработки информационных систем — правильный анализ потребностей организации и точное понимание бизнес-процессов.",
    media2P2: "В современных подходах важную роль играют модульная архитектура, безопасные API, оптимизация базы данных, журналы аудита и управление ролями пользователей.",
    media2P3: "Такой подход помогает системе масштабироваться, интегрироваться с другими сервисами и стабильно работать с большими объемами данных.",
    media2P4: "IDSC при разработке информационных систем опирается на техническую устойчивость, безопасность, удобный интерфейс и точную документацию.",
    media3Title: "Роль технической документации в IT-проекте",
    media3Text: "Как качественная техническая документация влияет на успешную реализацию IT-проектов.",
    media3P1: "Техническая документация является основой IT-проекта. Она четко определяет цель проекта, функциональные требования, архитектуру и интеграции.",
    media3P2: "Качественная документация помогает сформировать единое понимание между разработчиками, заказчиком и командой технической поддержки.",
    media3P3: "Техническое задание, API-спецификация, модель данных, руководство пользователя и тестовые сценарии повышают качество проекта.",
    media3P4: "IDSC готовит документацию в практичном и понятном формате, что упрощает внедрение, эксплуатацию и дальнейшее развитие систем.",
    media4Title: "Преимущества B2B IT-услуг для организаций",
    media4Text: "Как B2B IT-услуги повышают эффективность организаций и ускоряют цифровую трансформацию.",
    media4P1: "B2B IT-услуги позволяют организациям цифровизировать внутренние процессы, оптимизировать расходы и ускорить принятие управленческих решений.",
    media4P2: "Корпоративные порталы, информационные системы, мобильные приложения и интеграционные решения делают взаимодействие сотрудников, клиентов и партнеров более эффективным.",
    media4P3: "С помощью таких услуг данные собираются в единой базе, отчеты автоматизируются, человеческий фактор снижается, а механизмы контроля усиливаются.",
    media4P4: "IDSC предоставляет организациям услуги по проектированию, разработке, внедрению и техническому сопровождению B2B IT-решений с учетом их потребностей.",
    readMore: "Подробнее →",
    closeArticle: "Закрыть",

    teamLabel: "Команда",
    teamTitle: "Наша команда",
    teamIntro: "В проектах IDSC работают специалисты, отвечающие за управление, анализ, технические решения и качество.",
    teamCardKicker: "Руководство IDSC",
    teamDirectorName: "Одилов Миркодир",
    teamDirectorRole: "Директор",
    teamDirectorDesc: "Отвечает за стратегическое управление, сотрудничество с клиентами и развитие IT-проектов.",
    teamManagementKicker: "Руководство",
    teamFinanceKicker: "Финансы",
    teamTechKicker: "Техническое направление",
    teamKamalovName: "Камалов Сарвар",
    teamKamalovRole: "Директор",
    teamKamalovDesc: "Отвечает за организационное управление и проектные направления.",
    teamYagudinName: "Ягудин Ислам",
    teamYagudinRole: "Заместитель директора",
    teamYagudinDesc: "Отвечает за внутренние процессы, координацию и управленческие вопросы.",
    teamRaxmanovaName: "Рахманова Ирода",
    teamRaxmanovaRole: "Главный бухгалтер",
    teamRaxmanovaDesc: "Отвечает за финансовый учёт, документы и внутренний финансовый контроль.",
    teamMurodovName: "Муродов Шахзод",
    teamMurodovRole: "Главный программист",
    teamMurodovDesc: "Отвечает за программные решения, техническую архитектуру и разработку систем.",
    teamAddNote: "При добавлении новых сотрудников этот слайдер можно расширить.",

    contactLabel: "Контакты",
    contactTitle: "Давайте обсудим ваш проект",
    contactIntro: "Свяжитесь с нами, чтобы выбрать подходящее IT-решение для вашей организации и обсудить возможности проекта.",
    contactPhone: "Телефон",
    contactPhoneValue: "+998 94 677 39 39",
    contactEmail: "Email",
    contactEmailValue: "idsc.uzbekistan@gmail.com",
    contactAddress: "Адрес",
    contactAddressValue: "г. Ташкент, Яшнабадский район, ул. Махтумкули, 114A, IT Park (рядом с парком Ашхабад)",
    contactHours: "Рабочее время",
    contactHoursVal: "Понедельник – Пятница: 9:00 – 18:00",
    contactTrust: "IDSC — надёжный, стабильный и профессиональный IT-партнёр для вашей организации.",
    formName: "Имя и фамилия",
    formOrg: "Организация",
    formPhone: "Телефон",
    formEmail: "Email",
    formService: "Необходимая услуга",
    formServicePlaceholder: "Выберите услугу",
    formMessage: "Сообщение",
    formMessagePlaceholder: "Кратко опишите ваш проект...",
    formSubmit: "Отправить",

    footerBrandText: "Information and Decision Support Center — профессиональные IT-решения и цифровые услуги для государственных и частных организаций.",
    footerServices: "Услуги",
    footerNav: "Навигация",
    footerContact: "Контакты",
    footerCopy: "© 2026 IDSC — Information and Decision Support Center. All rights reserved."
  },

  en: {
    brandFull: "Information and Decision Support Center",
    navHome: "Home",
    navAbout: "About",
    navServices: "Services",
    navProjects: "Projects",
    navPartners: "Partners",
    navMedia: "Media",
    navTeam: "Team",
    navContact: "Contact",
    ctaConsultation: "Get Consultation",

    heroHeading: "Reliable management and effective decisions through digital solutions",
    heroParagraph: "IDSC develops modern information systems, B2B IT services, digital platforms, and technical solutions for government and private organizations.",
    heroCta1: "Our Services",
    heroCta2: "Contact Us",
    trust1: "Government and corporate sector",
    trust2: "Secure solutions",
    trust3: "Professional IT partner",
    heroPanelLabel: "Digital Infrastructure",

    trustStrip1: "Solutions for government and private organizations",
    trustStrip2: "B2B IT services",
    trustStrip3: "Technical documentation and support",
    trustStrip4: "Responsible long-term partnership",

    aboutLabel: "About Us",
    aboutTitle: "Information and Decision Support Center",
    aboutText: "IDSC is a company focused on developing information systems, web platforms, mobile applications, and professional IT services for the digital development of government and private organizations. We carefully analyze client needs and build stable, secure, and user-friendly technology solutions.",

    missionTitle: "Mission",
    missionText: "To improve organizational processes and deliver effective solutions through digital technology.",
    visionTitle: "Vision",
    visionText: "To develop sustainable IT ecosystems as a trusted digital partner for government and business sectors.",
    valuesTitle: "Values",
    valuesText: "Reliability, precision, quality, security, and long-term partnership.",

    servicesLabel: "IT Services",
    servicesTitle: "Professional IT Services",
    servicesIntro: "IDSC provides comprehensive IT services tailored to organizations' digital needs — from planning and development to long-term technical support.",
    s1Title: "B2B IT Services",
    s1Text: "Professional IT solutions for businesses and organizations focused on digitizing internal processes, improving efficiency, and building long-term technology partnerships.",
    s2Title: "Information Systems Development",
    s2Text: "Reliable information systems covering management, data exchange, monitoring, and reporting processes tailored to organizational needs.",
    s3Title: "Website and Portal Development",
    s3Text: "We create corporate websites, organizational portals, and digital service platforms with modern design, intuitive interfaces, and stable architecture.",
    s4Title: "Mobile Application Development",
    s4Text: "We develop convenient, functional, and secure mobile applications for organizations and their users.",
    s5Title: "Project and Technical Documentation Development",
    s5Text: "We professionally prepare technical specifications, concepts, architecture documentation, and project documentation for information systems and IT projects.",
    s6Title: "Technical Support",
    s6Text: "Support services ensuring stable operation, updates, monitoring, and prompt resolution of technical issues for implemented systems.",
    s7Title: "IT Consulting",
    s7Text: "Expert consulting on digitalization strategy, technology selection, system architecture, and the development of organizational IT projects.",

    projectsLabel: "Projects",
    projectsTitle: "Projects and Solutions",
    projCat1: "Socio-Economic Systems",
    projCat2: "Corporate Portal",
    projCat3: "Mobile Applications",
    projCat4: "Technical Documents",
    projStatus: "Completed Works",
    projChallenge: "Direction",
    projSolution: "What We Delivered",
    proj1Title: "Information Systems for Socio-Economic Sectors",
    proj1Challenge: "Digital management of data, services, monitoring, and reporting processes in economic and social sectors.",
    proj1Solution: "We delivered information systems for data collection, storage, analysis, electronic reporting, and monitoring.",
    proj2Title: "Corporate Portal for Enterprises",
    proj2Challenge: "Managing internal processes, employees, documents, tasks, and enterprise services through a unified portal.",
    proj2Solution: "We delivered corporate portal solutions, employee cabinets, internal services, document workflow, and task control modules.",
    proj3Title: "Mobile Applications",
    proj3Challenge: "Convenient, fast, and secure access to services and internal processes through mobile devices.",
    proj3Solution: "We delivered iOS and Android mobile applications with user accounts, notifications, integrations, and secure API architecture.",
    proj4Title: "Technical Documents",
    proj4Challenge: "Creating a clear technical foundation for IT projects, information systems, and digital platforms.",
    proj4Solution: "We prepared technical specifications, project concepts, architecture documents, API specifications, and user guides.",

    partnersLabel: "Partnership",
    partnersTitle: "Partnership",
    partnersText: "IDSC values responsible, transparent, and long-term technology partnerships with government and private organizations.",
    partnerGov: "Government Organization",
    partnerPrivate: "Private Organization",
    partnerEnterprise: "Enterprise Client",
    partnerTech: "Technology Partner",
    partnerStrategic: "Strategic Partner",

    processLabel: "Process",
    processTitle: "How We Work",
    step1Title: "Analysis",
    step1Text: "Deep study of organizational needs and existing systems.",
    step2Title: "Requirements Definition",
    step2Text: "Defining project goals, functions, and technical requirements.",
    step3Title: "Technical Documentation",
    step3Text: "Preparing architecture, technical specifications, and project documentation.",
    step4Title: "Design and Development",
    step4Text: "UI/UX design and software development phase.",
    step5Title: "Testing and Quality Assurance",
    step5Text: "Verifying functionality, security, and performance.",
    step6Title: "Implementation",
    step6Text: "System launch, staff training, and technical assistance.",
    step7Title: "Technical Support",
    step7Text: "Long-term monitoring, updates, and technical support services.",

    securityLabel: "Reliability",
    securityTitle: "Stable, Secure, and Responsible IT Solutions",
    securityText: "Every project is developed around reliability, data security, technical stability, and long-term support.",
    sec1Title: "Secure Architecture",
    sec1Text: "System architecture compliant with modern security standards.",
    sec2Title: "Data Protection",
    sec2Text: "Reliable protection of personal and corporate data.",
    sec3Title: "System Stability",
    sec3Text: "Guarantee of high reliability and continuous operation.",
    sec4Title: "Documentation",
    sec4Text: "Complete and accurate technical documentation package.",
    sec5Title: "Monitoring",
    sec5Text: "Real-time system monitoring and alerts.",
    sec6Title: "Long-Term Support",
    sec6Text: "System development and continuous technical maintenance.",

    techLabel: "Technologies",
    techTitle: "Technology Areas",

    mediaLabel: "Media",
    mediaTitle: "Media and News",
    mediaIntro: "News and insights about IDSC activities, technology approaches, and digital solutions.",
    filterAll: "All",
    filterNews: "News",
    filterArticles: "Articles",
    filterProjects: "Projects",
    filterEvents: "Events",
    media0Title: "A service for checking whether a vehicle has been involved in a road traffic accident is being developed",
    media0Text: "IDSC is developing a new electronic information service for banks, insurance companies, leasing companies and other financial service providers.",
    media0P1: "IDSC has started developing a new electronic information service for banks, insurance organizations, leasing companies, valuation organizations and other entities providing financial services.",
    media0P2: "The service is planned to provide electronic information on whether a vehicle has or has not been involved in a road traffic accident.",
    media0P3: "The new service will help improve risk assessment related to vehicles in the finance and insurance market, determine the condition of vehicles used as collateral, analyze insurance cases, and support better decision-making in leasing and credit relationships.",
    media0P4: "As a result of implementing the service, banks and financial organizations will receive additional reliable information about vehicles. This will support accepting vehicles as collateral, evaluating market value, identifying insurance risks and assessing potential risks in contractual relations with clients in advance.",
    media0P5: "The service will also help obtain vehicle history data in digital form, reduce manual verification processes, decrease the human factor and increase decision-making speed.",
    media0P6: "This initiative is aimed at reducing risks in financial services, improving the quality of collateral valuation, enhancing insurance processes and expanding the effective use of vehicle-related information.",
    media1Title: "IDSC Begins Work on New Digital Platform",
    media1Text: "IDSC has started developing a new digital service platform based on modern technologies. The platform is designed to centralize services, manage requests electronically and accelerate internal processes.",
    media1P1: "The new digital platform is being developed to bring an organization’s internal processes into a single electronic environment, improve service quality and create a convenient user interface.",
    media1P2: "The platform is expected to include a user account, service catalog, electronic request submission, status tracking, notifications and data analytics features.",
    media1P3: "This solution will help organizations increase process transparency, speed up document exchange and improve operational efficiency.",
    media1P4: "IDSC implements the project step by step: analysis, technical documentation, design, development, testing and deployment.",
    media2Title: "Modern Approaches to Information Systems Development",
    media2Text: "About the latest methodologies and approaches used in designing modern IT systems.",
    media2P1: "One of the most important stages in developing information systems is correctly analyzing organizational needs and clearly understanding business processes.",
    media2P2: "Modern approaches rely on modular architecture, secure APIs, database optimization, audit logs and user role management.",
    media2P3: "This approach helps systems scale, integrate with other services and operate reliably with large volumes of data.",
    media2P4: "IDSC develops information systems based on technical stability, security, user-friendly interfaces and clear documentation.",
    media3Title: "The Importance of Technical Documentation in an IT Project",
    media3Text: "How quality technical documentation contributes to the successful implementation of IT projects.",
    media3P1: "Technical documentation is the foundation of an IT project. It clearly defines the project goal, functional requirements, architecture and integrations.",
    media3P2: "Quality documentation helps developers, the customer and the support team work with a shared understanding of the project.",
    media3P3: "A technical specification, API specification, data model, user guide and test scenarios improve the overall quality of the project.",
    media3P4: "IDSC prepares documentation in a practical and understandable format, making implementation, operation and further development easier.",
    media4Title: "Advantages of B2B IT Services for Organizations",
    media4Text: "How B2B IT services increase organizational efficiency and accelerate digital transformation.",
    media4P1: "B2B IT services help organizations digitize internal processes, optimize costs and accelerate management decisions.",
    media4P2: "Corporate portals, information systems, mobile applications and integration solutions make communication between employees, customers and partners more effective.",
    media4P3: "With these services, data is collected in a single database, reports are automated, the human factor is reduced and control mechanisms are strengthened.",
    media4P4: "IDSC provides design, development, implementation and technical support services for B2B IT solutions tailored to organizational needs.",
    readMore: "Read more →",
    closeArticle: "Close",

    teamLabel: "Team",
    teamTitle: "Our Team",
    teamIntro: "IDSC projects are supported by specialists responsible for management, analysis, technical solutions and quality.",
    teamCardKicker: "IDSC Management",
    teamDirectorName: "Odilov Mirqodir",
    teamDirectorRole: "Director",
    teamDirectorDesc: "Responsible for strategic management, client cooperation and IT project development.",
    teamManagementKicker: "Management",
    teamFinanceKicker: "Finance",
    teamTechKicker: "Technical direction",
    teamKamalovName: "Kamalov Sarvar",
    teamKamalovRole: "Director",
    teamKamalovDesc: "Responsible for organizational management and project directions.",
    teamYagudinName: "Yagudin Islam",
    teamYagudinRole: "Deputy Director",
    teamYagudinDesc: "Responsible for internal processes, coordination and management matters.",
    teamRaxmanovaName: "Raxmanova Iroda",
    teamRaxmanovaRole: "Chief Accountant",
    teamRaxmanovaDesc: "Responsible for financial accounting, documentation and internal financial control.",
    teamMurodovName: "Murodov Shaxzod",
    teamMurodovRole: "Chief Programmer",
    teamMurodovDesc: "Responsible for software solutions, technical architecture and system development.",
    teamAddNote: "When new employees are added, this slider can be expanded.",

    contactLabel: "Contact",
    contactTitle: "Let's Discuss Your Project",
    contactIntro: "Contact us to identify the right IT solution for your organization and discuss project opportunities.",
    contactPhone: "Phone",
    contactPhoneValue: "+998 94 677 39 39",
    contactEmail: "Email",
    contactEmailValue: "idsc.uzbekistan@gmail.com",
    contactAddress: "Address",
    contactAddressValue: "Tashkent, Yashnabad district, Makhtumkuli Street 114A, IT Park (near Ashgabat Park)",
    contactHours: "Working Hours",
    contactHoursVal: "Monday – Friday: 9:00 AM – 6:00 PM",
    contactTrust: "IDSC is a reliable, stable, and professional IT partner for your organization.",
    formName: "Full Name",
    formOrg: "Organization",
    formPhone: "Phone",
    formEmail: "Email",
    formService: "Required Service",
    formServicePlaceholder: "Select a service",
    formMessage: "Message",
    formMessagePlaceholder: "Briefly describe your project...",
    formSubmit: "Send Message",

    footerBrandText: "Information and Decision Support Center — professional IT solutions and digital services for government and private organizations.",
    footerServices: "Services",
    footerNav: "Navigation",
    footerContact: "Contact",
    footerCopy: "© 2026 IDSC — Information and Decision Support Center. All rights reserved."
  }
};

/* ============================================================
   LANGUAGE SWITCHER
   ============================================================ */
let currentLang = localStorage.getItem('idsc-lang') || 'uz';

function applyTranslations(lang) {
  const t = translations[lang];
  if (!t) return;

  // Text nodes
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.textContent = t[key];
    }
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.setAttribute('placeholder', t[key]);
    }
  });

  // Lang buttons active state
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
  });

  // HTML lang attribute
  document.documentElement.setAttribute('lang', lang);
}

function switchLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('idsc-lang', lang);
  applyTranslations(lang);
  if (typeof refreshArticleModal === 'function') refreshArticleModal();
}

// All lang buttons (header, mobile, footer)
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    switchLanguage(btn.getAttribute('data-lang'));
  });
});

/* ============================================================
   PRELOADER
   ============================================================ */
(function initPreloader() {
  const preloader = document.getElementById('preloader');
  const bar = document.getElementById('preloaderBar');
  const statusEl = document.getElementById('preloaderStatus');

  const statusMessages = [
    "Initializing secure digital environment...",
    "Preparing enterprise systems...",
    "Loading digital infrastructure..."
  ];

  let msgIndex = 0;
  let progress = 0;
  let statusInterval;

  // Rotate status messages
  statusInterval = setInterval(() => {
    msgIndex = (msgIndex + 1) % statusMessages.length;
    if (statusEl) statusEl.textContent = statusMessages[msgIndex];
  }, 700);

  // Progress animation
  const progressInterval = setInterval(() => {
    progress += Math.random() * 18 + 5;
    if (progress > 100) progress = 100;
    if (bar) bar.style.width = progress + '%';
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, 80);

  // Hide preloader after ~2.4s
  const hideTimeout = setTimeout(() => {
    clearInterval(statusInterval);
    clearInterval(progressInterval);
    if (bar) bar.style.width = '100%';

    setTimeout(() => {
      if (preloader) {
        preloader.classList.add('fade-out');
        preloader.addEventListener('transitionend', () => {
          preloader.remove();
          document.body.style.removeProperty('overflow');
        }, { once: true });
      }
    }, 200);
  }, 2400);

  // Lock body scroll during preload
  document.body.style.overflow = 'hidden';
})();

/* ============================================================
   HEADER SCROLL EFFECT
   ============================================================ */
const mainHeader = document.getElementById('mainHeader');
let lastScrollY = window.scrollY;

function onScroll() {
  const scrollY = window.scrollY;
  if (scrollY > 40) {
    mainHeader.classList.add('scrolled');
  } else {
    mainHeader.classList.remove('scrolled');
  }

  // Active nav link
  const sections = document.querySelectorAll('section[id]');
  let currentSection = '';
  sections.forEach(sec => {
    const secTop = sec.offsetTop - 100;
    if (scrollY >= secTop) {
      currentSection = sec.getAttribute('id');
    }
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    const href = link.getAttribute('href').replace('#', '');
    link.classList.toggle('active', href === currentSection);
  });

  lastScrollY = scrollY;
}

window.addEventListener('scroll', onScroll, { passive: true });

/* ============================================================
   MOBILE MENU
   ============================================================ */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta');

function openMobileMenu() {
  mobileMenu.removeAttribute('hidden');
  requestAnimationFrame(() => mobileMenu.classList.add('open'));
  document.body.classList.add('menu-open');
  hamburger.setAttribute('aria-expanded', 'true');
  mobileClose.focus();
}

function closeMobileMenu() {
  mobileMenu.classList.remove('open');
  document.body.classList.remove('menu-open');
  hamburger.setAttribute('aria-expanded', 'false');
  setTimeout(() => {
    mobileMenu.setAttribute('hidden', '');
  }, 400);
  hamburger.focus();
}

hamburger.addEventListener('click', openMobileMenu);
mobileClose.addEventListener('click', closeMobileMenu);

mobileNavLinks.forEach(link => {
  link.addEventListener('click', closeMobileMenu);
});

// Close on overlay click
mobileMenu.addEventListener('click', e => {
  if (e.target === mobileMenu) closeMobileMenu();
});

// ESC key
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
    closeMobileMenu();
  }
});

/* ============================================================
   INTERSECTION OBSERVER — REVEAL ANIMATIONS
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children within same parent
      const siblings = entry.target.parentElement.querySelectorAll('[data-reveal]');
      let delay = 0;
      siblings.forEach((sib, idx) => {
        if (sib === entry.target) delay = idx * 80;
      });
      setTimeout(() => {
        entry.target.classList.add('revealed');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('[data-reveal]').forEach(el => {
  revealObserver.observe(el);
});

/* ============================================================
   SMOOTH ANCHOR SCROLLING
   ============================================================ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const href = anchor.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 80;
      const targetTop = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetTop, behavior: 'smooth' });
    }
  });
});

/* ============================================================
   MEDIA CATEGORY FILTERING
   ============================================================ */
const filterBtns = document.querySelectorAll('.media-filter-btn');
const mediaCards = document.querySelectorAll('.media-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.getAttribute('data-filter');

    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // Filter cards
    mediaCards.forEach(card => {
      const category = card.getAttribute('data-category');
      const match = filter === 'all' || category === filter;

      if (match) {
        card.classList.remove('hidden');
        // Slight fade-in
        card.style.opacity = '0';
        card.style.transform = 'translateY(12px)';
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            card.style.transition = 'opacity 0.45s ease, transform 0.45s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
        });
      } else {
        card.classList.add('hidden');
        card.style.opacity = '';
        card.style.transform = '';
        card.style.transition = '';
      }
    });
  });
});



/* ============================================================
   MEDIA ARTICLE MODAL — ALL NEWS CARDS
   ============================================================ */
const articleModal = document.getElementById('articleModal');
const articleOpenBtns = document.querySelectorAll('[data-article-open]');
const articleCloseBtns = document.querySelectorAll('[data-article-close]');
const articleModalImage = document.getElementById('articleModalImage');
const articleModalIcon = document.getElementById('articleModalIcon');
const articleModalCategory = document.getElementById('articleModalCategory');
const articleModalDate = document.getElementById('articleModalDate');
const articleModalTitle = document.getElementById('articleModalTitle');
const articleModalLead = document.getElementById('articleModalLead');
const articleModalText = document.getElementById('articleModalText');

const articleIcons = {
  media1: '<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="16" width="56" height="42" rx="6" stroke="currentColor" stroke-width="2"/><path d="M9 28H65" stroke="currentColor" stroke-width="1.5" opacity="0.55"/><circle cx="25" cy="42" r="5" stroke="currentColor" stroke-width="1.7" opacity="0.75"/><path d="M36 38H56M36 46H50" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" opacity="0.7"/></svg>',
  media2: '<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18 12H49L58 21V62H18V12Z" stroke="currentColor" stroke-width="2"/><path d="M49 12V21H58" stroke="currentColor" stroke-width="2"/><path d="M27 32H48M27 40H48M27 48H40" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" opacity="0.75"/></svg>',
  media3: '<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="13" y="13" width="48" height="48" rx="8" stroke="currentColor" stroke-width="2"/><path d="M22 43L30 31L38 39L49 25L57 33" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M22 52H52" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" opacity="0.55"/></svg>',
  media4: '<svg width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M37 8L61 22V50L37 66L13 50V22L37 8Z" stroke="currentColor" stroke-width="2"/><path d="M37 8V37M13 22L37 37M61 22L37 37" stroke="currentColor" stroke-width="1.6" opacity="0.6"/><circle cx="37" cy="37" r="5" stroke="currentColor" stroke-width="1.7"/></svg>'
};

const articleData = {
  media0: {
    categoryKey: 'filterNews',
    titleKey: 'media0Title',
    leadKey: 'media0Text',
    bodyKeys: ['media0P1', 'media0P2', 'media0P3', 'media0P4', 'media0P5', 'media0P6'],
    image: 'assets/images/accident-service.jpg',
    imageAltKey: 'media0Title',
    date: '2026'
  },
  media1: {
    categoryKey: 'filterNews',
    titleKey: 'media1Title',
    leadKey: 'media1Text',
    bodyKeys: ['media1P1', 'media1P2', 'media1P3', 'media1P4'],
    icon: articleIcons.media1,
    date: '2026'
  },
  media2: {
    categoryKey: 'filterArticles',
    titleKey: 'media2Title',
    leadKey: 'media2Text',
    bodyKeys: ['media2P1', 'media2P2', 'media2P3', 'media2P4'],
    icon: articleIcons.media2,
    date: '2026'
  },
  media3: {
    categoryKey: 'filterArticles',
    titleKey: 'media3Title',
    leadKey: 'media3Text',
    bodyKeys: ['media3P1', 'media3P2', 'media3P3', 'media3P4'],
    icon: articleIcons.media3,
    date: '2026'
  },
  media4: {
    categoryKey: 'filterProjects',
    titleKey: 'media4Title',
    leadKey: 'media4Text',
    bodyKeys: ['media4P1', 'media4P2', 'media4P3', 'media4P4'],
    icon: articleIcons.media4,
    date: '2026'
  }
};

let currentArticleId = 'media0';

function setArticleModalContent(articleId) {
  const article = articleData[articleId] || articleData.media0;
  const t = translations[currentLang] || translations.uz;
  currentArticleId = articleId in articleData ? articleId : 'media0';

  if (articleModalCategory) articleModalCategory.textContent = t[article.categoryKey] || '';
  if (articleModalDate) articleModalDate.textContent = article.date || '2026';
  if (articleModalTitle) articleModalTitle.textContent = t[article.titleKey] || '';
  if (articleModalLead) articleModalLead.textContent = t[article.leadKey] || '';

  if (articleModalText) {
    articleModalText.innerHTML = '';
    article.bodyKeys.forEach(key => {
      if (t[key]) {
        const p = document.createElement('p');
        p.textContent = t[key];
        articleModalText.appendChild(p);
      }
    });
  }

  if (article.image && articleModalImage) {
    articleModalImage.src = article.image;
    articleModalImage.alt = t[article.imageAltKey] || '';
    articleModalImage.removeAttribute('hidden');
    if (articleModalIcon) {
      articleModalIcon.setAttribute('hidden', '');
      articleModalIcon.innerHTML = '';
    }
  } else {
    if (articleModalImage) articleModalImage.setAttribute('hidden', '');
    if (articleModalIcon) {
      articleModalIcon.innerHTML = article.icon || articleIcons.media1;
      articleModalIcon.removeAttribute('hidden');
    }
  }
}

function refreshArticleModal() {
  if (articleModal && articleModal.classList.contains('open')) {
    setArticleModalContent(currentArticleId);
  }
}

function openArticleModal(articleId) {
  if (!articleModal) return;
  setArticleModalContent(articleId);
  articleModal.removeAttribute('hidden');
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => {
    articleModal.classList.add('open');
  });
}

function closeArticleModal() {
  if (!articleModal) return;
  articleModal.classList.remove('open');
  document.body.classList.remove('modal-open');
  setTimeout(() => {
    articleModal.setAttribute('hidden', '');
  }, 240);
}

articleOpenBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.preventDefault();
    openArticleModal(btn.getAttribute('data-article-open') || 'media0');
  });
});

articleCloseBtns.forEach(btn => {
  btn.addEventListener('click', closeArticleModal);
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && articleModal && articleModal.classList.contains('open')) {
    closeArticleModal();
  }
});

/* ============================================================
   TEAM SLIDER — LARGE AUTO SCROLL
   ============================================================ */
const teamSlider = document.getElementById('teamSlider');
const teamScrollBtns = document.querySelectorAll('[data-team-scroll]');

if (teamSlider) {
  const getTeamStep = () => {
    const card = teamSlider.querySelector('.team-member-card');
    const sliderStyle = window.getComputedStyle(teamSlider);
    const gap = parseFloat(sliderStyle.columnGap || sliderStyle.gap) || 28;
    return card ? card.offsetWidth + gap : 360;
  };

  const scrollTeamSlider = direction => {
    const maxScroll = teamSlider.scrollWidth - teamSlider.clientWidth;
    const step = getTeamStep();

    if (maxScroll <= 2) return;

    if (direction > 0 && teamSlider.scrollLeft >= maxScroll - 12) {
      teamSlider.scrollTo({ left: 0, behavior: 'smooth' });
      return;
    }

    if (direction < 0 && teamSlider.scrollLeft <= 12) {
      teamSlider.scrollTo({ left: maxScroll, behavior: 'smooth' });
      return;
    }

    teamSlider.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  teamScrollBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const direction = btn.getAttribute('data-team-scroll') === 'next' ? 1 : -1;
      scrollTeamSlider(direction);
    });
  });

  let teamAutoTimer = null;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const startTeamAutoScroll = () => {
    if (prefersReducedMotion || teamAutoTimer) return;
    teamAutoTimer = window.setInterval(() => scrollTeamSlider(1), 3800);
  };

  const stopTeamAutoScroll = () => {
    if (!teamAutoTimer) return;
    window.clearInterval(teamAutoTimer);
    teamAutoTimer = null;
  };

  teamSlider.addEventListener('mouseenter', stopTeamAutoScroll);
  teamSlider.addEventListener('mouseleave', startTeamAutoScroll);
  teamSlider.addEventListener('focusin', stopTeamAutoScroll);
  teamSlider.addEventListener('focusout', startTeamAutoScroll);
  teamSlider.addEventListener('touchstart', stopTeamAutoScroll, { passive: true });
  teamSlider.addEventListener('touchend', startTeamAutoScroll, { passive: true });

  startTeamAutoScroll();
}

/* ============================================================
   CONTACT FORM — BASIC VALIDATION
   ============================================================ */
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();

    const nameEl = contactForm.querySelector('#formName');
    const emailEl = contactForm.querySelector('#formEmail');
    let valid = true;

    if (nameEl && !nameEl.value.trim()) {
      nameEl.style.borderColor = 'rgba(180,60,60,0.6)';
      nameEl.focus();
      valid = false;
    } else if (nameEl) {
      nameEl.style.borderColor = '';
    }

    if (emailEl && !emailEl.value.trim()) {
      emailEl.style.borderColor = 'rgba(180,60,60,0.6)';
      if (valid) emailEl.focus();
      valid = false;
    } else if (emailEl) {
      emailEl.style.borderColor = '';
    }

    if (valid) {
      const submitBtn = contactForm.querySelector('.btn-submit');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = '✓';
      submitBtn.style.background = '#1a3a1a';
      submitBtn.style.borderColor = '#4a8a4a';
      setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
        submitBtn.style.borderColor = '';
        contactForm.reset();
      }, 2400);
    }
  });

  // Clear error state on input
  contactForm.querySelectorAll('input, textarea').forEach(el => {
    el.addEventListener('input', () => {
      el.style.borderColor = '';
    });
  });
}

/* ============================================================
   INIT
   ============================================================ */
window.addEventListener('DOMContentLoaded', () => {
  applyTranslations(currentLang);
});