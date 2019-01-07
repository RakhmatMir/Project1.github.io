// menu aside
var acc = document.getElementsByClassName("first-link");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
// end menu aside
// read more aside
$(".js-read-more").on("click", function(e) {
  e.preventDefault();

  var $this = $(this),
      text = $this.text();
      if ( text == "читать дальше" ) {
        $this.text("Скрыть");
      } else {
        $this.text("читать дальше");
      }

  $(this).prev(".js-blog-content").toggleClass("hidden");

})
// end read more aside
