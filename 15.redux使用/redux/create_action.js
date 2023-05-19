import {ADD, SUBSCRIBE}from './constant'

export const addCount =(data) => ({type: ADD,data})
export const subscribeCount =(data) => ({type: SUBSCRIBE,data})