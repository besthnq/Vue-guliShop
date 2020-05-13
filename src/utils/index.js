import { v4 as uuidv4 } from 'uuid'

// 获取当前用户临时ID
export function getUserTempId (){
  let userTempId = localStorage.getItem("USER_TEMP_ID_KEY");
  if (!userTempId) {
    userTempId = uuidv4();
    localStorage.setItem("USER_TEMP_ID_KEY", userTempId);
  }
  return userTempId;
}
