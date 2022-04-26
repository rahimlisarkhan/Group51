$(document).ready(function () {
  $(".product-slider").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow:$(".next-button"),
    prevArrow:$(".prev-button")
  });

//   $(".phone-validate").countryCode({
//     infinite: true,
//     slidesToShow: 3,
//   });
});
