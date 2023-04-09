function updateTable() {
  document.getElementById("courseTable").innerHTML = ""
  var inputDate = document.forms[0].inputDate.value;
  $(function() {
    $("#courseTable").append("<tr><th>場次</th><th>時間</th><th>主題</th></tr>");

    var startM = (inputDate[5] + inputDate[6]);
    var startD = (inputDate[8] + inputDate[9]);
    
    var M = parseInt(startM - 1);
    var D = parseInt(startD);

    startDate.setMonth(M, D);
    
    let millisecsPerDay = 24 * 60 * 60 * 1000;

    const options = {
      month: "numeric",
      day: "numeric",
    };
    
    var topicCount = topic.length;
    var holiday = "";
    var even = "";
    for(var x = 0; x < topicCount; x++) {
      if(topic[x] == "停課")
        holiday = "holiday";
      else
        holiday = "";

      if(x % 2 == 1)
        even = "even";
      else
        even = "";

      $("#courseTable").append(
        "<tr>"+
        `<td id=${holiday} ${even}>${x+1}</td>` + 
        `<td id=${holiday} ${even}>${(new Date(startDate.getTime() + 7 * x * millisecsPerDay)).toLocaleDateString("en-US", options)}</td>` + 
        `<td id=${holiday} ${even}>${topic[x]}</td>` +
        "</tr>"
      );
    }
  });
}

function progress() {
  updateTable();
}

function progressAdd() {
  topic.push(document.forms[1].addEvent.value);
  updateTable();
}
// 用ajax解決網頁跳轉問題