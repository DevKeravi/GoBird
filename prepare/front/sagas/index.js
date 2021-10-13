import { all, fork } from "@redux-saga/core/effects";
import postSaga from "./post";
import userSaga from "./user";

import axios from "axios";

axios.defaults.baseURL = "http://localhost:3065";

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
