import {ADD_PERSON} from '../constants'

export const personAction = (personObj) => ({type: ADD_PERSON, data:personObj})