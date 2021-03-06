import { auth, DB } from "@/services/fireinit.js"

export default context => {
  const { store } = context

  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      store.commit("auth/setUser", user)
      resolve()
    })
  })
}
