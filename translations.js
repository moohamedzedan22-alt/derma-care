// Translations object
const translations = {
    en: {
        home: "Home",
        about: "About Us",
        products: "Products",
        contact: "Contact",
        welcome: "Welcome To Derma Care",
        beautyCare: "Beauty Care",
        viewProduct: "view product",
        addToCart: "Add to Cart",
        yourCart: "YOUR CART",
        checkout: "check out",
        phone: "phone number",
        email: "email",
        yourName: "your name",
        yourEmail: "Your Email",
        yourMessage: "Your Message",
        sendMessage: "Send Message",
        pleaseWriteMessage: "please write message",
        aboutTitle: "About Us",
        aboutText1: "We celebrate the beauty of every woman, her femininity, strength, and self-confidence.",
        aboutText2: "We offer body care products made with love, with safe and nourishing ingredients that give your skin softness and a natural glow.",
        aboutText3: "Each product is crafted with passion and sent to you with love, to always remind you that you deserve care that understands you and expresses who you are.",
        allRightsReserved: "All Rights Reserved"
    },
    ar: {
        home: "الرئيسية",
        about: "عن الشركة",
        products: "المنتجات",
        contact: "اتصل بنا",
        welcome: "مرحباً بك في درما كير",
        beautyCare: "العناية بالجمال",
        viewProduct: "عرض المنتج",
        addToCart: "أضف للسلة",
        yourCart: "سلتك",
        checkout: "الدفع",
        phone: "رقم الهاتف",
        email: "البريد الإلكتروني",
        yourName: "اسمك",
        yourEmail: "بريدك الإلكتروني",
        yourMessage: "رسالتك",
        sendMessage: "إرسال الرسالة",
        pleaseWriteMessage: "من فضلك اكتب رسالة",
        aboutTitle: "عن الشركة",
        aboutText1: "نحن نحتفل بجمال كل امرأة، أنوثتها وقوتها وثقة بنفسها.",
        aboutText2: "نحن نقدم منتجات العناية بالجسم مصنوعة بحب، بمكونات آمنة ومغذية تمنح بشرتك النعومة والتألق الطبيعي.",
        aboutText3: "كل منتج مصنوع بش passion وأرسلناه لك بحب، ليذكرك دائماً أنك تستحقين رعاية تفهمك وتعبير عن هويتك.",
        allRightsReserved: "جميع الحقوق محفوظة"
    }
};

// Current language
let currentLang = localStorage.getItem("lang") || "en";

// Function to change language
function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("lang", lang);
    updateContent();
    document.body.dir = lang === "ar" ? "rtl" : "ltr";
}

// Function to update content
function updateContent() {
    const t = translations[currentLang];
    
    // Update nav items
    const navLinks = document.querySelectorAll("#navMenu li a");
    if (navLinks[0]) navLinks[0].textContent = t.home;
    if (navLinks[1]) navLinks[1].textContent = t.about;
    if (navLinks[2]) navLinks[2].textContent = t.products;
    if (navLinks[3]) navLinks[3].textContent = t.contact;
    
    // Update header
    const headerH1 = document.querySelector(".header h1");
    if (headerH1) headerH1.textContent = t.welcome;
    
    const headerP = document.querySelector(".header p");
    if (headerP) headerP.textContent = t.beautyCare;
    
    // Update buttons
    const viewButtons = document.querySelectorAll(".btn");
    viewButtons.forEach(btn => {
        if (btn.textContent.includes("view product") || btn.textContent.includes("عرض المنتج")) {
            btn.textContent = t.viewProduct;
        }
        if (btn.textContent.includes("Add to Cart") || btn.textContent.includes("أضف للسلة")) {
            btn.textContent = t.addToCart;
        }
    });
    
    // Update cart
    const cartHeader = document.querySelector(".cart_header");
    if (cartHeader && cartHeader.textContent.includes("YOUR CART")) {
        cartHeader.innerHTML = `${t.yourCart} <span class="close-cart" onclick="closecart()">x</span>`;
    }
    
    const checkoutBtn = document.querySelector(".checkout-btn");
    if (checkoutBtn) checkoutBtn.textContent = t.checkout;
    
    // Update contact page
    const phoneHeader = document.querySelector(".name h2");
    if (phoneHeader && phoneHeader.textContent.includes("phone")) {
        const h2s = document.querySelectorAll(".name h2");
        h2s[0].textContent = t.phone;
        h2s[1].textContent = t.email;
    }
    
    const labels = document.querySelectorAll("form label");
    labels.forEach(label => {
        if (label.textContent.includes("your name") || label.textContent.includes("اسمك")) {
            label.textContent = t.yourName;
        }
        if (label.textContent.includes("Your Email") || label.textContent.includes("بريدك")) {
            label.textContent = t.yourEmail;
        }
        if (label.textContent.includes("Your Message") || label.textContent.includes("رسالتك")) {
            label.textContent = t.yourMessage;
        }
    });
    
    const sendBtn = document.querySelector(".click");
    if (sendBtn) sendBtn.textContent = t.sendMessage;
    
    // Update about page
    const aboutH1 = document.querySelector(".about h1");
    if (aboutH1 && aboutH1.textContent.includes("About")) {
        aboutH1.textContent = t.aboutTitle;
    }
    
    const aboutPs = document.querySelectorAll(".about p");
    if (aboutPs[0] && aboutPs[0].textContent.includes("celebrate")) {
        aboutPs[0].textContent = t.aboutText1;
    }
    if (aboutPs[1] && aboutPs[1].textContent.includes("offer")) {
        aboutPs[1].textContent = t.aboutText2;
    }
    if (aboutPs[2] && aboutPs[2].textContent.includes("Each product")) {
        aboutPs[2].textContent = t.aboutText3;
    }
    
    // Update footer
    const footerPs = document.querySelectorAll("footer p");
    footerPs.forEach((p, index) => {
        if (p.textContent.includes("All Rights")) {
            p.textContent = t.allRightsReserved;
        }
    });
    
    // Update product buttons
    const btButtons = document.querySelectorAll(".bt");
    btButtons.forEach(btn => {
        if (btn.textContent.includes("view product") || btn.textContent.includes("عرض المنتج")) {
            btn.textContent = t.viewProduct;
        }
    });
    
    // Update language button
    const langBtn = document.getElementById("langBtn");
    if (langBtn) {
        langBtn.textContent = currentLang === "en" ? "العربية" : "English";
    }
}

// Initialize on load
document.addEventListener("DOMContentLoaded", function() {
    document.body.dir = currentLang === "ar" ? "rtl" : "ltr";
    updateContent();
});

