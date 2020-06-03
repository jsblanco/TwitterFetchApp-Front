import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import { all } from "redux-saga/effects";
import tweetsSaga from "./redux-components/saga";
import reducers from "./redux-components/reducers";

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  reducers,
  compose(
    applyMiddleware(sagaMiddleware),
    typeof window === "object" &&
      typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);

function* rootSaga() {
  yield all([tweetsSaga()]);
}

sagaMiddleware.run(rootSaga);