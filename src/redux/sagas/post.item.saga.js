import axios from 'axios'; 
import { put, takeLatest } from 'redux-saga/effects';


function* postItem(action){
    try{ 
        yield axios.post('/api/shelf/', action.payload);

        yield put({
            type: 'FETCH_ITEM'
        });
    } catch (error){
        console.log(err,'error in postItem Saga');
        if(error.response.status ===500){

            yield put ({type:'POST_ERR'});
        }
    }
}

export default postItem;