$(function(){
  var $main = $('#main').append('<a href="#" class="skip link"> Skip typing</a>').append($.parseHTML($("noscript").text())),
      $creations = $('#creations').addClass('hidden'),
      $scrollBtn = $('.scroll').remove();

  $main
    .on('click', '.scroll' ,function(e){
      $('html, body').animate({
          scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 250);
        $(this).blur();
      return false;
    }).one('click', '.skip', function(){
      var content = $.parseHTML($("noscript").text())
      $('#main').empty()
        .append(content)
      $('#intro').wrapInner("<div class='inner' />")
      $(".inner > .prefix").remove();
      $(".noscript").removeClass("noscript")
      return false;
    })

  $('#intro').t({
    mistype: 0.5,
    speed: 40,
    speed_vary:true,
    prefix: "> ",
    tag: "code",
    init: function($el) {
      $el.prepend('<ins><span class="prefix"></span></ins>')
      $el.wrapInner("<div class='inner' />")
    },
    fin: function($el){
      $el.append($scrollBtn)
      $creations.removeClass("hidden");
      $('.skip').remove()
    }
  })
})