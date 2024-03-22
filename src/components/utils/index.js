import axios from "axios";

export function getToken() {
  const authObjString = localStorage.getItem("authObj");
  let authObj;
  if (authObjString) {
    authObj = JSON.parse(authObjString);
  }

  const token = authObj?.token;

  return token;
}
