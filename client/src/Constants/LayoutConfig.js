/**
 * ============================================
 * ملف إعدادات التخطيط - Layout Configuration
 * ============================================
 * 
 * غيّر القيم في هذا الملف وسيتم تطبيقها تلقائياً
 * على جميع أجزاء الموقع (الهيدر، الفوتر، الصفحة الرئيسية)
 * 
 * Change values in this file and they will be automatically
 * applied to all parts of the website (header, footer, homepage)
 */

// ============================================
// 1. معلومات العلامة التجارية - Brand Info
// ============================================
export const BRAND = {
    // اسم المنصة
  
    // اسم المعلم
    teacherName: "اثر - ATHAR ",
    // وصف قصير
    shortDescription: "استوديو تصوير متخصص للمدرسين والاطباء والمهندسين وكل صناع المحتوي | جودة 4K | شاشة تفاعلية",
    // الشعار (اتركه فارغاً لاستخدام الشعار الافتراضي)
    // يمكنك وضع رابط صورة هنا
    logoUrl: "",
    // الشعار الثانوي
    secondaryLogoUrl: "",
};

// ============================================
// 2. إعدادات الهيدر/النافبار - Navbar Settings
// ============================================
export const NAVBAR = {
    // إظهار اسم المعلم بجانب الشعار
    showTeacherName: true,
    // إظهار وصف المنصة تحت الاسم
    showPlatformDescription: true,
    // لون الخلفية (يمكنك تغييره لـ tailwind classes)
    bgColor: "bg-white dark:bg-gray-900",
    // لون الخط الملون أعلى النافبار
    accentLineColors: "from-teal-500 via-teal-600 to-cyan-600",
    // ارتفاع النافبار
    height: "h-16 md:h-20",
};

// ============================================
// 3. قسم الهيرو (البانر الرئيسي) - Hero Section
// ============================================
export const HERO = {
    // العنوان الرئيسي
    mainTitle: "أثَر | معرفة تُبنى… وأثر يبقى",
    // العنوان الفرعي
    subtitle: "منصتك عشان تبني معرفة... وتعمل أثر يفضل معاك",
    // النص أعلى العنوان
    // نص زر الاشتراك
    ctaButtonText: "يلا بينا نعمل اثر",
    // رابط زر الاشتراك
    ctaButtonLink: "/signup",
    // صورة المعلم في الهيرو (ضع رابط الصورة هنا)
    teacherImageUrl: "",
    // إظهار صورة المعلم
    showTeacherImage: true,
    // لون الخلفية
    bgGradient: "from-teal-50 via-white to-cyan-50",
};

// ============================================
// 4. معلومات التواصل - Contact Information
// ============================================
export const CONTACT = {
    // رقم الحجز والاستفسارات
    bookingPhone: "+201284999924",
    bookingPhoneLabel: "الحجز والاستفسارات",
    // رقم الدعم الفني
    supportPhone: "+201284999924",
    supportPhoneLabel: "الدعم الفني",
    // البريد الإلكتروني
    email: "support@mansety.com",
    // العنوان
    address: "",
    // عنوان قسم التواصل
    sectionTitle: "تواصل معنا",
    sectionSubtitle: "محتاج مساعدة ؟ تواصل معنا علطول على الارقام التاليه واتساب او اتصال",
};

// ============================================
// 5. روابط السوشيال ميديا - Social Media Links
// ============================================
export const SOCIAL_MEDIA = {
    facebook: {
        url: "https://www.facebook.com/profile.php?id=61584090482581",
        label: "Facebook",
        enabled: true,
    },
    youtube: {
        url: "https://youtube.com/",
        label: "YouTube",
        enabled: false,
    },
    tiktok: {
        url: "https://www.tiktok.com/",
        label: "Tiktok",
        enabled: false,
    },
    instagram: {
        url: "https://www.instagram.com/",
        label: "Instagram",
        enabled: false,
    },
    twitter: {
        url: "https://twitter.com/",
        label: "Twitter",
        enabled: false,
    },
    whatsapp: {
        url: "https://wa.me/201284999924",
        label: "WhatsApp",
        enabled: false,
    },
};

// ============================================
// 6. إعدادات الفوتر - Footer Settings
// ============================================
export const FOOTER = {
    // نص حقوق النشر
    copyrightText: "جميع الحقوق محفوظة",
    // السنة (اتركها فارغة لاستخدام السنة الحالية)
    year: "",
    // إظهار السوشيال ميديا في الفوتر
    showSocialMedia: true,
    // إظهار معلومات التواصل في الفوتر
    showContactInfo: true,
    // روابط إضافية في الفوتر
    links: [
        { label: "الشروط والأحكام", url: "/terms" },
        { label: "سياسة الخصوصية", url: "/privacy" },
        { label: "من نحن", url: "/about" },
    ],
    // معلومات المطور
    developer: {
        name: "Fikra Software",
        url: "https://www.facebook.com/people/Fikra-Software-%D9%81%D9%83%D8%B1%D8%A9/61572824761047/",
        showInFooter: true,
    },
};

// ============================================
// 7. إعدادات الدفع والشحن - Payment Settings
// ============================================
export const PAYMENT = {
    // واتساب للحصول على كود شحن
    whatsappForCodes: {
        phone: "01555559887",
        label: "للحصول على كود شحن - تواصل معنا على واتساب",
        enabled: true,
    },
    // رقم واتساب للتواصل
    whatsappContact: {
        phone: "01080808667",
        label: "رقم الواتساب",
        description: "متاح على مدار 24/7",
        enabled: true,
    },
    // فودافون كاش
    vodafoneCash: {
        phone: "01080808667",
        label: "رقم فودافون كاش",
        description: "ادفع المبلغ وسيصلك الكود فوراً",
        enabled: true,
    },
    // عنوان قسم الشحن
    sectionTitle: "كيفية الشحن:",
    // خطوات الشحن
    steps: [
        "تواصل معنا على واتساب للحصول على كود شحن",
        "اشتر كود شحن من البائعين المعتمدين",
        "أدخل الكود والمبلغ في النموذج أعلاه",
        "سيتم إضافة المبلغ إلى محفظتك فوراً",
        "استخدم رصيدك لشراء الكورسات والخدمات التي ستتواصل معنا بشأنها على واتساب",
    ],
};

// ============================================
// 8. إعدادات السايدبار - Sidebar Settings
// ============================================
export const SIDEBAR = {
    // عنوان السايدبار
    title: "اثر ",
    // إظهار رصيد المحفظة
    showWalletBalance: true,
    // ألوان السايدبار
    bgColor: "bg-white dark:bg-gray-900",
};

// ============================================
// 9. الألوان الرئيسية - Theme Colors
// ============================================
/**
 * لتغيير اللون الرئيسي للموقع:
 * 1. افتح ملف src/index.css
 * 2. غيّر قيم CSS variables في قسم :root
 * 
 * اللون الرئيسي: #005F6A (تيل/سماوي داكن)
 */
export const COLORS = {
    // اللون الرئيسي (تيل/سماوي - #005F6A)
    primary: {
        50: "#e6f7f9",    // خلفية فاتحة جداً
        100: "#b3e8ed",   // خلفية فاتحة
        200: "#80d9e1",
        300: "#4dcad5",
        400: "#1abcc9",
        500: "#00a8b5",   // لون متوسط
        600: "#005F6A",   // اللون الأساسي (لون الشعار)
        700: "#004a52",   // hover
        800: "#00363a",
        900: "#002122",
        gradient: "from-teal-600 via-teal-700 to-cyan-700",
    },
    // اللون الثانوي (سماوي)
    secondary: {
        500: "#0891b2",
        gradient: "from-cyan-500 to-teal-600",
    },
    // لون التمييز (ذهبي/برتقالي)
    accent: {
        500: "#f59e0b",
        gradient: "from-amber-400 to-orange-500",
    },
    // أسماء الألوان للاستخدام في الكود
    tailwind: {
        primary: "teal",      // تيل (يطابق #005F6A)
        secondary: "cyan",
        accent: "amber",
    }
};

// ============================================
// دالة مساعدة للحصول على السنة الحالية
// ============================================
export const getCurrentYear = () => {
    return FOOTER.year || new Date().getFullYear();
};

// ============================================
// تصدير جميع الإعدادات ككائن واحد
// ============================================
const LayoutConfig = {
    BRAND,
    NAVBAR,
    HERO,
    CONTACT,
    SOCIAL_MEDIA,
    FOOTER,
    PAYMENT,
    SIDEBAR,
    COLORS,
    getCurrentYear,
};

export default LayoutConfig;
