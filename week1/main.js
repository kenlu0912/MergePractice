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

(function($) {
  $.fn.extend({

    roulette: function(options) {

      var defaults = {
        angle: 0,
        angleOffset: -45,
        speed: 5000,
        easing: "easeInOutElastic",
      };

      var opt = $.extend(defaults, options);

      return this.each(function() {
        var o = opt;

        var data = [
					{
            color: '#3f297e',
            text: '牛肉麵'
          },
          {
            color: '#1d61ac',
            text: '羊肉爐'
          },
          {
            color: '#169ed8',
            text: '炒飯'
          },
          {
            color: '#209b6c',
            text: '水餃'
          },
          {
            color: '#60b236',
            text: '滷肉飯'
          },
          {
            color: '#efe61f',
            text: '炒麵'
          },
          {
            color: '#f7a416',
            text: '滷味'
          },
          {
            color: '#e6471d',
            text: '烤鴨'
          },
          {
            color: '#dc0936',
            text: '泡麵'
          },
          {
            color: '#e5177b',
            text: '鹽酥雞'
          },
          {
            color: '#be107f',
            text: '拉麵'
          },
          {
            color: '#881f7e',
            text: '壽司'
          }
        ];

        var $wrap = $(this);
        var $btnStart = $wrap.find("#btn-start");
        var $roulette = $wrap.find(".roulette");
        var wrapW = $wrap.width();
        var angle = o.angle;
        var angleOffset = o.angleOffset;
        var speed = o.speed;
        var esing = o.easing;
        var itemSize = data.length;
        var itemSelector = "item";
        var labelSelector = "label";
        var d = 360 / itemSize;
        var borderTopWidth = wrapW;
        var borderRightWidth = tanDeg(d);

        for (i = 1; i <= itemSize; i += 1) {
          var idx = i - 1;
          var rt = i * d + angleOffset;
          var itemHTML = $('<div class="' + itemSelector + '">');
          var labelHTML = '';
              labelHTML += '<p class="' + labelSelector + '">';
              labelHTML += '	<span class="text">' + data[idx].text + '<\/span>';
              labelHTML += '<\/p>';

          $roulette.append(itemHTML);
          $roulette.children("." + itemSelector).eq(idx).append(labelHTML);
          $roulette.children("." + itemSelector).eq(idx).css({
            "left": wrapW / 2,
            "top": -wrapW / 2,
            "border-top-width": borderTopWidth,
            "border-right-width": borderRightWidth,
            "border-top-color": data[idx].color,
            "transform": "rotate(" + rt + "deg)"
          });

          var textH = parseInt(((2 * Math.PI * wrapW) / d) * .5);

          $roulette.children("." + itemSelector).eq(idx).children("." + labelSelector).css({
            "height": textH + 'px',
            "line-height": textH + 'px',
            "transform": 'translateX(' + (textH * 1.3) + 'px) translateY(' + (wrapW * -.3) + 'px) rotateZ(' + (90 + d * .5) + 'deg)'
          });

        }

        function tanDeg(deg) {
          var rad = deg * Math.PI / 180;
          return wrapW / (1 / Math.tan(rad));
        }


        $btnStart.on("click", function() {
          rotation();
        });

        function rotation() {
                            //  5 ~ 11     0 ~ 361
          var completeA = 360 * r(5, 10) + r(0, 360);
          $("#output").html("");
          $roulette.rotate({
            angle: angle,
            animateTo: completeA,
            center: ["50%", "50%"],
            easing: $.easing.esing,
            duration: speed,
            callback: function() {
              // var currentA = $(this).getRotateAngle();
              
              if(completeA % 360 <= 15 || completeA % 360 >= 345)
                $("#output").html('<img src="./1.jpeg">');
              else if(completeA % 360 >= 15 && completeA % 360 <= 45)
                $("#output").html('<img src="./2.jpeg">');
              else if(completeA % 360 >= 45 && completeA % 360 <= 75)
                $("#output").html('<img src="./3.jpeg">');
              else if(completeA % 360 >= 75 && completeA % 360 <= 105)
                $("#output").html('<img src="./4.jpeg">');
              else if(completeA % 360 >= 105 && completeA % 360 <= 135)
                $("#output").html('<img src="./5.jpeg">');
              else if(completeA % 360 >= 135 && completeA % 360 <= 165)
                $("#output").html('<img src="./6.jpeg">');
              else if(completeA % 360 >= 165 && completeA % 360 <= 195)
                $("#output").html('<img src="./7.jpeg">');
              else if(completeA % 360 >= 195 && completeA % 360 <= 225)
                $("#output").html('<img src="./8.jpeg">');
              else if(completeA % 360 >= 225 && completeA % 360 <= 255)
                $("#output").html('<img src="./9.jpeg">');
              else if(completeA % 360 >= 255 && completeA % 360 <= 285)
                $("#output").html('<img src="./10.jpeg">');
              else if(completeA % 360 >= 285 && completeA % 360 <= 315)
                $("#output").html('<img src="./11.jpeg">');
              else if(completeA % 360 >= 315 && completeA % 360 <= 345)
                $("#output").html('<img src="./12.jpeg">');
            }
          });

          
        }

        function r(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

      });
    }
  });
})(jQuery);

$(function() {
  $('.box-roulette').roulette();
});