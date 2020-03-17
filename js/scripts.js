function init() {
  /* Feather Icon */
  feather.replace();

  /* Header on Scroll */
  let scrollpos = window.scrollY;
  const header = document.getElementById("top");
  const header_height = 20;
  const add_class_on_scroll = () => header.classList.add("active");
  const remove_class_on_scroll = () => header.classList.remove("active");
  document.getElementById("content").addEventListener("scroll", evt => {
    scrollpos = Math.round(evt.target.scrollTop);
    if (scrollpos >= header_height) {
      add_class_on_scroll();
    } else {
      remove_class_on_scroll();
    }
    console.log(scrollpos);
  });
}

/* SWUP */
init();
const swup = new Swup();
swup.on("contentReplaced", init);

/* QR Code */
var site_qr = document.getElementById("site-qr");
var url = site_qr.dataset.url;
var qr = new VanillaQR({
  url: url,
  size: 200,
  toTable: true
});
site_qr.appendChild(qr.domElement);
