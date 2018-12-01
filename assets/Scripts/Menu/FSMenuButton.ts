const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Label)
    labelNode: cc.Label = null;

    start () {
        // On debugmode, the element is called GameDiv
        var gameDiv = document.getElementById("GameDiv");

        // But on build version, the div is called: Cocos2dGameContainer
        if(!gameDiv) {
            gameDiv = document.getElementById("Cocos2dGameContainer");
        }

        if(gameDiv) {
            this.node.on("touchend", () => {
                if(cc.screen['fullScreen']()) {
                    cc.screen['exitFullScreen'](gameDiv);
                } else {
                    cc.screen['requestFullScreen'](gameDiv, this.onFullscreen.bind(this) );
                }
            });
        }
    }

    onFullscreen () {
        if( cc.screen['fullScreen']() ) {
            this.labelNode.string = "Exit fullscreen";
        } else {
            this.labelNode.string = "Enter fullscreen";
        }
    }
}
