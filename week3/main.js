var count = 0;
var tiger = 0;
var peacock = 0;
var koala = 0;
var owl = 0;
var chameleon = 0;

$(function () {
  $("#startButton").on("click", function() {
    $("#startButton").attr("value", "下一題");
    $("#question").text(questions[count].question);
    document.getElementById("options").style.opacity = 1;
    // $("#options").empty();
    // questions[count].answers.forEach(function(element, index, array){
    //   $("#options").append(
    //     `<input id='r${index}' type='radio' value='${index}'><label> ${element[0]} </label>`
    //   );
    // });
    $.each($(":radio"),function(i, val) {
      if(val.checked) {
        if(i == "0" && (count == 1 || count == 7 || count == 11 || count == 16 || count == 21 || count == 26))
          owl += 5;
        else if(i == "1" && (count == 1 || count == 7 || count == 11 || count == 16 || count == 21 || count == 26))
          owl += 4;
        else if(i == "2" && (count == 1 || count == 7 || count == 11 || count == 16 || count == 21 || count == 26))
          owl += 3;
        else if(i == "3" && (count == 1 || count == 7 || count == 11 || count == 16 || count == 21 || count == 26))
          owl += 2;
        else if(i == "4" && (count == 1 || count == 7 || count == 11 || count == 16 || count == 21 || count == 26))
          owl++;

        if(i == "0" && (count == 2 || count == 8 || count == 15 || count == 17 || count == 25 || count == 28))
          koala += 5;
        else if(i == "1" && (count == 2 || count == 8 || count == 15 || count == 17 || count == 25 || count == 28))
          koala += 4;
        else if(i == "2" && (count == 2 || count == 8 || count == 15 || count == 17 || count == 25 || count == 28))
          koala += 3;
        else if(i == "3" && (count == 2 || count == 8 || count == 15 || count == 17 || count == 25 || count == 28))
          koala += 2;
        else if(i == "4" && (count == 2 || count == 8 || count == 15 || count == 17 || count == 25 || count == 28))
          koala++;

        if(i == "0" && (count == 3 || count == 6 || count == 13 || count == 20 || count == 22 || count == 29))
          peacock += 5;
        else if(i == "1" && (count == 3 || count == 6 || count == 13 || count == 20 || count == 22 || count == 29))
          peacock += 4;
        else if(i == "2" && (count == 3 || count == 6 || count == 13 || count == 20 || count == 22 || count == 29))
          peacock += 3;
        else if(i == "3" && (count == 3 || count == 6 || count == 13 || count == 20 || count == 22 || count == 29))
          peacock += 2;
        else if(i == "4" && (count == 3 || count == 6 || count == 13 || count == 20 || count == 22 || count == 29))
          peacock++;

        if(i == "0" && (count == 4 || count == 9 || count == 12 || count == 19 || count == 23 || count == 27))
          chameleon += 5;
        else if(i == "1" && (count == 4 || count == 9 || count == 12 || count == 19 || count == 23 || count == 27))
          chameleon += 4;
        else if(i == "2" && (count == 4 || count == 9 || count == 12 || count == 19 || count == 23 || count == 27))
          chameleon += 3;
        else if(i == "3" && (count == 4 || count == 9 || count == 12 || count == 19 || count == 23 || count == 27))
          chameleon += 2;
        else if(i == "4" && (count == 4 || count == 9 || count == 12 || count == 19 || count == 23 || count == 27))
          chameleon++;

        if(i == "0" && (count == 5 || count == 10 || count == 14 || count == 18 || count == 24 || count == 30))
          tiger += 5;
        else if(i == "1" && (count == 5 || count == 10 || count == 14 || count == 18 || count == 24 || count == 30))
          tiger += 4;
        else if(i == "2" && (count == 5 || count == 10 || count == 14 || count == 18 || count == 24 || count == 30))
          tiger += 3;
        else if(i == "3" && (count == 5 || count == 10 || count == 14 || count == 18 || count == 24 || count == 30))
          tiger += 2;
        else if(i == "4" && (count == 5 || count == 10 || count == 14 || count == 18 || count == 24 || count == 30))
          tiger++;
        $("#question").text(questions[count].question);
      }
    });
    
    if(count >= 3) {
      $("#question").empty();
      document.getElementById("options").style.opacity = 0;
      // document.getElementById("startButton").style.opacity = 0;
      // $("#startButton").empty();
      // document.getElementById("startButton").reset();
      $("#result").html("<h1>測驗結果</h1><h5>假若你有某一項分遠遠高於其他四項，你就是典型的這種屬性，假若你有某兩項分大大超過其他三項，你是這兩種動物的綜合；假若你各項分數都比較接近，恭喜你，你是一個面面俱到近似完美性格的人；假若你有某一項分數特別偏低的話，想提高自己就需要在那一種動物屬性的加強上下工夫了。我們就來逐一分析一下各種迥然不同的“動物”吧！</h5><table>" + 
        "<tr><td>動物</td><td>特質</td><td>得分</td></tr>" + 
        "<tr><td><img src='tiger.jpg'></td><td>老虎型 (支配型Dominance)<br><br>有自信，夠權威，決斷力高，競爭性強，胸懷大志，喜歡評估。<br><a href='https://bookmarks.tw/pdp/tiger.html'>詳細說明</a></td><td>" + tiger + "</td></tr>" + 
        "<tr><td><img src='peacock.jpg'></td><td>孔雀型 (表達型Extroversion)<br><br>很熱心，夠樂觀，口才流暢，好交朋友，風度翩翩，誠懇熱心。<br><a href='https://bookmarks.tw/pdp/peacock.html'>詳細說明</a></td><td>" + peacock + "</td></tr>" + 
        "<tr><td><img src='koala.jpg'></td><td>無尾熊型 (耐心型Patience)<br><br>很穩定，夠敦厚，溫和規律，不好衝突。<br><a href='https://bookmarks.tw/pdp/koala.html'>詳細說明</a></td><td>" + koala + "</td></tr>" + 
        "<tr><td><img src='owl.jpg'></td><td>貓頭鷹型 (精確型Conformity)<br><br>很傳統，注重細節，條理分明，責任感強，重視紀律。<br><a href='https://bookmarks.tw/pdp/owl.html'>詳細說明</a></td><td>" + owl + "</td></tr>" + 
        "<tr><td><img src='chameleon.jpg'></td><td>變色龍型 (整合型1/2 Sigma)<br><br>善於在工作中調整自己的角色去適應環境，具有很好的溝通能力。<br><a href='https://bookmarks.tw/pdp/chameleon.html'>詳細說明</a></td><td>" + chameleon + "</td></tr></table>")
      // document.write("<table>HELLO</table>")
      $("#startButton").attr("value", "再來一次");
      $("#startButton").on("click", function() {
        location.reload();
      });
    }
    ++count;
  });
});