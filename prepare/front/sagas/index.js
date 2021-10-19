import { all, fork } from "@redux-saga/core/effects";
import postSaga from "./post";
import userSaga from "./user";
import { backUrl } from "../config/config";

import axios from "axios";

axios.defaults.baseURL = backUrl;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga), fork(postSaga)]);
}
