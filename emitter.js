

class Emitter{
    constructor() {
        this.events = {};
    }

    on(type, listener){
        if(!this.events){
            this.events = {};
        }

        if(this.events[type]){
            this.events[type].push(listener);
        }else {
            this.events[type] = [listener];
        }
    }

    emit(type, ...args){
        this.events[type].forEach( fn => fn.call(this, ...args))
    }

    off(type, listener){
        if(this.events[type]){
            const index = this.events[type].indexOf(listener);
            this.events[type].splice(index, 1);
        }
    }

    once(type, listener){
        let self = this;
        self.on(type, function (...args){
            listener.call(this, ...args);
            self.off(type, listener);
        })
    }
}
const ev = new Emitter();

ev.on('a', function (value){
    console.log('on:' + value);
});
ev.once('b', function (value){
    console.log('once:' + value);
})
ev.emit('a', '7777');
ev.emit('a', '7777');
ev.emit('b', '7777');
ev.emit('b', '7777');
