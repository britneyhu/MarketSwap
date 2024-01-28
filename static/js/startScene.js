class startScene extends Phaser.Scene{
    constructor(){
        super({key: 'startScene'});
    }
    preload(){
        //load audio
        this.load.audio('menuMusic', [
            'static/audio/music/medieval_loop.ogg',
            'static/audio/music/medieval_loop.mp3'
        ]);
        this.load.audio('hover', [
            'static/audio/ui/hover.ogg',
            'static/audio/ui/hover.mp3'
        ]);
        this.load.audio('startGame', [
            'static/audio/ui/startScene.ogg',
            'static/audio/ui/startScene.mp3'
        ]);
        this.load.audio('credits', [
            'static/audio/ui/menu.ogg',
            'static/audio/ui/menu.mp3'
        ]);

        this.load.image('startButton', 'static/images/ui/startButton.png');
        this.load.image('creditsButton', 'static/images/ui/creditsButton.png');
        this.load.image('startSceneBackground', 'static/images/ui/startSceneBackground.png');
        this.load.image('title', 'static/images/ui/title.png');

    }

    create(){
        //cursor
        this.input.setDefaultCursor('url(static/images/ui/defaultCursor.png), pointer');

        //music
        const menuMusic = this.sound.add('menuMusic');
        menuMusic.loop = true;
        menuMusic.play();

        //audio
        gameState.hoverAudio = this.sound.add('hover');
        gameState.startGame = this.sound.add('startGame');
        gameState.credits = this.sound.add('credits');

        //background image
        gameState.startSceneBackground = this.add.image(0, 0, 'startSceneBackground');
        Phaser.Display.Align.In.Center(gameState.startSceneBackground, this.add.zone(564, 308, 1128, 615), 0, 0);

        //title
        // gameState.startText = this.add.text(440, 540, 'Market Swap Start Scene', {font: "50px Verdana", fill: "#FFFFFF"});
        // Phaser.Display.Align.In.TopCenter(gameState.startText, this.add.zone(564, 308, 1128, 615), 0, -10);
        gameState.title = this.add.image(0, 0, 'title');
        Phaser.Display.Align.In.TopCenter(gameState.title, this.add.zone(564, 308, 1128, 615), 0, -10);

        //start button
        gameState.startButton = this.add.image(100, 100, 'startButton');
        Phaser.Display.Align.In.Center(gameState.startButton, this.add.zone(564, 308, 1128, 615), 0, 0);
        gameState.startButton.setInteractive();

        gameState.startButton.on('pointerover', () =>{
            gameState.startButton.setTint(0xA9A9A9);
            gameState.hoverAudio.play();
            gameState.hoverAudio.setVolume(10);
        });
        gameState.startButton.on('pointerout', () =>{
            gameState.startButton.setTint(0xFFFFFF);
        });
        gameState.startButton.on('pointerup', ()=>{
            menuMusic.pause();
            gameState.startGame.play();
            this.scene.stop('startScene');
            this.scene.start('scene1');
        });
        //credits button
        gameState.creditsButton = this.add.image(100, 100, 'creditsButton');
        Phaser.Display.Align.In.Center(gameState.creditsButton, this.add.zone(564, 308, 1128, 615), 0, 120);
        gameState.creditsButton.setInteractive();

        gameState.creditsButton.on('pointerover', () =>{
            gameState.creditsButton.setTint(0xA9A9A9);
            gameState.hoverAudio.play();
            gameState.hoverAudio.setVolume(10);
        });
        gameState.creditsButton.on('pointerout', () =>{
            gameState.creditsButton.setTint(0xFFFFFF);
        });
        gameState.creditsButton.on('pointerup', ()=>{
            menuMusic.pause();
            gameState.credits.play();
            this.scene.stop('startScene');
            this.scene.start('credits');
        });
    }

    update(){

    }

}