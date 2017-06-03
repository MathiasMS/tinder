import { FETCH , RETURN} from '../constants';
import axios from 'axios';
const config = {
    headers: {
        'Content-Type': 'application/json',
    }
};

export function loadData () {
    return {
        type: FETCH,
        payload:  axios.post('http://localhost:8081/app/tinder/recommendations', {
            authToken: '7317e1df-cd49-4989-bf15-77dad4c2bf74' }, config)
    }
}