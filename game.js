const gameState = {
}

const config = {
    type: Phaser.AUTO,
    width: 1300,
    height: 600,
    scene: [startScene, scene1, credits],
    physics: {
        default: 'arcade',
        arcade: { 
        }
    },
    scale: {
        parent: 'game',
        autoCenter: Phaser.Scale.CENTER_BOTH
      }
};

const game = new Phaser.Game(config);
