<template>
  <v-app>
    <v-content>
      <v-container fluid full-content>
        <div class="inside">
          <!--<div class="page-header">{{$t('client.request')}}</div>-->
          <div class="page-content">
            <div class="section-ctn ctn-l-basic">
              <v-layout align-center>
                <v-flex lg12>
                  <v-card class="mate-card1 card-form-center card-sm mt-3">
                    <div class="el-t-default">
                      <v-alert
                        v-if="alert.msg"
                        :type="alert.type"
                        value="true"
                        outline
                        dismissible
                        class="log-alert"
                      >
                        {{ alert.msg }}
                      </v-alert>
                      <div class="box-filter mb-4">
                        <div class="box-inchannel mb-3">
                          <label class="subheading lbl-ft mb-3"
                            >年間チャネルデータ</label
                          >
                          <v-card style="box-shadow:none;">
                            <div class="month-sum mt-3">
                              <v-layout row wrap>
                                <v-flex xs12 sm4 text-xs-center>
                                  <v-card flat>
                                    <span class="text-rakuten font-weight-bold"
                                      >楽天トラベル
                                    </span>
                                    <v-card-text
                                      class="basic-list-headerInfo px-0"
                                    >
                                      <span>予約売上</span>
                                      <p class="text-bold">
                                        {{
                                          "¥ " +
                                            formatPrice(
                                              rakutenTotalData.reservation_sales_total
                                            )
                                        }}
                                      </p>
                                      <span>PV</span>
                                      <p class="text-bold">
                                        {{
                                          formatPrice(rakutenTotalData.pv_total)
                                        }}
                                      </p>
                                    </v-card-text>
                                  </v-card>
                                </v-flex>
                                <v-flex xs12 sm4 text-xs-center>
                                  <v-card flat>
                                    <span class="text-jalan font-weight-bold"
                                      >じゃらん</span
                                    >
                                    <v-card-text
                                      class="basic-list-headerInfo px-0"
                                    >
                                      <span>予約売上</span>
                                      <p class="text-bold">
                                        {{
                                          "¥ " +
                                            formatPrice(
                                              jalanTotalData.reservation_sales_total
                                            )
                                        }}
                                      </p>
                                      <span>PV</span>
                                      <p class="text-bold">
                                        {{
                                          formatPrice(jalanTotalData.pv_total)
                                        }}
                                      </p>
                                    </v-card-text>
                                  </v-card>
                                </v-flex>
                                <v-flex xs12 sm4 text-xs-center>
                                  <v-card flat>
                                    <span class="text-purple font-weight-bold"
                                      >総合</span
                                    >
                                    <v-card-text
                                      class="basic-list-headerInfo px-0"
                                    >
                                      <span>予約売上</span>
                                      <p class="text-bold">
                                        {{
                                          "¥ " +
                                            formatPrice(
                                              totalData.reservation_sales
                                            )
                                        }}
                                      </p>
                                      <span>PV</span>
                                      <p class="text-bold">
                                        {{ formatPrice(totalData.pv) }}
                                      </p>
                                    </v-card-text>
                                  </v-card>
                                </v-flex>
                              </v-layout>
                            </div>
                            <label class="subheading lbl-ft my-3"
                              >月別データ</label
                            >
                            <div class="month-data my-4">
                              <v-tabs
                                v-model="active"
                                slot="extension"
                                slider-color="color-active"
                                class="tab-chn"
                              >
                                <v-tabs-slider
                                  color="color-active"
                                ></v-tabs-slider>
                                <v-tab :key="1">楽天トラベル</v-tab>
                                <v-tab :key="2">じゃらん</v-tab>
                                <v-tabs-items>
                                  <v-tab-item :key="1">
                                    <div class="month-data_box">
                                      <v-container
                                        class="fullwidth"
                                        grid-list-md
                                      >
                                        <v-layout row wrap>
                                          <v-flex
                                            v-for="item in rakutenData"
                                            :key="item.id"
                                            xs12
                                            sm6
                                            md4
                                          >
                                            <MonthlyCard
                                              :item="item"
                                              :formatPrice="formatPrice"
                                            />
                                          </v-flex>
                                        </v-layout>
                                      </v-container>
                                    </div>
                                  </v-tab-item>
                                  <v-tab-item :key="2">
                                    <div class="month-data_box">
                                      <v-container
                                        class="fullwidth"
                                        grid-list-md
                                      >
                                        <v-layout row wrap>
                                          <v-flex
                                            v-for="item in jalanData"
                                            :key="item.id"
                                            xs12
                                            sm6
                                            md4
                                          >
                                            <MonthlyCard
                                              :item="item"
                                              :formatPrice="formatPrice"
                                            />
                                          </v-flex>
                                        </v-layout>
                                      </v-container>
                                    </div>
                                  </v-tab-item>
                                </v-tabs-items>
                              </v-tabs>
                            </div>
                          </v-card>
                        </div>
                      </div>
                    </div>
                  </v-card>
                </v-flex>
              </v-layout>
            </div>
          </div>
        </div>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import MonthlyCard from "@/components/monthlyCard";
import numeral from "numeral";

function formatPrice(value) {
  return numeral(value).format("0,0");
}

export default {
  layout: "client",
  components: {
    MonthlyCard
  },
  watchQuery: "months",
  async asyncData({ store, params, $axios, query }) {
    let isMonth = query.months || 12;
    /**
     * Fetch Monthly Data
     */
    const branch_id = params.id || store.state.defaultHotel.id;
    let hotel_list = store.state.hotelListState;
    let htList = await _.find(
      hotel_list,
      i => Number(i.id) === Number(branch_id)
    );
    const hotel_id = htList.hotel_id;

    const req = {
      hotel_id: hotel_id,
      range: isMonth
    };

    let rakutenData = [];
    let jalanData = [];
    let rakutenTotalData = [];
    let jalanTotalData = [];
    let totalData = [];
    try {
      const { data } = await $axios.post(
        "/show_month_data",
        req
      );
      rakutenData = _.sortBy(data[0].rakuten, ["date"]);
      jalanData = _.sortBy(data[1].jalan, ["date"]);

      const total = await $axios.post(
        "/show_month_total_data",
        req
      );
      rakutenTotalData = total.data[0].rakuten;
      jalanTotalData = total.data[1].jalan;
      totalData = total.data[2].total;
    } catch (e) {
      console.log(e);
    }

    /**
     * Create button range for 12 months
     */
    let btnRange = [];
    for (let i = 1; i < 13; i++) {
      btnRange.push(i);
    }
    return {
      rakutenData,
      jalanData,
      req,
      btnRange,
      rakutenTotalData,
      jalanTotalData,
      totalData,
      isMonth,
      toggle_none: Number(isMonth)
    };
  },
  data() {
    return {
      active: 0,
      menu: false,
      menu2: false,
      content: "",
      alert: {
        type: "",
        msg: ""
      },
      formatPrice
    };
  },
  methods: {
    async changeRange(key) {
      let req = this.req;
      req.range = key;
      try {
        const { data } = await this.$axios.post(
          "https://figaro.el-soul.com/show_month_data",
          req
        );
        this.rakutenData = data[0].rakuten;
        this.jalanData = data[1].jalan;

        const total = await this.$axios.post(
          "https://figaro.el-soul.com/show_month_total_data",
          req
        );
        this.rakutenTotalData = total.data[0].rakuten;
        this.jalanTotalData = total.data[1].jalan;
        this.totalData = total.data[2].total;

        this.$router.push({
          path: this.$route.path,
          query: {
            months: key
          }
        });
      } catch (e) {
        console.log(e);
      }
    }
  }
};
</script>
<style lang="stylus" scoped></style>
