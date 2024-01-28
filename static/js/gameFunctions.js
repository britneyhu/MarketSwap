//additem function
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

gameState.specialItem = false;
function addItem(item){
    if(item == gameState.woodshield || item == gameState.regularhelmet || item == gameState.silverdagger || item == gameState.whitebook
    || item == gameState.goldband){
        gameState.specialItem = true;
    }

    if(gameState.slot1full == false){
        if(gameState.specialItem){
            gameState.slot1full = true;
            gameState.specialItemAudio = this.sound.add('pickupitem');
            gameState.specialItemAudio.play();
            gameState.specialItemAudio.setVolume(2);

            this.tweens.add({
                targets: item,
                x: gameState.player.x,
                y: gameState.player.y,
                ease: 'linear',
                duration: 1500,
                onComplete: function(){
                    item.destroy();
                    
                }
            });
            
            sleep.call(this, 1500).then(() => {
                item.audio.play();
                gameState.specialItem = false;
                gameState.slot1Item = this.add.sprite(gameState.slot1.x, gameState.slot1.y, item.texture);
                gameState.slot1Item.texture = item.texture;
                gameState.slot1Item.name = item.name;
                gameState.slot1Item.setScale(0.6);
                gameState.slot1Item.setScrollFactor(0);
                gameState.inventorylist.push(item.texture);
        
                gameState.slot1HoverText = this.add.text(440, 540, `${gameState.slot1Item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(gameState.slot1HoverText, gameState.inventory, 0 , -45);
                gameState.slot1HoverText.setScrollFactor(0); 
                gameState.slot1HoverText.visible = false;  

                gameState.totalTime += 30;
                var timeText = this.add.text(0, 0, `+30 sec`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(timeText, gameState.timerDisplay, 0 , 30);
                timeText.setScrollFactor(0);        
                function destroytimetext(){
                    timeText.destroy();
                };
                this.time.delayedCall(3080, destroytimetext, this);
        
                var itemText = this.add.text(440, 540, `${item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(itemText, gameState.inventory, 0 , -45);
                itemText.setScrollFactor(0);        
                function destroyitemtext(){
                    itemText.destroy();
                };
                this.time.delayedCall(3080, destroyitemtext, this);

            });

        }else{
            item.destroy();
            gameState.slot1full = true;
            gameState.slot1Item = this.add.sprite(gameState.slot1.x, gameState.slot1.y, item.texture);
            gameState.slot1Item.texture = item.texture;
            gameState.slot1Item.name = item.name;
            gameState.slot1Item.setScale(0.6);
            gameState.slot1Item.setScrollFactor(0);
            gameState.inventorylist.push(item.texture);
    
            gameState.slot1HoverText = this.add.text(440, 540, `${gameState.slot1Item.name}`, {font: "20px Verdana", fill: "#000000"});
            Phaser.Display.Align.In.Center(gameState.slot1HoverText, gameState.inventory, 0 , -45);
            gameState.slot1HoverText.setScrollFactor(0); 
            gameState.slot1HoverText.visible = false;  
        }

    }else if(gameState.slot2full == false){
        if(gameState.specialItem){
            gameState.slot2full = true;
            gameState.specialItemAudio = this.sound.add('pickupitem');
            gameState.specialItemAudio.play();
            gameState.specialItemAudio.setVolume(2);

            this.tweens.add({
                targets: item,
                x: gameState.player.x,
                y: gameState.player.y,
                ease: 'linear',
                duration: 1500,
                onComplete: function(){
                    item.destroy();
                    
                }
            });
            
            sleep.call(this, 1500).then(() => {
                item.audio.play();
                gameState.specialItem = false;
                gameState.slot2Item = this.add.sprite(gameState.slot2.x, gameState.slot2.y, item.texture);
                gameState.slot2Item.texture = item.texture;
                gameState.slot2Item.name = item.name;
                gameState.slot2Item.setScale(0.6);
                gameState.slot2Item.setScrollFactor(0);
                gameState.inventorylist.push(item.texture);

                gameState.slot2HoverText = this.add.text(440, 540, `${gameState.slot2Item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(gameState.slot2HoverText, gameState.inventory, 0 , -45);
                gameState.slot2HoverText.setScrollFactor(0); 
                gameState.slot2HoverText.visible = false;  

                gameState.totalTime += 30;
                var timeText = this.add.text(0, 0, `+30 sec`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(timeText, gameState.timerDisplay, 0 , 30);
                timeText.setScrollFactor(0);        
                function destroytimetext(){
                    timeText.destroy();
                };
                this.time.delayedCall(3080, destroytimetext, this);
        
                var itemText = this.add.text(440, 540, `${item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(itemText, gameState.inventory, 0 , -45);
                itemText.setScrollFactor(0);        
                function destroyitemtext(){
                    itemText.destroy();
                };
                this.time.delayedCall(3080, destroyitemtext, this);

            });

        }else{
            item.destroy();
            gameState.slot2full = true;
            gameState.slot2Item = this.add.sprite(gameState.slot2.x, gameState.slot2.y, item.texture);
            gameState.slot2Item.texture = item.texture;
            gameState.slot2Item.name = item.name;
            gameState.slot2Item.setScale(0.6);
            gameState.slot2Item.setScrollFactor(0);
            gameState.inventorylist.push(item.texture);

            gameState.slot2HoverText = this.add.text(440, 540, `${gameState.slot2Item.name}`, {font: "20px Verdana", fill: "#000000"});
            Phaser.Display.Align.In.Center(gameState.slot2HoverText, gameState.inventory, 0 , -45);
            gameState.slot2HoverText.setScrollFactor(0); 
            gameState.slot2HoverText.visible = false;  
        }

    }else if(gameState.slot3full == false){
        if(gameState.specialItem){
            gameState.slot3full = true;
            gameState.specialItemAudio = this.sound.add('pickupitem');
            gameState.specialItemAudio.play();
            gameState.specialItemAudio.setVolume(2);

            this.tweens.add({
                targets: item,
                x: gameState.player.x,
                y: gameState.player.y,
                ease: 'linear',
                duration: 1500,
                onComplete: function(){
                    item.destroy();
                    
                }
            });
            
            sleep.call(this, 1500).then(() => {
                item.audio.play();
                gameState.specialItem = false;
                gameState.slot3Item = this.add.sprite(gameState.slot3.x, gameState.slot3.y, item.texture);
                gameState.slot3Item.texture = item.texture;
                gameState.slot3Item.name = item.name;
                gameState.slot3Item.setScale(0.6);
                gameState.slot3Item.setScrollFactor(0);
                gameState.inventorylist.push(item.texture);

                gameState.slot3HoverText = this.add.text(440, 540, `${gameState.slot3Item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(gameState.slot3HoverText, gameState.inventory, 0 , -45);
                gameState.slot3HoverText.setScrollFactor(0); 
                gameState.slot3HoverText.visible = false;   

                gameState.totalTime += 30
                var timeText = this.add.text(0, 0, `+30 sec`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(timeText, gameState.timerDisplay, 0 , 30);
                timeText.setScrollFactor(0);        
                function destroytimetext(){
                    timeText.destroy();
                };
                this.time.delayedCall(3080, destroytimetext, this);
        
                var itemText = this.add.text(440, 540, `${item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(itemText, gameState.inventory, 0 , -45);
                itemText.setScrollFactor(0);        
                function destroyitemtext(){
                    itemText.destroy();
                };
                this.time.delayedCall(3080, destroyitemtext, this);

            });

        }else{
            item.destroy();
            gameState.slot3full = true;
            gameState.slot3Item = this.add.sprite(gameState.slot3.x, gameState.slot3.y, item.texture);
            gameState.slot3Item.texture = item.texture;
            gameState.slot3Item.name = item.name;
            gameState.slot3Item.setScale(0.6);
            gameState.slot3Item.setScrollFactor(0);
            gameState.inventorylist.push(item.texture);

            gameState.slot3HoverText = this.add.text(440, 540, `${gameState.slot3Item.name}`, {font: "20px Verdana", fill: "#000000"});
            Phaser.Display.Align.In.Center(gameState.slot3HoverText, gameState.inventory, 0 , -45);
            gameState.slot3HoverText.setScrollFactor(0); 
            gameState.slot3HoverText.visible = false; 
        } 
    
    }else if(gameState.slot4full == false){
        if(gameState.specialItem){
            gameState.slot4full = true;
            gameState.specialItemAudio = this.sound.add('pickupitem');
            gameState.specialItemAudio.play();
            gameState.specialItemAudio.setVolume(2);

            this.tweens.add({
                targets: item,
                x: gameState.player.x,
                y: gameState.player.y,
                ease: 'linear',
                duration: 1500,
                onComplete: function(){
                    item.destroy();
                    
                }
            });
            
            sleep.call(this, 1500).then(() => {
                item.audio.play();
                gameState.specialItem = false;
                gameState.slot4Item = this.add.sprite(gameState.slot4.x, gameState.slot4.y, item.texture);
                gameState.slot4Item.texture = item.texture;
                gameState.slot4Item.name = item.name;
                gameState.slot4Item.setScale(0.6);
                gameState.slot4Item.setScrollFactor(0);
                gameState.inventorylist.push(item.texture);

                gameState.slot4HoverText = this.add.text(440, 540, `${gameState.slot4Item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(gameState.slot4HoverText, gameState.inventory, 0 , -45);
                gameState.slot4HoverText.setScrollFactor(0); 
                gameState.slot4HoverText.visible = false;  

                gameState.totalTime += 30;
                var timeText = this.add.text(0, 0, `+30 sec`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(timeText, gameState.timerDisplay, 0 , 30);
                timeText.setScrollFactor(0);        
                function destroytimetext(){
                    timeText.destroy();
                };
                this.time.delayedCall(3080, destroytimetext, this);
        
                var itemText = this.add.text(440, 540, `${item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(itemText, gameState.inventory, 0 , -45);
                itemText.setScrollFactor(0);        
                function destroyitemtext(){
                    itemText.destroy();
                };
                this.time.delayedCall(3080, destroyitemtext, this);

            });

        }else{
            item.destroy();
            gameState.slot4full = true;
            gameState.slot4Item = this.add.sprite(gameState.slot4.x, gameState.slot4.y, item.texture);
            gameState.slot4Item.texture = item.texture;
            gameState.slot4Item.name = item.name;
            gameState.slot4Item.setScale(0.6);
            gameState.slot4Item.setScrollFactor(0);
            gameState.inventorylist.push(item.texture);

            gameState.slot4HoverText = this.add.text(440, 540, `${gameState.slot4Item.name}`, {font: "20px Verdana", fill: "#000000"});
            Phaser.Display.Align.In.Center(gameState.slot4HoverText, gameState.inventory, 0 , -45);
            gameState.slot4HoverText.setScrollFactor(0); 
            gameState.slot4HoverText.visible = false;
        }  
    
    }else if(gameState.slot5full == false){
        if(gameState.specialItem){
            gameState.slot5full = true;
            gameState.specialItemAudio = this.sound.add('pickupitem');
            gameState.specialItemAudio.play();
            gameState.specialItemAudio.setVolume(2);

            this.tweens.add({
                targets: item,
                x: gameState.player.x,
                y: gameState.player.y,
                ease: 'linear',
                duration: 1500,
                onComplete: function(){
                    item.destroy();
                    
                }
            });
            
            sleep.call(this, 1500).then(() => {
                item.audio.play();
                gameState.specialItem = false;
                gameState.slot5Item = this.add.sprite(gameState.slot5.x, gameState.slot5.y, item.texture);
                gameState.slot5Item.texture = item.texture;
                gameState.slot5Item.name = item.name;
                gameState.slot5Item.setScale(0.6);
                gameState.slot5Item.setScrollFactor(0);
                gameState.inventorylist.push(item.texture);

                gameState.slot5HoverText = this.add.text(440, 540, `${gameState.slot5Item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(gameState.slot5HoverText, gameState.inventory, 0 , -45);
                gameState.slot5HoverText.setScrollFactor(0); 
                gameState.slot5HoverText.visible = false;  

                gameState.totalTime += 30;
                var timeText = this.add.text(0, 0, `+30 sec`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(timeText, gameState.timerDisplay, 0 , 30);
                timeText.setScrollFactor(0);        
                function destroytimetext(){
                    timeText.destroy();
                };
                this.time.delayedCall(3080, destroytimetext, this);
        
                var itemText = this.add.text(440, 540, `${item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(itemText, gameState.inventory, 0 , -45);
                itemText.setScrollFactor(0);        
                function destroyitemtext(){
                    itemText.destroy();
                };
                this.time.delayedCall(3080, destroyitemtext, this);

            });

        }else{
            item.destroy();
            gameState.slot5full = true;
            gameState.slot5Item = this.add.sprite(gameState.slot5.x, gameState.slot5.y, item.texture);
            gameState.slot5Item.texture = item.texture;
            gameState.slot5Item.name = item.name;
            gameState.slot5Item.setScale(0.6);
            gameState.slot5Item.setScrollFactor(0);
            gameState.inventorylist.push(item.texture);

            gameState.slot5HoverText = this.add.text(440, 540, `${gameState.slot5Item.name}`, {font: "20px Verdana", fill: "#000000"});
            Phaser.Display.Align.In.Center(gameState.slot5HoverText, gameState.inventory, 0 , -45);
            gameState.slot5HoverText.setScrollFactor(0); 
            gameState.slot5HoverText.visible = false;  
        }
    
    }else if(gameState.slot6full == false){
        if(gameState.specialItem){
            gameState.slot6full = true;
            gameState.specialItemAudio = this.sound.add('pickupitem');
            gameState.specialItemAudio.play();
            gameState.specialItemAudio.setVolume(2);

            this.tweens.add({
                targets: item,
                x: gameState.player.x,
                y: gameState.player.y,
                ease: 'linear',
                duration: 1500,
                onComplete: function(){
                    item.destroy();
                    
                }
            });
            
            sleep.call(this, 1500).then(() => {
                item.audio.play();
                gameState.specialItem = false;
                gameState.slot6Item = this.add.sprite(gameState.slot6.x, gameState.slot6.y, item.texture);
                gameState.slot6Item.texture = item.texture;
                gameState.slot6Item.name = item.name;
                gameState.slot6Item.setScale(0.6);
                gameState.slot6Item.setScrollFactor(0);
                gameState.inventorylist.push(item.texture);

                gameState.slot6HoverText = this.add.text(440, 540, `${gameState.slot6Item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(gameState.slot6HoverText, gameState.inventory, 0 , -45);
                gameState.slot6HoverText.setScrollFactor(0); 
                gameState.slot6HoverText.visible = false;  

                gameState.totalTime += 30;
                var timeText = this.add.text(0, 0, `+30 sec`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(timeText, gameState.timerDisplay, 0 , 30);
                timeText.setScrollFactor(0);        
                function destroytimetext(){
                    timeText.destroy();
                };
                this.time.delayedCall(3080, destroytimetext, this);
        
                var itemText = this.add.text(440, 540, `${item.name}`, {font: "20px Verdana", fill: "#000000"});
                Phaser.Display.Align.In.Center(itemText, gameState.inventory, 0 , -45);
                itemText.setScrollFactor(0);        
                function destroyitemtext(){
                    itemText.destroy();
                };
                this.time.delayedCall(3080, destroyitemtext, this);

            });

        }else{
            item.destroy();
            gameState.slot6full = true;
            gameState.slot6Item = this.add.sprite(gameState.slot6.x, gameState.slot6.y, item.texture);
            gameState.slot6Item.texture = item.texture;
            gameState.slot6Item.name = item.name;
            gameState.slot6Item.setScale(0.6);
            gameState.slot6Item.setScrollFactor(0);
            gameState.inventorylist.push(item.texture);

            gameState.slot6HoverText = this.add.text(440, 540, `${gameState.slot6Item.name}`, {font: "20px Verdana", fill: "#000000"});
            Phaser.Display.Align.In.Center(gameState.slot6HoverText, gameState.inventory, 0 , -45);
            gameState.slot6HoverText.setScrollFactor(0); 
            gameState.slot6HoverText.visible = false;
        } 

    }else{
        var fulltext = this.add.text(440, 540, "Inventory Full", {font: "20px Verdana", fill: "#000000"});
        Phaser.Display.Align.In.Center(fulltext, gameState.inventory, 0 , -45);
        fulltext.setScrollFactor(0);
        function destroytext(){
            fulltext.destroy();
        }
        this.time.delayedCall(2000, destroytext, this);
    };
    
    if(item == gameState.blueshield || item == gameState.bluehelmet || item == gameState.firesword || item == gameState.bookofdeath
    || item == gameState.royalcrown){
        if(gameState.slot1Item.texture == item.texture){
            gameState.iteminventoryslot = gameState.slot1Item;
        }else if(gameState.slot2Item.texture == item.texture){
            gameState.iteminventoryslot = gameState.slot2Item;
        }else if(gameState.slot3Item.texture == item.texture){
            gameState.iteminventoryslot = gameState.slot3Item;
        }else if(gameState.slot4Item.texture == item.texture){
            gameState.iteminventoryslot = gameState.slot4Item;
        }else if(gameState.slot5Item.texture == item.texture){
            gameState.iteminventoryslot = gameState.slot5Item;
        }else if(gameState.slot6Item.texture == item.texture){
            gameState.iteminventoryslot = gameState.slot6Item;
        };

        gameState.targetItemAudio = this.sound.add('targetitem');
        gameState.targetItemAudio.play();
        gameState.targetItemAudio.setVolume(5);
        
        if(item == gameState.blueshield){
            this.tweens.add({
                targets: gameState.iteminventoryslot,
                x: gameState.blueshield.sprite.x,
                y: gameState.blueshield.sprite.y,
                ease: 'expo.out',
                duration: 3080,
                onComplete: function(){
                    removeItem.call(this, item);
                    item.sprite.setTint(0xFFFFFF);
                    item.completed = true;
                    gameState.totalTime += 60;
                }
            });
        }else if(item == gameState.bluehelmet){
            this.tweens.add({
                targets: gameState.iteminventoryslot,
                x: gameState.bluehelmet.sprite.x,
                y: gameState.bluehelmet.sprite.y,
                ease: 'expo.out',
                duration: 3080,
                onComplete: function(){
                    removeItem.call(this, item);
                    item.sprite.setTint(0xFFFFFF);
                    item.completed = true;
                    gameState.totalTime += 60;
                }
            });
        }else if(item == gameState.firesword){
            this.tweens.add({
                targets: gameState.iteminventoryslot,
                x: gameState.firesword.sprite.x,
                y: gameState.firesword.sprite.y,
                ease: 'expo.out',
                duration: 3080,
                onComplete: function(){
                    removeItem.call(this, item);
                    item.sprite.setTint(0xFFFFFF);
                    item.completed = true;
                    gameState.totalTime += 60;
                }
            });
        }else if(item == gameState.bookofdeath){
            this.tweens.add({
                targets: gameState.iteminventoryslot,
                x: gameState.bookofdeath.sprite.x,
                y: gameState.bookofdeath.sprite.y,
                ease: 'expo.out',
                duration: 3080,
                onComplete: function(){
                    removeItem.call(this, item);
                    item.sprite.setTint(0xFFFFFF);
                    item.completed = true;
                    gameState.totalTime += 60;
                }
            });
        }else if(item == gameState.royalcrown){
            this.tweens.add({
                targets: gameState.iteminventoryslot,
                x: gameState.royalcrown.sprite.x,
                y: gameState.royalcrown.sprite.y,
                ease: 'expo.out',
                duration: 3080,
                onComplete: function(){
                    removeItem.call(this, item);
                    item.sprite.setTint(0xFFFFFF);
                    item.completed = true;
                    gameState.totalTime += 60;
                }
            });
        }
        var timeText = this.add.text(0, 0, `+60 sec`, {font: "20px Verdana", fill: "#000000"});
        Phaser.Display.Align.In.Center(timeText, gameState.timerDisplay, 0 , 30);
        timeText.setScrollFactor(0);        
        function destroytimetext(){
            timeText.destroy();
        };
        this.time.delayedCall(2000, destroytimetext, this);
            
    };

};

//removeitem function
function removeItem(item){
    if (gameState.inventorylist.includes(item.texture)){
        let itemIndex = gameState.inventorylist.indexOf(item.texture);
        gameState.inventorylist.splice(itemIndex, 1);

        if(gameState.slot1Item.texture == item.texture){
            gameState.slot1Item.destroy();
            gameState.slot1HoverText.destroy();
            gameState.slot1full = false;
        }else if(gameState.slot2Item.texture == item.texture){
            gameState.slot2Item.destroy();
            gameState.slot2full = false;
        }else if(gameState.slot3Item.texture == item.texture){
            gameState.slot3Item.destroy();
            gameState.slot3full = false;
        }else if(gameState.slot4Item.texture == item.texture){
            gameState.slot4Item.destroy();
            gameState.slot4full = false;
        }else if(gameState.slot5Item.texture == item.texture){
            gameState.slot5Item.destroy();
            gameState.slot5full = false;
        }else if(gameState.slot6Item.texture == item.texture){
            gameState.slot6Item.destroy();
            gameState.slot6full = false;
        }
    }else{
        console.log(`${item} is not in inventorylist`)
    }
}

//shop window function
gameState.shopWindowOpen = false;

function addShopWindow(shop){
    gameState.shopWindowOpen = true;
    gameState.shopOpenAudio = this.sound.add('shopopen');
    gameState.shopOpenAudio.play();
    var items = shop.items;
    if(shop.sold < items.length){
        //create shop window
        gameState.shopWindow = this.add.sprite(500, 100, 'shopWindow');
        gameState.shopWindow.setScrollFactor(0);
        Phaser.Display.Align.In.Center(gameState.shopWindow, this.add.zone(564, 308, 1128, 615));

        //create shop scene
        gameState.shopScene = this.add.sprite(500, 100, shop.sceneTexture);
        gameState.shopScene.setScrollFactor(0);
        Phaser.Display.Align.In.TopCenter(gameState.shopScene, gameState.shopWindow);

        //create shop exit
        gameState.shopExit = this.add.sprite(500, 100, 'shopExit');
        gameState.shopExit.setScrollFactor(0);
        Phaser.Display.Align.In.TopRight(gameState.shopExit, gameState.shopWindow);

        //shop exit interaction
        gameState.shopExit.setInteractive();

        gameState.shopExit.on('pointerover', () =>{
            gameState.shopExit.setTint(0xA9A9A9);
            gameState.hoverAudio.play();
            gameState.hoverAudio.setVolume(10);
        });
        gameState.shopExit.on('pointerout', () =>{
            gameState.shopExit.setTint(0xFFFFFF);
        });
        gameState.shopExit.on('pointerup', ()=>{
            gameState.exitAudio.play();
            gameState.shopWindow.destroy();
            gameState.shopSwap.destroy();
            gameState.shopExit.destroy();
            gameState.shopScene.destroy();
            gameState.shopItem1.destroy();
            gameState.shopItem1Name.destroy();
            gameState.shopItem2.destroy();
            gameState.shopItem2Name.destroy();
            if(gameState.noItem){
                gameState.noItem.destroy();
            };
            if(gameState.sold){
                gameState.soldtext.destroy();
            };
            gameState.sold = false;
            gameState.shopWindowOpen = false;
        });

        //create shop swap
        gameState.shopSwap = this.add.sprite(500, 100, 'shopSwap');
        gameState.shopSwap.setScrollFactor(0);
        Phaser.Display.Align.In.BottomCenter(gameState.shopSwap, gameState.shopWindow, 0, -20);


        //shop swap interaction
        gameState.shopSwap.setInteractive();

        gameState.shopSwap.on('pointerover', () =>{
            gameState.shopSwap.setTint(0xA9A9A9);
            gameState.hoverAudio.play();
            gameState.hoverAudio.setVolume(10);
        });
        gameState.shopSwap.on('pointerout', () =>{
            gameState.shopSwap.setTint(0xFFFFFF);
        });
        gameState.shopSwap.on('pointerup', ()=>{
            if(gameState.inventorylist.includes(item1.texture)){
                gameState.swapAudio = this.sound.add('coin');
                gameState.swapAudio.play();

                gameState.shopSwap.destroy();
                gameState.shopItem1.destroy();
                gameState.shopItem1Name.destroy();
                gameState.shopItem2.destroy();
                gameState.shopItem2Name.destroy(); 
                removeItem.call(this, item1);
                addItem.call(this, item2, item2.texture);  
                shop.sold +=1;
                gameState.sold = true;
                gameState.soldtext = this.add.text(500, 100, 'Thank you, check back\n again for more items!', 
                {font: "40px Verdana", fill: "#000000"});
                gameState.soldtext.setScrollFactor(0);
                Phaser.Display.Align.In.Center(gameState.soldtext, gameState.shopWindow, 0 , 90);

            }else{
                gameState.noItem = this.add.text(500, 100, `You don't have a ${item1.name}!`, {font: "20px Verdana", fill: "#000000"});
                gameState.noItem.setScrollFactor(0);
                Phaser.Display.Align.In.Center(gameState.noItem, gameState.shopWindow, 0 , 30);
                gameState.noitemAudio.play();
                gameState.shopSwap.disableInteractive();
                gameState.shopSwap.setTint(0xFFFFFF);
            }
        });

        //create shop items (item1 buying, item2 selling)
        if(shop.sold <= items.length){
            var item1 = items[shop.sold][0];
            var item2 = items[shop.sold][1];
            gameState.shopItem1 = this.add.sprite(500, 100, item1.texture);
            gameState.shopItem1.setScrollFactor(0);
            Phaser.Display.Align.In.LeftCenter(gameState.shopItem1, gameState.shopWindow, -110, 90);
            gameState.shopItem1Name = this.add.text(500, 100, item1.name, {font: "15px Verdana", fill: "#000000"});
            gameState.shopItem1Name.setScrollFactor(0);
            Phaser.Display.Align.In.BottomCenter(gameState.shopItem1Name, gameState.shopItem1, 0 , 60);
    
            gameState.shopItem2 = this.add.sprite(500, 100, item2.texture);
            gameState.shopItem2.setScrollFactor(0);
            Phaser.Display.Align.In.RightCenter(gameState.shopItem2, gameState.shopWindow, -110, 90);
            gameState.shopItem2Name = this.add.text(500, 100, item2.name, {font: "15px Verdana", fill: "#000000"});
            gameState.shopItem2Name.setScrollFactor(0);
            Phaser.Display.Align.In.BottomCenter(gameState.shopItem2Name, gameState.shopItem2, 0 , 60);
        }
        
        
    }else{
        //create shop window
        gameState.shopWindow = this.add.sprite(500, 100, 'shopWindow');
        gameState.shopWindow.setScrollFactor(0);
        Phaser.Display.Align.In.Center(gameState.shopWindow, this.add.zone(564, 308, 1128, 615));

        //create shop scene
        gameState.shopScene = this.add.sprite(500, 100, shop.sceneTexture);
        gameState.shopScene.setScrollFactor(0);
        Phaser.Display.Align.In.TopCenter(gameState.shopScene, gameState.shopWindow);

        //create shop exit
        gameState.shopExit = this.add.sprite(500, 100, 'shopExit');
        gameState.shopExit.setScrollFactor(0);
        Phaser.Display.Align.In.TopRight(gameState.shopExit, gameState.shopWindow);
        
        //shop exit interaction
        gameState.shopExit.setInteractive();

        gameState.shopExit.on('pointerover', () =>{
            gameState.shopExit.setTint(0xA9A9A9);
            gameState.hoverAudio.play();
            gameState.hoverAudio.setVolume(10);
        });
        gameState.shopExit.on('pointerout', () =>{
            gameState.shopExit.setTint(0xFFFFFF);
        });
        gameState.shopExit.on('pointerup', ()=>{
            gameState.exitAudio.play();
            gameState.shopWindow.destroy();
            gameState.shopSwap.destroy();
            gameState.shopExit.destroy();
            gameState.shopScene.destroy();
            gameState.shopItem1.destroy();
            gameState.shopItem1Name.destroy();
            gameState.shopItem2.destroy();
            gameState.shopItem2Name.destroy();
            gameState.soldOut.destroy();
            gameState.shopWindowOpen = false;
        });
        
        //create shop sold out
        gameState.soldOut = this.add.text(500, 100, 'Sold Out!', {font: "40px Verdana", fill: "#000000"});
        gameState.soldOut.setScrollFactor(0);
        Phaser.Display.Align.In.Center(gameState.soldOut, gameState.shopWindow, 0 , 100);
    };                
};

//shop window update function
function windowUpdate(){
    if(gameState.shopWindowOpen || gameState.menuWindowOpen || gameState.winWindowOpen || gameState.loseWindowOpen 
    || gameState.specialItem){
        gameState.player.setVelocityX(0);
        gameState.player.setVelocityY(0);
        gameState.keys.W.isDown = false;
        gameState.keys.A.isDown = false;
        gameState.keys.S.isDown = false;
        gameState.keys.D.isDown = false;
        this.input.keyboard.enabled = false;
        for(var i in gameState.shops){
            gameState.shops[i].disableInteractive();
        }
    }else{
        this.input.keyboard.enabled = true;
        for(var i in gameState.shops){
            gameState.shops[i].setInteractive();
        }
    }
};

//win condition function
gameState.winWindowOpen = false;
function winCondition(){
    if(gameState.blueshield.completed == true && gameState.bluehelmet.completed == true && gameState.firesword.completed == true 
        && gameState.bookofdeath.completed == true && gameState.royalcrown.completed == true){
        gameState.winWindowOpen = true;
    }

}

