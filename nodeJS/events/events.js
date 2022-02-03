const { EventEmitter } = require('events')
const ev = new EventEmitter()
// console.log(ev)

/*
//- ouvindo emissão de eventos
ev.on('saySomething', (message) => {
    console.log('Eu ouvi você', message)
}) //execução de eventos
*/

//- ouvindo eventos uma unica vez
ev.once('saySomething', (message) => {
    console.log('Eu ouvi você', message)
}) //execução de eventos

//- emitindo evento
ev.emit('saySomething', 'Ana')
ev.emit('saySomething', 'Bea')
ev.emit('saySomething', 'Lia')