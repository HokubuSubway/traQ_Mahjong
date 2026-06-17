export class Tile {
    public id : number;
    public shurui : number;
    public kazu : number;
    public akadora : boolean;
    public tsugi : number;
    public tate : string;
    public yoko : string;
    public dd : number;
    public modifier : string;
    constructor(id : number, category : number, value : number, red : boolean, next : number, fn1 : string, fn2 : string){
        this.id = id;
        this.shurui = category;
        this.kazu = value;
        this.akadora = red;
        this.tsugi = next;
        this.tate = fn1 + (this.akadora?'.flashy':'');
        this.yoko = fn2 + (this.akadora?'.flashy':'');
        this.modifier = '';
        this.dd = 0;
    }
    dora(){
        this.dd += 1;
        switch(this.dd){
            case 1: this.modifier = (this.shurui >= 3)?'.flashy':'.parrot'; break;
            case 2: this.modifier = '.rainbow'; break;
            case 3: this.modifier = '.inversion'; break;
            case 4: this.modifier = '.attract'; break;
        }
    }
    tsumoho(){
        this.modifier += '.atsumori';
    }
}
export class Tiles {
    public id : number;
    public nakami : Tile[];
    constructor(id : number){
        this.id = id;
        this.nakami = [];
    }
    add1(t1 : Tile){
        this.nakami.push(t1);
    }
    add2(t1 : Tile, t2 : Tile){
        this.nakami.push(t1);
        this.nakami.push(t2);
    }
    add3(t1 : Tile, t2 : Tile, t3 : Tile){
        this.nakami.push(t1);
        this.nakami.push(t2);
        this.nakami.push(t3);
    }
    add4(t1 : Tile, t2 : Tile, t3 : Tile, t4 : Tile){
        this.nakami.push(t1);
        this.nakami.push(t2);
        this.nakami.push(t3);
        this.nakami.push(t4);
    }
    shuffle(){
        var new_nakami : Tile [] = [];
        for(var i = this.nakami.length; i > 0; i--){
            var a = Math.floor(Math.random() * i);
            var b = this.nakami.splice(a, 1)[0];
            if(b != undefined){
                new_nakami.push(b);
            }
        }
        this.nakami = new_nakami.splice(0, new_nakami.length);
    }
    toridasu(idx : number, kazu : number){
        return this.nakami.splice(idx, kazu);
    }
    nakami_change(nakami : Tile[]){
        this.nakami = nakami;
    }
    narabekae(){
        var tmp0 : number[] = [];
        var tmp1 : Tile[] = [];
        for(var i = 0; i < this.nakami.length; i++){
            var c = this.nakami[i];
            if(c != undefined){
                tmp0.push(c.shurui * 200 + c.kazu * 20 + i);
                tmp1[c.shurui * 200 + c.kazu * 20 + i] = c;
            }
        }
        this.nakami = [];
        tmp0.sort((a, b) => a - b);
        for(var i = 0; i < tmp0.length; i++){
            var t;
            var t0 = tmp0[i];
            if(t0 != undefined){
                t = tmp1[t0];
            }
            if(t != undefined){
                this.nakami.push(t);
            }
        }
    }
    mojiretsu(){
        var a = '';
        for(var i = 0; i < this.nakami.length; i++){
            var b = this.nakami[i];
            a += `:mahjong${b?.tate}${b?.modifier}:`;
        }
        return a;
    }
}