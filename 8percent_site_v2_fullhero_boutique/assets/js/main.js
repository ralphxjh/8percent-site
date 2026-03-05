(function(){
  const DEFAULT_LANG = "en";
  const storageKey = "lang";

  const i18n = {
    en: {
      nav_home: "Home",
      nav_about: "About",
      nav_invest: "Investment",
      nav_hotels: "Hotels",
      nav_contact: "Contact",
      nav_lucklock: "LuckLock 6",
      nav_gu: "GU Hotel",

      home_title: "8 Percent LLC",
      home_subtitle: "Tokyo Boutique Hotel Operations & Japan Real Estate Projects",
      home_btn_hotels: "Explore Hotels",
      home_btn_invest: "Investment",
      home_featured: "Featured Hotels",
      home_investment: "Real Estate Projects",
      home_investment_p: "Upcoming projects in Japan. Private distribution only. Please contact us for further information.",
      home_about_kicker: "About",
      home_about_p: "8 Percent LLC operates boutique hospitality properties in Tokyo, combining thoughtful design with professional asset management. We selectively engage in Japan real estate projects aligned with long-term value and operational excellence.",

      about_title: "About 8 Percent LLC",
      about_p1: "8 Percent LLC operates boutique hospitality properties in Tokyo and selectively engages in Japan real estate projects.",
      about_p2: "Our approach prioritizes quality, clarity, and operational excellence.",

      invest_title: "Japan Real Estate Projects",
      invest_p1: "Upcoming projects in Japan.",
      invest_p2: "Private distribution only. Please contact us for further information.",
      invest_focus_h: "Focus",
      invest_focus_p: "Tokyo-area opportunities aligned with long-term value creation and operational quality.",
      invest_process_h: "Process",
      invest_process_p: "Intro → Information sharing (as appropriate) → Discussion.",

      hotels_title: "Our Hotels in Tokyo",
      hotels_p: "Boutique hospitality stays operated by 8 Percent LLC.",
      hotels_view: "View details",

      lucklock_kicker: "Nakano, Tokyo",
      lucklock_spec: "2LDK · 63㎡ · Up to 6 guests",
      gu_kicker: "Nakano, Tokyo",
      gu_spec: "100㎡ · 3 Bedrooms · Up to 10 guests",

      hotel_overview: "Overview",
      hotel_features: "Features",
      hotel_location: "Location",
      hotel_book: "Book on Airbnb",
      hotel_gallery: "Gallery",

      lucklock_title: "LuckLock 6",
      lucklock_overview: "6 guests · 2 bedrooms · 4 beds · 2 bathrooms",
      lucklock_loc: "Nakano City, Tokyo (exact address provided after booking)",
      lucklock_features_li: [
        "Self check-in (smart lock)",
        "High-speed Wi‑Fi",
        "Kitchen",
        "Washer & dryer",
        "Family-friendly setup"
      ],

      gu_title: "GU Hotel",
      gu_overview: "10 guests · 3 bedrooms · 7 beds · 2.5 bathrooms",
      gu_loc: "Nakano City, Tokyo (exact address provided after booking)",
      gu_features_li: [
        "Hot tub",
        "Dedicated workspace",
        "Projector",
        "Kitchen",
        "Washer & dryer"
      ],

      contact_title: "Contact",
      contact_p: "For inquiries, please reach us via email.",
      contact_company: "8 Percent LLC",
      contact_email_label: "Email",
      contact_address_label: "Address",
      contact_address: "Tokyo Meguro Higashigaoka",

      footer_copy: "© 2026 8 Percent LLC"
    },
    ja: {
      nav_home: "ホーム",
      nav_about: "会社概要",
      nav_invest: "不動産プロジェクト",
      nav_hotels: "ホテル",
      nav_contact: "お問い合わせ",
      nav_lucklock: "LuckLock 6",
      nav_gu: "GU Hotel",

      home_title: "8 Percent LLC",
      home_subtitle: "東京のブティックホテル運営 & 日本の不動産プロジェクト",
      home_btn_hotels: "ホテルを見る",
      home_btn_invest: "不動産プロジェクト",
      home_featured: "運営ホテル",
      home_investment: "不動産プロジェクト",
      home_investment_p: "現在、国内不動産プロジェクトを準備中です。詳細はお問い合わせください。",
      home_about_kicker: "会社概要",
      home_about_p: "8 Percent LLCは、東京にてブティックホテルを運営し、運営品質と資産管理の視点を重視しています。また、中長期的価値創出に資する不動産プロジェクトにも選択的に取り組んでおります。",

      about_title: "8 Percent LLCについて",
      about_p1: "8 Percent LLCは、東京にてブティックホテルを運営するとともに、日本国内の不動産プロジェクトにも選択的に取り組んでおります。",
      about_p2: "品質、明確さ、そして運営の卓越性を重視しています。",

      invest_title: "日本の不動産プロジェクト",
      invest_p1: "現在、国内不動産プロジェクトを準備中です。",
      invest_p2: "詳細はお問い合わせください。",
      invest_focus_h: "対象",
      invest_focus_p: "中長期的価値創出と運営品質に重きを置いた、主に東京エリアの機会。",
      invest_process_h: "進め方",
      invest_process_p: "ご連絡 → 情報共有（必要に応じて）→ ご相談。",

      hotels_title: "東京の運営ホテル",
      hotels_p: "8 Percent LLCが運営するブティック宿泊施設です。",
      hotels_view: "詳細を見る",

      lucklock_kicker: "東京・中野",
      lucklock_spec: "2LDK · 63㎡ · 最大6名",
      gu_kicker: "東京・中野",
      gu_spec: "100㎡ · 3ベッドルーム · 最大10名",

      hotel_overview: "概要",
      hotel_features: "設備・特徴",
      hotel_location: "所在地",
      hotel_book: "Airbnbで予約",
      hotel_gallery: "ギャラリー",

      lucklock_title: "LuckLock 6",
      lucklock_overview: "最大6名 · 2ベッドルーム · ベッド4台 · バスルーム2室",
      lucklock_loc: "東京・中野区（詳細住所は予約後にご案内）",
      lucklock_features_li: [
        "セルフチェックイン（スマートロック）",
        "高速Wi‑Fi",
        "キッチン",
        "洗濯機・乾燥機",
        "ファミリー向け"
      ],

      gu_title: "GU Hotel",
      gu_overview: "最大10名 · 3ベッドルーム · ベッド7台 · バスルーム2.5室",
      gu_loc: "東京・中野区（詳細住所は予約後にご案内）",
      gu_features_li: [
        "ホットタブ",
        "ワークスペース",
        "プロジェクター",
        "キッチン",
        "洗濯機・乾燥機"
      ],

      contact_title: "お問い合わせ",
      contact_p: "ご不明点はメールにてお問い合わせください。",
      contact_company: "8 Percent LLC",
      contact_email_label: "メール",
      contact_address_label: "住所",
      contact_address: "東京都目黒区 東が丘",

      footer_copy: "© 2026 8 Percent LLC"
    }
  };

  function getLang(){
    const url = new URL(window.location.href);
    const q = url.searchParams.get("lang");
    if (q && (q==="en" || q==="ja")) return q;
    const saved = localStorage.getItem(storageKey);
    if (saved && (saved==="en" || saved==="ja")) return saved;
    return DEFAULT_LANG;
  }

  function setLang(lang){
    localStorage.setItem(storageKey, lang);
    document.documentElement.setAttribute("lang", lang === "ja" ? "ja" : "en");
    document.querySelectorAll("[data-lang]").forEach(btn=>{
      btn.classList.toggle("active", btn.getAttribute("data-lang")===lang);
    });
    document.querySelectorAll("[data-i18n]").forEach(el=>{
      const key = el.getAttribute("data-i18n");
      const val = i18n[lang][key];
      if (typeof val === "string") el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-list]").forEach(ul=>{
      const key = ul.getAttribute("data-i18n-list");
      const arr = i18n[lang][key];
      if (Array.isArray(arr)){
        ul.innerHTML = arr.map(t=>`<li>${escapeHtml(t)}</li>`).join("");
      }
    });
  }

  function escapeHtml(str){
    return String(str)
      .replaceAll("&","&amp;")
      .replaceAll("<","&lt;")
      .replaceAll(">","&gt;")
      .replaceAll('"',"&quot;")
      .replaceAll("'","&#039;");
  }

  function onReady(fn){
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn);
    else fn();
  }

  onReady(()=>{
    const lang = getLang();
    setLang(lang);

    document.querySelectorAll("[data-lang]").forEach(btn=>{
      btn.addEventListener("click", ()=>{
        const l = btn.getAttribute("data-lang");
        setLang(l);
      });
    });

    const path = window.location.pathname.replace(/\/index\.html$/,"/").toLowerCase();
    document.querySelectorAll("a[data-nav]").forEach(a=>{
      const href = a.getAttribute("href");
      if (!href) return;
      const normalized = new URL(href, window.location.origin).pathname.toLowerCase();
      if ((path === "/" && (normalized === "/" || normalized.endsWith("/index.html"))) || (path !== "/" && normalized === path)){
        a.classList.add("active");
      }
    });
  });
})();
