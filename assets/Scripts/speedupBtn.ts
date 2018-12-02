const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Node)
    controlNode: cc.Node = null;

    @property(cc.SpriteFrame)
    spdNormalNorm: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    spdNormalPress: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    spdFastNorm: cc.SpriteFrame = null;

    @property(cc.SpriteFrame)
    spdFastPress: cc.SpriteFrame = null;


    start () {
        this.node.on("touchend", () => {
            var gc = this.controlNode.getComponent("GameController");
            var btn = this.getComponent(cc.Button);
            if(gc._doubleSpeed) {
                gc._doubleSpeed = false;
                btn.normalSprite = this.spdNormalNorm;
                btn.pressedSprite =this.spdNormalPress;
            } else {
                gc._doubleSpeed = true;
                btn.normalSprite = this.spdFastNorm;
                btn.pressedSprite =this.spdFastPress;
            }
        });
    }
}
