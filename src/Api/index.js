import axios from 'axios';

//we use the same port of our heroku local server port
const url = 'http://localhost:5000';

//requests to routes
export const fetchOrders = () => axios.get(url + '/ItemsList');
export const createOrder = (newOrder) => axios.post(url+ '/items', newOrder);
export const createUser = (newUser) => axios.post(url+ '/signup', newUser);
export const checkUser = (savedUser) => axios.post(url+ '/signin', savedUser);