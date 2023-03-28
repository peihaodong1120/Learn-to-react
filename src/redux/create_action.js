import {ADD, SUBSCRIBE}from './common'

export const addCount =(data) => ({type: ADD,data})
export const subscribeCount =(data) => ({type: SUBSCRIBE,data})