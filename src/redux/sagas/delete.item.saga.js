import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEM" actions

function* deleteItems(action) {
    console.log('DELETE SAGA ACTIVATED!');

    try {
        yield axios.delete(`/api/shelf/${action.payload}`)
        yield put ({
            type: "FETCH_ITEMS",
           
        })}
        catch(error) {
            console.log('error getting items', error);

        }

    }
    
function* deleteItem() {
    yield takeLatest('DELETE_ITEMS', deleteItems);
}

 
    export default deleteItem;