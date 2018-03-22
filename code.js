  /* 
  Author - Sudhir gupta (sudhirgupta.456@gmail.com) 
  this function will trim your text into teaser and add show more button 
  */
  var labelMore = 'Show More...';
  var labelLess = 'Show Less...';
  
  function makeTeaser(target,teaseLimit) {
	  var strings = target.text().trim();
	  var totalChar = strings.length;
	  var teaserText = strings.substr(0, teaseLimit);
	  var restText = strings.substr(teaseLimit, totalChar);
	  if (totalChar > teaseLimit) {
		target.html('<span class="teaser">' + teaserText + '</span>\
					<span class="teaseRestText" style="display:none">' + teaserText + restText + '</span>\
					<span class="teaserDot" toggle="0">\
						<i style="color:red">&nbsp; '+ labelMore + '&nbsp;</i>\
					</span>');
		}
}


/* toggle of show more and show less */
$(document).delegate('.teaserDot', 'click', function () {
    $(this).prev('.teaseRestText').toggle();
    $(this).prevAll('.teaser').toggle();
	
    if ($(this).attr('toggle') == '0') {
        $(this).html(labelLess).attr('toggle', 1);
    }
    else {
        $(this).html(labelMore).attr('toggle', 0);
    }
});

/* Uses- call this function in HTML File */
function applyTeaser(targetObject){
	$(window).load(function () {
		targetObject.each(function (e) {
		  var target = $(this);
		  var teaserLimit = target.attr('teaserLimit');
		  if(typeof teaserLimit == "undefined" || teaserLimit == 0 || isNaN(parseFloat(teaserLimit))) {
			teaserLimit = 5
		  }
		  console.log(teaserLimit);
		  makeTeaser(target,teaserLimit);
		});
	});
}
