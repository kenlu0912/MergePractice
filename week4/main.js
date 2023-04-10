var mapArray;
let ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
const gridLength = 37.5;

let questions = [
  {
    "question": "1 + 1 = ?",
    "choice": ["1", "2", "3", "4"],
    "ans": 1
  },
  {
    "question": "2 + 1 = ?",
    "choice": ["1", "2", "3", "4"],
    "ans": 2
  },
  {
    "question": "3 + 1 = ?",
    "choice": ["1", "2", "3", "4"],
    "ans": 3
  },
  {
    "question": "123 * 2 = ?",
    "choice": ["123", "234", "246", "321"],
    "ans": 2
  },
  {
    "question": "1 + 2 = ?",
    "choice": ["1", "2", "3", "4"],
    "ans": 2
  },
  {
    "question": "1 + 3 = ?",
    "choice": ["1", "2", "3", "4"],
    "ans": 3
  },
  {
    "question": "543 + 210 = ?",
    "choice": ["543", "210", "753", "357"],
    "ans": 2
  },
  {
    "question": "2 + 2 = ?",
    "choice": ["1", "2", "3", "4"],
    "ans": 3
  },
  {
    "question": "100 * 100 = ?",
    "choice": ["100", "1000", "10000", "100000"],
    "ans": 2
  },
  {
    "question": "10 + 100 = ?",
    "choice": ["110", "220", "330", "440"],
    "ans": 0
  },
  // {
  //   "question": "1 + 1 = ?",
  //   "choice": ["1", "2", "3", "4"],
  //   "ans": 1
  // },
]

function loadImages(sources, callback) {
  var images = {};
  var loadedImages = 0;
  var numImages = 0;
  // get num of sources
  for (var src in sources) {
    numImages++;
  }
  for (var src in sources) {
    images[src] = new Image();
    images[src].onload = function () {
      if (++loadedImages >= numImages) {
        callback(images);
      }
    };
    images[src].src = sources[src];
  }
}
mapArray = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0],
  [0, 0, 2, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3]
];

//initial
$(function(){
  // 0 : available, 1 : Mountain, 2 : Final Stop, 3 : Enemy
  
  ctx = $("#myCanvas")[0].getContext("2d");

  imgMain = new Image();
  imgMain.src = "images/spriteSheet.png";
  currentImgMain = {
    x: 0,
    y: 0
  };

  imgMain.onload = function(){
    ctx.drawImage(imgMain, 0, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
  };


  let sources = {
      mountain: "images/material.png",
      enemy: "images/Enemy.png"
  };

  loadImages(sources, function(images){
    for (let x in mapArray) {
      for (let y in mapArray[x]) {
        if (mapArray[x][y] == 1) {
          ctx.drawImage(images.mountain, 32, 65, 32, 32, y * gridLength, x * gridLength, gridLength, gridLength);
        } else if (mapArray[x][y] == 2) {
          ctx.drawImage(images.enemy, 7, 40, 104, 135, y * gridLength, x * gridLength, gridLength, gridLength);
        }
      }
    }
  });
});

let targetImg, targetBlock, cutImagePositionX;
var currentQuestion = 0;
// Click Event
$(document).on("keydown", function(event){
  // console.log(currentImgMain.x);
  
  targetImg = {
    x: -1,
    y: -1
  };
  targetBlock = {
    x: -1,
    y: -1
  };
  event.preventDefault();
  switch(event.code){
    case "ArrowLeft":
      targetImg.x = currentImgMain.x - gridLength;
      targetImg.y = currentImgMain.y;
      cutImagePositionX = 175;
      break;
    case "ArrowUp":
      targetImg.x = currentImgMain.x;
      targetImg.y = currentImgMain.y - gridLength;
      cutImagePositionX = 355;
      break;
    case "ArrowRight":
      targetImg.x = currentImgMain.x + gridLength;
      targetImg.y = currentImgMain.y;
      cutImagePositionX = 540;
      break;
    case "ArrowDown":
      targetImg.x = currentImgMain.x;
      targetImg.y = currentImgMain.y + gridLength;
      cutImagePositionX = 0;
      break;
    default:
      return;
  }

  if(targetImg.x <= 562.5 && targetImg.x >= 0 && targetImg.y <= 562.5 && targetImg.y >= 0){
    targetBlock.x = targetImg.y / gridLength;
    targetBlock.y = targetImg.x / gridLength;
  }else{
    targetBlock.x = -1;
    targetBlock.y = -1;
  }

  ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength, gridLength);

  if(targetBlock.x != -1 && targetBlock.y != -1){
    document.getElementById("answer").style.opacity = 0;
    switch(mapArray[targetBlock.x][targetBlock.y]){
      case 0:
        $("#talkBox").text("");
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        break;
      case 1:
        $("#talkBox").text("有山");
        break;
      case 3: // Final Stop
        var fin = 0;
        for(var i = 0; i < 16; i++) {
          for(var j = 0; j < 16; j++) {
            if(mapArray[i][j] == 2) {
              fin = 1;
            }
          }
        }
        if(fin == 0) {
          $("#talkBox").text("抵達終點");
          document.getElementById("refresh").style.opacity = 1;
        }
        else
          $("#talkBox").text("請把每個軍人打敗後再過來");
        currentImgMain.x = targetImg.x;
        currentImgMain.y = targetImg.y;
        break;
      case 2: //Enemy
        currentQuestion = Math.floor(Math.random() * 10);
        $("#talkBox").text(questions[currentQuestion].question);
        $("#input1").text(questions[currentQuestion].choice[0]);
        $("#input2").text(questions[currentQuestion].choice[1]);
        $("#input3").text(questions[currentQuestion].choice[2]);
        $("#input4").text(questions[currentQuestion].choice[3]);
        document.getElementById("answer").style.opacity = 1;
        // document.getElementById("input1").innerHTML = questions[0].choice[0];
        break;
    }
  } else{
    $("#talkBox").text("邊界");
  }

    ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
});

function progress() {
  // $("#talkBox").text(document.getElementById("input").value);
  $.each($(":radio"),function(i, val) {
    if(val.checked) {
      if(i == questions[currentQuestion].ans) {
        $("#talkBox").text("正確");
        mapArray[targetBlock.x][targetBlock.y] = 0;
        mapArray[targetBlock.x][targetBlock.y + 1] = 0;
        ctx.drawImage(imgMain, cutImagePositionX, 0, 80, 130, currentImgMain.x, currentImgMain.y, gridLength, gridLength);
        // currentImgMain.x = targetImg.x;
        // currentImgMain.y = targetImg.y;
        console.log(targetBlock.x);
      }
      else {
        $("#talkBox").text("錯誤");
      }
        
    }
  });
}

function onemoretime() {
  location.reload();
}