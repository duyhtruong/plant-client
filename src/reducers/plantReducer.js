import _ from 'lodash';

export default (state={}, action) =>{
    switch(action.type){
        case 'GET_PLANTS':
            return {...state, ..._.mapKeys(action.payload, '_id')};
        case 'GET_PLANT':
            return {...state, [action.payload._id] : action.payload};
        case 'CREATE_PLANT':
            return {...state, [action.payload._id] : action.payload};
        case 'DELETE_PLANT':
            return _.omit(state, action.payload);
        case 'EDIT_PLANT':
            return {...state, [action.payload._id] : action.payload};
        default:
            return state;
    }
}