$(function(){

  var content = $.parseHTML($("noscript").text()),
      $main = $('#main').append('<a href="#" class="skip link"> Skip typing</a>').append(content),
      $creations = $('#creations').addClass('hidden'),
      $scrollBtn = $('.scroll').remove();
      $('footer').addClass('hidden');

  $main.data("scrollBtn", $scrollBtn)

  $main
    .on('click', '.scroll' ,function(e){
      var href = $.attr(this, "href")
      $('html, body').animate({
          scrollTop: $(href).offset().top
        }, 250);
      $(this).blur();
      return false;
    }).one('click', '.skip', function(){
      var content = $.parseHTML($("noscript").text());
      $('#main').addClass('skip-typing')
      $('#main').empty().append(content)
      $('#intro').wrapInner("<div class='inner' />")
      $(".noscript").removeClass("noscript");
      return false;
    });
});



var observer = new FontFaceObserver('Inconsolata');
observer.check().then(function () {
  $('html').toggleClass('font-loaded font-not-loaded');
  !$('#main').hasClass('skip-typing') && $('#intro').t({
    speed: 40,
    speed_vary:true,
    tag: "code",
    init: function($el) {
      $el.wrapInner("<div class='inner' />")
      $('.init-loader').remove();
    },
    fin: function($el){
      $el.append($('#main').data("scrollBtn"));
      $('.hidden').removeClass("hidden");
      $('.skip').remove()
    }
  })
}, function () {
  $('#intro').t({
      speed: 40,
      speed_vary:true,
      tag: "code",
      init: function($el) {
        $el.wrapInner("<div class='inner' />")
        $('.init-loader').remove();
      },
      fin: function($el){
        $el.append($('#main').data("scrollBtn"))
        $('.hidden').removeClass("hidden");
        $('.skip').remove()
      }
    })

});