const {ccclass} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    start () {
        this.node.on("touchend",function() {
            cc.director.loadScene("Game");
        });
    }
}
