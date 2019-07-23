<template>
  <v-app>
    <v-content>
      <v-container fluid full-content>
        <div class="inside">
          <div class="page-header">{{$t('client.priceTable.dataTab') }}: {{ hotelName }}</div>
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
                          <label class="subheading lbl-ft">
                            更新日: {{ updated_at }}
                          </label>
                          <v-card flat>
                            <v-data-table
                              v-if="hotels.length > 0"
                              :headers="headers"
                              :items="hotels"
                              :rows-per-page-items="rowsPerPageItems"
                              :pagination.sync="pagination"
                              class="mt-2 mb-4"
                            >
                              <template slot="items" slot-scope="props">
                                <td v-for="(i, index) in props.item" :key="index">{{ i }}</td>
                              </template>
                            </v-data-table>
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
  import dateFns from "date-fns"

  function dateFormat(date) {
    return dateFns.format(date, "YYYY年M月D日")
  }

  export default {
    layout: "client",
    async asyncData({store, $axios, params}) {
      /**
       * Show hotel name
       */
      let hotel_id = params.id || store.state.defaultHotel.id;
      let hotel_list = store.state.hotelListState;
      let hotel_name = "";
      let branchID = ""
      if (hotel_id) {
        const htList = await _.find(hotel_list, i => Number(i.id) === Number(hotel_id))

        hotel_name = htList ? htList.hotel_name : "";
        branchID = htList.branch_id || ""
        await store.commit("setDefaultHotel", htList)
      }

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
      let dataTable = [];

      let updated_at = dateFormat(store.state.hotelListState[0].updated_at)
      updated_at = dateFormat("2019-06-04")

      data.map(i => {
        dataTable.push({
          date: i.checkindate,
          rakuten: i.rakuten_min_price,
          jalan: i.jalan_min_price,
          agoda: i.agoda_min_price,
          expedia: i.expedia_min_price,
          booking: i.booking_min_price
        });
      });

      return {
        hotelName: hotel_name,
        channelList: channelSortedArray,
        hotelList: hotel_list,
        headers: [
          {
            text: 'Date',
            align: 'left',
            sortable: true,
            value: 'date'
          },
          {
            text: '楽天トラベル',
            value: 'rakuten',
            sortable: true
          },
          {
            text: 'じゃらん',
            value: 'jalan',
            sortable: true
          },
          {
            text: 'Agoda',
            value: 'agoda',
            sortable: true
          },
          {
            text: 'Expedia ',
            value: 'expedia',
            sortable: true
          },
          {
            text: 'Booking',
            value: 'booking',
            sortable: true
          }
        ],
        hotels: dataTable,
        hotel_ID: hotel_id,
        updated_at
      };
    },
    data() {
      return {
        alert: false,
        rowsPerPageItems: [25, 50, 100],
        pagination: {
          rowsPerPage: 25
        }
      };
    }
  };
</script>
