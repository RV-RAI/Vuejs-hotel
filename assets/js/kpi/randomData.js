module.exports = function (arg) {
  let hpData = (branchNumb) => {
    let arr = [];
    for (let i = 0; i < branchNumb; i++) {
      arr.push({
        area_name: '',
        chain_brand: '',
        hotel_name: '',
        sell_collect: randomBoolean(),
        sell_collect_en: randomBoolean(),
        plan_num: randomNumb(),
        bre_plan_num: randomNumb(),
        day_plan_num: randomMinNumb(),
        trip_adv_star: randomMinNumb(),
        staff_blog_num: randomMinNumb(),
        photo_gal_num: randomNumb(),
        sell_collect_air: randomBoolean()
      })
    }
    return arr
  };

  let rakutenData = (branchNumb) => {
    let arr = [];
    for (let i = 0; i < branchNumb; i++) {
      arr.push({
        area_name: '',
        chain_brand: '',
        hotel_name: '',
        sell_collect: randomBoolean(),
        plan_number: randomNumb(),
        breakfast_plan_number: randomNumb(),
        dayuse_plan_number: randomNumb(),
        blog_last_updated: "<" + String(randomNumb()),
        permission_number: randomNumb(),
        area_ranking: "<" + String(randomNumb()),
        review_star: randomNumb(),
        booked_number: randomNumb(),
        pv_number: randomNumb(),
        cvr: String(Math.round(Math.random() * 100) / 100) + "%",
        tourism_register_number: randomNumb(),
        photo_gallary_number: randomNumb(),
        sell_collectly_jal_number: randomMinNumb(),
        sell_collectly_ana_number: randomMinNumb(),
        sell_collectly_jr_number: randomMinNumb()
      })
    }
    return arr
  };

  let jalanData = (branchNumb) => {
    let arr = [];
    for (let i = 0; i < branchNumb; i++) {
      arr.push({
        area_name: '',
        chain_brand: '',
        hotel_name: '',
        sell_collect: randomBoolean(),
        plan_number: randomNumb(),
        breakfast_plan_number: randomNumb(),
        dayuse_plan_number: randomNumb(),
        blog_last_updated: "<" + String(randomNumb()),
        permission_number: randomNumb(),
        area_ranking: "<" + String(randomNumb()),
        review_star: randomNumb(),
        booked_number: randomNumb(),
        pv_number: randomNumb(),
        cvr: String(Math.round(Math.random() * 100) / 100) + "%",
        tourism_register_number: randomNumb(),
        photo_gallary_number: randomNumb(),
        sell_collectly_jal_number: randomMinNumb(),
        sell_collectly_ana_number: randomMinNumb(),
        sell_collectly_jr_number: randomMinNumb()
      })
    }
    return arr
  };

  let expediaData = (branchNumb) => {
    let arr = [];
    for (let i = 0; i < branchNumb; i++) {
      arr.push({
        area_name: '',
        chain_brand: '',
        hotel_name: '',
        no_miss: randomBoolean(),
        contents_score: randomMaxNumb(),
        result_ranking: randomMinNumb()
      })
    }
    return arr
  };

  let agodaData = (branchNumb) => {
    let arr = [];
    for (let i = 0; i < branchNumb; i++) {
      arr.push({
        area_name: '',
        chain_brand: '',
        hotel_name: '',
        no_miss: randomBoolean(),
        contents_score: randomMaxNumb(),
        result_ranking: randomMinNumb()
      })
    }
    return arr
  };

  let bookingData = (branchNumb) => {
    let arr = [];
    for (let i = 0; i < branchNumb; i++) {
      arr.push({
        area_name: '',
        chain_brand: '',
        hotel_name: '',
        no_miss: randomBoolean(),
        contents_score: randomMaxNumb(),
        result_ranking: randomMinNumb()
      })
    }
    return arr
  };

  return {
    hpData: hpData(arg),
    rakutenData: rakutenData(arg),
    jalanData: jalanData(arg),
    expediaData: expediaData(arg),
    agodaData: agodaData(arg),
    bookingData: bookingData(arg),
  }
};

function randomNumb() {
  return Math.floor(Math.random() * 50) + 1
}

function randomMaxNumb() {
  return Math.floor(Math.random() * 100) + 1
}

function randomMinNumb() {
  return Math.floor(Math.random() * 10) + 1
}

function randomBoolean() {
  return Boolean(Math.round(Math.random())) ? 'Yes' : ''
}

