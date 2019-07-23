export default function (vuexContext, req) {
  let token;
  let expirationDate;
  if (req) {
    if (!req.headers.cookie) {
      return;
    }
    const jwtCookie = req.headers.cookie
      .split(";")
      .find(c => c.trim().startsWith("jwt="));
    if (!jwtCookie) {
      return;
    }
    token = jwtCookie.split("=")[1];
    expirationDate = req.headers.cookie
      .split(";")
      .find(c => c.trim().startsWith("expirationDate="))
      .split("=")[1];
  } else if (process.client) {
    token = localStorage.getItem("token");
    expirationDate = localStorage.getItem("tokenExpiration");
  }
  if (new Date().getTime() > +expirationDate || !token) {
    console.log("No token or invalid token");
    vuexContext.dispatch("logout");
    return;
  }
  vuexContext.commit("setToken", token);
}
