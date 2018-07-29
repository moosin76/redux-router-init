import { createStore } from "redux";
import modules from './modules';

// Todo react-hot-loader 적용

const configurStore = (initialState) => {
  // 크롬의 Redux dev툴 연결
  const store = createStore(modules, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  // hot-reloading을 위한 코드
  if (module.hot) {
    module.hot.accept('./modules', ()=>{
      const nextRootReducer = require('./modules').default;
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
}

export default configurStore;