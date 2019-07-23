import Cookie from "js-cookie";
import jwt_decode from 'jwt-decode'

const storeData = {
  save(vuexContext, token) {
    let dc = jwt_decode(token);
    let expTime = dc.exp * 1000;
    let expDate = (dc.exp - dc.iat)/(24 * 60 * 60);
    vuexContext.commit("setToken", token);
    localStorage.setItem("token", token);
    localStorage.setItem(
      "tokenExpiration",
      // new Date().getTime() +  24 * 60 * 60 * 1000
      expTime
    );
    Cookie.set("jwt", token, { expires: expDate });
    Cookie.set(
      "expirationDate",
      expTime,
      // new Date().getTime() +  24 * 60 * 60 * 1000,
      { expires: expDate }
    );
  },
  updateToken (vuexContext, data) {
    Cookie.set("jwt", data);
    if (process.client) {
      localStorage.setItem("token", data);
    }
  },
  clearStore (vuexContext) {
    vuexContext.commit("clearToken");
    Cookie.remove("jwt");
    Cookie.remove("expirationDate");
    if (process.client) {
      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
    }
  }
};

export default storeData
