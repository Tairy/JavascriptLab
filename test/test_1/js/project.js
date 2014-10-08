// var game = new Phaser.Game(800,600,Phaser.AUTO,'',{preload:preload, create: create, update: update});

// function preload(){
// 	game.load.image('sky','assets/sky.png');
// 	game.load.image('ground','assets/platform.png');
// 	game.load.image('star','assets/star.png');
// 	game.load.spritesheet('dude','assets/dude.png',32,48);
// }

// var player;
// var platforms;
// var cursors;

// var stars;
// var score = 0;
// var scoreText;

// function create(){
// 	game.physics.startSystem(Phaser.Physics.ARCADE);

// 	game.add.sprite(0,0,'sky');

// 	platforms = game.add.group();

// 	platforms.enableBody = true;

// 	var ground = platforms.create(0, game.world.height - 64, 'ground');

// 	ground.scale.setTo(2, 2);

// 	ground.body.immovable = true;

// 	var ledge = platforms.create(400,400,'ground');

// 	ledge.body.immovable = true;

// 	ledge = platforms.create(-150,250,'ground');

// 	ledge.body.immovable = true;

// 	player = game.add.sprite(32, game.world.height - 150, 'dude');

// 	game.physics.arcade.enable(player);

// 	player.body.bounce.y = 0.2;

// 	player.body.gravity.y = 300;

// 	player.body.collideWorldBounds = true;

// 	player.animations.add('left', [0, 1, 2, 3], 10, true);
//   player.animations.add('right', [5, 6, 7, 8], 10, true);

//   stars = game.add.group();

//   stars.enableBody = true;

//   for(var i = 0; i < 12; i++){
//   	var star = stars.create(i * 70, 0, 'star');

//   	star.body.gravity.y = 300;

//   	star.body.bounce.y = 0.7 + Math.random() * 0.2;
//   }

//   scoreText = game.add.text(16,16,'score: 0',{fontSize:'32px', fill:'#000'});
//   cursors = game.input.keyboard.createCursorKeys();
// }

// function update(){
// 	game.physics.arcade.collide(player,platforms);
// 	game.physics.arcade.collide(stars,platforms);

// 	game.physics.arcade.overlap(player, stars, collectStar, null,this);

// 	player.body.velocity.x = 0;

// 	if(cursors.left.isDown){
// 		player.body.velocity.x = -150;

// 		player.animations.play('left');
// 	}else if(cursors.right.isDown){
// 		player.body.velocity.x = 150;

// 		player.animations.play('right');
// 	}else{
// 		player.animations.stop();

// 		player.frame = 4;
// 	}

// 	if(cursors.up.isDown && player.body.touching.down){
// 		player.body.velocity.y = -350
// 	}
// }

// function collectStar (player, star){
// 	star.kill();

// 	score += 10;
// 	scoreText.text = 'Score:' + score;
// }

var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update: update, render: render });

function preload() {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('phaser', 'assets/sky.png');

}

var sprite;

function create() {

    //  To make the sprite move we need to enable Arcade Physics
    game.physics.startSystem(Phaser.Physics.ARCADE);

    sprite = game.add.sprite(game.world.centerX, game.world.centerY, 'phaser');
    sprite.anchor.set(0.5);

    //  And enable the Sprite to have a physics body:
    game.physics.arcade.enable(sprite);

}

function update () {

    //  If the sprite is > 8px away from the pointer then let's move to it
    if (game.physics.arcade.distanceToPointer(sprite, game.input.activePointer) > 8)
    {
        //  Make the object seek to the active pointer (mouse or touch).
        game.physics.arcade.moveToPointer(sprite, 300);
    }
    else
    {
        //  Otherwise turn off velocity because we're close enough to the pointer
        sprite.body.velocity.set(0);
    }

}

function render () {

	game.debug.inputInfo(32, 32);

}