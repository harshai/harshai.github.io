$(function(){
  var $main = $('#main').append($.parseHTML($("noscript").text())),
      $creations = $('#creations').addClass('hidden'),
      $scrollBtn = $('.scroll').remove();

  $main.on('click', '.scroll' ,function(e){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 250);
      $(this).blur();
    return false;
  });

  $('#intro').t({
    mistype: 0.5,
    speed: 25,
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
    }
  })
})