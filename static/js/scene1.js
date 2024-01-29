class scene1 extends Phaser.Scene{
    constructor(){
        super({key: 'scene1'});
    }

//coding
//add elements to hmtl

    preload(){
        //load game functions
        this.load.script('gameFunctions', 'static/js/gameFunctions.js');
        this.load.script('baseAssets', 'static/js/baseAssets.js');

        //load player
        this.load.image('player', 'static/images/player/player.png');
        this.load.spritesheet('playerSpritesheet', 'static/images/player/playerSpritesheet.png', {frameWidth: 32, frameHeight: 36});

        //load audio
        this.load.audio('backgroundMusic', [
            'static/audio/music/medieval_fartbrass.ogg',
            'static/audio/music/medieval_fartbrass.mp3'
        ]);
        this.load.audio('coin', [
            'static/audio/soundeffects/coin.ogg',
            'static/audio/soundeffects/coin.mp3'
        ]);
        
        this.load.audio('goldband', [
            'static/audio/soundeffects/goldband.ogg',
            'static/audio/soundeffects/goldband.mp3'
        ]);
        this.load.audio('lose', [
            'static/audio/soundeffects/lose.ogg',
            'static/audio/soundeffects/lose.mp3'
        ]);
        this.load.audio('pickupitem', [
            'static/audio/soundeffects/pickupitem.ogg',
            'static/audio/soundeffects/pickupitem.mp3'
        ]);
        this.load.audio('regularhelmet', [
            'static/audio/soundeffects/regularhelmet.ogg',
            'static/audio/soundeffects/regularhelmet.mp3'
        ]);
        this.load.audio('shopopen', [
            'static/audio/soundeffects/shopopen.ogg',
            'static/audio/soundeffects/shopopen.mp3'
        ]);
        this.load.audio('silverdagger', [
            'static/audio/soundeffects/silverdagger.ogg',
            'static/audio/soundeffects/silverdagger.mp3'
        ]);
        this.load.audio('targetitem', [
            'static/audio/soundeffects/targetitem.ogg',
            'static/audio/soundeffects/targetitem.mp3'
        ]);
        this.load.audio('whitebook', [
            'static/audio/soundeffects/whitebook.ogg',
            'static/audio/soundeffects/whitebook.mp3'
        ]);
        this.load.audio('win', [
            'static/audio/soundeffects/win.ogg',
            'static/audio/soundeffects/win.mp3'
        ]);
        this.load.audio('woodenshield', [
            'static/audio/soundeffects/woodenshield.ogg',
            'static/audio/soundeffects/woodenshield.mp3'
        ]);
        this.load.audio('exit', [
            'static/audio/ui/exit.ogg',
            'static/audio/ui/exit.mp3'
        ]);
        this.load.audio('hover', [
            'static/audio/ui/hover.ogg',
            'static/audio/ui/hover.mp3'
        ]);
        this.load.audio('menu', [
            'static/audio/ui/menu.ogg',
            'static/audio/ui/menu.mp3'
        ]);
        this.load.audio('restart', [
            'static/audio/ui/restart.ogg',
            'static/audio/ui/restart.mp3'
        ]);
        this.load.audio('startScene', [
            'static/audio/ui/startScene.ogg',
            'static/audio/ui/startScene.mp3'
        ]);
        this.load.audio('noitem', [
            'static/audio/soundeffects/noitem.ogg',
            'static/audio/soundeffects/noitem.mp3'
        ]);

        //load shops
        this.load.image('redShop', 'static/images/shops/redShop.png');
        this.load.image('greenShop', 'static/images/shops/greenShop.png');
        this.load.image('blueShop', 'static/images/shops/blueShop.png');

        //load shop scenes
        this.load.image('redShopScene', 'static/images/shopScenes/redShopScene.png');
        this.load.image('blueShopScene', 'static/images/shopScenes/blueShopScene.png');
        this.load.image('greenShopScene', 'static/images/shopScenes/greenShopScene.png');

        //load shop window
        this.load.image('shopWindow', 'static/images/ui/shopWindow.png');
        this.load.image('shopSwap', 'static/images/ui/shopSwap.png');
        this.load.image('shopExit', 'static/images/ui/shopExit.png');

        //load menu window
        this.load.image('menuIcon', 'static/images/ui/menuIcon.png');
        this.load.image('menuWindow', 'static/images/ui/menuWindow.png');
        this.load.image('menuRestart', 'static/images/ui/menuRestart.png');
        this.load.image('menuStartScene', 'static/images/ui/menuStartScene.png');
        this.load.image('menuExit', 'static/images/ui/menuExit.png');

        //load items
        this.load.image('woodshield', 'static/images/items/tile148.png');
        this.load.image('whitecrystal', 'static/images/items/tile044.png');
        this.load.image('rubycrystal', 'static/images/items/tile042.png');
        this.load.image('blueflower', 'static/images/items/tile172.png');
        this.load.image('blueshield', 'static/images/items/tile151.png');
        this.load.image('regularhelmet', 'static/images/items/tile119.png');
        this.load.image('hammer', 'static/images/items/tile111.png');
        this.load.image('blackingot', 'static/images/items/tile071.png');
        this.load.image('bluescepter', 'static/images/items/tile147.png');
        this.load.image('bluehelmet', 'static/images/items/tile122.png');
        this.load.image('silverdagger', 'static/images/items/tile091.png');
        this.load.image('armoredglove', 'static/images/items/tile127.png');
        this.load.image('goldnugget', 'static/images/items/tile079.png');
        this.load.image('redscepter', 'static/images/items/tile146.png');
        this.load.image('firesword', 'static/images/items/tile103.png');
        this.load.image('whitebook', 'static/images/items/tile166.png');
        this.load.image('mushroom', 'static/images/items/tile160.png');
        this.load.image('skull', 'static/images/items/tile129.png');
        this.load.image('blackpotion', 'static/images/items/tile060.png');
        this.load.image('bookofdeath', 'static/images/items/tile180.png');
        this.load.image('goldband', 'static/images/items/tile037.png');
        this.load.image('silveringot', 'static/images/items/tile067.png');
        this.load.image('redcushion', 'static/images/items/tile049.png');
        this.load.image('goldbook', 'static/images/items/tile177.png');
        this.load.image('royalcrown', 'static/images/items/tile035.png');

        //load win window
        this.load.image('winWindow', 'static/images/ui/winWindow.png');
        this.load.image('nextLevel', 'static/images/ui/nextLevel.png');
        this.load.image('winningItemBackdrop', 'static/images/ui/winningItemBackdrop.png');


        //load inventory ui
        this.load.image('inventory', 'static/images/ui/inventory.png');
        this.load.image('inventorySlot', 'static/images/ui/inventorySlot.png');

        //load tilemap
        this.load.tilemapTiledJSON('map1', 'static/images/mapAssets/map1.json');
        this.load.image('tileset1', 'static/images/mapAssets/terrain-v7.png');
        this.load.image('tileset2', 'static/images/mapAssets/decorations-medieval.png');
        this.load.image('tileset3', 'static/images/mapAssets/conifers.png');
        this.load.image('tileset4', 'static/images/mapAssets/cottage.png');
        this.load.image('tileset5', 'static/images/mapAssets/plants.png');
        this.load.image('tileset6', 'static/images/mapAssets/windows-doors.png');
        this.load.image('tileset7', 'static/images/mapAssets/thatched-roof.png');

    }

    create(){
        //scene data
        gameState.currentScene = 'scene1'

        //create tilemap
        gameState.map = this.make.tilemap({key: "map1", tileWidth: 16, tileHeight: 16});
        const tileset1 = gameState.map.addTilesetImage("terrain-v7", "tileset1");
        const tileset2 = gameState.map.addTilesetImage("decorations-medieval", "tileset2");
        const tileset3 = gameState.map.addTilesetImage("conifers", "tileset3");
        const tileset4 = gameState.map.addTilesetImage("cottage", "tileset4");
        const tileset5 = gameState.map.addTilesetImage("plants", "tileset5");
        const tileset6 = gameState.map.addTilesetImage("windows-doors", "tileset6");
        const tileset7 = gameState.map.addTilesetImage("thatched-roof", "tileset7");
        const layerTerrain = gameState.map.createLayer("Terrain", tileset1, 0, 0);
        const layerFlowers = gameState.map.createLayer("Flowers", tileset5, 0, 0);
        const layerWater = gameState.map.createLayer("Water", tileset1, 0, 0);
        const layerPath = gameState.map.createLayer("Path", tileset1, 0, 0);
        const layerTrees = gameState.map.createLayer("Trees", tileset3, 0, 0);
        const layerTrees2 = gameState.map.createLayer("Trees 2", tileset3, 0, 0);
        const layerDecor = gameState.map.createLayer("Decor", tileset2, 0, 0);
        const layerDecor2 = gameState.map.createLayer("Decor 2", tileset2, 0, 0);
        const layerHouse = gameState.map.createLayer("House", tileset4, 0, 0);
        const layerWindows = gameState.map.createLayer("Windows", tileset6, 0, 0);
        const layerRoof = gameState.map.createLayer("Roof", tileset7, 0, 0);
        
        
        gameState.mapLayers = [layerTerrain, layerFlowers, layerWater, layerPath, layerTrees, layerTrees2, layerDecor, layerDecor2,
        layerHouse, layerWindows, layerRoof];

        //cursor
        this.input.setDefaultCursor('url(static/images/ui/defaultCursor.png), pointer');

        //music
        gameState.backgroundMusic = this.sound.add('backgroundMusic');
        gameState.backgroundMusic.loop = true;
        gameState.backgroundMusic.play();

        //audio
        gameState.hoverAudio = this.sound.add('hover');
        gameState.exitAudio = this.sound.add('exit');
        gameState.menuAudio = this.sound.add('menu');
        gameState.restartAudio = this.sound.add('restart');
        gameState.startSceneAudio = this.sound.add('startScene');

        gameState.loseAudio = this.sound.add('lose');
        gameState.winAudio = this.sound.add('win');
        gameState.noitemAudio = this.sound.add('noitem');
        
        //create player and player animations
        createPlayer.call(this);
        this.anims.create({
            key: 'moveup', frames: this.anims.generateFrameNumbers(
                'playerSpritesheet', {start: 0, end: 2}), frameRate: 10, repeat:-1
            });
        
        this.anims.create({
            key: 'moveright', frames: this.anims.generateFrameNumbers(
                'playerSpritesheet', {start: 3, end: 5}), frameRate: 10, repeat:-1
            });

        this.anims.create({
            key: 'movedown', frames: this.anims.generateFrameNumbers(
                'playerSpritesheet', {start: 6, end: 8}), frameRate: 10, repeat:-1
            });

        this.anims.create({
            key: 'moveleft', frames: this.anims.generateFrameNumbers(
                'playerSpritesheet', {start: 9, end: 11}), frameRate: 10, repeat:-1
            });

        this.anims.create({
            key: 'upidle', frames: this.anims.generateFrameNumbers(
                'playerSpritesheet', {start: 1, end: 1}), frameRate: 10, repeat:-1
            });

        this.anims.create({
            key: 'rightidle', frames: this.anims.generateFrameNumbers(
                'playerSpritesheet', {start: 4, end: 4}), frameRate: 10, repeat:-1
            });

        this.anims.create({
            key: 'downidle', frames: this.anims.generateFrameNumbers(
                'playerSpritesheet', {start: 7, end: 7}), frameRate: 10, repeat:-1
            });
        
        this.anims.create({
            key: 'leftidle', frames: this.anims.generateFrameNumbers(
                'playerSpritesheet', {start: 10, end: 10}), frameRate: 10, repeat:-1
            });

        //layer collisions
        layerWater.setCollisionBetween(0, 3000);
        this.physics.add.collider(gameState.player, layerWater);
        layerTrees.setCollisionBetween(0, 16000);
        this.physics.add.collider(gameState.player, layerTrees);
        layerTrees2.setCollisionBetween(0, 16000);
        this.physics.add.collider(gameState.player, layerTrees2);
        layerDecor.setCollisionBetween(0, 12000);
        this.physics.add.collider(gameState.player, layerDecor);
        layerDecor2.setCollisionBetween(0, 12000);
        this.physics.add.collider(gameState.player, layerDecor2);
        layerHouse.setCollisionBetween(0, 14000);
        this.physics.add.collider(gameState.player, layerHouse);
        layerWindows.setCollisionBetween(0, 22000);
        this.physics.add.collider(gameState.player, layerWindows);
        layerRoof.setCollisionBetween(0, 15000);
        this.physics.add.collider(gameState.player, layerRoof);

        //create items    
        gameState.woodshield = this.add.sprite(2224, 528, 'woodshield'); gameState.woodshield.setInteractive();
        gameState.woodshield.texture = 'woodshield';
        gameState.woodshield.name = 'Rustic Oak Shield';
        gameState.woodshield.audio = this.sound.add('woodenshield');
        gameState.woodshield.setScale(0.3);

        gameState.whitecrystal = this.add.sprite(700, 100, 'whitecrystal');
        gameState.whitecrystal.texture = 'whitecrystal';
        gameState.whitecrystal.name = 'Ivory Crystal';

        gameState.rubycrystal = this.add.sprite(700, 100, 'rubycrystal');
        gameState.rubycrystal.texture = 'rubycrystal';
        gameState.rubycrystal.name = 'Ruby Crystal';

        gameState.blueflower = this.add.sprite(700, 100, 'blueflower');
        gameState.blueflower.texture = 'blueflower';
        gameState.blueflower.name = 'Cerulean Elderbloom';
        gameState.blueflower.completed = false;

        gameState.blueshield = this.add.sprite(700, 100, 'blueshield');
        gameState.blueshield.texture = 'blueshield';
        gameState.blueshield.name = "Azure Seraph's Shield";
        gameState.blueshield.completed = false;

        gameState.regularhelmet = this.add.sprite(2240, 2496, 'regularhelmet'); gameState.regularhelmet.setInteractive();
        gameState.regularhelmet.texture = 'regularhelmet';
        gameState.regularhelmet.name = 'Ironclad Helm';
        gameState.regularhelmet.audio = this.sound.add('regularhelmet');
        gameState.regularhelmet.setScale(0.3);

        gameState.hammer = this.add.sprite(700, 100, 'hammer');
        gameState.hammer.texture = 'hammer';
        gameState.hammer.name = 'Forgeheart Mallet';

        gameState.blackingot = this.add.sprite(700, 100, 'blackingot');
        gameState.blackingot.texture = 'blackingot';
        gameState.blackingot.name = 'Shadowsteel Ingot';

        gameState.bluescepter = this.add.sprite(700, 100, 'bluescepter');
        gameState.bluescepter.texture = 'bluescepter';
        gameState.bluescepter.name = "Stormweaver's Scepter";

        gameState.bluehelmet = this.add.sprite(700, 100, 'bluehelmet');
        gameState.bluehelmet.texture = 'bluehelmet';
        gameState.bluehelmet.name = 'Voltguard Helm of the Storm';
        gameState.bluehelmet.completed = false;

        gameState.silverdagger = this.add.sprite(2736, 1600, 'silverdagger'); gameState.silverdagger.setInteractive();
        gameState.silverdagger.texture = 'silverdagger';
        gameState.silverdagger.name = 'Silverthorn Dagger';
        gameState.silverdagger.audio = this.sound.add('silverdagger');
        gameState.silverdagger.setScale(0.3);

        gameState.armoredglove = this.add.sprite(700, 100, 'armoredglove');
        gameState.armoredglove.texture = 'armoredglove';
        gameState.armoredglove.name = "Sentinel's Gauntlet";

        gameState.goldnugget = this.add.sprite(700, 100, 'goldnugget');
        gameState.goldnugget.texture = 'goldnugget';
        gameState.goldnugget.name = 'Gilded Stone';

        gameState.redscepter = this.add.sprite(700, 100, 'redscepter');
        gameState.redscepter.texture = 'redscepter';
        gameState.redscepter.name = 'Inferno Pyrestaff';

        gameState.firesword = this.add.sprite(700, 100, 'firesword');
        gameState.firesword.texture = 'firesword';
        gameState.firesword.name = 'Flameforged Blade of Emberfall';
        gameState.firesword.completed = false;

        gameState.whitebook = this.add.sprite(784, 1192, 'whitebook'); gameState.whitebook.setInteractive();
        gameState.whitebook.texture = 'whitebook';
        gameState.whitebook.name = 'Ivory Tome';
        gameState.whitebook.audio = this.sound.add('whitebook');
        gameState.whitebook.setScale(0.3);

        gameState.mushroom = this.add.sprite(700, 100, 'mushroom');
        gameState.mushroom.texture = 'mushroom';
        gameState.mushroom.name = 'Silvercap Shroom';

        gameState.skull = this.add.sprite(700, 100, 'skull');
        gameState.skull.texture = 'skull';
        gameState.skull.name = 'Skull of the Forgotten';

        gameState.blackpotion = this.add.sprite(700, 100, 'blackpotion');
        gameState.blackpotion.texture = 'blackpotion';
        gameState.blackpotion.name = 'Elixir of Draught';

        gameState.bookofdeath = this.add.sprite(700, 100, 'bookofdeath');
        gameState.bookofdeath.texture = 'bookofdeath';
        gameState.bookofdeath.name = 'Darklore Manuscript';
        gameState.bookofdeath.completed = false;

        gameState.goldband = this.add.sprite(1072, 1984, 'goldband'); gameState.goldband.setInteractive();
        gameState.goldband.texture = 'goldband';
        gameState.goldband.name = 'Aurelian Circlet';
        gameState.goldband.audio = this.sound.add('goldband');
        gameState.goldband.setScale(0.3);

        gameState.silveringot = this.add.sprite(700, 100, 'silveringot');
        gameState.silveringot.texture = 'silveringot';
        gameState.silveringot.name = 'Luminary Ingot';

        gameState.redcushion = this.add.sprite(700, 100, 'redcushion');
        gameState.redcushion.texture = 'redcushion';
        gameState.redcushion.name = 'Crimson Regal Pallet';

        gameState.goldbook = this.add.sprite(700, 100, 'goldbook');
        gameState.goldbook.texture = 'goldbook';
        gameState.goldbook.name = 'Gilded Tome of Glorious Lore';

        gameState.royalcrown = this.add.sprite(700, 100, 'royalcrown');
        gameState.royalcrown.texture = 'royalcrown';
        gameState.royalcrown.name = "Monarch's Eclat Diadem";
        gameState.royalcrown.completed = false;

        gameState.items = [gameState.woodshield, gameState.whitecrystal, gameState.rubycrystal, gameState.blueflower, 
        gameState.blueshield, gameState.regularhelmet, gameState.hammer, gameState.blackingot, gameState.bluescepter, 
        gameState.bluehelmet, gameState.silverdagger, gameState.armoredglove, gameState.goldnugget, gameState.redscepter, 
        gameState.firesword, gameState.whitebook, gameState.mushroom, gameState.skull, gameState.blackpotion, gameState.bookofdeath, 
        gameState.goldband, gameState.silveringot, gameState.redcushion, gameState.goldbook, gameState.royalcrown];

        gameState.winningItems = [gameState.blueshield, gameState.bluehelmet, gameState.firesword, gameState.bookofdeath, gameState.royalcrown];

        //set items invisible
        for(var i in gameState.items){
            gameState.items[i].setVisible(false);
        };

        gameState.woodshield.setVisible(true);
        gameState.regularhelmet.setVisible(true);
        gameState.silverdagger.setVisible(true);
        gameState.whitebook.setVisible(true);
        gameState.goldband.setVisible(true);
        

        //create shops
        gameState.redShop = this.physics.add.staticSprite(752, 1344, 'redShop');
        gameState.redShop.soldOut = false;
        gameState.redShop.sceneTexture = 'redShopScene';
        gameState.redShop.items = [[gameState.woodshield, gameState.whitecrystal], [gameState.hammer, gameState.blackingot], 
        [gameState.goldnugget, gameState.redscepter]];
        gameState.redShop.sold = 0;

        gameState.greenShop = this.physics.add.staticSprite(1168, 1776, 'greenShop');
        gameState.greenShop.soldOut = false;
        gameState.greenShop.sceneTexture = 'greenShopScene';
        gameState.greenShop.items = [[gameState.rubycrystal, gameState.blueflower], [gameState.silverdagger, gameState.armoredglove], 
        [gameState.silveringot, gameState.redcushion]];
        gameState.greenShop.sold = 0;

        gameState.blueShop = this.physics.add.staticSprite(1344, 2576, 'blueShop');
        gameState.blueShop.soldOut = false;
        gameState.blueShop.sceneTexture = 'blueShopScene';
        gameState.blueShop.items = [[gameState.blueflower, gameState.blueshield], [gameState.armoredglove, gameState.goldnugget], 
        [gameState.mushroom, gameState.skull], [gameState.goldbook, gameState.royalcrown]];
        gameState.blueShop.sold = 0;

        gameState.shop4 = this.physics.add.staticSprite(2272, 2704, 'redShop');
        gameState.shop4.soldOut = false;
        gameState.shop4.sceneTexture = 'redShopScene';
        gameState.shop4.items = [[gameState.regularhelmet, gameState.hammer], [gameState.skull, gameState.blackpotion], [gameState.goldband, gameState.silveringot]];
        gameState.shop4.sold = 0;

        gameState.shop5 = this.physics.add.staticSprite(2688, 1488, 'greenShop');
        gameState.shop5.soldOut = false;
        gameState.shop5.sceneTexture = 'greenShopScene';
        gameState.shop5.items = [[gameState.whitecrystal, gameState.rubycrystal], [gameState.blackingot, gameState.bluescepter], 
        [gameState.whitebook, gameState.mushroom], [gameState.redcushion, gameState.goldbook]];
        gameState.shop5.sold = 0;

        gameState.shop6 = this.physics.add.staticSprite(2624, 48, 'blueShop');
        gameState.shop6.soldOut = false;
        gameState.shop6.sceneTexture = 'blueShopScene';
        gameState.shop6.items = [[gameState.bluescepter, gameState.bluehelmet], [gameState.redscepter, gameState.firesword], 
        [gameState.blackpotion, gameState.bookofdeath]];
        gameState.shop6.sold = 0;

        gameState.shops = [gameState.redShop, gameState.greenShop, gameState.blueShop, gameState.shop4, gameState.shop5, gameState.shop6];

        //create shop collisions
        createCollisions.call(this);
                    
        //create win condition
        createWinningItems.call(this);

        //create controls
        createControls.call(this);

        //create menu
        createMenuIcon.call(this);

        //create inventory
        createInventory.call(this);

        //set items interactive
        for(var i in gameState.items){
            setItemInteractive.call(this, gameState.items[i])
        };

        //set shops interactive
        for(var i in gameState.shops){
            setShopInteractive.call(this, gameState.shops[i]);
        };
        
        //create cameras
        createCameras.call(this);

        //create timer
        createTimer.call(this);
    }

    update(){
        //controls update
        updateControls.call(this);
        
        //shop window update
        windowUpdate.call(this);

        //win condition
        winCondition.call(this)

        // console.log('(' + this.pointer.x + ', ' + this.pointer.y + ')');

    }
}