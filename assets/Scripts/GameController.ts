const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Label)
    uilabel: cc.Label = null;

    @property(cc.Node)
    gamecanvas: cc.Node = null;

    //
    _paused: boolean;
    _money: number;
    _level: number;
    _wave: number;
    _nextWaveIn: number;
    _waveRunning: boolean;
    _health: number;
    _doubleSpeed: boolean;

    //
    _uiBlocks: Array<number> = [
        0,10,1,10,2,10,3,10,4,10,5,10,
        0,11,1,11,2,11,3,11,4,11,5,11
    ];

    //
    _levelGroundBlocks: Array<Array<number>> = [
        [   0,2,1,2,2,2,3,2,4,2,  0,3,1,3,2,3,3,3,
            3,4,3,5,3,6,4,6,      4,7,5,7,6,7,7,7,
            8,7,8,8,8,9,9,9,      10,9,11,9,12,9,12,8,12,7,
            12,6,12,5,12,4,12,3,12,2, 13,2,14,2,15,2,16,2 ]
    ];

    // LIFE-CYCLE CALLBACKS:
    onLoad () {
        this.resetVariables();
        this.updateUiLabel();

        setInterval( this.handleGameTick.bind(this), 1000 );

        this.gamecanvas.on("touchstart", this.handleCanvasTouch.bind(this) );
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

    handleCanvasTouch(e) {

        var touch = e.touch.getLocation();
        var gridX = Math.round( touch.x/58 );
        var gridY = Math.round( touch.y/58 );

        // Ignore clicks on ui elements
        for(let l1=0; l1<this._uiBlocks.length; l1+=2) {
            if(gridX == this._uiBlocks[l1] && gridY == this._uiBlocks[l1+1] )
                return;
        }

        // Ignore clicks on level road blocks
        var lblocks = this._levelGroundBlocks[this._level-1];
        for(let l1=0; l1<lblocks.length; l1+=2) {
            if(gridX == lblocks[l1] && gridY == lblocks[l1+1] )
                return;
        }

        //
        console.log( gridX, gridY );
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
