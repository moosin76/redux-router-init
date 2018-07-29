import { Map } from "immutable";
import { createAction, handleActions } from "redux-actions";

// 액션 타입
const SET_HEADER_VISIBILITY = "base/SET_HEADER_VISIBILITY";

// 액션생성자
export const setHeaderVisibility = createAction(SET_HEADER_VISIBILITY);

// 초기 상태 정의
const initalState = Map({
  header: Map({
    visible: true
  })
});

// 리듀서 생성
export default handleActions({
  [SET_HEADER_VISIBILITY] : (state, action) => state.setIn(['header','visible'], action.payload)
}, initalState);