/* eslint-disable prettier/prettier */
import {combineReducers} from 'redux';

const initialState = {
  loading: false,
  moreLoading: false,
  error: null,
  moreError: null,
  data: [] as any,
  isListEnd: false,
};

const PhotoReducers = (state = initialState, action: { type: any; payload: { page: number; }; data: { photos: any; }; error: any; }) => {
  console.log({action});
  switch (action.type) {
    case 'API_REQUEST':
      if (action.payload.page === 1) {
        return {...state, loading: true};
      } else {
        return {...state, moreLoading: true};
      }
    // react redux actionlarına bak burda datada sorun var.
    case 'API_SUCCESS':
      return {
        ...state,
        data: [...state.data, ...action.data.photos],
        error: '',
        loading: false,
        moreLoading: false,
      };

    case 'API_FAILURE':
      return {
        ...state,
        error: action.error,
        loading: false,
        moreLoading: false,
      };

    case 'API_LIST_END':
      return {
        ...state,
        isListEnd: true,
        loading: false,
        moreLoading: false,
      };

    default:
      return state;
  }
};

export const rootReducer = combineReducers({
  photos: PhotoReducers,
});
