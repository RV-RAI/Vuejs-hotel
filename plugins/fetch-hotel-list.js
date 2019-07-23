export default async context => {
  const { store } = context
  if (store.state.auth.user) {
    try {
      const {data} = await context.$axios.post("/get_scraper_lists", {company_id: 5})
      await store.commit("setHotelList", data)
      const defaultHotel = data.find(i => i.id === 186)
      if (defaultHotel) {
        await store.commit("setDefaultHotel", defaultHotel)
      }
    } catch (e) {
      console.log('client get hotel list error: ', e);
      return context.redirect('/server-error')
    }
  }
}
