var choice = -1;

function progress() {
  var numberOfListItem = $("li").length;
  var temp = Math.floor(Math.random() * numberOfListItem);
  while(temp == choice)
    temp = Math.floor(Math.random() * numberOfListItem);
  
  choice = temp;

  $("h1").text($("li").eq(choice).text());
  $("#output").html("<img src=./" + choice + ".jpeg>");
};