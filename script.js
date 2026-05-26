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
    projCat1: "Axborot tizimi",
    projCat2: "Korporativ portal",
    projCat3: "Mobil yechim",
    projCat4: "Texnik hujjatlashtirish",
    projStatus: "Amalga oshirildi",
    projChallenge: "Muammo",
    projSolution: "Yechim",
    proj1Title: "[Tashkilot nomi] uchun axborot tizimi",
    proj1Challenge: "Ma'lumot almashinuvi va hisobot jarayonlarining qo'lda yuritilishi va samaradorlikning pastligi.",
    proj1Solution: "Korporativ axborot tizimini ishlab chiqish va joriy etish.",
    proj2Title: "[Tashkilot nomi] uchun korporativ portal",
    proj2Challenge: "Ichki jarayonlar va xodimlar boshqaruvining markazlashmaganligida.",
    proj2Solution: "Xodimlar portali va korporativ intranet tizimini yaratish.",
    proj3Title: "[Tashkilot nomi] uchun mobil yechim",
    proj3Challenge: "Mobil qurilmalar orqali xizmatlardan foydalanish imkoniyatining yo'qligi.",
    proj3Solution: "iOS va Android uchun funksional mobil ilova ishlab chiqish.",
    proj4Title: "[Tashkilot nomi] uchun texnik hujjatlashtirish loyihasi",
    proj4Challenge: "IT tizimlar uchun standartlashtirilgan texnik hujjatlarning mavjud emasligi.",
    proj4Solution: "To'liq texnik hujjatlar to'plamini professional shaklda tayyorlash.",

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
    media1Title: "IDSC yangi raqamli platforma ustida ish boshladi",
    media1Text: "Zamonaviy texnologiyalar asosida yangi raqamli xizmat platformasini ishlab chiqish jarayoni boshlandi.",
    media2Title: "Axborot tizimlarini ishlab chiqishda zamonaviy yondashuvlar",
    media2Text: "Zamonaviy IT tizimlarni loyihalashda qo'llaniladigan eng yangi metodologiyalar va yondashuvlar haqida.",
    media3Title: "Texnik hujjatlashtirishning IT loyihadagi ahamiyati",
    media3Text: "Sifatli texnik hujjatlashtirish IT loyihalarning muvaffaqiyatli amalga oshirilishida qanday rol o'ynaydi.",
    media4Title: "Tashkilotlar uchun B2B IT xizmatlarining afzalliklari",
    media4Text: "B2B yo'nalishidagi IT xizmatlar tashkilotlar samaradorligini qanday oshiradi va raqamli o'zgarishni qanday tezlashtiradi.",
    readMore: "Batafsil →",

    contactLabel: "Aloqa",
    contactTitle: "Loyihangizni muhokama qilaylik",
    contactIntro: "Tashkilotingiz uchun mos IT yechimni tanlash va loyiha imkoniyatlarini muhokama qilish uchun biz bilan bog'laning.",
    contactPhone: "Telefon",
    contactEmail: "Email",
    contactAddress: "Manzil",
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
    projCat1: "Информационная система",
    projCat2: "Корпоративный портал",
    projCat3: "Мобильное решение",
    projCat4: "Техническая документация",
    projStatus: "Реализовано",
    projChallenge: "Задача",
    projSolution: "Решение",
    proj1Title: "Информационная система для [название организации]",
    proj1Challenge: "Ручное ведение обмена данными и отчётности, низкая эффективность процессов.",
    proj1Solution: "Разработка и внедрение корпоративной информационной системы.",
    proj2Title: "Корпоративный портал для [название организации]",
    proj2Challenge: "Децентрализация внутренних процессов и управления персоналом.",
    proj2Solution: "Создание портала сотрудников и корпоративной интранет-системы.",
    proj3Title: "Мобильное решение для [название организации]",
    proj3Challenge: "Отсутствие доступа к услугам через мобильные устройства.",
    proj3Solution: "Разработка функционального мобильного приложения для iOS и Android.",
    proj4Title: "Проект технической документации для [название организации]",
    proj4Challenge: "Отсутствие стандартизированной технической документации для IT-систем.",
    proj4Solution: "Профессиональная подготовка полного пакета технической документации.",

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
    media1Title: "IDSC начала работу над новой цифровой платформой",
    media1Text: "Начат процесс разработки новой цифровой платформы услуг на основе современных технологий.",
    media2Title: "Современные подходы к разработке информационных систем",
    media2Text: "О новейших методологиях и подходах, применяемых при проектировании современных IT-систем.",
    media3Title: "Роль технической документации в IT-проекте",
    media3Text: "Как качественная техническая документация влияет на успешную реализацию IT-проектов.",
    media4Title: "Преимущества B2B IT-услуг для организаций",
    media4Text: "Как B2B IT-услуги повышают эффективность организаций и ускоряют цифровую трансформацию.",
    readMore: "Подробнее →",

    contactLabel: "Контакты",
    contactTitle: "Давайте обсудим ваш проект",
    contactIntro: "Свяжитесь с нами, чтобы выбрать подходящее IT-решение для вашей организации и обсудить возможности проекта.",
    contactPhone: "Телефон",
    contactEmail: "Email",
    contactAddress: "Адрес",
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
    projCat1: "Information System",
    projCat2: "Corporate Portal",
    projCat3: "Mobile Solution",
    projCat4: "Technical Documentation",
    projStatus: "Delivered",
    projChallenge: "Challenge",
    projSolution: "Solution",
    proj1Title: "Information System for [Organization Name]",
    proj1Challenge: "Manual data exchange and reporting processes with low efficiency.",
    proj1Solution: "Development and implementation of a corporate information system.",
    proj2Title: "Corporate Portal for [Organization Name]",
    proj2Challenge: "Decentralized internal processes and personnel management.",
    proj2Solution: "Creation of an employee portal and corporate intranet system.",
    proj3Title: "Mobile Solution for [Organization Name]",
    proj3Challenge: "Lack of access to services via mobile devices.",
    proj3Solution: "Development of a functional mobile application for iOS and Android.",
    proj4Title: "Technical Documentation Project for [Organization Name]",
    proj4Challenge: "Absence of standardized technical documentation for IT systems.",
    proj4Solution: "Professional preparation of a complete technical documentation package.",

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
    media1Title: "IDSC Begins Work on New Digital Platform",
    media1Text: "The development process for a new digital service platform based on modern technologies has begun.",
    media2Title: "Modern Approaches to Information Systems Development",
    media2Text: "About the latest methodologies and approaches used in designing modern IT systems.",
    media3Title: "The Importance of Technical Documentation in an IT Project",
    media3Text: "How quality technical documentation contributes to the successful implementation of IT projects.",
    media4Title: "Advantages of B2B IT Services for Organizations",
    media4Text: "How B2B IT services increase organizational efficiency and accelerate digital transformation.",
    readMore: "Read more →",

    contactLabel: "Contact",
    contactTitle: "Let's Discuss Your Project",
    contactIntro: "Contact us to identify the right IT solution for your organization and discuss project opportunities.",
    contactPhone: "Phone",
    contactEmail: "Email",
    contactAddress: "Address",
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
    const target = document.querySelector(anchor.getAttribute('href'));
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