import { FETCH_PENDING, FETCH_FULFILLED, FETCH_REJECTED, RETURN} from '../constants';

const initialState = {
    loading: false,
    failed: false,
    data: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_PENDING:
            return Object.assign({}, state, {data: null, loading: true, failed: false });
        case FETCH_FULFILLED:
            return {...state, data: action.payload.data, loading: false, failed: false };
        case FETCH_REJECTED:
            return Object.assign({}, state, {data: null, loading: false, failed: true });
        default:
            return state;
    }
}
