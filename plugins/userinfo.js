import { auth, DB } from "@/services/fireinit.js"

export default async context => {
  const { store } = context

  try {
    let user = await auth.currentUser
    if (user) {
      let querySnapshot = await DB.collection("users").get()
      await querySnapshot.forEach(async doc => {
        let item = await doc.data()
        if (user.uid === item.uid) {
          await store.commit("auth/setHotelID", item.hotelId)
          await store.commit("auth/setHotelInfo", item)
        }
      })
    }
  } catch (e) {
    console.log(e)
  }
}
