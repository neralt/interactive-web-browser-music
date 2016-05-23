window.addEventListener("load", init);//
function init(){
	var stage = new createjs.Stage("myCanvas");
    createjs.Touch.enable(stage);//タッチパネルならタッチをオーケーにする

    //スタティックなメソッドなのでオブジェクト作らなくとも、早速使える
    //("ファイルパス","各ID",同時発音数？)
        //createjs.Sound.registerSound("music/damfunk_all.wav", "damfunk",1);
        //createjs.Sound.registerSound("music/damfunk_drum.wav", "damfunk_drum",1);
        //createjs.Sound.registerSound("music/damfunk_synth.wav", "damfunk_synth",1);


    //　var インスタンス名 = --.--.createInstance("ID");
    //  再生停止等をするインスタンスを、各ファイルごとに作成する
        //var damfunk = createjs.Sound.createInstance("damfunk");
        //var damfunk_drum = createjs.Sound.createInstance("damfunk_drum");
        //var damfunk_synth = createjs.Sound.createInstance("damfunk_synth");
  

    //バックグラウンド、さしあたって黒塗りしています。
	var backGround = new createjs.Container();
	var backRect = new createjs.Shape();
    backRect.graphics.beginFill("black").setStrokeStyle(3).beginStroke("black");
    backRect.graphics.drawRect(0,0,stage.canvas.width,stage.canvas.height);
    backRect.graphics.endFill();
    backGround.addChild(backRect);
    stage.addChild(backRect);

    var dragPointX;
    var dragPointY;

	var N = new createjs.Container();
	var textN = new createjs.Text("N", "200px serif", "green");
    textN.textAlign = "center";
    textN.textBaseline = "middle";
    
    N.compositeOperation = "lighter";
    textN.compositeOperation = "lighter";
    
    //textN.textBaseline = “middle”;
    N.x=70;
    N.y=100;
    N.addChild(textN);
    stage.addChild(N);

    N.addEventListener("mousedown", handleDown);
    N.addEventListener("pressmove", handleMove);
    N.addEventListener("pressup", handleUp);

    function handleDown(event) {
        // ドラッグを開始した座標を覚えておく
        dragPointX = stage.mouseX - N.x;
        dragPointY = stage.mouseY - N.y;
        // ボールを半透明にする
        N.alpha = 0.5;
        //damfunk.play();//サウンド用のインスタンス.play();で再生。そのファイルだけ。
        //createjs.Sound.play("damfunk");
    
    }
      // ボールを押した状態で動かしたときの処理です
    function handleMove(event) {
        // ボールはマウス座標に追随する
        // ただしドラッグ開始地点との補正をいれておく
        N.x = stage.mouseX - dragPointX;
        N.y = stage.mouseY - dragPointY;
    }
      // ボールからマウスを離したときの処理です
    function handleUp(event) {
        // ボールを元の透明度に戻す
        N.alpha = 1.0;
        //damfunk.stop();//サウンドインスタンス.stop();でそのファイルだけ停止。
    }

    var dragPointEX;
    var dragPointEY;
    var EKaiten = false;

    var E = new createjs.Container();
	var textE = new createjs.Text("E", "200px serif", "red");

    E.addChild(textE);
    textE.textAlign = "center";
    textE.textBaseline = "middle";

    E.compositeOperation = "lighter";
    textE.compositeOperation = "lighter";

    E.x=220;
    E.y=100;
    stage.addChild(E);

    E.addEventListener("mousedown", handleDownE);
    E.addEventListener("pressmove", handleMoveE);
    E.addEventListener("pressup", handleUpE);

    function handleDownE(event) {
        // ドラッグを開始した座標を覚えておく
        dragPointEX = stage.mouseX - E.x;
        dragPointEY = stage.mouseY - E.y;
        // ボールを半透明にする
        E.alpha = 0.5;
        //damfunk_drum.play();
    }
      // ボールを押した状態で動かしたときの処理です
    function handleMoveE(event) {
        // ボールはマウス座標に追随する
        // ただしドラッグ開始地点との補正をいれておく
        E.x = stage.mouseX - dragPointEX;
        E.y = stage.mouseY - dragPointEY;
        EKaiten = true;
    }
      // ボールからマウスを離したときの処理です
    function handleUpE(event) {
        // ボールを元の透明度に戻す
        E.alpha = 1.0;
        //
        //damfunk_drum.stop();
    }

    var dragPointRX;
    var dragPointRY;

    var RKaiten = false;

    var R = new createjs.Container();
	var textR = new createjs.Text("R", "200px serif", "blue");
    R.addChild(textR);

    textR.textAlign = "center";
    textR.textBaseline = "middle";

    R.compositeOperation = "lighter";
    textR.compositeOperation = "lighter";
    
    R.x=350;
    R.y=100;
    stage.addChild(R);

    R.addEventListener("mousedown", handleDownR);
    R.addEventListener("pressmove", handleMoveR);
    R.addEventListener("pressup", handleUpR);

    function handleDownR(event) {
        // ドラッグを開始した座標を覚えておく
        dragPointRX = stage.mouseX - R.x;
        dragPointRY = stage.mouseY - R.y;
        // ボールを半透明にする
        R.alpha = 0.5;
        //damfunk_synth.play();
        textL.filters = [new createjs.ColorFilter(0.2, 1, 1, 1)];
    }
      // ボールを押した状態で動かしたときの処理です
    function handleMoveR(event) {
        // ボールはマウス座標に追随する
        // ただしドラッグ開始地点との補正をいれておく
        R.x = stage.mouseX - dragPointRX;
        R.y = stage.mouseY - dragPointRY;
        RKaiten = true;
    }
      // ボールからマウスを離したときの処理です
    function handleUpR(event) {
        // ボールを元の透明度に戻す
        R.alpha = 1.0;
        //damfunk_synth.stop();
        
    }


    var dragPointLX;
    var dragPointLY;

    var L = new createjs.Container();
    var textL = new createjs.Text("L", "200px serif", "blue");
    L.addChild(textL);

    textL.textAlign = "center";
    textL.textBaseline = "middle";

    L.compositeOperation = "lighter";
    textL.compositeOperation = "lighter";

    L.x=490;
    L.y=100;
    stage.addChild(L);

    L.addEventListener("mousedown", handleDownL);
    L.addEventListener("pressmove", handleMoveL);
    L.addEventListener("pressup", handleUpL);

    function handleDownL(event) {
        // ドラッグを開始した座標を覚えておく
        dragPointLX = stage.mouseX - L.x;
        dragPointLY = stage.mouseY - L.y;
        // ボールを半透明にする
        L.alpha = 0.5;
        //createjs.Sound.stop();
       
    }
      // ボールを押した状態で動かしたときの処理です
    function handleMoveL(event) {
        // ボールはマウス座標に追随する
        // ただしドラッグ開始地点との補正をいれておく
        L.x = stage.mouseX - dragPointLX;
        L.y = stage.mouseY - dragPointLY;
    }
      // ボールからマウスを離したときの処理です
    function handleUpL(event) {
        // ボールを元の透明度に戻す
        L.alpha = 1.0;
        EKaiten = false;
        RKaiten = false;
        TKaiten = false;
        //damfunk_synth.stop();
        
    }

    var dragPointTX;
    var dragPointTY;

    var TKaiten = false;

    var T = new createjs.Container();
    var textT = new createjs.Text("T", "400px serif", "Red");
    T.addChild(textT);

    textT.textAlign = "center";
    textT.textBaseline = "middle";

    T.compositeOperation = "lighter";
    textT.compositeOperation = "lighter";

    T.x=140;
    T.y=400;
    stage.addChild(T);

    T.addEventListener("mousedown", handleDownT);
    T.addEventListener("pressmove", handleMoveT);
    T.addEventListener("pressup", handleUpT);

    function handleDownT(event) {
        // ドラッグを開始した座標を覚えておく
        dragPointTX = stage.mouseX - T.x;
        dragPointTY = stage.mouseY - T.y;
        // ボールを半透明にする
        T.alpha = 0.5;
       
    }
      // ボールを押した状態で動かしたときの処理です
    function handleMoveT(event) {
        // ボールはマウス座標に追随する
        // ただしドラッグ開始地点との補正をいれておく
        T.x = stage.mouseX - dragPointTX;
        T.y = stage.mouseY - dragPointTY;
    }
      // ボールからマウスを離したときの処理です
    function handleUpT(event) {
        // ボールを元の透明度に戻す
        T.alpha = 1.0;
        TKaiten = true;
        //damfunk_synth.stop();
        
    }



    // 時間経過
      createjs.Ticker.addEventListener("tick", handleTick);
      function handleTick() {
        stage.update(); // 画面更新

        if(EKaiten){
            E.rotation += 5;
        }

        if(RKaiten){
            R.rotation += 10;
        }

        if(TKaiten){
            T.rotation += 3;
        }
        
      }


}