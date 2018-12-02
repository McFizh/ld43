const {ccclass, property} = cc._decorator;

declare global {
    interface Window { audioPlayer: cc.Node; }
}

@ccclass
export default class NewClass extends cc.Component {
    @property({
        type: cc.AudioClip
    })
    song1 = null;

    onLoad () {

        if(typeof window.audioPlayer == "undefined" || window.audioPlayer == null) {
            var node = new cc.Node();
            node.name = "AudioPlayer";
            node.addComponent(cc.AudioSource);
            var ac = node.getComponent(cc.AudioSource);
            ac.clip = this.song1;
            ac.loop = true;
            ac.play();

            window.audioPlayer = node;
        }

    }
}
