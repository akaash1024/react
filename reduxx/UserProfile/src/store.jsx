import { createStore } from 'redux'


//action type


const UPDATE_USER = 'userProfile/update';
const RESET_USER = 'userProfile/reset';


//action creaters
export const update = (name, email, age) => {
    return {
        type: UPDATE_USER,
        payload: { name, email, age }
    }
}

export const reset = () => {
    return {
        type: RESET_USER
    }
}

//initiail value

const initialState = {
    name: 'Akash',
    email: 'akash@gamil.com',
    age: 23
}

const UserProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_USER:
            return {
                ...state,
                ...action.payload
            }
        case RESET_USER:
            return initialState
        default:
            return state;
    }
}

export const store = createStore(UserProfileReducer)


