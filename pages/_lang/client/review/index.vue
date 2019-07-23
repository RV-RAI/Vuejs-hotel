<template>
  <v-app>
    <v-content>
      <v-container fluid full-content>
        <div class="inside">
          <!-- <div class="page-header">{{$t('client.layout.review')}}: {{hotel_name}}</div> -->
          <div class="page-content">
            <div class="section-ctn ctn-l-basic">
              <v-layout align-center>
                <v-flex lg10 md12>
                  <v-card class="mate-card1 card-form-center card-sm mt-3">
                    <div class="el-t-default">
                      <div class="box-filter mb-4">
                        <div class="box-inchannel mb-3">
                          <label class="subheading lbl-ft">{{ $t('client.priceTable.selectChan') }}</label>
                          <v-tabs
                            v-model="active"
                            slot="extension"
                            slider-color="color-active"
                            class="tab-chn"
                          >
                            <v-tabs-slider color="color-active"></v-tabs-slider>
                            <!--<v-tab @click="changeChannel('rakuten')" :key="1">楽天トラベル</v-tab>-->
                            <!--<v-tab @click="changeChannel('jalan')" :key="2">じゃらん</v-tab>-->
                            <v-tabs-items
                              v-if="newData.length > 0"
                            >
                              <v-tab-item
                                v-for="index in ((newData.length / itemsPerPage) - 1)"
                                :key="index"
                              >
                                <ReviewTab
                                :hotel_name="hotel_name"
                                :newData="newData"
                                :reviewData="reviewData"
                                :channelName="channelName"
                                :averageStar="averageStar"
                                :spliceData="spliceData"
                                :loading="loading"
                                :exportReview="exportReview"
                                />
                                <div class="text-xs-right py-4">
                                  <v-pagination
                                    v-model="page"
                                    :length="newData.length / itemsPerPage"
                                    @input="spliceData"
                                  ></v-pagination>
                                </div>
                              </v-tab-item>
                            </v-tabs-items>
                            <v-tabs-items
                              v-else
                            >
                              <v-tab-item
                                v-for="index in 1"
                                :key="index"
                              >
                                <ReviewTab
                                :hotel_name="hotel_name"
                                :newData="newData"
                                :reviewData="reviewData"
                                :channelName="channelName"
                                :averageStar="averageStar"
                                :spliceData="spliceData"
                                :loading="loading"
                                :exportReview="exportReview"
                                />
                                <div class="text-xs-right py-4">
                                  <v-pagination
                                    v-model="page"
                                    :length="1"
                                    @input="spliceData"
                                  ></v-pagination>
                                </div>
                              </v-tab-item>
                            </v-tabs-items>
                          </v-tabs>
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
  import dateFns from "date-fns"
  import numeral from "numeral"
  import FileSaver from "file-saver"
  import ReviewTab from "@/components/reviewTab"

  function formatDate(date) {
    return dateFns.format(date, "YYYY年M月D日")
  }

  export default {
    layout: "client",
    components: {
      ReviewTab
    },
    async asyncData({store, params, $axios}) {
      /**
       * Show hotel name
       */
      let hotel_id = params.id || store.state.defaultHotel.id;
      let hotel_list = store.state.hotelListState;
      let hotel_name = "";
      let branchID = ""
      let htList = await _.find(hotel_list, i => Number(i.id) === Number(hotel_id))
      hotel_name = await htList.hotel_name || "";
      branchID = await htList.branch_id || ""
      await store.commit("setDefaultHotel", htList)

      /**
       * Get Review Data
       * @type {Array}
       */
      let req = {
        hotel_id: Number(htList.hotel_id),
        tag: "rakuten",
        per_page: 30
      };

      let channelName = ""
      let newData = []
      let itemsPerPage = 5
      let reviewData = []
      let averageStar = 0
      let pageNumb = 0
      pageNumb = req.per_page / itemsPerPage

      try {
        let {data} = await $axios.post("/hotel_reviews", req)

        if (data.length > 0) {
          channelName = await data[0].tag.charAt(0).toUpperCase() + data[0].tag.slice(1)
          newData = await data.map(i => {
            i.date = formatDate(i.date)
            return i
          })
          reviewData = await _.slice(newData, 0, 10)
          // Average review star
          let reviewArr = await newData.map(i => i.star)
          averageStar = await reviewArr.reduce((total, value) => total + value) / newData.length
          averageStar = await numeral(averageStar).format("0.00")
          averageStar = Number(averageStar)
        }
      } catch (e) {
        console.error(e)
      }

      return {
        hotel_name,
        newData,
        reviewData,
        channelName,
        itemsPerPage,
        averageStar,
        req,
        htList,
        pageNumb
      }
    },
    data() {
      return {
        page: 1,
        loading: false,
        active: 0
      }
    },
    computed: {

    },
    methods: {
      spliceData() {
        if(this.reviewData) {
          this.reviewData = _.slice(
            this.newData,
            (this.page - 1) * this.itemsPerPage,
            (this.itemsPerPage * this.page)
          )
        } else {
          return []
        }
      },
      scrollToTop() {
        window.scrollTo(0, 0)
      },
      async exportReview() {
        this.loading = true
        this.req.per_page = 30000
        const newReq = this.req
        try {
          const {data} = await this.$axios.post("/hotel_reviews", newReq)
          const channelList = [{name: "Review Data"}]
          const headers = [
          [  {
              text: "ID",
              value: "id"
            }, {
              text: "ホテルID",
              value: "hotel_id"
            }, {
              text: "日付",
              value: "date"
            }, {
              text: "星",
              value: "star"
            }, {
              text: "クライアント名",
              value: "name"
            }, {
              text: "クライアントレビュー",
              value: "body"
            }, {
              text: "ホテルの対応",
              value: "response"
            }, {
              text: "プラン名",
              value: "plan_name"
            }, {
              text: "部屋タイプ",
              value: "room_type"
            }, {
              text: "タグ",
              value: "tag"
            }, {
              text: "カテゴリー",
              value: "category"
            }, {
              text: "作成日",
              value: "created_at"
            }, {
              text: "更新日",
              value: "updated_at"
            }]
          ]

          const res = await this.$axios.$post('https://asia-northeast1-sotetsu-hotel.cloudfunctions.net/kpiExport', {
            headers,
            data: [data],
            channelList
          }, {
            responseType: "blob"
          })

          this.loading = false
          await FileSaver.saveAs(res, "review.xlsx")
        } catch (e) {
          console.log(e)
        }
      },
      async changeChannel(channel) {
        const req = {
          hotel_id: Number(this.htList.hotel_id),
          tag: channel,
          per_page: 30
        }
        const {data} = await this.$axios.post("/hotel_reviews", req)

        if (data.length > 0) {
          this.channelName = await data[0].tag.charAt(0).toUpperCase() + data[0].tag.slice(1)
          this.newData = await data.map(i => {
            i.date = formatDate(i.date)
            return i
          })
          this.reviewData = await _.slice(this.newData, 0, 10)
          // Average review star
          let reviewArr = await this.newData.map(i => i.star)
          this.averageStar = await reviewArr.reduce((total, value) => total + value) / this.newData.length
          this.averageStar = await numeral(this.averageStar).format("0.00")
        }
        return this.averageStar = Number(this.averageStar)
      }
    }
  }
</script>
<style lang="stylus" scoped>
  .box-review-sum
    .hotel-thumb
      width: 125px;
      height: 125px;
      border: 1px solid #eee;
      overflow: hidden;
      display: block;
      position: relative;
      float: left;
      margin-right: 20px;
      background-color: #fff;
      border-radius: 3px;
      margin-bottom: 0;

    small
      font-size: 14px;
      font-size: 0.875rem;
      font-weight: 500;
      color: #999;
      margin-top: 5px;
      display: inline-block;

    h1
      font-weight: 500;
      margin-top: 5px;
      font-size: 36px;
      font-size: 2.25rem;
</style>
