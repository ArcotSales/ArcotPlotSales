// ==========================================================================
// 1. ADMIN FRIENDLY CONFIGURATION BLOCK
// Edit details below to update numbers, agent name, or property listings.
// ==========================================================================
const CONFIG = {
  // Primary Contact Settings (தொடர்பு விபரங்கள்)
  phone: "8838060843",       // Primary phone number (Do NOT add spaces or dashes, just the digits)
  whatsapp: "8838060843",    // WhatsApp mobile number (Do NOT add spaces or dashes, just the digits)
  countryCode: "91",         // Default country code (91 for India)
  agentName: "Jayaprakash",  // Contact Person Name (ஜெயப்பிரகாஷ்)
  
  // WhatsApp Template Messages
  generalInquiryMsg: "Hello, I am interested in buying property in Arcot/Ranipet. Please call me.",
  propertyInquiryMsg: "Hello Jayaprakash, I am interested in the property: ",
  
  // Property Category Definitions (பிரிவுகள்)
  categories: [
    { id: "all", titleEN: "All Properties", titleTA: "அனைத்தும்" },
    { id: "house-sites", titleEN: "House Sites", titleTA: "வீட்டு மனைகள்" },
    { id: "residential-plots", titleEN: "Residential Plots", titleTA: "குடியிருப்பு மனைகள்" },
    { id: "agricultural-lands", titleEN: "Agricultural Lands", titleTA: "விவசாய நிலங்கள்" },
    { id: "main-area", titleEN: "Arcot Main Town", titleTA: "நகரப் பகுதி" },
    { id: "ranipet-district", titleEN: "Ranipet District", titleTA: "ராணிப்பேட்டை மாவட்டம்" }
  ],

  // Property Listings Data (சொத்துக்களின் விபரங்கள்)
  // To replace photos later, copy your photos (e.g. site.jpg) to the same folder and write "site.jpg" in the 'image' field below.
  properties: [
    // Category 1: House Sites (வீட்டு மனைகள்)
    {
      id: 1,
      category: "house-sites",
      titleEN: "Prime House Site near Ranipet Bypass Road",
      titleTA: "ராணிப்பேட்டை பைபாஸ் சாலை அருகே பிரதான வீட்டு மனை",
      locationEN: "Ranipet Bypass, Arcot",
      locationTA: "ராணிப்பேட்டை பைபாஸ், ஆற்காடு",
      price: "₹8,50,000",
      typeEN: "House Site / Layout",
      typeTA: "வீட்டு மனை / லேஅவுட்",
      area: "1,200 Sq.Ft.",
      image: "" // E.g. "images/house-site1.jpg" (Leaves blank to display our premium custom CSS card template)
    },
    {
      id: 2,
      category: "house-sites",
      titleEN: "DTCP Approved Residential Villa Plot",
      titleTA: "DTCP அங்கீகரிக்கப்பட்ட குடியிருப்பு வில்லா பிளாட்",
      locationEN: "Cheyyar Road, Arcot",
      locationTA: "செய்யாறு சாலை, ஆற்காடு",
      price: "₹9,80,000",
      typeEN: "House Site",
      typeTA: "வீட்டு மனை",
      area: "1,500 Sq.Ft.",
      image: ""
    },

    // Category 2: Residential Plots (குடியிருப்பு மனைகள்)
    {
      id: 3,
      category: "residential-plots",
      titleEN: "Fully Gated Community Plot with Water Supply",
      titleTA: "பாதுகாப்பான குடியிருப்பு மனை - குடிநீர் வசதியுடன்",
      locationEN: "Thimiri Road, Arcot Bypass",
      locationTA: "திமிரி சாலை, ஆற்காடு பைபாஸ்",
      price: "₹7,20,000",
      typeEN: "Residential Plot",
      typeTA: "குடியிருப்பு மனை",
      area: "1,200 Sq.Ft.",
      image: ""
    },
    {
      id: 4,
      category: "residential-plots",
      titleEN: "Budget-Friendly Plot close to Schools & Colleges",
      titleTA: "பள்ளிகள் & கல்லூரிகள் அருகில் பட்ஜெட் குடியிருப்பு மனை",
      locationEN: "Vellore Main Road, Arcot",
      locationTA: "வேலூர் மெயின் ரோடு, ஆற்காடு",
      price: "₹6,50,000",
      typeEN: "Residential Plot",
      typeTA: "குடியிருப்பு மனை",
      area: "1,000 Sq.Ft.",
      image: ""
    },

    // Category 3: Agricultural Lands (விவசாய நிலங்கள்)
    {
      id: 5,
      category: "agricultural-lands",
      titleEN: "Lush Green Farmland with Copious Water Resource",
      titleTA: "அதிக தண்ணீர் வசதியுள்ள பசுமையான விவசாய நிலம்",
      locationEN: "Kalavai Road Rural Area, Ranipet",
      locationTA: "கலவை சாலை கிராமப்புறம், ராணிப்பேட்டை",
      price: "₹18,00,000",
      typeEN: "Agricultural Land / Farm",
      typeTA: "விவசாய நிலம் / பண்ணை",
      area: "1 Acre (43,560 Sq.Ft.)",
      image: ""
    },
    {
      id: 6,
      category: "agricultural-lands",
      titleEN: "Fertile Mango Garden / Agricultural Plot",
      titleTA: "வளமான மாந்தோப்பு / விவசாய நிலம்",
      locationEN: "Arcot Rural Outer",
      locationTA: "ஆற்காடு கிராமப்புற வெளிப்பகுதி",
      price: "₹14,50,000",
      typeEN: "Agricultural Land",
      typeTA: "விவசாய நிலம்",
      area: "0.5 Acre",
      image: ""
    },

    // Category 4: Arcot Main Area Properties (ஆற்காடு நகர் பகுதி)
    {
      id: 7,
      category: "main-area",
      titleEN: "Premium Commercial / Villa Plot in Arcot Town Center",
      titleTA: "ஆற்காடு நகர மையத்தில் பிரீமியம் வணிக / குடியிருப்பு மனை",
      locationEN: "Arcot Main Bazaar Road",
      locationTA: "ஆற்காடு மெயின் பஜார் சாலை",
      price: "₹24,00,000",
      typeEN: "Commercial / Residential Layout",
      typeTA: "வணிக / குடியிருப்பு மனை",
      area: "2,400 Sq.Ft.",
      image: ""
    },
    {
      id: 8,
      category: "main-area",
      titleEN: "House Site very close to Arcot New Bus Stand",
      titleTA: "ஆற்காடு புதிய பேருந்து நிலையம் மிக அருகில் உள்ள வீட்டு மனை",
      locationEN: "Bus Stand Road, Arcot",
      locationTA: "பேருந்து நிலைய சாலை, ஆற்காடு",
      price: "₹16,00,000",
      typeEN: "Premium House Site",
      typeTA: "பிரீமியம் வீட்டு மனை",
      area: "1,800 Sq.Ft.",
      image: ""
    },

    // Category 5: Ranipet District Properties (ராணிப்பேட்டை மாவட்டம்)
    {
      id: 9,
      category: "ranipet-district",
      titleEN: "Residential Land near Ranipet Collectorate Office",
      titleTA: "ராணிப்பேட்டை கலெக்டர் அலுவலகம் அருகில் குடியிருப்பு நிலம்",
      locationEN: "Ranipet Town",
      locationTA: "ராணிப்பேட்டை நகரம்",
      price: "₹15,00,000",
      typeEN: "Residential Plot",
      typeTA: "குடியிருப்பு மனை",
      area: "1,800 Sq.Ft.",
      image: ""
    },
    {
      id: 10,
      category: "ranipet-district",
      titleEN: "Commercial Space Land facing Vellore-Ranipet NH Road",
      titleTA: "வேலூர்-ராணிப்பேட்டை NH தேசிய நெடுஞ்சாலை முன்பக்க வணிக நிலம்",
      locationEN: "National Highway, Ranipet",
      locationTA: "தேசிய நெடுஞ்சாலை, ராணிப்பேட்டை",
      price: "₹35,00,000",
      typeEN: "Commercial Plot",
      typeTA: "வணிக மனை",
      area: "2,400 Sq.Ft.",
      image: ""
    }
  ]
};

// ==========================================================================
// 2. WEBSITE DYNAMIC LINK INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initContactLinks();
  renderTabs();
  renderProperties("all");
  initContactForm();
});

// Generate WhatsApp and Call URLs dynamically based on the configuration above.
function initContactLinks() {
  // Base numbers formatted
  const cleanPhone = CONFIG.phone.replace(/\D/g, "");
  const cleanWa = CONFIG.whatsapp.replace(/\D/g, "");
  const waPrefix = CONFIG.countryCode;
  
  const fullWaNumber = cleanWa.startsWith(waPrefix) ? cleanWa : (waPrefix + cleanWa);
  const telUrl = `tel:${cleanPhone}`;
  const waBaseUrl = `https://wa.me/${fullWaNumber}`;
  
  // Top Navigation Link
  const topPhoneLink = document.getElementById("top-phone-link");
  if (topPhoneLink) topPhoneLink.href = telUrl;
  const topPhoneTxt = document.getElementById("top-phone-txt");
  if (topPhoneTxt) topPhoneTxt.innerText = `+${CONFIG.countryCode} ${CONFIG.phone}`;

  // Hero Buttons
  const heroCall = document.getElementById("hero-call-btn");
  if (heroCall) heroCall.href = telUrl;
  const heroWa = document.getElementById("hero-wa-btn");
  if (heroWa) {
    heroWa.href = `${waBaseUrl}?text=${encodeURIComponent(CONFIG.generalInquiryMsg)}`;
  }

  // Contact Section Links
  const infoPhone = document.getElementById("info-phone-link");
  if (infoPhone) {
    infoPhone.href = telUrl;
    infoPhone.innerText = `+${CONFIG.countryCode} ${CONFIG.phone}`;
  }
  const infoWa = document.getElementById("info-wa-link");
  if (infoWa) {
    infoWa.href = `${waBaseUrl}?text=${encodeURIComponent(CONFIG.generalInquiryMsg)}`;
    infoWa.innerText = `+${CONFIG.countryCode} ${CONFIG.whatsapp}`;
  }
  const infoAgentName = document.getElementById("info-agent-name");
  if (infoAgentName) {
    infoAgentName.innerText = `${CONFIG.agentName} / ஜெயப்பிரகாஷ்`;
  }

  // Floating Call & WhatsApp Buttons
  const floatCall = document.getElementById("float-call-btn");
  if (floatCall) floatCall.href = telUrl;
  const floatWa = document.getElementById("float-wa-btn");
  if (floatWa) {
    floatWa.href = `${waBaseUrl}?text=${encodeURIComponent(CONFIG.generalInquiryMsg)}`;
  }
}

// ==========================================================================
// 3. CATEGORIES & PROPERTY CARDS DYNAMIC RENDERING
// ==========================================================================

// Render Category tabs buttons
function renderTabs() {
  const tabsNav = document.getElementById("category-tabs");
  if (!tabsNav) return;
  tabsNav.innerHTML = "";

  CONFIG.categories.forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.classList.add("tab-btn");
    if (index === 0) btn.classList.add("active");
    btn.dataset.category = cat.id;
    
    btn.innerHTML = `
      <span>${cat.titleEN}</span><br>
      <span style="font-size:0.75rem; font-weight:normal; opacity:0.8;">${cat.titleTA}</span>
    `;
    
    btn.addEventListener("click", (e) => {
      // Toggle Active class
      document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Re-render properties based on selection
      renderProperties(cat.id);
    });

    tabsNav.appendChild(btn);
  });
}

// Render property cards grid
function renderProperties(filterCategory) {
  const grid = document.getElementById("property-list");
  if (!grid) return;
  grid.innerHTML = "";

  // Filter properties
  const filtered = filterCategory === "all" 
    ? CONFIG.properties 
    : CONFIG.properties.filter(p => p.category === filterCategory);

  if (filtered.length === 0) {
    grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--text-muted);">No properties found in this category / இந்த பிரிவில் சொத்துக்கள் எதுவும் இல்லை.</div>`;
    return;
  }

  // Render cards
  filtered.forEach(prop => {
    const card = document.createElement("div");
    card.classList.add("property-card");

    // Format dynamic links for this specific card
    const cleanPhone = CONFIG.phone.replace(/\D/g, "");
    const cleanWa = CONFIG.whatsapp.replace(/\D/g, "");
    const waPrefix = CONFIG.countryCode;
    const fullWaNumber = cleanWa.startsWith(waPrefix) ? cleanWa : (waPrefix + cleanWa);
    const cardTelUrl = `tel:${cleanPhone}`;
    
    const cardWaMessage = `${CONFIG.propertyInquiryMsg}"${prop.titleEN}" (Location: ${prop.locationEN}, Price: ${prop.price}).`;
    const cardWaUrl = `https://wa.me/${fullWaNumber}?text=${encodeURIComponent(cardWaMessage)}`;

    // Check if property image is defined, otherwise show a clean modern CSS vector template
    const visualHeaderHTML = prop.image && prop.image.trim() !== "" 
      ? `<div class="card-visual-header" style="background: url('${prop.image}') no-repeat center center; background-size: cover; height: 180px;">
           <div class="card-badge">${prop.typeEN}</div>
           <div class="card-price">${prop.price}</div>
         </div>`
      : `<div class="card-visual-header">
           <div class="card-badge">${prop.typeEN}</div>
           <i class="fa-solid fa-house-chimney"></i>
           <span style="font-weight: 600; font-size: 0.95rem;">${prop.typeEN} / ${prop.typeTA}</span>
           <div class="placeholder-txt"><i class="fa-regular fa-image"></i> photo placeholder</div>
           <div class="card-price">${prop.price}</div>
         </div>`;

    card.innerHTML = `
      ${visualHeaderHTML}
      <div class="card-body">
        <h3 class="card-title">${prop.titleEN}</h3>
        <div class="card-title-ta">${prop.titleTA}</div>
        
        <div class="card-details">
          <div class="detail-item">
            <i class="fa-solid fa-location-dot"></i>
            <span><strong>Location:</strong> ${prop.locationEN} / ${prop.locationTA}</span>
          </div>
          <div class="detail-item">
            <i class="fa-solid fa-chart-area"></i>
            <span><strong>Area Size:</strong> ${prop.area}</span>
          </div>
        </div>
        
        <div class="card-actions">
          <a href="${cardTelUrl}" class="btn btn-call">
            <i class="fa-solid fa-phone"></i> Call
          </a>
          <a href="${cardWaUrl}" class="btn btn-whatsapp" target="_blank">
            <i class="fa-brands fa-whatsapp"></i> WhatsApp
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

// ==========================================================================
// 4. CONTACT FORM TO WHATSAPP REDIRECTION
// ==========================================================================
function initContactForm() {
  const form = document.getElementById("lead-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop default page reload

    const nameInput = document.getElementById("user-name");
    const mobileInput = document.getElementById("user-mobile");
    const interestInput = document.getElementById("property-interest");

    if (!nameInput || !mobileInput || !interestInput) return;

    const name = nameInput.value.trim();
    const mobile = mobileInput.value.trim();
    const interest = interestInput.value;

    // Build plain text WhatsApp lead message
    const textPayload = `Name: ${name}\nMobile Number: ${mobile}\nProperty Interest: ${interest}`;
    
    // Format destination WhatsApp URL
    const cleanWa = CONFIG.whatsapp.replace(/\D/g, "");
    const waPrefix = CONFIG.countryCode;
    const fullWaNumber = cleanWa.startsWith(waPrefix) ? cleanWa : (waPrefix + cleanWa);
    const submitWaUrl = `https://wa.me/${fullWaNumber}?text=${encodeURIComponent(textPayload)}`;

    // Open WhatsApp in a new tab
    window.open(submitWaUrl, '_blank');
    
    // Reset form
    form.reset();
  });
}
