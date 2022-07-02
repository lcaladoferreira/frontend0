// background JS
window.onload = function () {
  Particles.init({
    selector: ".background"
  });
};
const particles = Particles.init({
  selector: ".background",
  color: ["#4190fc", "#150016", "#000000"],
  connectParticles: true,
  responsive: [
    {
      breakpoint: 768,
      options: {
        color: ["#4190fc", "#150016", "#4190fc"],
        maxParticles: 43,
        connectParticles: false
      }
    }
  ]
});

// footer JS
$(window).bind("mousewheel", function (event) {
  let slidingUp = false;
  if (event.originalEvent.wheelDelta >= 0) {
    currentSection--;
    slidingUp = true;
  } else {
    currentSection++;
  }
  if (currentSection > totalSections) {
    currentSection = 0;
  }
  if (currentSection < 0) {
    currentSection = totalSections;
  }
  $("section").fadeOut("slow").slideUp("slow").dequeue();
  $(".section-" + currentSection)
    .fadeIn("slow")
    .slideDown("slow")
    .dequeue();
  console.log(currentSection);
});

$("footer .content").hide();
$("footer").mouseover(function () {
  $("footer .content").stop().slideDown("fast");
});
$("footer").mouseout(function () {
  $("footer .content").stop().slideUp("fast");
});