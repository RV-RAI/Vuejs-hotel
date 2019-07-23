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
                      <div class="box-filter mb-4">
                        <div class="box-inchannel mb-3">
                          <v-layout row wrap>
                            <v-flex xs8 sm4>
                              <v-menu
                                ref="menu"
                                v-model="menu"
                                :close-on-content-click="false"
                                :nudge-right="40"
                                :return-value.sync="date"
                                lazy
                                transition="scale-transition"
                                offset-y
                                full-width
                                max-width="290px"
                                min-width="290px"
                              >
                                <template v-slot:activator="{ on }">
                                  <v-text-field
                                    v-model="date"
                                    prepend-icon="event"
                                    readonly
                                    v-on="on"
                                  ></v-text-field>
                                </template>
                                <v-date-picker
                                  v-model="date"
                                  type="month"
                                  no-title
                                  scrollable
                                  locale="ja"
                                  min="2019-02"
                                >
                                  <v-spacer></v-spacer>
                                  <v-btn
                                    flat
                                    color="primary"
                                    @click="menu = false"
                                    >Cancel</v-btn
                                  >
                                  <v-btn
                                    flat
                                    color="primary"
                                    @click="$refs.menu.save(date)"
                                    >OK</v-btn
                                  >
                                </v-date-picker>
                              </v-menu>
                            </v-flex>
                          </v-layout>

                          <label class="subheading lbl-ft mb-3">総合</label>
                          <label class="subheading lbl-ft mb-3">エリア別</label>
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
export default {
  layout: "client",
  data() {
    return {
      date: new Date().toISOString().substr(0, 7),
      menu: false
    };
  },
  methods: {}
};
</script>

