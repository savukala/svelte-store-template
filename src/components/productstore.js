import { writable } from 'svelte/store';

//Create writable storage values for the quantities of ordered items
export const circleQuantity = writable(0);
export const rectangleQuantity = writable(0);
export const triangleQuantity = writable(0);
