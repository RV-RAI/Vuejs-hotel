<template>
  <v-app>
    <v-content>
      <v-container fluid full-content>
        <div class="inside">
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
                        <div class="box-inchannel mb-3">
                          <label class="subheading lbl-ft">{{ $t('client.priceTable.selectChan') }}</label>
                          <v-tabs
                            v-model="channelTab"
                            slot="extension"
                            slider-color="color-active"
                            class="tab-chn"
                            show-arrows
                            fixed-tabs
                          >
                            <v-tabs-slider color="color-active"></v-tabs-slider>
                            <v-tab
                              v-for="item in channelList"
                              :value="item.id"
                              :key="item.id"
                            >{{ item.name }}
                            </v-tab>
                            <v-tabs-items touchless>
                              <v-tab-item v-for="item in channelList" :key="item.id" >
                                <v-card flat>
                                  <div class="pt-3 pos-relative">
                                    <div class="ld-showbox" v-if="loading">
                                      <div class="loader">
                                        <svg class="circular" viewBox="25 25 50 50">
                                          <circle
                                            class="path"
                                            cx="50"
                                            cy="50"
                                            r="20"
                                            fill="none"
                                            stroke-width="2"
                                            stroke-miterlimit="10"
                                          ></circle>
                                        </svg>
                                      </div>
                                    </div>
                                    <div class="mx-0 toolbar-respon">
                                      <div class="toolbar-respon__inner">
                                       <v-toolbar-title>{{$t('client.layout.kpi') }}</v-toolbar-title>
                                       <v-btn
                                         round
                                         outline
                                         class="ml-0 btn-tool"
                                         :disabled="loading"
                                         @click="exportFile"
                                       >
                                         <v-icon right dark>cloud_download</v-icon>
                                         <span>{{ $t('client.priceTable.export') }}</span>
                                       </v-btn>
                                      </div>
                                    </div>
                                    <!-- <v-toolbar class="toolbar-for-table">
                                      <div class="mate2-slc ">
                                        更新日: {{ getUpdatedAt }}
                                      </div>
                                      <v-divider class="mx-3" inset vertical></v-divider>
                                      <v-select
                                        v-model="areaChoice"
                                        :items="areaArr"
                                        label="エリア名"
                                        hide-details
                                        menu-props="auto"
                                        prepend-icon="pin_drop"
                                        single-line
                                        class="mate2-slc"
                                        v-on:change="changeLocate"
                                      >
                                        <v-card class="elevation-0 card-sldate"></v-card>
                                      </v-select>
                                      <v-select
                                        v-model="chainChoice"
                                        :items="chainArr"
                                        label="ブランド"
                                        hide-details
                                        menu-props="auto"
                                        prepend-icon="timeline"
                                        single-line
                                        class="mate2-slc"
                                        v-on:change="changeLocate"
                                      >
                                        <v-card class="elevation-0 card-sldate"></v-card>
                                      </v-select>
                                      <v-btn
                                        round
                                        depressed
                                        color="primary"
                                        :disabled="loading"
                                        @click.prevent="showAll"
                                      >すべて表示する
                                      </v-btn>
                                    </v-toolbar> -->
                                    <div class="toolbar-for-table">
                                      <div class="toolbar-for-table__inner">
                                        <div class="mate2-slc ">
                                          更新日: {{ getUpdatedAt }}
                                        </div>
                                        <v-divider class="mx-3" inset vertical></v-divider>
                                        <v-select
                                          v-model="areaChoice"
                                          :items="areaArr"
                                          label="エリア名"
                                          hide-details
                                          menu-props="auto"
                                          prepend-icon="pin_drop"
                                          single-line
                                          class="mate2-slc"
                                          v-on:change="changeLocate"
                                        >
                                          <v-card class="elevation-0 card-sldate"></v-card>
                                        </v-select>
                                        <v-select
                                          v-model="chainChoice"
                                          :items="chainArr"
                                          label="ブランド"
                                          hide-details
                                          menu-props="auto"
                                          prepend-icon="timeline"
                                          single-line
                                          class="mate2-slc"
                                          v-on:change="changeLocate"
                                        >
                                          <v-card class="elevation-0 card-sldate"></v-card>
                                        </v-select>
                                        <v-btn
                                          round
                                          depressed
                                          color="primary"
                                          :disabled="loading"
                                          @click.prevent="showAll"
                                        >すべて表示する
                                        </v-btn>
                                      </div>
                                    </div>
                                    <v-data-table
                                      :headers="headers"
                                      :items="desserts"
                                      class="mb-4 mt-4"
                                      :rows-per-page-items="rowsPerPageItems"
                                      :pagination.sync="pagination"
                                      :disable-initial-sort="true"
                                      fix-header
                                    >
                                      <template slot="items" slot-scope="props">
                                        <td v-for="(i, index) in props.item" :key="index" area-sort="none">{{ i }}</td>
                                      </template>
                                      <template slot="pageText" slot-scope="props">
                                        Lines {{ props.pageStart }} - {{ props.pageStop }} of {{ props.itemsLength }}
                                      </template>
                                    </v-data-table>
                                  </div>
                                </v-card>
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
  import FileSaver from "file-saver";
  import {
    kpiRakuten,
    kpiJalan,
    kpiExpedia,
    kpiAgoda,
    kpiBooking
  } from "@/assets/js/kpi/kpiHelper";
  import {
    rakutenFilter,
    jalanFilter,
    expediaFilter,
    agodaFilter,
    bookingFilter
  } from "@/assets/js/kpi/dataFilter";
  import {area} from "@/assets/js/kpi/areaData";
  import dateFns from "date-fns"

  function dateFormat(date) {
    return dateFns.format(date, "YYYY年M月D日")
  }

  const filterArr = [
    rakutenFilter,
    jalanFilter,
    expediaFilter,
    agodaFilter,
    bookingFilter
  ]

  export default {
    layout: "kpi",
    async asyncData({store, $axios}) {
      /**
       * Show hotel name
       */
      let hotel_list = store.state.hotelListState;

      const channelSortedArray = [
        {id: "rakuten", name: "楽天トラベル"},
        {id: "jalan", name: "じゃらん"},
        {id: "expedia", name: "Expedia"},
        {id: "agoda", name: "Agoda"},
        {id: "booking", name: "Booking.com"},
      ];

      let res = await $axios.post("/rakuten_web", {
        company_id: 5
      })

      let data = rakutenFilter(res.data)

      let areaArr = [], chainArr = [];
      for (let i = 0; i < area.length; i++) {
        areaArr.push(area[i].area_name);
        chainArr.push(area[i].chain_brand)
      }

      return {
        channelList: channelSortedArray,
        hotelList: hotel_list,
        headers: kpiRakuten.headers,
        desserts: data,
        areaArr: areaArr,
        chainArr: chainArr,
        areaChoice: '',
        chainChoice: '',
        currentTab: 0,
        data
      };
    },
    data({ $root }) {
      return {
        confirmDialog: false,
        checkBreakfast: true,
        alert: null,
        loading: false,
        channelTab: parseInt($root._route.query.channel) ? parseInt($root._route.query.channel) : 0,
        rowsPerPageItems: [25, 50, 100],
        pagination: {
          rowsPerPage: 25
        }
      };
    },
    computed: {
      getUpdatedAt() {
        // return dateFormat(this.hotelList[0].updated_at)
        return dateFormat("2019-06-04")
      }
    },
    methods: {
      async exportFile() {
        console.log('Exporting ...');
        let allHeaderChannels = [
          kpiRakuten.headers,
          kpiJalan.headers,
          kpiExpedia.headers,
          kpiAgoda.headers,
          kpiBooking.headers,
        ];
        let allDataChannels = [];
        try {
          for (let s = 0; s < allHeaderChannels.length; s++) {
            let channel = this.channelList[s].id
            let { data } = await this.$axios.post(`/${channel}_web`, {
              company_id: 5
            })
            allDataChannels.push(filterArr[s](data))
          }

          let data = await this.$axios.$post('https://asia-northeast1-sotetsu-hotel.cloudfunctions.net/kpiExport', {
            headers: allHeaderChannels,
            data: allDataChannels,
            channelList: this.channelList
          }, {
            responseType: "blob"
          })

          await FileSaver.saveAs(data, "kpi_table.xlsx");
          this.loading = false;
        } catch (e) {
          console.log(e)
        }
      },
      changeLocate() {
        return this.desserts = this.data.filter(i => {
          if (this.areaChoice && this.chainChoice) {
            return i.area === this.areaChoice && i.brand === this.chainChoice
          }
          if (this.areaChoice) {
            return i.area === this.areaChoice
          }
          if (this.chainChoice) {
            return i.brand === this.chainChoice
          }
        })
      },
      async showAll() {
        this.chainChoice = ""
        this.areaChoice = ""
        let channel = this.channelList[this.channelTab].id
        let { data } = await this.$axios.post(`/${channel}_web`, {
          company_id: 5
        })
        data = filterArr[this.channelTab](data)
        this.desserts = data
        this.data = data
      }
    },
    watch: {
      channelTab: async function (newChannelTab) {
        if (newChannelTab === 0) {
          this.chainChoice = ""
          this.areaChoice = ""
          this.headers = kpiRakuten.headers;
          let { data } = await this.$axios.post("/rakuten_web", {
            company_id: 5
          })
          data = rakutenFilter(data)
          this.desserts = data
          this.data = data
        }
        if (newChannelTab === 1) {
          this.chainChoice = ""
          this.areaChoice = ""
          this.headers = kpiJalan.headers;
          let { data } = await this.$axios.post("/jalan_web", {
            company_id: 5
          })
          data = jalanFilter(data)
          this.desserts = data
          this.data = data
        }
        if (newChannelTab === 2) {
          this.chainChoice = ""
          this.areaChoice = ""
          this.headers = kpiExpedia.headers;
          let { data } = await this.$axios.post("/expedia_web", {
            company_id: 5
          })
          data = expediaFilter(data)
          this.desserts = data
          this.data = data
        }
        if (newChannelTab === 3) {
          this.chainChoice = ""
          this.areaChoice = ""
          this.headers = kpiAgoda.headers;
          let { data } = await this.$axios.post("/agoda_web", {
            company_id: 5
          })
          data = agodaFilter(data)
          this.desserts = data
          this.data = data
        }
        if (newChannelTab === 4) {
          this.chainChoice = ""
          this.areaChoice = ""
          this.headers = kpiBooking.headers;
          let { data } = await this.$axios.post("/booking_web", {
            company_id: 5
          })
          data = bookingFilter(data)
          this.desserts = data
          this.data = data
        }
        this.currentTab = newChannelTab
      }
    }
  };
</script>
