export const strict = false

export const state = () => ({
  locales: ['en', 'jp'],
  locale: 'en',
  hotelListState: [],
  defaultHotel: {},
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  setHotelList(state, data) {
    state.hotelListState = data
  },
  setDefaultHotel(state, data) {
    state.defaultHotel = data
  },
};

export const actions = {
  async fetchHotelList({commit, redirect}) {
    try {
      const {data} = await this.$axios.post("/get_scraper_lists", {company_id: 5})
      commit("setHotelList", data)
      const defaultHotel = data.find(i => i.id === 186)
      if (defaultHotel) {
        commit("setDefaultHotel", defaultHotel)
      }
    } catch (e) {
      console.log('client get hotel list error: ', e);
      return redirect('/server-error')
    }
  }
};
