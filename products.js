/**
 * products.js — Shared product data store for Derma Care
 * Uses localStorage so that admin changes appear everywhere.
 */

var DEFAULT_PRODUCTS = [
  {id: 1,  nameEn: "Lip Balm",             nameAr: "ليپ بالم",                  price: 100, image: "ةخاشةثي.jpeg",                                  descEn: "Lip balm 5ml - Derma Care with strawberry scent - the secret to soft lips all day. Shea butter: deep nourishment. Beeswax: locks moisture. Jojoba oil, Castor oil, Grape seed oil, Vitamin E: keeps lips healthy.",                                                                                   descAr: "✨ ليب بالم Derma Care برائحة الفرولة … سرّ الشفايف الناعمة طول اليوم. زبدة الشيا: تغذية عميقة ونعومة فورية. شمع العسل: يحبس الترطيب ويحمي من التشققات. زيت الجوجوبا. زيت الخروع. زيت بذور العنب. فيتامين E: يحافظ على حيوية الشفايف ويمنع الجفاف."},
  {id: 2,  nameEn: "Savings Package",       nameAr: "الباقة الذهبية",            price: 440, image: "WhatsApp Image 2026-05-13 at 4.18.45 PM.jpeg",   descEn: "Winter is here and your skin is calling for hydration! If you don't have a moisturizing routine to save you from winter dryness, you need to check out this package from Derma Care.",                                                                                                              descAr: "شتا دخل... وجلدك بينادي على الترطيب ❄️ لو لسه معندكيش روتين ترطيب ينقذك من جفاف الشتا يبقى لازم تشوفي الباكيدج دي من Derma Care. 💗 باكيدج الترطيب الكامل = كل اللي جسمك محتاجه."},
  {id: 3,  nameEn: "Body Lotion",           nameAr: "بادي لوشن",                 price: 270, image: "Whatsapp Image 2026-05-13 at 4.18.40 PM.jpeg",   descEn: "125 ml - Body Lotion with strawberry and rose vanilla scent. Ingredients: Shea butter, Coconut butter, Jojoba oil, Grape seed oil, Sweet almond oil, Panthenol, Glycerin, Urea, Vitamin E.",                                                                                                              descAr: "بادي لوشن ديرما كير هو رفيقك المثالي يجمع ما بين رائحة الفرولة والروز فانيلياً. المكونات: زبدة الشيا، زبدة جوز الهند، زيت الجوجوبا، زيت بذور العنب، زيت اللوز الحلو، بانثينول، جلسرين، يوريا، فيتامبن E."},
  {id: 4,  nameEn: "Pure Henna Powder",     nameAr: "سدر مغربي",                 price: 180, image: "photo_2025-12-14_16-48-51.jpg",                   descEn: "Pure Moroccan Henna - The only product you'll need for your hair. 5 benefits in 1 box. Size: 200g.",                                                                                                                                                                                                descAr: "سبيلي كل حاجة في إيدك وعلبة السدر المغربي هتعمل إيه في حياتك💚. دي علبة فيها السدر المغربي الأصلي: 1. بيعالج تساقط الشعر. 2. اللمعان هيبقى عندك طول الوقت. 3. بيعالج فروة الشعر. 4. تنضيف عميق. 5. يقضي على القشرة. الحجم: 200 جرام."},
  {id: 5,  nameEn: "Body Butter (50g)",     nameAr: "بادي باتر صغير",           price: 120, image: "WhatsApb Image 2026-05-13 at 4.18.40 PM.jpeg",    descEn: "Body Butter 50g - Deep hydration. Ingredients: Shea butter, Coconut butter, Jojoba oil, Grape seed oil, Sweet almond oil, Panthenol, Glycerin, Urea, Niacinamide, Vitamin E.",                                                                                                                         descAr: "بادي باتر 50 جرام - مكونات: زبدة الشيا، زبدة جوز الهند، زيت اللوز الحلو، زيت جوجوبا، زيت بذور العنب، بانثينول، جلسرين، يوريا، نياسيناميد، فيتامبن E."},
  {id: 6,  nameEn: "Tint Creamy",           nameAr: "تينت كريمي",                price: 130, image: "WhatsApp Image 2026-05-14 at 10.08.3 PM.jpeg",   descEn: "Tint Creamy 10ml - Easy to apply therapeutic tint rich with Niacinamide 2%, Jojoba oil, Sweet almond oil, Panthenol, Glycerin, Shea butter, Vitamin E. Also includes Lip Balm Therapy.",                                                                                                                   descAr: "تينت كريمي سهل الفرد علاجي غني بـ: نيسيناميد 2%، زيت الجوجوبا، زيت اللوز الحلو، بانثينول، جلسرين، زبدة الشيا، فيتامبن E. مع ليب بالم ثيربي. الحجم: 10 مل."},
  {id: 7,  nameEn: "Body Butter (100g)",    nameAr: "بادي باتر كبير",           price: 230, image: "WhatsApb Image 2026-05-13 at 4.18.40 PM.jpeg",    descEn: "Body Butter 100g - Deep hydration for all body. Recommended to use after showering in winter.",                                                                                                                                                                                                   descAr: "بادي باتر 100 جرام - ترطيب عميق لجميع الجسم. يُنصح باستخدامه بعد الاستحمام في الشتاء."},
  {id: 8,  nameEn: "Lip Gloss",             nameAr: "ليب جلوس",                  price: 100, image: "WhatsApp Image 2026-03-03 at 11.34.44 PM.jpeg",   descEn: "Lip Gloss - Therapeutic lip gloss rich with Grape seed oil, Jojoba, Sweet almond oil and Vitamin E. Lightweight formula with only color shine. Strawberry scent.",                                                                                                                                       descAr: "ليب جلوس علاجية غنية بزيت بذور العنب والجوجوبا واللوز الحلو وفيتامبن E ترطيب مافيش أكتر من كدا مع لمعة شفايف سحرية. قوامها مش تقيل خالص بتعطي بس لمعة اللون. بريحة الفراولة🍓."},
  {id: 9,  nameEn: "Moroccan Soap",         nameAr: "صابون مغربي",               price: 480, image: "WhatsApp Image 2026-03-03 at 11.33.47 PM.jpeg",   descEn: "Moroccan Soap with Argan Oil - Argan oil is known for its strong hydration and nourishment. The Moroccan glove helps exfoliate gently and effectively, leaving skin softer and smoother from the first use.",                                                                                       descAr: "الصابون المغربي بزيت الأرجان - زيت الأرجان معروف بترطيبه القوي وتغذيته للبشرة، بيساعد في تحسين مظهر التصبغات. التبريمة بتفتح المسام. الليفة المغربي: بتقشر بلطف لكن بفاعلية، وبتسيب الجسم أنعم وأنضف من أول مرة."},
  {id: 10, nameEn: "Foot Care Set",         nameAr: "مجموعة العناية بالقدمين",  price: 350, image: "WhatsApp Image 2026-05-13 at 4.18.15 PM.jpeg",   descEn: "Silicon Gel Sock with Vitamin E + VIP Foot File. Protects feet from cracks. Keeps feet moisturized. Helps soften and brighten feet. VIP Foot File removes dead skin easily.",                                                                                                                  descAr: "شراب سيلكون چيل بفيتامبن E: غني بزيت الجوجوبا، زيت الزيتون، فيتامبن E. يحمي القدمين من التشققات. يحافظ على رطوبه القدمين. مبرد القدمين ال VIP: يزيل الجلد الميت والخشونة والتشققات من الكعبين والقدمين بسهولة."},
  {id: 11, nameEn: "Shampoo & Conditioner", nameAr: "شامبو وبلسم",              price: 450, image: "WhatsApp Image 2026-05-13 at 4.18.41 PM.jpeg",   descEn: "Hair collection from Derma Care — rich in collagen, protein, and nourishing oils, especially Argan Oil. Repairs damage, treats split ends, and smooths hair. Deep hydration. Safe for children aged 5+. Suitable for all hair types. Includes: Shampoo + Conditioner & Hair Mask.",         descAr: "مجموعة الشعر من Derma Care الجديدة غني بالكولاجين والبروتين والزيوت أهمها زيت الأرجان. شغل المنتجات ترمم وتعالج التقصف وتفرد. تعالج وترمم وتغذي الشعر بشكل علاجي ومكثّف للشعر التالف والمتقصف. مناسب لأطفال من سن 5 سنوات. مناسب لجميع أنواع الشعر. شامبو + بلسم وحمام كريم."}
];

// ── Admin credentials (change these if needed) ──────────────────────────────
var ADMIN_EMAIL    = "admin@dermacare.com";
var ADMIN_PASSWORD = "200.300.200";

// ── Storage helpers ──────────────────────────────────────────────────────────
function DC_getProducts() {
  try {
    var stored = localStorage.getItem("dc_products");
    if (stored) return JSON.parse(stored);
  } catch(e) {}
  // First visit — seed with defaults
  DC_saveProducts(DEFAULT_PRODUCTS);
  return DEFAULT_PRODUCTS.slice();
}

function DC_saveProducts(arr) {
  try { localStorage.setItem("dc_products", JSON.stringify(arr)); } catch(e) {}
}

function DC_getNextId() {
  var products = DC_getProducts();
  if (!products.length) return 1;
  return Math.max.apply(null, products.map(function(p){ return p.id; })) + 1;
}

// ── Admin session ────────────────────────────────────────────────────────────
function DC_isAdminLoggedIn() {
  return localStorage.getItem("dc_admin_logged_in") === "true";
}

function DC_adminLogin(email, password) {
  if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
    localStorage.setItem("dc_admin_logged_in", "true");
    return true;
  }
  return false;
}

function DC_adminLogout() {
  localStorage.removeItem("dc_admin_logged_in");
}
