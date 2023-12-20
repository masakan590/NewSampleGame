class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    preload() {
        this.load.image('background', 'assets/background.png');
        this.load.image('hanako', 'assets/hanako.png');
        this.load.image('taro', 'assets/taro.png');
        this.load.image('apple', 'assets/Apple.png');
        this.load.image('orange', 'assets/ORANGE.png');
    }

    

    create() {
        this.background = this.add.image(0, 0, 'background').setOrigin(0);
        const hanako = this.physics.add.sprite(750, 400, 'hanako').setScale(0.2);
        const taro = this.physics.add.sprite(50, 50, 'taro');
        this.hanako = hanako;
        this.taro = taro;

        const staticGroup = this.physics.add.staticGroup(); // 静的なオブジェクトをまとめるグループ

        for (let i = 0; i < 5; i++) {
            const randomX1 = Phaser.Math.Between(25, 775);
            const randomY1 = Phaser.Math.Between(25, 425);
            const randomX2 = Phaser.Math.Between(25, 775);
            const randomY2 = Phaser.Math.Between(25, 425);

            const apple = staticGroup.create(randomX1, randomY1, 'apple');
            apple.setDisplaySize(50, 50);

            const orange = staticGroup.create(randomX2, randomY2, 'orange');
            orange.setDisplaySize(50, 50);

            this.physics.add.collider(taro, staticGroup, function (taro, fruit) {
                this.physics.pause(); // ゲームを停止
            }, this);

            this.physics.add.collider(hanako, staticGroup, function (hanako, fruit) {
                fruit.destroy(); // フルーツを消す
            }, this);
        }
    }

    update() {
        let cursors = this.input.keyboard.createCursorKeys();
        if (cursors.up.isDown) {
            this.taro.setVelocityY(-40);
            this.hanako.setVelocityY(40);
        } else if (cursors.down.isDown) {
            this.taro.setVelocityY(40);
            this.hanako.setVelocityY(-40);
        } else if (cursors.left.isDown) {
            this.taro.setVelocityX(-40);
            this.hanako.setVelocityX(40);
        } else if (cursors.right.isDown) {
            this.taro.setVelocityX(40);
            this.hanako.setVelocityX(-40);
        } else {
            this.taro.setVelocityX(0);
            this.taro.setVelocityY(0);
            this.hanako.setVelocityX(0);
            this.hanako.setVelocityY(0);
        }
    }
}