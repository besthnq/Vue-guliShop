import { v4 as uuidv4 } from "uuid";

// 获取当前用户临时ID
export function getUserTempId() {
  let userTempId = localStorage.getItem("USER_TEMP_ID_KEY");
  if (!userTempId) {
    userTempId = uuidv4();
    localStorage.setItem("USER_TEMP_ID_KEY", userTempId);
  }
  return userTempId;
}

// 保存登录用户信息
export const saveUserInfo = (userInfo) => {
  localStorage.setItem("USER_INFO_KEY", JSON.stringify(userInfo));
};

// 获取用户登录信息
export function getUserInfo() {
  return JSON.parse(localStorage.getItem("USER_INFO_KEY")) || {};
}

// 清除保存的用户信息
export function removeUserInfo() {
  localStorage.removeItem("USER_INFO_KEY");
}
