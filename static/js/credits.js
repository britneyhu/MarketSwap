class credits extends Phaser.Scene{
    constructor(){
        super({key: 'credits'});
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
        this.load.audio('backAudio', [
            'static/audio/ui/menu.ogg',
            'static/audio/ui/menu.mp3'
        ]);

        this.load.image('backButton', 'static/images/ui/backButton.png');
        this.load.image('creditsBackground', 'static/images/ui/creditsBackground.png');

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
        gameState.backAudio = this.sound.add('backAudio');

        //background image
        gameState.creditsBackground = this.add.image(0, 0, 'creditsBackground');
        Phaser.Display.Align.In.Center(gameState.creditsBackground, this.add.zone(650, 300, 1300, 600), 0, 0);

        //start text
        gameState.creditsText = this.add.text(440, 540, 'CREDITS', {font: "50px Verdana", fill: "#000000"});
        Phaser.Display.Align.In.TopCenter(gameState.creditsText, this.add.zone(650, 300, 1300, 600), 0, -10);

        //start button
        gameState.backButton = this.add.image(100, 100, 'backButton');
        Phaser.Display.Align.In.TopLeft(gameState.backButton, this.add.zone(650, 300, 1300, 600), -10, -10);
        gameState.backButton.setInteractive();

        gameState.backButton.on('pointerover', () =>{
            gameState.backButton.setTint(0xA9A9A9);
            gameState.hoverAudio.play();
            gameState.hoverAudio.setVolume(10);
        });
        gameState.backButton.on('pointerout', () =>{
            gameState.backButton.setTint(0xFFFFFF);
        });
        gameState.backButton.on('pointerup', ()=>{
            menuMusic.pause();
            gameState.backAudio.play();
            this.scene.stop('credits');
            this.scene.start('startScene');
        });

        //credits
        const credits = [
            'Game Created By: Britney Hu',
            'github.com/britneyhu',
            '',
            'Images',
            'LPC Misc',
            'Lanea Zimmerman (Sharm), William.Thompsonj',
            'CC-BY 3.0 / GPL 3.0 / GPL 2.0 / OGA-BY 3.0',
            'https://opengameart.org/content/lpc-misc',
            
            'RPG Tiles: Cobble stone paths & town objects',
            'https://opengameart.org/content/rpg-tiles-cobble-stone-paths-town-objects',
            'Zabin, Daneeklu, Jetrel, Hyptosis, Redshrike, Bertram.',
            'CC-BY-SA 3.0',
            
            '[LPC] Farming tilesets, magic animations and UI elements',
            'https://opengameart.org/content/lpc-farming-tilesets-magic-animations-and-ui-elements',
            'Daniel Eddeland (daneeklu)',
            'CC-BY-SA 3.0 / GPL 3.0',
            
            'RPG item set',
            'Jetrel',
            'CC0',
            'https://opengameart.org/content/rpg-item-set',
            'RPG Indoor Tileset: Expansion 1',
            'Redshrike',
            'CC-BY 3.0 / GPL 3.0 / GPL 2.0 / OGA-BY 3.0',
            'https://opengameart.org/content/rpg-indoor-tileset-expansion-1',

            '[LPC] Dungeon Elements',
            'Lanea Zimmerman (Sharm), William.Thompsonj',
            'CC-BY 3.0 / GPL 3.0 / GPL 2.0 / OGA-BY 3.0',
            'https://opengameart.org/content/lpc-dungeon-elements',

            'LPC Flowers / Plants / Fungi / Wood',
            'bluecarrot16, Guido Bos, Ivan Voirol (Silver IV), SpiderDave, William.Thompsonj, Yar, Stephen', 'Challener and the Open Surge team (http://opensnc.sourceforge.net), Gaurav Munjal, Johann', 'Charlot, Casper Nilsson, Jetrel, Zabin, Hyptosis, Surt, Lanea Zimmerman, George Bailey,', 'ansimuz, Buch, and the Open Pixel Project contributors (OpenPixelProject.com).', 
            'CC-BY-SA 3.0.', 

            'Based on:',

            '[LPC] Guido Bos entries cut up',
            'Guido Bos',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/lpc-guido-bos-entries-cut-up',

            'Basic map 32x32 by Silver IV',
            'Ivan Voirol (Silver IV)',
            'CC-BY 3.0 / GPL 3.0 / GPL 2.0',
            'https://opengameart.org/content/basic-map-32x32-by-silver-iv',

            'Flowers',
            'SpiderDave',
            'CC0',
            'https://opengameart.org/content/flowers',

            '[LPC] Leaf Recolor',
            'William.Thompsonj',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/lpc-leaf-recolor',

            'Isometric 64x64 Outside Tileset',
            'Yar',
            'CC-BY 3.0',
            'https://opengameart.org/content/isometric-64x64-outside-tileset',

            '32x32 (and 16x16) RPG Tiles--Forest and some Interior Tiles',
            'Stephen Challener and the Open Surge team (http://opensnc.sourceforge.net)commissioned by',
            'Gaurav Munjal',
            'CC-BY 3.0',
            'https://opengameart.org/content/32x32-and-16x16-rpg-tiles-forest-and-some-interior-tiles',

            'Lots of Hyptosis', 
            'tiles organized!',
            'Hyptosis',
            'CC-BY 3.0',
            'https://opengameart.org/content/lots-of-hyptosis-tiles-organized',

            'Generic Platformer Tiles',
            'surt',
            'CC0',
            'http://opengameart.org/content/generic-platformer-tiles',

            'old frogatto tile art',
            'Guido Bos',
            'CC0',
            'https://opengameart.org/content/old-frogatto-tile-art',

            'LPC: Interior Castle Tiles',
            'Lanea Zimmerman',
            'CC-BY-3.0 / GPL 3.0',
            'http://opengameart.org/content/lpc-interior-castle-tiles',

            'RPG item set',
            'Jetrel',
            'CC0',
            'https://opengameart.org/content/rpg-item-set',

            'Shootem up graphic kit',
            'Johann Charlot',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/shootem-up-graphic-kit',

            'LPC C.Nilsson',
            'Casper Nilsson',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/lpc-cnilsson',

            'Lots of trees and plants from OGA (DB32) tilesets pack 1',
            'Jetrel, Zabin, Hyptosis, Surt',
            'CC0',
            'https://opengameart.org/content/lots-of-trees-and-plants-from-oga-db32-tilesets-pack-1',

            'Trees & Bushes',
            'ansimuz',
            'CC0',
            'https://opengameart.org/content/trees-bushes',

            'Outdoor tiles, again',
            'Buch <https://opengameart.org/users/buch>',
            'CC-BY 2.0',
            'https://opengameart.org/content/outdoor-tiles-again',

            '16x16 Game Assets',
            'George Bailey',
            'CC-BY 4.0',
            'https://opengameart.org/content/16x16-game-assets',

            'Tuxemon tileset',
            'Buch',
            'CC-BY-SA 3.0',
            'https://opengameart.org/content/tuxemon-tileset',

            'Orthographic outdoor tiles',
            'Buch',
            'CC0',
            'https://opengameart.org/content/orthographic-outdoor-tiles',

            'OPP2017 - Jungle and temple set',
            'OpenPixelProject.com',
            'CC0',
            'https://opengameart.org/content/opp2017-jungle-and-temple-set',

            'LPC Conifers',
            'bluecarrot16, b_o, Lanea Zimmerman (Sharm), Johann Charlot, Yar, Jetrel, Zabin, Hyptosis,',
            'Surt, and KnoblePersona',
            'CC-BY-SA 3.0 / GPL 2.0 / GPL 3.0',

            'Pine Tree Tiles',
            'b_o',
            'CC-BY-SA 3.0 / GPL 2.0',
            'https://opengameart.org/content/pine-tree-tiles',

            'Liberated Pixel Cup (LPC) Base Assets',
            'Lanea Zimmerman (Sharm)',
            'CC-BY-SA 3.0 / CC-BY 3.0 / GPL 3.0',
            'https://opengameart.org/content/liberated-pixel-cup-lpc-base-assets-sprites-map-tiles',

            'Shootem up graphic kit',
            'Johann Charlot',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/shootem-up-graphic-kit',

            'Isometric 64x64 Outside Tileset',
            'Yar',
            'CC-BY 3.0',
            'https://opengameart.org/content/isometric-64x64-outside-tileset',

            'Lots of trees and plants from OGA (DB32) tilesets pack 1',
            'Jetrel, Zabin, Hyptosis, Surt',
            'CC0',
            'https://opengameart.org/content/lots-of-trees-and-plants-from-oga-db32-tilesets-pack-1',

            'Pine Tree Pack',
            'KnoblePersona',
            'CC-BY 3.0',
            'https://opengameart.org/content/pine-tree-pack',

            'LPC Windows and Doors',
            'bluecarrot16, Lanea Zimmerman (Sharm) and Daniel Armstrong (HughSpectrum), Casper', 'Nilsson, Anamaris, Krusmira, Keith Karnage, Guido Bos, and Talosaurus.', 
            'License: CC-BY-SA 3.0 / GPL 3.0+',

            'Based on:',
            'LPC Base Assets',
            'Lanea Zimmerman (Sharm) and Daniel Armstrong (HughSpectrum).',
            'CC-BY-SA 3.0 / GPL 3.0+. ',
            'http://opengameart.org/content/liberated-pixel-cup-lpc-base-assets-sprites-map-tiles',

            'LPC art entry',
            'Casper Nilsson. ',
            'CC-BY-SA 3.0 / GPL 3.0+. ',
            'http://opengameart.org/content/lpc-cnilsson',

            'Steampun-a-fy (with concept art) by Anamaris and Krusmira',
            'CC-BY-SA 3.0 / GPL 3.0+. ',
            'http://opengameart.org/content/steampun-a-fy-with-concept-art',

            'Medieval town',
            'CC-BY 3.0',
            'Keith Karnage',
            'https://opengameart.org/content/medieval-town-0',

            'Old Frogatto houses',
            'Guido Bos',
            'CC0',
            'https://opengameart.org/content/old-frogatto-houses',

            'Cute dungeon LPC edit',
            'Evert, Buch, Lanea Zimmerman (Sharm)',
            'CC-BY 3.0',
            'https://opengameart.org/content/cute-dungeon-lpc-edit',

            'Spooky Castle Tileset',
            'Buch',
            'CC0',
            'https://opengameart.org/content/spooky-castle-tileset',

            'Old Eastern Themed Building Tiles + Tree',
            'Talosaurus',
            'CC0',
            'https://opengameart.org/content/old-eastern-themed-building-tiles-tree',

            'LPC Terrain',
            'bluecarrot16, Lanea Zimmerman (Sharm), Daniel Eddeland (Daneeklu), Richard Kettering', '(Jetrel), Zachariah Husiar (Zabin), Hyptosis, Casper Nilsson, Buko Studios, Nushio, ZaPaper,',
            'billknye, William Thompson, caeles, Redshrike, Bertram, and Rayane Félix (RayaneFLX)',

            'Liberated Pixel Cup (LPC) Base Assets (sprites & map tiles)',
            'Lanea Zimmerman (Sharm)',
            'CC-BY 3.0 / CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/liberated-pixel-cup-lpc-base-assets-sprites-map-tiles',

            '[LPC] Farming tilesets, magic animations and UI elements',
            'Daniel Eddeland (Daneeklu)',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/lpc-farming-tilesets-magic-animations-and-ui-elements',

            'ZRPG Tiles',
            'Richard Kettering (Jetrel), Zachariah Husiar (Zabin), Hyptosis, Lanea Zimmerman (Sharm), and',
            'Open Pixel Project.',
            'CC-BY-SA 3.0+',
            'https://opengameart.org/content/zrpg-tiles',

            'LPC C.Nilsson',
            'Casper Nilsson',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/lpc-cnilsson',

            'Frozen Lake [LPC]',
            'Buko Studios (http://www.buko-studios.com/) Commissioned by PlayCraft:', '(www.playcraftapp.com)',
            'CC-BY 3.0',
            'https://opengameart.org/content/frozen-lake-lpc',


            'LPC Animated Water and waterfalls',
            'ZaPaper',
            'CC-BY-SA 3.0',
            'https://opengameart.org/content/lpc-animated-water-and-waterfalls',

            'LPC More Water Transitions',
            'billknye',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/lpc-more-water-transitions',

            '[LPC] Sand+Rock Alt Colors',
            'William.Thompsonj, Daniel Eddeland',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/lpc-sandrock-alt-colors',

            '[LPC] Colorful Sand + Deep Water!',
            'Nushio',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/lpc-colorful-sand-deep-water',

            'LPC terrain extension',
            'caeles',
            'CC-BY-SA 3.0 / GPL 3.0',
            'https://opengameart.org/content/lpc-terrain-extension',

            'RPG Tiles: Cobble stone paths & town objects',
            'Zachariah Husiar (Zabin), Daniel Eddeland (Daneeklu), Richard Kettering (Jetrel), Hyptosis,', 'Redshrike, Bertram',
            'CC-BY-SA 3.0',
            'https://opengameart.org/content/rpg-tiles-cobble-stone-paths-town-objects',

            'RPG Terrains',
            'Rayane Félix (RayaneFLX)',
            'CC-BY-SA 3.0',
            'https://opengameart.org/content/rpg-terrains',

            'Sprites',
            'Antifarea',
            'https://opengameart.org/content/antifareas-rpg-sprite-set-1-enlarged-w-transparent-background',

            'Rougelike RPG Items',
            '@JoeCreates',
            'https://opengameart.org/content/roguelikerpg-items',

            'Pixel UI Pack',
            'Kenney Vleugels for Kenney (www.kenney.nl)',
            'Lynn Evers (Twitter: @EversLynn)',
            'License (Creative Commons Zero, CC0)',
            'http://creativecommons.org/publicdomain/zero/1.0/',
            'https://opengameart.org/content/ui-pack',




            'Background Images and Shop Scenes',
            'AI generated by Canvas Magic Media',
            'https://www.canva.com/ai-image-generator/',

            '',
            'Audio',
            'Level Up Sound Effects',
            'Bart Kelsey. Commissioned by Will Corwin for OpenGameArt.org (http://opengameart.org)',
            'https://opengameart.org/content/level-up-sound-effects',

            'RPG Sound Effects',
            'Kenney.nl, www.kenney.nl',
            'https://opengameart.org/content/50-rpg-sound-effects',

            'Inventory Sound Effects',
            'https://opengameart.org/content/inventory-sound-effects',

            'UI Sound Effects Pack',
            'Some of the sounds in this project were created by David McKee (ViRiX) soundcloud.com/virix',
            'https://opengameart.org/content/ui-sound-effects-pack',

            'Voices Sound Effects Library',
            'Attribute Little Robot Sound Factory, www.littlerobotsoundfactory.com',
            'https://opengameart.org/content/voices-sound-effects-library',

            'RPG Sound Pack',
            'https://opengameart.org/content/rpg-sound-pack',

            'Gui Sound Effects',
            'https://opengameart.org/content/gui-sound-effects',

            'Short Medieval Loop',
            'https://opengameart.org/content/short-medieval-loop',

            'Medieval Fartbrass',
            'Spring Spring',
            'https://opengameart.org/content/medieval-fartbrass',
            ];
            const textbox = this.add.rectangle(0, 0, 1100, 500, 0xFFFFFF);
            textbox.setInteractive();
            Phaser.Display.Align.In.Center(textbox, this.add.zone(650, 300, 1300, 600), 0, 30);
            textbox.alpha = 0.01;



            const mask = new Phaser.Display.Masks.GeometryMask(this, textbox);

            const text = this.add.text(0, 0, credits, { fontFamily: 'Arial', color: '#000000', align: "center", wordWrap: { width: 1100 } }).setOrigin(0);
            Phaser.Display.Align.In.Center(text, textbox, 0, 2150);

            text.setMask(mask);

            

            textbox.on('wheel', (pointer, deltaX, deltaY, deltaZ) =>{

            
            
                text.y += (deltaY * 2);

                text.y = Phaser.Math.Clamp(text.y, -4300, 100 );
            

        });


    }

    update(){

    }

}