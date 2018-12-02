const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    uilabel: cc.Label = null;

    //
    _paused: boolean;
    _money: number;
    _level: number;
    _wave: number;
    _nextWaveIn: number;
    _waveRunning: boolean;
    _health: number;
    _doubleSpeed: boolean;

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.resetVariables();
        this.updateUiLabel();
        setInterval( this.handleGameTick.bind(this), 1000 );
    }

    start () {

    }

    update (dt) {
        // Do nothing while paused
        if(this._paused)
            return;

    }

    // **********************************************************************
    // * Game related methods
    // **********************************************************************
    doReset() {
        this.resetVariables();
        this.updateUiLabel();
    }

    resetVariables() {
        this._paused = false;
        this._money = 100;
        this._level = 1;
        this._wave = 1;
        this._nextWaveIn = 20;
        this._waveRunning = false;
        this._health = 5;
        this._doubleSpeed = false;
    }

    updateUiLabel() {
        var txt =
        "Health: "+this._health+"\n"+
        "Money: "+this._money+"\n"+
        "Level: "+this._level+" , wave: "+this._wave+" / 3"+"\n";

        if(!this._waveRunning) {
            txt+="Next wave in: "+this._nextWaveIn+" s";
        }

        this.uilabel.string = txt;
    }

    handleGameTick() {
        // Do nothing while paused
        if(this._paused)
            return;

        // Timer until next wave starts running
        if(!this._waveRunning) {
            this._nextWaveIn -= ( this._doubleSpeed ? 2:1 );
            if(this._nextWaveIn <= 0) {
                this._nextWaveIn = 0;
                this._waveRunning = true;
                // TODO: Start wave
            }
            this.updateUiLabel();
        }


    }

}
