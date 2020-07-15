import CryptoJs from "crypto-js";

export const emailHash = (email) =>
  CryptoJs.MD5(email.trim().toLowerCase()).toString();
