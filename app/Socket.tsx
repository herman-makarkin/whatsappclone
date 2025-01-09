import { io } from 'socket.io-client';
const BASE_URL = 'http://plainapp.ru:3000';
const Socket = io(BASE_URL);

export default Socket;
