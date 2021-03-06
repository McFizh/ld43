const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    modal: cc.Node = null;

    @property(cc.Node)
    controlNode: cc.Node = null;

    start () {
        this.node.on("touchend", () => {
            this.modal.active = true;

            var gc = this.controlNode.getComponent("GameController");
            gc._paused = true;
        });
    }
}
