  /* 
  Author - Sudhir gupta (sudhirgupta.456@gmail.com) 
  this function will trim your text into teaser and add show more button 
  */

function makeTeaser(target,teaseLimit) {
  
  var strings = target.text();
  var totalChar = strings.length;
  var teaserText = strings.substr(0, teaseLimit);
  var restText = strings.substr(teaseLimit, totalChar);


  if (totalChar > teaseLimit) {
    target.html('<span class="teaser">' + teaserText + '+</span><span class="teaseRestText" style="display:none">' + restText + '</span><span class="teaserDot" toggle="0"><i style="color:red">&nbsp; Show more...&nbsp;</i></span>');
    }
}

/* toggle of show more and show less */

$('body').on('click','.teaserDot',function () {
    $(this).prev('.teaseRestText').toggle();
    if ($(this).attr('toggle') == '0') {
        $(this).html('Show Less...').attr('toggle', 1);
    }
    else {
        $(this).html('Show More...').attr('toggle', 0);
    }
});


/* uses */

$(window).load(function () {
    $('#tableId tbody td').each(function (e) {
      target=$(this);
      makeTeaser(target,40); //40 is a charactor limit.
    });
});
