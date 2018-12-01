const {ccclass} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    start () {
        this.node.on("touchstart",function() {
            cc.director.loadScene("Game");
        });
    }
}
