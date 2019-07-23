<template>
  <div>
    <div class="box-review-sum py-4">
      <v-layout justify-space-between>
        <v-img
          class="shrink ma-2 hotel-thumb"
          contain
          height="125px"
          src="/sotetsu-logo.png"
          style="flex-basis: 125px"
        ></v-img>
        <v-flex>
          <div class="ma-2">
            <h1>{{ hotel_name }}</h1>
            <v-rating
              v-model="averageStar"
              color="yellow darken-3"
              background-color="grey darken-1"
              half-increments
              hover
              dense
              readonly
            ></v-rating>
            <div><em>{{averageStar}}/5.00 - based on {{newData.length}} reviews</em></div>
            <v-btn
              round
              outline
              class="ml-0 btn-tool"
              :disabled="loading"
              @click="exportReview"
            >
              <v-icon right dark>cloud_download</v-icon>
              <span>{{ $t('client.priceTable.export') }}</span>
            </v-btn>
          </div>
        </v-flex>
      </v-layout>
    </div>
    <v-divider></v-divider>
    <div v-for="item in reviewData" :key="item.id">
      <div class="box-list-reviews py-4">
        <div class="review_card">
          <v-layout row>
            <v-flex xs12 sm2 pa-2 class="user-info text-xs-center">
              <v-avatar
                size="54"
                color="grey lighten-4"
              >
                <img src="/user-placeholder.jpg" alt="avatar">
              </v-avatar>
              <h3 class="pt-3">{{item.name}}</h3>
            </v-flex>
            <v-flex xs12 sm10 pa-2 class="user-review">
              <div class="review_detail">
                <div class="d-block">
                  <div class="review_detail__star d-inline-block">
                    <v-rating
                      v-model="item.star"
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      half-increments
                      hover
                      dense
                      readonly
                      class="mr-2 d-inline-block"
                    ></v-rating>
                    <em class="d-inline-block">{{item.star}}/5</em>
                  </div>
                  <em>Published {{item.date}}</em>
                </div>
                <!--                                <h4 class="title">"Avesome Experience"</h4>-->
                <p>{{item.body}}</p>
                <!--                                <div class="use-data">-->
                <!--                                  <span class="d-block">Stayed in 12/2018  Trip with a lover</span>-->
                <!--                                  <span class="d-block">Room rate: JPY9,001-JPY10,000</span>-->
                <!--                                  <span class="d-block">Plan - Special Offer: Limited day special plan(Breakfast Included) [Twin] [Only breakfast]</span>-->
                <!--                                </div>-->
              </div>
            </v-flex>
          </v-layout>
          <v-layout row class="review_reply">
            <v-flex xs12 sm2 pa-2 class="user-info text-xs-center">
              <v-avatar
                size="54"
                color="grey lighten-4"
              >
                <img :src="'/' + channelName +'.jpg'" alt="avatar">
              </v-avatar>
              <h3 class="pt-3">{{channelName}}</h3>
            </v-flex>
            <v-flex xs12 sm10 pa-2 class="user-review">
              <div class="review_detail">
                <div class="d-block">
                  <div class="subheading font-weight-medium d-inline-block">
                    Reply from {{ hotel_name }}
                  </div>
                </div>
                <p>{{item.response}}</p>
              </div>
            </v-flex>
          </v-layout>
        </div>
      </div>
      <v-divider></v-divider>
    </div>
    <v-divider></v-divider>

  </div>
</template>
<script>
  export default {
    props: {
      hotel_name: {
        type: String,
        required: true
      },
      newData: {
        type: Array,
        required: true
      },
      reviewData: {
        type: Array,
        required: true
      },
      channelName: {
        type: String,
        required: true
      },
      averageStar: {
        type: Number,
        required: true
      },
      spliceData: {
        type: Function,
        required: true
      },
      loading: {
        type: Boolean,
        required: true
      },
      exportReview: {
        type: Function,
        required: true
      }
    }
  }
</script>
