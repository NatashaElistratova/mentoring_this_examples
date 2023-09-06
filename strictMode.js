'use strict';

function func(isEmpty, text) {
    let message = 'Test'

    if (!isEmpty) {
        message = text;
    }
    return this
}

console.log(func(false, 'Message'))

