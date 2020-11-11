import {
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    SIGNUP_START,
    SIGNUP_SUCCESS,
    SIGNUP_FAILURE,
    ADD_PROJECT_START,
    ADD_PROJECT_SUCCESS,
    ADD_PROJECT_FAILURE,
    FETCH_PROJECT_START,
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_FAILURE,
    FETCH_PROJECT_ID_START,
    FETCH_PROJECT_ID_SUCCESS,
    FETCH_PROJECT_ID_FAILURE,
    EDIT_PROJECT_START,
    EDIT_PROJECT_SUCCESS,
    EDIT_PROJECT_FAILURE
} from '../actions/index'



const initialState = {
    projects:[],
    error:'',
    isLoading:true,
    project:{},
    // user_id:""
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
            return {
                ...state,
                isLoading:true
            }
        case LOGIN_SUCCESS:
            return {
                ...state, 
                // user_id: action.payload.data.id, 
                isLoading:false,
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                isLoading:false,
                error: action.payload.error
            }
        case SIGNUP_START:
            return {
                ...state,
            }
        case SIGNUP_SUCCESS:
            return {
                ...state,

            }
        case SIGNUP_FAILURE:
            return {
                ...state,

            }
        case ADD_PROJECT_START:
            return {
                ...state,
                isLoading:true
            }
        case ADD_PROJECT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                projects: [...state.projects, action.payload]
            }
        case ADD_PROJECT_FAILURE:
            return {
                ...state,
                isLoading:false,
                error: 'Something went wrong'
            }
        case FETCH_PROJECT_START:
            return {
                ...state,
                isLoading:true
            }
        case FETCH_PROJECT_SUCCESS:
            return {
                ...state,
                isLoading:false,
                projects: action.payload
            }
        case FETCH_PROJECT_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:'Something went wrong'
            }
        case FETCH_PROJECT_ID_START:
            return {
                ...state,
                isLoading:true
            }
        case FETCH_PROJECT_ID_SUCCESS:
            return {
                ...state,
                isLoading:false,
                project: action.payload
            }
        case FETCH_PROJECT_ID_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:'Something went wrong'
            }
        case EDIT_PROJECT_START:
            return {
                ...state,  
                isLoading:true
            }
        case EDIT_PROJECT_SUCCESS:
            return {
                ...state,
                project:[...state.project, action.payload]
            }
        case EDIT_PROJECT_FAILURE:
            return {
                ...state,
                error:'Something went wrong'
            }
        default:
            return state
    }
}

export default reducer