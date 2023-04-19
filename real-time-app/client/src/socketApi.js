import io from 'socket.io-client';
let socket;

export const init = () => {
    console.log("Connecting to the server...")
    socket = io('http://localhost:3001',{
        transports: ['websocket'],
    });

    socket.on('connect', () => {
        console.log("Connected to the server!")
    })
}

export const send = (color) => {
    socket.emit('newColor', color); // Client'ta iken server'a gönderme, server'da iken client'a gönderme
    // Backend'de newColor eventi varsa, client'ta da newColor eventi olmalı

}

export const subscribe = (cb) => {
    socket.on('receive', (color) => {
        cb(color);
    })
}