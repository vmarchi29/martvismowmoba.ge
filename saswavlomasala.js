const sign1id = document.getElementById("sign1id");
const sign2id = document.getElementById("sign2id");
const sign3id = document.getElementById("sign3id");
const sign4id = document.getElementById("sign4id");
const sign5id = document.getElementById("sign5id");
const sign6id = document.getElementById("sign6id");
const sign7id = document.getElementById("sign7id");
const sign8id = document.getElementById("sign8id");
const sign9id = document.getElementById("sign9id");
const ads2 = document.getElementById("ads2");
const ads3 = document.getElementById("ads3");





const signs_product = document.querySelectorAll(".signs-product");
const signs_product_prioriteti = document.querySelectorAll(".signs-product-prioriteti");
const signs_product_amkrdzalavi = document.querySelectorAll(".signs-product-amkrdzalavi");
const signs_product_mimtitebeli = document.querySelectorAll(".signs-product-mimtitebeli");
const signs_product_gansakutrebuli_mititebebis = document.querySelectorAll(".signs-product-gansakutrebuli-mititebebis");
const signs_product_servisis = document.querySelectorAll(".signs-product-servisis");
const signs_product_sainformacio = document.querySelectorAll(".signs-product-sainformacio");
const signs_product_damatebiti_informaciis = document.querySelectorAll(".signs-product-damatebiti-informaciis");
const signs_product_damatebiti_sagzao_monishvnebi = document.querySelectorAll(".signs-product-damatebiti-sagzao-monishvnebi");
const sign=document.querySelectorAll(".sign");
function hideAll(){
    document.querySelectorAll(`
        .signs-product,
        .signs-product-prioriteti,
        .signs-product-amkrdzalavi,
        .signs-product-mimtitebeli,
        .signs-product-gansakutrebuli-mititebebis,
        .signs-product-servisis,
        .signs-product-sainformacio,
        .signs-product-damatebiti-informaciis,
        .signs-product-damatebiti-sagzao-monishvnebi
    `).forEach(el => el.classList.remove("show"));
    }
window.addEventListener("DOMContentLoaded", () => {
    hideAll();
    signs_product.forEach(el => el.classList.add("show"));
});

sign.forEach(el => {
    el.addEventListener("click", () => {
        sign.forEach(x => x.classList.remove("active1"));
        el.classList.add("active1");
    });

});

sign1id.addEventListener("click", () => {
    hideAll();
    signs_product.forEach(el => el.classList.add("show"));
    ads2.classList.remove("hide-ads");
    ads3.classList.remove("hide-ads");
    insertAds()
});

sign2id.addEventListener("click", () => {
    hideAll();
    signs_product_prioriteti.forEach(el => el.classList.add("show"));
    ads2.classList.add("hide-ads");
    ads3.classList.add("hide-ads");
    insertAds()
});

sign3id.addEventListener("click", () => {
    hideAll();
    signs_product_amkrdzalavi.forEach(el => el.classList.add("show"));
    ads2.classList.remove("hide-ads");
    ads3.classList.remove("hide-ads");
    insertAds()
});

sign4id.addEventListener("click", () => {
    hideAll();
    signs_product_mimtitebeli.forEach(el => el.classList.add("show"));
    ads2.classList.remove("hide-ads");
    ads3.classList.add("hide-ads");
    insertAds()
});

sign5id.addEventListener("click", () => {
    hideAll();
    signs_product_gansakutrebuli_mititebebis.forEach(el => el.classList.add("show"));
    ads2.classList.remove("hide-ads");
    ads3.classList.remove("hide-ads");
    insertAds()
});

sign6id.addEventListener("click", () => {
    hideAll();
    signs_product_servisis.forEach(el => el.classList.add("show"));
    ads2.classList.remove("hide-ads");
    ads3.classList.add("hide-ads");
    insertAds()
});
sign7id.addEventListener("click", () => {
    hideAll();
    signs_product_sainformacio.forEach(el => el.classList.add("show"));
    ads2.classList.remove("hide-ads");
    ads3.classList.remove("hide-ads");
    insertAds()
});
sign8id.addEventListener("click", () => {
    hideAll();
    signs_product_damatebiti_informaciis.forEach(el => el.classList.add("show"));
    ads2.classList.remove("hide-ads");
    ads3.classList.remove("hide-ads");
    insertAds()
});
sign9id.addEventListener("click", () => {
    hideAll();
    signs_product_damatebiti_sagzao_monishvnebi.forEach(el => el.classList.add("show"));
    ads2.classList.remove("hide-ads");
    ads3.classList.remove("hide-ads");
    insertAds()
});
function insertAds() {
  if (window.innerWidth > 768) return;

  document.querySelectorAll(".dynamic-ad").forEach(el => el.remove());

  // ყველა ჩვენებული ნიშანი
  const visible = Array.from(document.querySelectorAll("[class*='signs-product'].show"));
  if (visible.length === 0) return;

  function createAd(className) {
    const ad = document.createElement("div");
    ad.className = `${className} dynamic-ad`;
    ad.style.cssText = `
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 150px;
      margin: 20px 0;
      border-radius: 5px;
      grid-column: 1 / -1;
    `;
    ad.innerHTML = `<p style="font-size:30px; color:white;">თქვენი რეკლამის ადგილი</p>`;
    return ad;
  }

  // მე-5 ელემენტის შემდეგ
  if (visible[3]) visible[3].insertAdjacentElement("afterend", createAd("ads2"));

  // მე-10 ელემენტის შემდეგ
  if (visible[9]) visible[9].insertAdjacentElement("afterend", createAd("ads3"));

  // ბოლოს
  visible[visible.length - 1].insertAdjacentElement("afterend", createAd("ads4"));
}
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("open");
});