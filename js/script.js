
if ($(window).width() <= 768) {
  $('.footer-links-wrapper').addClass('someClass');
} else {
  $('.footer-links-wrapper').removeClass('someClass');
}
$(window).on('resize', function (event) {
if ($(window).width() <=768) {
  $('.footer-links-wrapper').addClass('someClass');
} else {
  $('.footer-links-wrapper').removeClass('someClass');
  $('.footer-links-wrapper ul').show();
}
});
// Footer collpase funciton
$(document).on('click', '.someClass h3', function(){
  $(this).next('ul').slideToggle();
  //$(this).toggleClass('expanded');
  $(this).toggleClass('addis');
})









// if ($(window).width() <= 768) {
//     $('.footer-links-wrapper').addClass('someClass');
//   } else {
//     $('.footer-links-wrapper').removeClass('someClass');
//   }
//   $(window).on('resize', function (event) {
//     if ($(window).width() <= 768) {
//       $('.footer-links-wrapper').addClass('someClass');
//     } else {
//       $('.footer-links-wrapper').removeClass('someClass');
//       $('.footer-links-wrapper ul').show();
//     }
//   });
//   // Footer collapse functionality
//   $(document).on('click', '.someClass h3', function () {
//     $(this).next('ul').slideToggle();
//     // $(this).toggleClass('expanded');
//     $(this).toggleClass('addis');
//   });
// //   [12:19 PM, 3/19/2021]  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.2/       css/   font-awesome.min.css"
// //   [12:21 PM, 3/19/2021] 'Montserrat', sans-serif;
  