const dateFns = require("date-fns")

function dateFormat(date) {
  return dateFns.format(date, "YYYY年M月D日")
}

export const rakutenFilter = data => {
  let result = []

  for (let i = 0; i < data.length; i++) {
    let eachData = data[i]
    if(eachData) {
      result.push({
        hotel_name: eachData.hotel_name || "",
        area: eachData.area || "",
        brand: eachData.brand || "",
        jp6month: eachData.jp6month || "",
        plan_num: eachData.plan_num || "",
        bf_plan_num: eachData.bf_plan_num || "",
        day_plan_num: eachData.day_plan_num || "",
        r_mail_sent_all: eachData.r_mail_sent_all || "",
        r_mail_list_num: eachData.r_mail_list_num || "",
        area_rank: eachData.area_rank || "",
        review_rate: eachData.review_rate || "",
        pv: eachData.pv || "",
        reservation_ppl: eachData.reservation_ppl || "",
        access_ppl: eachData.access_ppl || "",
        access_ppl_top_avg: eachData.access_ppl_top_avg || "",
        cv: eachData.cv || "",
        cv_top_avg: eachData.cv_top_avg || "",
        photo_num: eachData.photo_num || ""
      })
    }
  }

  return result
}

export const jalanFilter = data => {
  let result = []

  data.map(i => {
    if (i) {
      return result.push({
        hotel_name: i.hotel_name || "",
        area: i.area || "",
        brand: i.brand || "",
        jp6month: i.jp6month ? "Yes" : "",
        plan_num: i.plan_num || "",
        bf_plan_num: i.bf_plan_num || "",
        day_plan_num: i.day_plan_num || "",
        area_rank: i.area_rank || "",
        review_rate: i.review_rate || "",
        reservation_num: i.reservation_num || "",
        pv: i.pv || "",
        cv: i.cv || ""
      })
    }
  })

  return result
}

export const expediaFilter = data => {
  let result = []

  data.map(i => {
    return result.push({
      hotel_name: i.hotel_name || "",
      area: i.area || "",
      brand: i.brand || "",
      jp6month: i.jp6month ? "Yes" : ""
    })
  })

  return result
}

export const agodaFilter = data => {
  let result = []

  data.map(i => {
    return result.push({
      hotel_name: i.hotel_name || "",
      area: i.area || "",
      brand: i.brand || "",
      jp6month: i.jp6month ? "Yes" : ""
    })
  })

  return result
}

export const bookingFilter = data => {
  let result = []

  data.map(i => {
    return result.push({
      hotel_name: i.hotel_name || "",
      area: i.area || "",
      brand: i.brand || "",
      jp6month: i.jp6month ? "Yes" : ""
    })
  })

  return result
}
