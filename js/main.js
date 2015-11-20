$(function(){
  var $main = $('#main').append($.parseHTML($("noscript").text())),
      $creations = $('#creations').addClass('hidden');
  $('#intro').t({
    speed: 25,
    mistype: 0.5,
    speed_vary:true,
    prefix: "> ",
    tag: "code",
    fin: function($el){
      $el.append('<div class="bounce" />')
      $creations.removeClass("hidden");
    }
  })
})