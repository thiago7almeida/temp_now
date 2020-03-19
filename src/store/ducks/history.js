export const Types = {
  ASYNC_GET_HISTORY: "history/ASYNC_GET_HISTORY",
  GET_HISTORY_SUCCESS: "history/GET_HISTORY_SUCCESS",
  RESET_HISTORY_DATA: "history/RESET_HISTORY_DATA"
};

const initialState = {
  data: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case Types.RESET_HISTORY_DATA:
      return { ...state, date: [] };
    case Types.GET_HISTORY_SUCCESS:
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state;
  }
}

export function getHitory() {
  return {
    type: Types.ASYNC_GET_HISTORY
  };
}
export function getHitorySuccess({ data }) {
  return {
    type: Types.GET_HISTORY_SUCCESS,
    payload: { data }
  };
}
export function resetHistoryData() {
  return {
    type: Types.RESET_HISTORY_DATA
  };
}
