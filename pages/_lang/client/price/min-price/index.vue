<template>
  <v-app>
    <v-content>
      <v-container fluid full-content>
        <div class="inside">
          <div class="page-header">{{$t('client.priceTable.minTab') }}: {{ hotelName }}</div>
          <div class="page-content">
            <div class="section-ctn ctn-l-basic">
              <v-layout align-center>
                <v-flex lg12>
                  <v-card class="mate-card1 card-form-center card-sm mt-3">
                    <div class="el-t-default">
                      <v-alert
                        v-if="alert"
                        :type="alert.type"
                        value="true"
                        outline
                        dismissible
                        class="log-alert"
                      >{{alert.message}}
                      </v-alert>
                      <div class="box-filter mb-4">
                        <div v-if="!isMobile">
                          <label class="subheading lbl-ft">
                            更新日: {{ updated_at }}
                          </label>
                          <div class="toolbar-for-table">
                            <div class="toolbar-for-table__inner">
                              <v-menu
                                v-if="!isMobile"
                                full-width
                                offset-y
                                :close-on-content-click="false"
                                v-model="dateMenu"
                                bottom
                              >
                                <v-btn round class="btn-sl-date ml-0" outline slot="activator">
                                  {{ range[0] }} &mdash; {{
                                  range[1] }}
                                </v-btn>
                                <v-card class="elevation-0 card-sldate">
                                  <v-card-text>
                                    <v-daterange
                                      no-presets
                                      :options="dateRangeOptions"
                                      @input="onDateRangeChange"
                                    />
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" @click.prevent="showHotel">{{ $t('client.priceTable.apply') }}
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-menu>
                              <v-btn
                                round
                                depressed
                                outline
                                color="primary"
                                @click="rangeBtn(30)"
                              >30 days
                              </v-btn>
                              <v-btn
                                round
                                depressed
                                outline
                                color="primary"
                                @click="rangeBtn(90)"
                              >90 days
                              </v-btn>
                              <v-btn
                                round
                                depressed
                                outline
                                color="primary"
                                @click="rangeBtn(181)"
                              >180 days
                              </v-btn>
                            </div>
                          </div>
                        </div>

                        <!-- <v-toolbar class="toolbar-for-table mt-2">
                          <v-menu
                            full-width
                            offset-y
                            :close-on-content-click="false"
                            v-model="dateMenu"
                            bottom
                          >
                            <v-btn round class="btn-sl-date ml-0" outline slot="activator">
                              {{ range[0] }} &mdash; {{
                              range[1] }}
                            </v-btn>
                            <v-card class="elevation-0 card-sldate">
                              <v-card-text>
                                <v-daterange
                                  no-presets
                                  :options="dateRangeOptions"
                                  @input="onDateRangeChange"
                                />
                              </v-card-text>
                              <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" @click.prevent="showHotel">{{ $t('client.priceTable.apply') }}
                                </v-btn>
                              </v-card-actions>
                            </v-card>
                          </v-menu>
                          <v-btn
                            round
                            depressed
                            outline
                            color="primary"
                            @click="rangeBtn(30)"
                          >30 days
                          </v-btn>
                          <v-btn
                            round
                            depressed
                            outline
                            color="primary"
                            @click="rangeBtn(90)"
                          >90 days
                          </v-btn>
                          <v-btn
                            round
                            depressed
                            outline
                            color="primary"
                            @click="rangeBtn(181)"
                          >180 days
                          </v-btn>
                        </v-toolbar> -->
                        <!-- <v-btn
                          round
                          outline
                          class="ml-0 btn-tool"
                          :disabled="loading"
                          @click="confirmDialog = true"
                        >
                          <v-icon right dark>cloud_download</v-icon>
                          {{ $t('client.priceTable.export') }}
                        </v-btn> -->
                        <!-- <span class="caption font-italic">{{ $t('client.priceTable.maximumDays') }}</span> -->
                        <div :class="chartBox">
                          <label class="subheading lbl-ft">{{ $t('client.priceTable.selectChan') }}</label>
                          <v-card class="mt-2" flat>
                            <div class="inside-flex div-3">
                              <div class="fil-itm-col" v-if="!isMobile">
                                <MinPrice
                                  v-if="hotel_data"
                                  :hotel_data="hotel_data"
                                  :channelList="channelList"
                                />
                              </div>
                              <div class="fil-itm-col" v-if="isMobile">
                                <MinPriceGChart
                                  :hotel_data="hotel_data"
                                  :channelList="channelList"
                                />
                              </div>
                            </div>
                          </v-card>
                        </div>
                        <div v-if="isMobile">
                          <label class="subheading lbl-ft">
                            更新日: {{ updated_at }}
                          </label>
                          <div class="toolbar-for-table">
                            <div class="toolbar-for-table__inner">
                              <v-menu
                                v-if="!isMobile"
                                full-width
                                offset-y
                                :close-on-content-click="false"
                                v-model="dateMenu"
                                bottom
                              >
                                <v-btn round class="btn-sl-date ml-0" outline slot="activator">
                                  {{ range[0] }} &mdash; {{
                                  range[1] }}
                                </v-btn>
                                <v-card class="elevation-0 card-sldate">
                                  <v-card-text>
                                    <v-daterange
                                      no-presets
                                      :options="dateRangeOptions"
                                      @input="onDateRangeChange"
                                    />
                                  </v-card-text>
                                  <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="primary" @click.prevent="showHotel">{{ $t('client.priceTable.apply') }}
                                    </v-btn>
                                  </v-card-actions>
                                </v-card>
                              </v-menu>
                              <v-btn
                                round
                                depressed
                                outline
                                color="primary"
                                @click="rangeBtn(30)"
                              >30 days
                              </v-btn>
                              <v-btn
                                round
                                depressed
                                outline
                                color="primary"
                                @click="rangeBtn(90)"
                              >90 days
                              </v-btn>
                              <v-btn
                                round
                                depressed
                                outline
                                color="primary"
                                @click="rangeBtn(181)"
                              >180 days
                              </v-btn>
                            </div>
                          </div>
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
    <v-dialog v-model="confirmDialog" max-width="290">
      <v-card>
        <v-card-title class="headline">Confirm</v-card-title>

        <v-card-text>Do you want to download spreadsheet?</v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="green darken-1" flat="flat" @click="confirmDialog = false">Disagree</v-btn>

          <v-btn color="green darken-1" flat="flat" @click="exportFile">Agree</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
  import MinPrice from "~/components/MinPrice"
  import MinPriceGChart from "~/components/MinPriceGChart"
  import {format, subDays} from "date-fns";
  import FileSaver from "file-saver";
  import dateFns from "date-fns"

  function dateFormat(date) {
    return dateFns.format(date, "YYYY年M月D日")
  }

  export default {
    layout: "client",
    components: {
      MinPrice,
      MinPriceGChart
    },
    async asyncData({store, $axios, query, params}) {
      /**
       * Show hotel name
       */
      let hotel_id = params.id || store.state.defaultHotel.id;
      let hotel_list = store.state.hotelListState;
      let hotel_name = "";
      let branchID = ""
      let htList = await _.find(hotel_list, i => Number(i.id) === Number(hotel_id))
      hotel_name = htList.hotel_name || "";
      branchID = htList.branch_id || ""
      await store.commit("setDefaultHotel", htList)

      let channelSortedArray = [
        {id: "rakuten", name: "楽天トラベル"},
        {id: "jalan", name: "じゃらん"},
        {id: "agoda", name: "Agoda"},
        {id: "booking", name: "Booking.com"},
        {id: "expedia", name: "Expedia"}
      ]

      let res = await $axios.post("/get_scraper_lists_ids", {
        branch_id: branchID,
        adult: 1
      })

      let {data} = await $axios.post("/min_chart_data", {
        scraper_lists_id: res.data[0].id,
        run_date: "2019-06-04"
      })

      /**
       * Set Date Selector Range
       */
      let checkindate = new Date(data[0].checkindate)
      let next30 = checkindate.setDate(checkindate.getDate() + 30)
      let last_day = checkindate.setDate(checkindate.getDate() + 150)

      /**
       * Default Data
       */
      let startData
      let endData
      let startRange;
      if (query.start) {
        if (new Date(query.start) > new Date(data[0].checkindate)) {
          startRange = (new Date(query.start) - new Date(data[0].checkindate)) / (3600 * 1000 * 24)
        } else {
          startRange = 0
        }
        startData = new Date(query.start)
        endData = new Date(query.end)
      } else {
        startRange = 0
        endData = new Date(next30)
        startData = new Date(data[0].checkindate)
      }
      let range = (endData - startData) / (3600 * 1000 * 24)
      let hotel_data = data.slice(startRange, range + startRange)

      let updated_at = dateFormat(store.state.hotelListState[0].updated_at)
      updated_at = dateFormat("2019-06-04")

      return {
        channelList: channelSortedArray,
        hotelName: hotel_name,
        hotel_ID: hotel_id,
        hotel_data,
        full_data: data,
        range: [
          query.start ? query.start : format(data[0].checkindate, "YYYY-MM-DD"),
          query.end ? query.end : format(next30, "YYYY-MM-DD")
        ],
        dateRangeOptions: {
          startDate: query.start ? query.start : format(data[0].checkindate, "YYYY-MM-DD"),
          endDate: query.end ? query.end : format(next30, "YYYY-MM-DD"),
          maxDate: format(last_day, "YYYY-MM-DD"),
          format: "YYYY-MM-DD"
        },
        checkindate: data[0].checkindate,
        updated_at
      };
    },
    data() {
      return {
        confirmDialog: false,
        checkBreakfast: true,
        dateMenu: false,
        alert: null,
        loading: false,
        chartsLib: null,
        isMobile: false
      };
    },
    computed: {
      chartBox() {
        return this.isMobile ? "box-inchannel mb-3" : "box-inchannel pt-4 mb-3"
      }
    },
    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 700
      },
      onDateRangeChange(range) {
        this.range = range;
        return this.$router.push({
            path: this.$route.fullPath,
            query: {
              start: range[0],
              end: range[1]
            }
          }
        )
      },
      onChartReady(chart, google) {
        this.chartsLib = google;
      },
      exportFile() {
        this.confirmDialog = false;
        this.loading = true;
        this.$axios.setToken("Bearer " + this.$store.state.auth.token);
        let exportUrl =
          "/client/price/spreadsheet/minimum?hotel_id=" +
          this.hotel_ID +
          "&adult_cap=" +
          this.getChoice[2] +
          "&room_type=" +
          this.getChoice[3] +
          "&breakfast=" +
          this.getChoice[4] +
          "&from=" +
          this.range[0] +
          "&to=" +
          this.range[1];
        this.$axios
          .$get(exportUrl, {
            responseType: "blob"
          })
          .then(data => {
            FileSaver.saveAs(data, "Report.xlsx");
            this.loading = false;
          })
          .catch(e => {
            this.loading = false;
            this.alert = {
              type: "error",
              message: this.$t("client.priceTable.errorMess.again")
            };
          });
      },
      showHotel() {
        let range = (new Date(this.range[1]) - new Date(this.range[0])) / (3600 * 1000 * 24)
        let start = this.full_data.findIndex(i => i.checkindate === this.range[0])
        this.hotel_data = _.slice(this.full_data, start, start + range)
        this.dateMenu = false
      },
      rangeBtn(value) {
        let end_day = new Date(this.checkindate).setDate(new Date(this.checkindate).getDate() + value)
        let end_day_for_range = new Date(this.checkindate).setDate(new Date(this.checkindate).getDate() + value - 1)
        let start = format(this.checkindate, "YYYY-MM-DD")

        let range = (new Date(end_day) - new Date(start)) / (3600 * 1000 * 24)

        this.range = [start, format(end_day_for_range, "YYYY-MM-DD")]

        this.hotel_data = _.slice(this.full_data, 0, range)
        return this.$router.push({
            path: this.$route.fullPath,
            query: {
              start: start,
              end: format(end_day, "YYYY-MM-DD")
            }
          }
        )
      }
    },
    beforeDestroy() {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.onResize, {passive: true})
      }
    },
    mounted() {
      this.onResize()
      window.addEventListener('resize', this.onResize, {passive: true})
    },
  };
</script>
