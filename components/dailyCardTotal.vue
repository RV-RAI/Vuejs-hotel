<template>
  <v-card flat>
    <div class="basic-list-headerInfo font-weight-bold">
      <span :class="cardTitle.class">
        {{cardTitle.title}}
      </span>
      <p class="font-weight-bold">¥ {{ formatPrice(totalNumber.totalTw) }}</p>
      <span>
         <span :class="checkClass.class">
          <i class="material-icons">{{checkClass.arrow}}</i>
           {{ formatPrice(totalNumber.offsets) }} ({{ formatPercent(totalNumber.percent) }}%)
         </span>
       </span>
      <br>
      <span>¥ {{ formatPrice(totalNumber.totalLw) }}</span>
      <em class="hidden-sm"></em>
    </div>
  </v-card>
</template>

<script>
  import numeral from "numeral"

  function formatPrice(value) {
    return numeral(value).format("0,0")
  }

  function formatPercent(value) {
    return numeral(value).format("0.00")
  }

  export default {
    props: {
      index: {
        type: Number,
        required: true
      },
      totalArr: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        formatPrice,
        formatPercent,
      }
    },
    computed: {
      cardTitle() {
        if(this.index === 1) {
          return {
            title: "楽天トラベル",
            class: "text-rakuten"
          }
        } else if (this.index === 2){
          return {
            title: "じゃらん",
            class: "text-jalan"
          }
        } else {
          return {
            title: "総合",
            class: "text-purple"
          }
        }
      },
      checkClass() {
        if(this.totalNumber.offsets >= 0) {
          return {
            class: "green--text text--darken-1 d-flex",
            arrow: "arrow_upward"
          }
        } else {
          return {
            class: "red--text text--darken-1 d-flex",
            arrow: "arrow_downward"
          }
        }
      },
      totalNumber() {
        return this.totalArr[this.index - 1]
      }
    }
  }
</script>
