import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Root from "./Root";
import registerServiceWorker from "./registerServiceWorker";
import { AppContainer } from "react-hot-loader";
import configureStore from './redux/configureStore';

const store = configureStore(); // 스토어 생성

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} />
    </AppContainer>,
    document.getElementById("root")
  );
};

render(Root);

if (module.hot) {
  module.hot.accept('./Root', ()=>render(Root));
}
registerServiceWorker();
