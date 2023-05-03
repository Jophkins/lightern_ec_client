import {$authHost, $host} from "./index";

export const createOrder = async (order) => {
  const {data} = await $host.post('api/order', order);
  return data;
}

export const fetchOrders = async () => {
  const {data} = await $host.get('api/order');
  return data;
}

export const fetchOneOrder = async (id) => {
  const {data} = await $host.get('api/order/' + id);
  return data;
}

