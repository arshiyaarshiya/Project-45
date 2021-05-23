class Game{
    constructor(){

    }

    // to get gameState 
    getstate(){
        var gameref = database.ref('gameState');
        gameref.on("value",(data) =>{
            gameState = data.val();
        });
    }

    // update gameState
    updateState(state){
        database.ref('/').update({
            gameState: state
        });
    }

    async start(){
        //0
        if(gameState === 0){
            player = new Player();

       var playerCountRef = await database.ref('playerCount').once("value");
       if(playerCountRef.exists()){
           playerCount = playerCountRef.val();
           player.getCount();
       }
       form = new From();
       form.display();
    }

       basket1.addImage(basket1_i);
       basket2.addImage(basket1_i);
        players = [basket1,basket2];
    }

    playLevel1(){
        //1
        if(gameState === 1){
            form.hide();
            Player.getPlayerIfo();
            var x = 200;
            var y = 300;
            var index = 0;
            for(var plr in allPlayer){
                index=index+1;
                players(index-1).x=x;
                players(index-1).y=y;
                if(index===player.index){

                }
                //scores
            }
            //keydown condition
            if (frameCount % 60 === 0 ){
                life = createSprite(random(100,900),50);
                life.addImage(life_i);
                life.velocityY = 2;
                life.scale = 0.08;
                life.lifetime = 500;
            }
            //to destroy life
        }
    }

    playLevel2(){
        //2
    }

    playLevel3(){
        //3
    }
    
    end(){
        //4
    }
}