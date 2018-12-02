const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    controlNode: cc.Node = null;

    start () {
        this.node.on("touchend", () => {
            var gc = this.controlNode.getComponent("GameController");
            if(gc._doubleSpeed) {
                gc._doubleSpeed = false;

            } else {
                gc._doubleSpeed = true;

            }
        });
    }
}
