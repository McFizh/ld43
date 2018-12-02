const {ccclass,property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    @property(cc.Label)
    labelNode = null;

    start () {
        var nodeRef = this;

        this.node.on("touchend",function() {
            if(window.audioPlayer) {
                var ac = window.audioPlayer.getComponent(cc.AudioSource)
                var lbl = nodeRef.labelNode;

                if(ac.isPlaying) {
                    ac.stop();
                    lbl.string="Enable audio";
                } else {
                    ac.play();
                    lbl.string="Disable audio";
                }
            }
        });

    }
}
