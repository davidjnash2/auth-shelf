import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_ITEM" actions

function* fetchItems() {

    try {
        const items = yield axios.get('api/shelf')
        console.log('get all the items rom the shelf', items);
        yield put ({
            type: "SET_ITEMS",
            payload:items.data
        })}
        catch(error) {
            console.log('error getting items', error);

        }

    }
    
function* itemsSaga() {
    yield takeLatest('FETCH_ITEMS', fetchItems);
}

 
    export default itemsSaga;