let LANG_FALLBACK = "en" // fallback lang,when lang attr undefined 

let getLangFromStorage = () => localStorage.getItem("lang")
let setLangInStorage = (lang) => localStorage.setItem("lang", lang)


let LANGS = {
  // syntax as the following
  // "xlang" : {
  //    partName1: "partName1 content in xlang",
  //    partNameN: "partNameN content in xlang"
  //    and so on...
  // }

  "en": {
    title: "Gardener - Gardening Website Template",
    followUs: "Follow Us:",
    navTitle: "ob-manager",
    catalogTitle1: "You fight if you want to reach",
    catalogTitle2: "You fight if you want to reach",
    exploreMore: "Explore More",
    NoHiddenCost: "No Hidden Cost",
    YearofExperience: 'Year of Experience',
    making: "We Make Your body Like A athlete",
    para1: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum',
    home: "Home",
    serv: "Services",
    about: "About",
    Projects: "Projects",
    Contact: "Contact",
    GetAQuote: "Get A Quote",
    DedicatedTeam: "Dedicated Team",
    para2: "Tempor erat elitr rebum at clita. Diam dolor diam ipsumTempor erat elitr rebum at clita. Diam dolor diam ipsumTempor erat elitr rebum at clita. Diam dolor diam ipsum"
  },


  "ar": {
    title: "جاردينر - منصة موقع جاردينر",
    followUs: "تابعنا :",
    navTitle: "جاردينر",
    catalogTitle1: "إجعل من منزلك حديقة",
    catalogTitle2: "قم بإنشاء حديقتك الصغيرة في المنزل",
    exploreMore: "إكتشف المزيد",
    NoHiddenCost:" كلشي ديالك ",
    YearofExperience: "سنوات الخبرة",
    making: "مهم غتعيش مرتاحاخااي",
    para1: "ىبتناؤ نتريت رة نيرتى تيرى خترى خهثنيتن و نبؤ خينة نيخلاة  حخنيةخم يمى ختىي نوخيتر ةحنية ؤكزلاحتبة كؤز حتريةكؤ زحتية كجتلاي حةمؤ نمى يييي"
    }

}


// lang checking
let AVAILABLE_LANGS = Object.keys(LANGS)

// lang sould be available
AVAILABLE_LANGS?.indexOf( getLangFromStorage() ) == -1 && setLangInStorage(LANG_FALLBACK)

let LANG = getLangFromStorage()

document.documentElement.lang = LANG // set lang to page

// render available langs in lang selector
AVAILABLE_LANGS.forEach( lang => {
  let option = new Option(lang, lang) // create option
  lang == LANG && (option.defaultSelected = true) // set selected if lang is used 

  document.querySelector("[data-langSelector]")
    .add(
      option, // arg1: text, arg2: value
      undefined // put option in bottom
    )
});


// rendering parts translation
Object.keys(LANGS[LANG])
  .forEach(partName => {
    if (partName != "title"){
      document.querySelectorAll(`[data-${partName}]`).forEach(e => e.textContent = LANGS[LANG][partName])
      return
    }
    
    document.title = LANGS[LANG][partName] 
  }
);


// Get the selected language from localStorage, ordefault to English
const selectedLang = localStorage.getItem("lang") || "en";
// Set the value of the language selector to the selected language
const langSelector = document.querySelector("[data-langSelector]");
langSelector.value = selectedLang;
// Set the direction of the body based on the selected language
document.body.setAttribute("dir", selectedLang === "ar" ? "rtl" : "ltr");