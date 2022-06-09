const EventEmitter = require('events');

/**
 * 
 * This module, in particular, offers the EventEmitter class, which we'll use to handle our events.
 * 
 * This object exposes, among many others, the on and emit methods.
 * 
 * `emit` is used to trigger an event
 * 
 * `on` is used to add a callback function that's going to be executed when the event is triggered
 * 
 * 
 */
const eventEmitter = new EventEmitter();

eventEmitter.on('start', () => {
    console.log('I am event Emitter');
})

eventEmitter.emit('start')