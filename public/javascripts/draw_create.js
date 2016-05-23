window.addEventListener("load", init);//
function init(){
    var stage = new createjs.Stage("myCanvas");
    createjs.Touch.enable(stage);//タッチパネルならタッチをオーケーにする

    //スタティックなメソッドなのでオブジェクト作らなくとも、早速使える
    //("ファイルパス","各ID",同時発音数？)
    
    //　var インスタンス名 = --.--.createInstance("ID");
    //  再生停止等をするインスタンスを、各ファイルごとに作成する
    

    //バックグラウンド、さしあたって黒塗りしています。
    var backGround = new createjs.Container();
    var backRect = new createjs.Shape();
    backRect.graphics.beginFill("black").setStrokeStyle(3).beginStroke("black");
    backRect.graphics.drawRect(0,0,stage.canvas.width,stage.canvas.height);
    backRect.graphics.endFill();
    backGround.addChild(backRect);
    stage.addChild(backRect);

    var dragPointCircleX;
    var dragPointCircleY;
    var shape = new createjs.Shape();
      // shape.graphics.----シェイプに、塗りの色を指定
    shape.graphics.beginFill("DarkRed");
      // 円を描く
    shape.graphics.drawCircle(0, 0, 100);
    shape.x = stage.canvas.width/2;
    shape.y = stage.canvas.height/3;
    stage.addChild(shape);

    shape.addEventListener("mousedown", handleDown);
    shape.addEventListener("pressmove", handleMove);
    shape.addEventListener("pressup", handleUp);

    function handleDown(event) {
        // ドラッグを開始した座標を覚えておく
        dragPointCircleX = stage.mouseX - shape.x;
        dragPointCircleY = stage.mouseY - shape.y;
        // ボールを半透明にする
        shape.alpha = 0.5;
        //createjs.Sound.play("damfunk");
    
    }
      // ボールを押した状態で動かしたときの処理です
    function handleMove(event) {
        // ボールはマウス座標に追随する
        // ただしドラッグ開始地点との補正をいれておく
        shape.x = stage.mouseX - dragPointCircleX;
        shape.y = stage.mouseY - dragPointCircleY;
    }
      // ボールからマウスを離したときの処理です
    function handleUp(event) {
        // ボールを元の透明度に戻す
        shape.alpha = 1.0;
    }



    // 時間経過
      createjs.Ticker.addEventListener("tick", handleTick);
      function handleTick() {
        socket.emit('chat message',shape.x);
        stage.update(); // 画面更新
      }


}