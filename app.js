const state = {
  lang: "zh",
  filter: "all",
  products: [],
  galleryExpanded: false
};

const copy = {
  zh: {
    pageTitle: "上品綜合工業｜台灣國際水週 2026",
    eventName: "台灣國際水週 2026",
    brandName: "上品綜合工業",
    brandNameFooter: "上品綜合工業",
    navProducts: "展品",
    navBooth: "攤位",
    navBoothDesign: "攤位設計",
    navMedia: "資料",
    navContact: "預約",
    heroTitle: "上品綜合工業 TIWW 2026 展品導覽",
    heroCopy: "整合 TEFPASS® 膜材料、膜接觸器與薄膜蒸餾模組，提供氨氮回收、廢水處理及酸鹼廢液提濃再利用的設備與服務。",
    heroExplore: "探索展品",
    heroMeet: "預約洽談",
    factDate: "展期",
    factPlace: "地點",
    factPlaceValue: "南港展覽館1館4F / TaiNEX 1, 4F",
    factBooth: "攤位",
    companyEyebrow: "Company",
    companyTitle: "高純度膜材料、流體處理設備與資源回收整合夥伴",
    companyCopy: "上品綜合工業以氟素材料技術為基礎，從 TEFPASS® PTFE 膜材、疏水與親水複合膜，延伸至膜接觸器、薄膜蒸餾模組及系統設備整合，提供氨氮資源化、廢水處理、酸液提濃與酸鹼廢液回收再利用的一站式解決方案。",
    metricMaterialsName: "TEFPASS® Membrane",
    metricMaterials: "膜材料與模組",
    metricProcessName: "Resource Recovery",
    metricProcess: "氨氮與酸鹼回收",
    metricBrandName: "Integrated Systems",
    metricBrand: "設備與服務整合",
    productsEyebrow: "Exhibits",
    productsTitle: "互動展品探索",
    productsIntro: "依現場展示主題快速篩選，點開卡片可查看應用、亮點與規格摘要。",
    systemsEyebrow: "Treatment Systems",
    systemsTitle: "廢水處理與資源回收系統",
    systemsIntro: "聚焦氨氮資源化、脫氨回收、薄膜蒸餾，以及酸鹼廢液提濃與再利用的機台及整合服務。",
    ammoniaUnitTitle: "氨氮資源化與脫氨回收系統",
    ammoniaUnitEn: "Ammonia Nitrogen Recovery & Ammonia Removal Systems",
    ammoniaPrincipleTitle: "氨氮資源化回收",
    ammoniaPrincipleEn: "Ammonia Nitrogen Recovery",
    ammoniaPrincipleCopy: "將進料液體內 NH4+ 離子轉換為氣態分子 NH3，藉由微孔疏水性薄膜（PTFE）兩側的氨蒸氣壓差，誘使 NH3 氣態分子由廢水側透膜傳遞至吸收側；依吸收液的不同，可使氨氮以不同產物形式進行資源化回收。",
    dcmdTitle: "直接接觸薄膜蒸餾氨氮系統",
    dcmdEn: "DCMD Ammonia Removal System",
    dcmdCopy: "本設備可將工業廢水中的氨氮脫除，並經硫酸吸收後產製硫酸銨，可降低氨氮排放量且具回收循環再利用效益，降低廢水處理成本並提升資源利用效率。",
    vmdTitle: "真空薄膜蒸餾氨氮脫除系統",
    vmdEn: "VMD Ammonia Recovery System",
    vmdCopy: "利用真空薄膜蒸餾（Vacuum Membrane Distillation, VMD）技術，將廢水中的氨氮以氣態形式選擇性分離，再經吸收塔以水或鹽酸吸收，回收製備氨水或氯化銨產物。系統具備高氨氮去除效率、低溫節能、高鹽廢水適用及資源循環利用等優勢，可有效降低廢水處理成本並提升資源回收效益。",
    distillationUnitTitle: "薄膜蒸餾與酸鹼處理回收設備",
    distillationUnitEn: "Membrane Distillation & Acid/Base Treatment and Reclamation Unit",
    distillationPrincipleTitle: "薄膜蒸餾原理",
    distillationPrincipleEn: "Principle of Membrane Distillation",
    distillationPrincipleCopy: "薄膜蒸餾是藉由溫度差產生蒸氣壓差，並以此作為質傳驅動力的膜分離技術。液體不會穿透疏水性薄膜，僅氣體分子可通過；進料中的鹽類、重金屬及大部分污染物可被截留，達到分離與純化目的。可應用於產業低階廢熱源回收產水、廢液回收、酸液提濃／純化及海水直接電解產氫等傳統膜分離較難處理的領域。",
    acidBaseTitle: "酸鹼處理回收設備",
    acidBaseEn: "Acid/Base Treatment and Reclamation Unit",
    acidBaseCopy: "本設備專為處理及回收工業製程產生的酸性或鹼性廢液而設計，採用薄膜蒸餾技術與高效分離模組，可依不同濃度與性質精準分離及濃縮，回收高純度酸或鹼溶液並降低廢液排放。整體設計具備模組化、節能及高自動化特性，操作簡便且維護成本低；濃縮液可回用於製程，滲透液可符合排放標準或進一步再利用。大型模組可依實際產能需求彈性擴充。",
    equipmentPhotoPending: "設備照片待補",
    coreProductsEyebrow: "Core Products",
    coreProductsTitle: "公司主力產品",
    coreProductsIntro: "以下產品未於本次現場展出，仍為上品綜合工業重要產品線，可供貴賓、法人與媒體快速參考。",
    coreMaterialTitle: "氟素樹脂材料 / Fluoropolymer Material",
    coreLiningTitle: "氟素樹脂內襯 / Fluoropolymer Lining",
    notOnDisplay: "非本次現場展出",
    boothDesignEyebrow: "Booth Design",
    boothDesignTitle: "上品攤位形象設計",
    boothDesignPending: "攤位設計待更新",
    boothDesignCaption: "台灣國際水週 2026｜上品綜合工業｜Booth L0917",
    boothEyebrow: "Booth Experience",
    boothTitle: "L1116 攤位亮點",
    mediaEyebrow: "Media Kit",
    mediaTitle: "法人與媒體快速資料",
    mediaIntro: "提供公司概況、展品重點與攤位資訊，協助法人與媒體快速掌握上品本次參展內容。",
    resourceProfileTitle: "公司簡介",
    resourceProfileCopy: "上品在氟素材料加工、半導體濕製程零組件與客製化模組上的核心能力摘要。",
    resourceProductsTitle: "展品摘要",
    resourceProductsCopy: "板模組、管模組、膜接觸器、薄膜蒸餾模組，以及疏水與親水膜材產品一覽。",
    resourceBoothTitle: "攤位資訊",
    resourceBoothCopy: "台灣國際水週 2026｜2026/10/14–10/16｜南港展覽館1館4F｜攤位 L0917。",
    sessionsEyebrow: "Program",
    sessionsTitle: "現場導覽及交流場次",
    sessionsIntro: "展會期間規劃法人活動與現場參訪交流，歡迎依場次資訊安排拜訪。",
    sessionDateLabel: "時間",
    sessionPlaceLabel: "地點",
    sessionTypeLabel: "活動",
    highlightsEyebrow: "Highlights",
    highlightsTitle: "活動花絮",
    highlightsIntro: "現場導覽、交流活動與攤位互動照片，供貴賓與媒體快速瀏覽。",
    highlightsMore: "更多",
    highlightsLess: "收合",
    highlightsPlaceholder: "照片待補",
    contactEyebrow: "Book a Meeting",
    contactTitle: "預約現場洽談或索取資料",
    contactCopy: "請留下基本資訊與關注產品，展會期間將由上品團隊安排專人接待或後續聯繫。",
    contactEmailLabel: "聯絡信箱",
    contactLinkedIn: "LinkedIn 社群",
    contactWebsite: "前往公司網站",
    backTop: "回到頁首",
    all: "全部",
    featured: "主打展品",
    vessel: "槽體 / Vessel",
    thermal: "熱交換",
    components: "零組件",
    materials: "板材內襯",
    rd: "研發材料",
    boothHighlights: [
      ["兩層樓展場", "二樓規劃 VIP 會議空間，可支援約 10 人簡報與洽談。"],
      ["現場接待", "一樓設接待台、高腳圓桌與半開放交流區，方便快速導覽與名片交換。"],
      ["產品展示", "至少 3 組展示台面，搭配 Fitting 樣品櫃、PFA 槽與研發材料展示。"],
      ["法人簡報", "80 吋以上大型螢幕支援公司與核心產品簡報。"],
      ["品牌露出", "上品 LOGO 與 TEFPASS 品牌於攤位主視覺中清楚呈現。"]
    ]
  },
  en: {
    pageTitle: "Allied Supreme Corp. | TIWW 2026",
    eventName: "TIWW 2026",
    brandName: "Allied Supreme Corp.",
    brandNameFooter: "Allied Supreme Corp.",
    navProducts: "Exhibits",
    navBooth: "Booth",
    navBoothDesign: "Booth Design",
    navMedia: "Media",
    navContact: "Book",
    heroTitle: "Allied Supreme Corp. at TIWW 2026",
    heroCopy: "Integrated TEFPASS® membranes, membrane contactors, and membrane distillation modules for ammonia recovery, wastewater treatment, and acid/base waste concentration and reuse.",
    heroExplore: "Explore Exhibits",
    heroMeet: "Book a Meeting",
    factDate: "Date",
    factPlace: "Venue",
    factPlaceValue: "TaiNEX 1, 4F / Nangang Exhibition Center Hall 1, 4F",
    factBooth: "Booth",
    companyEyebrow: "Company",
    companyTitle: "An integrated partner for high-purity membranes, fluid-treatment equipment, and resource recovery",
    companyCopy: "Building on fluoropolymer expertise, Allied Supreme connects TEFPASS® PTFE membranes and hydrophobic and hydrophilic composites with membrane contactors, membrane distillation modules, and integrated treatment systems. Our solutions cover ammonia recovery, wastewater treatment, acid concentration, and acid/base waste reclamation and reuse.",
    metricMaterialsName: "TEFPASS® Membrane",
    metricMaterials: "Membranes and modules",
    metricProcessName: "Resource Recovery",
    metricProcess: "Ammonia and acid/base recovery",
    metricBrandName: "Integrated Systems",
    metricBrand: "Equipment and service integration",
    productsEyebrow: "Exhibits",
    productsTitle: "Interactive Product Explorer",
    productsIntro: "Filter by exhibit theme and open each card to review applications, highlights, and specification summaries.",
    systemsEyebrow: "Treatment Systems",
    systemsTitle: "Wastewater Treatment & Resource Recovery Systems",
    systemsIntro: "Equipment and integrated services for ammonia recovery and removal, membrane distillation, and acid/base waste concentration and reuse.",
    ammoniaUnitTitle: "Ammonia Nitrogen Recovery & Ammonia Removal Systems",
    ammoniaUnitEn: "Ammonia Nitrogen Recovery & Ammonia Removal Systems",
    ammoniaPrincipleTitle: "Ammonia Nitrogen Recovery",
    ammoniaPrincipleEn: "Ammonia Nitrogen Recovery",
    ammoniaPrincipleCopy: "NH4+ ions in the feed are converted into gaseous NH3. The ammonia vapor-pressure difference across a microporous hydrophobic PTFE membrane drives NH3 from the wastewater side through the membrane to the absorption side. Different absorbents enable recovery of ammonia nitrogen in different product forms.",
    dcmdTitle: "DCMD Ammonia Removal System",
    dcmdEn: "DCMD Ammonia Removal System",
    dcmdCopy: "This system removes ammonia nitrogen from industrial wastewater and uses sulfuric-acid absorption to produce ammonium sulfate. It reduces ammonia discharge, enables circular recovery and reuse, lowers wastewater-treatment cost, and improves resource efficiency.",
    vmdTitle: "VMD Ammonia Recovery System",
    vmdEn: "VMD Ammonia Recovery System",
    vmdCopy: "Vacuum Membrane Distillation selectively separates ammonia nitrogen from wastewater in gaseous form. Water or hydrochloric acid in an absorption tower then recovers it as ammonia water or ammonium chloride. The system provides high removal efficiency, low-temperature energy savings, compatibility with high-salinity wastewater, and improved resource recovery.",
    distillationUnitTitle: "Membrane Distillation & Acid/Base Treatment and Reclamation Unit",
    distillationUnitEn: "Membrane Distillation & Acid/Base Treatment and Reclamation Unit",
    distillationPrincipleTitle: "Principle of Membrane Distillation",
    distillationPrincipleEn: "Principle of Membrane Distillation",
    distillationPrincipleCopy: "Membrane distillation uses the vapor-pressure difference created by a temperature gradient as the mass-transfer driving force. Liquid cannot penetrate the hydrophobic membrane; only vapor molecules pass through, while salts, heavy metals, and most contaminants are retained. Applications include water production from low-grade industrial waste heat, waste-liquid recovery, acid concentration and purification, and direct seawater electrolysis for hydrogen production.",
    acidBaseTitle: "Acid/Base Treatment and Reclamation Unit",
    acidBaseEn: "Acid/Base Treatment and Reclamation Unit",
    acidBaseCopy: "Designed to treat and recover acidic or alkaline process waste, this unit combines membrane distillation with high-efficiency separation modules for precise separation and concentration across different feed conditions. It recovers high-purity acid or alkali, reduces discharge at the source, and features modular, energy-efficient, highly automated operation. Concentrate can return to production, while permeate can meet discharge requirements or be reused. Large systems can be expanded to match capacity needs.",
    equipmentPhotoPending: "Equipment photo pending",
    coreProductsEyebrow: "Core Products",
    coreProductsTitle: "Core Products",
    coreProductsIntro: "The following products are not displayed on site this year, but remain key product lines of Allied Supreme Corp.",
    coreMaterialTitle: "Fluoropolymer Material",
    coreLiningTitle: "Fluoropolymer Lining",
    notOnDisplay: "Not displayed on site",
    boothDesignEyebrow: "Booth Design",
    boothDesignTitle: "ASC Booth Identity Design",
    boothDesignPending: "Booth design pending",
    boothDesignCaption: "TIWW 2026 | Allied Supreme Corp. | Booth L0917",
    boothEyebrow: "Booth Experience",
    boothTitle: "Booth L1116 Highlights",
    mediaEyebrow: "Media Kit",
    mediaTitle: "Quick facts for investors and media",
    mediaIntro: "Company profile, exhibit highlights, and booth information for investors and media to quickly understand ASC's SEMICON Taiwan 2026 presence.",
    resourceProfileTitle: "Company Profile",
    resourceProfileCopy: "A concise summary of ASC capabilities in fluoropolymer processing, semiconductor wet-process components, and custom modules.",
    resourceProductsTitle: "Exhibit Summary",
    resourceProductsCopy: "Overview of plate and tube modules, membrane contactors, membrane distillation modules, and hydrophobic and hydrophilic membrane products.",
    resourceBoothTitle: "Booth Info",
    resourceBoothCopy: "TIWW 2026 | October 14–16, 2026 | TaiNEX 1, 4F | Booth L0917.",
    sessionsEyebrow: "Program",
    sessionsTitle: "On-site Tours and Meetings",
    sessionsIntro: "Investor programs and booth visit sessions are planned during the show for scheduled discussions and product tours.",
    sessionDateLabel: "Time",
    sessionPlaceLabel: "Venue",
    sessionTypeLabel: "Program",
    highlightsEyebrow: "Highlights",
    highlightsTitle: "Event Highlights",
    highlightsIntro: "Photos from guided tours, meetings, and booth interactions for quick viewing by guests and media.",
    highlightsMore: "More",
    highlightsLess: "Show Less",
    highlightsPlaceholder: "Photo pending",
    contactEyebrow: "Book a Meeting",
    contactTitle: "Schedule an on-site discussion or request materials",
    contactCopy: "Share your contact details and product interests so the ASC team can arrange a host during the show or follow up afterward.",
    contactEmailLabel: "Contact Email",
    contactLinkedIn: "LinkedIn",
    contactWebsite: "Company Website",
    backTop: "Back to Top",
    all: "All",
    featured: "Featured",
    vessel: "Tank / Vessel",
    thermal: "Heat Exchange",
    components: "Components",
    materials: "Lining Sheets",
    rd: "R&D Materials",
    boothHighlights: [
      ["Two-level booth", "The second floor is planned as a VIP meeting space for briefings and discussions with around 10 guests."],
      ["On-site reception", "The first floor includes a reception counter, high tables, and an open discussion area for fast booth tours."],
      ["Product display", "At least three display surfaces are planned for fittings, PFA tanks, and R&D material exhibits."],
      ["Investor briefings", "An 80-inch or larger display supports company and product presentations."],
      ["Brand visibility", "ASC and TEFPASS branding are clearly presented in the booth visual system."]
    ]
  }
};

const categories = ["all", "featured", "vessel", "thermal", "components", "materials", "rd"];

document.addEventListener("DOMContentLoaded", () => {
  bindLanguageSwitch();
  if (document.getElementById("productGrid")) {
    loadProducts();
  }
  renderCoreProducts();
  renderStaticCopy();
  bindGalleryMoreButton();
});

async function loadProducts() {
  try {
    const response = await fetch(`data/products.json?v=${Date.now()}`, { cache: "no-store" });
    state.products = await response.json();
  } catch (error) {
    state.products = fallbackProducts;
  }

  renderFilters();
  renderProducts();
}

function bindLanguageSwitch() {
  document.querySelectorAll(".lang-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.lang = button.dataset.lang;
      document.documentElement.lang = state.lang === "zh" ? "zh-Hant" : "en";
      document.querySelectorAll(".lang-button").forEach((item) => {
        item.classList.toggle("is-active", item === button);
      });
      renderStaticCopy();
      if (document.getElementById("productGrid")) {
        renderFilters();
        renderProducts();
      }
      renderCoreProducts();
      renderEventGallery();
    });
  });
}

function renderStaticCopy() {
  document.title = copy[state.lang].pageTitle;

  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = copy[state.lang][key] || node.textContent;
  });

  const highlights = document.getElementById("boothHighlights");
  if (highlights) {
    highlights.innerHTML = copy[state.lang].boothHighlights.map(([title, body], index) => `
      <article class="timeline-item">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <div>
          <h3>${title}</h3>
          <p>${body}</p>
        </div>
      </article>
    `).join("");
  }

  renderSessions();
  renderEventGallery();
}

function renderSessions() {
  const sessionList = document.getElementById("sessionList");
  if (!sessionList) return;

  sessionList.innerHTML = onsiteSessions.map((session, index) => `
    <article class="session-card">
      <span>${String(index + 1).padStart(2, "0")}</span>
      <div>
        <h3>${session.title[state.lang]}</h3>
        <dl>
          <div>
            <dt>${copy[state.lang].sessionDateLabel}</dt>
            <dd>${session.time[state.lang]}</dd>
          </div>
          <div>
            <dt>${copy[state.lang].sessionPlaceLabel}</dt>
            <dd>${session.place[state.lang]}</dd>
          </div>
          <div>
            <dt>${copy[state.lang].sessionTypeLabel}</dt>
            <dd>${session.type[state.lang]}</dd>
          </div>
        </dl>
      </div>
    </article>
  `).join("");
}

function bindGalleryMoreButton() {
  const button = document.getElementById("galleryMoreButton");
  if (!button) return;

  button.addEventListener("click", () => {
    state.galleryExpanded = !state.galleryExpanded;
    renderEventGallery();
  });
}

function renderEventGallery() {
  const gallery = document.getElementById("highlightGallery");
  const button = document.getElementById("galleryMoreButton");
  if (!gallery) return;

  const visibleItems = state.galleryExpanded ? eventHighlights : eventHighlights.slice(0, 3);
  gallery.innerHTML = visibleItems.map((item, index) => {
    const title = item.title[state.lang];
    const media = item.image
      ? `<img src="${item.image}" alt="${title}">`
      : `<div class="highlight-placeholder"><strong>ASC</strong><span>${copy[state.lang].highlightsPlaceholder}</span></div>`;

    return `
      <article class="highlight-card">
        <div class="highlight-media">
          ${media}
        </div>
        <p>${String(index + 1).padStart(2, "0")} / ${title}</p>
      </article>
    `;
  }).join("");

  if (button) {
    button.textContent = state.galleryExpanded ? copy[state.lang].highlightsLess : copy[state.lang].highlightsMore;
    button.hidden = eventHighlights.length <= 3;
  }
}

function renderFilters() {
  const filterBar = document.getElementById("filterBar");
  if (!filterBar) return;
  filterBar.innerHTML = categories.map((category) => `
    <button class="filter-button ${state.filter === category ? "is-active" : ""}" type="button" data-filter="${category}">
      ${copy[state.lang][category]}
    </button>
  `).join("");

  filterBar.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter;
      renderFilters();
      renderProducts();
    });
  });
}

function renderProducts() {
  const productGrid = document.getElementById("productGrid");
  const products = state.products.filter((product) => {
    if (state.filter === "all") return true;
    if (state.filter === "featured") return product.featured;
    return product.category === state.filter;
  });

  productGrid.innerHTML = products.map((product) => {
    const title = product.name[state.lang];
    const summary = product.summary[state.lang];
    const imageList = Array.isArray(product.images) && product.images.length ? product.images : [product.image];
    const hasImages = imageList.some(Boolean);
    const isCarousel = hasImages && imageList.length > 1;
    const mediaClass = isCarousel ? "product-media media-carousel" : "product-media";
    const mediaImages = hasImages
      ? imageList.filter(Boolean).map((src, index) => `<img src="${src}" alt="${title}${isCarousel ? ` ${index + 1}` : ""}">`).join("")
      : `<div class="product-placeholder"><strong>ASC</strong><span>${copy[state.lang].highlightsPlaceholder}</span></div>`;
    return `
      <article class="product-card">
        <div class="${mediaClass}">
          ${isCarousel ? `
            <button class="media-nav prev" type="button" aria-label="Previous image">‹</button>
            <div class="media-track">${mediaImages}</div>
            <button class="media-nav next" type="button" aria-label="Next image">›</button>
            <div class="media-dots" aria-hidden="true">
              ${imageList.map((_, index) => `<span class="${index === 0 ? "is-active" : ""}"></span>`).join("")}
            </div>
          ` : mediaImages}
          ${product.featured ? `<span>${copy[state.lang].featured}</span>` : ""}
        </div>
        <div class="product-body">
          <p class="category-label">${copy[state.lang][product.category]}</p>
          <h3>${title}</h3>
          <p>${summary}</p>
        </div>
      </article>
    `;
  }).join("");

  productGrid.querySelectorAll(".media-carousel").forEach(bindMediaCarousel);
}

function renderCoreProducts() {
  const coreProductsList = document.getElementById("coreProductsList");
  if (!coreProductsList) return;

  coreProductsList.innerHTML = coreProductGroups.map((group) => `
    <section class="core-category" aria-label="${group.title[state.lang]}">
      <div class="core-category-heading">
        <h3>${group.title[state.lang]}</h3>
      </div>
      <div class="product-grid">
        ${group.items.map((product) => renderCoreProductCard(product, group.title[state.lang])).join("")}
      </div>
    </section>
  `).join("");

  coreProductsList.querySelectorAll(".media-carousel").forEach(bindMediaCarousel);
}

function renderCoreProductCard(product, categoryTitle) {
  const title = product.name[state.lang];
  const summary = product.summary[state.lang];
  const imageList = Array.isArray(product.images) ? product.images.filter(Boolean) : [];
  const hasImages = imageList.length > 0;
  const isCarousel = imageList.length > 1;
  const mediaClass = [
    "product-media",
    isCarousel ? "media-carousel" : "",
    hasImages ? "" : "is-placeholder"
  ].filter(Boolean).join(" ");
  const mediaContent = hasImages
    ? isCarousel
      ? `
        <button class="media-nav prev" type="button" aria-label="Previous image">‹</button>
        <div class="media-track">${imageList.map((src, index) => `<img src="${src}" alt="${title} ${index + 1}">`).join("")}</div>
        <button class="media-nav next" type="button" aria-label="Next image">›</button>
        <div class="media-dots" aria-hidden="true">
          ${imageList.map((_, index) => `<span class="${index === 0 ? "is-active" : ""}"></span>`).join("")}
        </div>
      `
      : `<img src="${imageList[0]}" alt="${title}">`
    : `<div class="product-placeholder"><strong>ASC</strong><span>${copy[state.lang].notOnDisplay}</span></div>`;

  return `
    <article class="product-card core-product-card">
      <div class="${mediaClass}">
        ${mediaContent}
      </div>
      <div class="product-body">
        <p class="category-label">${categoryTitle}</p>
        <h3>${title}</h3>
        <p>${summary}</p>
      </div>
    </article>
  `;
}

function bindMediaCarousel(carousel) {
  const track = carousel.querySelector(".media-track");
  const images = [...carousel.querySelectorAll(".media-track img")];
  const dots = [...carousel.querySelectorAll(".media-dots span")];
  let index = 0;

  const update = (nextIndex) => {
    index = (nextIndex + images.length) % images.length;
    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
    dots.forEach((dot, dotIndex) => dot.classList.toggle("is-active", dotIndex === index));
  };

  carousel.querySelector(".prev").addEventListener("click", () => update(index - 1));
  carousel.querySelector(".next").addEventListener("click", () => update(index + 1));
}

const onsiteSessions = [
  {
    title: {
      zh: "富邦 TWSE & Fubon SEMICON Taiwan Corporate Day",
      en: "TWSE & Fubon SEMICON Taiwan Corporate Day"
    },
    time: {
      zh: "2026/09/03 (四) 11:20-11:50",
      en: "2026/09/03 (Thu.) 11:20-11:50"
    },
    place: {
      zh: "南港展覽館一館5樓506會議室",
      en: "TaiNEX 1, 5F, Room 506"
    },
    type: {
      zh: "法人交流場次",
      en: "Investor meeting session"
    }
  },
  {
    title: {
      zh: "台新證券半導體展參訪",
      en: "Taishin Securities SEMICON Taiwan Booth Visit"
    },
    time: {
      zh: "2026/09/03 (四) 14:00-14:30",
      en: "2026/09/03 (Thu.) 14:00-14:30"
    },
    place: {
      zh: "SEMICON Taiwan 2026 現場，上品綜合工業 Booth L1116",
      en: "SEMICON Taiwan 2026, Allied Supreme Corp. Booth L1116"
    },
    type: {
      zh: "台新證券 20-30 位，產品導覽及現場交流",
      en: "Product tour and on-site discussion for 20-30 Taishin Securities visitors"
    }
  }
];

const fallbackMembraneProducts = [
  {
    id: "tefpass-membrane-module", category: "rd", featured: false, image: "assets/products/tefpass-membrane-module-6inch.jpg",
    images: ["assets/products/tefpass-membrane-module-6inch.jpg", "assets/products/tefpass-membrane-module-series.png"],
    name: { zh: "TEFPASS® Membrane Module 膜接觸器", en: "TEFPASS® Membrane Module" },
    summary: {
      zh: "TEFPASS® Membrane Module 膜接觸器是使用上品獨特延伸技術所生產的一系列超高純度 Teflon 流體處理裝置，具備出色的耐化學性與耐熱性，並可在廢水處理、酸液提濃等應用中提供高流體通過量。其高接合性 Teflon 模塊可使用高達 98°C 的熱水消毒，以消除細菌生長並防止結垢；回收再生技術適合所有需要高處理量與高潔淨水平的應用。",
      en: "TEFPASS® Membrane Module is a series of ultra-high-purity Teflon fluid-processing devices produced with Allied Supreme's proprietary stretching technology. It offers excellent chemical and heat resistance with high fluid throughput for wastewater treatment and acid concentration. Its highly integrated Teflon module supports hot-water sanitization up to 98°C to inhibit bacterial growth and prevent scaling, making it ideal for high-throughput, high-cleanliness applications."
    },
    highlights: { zh: ["超高純度 Teflon 流體處理裝置", "最高 98°C 熱水消毒"], en: ["Ultra-high-purity Teflon fluid processing", "Hot-water sanitization up to 98°C"] },
    specs: { zh: "產品規格待補。", en: "Product specifications pending." },
    application: { zh: "廢水處理、酸液提濃、流體回收與再生。", en: "Wastewater treatment, acid concentration, and fluid recovery and regeneration." }
  },
  {
    id: "tefpass-replaceable-membrane-distillation-module", category: "rd", featured: false, image: "assets/products/tefpass-membrane-distillation-module.jpg",
    name: { zh: "TEFPASS® Membrane 薄膜蒸餾模組", en: "TEFPASS® Membrane Replaceable Membrane Distillation Module" },
    summary: { zh: "TEFPASS® Replaceable Membrane Distillation Module 是上品設計研發的一系列薄膜蒸餾模組，使用上品生產的 TEFPASS® Membrane 作為交換膜，液體流通路徑皆採耐酸鹼材質，具備簡易組裝、耐化學性、耐熱性及高通量等特性。堆疊式結構可實現模組快速組裝及更換，大幅降低維修時間與成本。", en: "TEFPASS® Replaceable Membrane Distillation Module uses TEFPASS® Membrane as its exchange medium. Acid- and alkali-resistant flow paths, easy assembly, chemical and heat resistance, high throughput, and a stackable structure enable rapid replacement with lower maintenance time and cost." },
    highlights: { zh: ["全耐酸鹼流體路徑", "堆疊式快速組裝與更換"], en: ["Acid- and alkali-resistant flow path", "Stackable rapid assembly and replacement"] },
    specs: { zh: "產品規格待補。", en: "Product specifications pending." },
    application: { zh: "薄膜蒸餾、耐化學流體處理與高通量製程。", en: "Membrane distillation and high-throughput fluid processing." }
  },
  {
    id: "tefpass-hydrophobic-membrane", category: "rd", featured: false, image: "assets/products/tefpass-hydrophobic-membrane.jpg",
    name: { zh: "TEFPASS® Hydrophobic Membrane 疏水純膜", en: "TEFPASS® Hydrophobic Membrane" },
    summary: { zh: "採用獨特延伸技術製程，生產高純度 PTFE（聚四氟乙烯）微孔膜，具備優異的耐化學性、耐熱性及疏水特性。特殊微孔結構可有效截留微小顆粒，同時維持高流體通量，適用於對高潔淨度、耐化學性及過濾效率具有高要求的應用環境。", en: "A high-purity PTFE microporous membrane produced using a proprietary stretching process, offering excellent chemical resistance, heat resistance, hydrophobicity, fine-particle retention, and high fluid throughput." },
    highlights: { zh: ["高純度 PTFE 微孔膜", "微粒截留與高流體通量"], en: ["High-purity PTFE microporous membrane", "Fine-particle retention with high throughput"] },
    specs: { zh: "產品規格待補。", en: "Product specifications pending." },
    application: { zh: "高潔淨過濾、耐化學製程與精密流體處理。", en: "High-cleanliness filtration and precision fluid handling." }
  },
  {
    id: "tefpass-hydrophobic-composite-membrane", category: "rd", featured: false, image: "assets/products/tefpass-hydrophobic-composite-membrane.jpg",
    name: { zh: "TEFPASS® Hydrophobic Membrane 疏水複合膜", en: "TEFPASS® Hydrophobic Composite Membrane" },
    summary: { zh: "PTFE 疏水複合膜採用高性能 PTFE 微孔膜與支撐材料複合製成，兼具優異的耐化學性、耐熱性及高度疏水特性。特殊微孔結構可有效阻隔液態水及微小顆粒，同時維持良好的氣體通透性與高流體通量，適用於各種高潔淨度及嚴苛製程環境。", en: "A high-performance PTFE microporous membrane composite offering chemical and heat resistance, strong hydrophobicity, liquid-water and fine-particle blocking, good gas permeability, and high fluid throughput." },
    highlights: { zh: ["阻隔液態水與微小顆粒", "良好氣體通透性與高通量"], en: ["Blocks liquid water and fine particles", "Good gas permeability and high throughput"] },
    specs: { zh: "產品規格待補。", en: "Product specifications pending." },
    application: { zh: "氣液分離、高潔淨過濾及嚴苛製程環境。", en: "Gas-liquid separation and high-cleanliness filtration." }
  },
  {
    id: "tefpass-hydrophilic-composite-membrane", category: "rd", featured: false, image: "assets/products/tefpass-hydrophilic-composite-membrane.jpg",
    name: { zh: "TEFPASS® Hydrophilic Composite Membrane 親水複合膜", en: "TEFPASS® Hydrophilic Composite Membrane" },
    summary: { zh: "PTFE 親水複合膜採用高性能 PTFE 微孔膜與特殊親水材料複合製成，兼具 PTFE 優異的耐化學性與耐熱性。經特殊親水化處理後，膜材可有效提升水性液體的潤濕與通過能力，同時維持良好的微粒截留效率與流體通量，適用於各種高潔淨度及嚴苛製程環境。", en: "A high-performance PTFE microporous membrane combined with a hydrophilic material to improve wetting and aqueous-liquid transfer while retaining chemical and heat resistance, particle-retention efficiency, and strong fluid throughput." },
    highlights: { zh: ["提升水性液體潤濕與通過能力", "兼具微粒截留效率與流體通量"], en: ["Improved aqueous-liquid wetting and transfer", "Particle retention with strong throughput"] },
    specs: { zh: "產品規格待補。", en: "Product specifications pending." },
    application: { zh: "水性液體過濾、高潔淨流體處理及嚴苛製程環境。", en: "Aqueous-liquid filtration and high-cleanliness fluid handling." }
  }
];

const eventHighlights = Array.from({ length: 12 }, (_, index) => ({
  image: "",
  title: {
    zh: `活動花絮 ${String(index + 1).padStart(2, "0")}`,
    en: `Event Highlight ${String(index + 1).padStart(2, "0")}`
  }
}));

const coreProductGroups = [
  {
    id: "fluoropolymer-material",
    title: {
      zh: "氟素樹脂材料 / Fluoropolymer Material",
      en: "Fluoropolymer Material"
    },
    items: [
      {
        id: "core-lining-sheet",
        images: ["assets/products/core-fluoropolymer-lining-sheet.webp"],
        name: {
          zh: "內襯板材與素板",
          en: "Lining sheet"
        },
        summary: {
          zh: "上品公司提供的新式氟素樹脂(Teflon)內襯板材具有最高級的純度保證及良好的抗臭氧性，且有更優良的耐滲透性、表面平滑性，以及更優越的機械強度與防應力龜裂性能，能為客戶提供有效的解決方案。",
          en: "Allied Supreme Corp. provide the most advanced of fluoropolymer (Teflon) sheet lining material. The superlative purity is guaranteed, and with the best permeation resistance, excellent Ozone resistance, smoother surface, and increased mechanical reliability also more superior of the stress crack resistance. Allied Supreme Corp. can provide customer with effective solutions."
        }
      },
      {
        id: "core-pipe-liner",
        images: ["assets/products/core-fluoropolymer-pipe-liner.webp"],
        name: {
          zh: "內襯直管用管材",
          en: "Pipe Liner"
        },
        summary: {
          zh: "上品公司可提供較長尺寸的Teflon內襯管材，以降低管線組裝時的管接頭成本。較少的法蘭接頭在相同長度管線既能減少洩漏機會，又能減少管線重量、減少支架成本，對於內襯管線製作時更能減少材料翻邊加工與管料損失。",
          en: "Allied Supreme Corp. provide longer pipe liner to reduce the cost of fitting joints when piping is assembled. At the same length with fewer connected flanges, it will be less possibility of leakage and also reduce the weight of the pipeline to save the cost of the support, as well as can reduce the material processing loss when fabricating lining pipe."
        }
      },
      {
        id: "core-pfa-thick-sheet-rod",
        images: [
          "assets/products/core-fluoropolymer-pfa-thick-sheet.webp",
          "assets/products/core-fluoropolymer-pfa-rod.webp"
        ],
        name: {
          zh: "PFA厚板與圓棒",
          en: "PFA Thick Sheet and Rod"
        },
        summary: {
          zh: "PFA的厚板與圓棒具有高純度與較平滑的表面，優良的耐化學性與耐臭氧性，容易焊接，亦可進一步機械加工成為所需要的PFA加工品。耐熱溫度在-240℃~260℃。",
          en: "PFA thick sheet and rod are with high purity and smoother surface. They have excellent chemical resistance and excellent ozone resistance. It could be easy to weld, also can be further processed into the required PFA products. Wide temperature range: -400˚F~500˚F (-240℃~260℃)."
        }
      },
      {
        id: "fittings-valves",
        images: ["assets/products/products-pfafitting-01.webp"],
        name: { zh: "PFA Fitting、閥件", en: "PFA Fittings and Valves" },
        summary: {
          zh: "以可組裝樣品展示擴口、對焊、閥件與 Tube 應用，方便現場互動說明。",
          en: "Interactive samples for flared, butt-welded, valve, and tube applications for easier on-site demonstrations."
        }
      },
      {
        id: "sampling-bottles",
        images: ["assets/products/products-pfa-sampling-bottles-01.webp"],
        name: { zh: "PFA 取樣瓶", en: "PFA Sampling Bottles" },
        summary: {
          zh: "展示 PFA 取樣瓶，支援高潔淨樣品收集與保存需求。",
          en: "PFA sampling bottles for high-purity sample collection and storage."
        }
      },
      {
        id: "lining-sheets",
        images: ["assets/products/products-ptfe-tank-01.webp"],
        name: { zh: "四方槽、氟素板材", en: "PTFE Rectangular Tank / Sink" },
        summary: {
          zh: "展示內襯工藝、焊接、PFA Sheet、PTFE Etched Sheet 與 M-PTFE CBK 材料應用。",
          en: "Lining process, welding, PFA Sheet, PTFE Etched Sheet, and M-PTFE CBK material applications."
        }
      }
    ]
  },
  {
    id: "fluoropolymer-lining",
    title: {
      zh: "氟素樹脂內襯 / Fluoropolymer Lining",
      en: "Fluoropolymer Lining"
    },
    items: [
      {
        id: "pfa-vessel",
        images: [
          "assets/products/products-Vessel-01.webp",
          "assets/products/products-vessel-02.webp"
        ],
        name: { zh: "PFA 槽 / Vessel 模組", en: "PFA Chemical Supply Tank / Vessel Module" },
        summary: {
          zh: "可用於半導體與化學產業高純度液體的供應、輸送與儲存，內表面平滑並可依需求製作圓筒或方形槽體。",
          en: "For supplying, transporting, and storing high-purity liquids in semiconductor and chemical applications, with smooth inner surfaces and cylindrical or square configurations."
        }
      },
      {
        id: "heat-exchanger",
        images: [
          "assets/products/products-heat-exchanger-01.webp",
          "assets/products/products-heat-exchanger-02.webp"
        ],
        name: { zh: "熱交換器與多孔板", en: "Heat Exchanger and Tube Sheet" },
        summary: {
          zh: "包含 8 吋熱交換器、10x8 Tube 熱熔、多孔板與 127 支熱交換器展示。",
          en: "Includes 8-inch heat exchanger, 10x8 tube fusion, tube sheet, and 127-tube heat exchanger exhibits."
        }
      },
      {
        id: "core-lined-pipe-ptfe",
        images: ["assets/products/core-fluoropolymer-lining-lined-pipe-ptfe-m-ptfe.webp"],
        name: {
          zh: "內襯直管與管件 (PTFE/M-PTFE)",
          en: "Lined Pipe & Fittings (PTFE/M-PTFE)"
        },
        summary: {
          zh: "因半導體工業逐漸蓬勃發展，半導體製程對於氟素樹脂要求的質量與日俱增，上品公司亦開發PTFE、M-PTFE、PFA管、管件，並增設多套無塵室，讓我們的半導體製品都能符合半導體製程的潔淨要求。本產品符合ANSI 150 LBS及JIS 10K規範。",
          en: "Owing to the prosperous development of semiconductor, the requirement of quality fluoropolymer resin product keeps increasing."
        }
      },
      {
        id: "core-iso-container",
        images: ["assets/products/core-fluoropolymer-lining-iso-container.webp"],
        name: {
          zh: "槽車",
          en: "ISO CONTAINER"
        },
        summary: {
          zh: "上品公司的氟素樹脂內襯槽車貼合完成後，需經多項測試、檢驗完成才允許出貨。",
          en: "Allied Supreme Corp. fluoropolymer lining container is only allowed to be shipped after the completion of a series of tests, and inspections."
        }
      },
      {
        id: "core-seamless-column",
        images: ["assets/products/core-fluoropolymer-lining-seamless-column.webp"],
        name: {
          zh: "塔節",
          en: "Seamless Column"
        },
        summary: {
          zh: "採用加厚的PTFE、M-PTFE管，並以特殊的成型工法，使管嘴和本體一體成型，無須焊道。",
          en: "Seamless column utilizes PTFE or M-PTFE heavy wall liner with exceptional technique, to make the nozzle & column in one body with free of welding line....."
        }
      },
      {
        id: "core-immersion-coil-heat-exchanger",
        images: [
          "assets/products/core-fluoropolymer-lining-heat-exchanger-coil-type.webp",
          "assets/products/core-fluoropolymer-lining-heat-exchanger-free-type.webp",
          "assets/products/core-fluoropolymer-lining-heat-exchanger-modular-type.webp"
        ],
        name: {
          zh: "熱交換器",
          en: "Immersion Coil & Shell & Tube Type Heat Exchanger"
        },
        summary: {
          zh: "有別於傳統的焊接式熱交換器，上品公司提供的特殊接頭設計(一體成型無焊道)搭配耐化性極佳的PFA Tube，於耐壓耐蝕的應用，有極為卓越的表現。",
          en: "The new type is different from the traditional welded heat exchanger. Allied Supreme Corp. provides a special joint design (one piece without welded line) with excellent chemical resistance of PFA Tube, the application of pressure and corrosion resistance has a very excellent performance."
        }
      },
      {
        id: "core-chemical-filter-housing",
        images: ["assets/products/core-fluoropolymer-lining-filter-housing.webp"],
        name: {
          zh: "內襯過濾裝置",
          en: "EL-Grade Chemical Filter Housing"
        },
        summary: {
          zh: "內襯過濾裝置主要應用於過濾強酸、強鹼，內襯氟素樹脂可避免酸鹼液體直接接觸不銹鋼，提高使用壽命。",
          en: "EL-Grade Chemical Filter Housing is mainly used in filtering strong acid, alkali, lined with fluoropolymer to avoid acid-base liquid direct contact with stainless steel, improve service life."
        }
      },
      {
        id: "core-lined-pipe-pfa",
        images: [
          "assets/products/Fluoropolymer%20Lining/products-fluoropolymer%20lining-Lined%20Pipe%20%26%20Fittings%20(PFA)%20-02.png",
          "assets/products/Fluoropolymer%20Lining/products-fluoropolymer%20lining-Lined%20Pipe%20%26%20Fittings%20(PFA).png"
        ],
        name: {
          zh: "內襯直管與管件 (PFA)",
          en: "Lined Pipe & Fittings (PFA)"
        },
        summary: {
          zh: "因半導體工業逐漸蓬勃發展，半導體製程對於氟素樹脂要求的質量與日俱增，上品公司亦開發PTFE、M-PTFE、PFA管、管件，並增設多套無塵室，讓我們的半導體製品都能符合半導體製程的潔淨要求。本產品符合ANSI 150 LBS及JIS 10K規範。",
          en: "Owing to the prosperous development of semiconductor, the requirement of quality fluoropolymer resin product keeps increasing."
        }
      },
      {
        id: "core-flexible-hose",
        images: ["assets/products/Fluoropolymer%20Lining/products-fluoropolymer%20lining-flexible%20hose.png"],
        name: {
          zh: "蛇管",
          en: "Flexible Hose"
        },
        summary: {
          zh: "上品公司為了進一步提供更高級產品服務，特別開發製作TEFPASS® 軟管以提供半導體工業高純度要求，特別是可耐高溫與耐全真空的SHPT type軟管，優異的性能深獲客戶支持與使用。",
          en: "Allied Supreme Corp. further offers the superior performance of “TEFPASS Teflon flexible hose”. The main purpose is to meet high purity for semiconductor industry in chemical delivering. Specially, the “SHPT type hose can be used in high temperature, full vacuum resistance. It has been largely applied and fully supported by our customers."
        }
      }
    ]
  }
];

const fallbackProducts = [
  ...fallbackMembraneProducts
];
