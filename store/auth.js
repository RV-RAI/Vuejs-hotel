import {auth, storage} from "@/services/fireinit"
import firebase from "firebase"

export const state = () => ({
  user: null,
  errMsg: null,
  errMsgSignUp: null,
  hotelID: "",
  hotelInfo: {}
})

export const mutations = {
  setUser(state, data) {
    state.user = data
  },
  setErrMess(state, msg) {
    state.errMsg = msg
  },
  setErrMessSignUp(state, msg) {
    state.errMsgSignUp = msg
  },
  setHotelID(state, id) {
    state.hotelID = id
  },
  setHotelInfo(state, info) {
    state.hotelInfo = info
  }
}

export const actions = {
  async emailLogin({commit}, form) {
    try {
      const {user} = await auth.signInWithEmailAndPassword(form.email, form.password)
      await commit("setUser", user)
      await commit("setErrMess", null)

      const {data} = await this.$axios.post("/get_scraper_lists", {company_id: 5})
      await commit("setHotelList", data, {root: true})
      const defaultHotel = data.find(i => i.id === 186)
      if (defaultHotel) {
        await commit("setDefaultHotel", defaultHotel, {root: true})
      }
    } catch (e) {
      console.log(e)
      let errorCode = e.code
      let errorMessage = e.message
      commit("setErrMess", {
        type: "error",
        message: errorMessage
      })
    }
  },
  // async signUpWithEmail({ commit }, user) {
  //   try {
  //     await auth.createUserWithEmailAndPassword(user.email, user.confirm)
  //     await commit("setErrMessSignUp", null)
  //
  //     await this.$router.push("/signup/step2")
  //   } catch (e) {
  //     let errorCode = e.code
  //     let errorMessage = e.message
  //     commit("setErrMessSignUp", errorMessage)
  //   }
  // },
  async changeUserPw({}, pw) {
    // reauthenticate(pw.oldPw)
    //   .then(() => {
    //   let user = auth.currentUser;
    //   user.updatePassword(pw.newPw)
    //     .then(() => {
    //     return console.log("Password updated!");
    //   })
    //     .catch((error) => { console.log(error); });
    // }).catch((error) => { console.log(error); });
    try {
      let res = await reauthenticate(pw.oldPw)
      if (res) {
        let user = auth.currentUser
        await user.updatePassword(pw.newPw)
        console.log("Password updated!")
        return {
          type: "success",
          message: "編集が完了しました"
        }
      }
    } catch (e) {
      console.log(e)
      return {
        type: "error",
        msg: e.message
      }
    }
  },
  async decideHotelID({commit}, id) {
    try {
      await commit("setHotelID", id)
    } catch (e) {
      let errorCode = e.code
      let errorMessage = e.message
      commit("setErrMessSignUp", errorMessage)
    }
  },
  logOut({commit}) {
    auth.signOut()
    commit("setUser", null)

    this.$router.push("/login")
  },
  async uploadProfImage({}, file) {
    // Get current username
    const user = auth.currentUser;

    try {
      // Create a Storage Ref w/ username
      const storageRef = storage.ref(user.uid + '/profilePicture/' + "profile.png");

      // Upload file
      const task = await storageRef.put(file);
      console.log(task)
      const profileUrl = storageRef.getDownloadURL().i
      console.log(typeof storageRef.getDownloadURL())

      await auth.currentUser.updateProfile({
        photoURL: profileUrl
      })
      console.log(user)

    } catch
      (e)
      {
        console.log(e)
      }
    }
  }

  function reauthenticate(currentPassword)
{
  let user = auth.currentUser
  let credential = firebase.auth.EmailAuthProvider.credential(
    user.email,
    currentPassword
  )
  return user.reauthenticateAndRetrieveDataWithCredential(credential)
}
