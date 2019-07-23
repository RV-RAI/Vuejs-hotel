export const kpiRakuten = {
  headers: [
    {
      text: 'ホテル',
      align: 'left',
      value: 'hotel_name',
      fixed: true
    },
    {
      text: 'エリア',
      align: 'left',
      value: 'area',
    },
    {
      text: 'ブランド',
      align: 'left',
      value: 'brand',
    },
    {
      text: '6か月先まで販売',
      align: 'left',
      value: 'jp6month'
    },
    {
      text: 'プラン数',
      align: 'left',
      value: 'plan_num'
    },
    {
      text: '朝食付プラン数',
      align: 'left',
      value: 'bf_plan_num'
    },
    {
      text: 'デイユースプラン数',
      align: 'left',
      value: 'day_plan_num'
    },
    {
      text: 'R-mail送信回数（PC + MB）',
      align: 'left',
      value: 'r_mail_sent_all'
    },
    {
      text: 'アドレス保有数',
      align: 'left',
      value: 'r_mail_list_num'
    },
    {
      text: 'エリア掲載順位個別mtgのあるホテルのみ更新',
      align: 'left',
      value: 'area_rank'
    },
    {
      text: 'クチコミTotal',
      align: 'left',
      value: 'review_rate'
    },
    {
      text: 'PV数',
      align: 'left',
      value: 'pv'
    },
    {
      text: '予約者数（人）',
      align: 'left',
      value: 'reservation_ppl'
    },
    {
      text: 'アクセス人数',
      align: 'left',
      value: 'access_ppl'
    },
    {
      text: 'アクセス人数上位平均',
      align: 'left',
      value: 'access_ppl_top_avg'
    },
    {
      text: '転換率',
      align: 'left',
      value: 'cv'
    },
    {
      text: '転換率 / 上位平均',
      align: 'left',
      value: 'cv_top_avg'
    },
    {
      text: 'フォトギャラリー',
      align: 'left',
      value: 'photo_num'
    }
  ],
  data: [
    {
      area_name: '',
      chain_brand: '',
      hotel_name: '',
      sell_collect: "",
      plan_number: 25,
      breakfast_plan_number: 12,
      dayuse_plan_number: 2,
      blog_last_updated: "<30",
      permission_number: "",
      area_ranking: "<30",
      review_star: "4",
      booked_number: "",
      pv_number: "",
      cvr: "0.50%",
      tourism_register_number: "",
      photo_gallary_number: 40,
      sell_collectly_jal_number: 10,
      sell_collectly_ana_number: 10,
      sell_collectly_jr_number: 10
    }
  ]
};
export const kpiJalan = {
  headers: [
    {
      text: 'ホテル',
      align: 'left',
      value: 'hotel_name',
      width: '300'
    },
    {
      text: 'エリア',
      align: 'left',
      value: 'area',
    },
    {
      text: 'ブランド',
      align: 'left',
      value: 'brand',
    },
    {
      text: '6か月先まで販売',
      align: 'left',
      value: 'jp6month'
    },
    {
      text: 'プラン数',
      align: 'left',
      value: 'plan_num'
    },
    {
      text: '朝食付プラン数',
      align: 'left',
      value: 'bf_plan_num'
    },
    {
      text: 'デイユースプラン数',
      align: 'left',
      value: 'day_plan_num'
    },
    {
      text: 'エリア掲載順位',
      align: 'left',
      value: 'area_rank'
    },
    {
      text: 'クチコミ総合評価',
      align: 'left',
      value: 'review_rate'
    },
    {
      text: '予約件数',
      align: 'left',
      value: 'reservation_num'
    },
    {
      text: 'PV数',
      align: 'left',
      value: 'pv'
    },
    {
      text: '予約成約率',
      align: 'left',
      value: 'cv'
    }
  ],
  data: [{
    area_name: '',
    chain_brand: '',
    hotel_name: '',
    sell_collect: 'false',
    plan_number: 25,
    breakfast_plan_number: 12,
    dayuse_plan_number: 2,
    blog_last_updated: "<30",
    permission_number: "",
    area_ranking: "<30",
    review_star: 4,
    booked_number: "",
    pv_number: "",
    cvr: "0.50%",
    tourism_register_number: "",
    photo_gallary_number: 40,
    sell_collectly_jal_number: 10,
    sell_collectly_ana_number: 10,
    sell_collectly_jr_number: 10
  }]
};
export const kpiExpedia = {
  headers: [
    {
      text: 'ホテル',
      align: 'left',
      value: 'hotel_name',
      width: '300'
    },
    {
      text: 'エリア',
      align: 'left',
      value: 'area',
    },
    {
      text: 'ブランド',
      align: 'left',
      value: 'brand',
    },
    {
      text: '6か月先まで販売',
      align: 'left',
      value: 'jp6month'
    }
  ],
  data: [{
    area_name: '',
    chain_brand: '',
    hotel_name: '',
    no_miss: 'false',
    contents_score: "",
    result_ranking: ""
  }]
};
export const kpiAgoda = {
  headers: [
    {
      text: 'ホテル',
      align: 'left',
      value: 'hotel_name',
      width: '300'
    },
    {
      text: 'エリア',
      align: 'left',
      value: 'area',
    },
    {
      text: 'ブランド',
      align: 'left',
      value: 'brand',
    },
    {
      text: '6か月先まで販売',
      align: 'left',
      value: 'jp6month'
    }
  ],
  data: [{
    area_name: '',
    chain_brand: '',
    hotel_name: '',
    no_miss: 'false',
    contents_score: "",
    result_ranking: ""
  }]
};
export const kpiBooking = {
  headers: [
    {
      text: 'ホテル',
      align: 'left',
      value: 'hotel_name',
      width: '300'
    },
    {
      text: 'エリア',
      align: 'left',
      value: 'area',
    },
    {
      text: 'ブランド',
      align: 'left',
      value: 'brand',
    },
    {
      text: '6か月先まで販売',
      align: 'left',
      value: 'jp6month'
    }
  ],
  data: [{
    area_name: '',
    chain_brand: '',
    hotel_name: '',
    no_miss: 'true',
    contents_score: "",
    result_ranking: ""
  }]
};
