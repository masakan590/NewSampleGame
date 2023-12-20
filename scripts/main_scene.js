// シーンクラス
// 他のJSファイルから呼び出された場合はシーンを返す
class MainScene extends Phaser.Scene {

    // コンストラクタ
    constructor() {
        // 継承した「Phaser.Scene」クラスのコンストラクタの呼び出し
        super('MainScene');
    }

    // シーンの事前読み込み処理
    preload() {
         // 画像の読み込み(使用する時の名前, パス)
        this.load.image('background', 'assets/background.png');
        this.load.image('hanako', 'assets/hanako.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('apple', 'assets/Apple.png');
        this.load.image('orange', 'assets/ORANGE.png');
    }

    // シーン初期化処理
    create() {
         // 単体画像をシーンに追加(X座標,Y座標,画像名)
         this.background = this.add.image(0, 0, 'background').setOrigin(0)
         //花子を生成
         const hanako = this.physics.add.sprite(750, 400, 'hanako').setScale(0.2);
         //太郎を生成
         const taro = this.physics.add.sprite(50, 50, 'taro');

         this.hanako = hanako
         this.taro = taro

         for (let i = 0; i < 5; i++) {
            const randomX1 = Phaser.Math.Between(25, 775);
            const randomY1 = Phaser.Math.Between(25, 425);
            
            const randomX2 = Phaser.Math.Between(25, 775);
            const randomY2 = Phaser.Math.Between(25, 425);

            // Appleを配置する
            const apple = this.add.image(randomX1, randomY1, 'apple');
            apple.setDisplaySize(50, 50); // 50x50ピクセルにリサイズ
    
            // Orangeを配置する
            const orange = this.add.image(randomX2, randomY2, 'orange');
            orange.setDisplaySize(50, 50); // 50x50ピクセルにリサイズ
        }
    }
    update() {
        // キーボードの情報を取得
        let cursors = this.input.keyboard.createCursorKeys();
        if(cursors.up.isDown){
            console.log("Up!!");
            this.taro.setVelocityY(-40);// 上方向の速度を設定
            this.hanako.setVelocityY(40);
        } else if(cursors.down.isDown){
            console.log("down!!");
            this.taro.setVelocityY(40);// 下方向の速度を設定
            this.hanako.setVelocityY(-40);// 下方向の速度を設定
        }else if(cursors.left.isDown){
            console.log("Left");
            this.taro.setVelocityX(-40);// 左方向の速度を設定
            this.hanako.setVelocityX(40);// 下方向の速度を設定
        }else if(cursors.right.isDown){
            console.log("Right!!");
            this.taro.setVelocityX(40);// 右方向の速度を設定
            this.hanako.setVelocityX(-40);// 下方向の速度を設定
        }else{
            this.taro.setVelocityX(0);// 横方向の速度を0
            this.taro.setVelocityY(0);// 縦方向の速度を0
            this.hanako.setVelocityX(0);// 横方向の速度を0
            this.hanako.setVelocityY(0);// 縦方向の速度を0
        }
    }
}