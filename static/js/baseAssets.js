//create player
function createPlayer(){
    gameState.player = this.physics.add.sprite(1088, 816,'player');
}

//create controls
gameState.itemcounter = 0;
function createControls(){
    gameState.keys = this.input.keyboard.addKeys("W,A,S,D,C,T,I");
    gameState.cursors = this.input.keyboard.createCursorKeys();
}

//update controls
gameState.keydown = 0;
var registerOnce;
function updateControls(){

    //debugging commands 

    //C = win condition met
    if(gameState.keys.C.isDown){
        for(var i in gameState.winningItems){
            gameState.winningItems[i].completed = true;
        };
    };
    //T = time to 0
    if(gameState.keys.T.isDown){
        gameState.totalTime = 1;
    };

    //I = add target item to inventory
    if(gameState.keys.I.isDown){
        if(!registerOnce){
            addItem.call(this, gameState.winningItems[gameState.itemcounter]);
            gameState.itemcounter+= 1;
            registerOnce = true;
        }
    };
    if(gameState.keys.I.isUp){
        registerOnce = false;
    }

    //debugging commands ^^

    if(gameState.keys.A.isDown){
        gameState.keydown = 1;
        gameState.player.setVelocityX(-100)
        gameState.player.anims.play('moveleft', true);
        return

    }else if(gameState.keys.D.isDown){
        gameState.keydown = 2;
        gameState.player.setVelocityX(100)
        gameState.player.anims.play('moveright', true);
        return

    }else if(gameState.keys.W.isDown){
        gameState.keydown = 3;
        gameState.player.setVelocityY(-100);
        gameState.player.anims.play('moveup', true);
        return

    }else if(gameState.keys.S.isDown){
        gameState.keydown = 4;
        gameState.player.setVelocityY(100)
        gameState.player.anims.play('movedown', true);
        return
    }
    else{
        gameState.player.setVelocityX(0);
        gameState.player.setVelocityY(0);

        if(gameState.keydown == 1){
            gameState.player.anims.play('leftidle', true);
        }else if(gameState.keydown == 2){
            gameState.player.anims.play('rightidle', true);
        }else if(gameState.keydown == 3){
            gameState.player.anims.play('upidle', true);
        }else if(gameState.keydown == 4){
            gameState.player.anims.play('downidle', true);
        }else{
            gameState.keydown == 0;
        }
    }
}

//set collisions
function createCollisions(){
    //shop collisions
    for(var i in gameState.shops){
        this.physics.add.collider(gameState.player, gameState.shops[i]);
    };

    //map collisions     
    this.physics.world.setBounds(0, 0, gameState.widthInPixels, gameState.heightInPixels);
    gameState.player.setCollideWorldBounds(true);  
}

//set item iteractive
function setItemInteractive(item){
    item.on('pointerup', ()=>{
        addItem.call(this, item);
    });
};

//set shop interactive
function setShopInteractive(shop){
    shop.on('pointerup', ()=>{
        addShopWindow.call(this, shop);
    });
};

//create cameras
function createCameras(){
    this.cameras.main.setBounds(0, 0, gameState.map.widthInPixels, gameState.map.heightInPixels);
    this.cameras.main.startFollow(
         gameState.player,
         true,
    );
};

//create winning item text
function createWinningItems(){
    gameState.winningItemsBackdrop = this.add.rectangle(0, 0, 50, 300, 0xFFFFFF);
    gameState.winningItemsBackdrop.setScrollFactor(0);
    Phaser.Display.Align.In.LeftCenter(gameState.winningItemsBackdrop, this.add.zone(650, 300, 1300, 600), 0, 0);

    gameState.winningItemsText = this.add.text(0, 0, `Target\nItems`, {font: "12px Verdana", fill: "#000000", align: "center"});
    gameState.winningItemsText.setScrollFactor(0);
    Phaser.Display.Align.In.TopCenter(gameState.winningItemsText, gameState.winningItemsBackdrop, 0, -5);

    gameState.blueshield.sprite = this.add.image(0, 0, gameState.blueshield.texture);
    gameState.blueshield.sprite.setScale(0.4);
    gameState.blueshield.sprite.setTint(0x000000);
    gameState.blueshield.sprite.setScrollFactor(0);
    Phaser.Display.Align.In.TopCenter(gameState.blueshield.sprite, gameState.winningItemsBackdrop, 0, -30);

    gameState.bluehelmet.sprite = this.add.image(0, 0, gameState.bluehelmet.texture);
    gameState.bluehelmet.sprite.setScale(0.4);
    gameState.bluehelmet.sprite.setTint(0x000000);
    gameState.bluehelmet.sprite.setScrollFactor(0);
    Phaser.Display.Align.In.TopCenter(gameState.bluehelmet.sprite, gameState.winningItemsBackdrop, 0, -80);

    gameState.firesword.sprite = this.add.image(0, 0, gameState.firesword.texture);
    gameState.firesword.sprite.setScale(0.4);
    gameState.firesword.sprite.setTint(0x000000);
    gameState.firesword.sprite.setScrollFactor(0);
    Phaser.Display.Align.In.TopCenter(gameState.firesword.sprite, gameState.winningItemsBackdrop, 0, -130);

    gameState.bookofdeath.sprite = this.add.image(0, 0, gameState.bookofdeath.texture);
    gameState.bookofdeath.sprite.setScale(0.4);
    gameState.bookofdeath.sprite.setTint(0x000000);
    gameState.bookofdeath.sprite.setScrollFactor(0);
    Phaser.Display.Align.In.TopCenter(gameState.bookofdeath.sprite, gameState.winningItemsBackdrop, 0, -180);

    gameState.royalcrown.sprite = this.add.image(0, 0, gameState.royalcrown.texture);
    gameState.royalcrown.sprite.setScale(0.4);
    gameState.royalcrown.sprite.setTint(0x000000);
    gameState.royalcrown.sprite.setScrollFactor(0);
    Phaser.Display.Align.In.TopCenter(gameState.royalcrown.sprite, gameState.winningItemsBackdrop, 0, -230);
    
};

//create inventory
function createInventory(){
    gameState.inventorylist = [];
    // gameState.inventory = this.add.rectangle(440, 550, 275, 50, 0x000000);
    gameState.inventory = this.add.sprite(440, 550, 'inventory');
    gameState.inventory.setScrollFactor(0);
    Phaser.Display.Align.In.BottomCenter(gameState.inventory, this.add.zone(650, 300, 1300, 600), 0, -10);
    
    //slot1
    gameState.slot1 = this.add.sprite(440, 550, 'inventorySlot');
    gameState.slot1.setScrollFactor(0);
    gameState.slot1full = false;
    Phaser.Display.Align.In.LeftCenter(gameState.slot1, gameState.inventory, -6.5);

    gameState.slot1.setInteractive();
    gameState.slot1.on('pointerover', () =>{
        if(gameState.slot1full == true){
            gameState.slot1HoverText.visible = true;
        }
    });
    gameState.slot1.on('pointerout', () =>{
        if(gameState.slot1full == true){
        gameState.slot1HoverText.visible = false;
        }
    });
    
    
    //slot2
    gameState.slot2 = this.add.sprite(440, 550, 'inventorySlot');
    gameState.slot2.setScrollFactor(0);
    gameState.slot2full = false;
    Phaser.Display.Align.In.LeftCenter(gameState.slot2, gameState.inventory, -61);
    
    gameState.slot2.setInteractive();
    gameState.slot2.on('pointerover', () =>{
        if(gameState.slot2full == true){
        gameState.slot2HoverText.visible = true;
        }
    });
    gameState.slot2.on('pointerout', () =>{
        if(gameState.slot2full == true){
        gameState.slot2HoverText.visible = false;
        }
    });
     
    //slot3
    gameState.slot3 = this.add.sprite(440, 550, 'inventorySlot');
    gameState.slot3.setScrollFactor(0);
    gameState.slot3full = false;
    Phaser.Display.Align.In.LeftCenter(gameState.slot3, gameState.inventory, -115.5);

    gameState.slot3.setInteractive();
    gameState.slot3.on('pointerover', () =>{
        if(gameState.slot3full == true){
        gameState.slot3HoverText.visible = true;
        }
    });
    gameState.slot3.on('pointerout', () =>{
        if(gameState.slot3full == true){
        gameState.slot3HoverText.visible = false;
        }
    });
    
    //slot4
    gameState.slot4 = this.add.sprite(440, 550, 'inventorySlot');
    gameState.slot4.setScrollFactor(0);
    gameState.slot4full = false;
    Phaser.Display.Align.In.LeftCenter(gameState.slot4, gameState.inventory, -170);

    gameState.slot4.setInteractive();
    gameState.slot4.on('pointerover', () =>{
        if(gameState.slot4full == true){
        gameState.slot4HoverText.visible = true;
        }
    });
    gameState.slot4.on('pointerout', () =>{
        if(gameState.slot4full == true){
        gameState.slot4HoverText.visible = false;
        }
    });
    
    //slot5
    gameState.slot5 = this.add.sprite(440, 550, 'inventorySlot');
    gameState.slot5.setScrollFactor(0);
    gameState.slot5full = false;
    Phaser.Display.Align.In.LeftCenter(gameState.slot5, gameState.inventory, -224.5);

    gameState.slot5.setInteractive();
    gameState.slot5.on('pointerover', () =>{
        if(gameState.slot5full == true){
        gameState.slot5HoverText.visible = true;
        }
    });
    gameState.slot5.on('pointerout', () =>{
        if(gameState.slot5full == true){
        gameState.slot5HoverText.visible = false;
        }
    }); 

    //slot6
    gameState.slot6 = this.add.sprite(440, 550, 'inventorySlot');
    gameState.slot6.setScrollFactor(0);
    gameState.slot6full = false;
    Phaser.Display.Align.In.LeftCenter(gameState.slot6, gameState.inventory, -279);

    gameState.slot6.setInteractive();
    gameState.slot6.on('pointerover', () =>{
        if(gameState.slot6full == true){
        gameState.slot6HoverText.visible = true;
        }
    });
    gameState.slot6.on('pointerout', () =>{
        if(gameState.slot6full == true){
        gameState.slot6HoverText.visible = false;
        }
    });
}

//create menu
gameState.menuWindowOpen = false;
function createMenuIcon(){
    gameState.menuIcon = this.add.image(100, 100, 'menuIcon');
    gameState.menuIcon.setScrollFactor(0);
    Phaser.Display.Align.In.TopRight(gameState.menuIcon, this.add.zone(650, 300, 1300, 600), 0, 0);
    gameState.menuIcon.setInteractive();

    gameState.menuIcon.on('pointerover', () =>{
        gameState.menuIcon.setTint(0xA9A9A9);
        gameState.hoverAudio.play();
        gameState.hoverAudio.setVolume(10);
    });
    gameState.menuIcon.on('pointerout', () =>{
        gameState.menuIcon.setTint(0xFFFFFF);
    });

    gameState.menuIcon.on('pointerup', ()=>{
        gameState.menuWindowOpen = true; 
        gameState.menuAudio.play();   

        gameState.menuWindow = this.add.image(100, 100, 'menuWindow');
        Phaser.Display.Align.In.Center(gameState.menuWindow, this.add.zone(650, 300, 1300, 600));
        gameState.menuWindow.setScrollFactor(0);

        gameState.menuRestart = this.add.image(100, 100, 'menuRestart');
        Phaser.Display.Align.In.Center(gameState.menuRestart, gameState.menuWindow, 0, -50);
        gameState.menuRestart.setScrollFactor(0);
        gameState.menuRestart.setInteractive();

        gameState.menuRestart.on('pointerover', () =>{
            gameState.menuRestart.setTint(0xA9A9A9);
            gameState.hoverAudio.play();
            gameState.hoverAudio.setVolume(10);
        });
        gameState.menuRestart.on('pointerout', () =>{
            gameState.menuRestart.setTint(0xFFFFFF);
        });
        gameState.menuRestart.on('pointerup', ()=>{
            gameState.restartAudio.play();
            gameState.restartAudio.setVolume(2);
            sleep.call(this, 500).then(() => {
                gameState.backgroundMusic.pause();
                this.scene.restart();
            })
        });

        gameState.menuStartScene = this.add.image(100, 100, 'menuStartScene');
        Phaser.Display.Align.In.Center(gameState.menuStartScene, gameState.menuWindow, 0, 100);
        gameState.menuStartScene.setScrollFactor(0);
        gameState.menuStartScene.setInteractive();

        gameState.menuStartScene.on('pointerover', () =>{
            gameState.menuStartScene.setTint(0xA9A9A9);
            gameState.hoverAudio.play();
            gameState.hoverAudio.setVolume(10);
        });
        gameState.menuStartScene.on('pointerout', () =>{
            gameState.menuStartScene.setTint(0xFFFFFF);
        });
        gameState.menuStartScene.on('pointerup', ()=>{
            gameState.startSceneAudio.play();
            sleep.call(this, 1000).then(() => {
                gameState.backgroundMusic.pause();
                this.scene.stop(gameState.currentScene);
                this.scene.start('startScene');            
            })
        });

        gameState.menuExit = this.add.image(100, 100, 'menuExit');
        Phaser.Display.Align.In.TopRight(gameState.menuExit, gameState.menuWindow);
        gameState.menuExit.setScrollFactor(0);
        gameState.menuExit.setInteractive();

        gameState.menuExit.on('pointerover', () =>{
            gameState.menuExit.setTint(0xA9A9A9);
            gameState.hoverAudio.play();
            gameState.hoverAudio.setVolume(10);
        });
        gameState.menuExit.on('pointerout', () =>{
            gameState.menuExit.setTint(0xFFFFFF);
        });
        gameState.menuExit.on('pointerup', ()=>{
            gameState.exitAudio.play();
            gameState.menuWindowOpen = false;
            gameState.menuExit.destroy();
            gameState.menuWindow.destroy();
            gameState.menuRestart.destroy();
            gameState.menuStartScene.destroy();
        });

    });
};

//create timer
function createTimer(){
    gameState.totalTime = 600;
    gameState.timerDisplayBackdrop = this.add.rectangle(0, 0, 80, 30, 0xFFFFFF);
    gameState.timerDisplayBackdrop.setScrollFactor(0);
    Phaser.Display.Align.In.TopCenter(gameState.timerDisplayBackdrop, this.add.zone(650, 300, 1300, 600), 0, -5);
    gameState.timerDisplay = this.add.text(0, 0, "10:00", {font: "20px Verdana", fill: "#000000"});
    gameState.timerDisplay.setScrollFactor(0);
    Phaser.Display.Align.In.Center(gameState.timerDisplay, gameState.timerDisplayBackdrop);
    
    
    gameState.timer = this.time.addEvent({
        callback: tick,
        delay: 1000,
        callbackScope: this,
        loop: true,
    
    });
    
    function tick(){
        gameState.totalTime--;
        var minutes = Math.floor(gameState.totalTime / 60);
        var seconds = gameState.totalTime - (minutes * 60);
        gameState.timeString = addZeros(minutes) + ":" + addZeros(seconds);
        gameState.timerDisplay.text = gameState.timeString;

        gameState.loseWindowOpen = false;
        if(gameState.totalTime == 0 || gameState.winWindowOpen == true){
            this.time.removeEvent(gameState.timer);
            
            //game over event
            if(gameState.totalTime == 0){
                gameState.loseWindowOpen = true;
                gameState.backgroundMusic.pause();
                gameState.loseAudio.play();
                //lose window
                gameState.loseWindow = this.add.sprite(500, 100, 'winWindow');
                gameState.loseWindow.setScrollFactor(0);
                Phaser.Display.Align.In.Center(gameState.loseWindow, this.add.zone(650, 300, 1300, 600));

                //lose text
                gameState.loseText = this.add.text(500, 100, `Oops, you ran out of time!\nYou'll get it next time!`, {font: "30px Verdana", fill: "#000000", align: "center"});
                gameState.loseText.setScrollFactor(0);
                Phaser.Display.Align.In.TopCenter(gameState.loseText, gameState.loseWindow, 0, -60);

                //restart game
                gameState.loseRestartGame = this.add.sprite(500, 100, 'menuRestart');
                gameState.loseRestartGame.setScrollFactor(0);
                Phaser.Display.Align.In.Center(gameState.loseRestartGame, gameState.loseWindow, 0, 0);

                gameState.loseRestartGame.setInteractive();

                gameState.loseRestartGame.on('pointerover', () =>{
                    gameState.loseRestartGame.setTint(0xA9A9A9);
                    gameState.hoverAudio.play();
                    gameState.hoverAudio.setVolume(10);
                });
                gameState.loseRestartGame.on('pointerout', () =>{
                    gameState.loseRestartGame.setTint(0xFFFFFF);
                });
                gameState.loseRestartGame.on('pointerup', ()=>{
                    gameState.restartAudio.play();
                    sleep.call(this, 500).then(() => {
                        this.scene.restart();
                    })
                });

                //back to startscene
                gameState.loseStartScene = this.add.sprite(500, 100, 'menuStartScene');
                gameState.loseStartScene.setScrollFactor(0);
                Phaser.Display.Align.In.Center(gameState.loseStartScene, gameState.loseWindow, 0, 120);

                gameState.loseStartScene.setInteractive();

                gameState.loseStartScene.on('pointerover', () =>{
                    gameState.loseStartScene.setTint(0xA9A9A9);
                    gameState.hoverAudio.play();
                    gameState.hoverAudio.setVolume(10);
                });
                gameState.loseStartScene.on('pointerout', () =>{
                    gameState.loseStartScene.setTint(0xFFFFFF);
                });
                gameState.loseStartScene.on('pointerup', ()=>{
                    gameState.startSceneAudio.play();
                    sleep.call(this, 500).then(() => {
                        this.scene.start('startScene');
                    })
                });
            }else{
                //win window
                gameState.backgroundMusic.pause();
                gameState.winAudio.play();
                gameState.winWindow = this.add.sprite(500, 100, 'winWindow');
                gameState.winWindow.setScrollFactor(0);
                Phaser.Display.Align.In.Center(gameState.winWindow, this.add.zone(650, 300, 1300, 600));

                //win text
                gameState.winText = this.add.text(500, 100, `Congrats, you got the all the items in\n${gameState.timeString}!`, {font: "30px Verdana", fill: "#000000", align: "center"});
                gameState.winText.setScrollFactor(0);
                Phaser.Display.Align.In.TopCenter(gameState.winText, gameState.winWindow, 0, -60);

                //restart game
                gameState.winRestartGame = this.add.sprite(500, 100, 'menuRestart');
                gameState.winRestartGame.setScrollFactor(0);
                Phaser.Display.Align.In.Center(gameState.winRestartGame, gameState.winWindow, 0, 0);

                gameState.winRestartGame.setInteractive();
                
                gameState.winRestartGame.on('pointerover', () =>{
                    gameState.winRestartGame.setTint(0xA9A9A9);
                    gameState.hoverAudio.play();
                    gameState.hoverAudio.setVolume(10);
                });
                gameState.winRestartGame.on('pointerout', () =>{
                    gameState.winRestartGame.setTint(0xFFFFFF);
                });
                gameState.winRestartGame.on('pointerup', ()=>{
                    gameState.restartAudio.play();
                    
                    sleep.call(this, 500).then(() => {
                        this.scene.restart();
                    })

                });

                //back to startscene
                gameState.winStartScene = this.add.sprite(500, 100, 'menuStartScene');
                gameState.winStartScene.setScrollFactor(0);
                Phaser.Display.Align.In.Center(gameState.winStartScene, gameState.winWindow, 0, 120);

                gameState.winStartScene.setInteractive();

                gameState.winStartScene.on('pointerover', () =>{
                    gameState.winStartScene.setTint(0xA9A9A9);
                    gameState.hoverAudio.play();
                    gameState.hoverAudio.setVolume(10);
                });
                gameState.winStartScene.on('pointerout', () =>{
                    gameState.winStartScene.setTint(0xFFFFFF);
                });
                gameState.winStartScene.on('pointerup', ()=>{
                    gameState.startSceneAudio.play()
                    sleep.call(this, 1000).then(() => {
                        this.scene.start('startScene');
                    })
                });

            }
        }
    };
    
    function addZeros(num) {
        if (num < 10) {
            num = "0" + num;
        }
        return num;
    };
}