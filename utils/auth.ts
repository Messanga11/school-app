//import { isValidPhoneNumber } from "react-phone-number-input";

import SecureLS from "secure-ls";

const ls = new SecureLS({encodingType: 'aes'})

export const getAuthInfos = () => {
  return {
    isUserLogged: () => ls.get("cp_102398_token") || null,
    isUserPro: () => ls.get("cp_102398_pro_token") || null,
    user: () => ls.get("cp_102398_user") || null,
    userPro: () => ls.get("cp_102398_pro_user") || null,
  };
};