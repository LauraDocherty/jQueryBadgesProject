$(function() {

  // your code will go here
    $.ajax({
    url: 'https://www.codeschool.com/users/sheepyantics.json',
    dataType: 'jsonp',
    success: function(response) {
      // handle response
	  var element = document.getElementById('badges');
	  var innerHtml = "";
	  for(i=0; i<response.courses.completed.length; i++)
	  {
		  innerHtml += '<div class="course"> <h3>'+ response.courses.completed[i].title + '</h3><img>'+ +'</div>';
	  }
	  element.innerHTML = innerHtml;
    }
  });
});
