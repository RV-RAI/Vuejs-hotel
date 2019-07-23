<template>
 <v-app>
   <!-- <v-navigation-drawer
       fixed
       v-model="drawerRight"
       right
       clipped
       app
       class="transparent pa-3 no-bd"
       width="320"
     >
     <v-list dense class="pt-20 mn-help">
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page01'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page1') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page02'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page2') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page03'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page3') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page04'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page4') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page05'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page5') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page06'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page6') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page07'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page7') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page71'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page7-1') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page72'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page7-2') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page08'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page8') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page09'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page9') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page10'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page10') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page12'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page12') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page13'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page13') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page14'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page14') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
       <v-list-tile>
        <nuxt-link to="#" v-scroll-to="'#page15'" class="link-item">
         <v-list-tile-content>
           <v-list-tile-title>{{ $t('client.help.page15') }}</v-list-tile-title>
         </v-list-tile-content>
        </nuxt-link>
       </v-list-tile>
     </v-list>
   </v-navigation-drawer> -->
   <v-content>
    <v-container class="page-other">
     <v-layout>
      <v-flex xs12>
       <v-card class="mate-card1 card-form-center card-sm mt-5 mb-5 pb-5">
        <div class="page-other_head">
         <div class="page-other_container">
          <div class="page-other_logo">
           <h1>
            プライバシーポリシー
           </h1>
           <a href="#">
            <img
              src="/elsoul-logo.png"
              alt="Sotetsu"
              height="48">
           </a>
          </div>
          <div class="page-other_desc">
           <span>(お客様に関する情報のお取扱いについて)</span>
          </div>
         </div>
        </div>
        <div class="page-other_body">
         <div class="page-other_container">
          <p>
           エルソウル株式会社(以下「甲」といいます。)が運営する「ELSOUL」(以下「本サー ビス」といいます。)ではお客様のプライバシーを尊重し、個人情報を含む利用者情報の
取扱いにつきましては細心の注意を払い、以下の方針に従って管理いたします。
          </p>
          <h2 class="section-head mb-3 mt-3">第1条(収集する利用者情報及び収集方法)</h2>
          <p>
           本ポリシーにおいて「ユーザー」とは、本サービスをご利用頂くお客様、甲にお問い合わ
せいただく方、及び甲に情報を送信する方を含みます。また、「ユーザー等」とは、本
          </p>
          <p>
           サービスをご利用頂くお客様の顧客までをも含みます。<br>
本ポリシーにおいて、「利用者情報」とは、下記表示するように、ユーザー等の識別に係
る情報、通信サービス上の行動履歴、その他本ポリシーに基づき甲が収集するものを意味
するものとします。<br>
本サービスにおいて甲が収集する利用者情報は、その収集方法に応じて、以下のようなも
のとなります。<br>
          </p>
          <ol>
           <li>
            ユーザー等からご提供いただく情報<br>ユーザー等から甲が本サービスを利用するために、ご提供いただく情報は以下のとおり
です。<br>
            <ul>
             <li>ユーザー等の氏名、メールアドレス、生年月日</li>
             <li>ユーザー等のクレジットカード情報</li>
             <li>ユーザー等の宿泊に関する情報(宿泊日時・宿泊先・宿泊同行者・宿泊した部屋の詳細 等)</li>
             <li>その他甲が定める入力フォームにユーザー等が入力する情報</li>
            </ul>
           </li>
           <li>
            ユーザー等が本サービスの利用において、他のサービスと連携を許可することによ
  り、当該他のサービスからご提供いただく情報<br>
            <ul>
             <li>ユーザー等が本サービスを利用するにあたり、外部サービスとの連携を許可した場合に
は、その許可の際に同意いただいた内容に基づき、以下の情報を当該外部サービスから収
集します。</li>
             <li>当該外部サービスでユーザー等が利用するID</li>
             <li>その他当該外部サービスのプライバシー設定によりユーザー等が連携先に開示を認めた 情報</li>
            </ul>
           </li>
           <li>
            ユーザー等が本サービスを利用するにあたって、甲が収集する情報<br>
            甲は、本サービスへのアクセス状況やそのご利用方法に関する情報を収集することがあり ます。これには以下の情報が含まれます。
            <ul>
             <li>ログ情報( IPアドレス、アクセス日時、クラッシュ情報、システムの動作、ブラウザの 種類等)</li>
             <li>Cookie及び匿名ID</li>
            </ul>
           </li>
          </ol>
          <h2 class="section-head mb-3 mt-3">第2条(利用目的)</h2>
          <ol>
           <li>利用者情報は、本条第2項に定めるとおり本サービスの提供のために利用されるほ
か、本条第3項に定めるとおり、その他の目的にも利用される場合があります。</li>
           <li>本サービスのサービス提供にかかわる利用者情報の具体的な利用目的は以下のとおり
です。
            <ol>
             <li>
              本サービスに関する登録の受付、本人確認、利用料金の計算等本サービスの提供、維
持、保護及び改善のため、本サービス提供において必要なユーザー等の顧客分析等を行うため
             </li>
             <li>
              本サービスに関するご案内、お問い合わせ等への適切かつ早期な対応のため
             </li>
             <li>
              本サービスに関する甲の規約、ポリシー等(以下「規約等」といいます。)に違反する行為に対する対応のため
             </li>
             <li>
              本サービスに関する規約等の変更などを通知するため
             </li>
             <li>
              上記の利用目的に付随する利用目的のため
             </li>
            </ol>
           </li>
           <li>
            前項以外の利用目的は以下のとおりです。
            <ol>
             <li>
              本サービスに関連して、個人を識別できない形式に加工した統計データを作成するため (ログ情報・Cookie及び匿名ID)
             </li>
             <li>
              甲または第三者の広告の配信または表示のため(端末情報・ログ情報・Cookie及 び匿名ID)
             </li>
             <li>
              その他本サービスのマーケティングに利用するため(氏名・メールアドレス・生年月 日・その他甲またはユーザー等が定める入力フォームにユーザー等が入力する情報)
             </li>
             <li>
              ユーザー等による本サービス利用に関する請求もしくは紛争について調査および対 処を行うために必要がある場合、適用されるその他の法律により認められる場合、または 規制当局、行政機関および公式調査による要求があった場合に、収集した情報を使用する 場合。
             </li>
            </ol>
           </li>
          </ol>
          <h2 class="section-head mb-3 mt-3">第3条(利用中止要請の方法)</h2>
          <p>
           ユーザー等は、本サービスの所定の設定を行うことにより、利用者情報の全部または一部
についてその利用の停止を求めることができ、この場合、甲は速やかに、甲の定めるとこ
ろに従い、その利用を停止します。なお、利用者情報の項目によっては、その収集または
利用が本サービスの前提となるため、甲所定の方法により本サービスを退会した場合に限
り、甲はその収集を停止します。
          </p>
          <h2 class="section-head mb-3 mt-3">第4条(個人情報の外部委託先への開示について)</h2>
          <p>
           本サービスに関連して甲の事業を遂行するために業務の一部または全部を第三者に委託す る必要があり、それに伴って個人情報(個人情報保護法における「個人情報」をいいま す。以下同様)を第三者に提供する場合は、甲と同程度に個人情報の適切な取扱いを万全 になし得る能力を有し、その体制が整備されている業者を選定し、個人情報の取扱いに関 する厳密な契約の締結を結んだ上で、委託いたします。 また、仮に、個人情報の漏洩、侵 害などが第三者の委託先で発生し、ユーザー等に損害などが発生した場合には、甲が損害 賠償責任を負うものとします(ただし第三者の委託先の甲に対する損害賠償責任を排除す るものではありません)。
          </p>
          <h2 class="section-head mb-3 mt-3">第5条(第三者提供)</h2>
          <ol>
           <li>
            甲は、利用者情報(個人情報を含む)については、原則、あらかじめユーザー等の同意 を得ないで、第三者に提供しません(なお、ユーザーの顧客の利用者情報については、 ユーザー自身が当該顧客から利用者情報の第三者提供に関する同意を取得することが前提 です)。但し、次に掲げる場合はこの限りではありません。
            <ol>
             <li>
              甲が利用目的の達成に必要な範囲内において利用者情報の取扱いの全部または一部を委 託する場合
             </li>
             <li>
              合併その他の事情による甲の事業の承継に伴って利用者情報が提供される場合
             </li>
             <li>
              国の機関若しくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがある場合
             </li>
             <li>
              人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得る ことが困難である場合
             </li>
             <li>
              公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって本 人の同意を得ることが困難な場合
             </li>
             <li>
              甲の権利や財産を保護する目的で開示する必要がある場合
             </li>
             <li>
              その他、個人情報保護法その他の法令で認められる場合
             </li>
            </ol>
           </li>
           <li>
            甲は、個人情報を除く利用者情報を、下記の場合、下記の第三者に提供(販売)する場合があります。
            <ol>
             <li>
              甲のビジネスパートナー、例えば、コンサルタント、マーケティングパートナー、リサーチ会社、サービスプロバイダー等に、甲に代わって宣伝等をお願いする場合
             </li>
             <li>
              その他ユーザー等の同意がある場合
             </li>
            </ol>
           </li>
          </ol>
          <h2 class="section-head mb-3 mt-3">第6条(個人情報の開示)</h2>
          <p>
           甲は、ユーザー等から、個人情報保護法の定めに基づき個人情報の開示を求められたとき
は、ユーザー等ご本人からのご請求であることを確認の上で、ユーザー等に対し、遅滞な
く開示を行います(当該個人情報が存在しないときにはその旨を通知いたします)。但
し、個人情報保護法その他の法令により、甲が開示の義務を負わない場合は、この限りで
はありません。なお、個人情報の開示につきましては、手数料を頂戴する場合があります
ので、あらかじめご了承ください。
          </p>
          <h2 class="section-head mb-3 mt-3">第7条(利用者情報の保存について)</h2>
          <ol>
           <li>
            甲は、本サービスのアカウントをユーザー等が維持している限り、当該情報を保持し ます。ただし、ユーザー等が本サービスの利用をしなくなってから5年を経過した後に は甲は自動的に当該ユーザー等の利用者情報を削除します。また、利用者情報が本 サービスを提供し、カスタマーサポートを可能とし、その他の本サービスの業務上の 目的を向上させるために必要でなくなった時点で、甲は、本サービスの業務向上目 的、または安全および安心を守る目的、ならびに詐欺を防止し検出する目的以外の目 的において行われる利用者情報へのアクセスおよび使用を防止する手段を講じます
           </li>
           <li>
            なお、ユーザー等は、本サービスのウェブサイト等から、いつでもアカウント削除を 甲に要求することができます。その場合、これらの要求に応じて、甲は保存する必要 のない情報は削除します。ユーザー等のアカウントにクレジット等の未払いがある場 合や、請求または紛争が未解決である場合など、一定の状況において、甲は、ユー ザー等のアカウントを削除できない場合があります。削除ができない理由となってい た問題が解決した時点で、甲は上述のとおり、ユーザー等のアカウントを削除するも のとします。
           </li>
           <li>
            甲は、詐欺の防止ならびにユーザー等の安全および安心の向上など、正当な事業目的 のために必要な場合にも、特定の情報を保存することができます。たとえば甲がセ キュリティの問題を理由として特定のユーザー等のアカウントを閉鎖した場合、甲 は、当該ユーザー等がその後新たに本サービスのアカウントを開くことを防止するた め、当該アカウントに関する特定の情報を保存することができます。
           </li>
          </ol>
          <h2 class="section-head mb-3 mt-3">第8条(利用者情報の訂正及び利用停止等)</h2>
          <ol>
           <li>
            甲は、ユーザー等から、(1)利用者情報が真実でないという理由によってその内容の訂 正を求められた場合、及び(2)あらかじめ公表された利用目的の範囲を超えて取り扱われて いるという理由または偽りその他不正の手段により収集されたものであるという理由によ り、個人情報保護法等の定めに基づきその利用の停止を求められた場合には、ユーザー等 ご本人からのご請求であることを確認の上で遅滞なく必要な調査を行い、その結果に基づ き、利用者情報の内容の訂正または利用停止を行い、その旨をユーザー等に通知します。 なお、合理的な理由に基づいて訂正または利用停止を行わない旨を決定したときは、ユー ザー等に対しその旨を通知いたします。
           </li>
           <li>
            甲は、ユーザー等から、ユーザー等の利用者情報について消去を求められた場合、甲 が当該請求に応じる必要があると判断した場合は、ユーザー等ご本人からのご請求である ことを確認の上で、利用者情報の消去を行い、その旨をユーザー等に通知します。
           </li>
          </ol>
          <h2 class="section-head mb-3 mt-3">第9条(本サービス利用情報)</h2>
          <ol>
           <li>
            クッキーの扱いに関して<br>
            クッキー(Cookie)とは、ユーザー等がウェブサイトを利用する時に、サーバからユーザー 等のパソコン内に送られるテキストファイルをいいます。本ウェブサイトでは、ユーザー 等のコンピュータにクッキーを保存し、参照することがありますが、甲の発行するクッ キーには個人を特定できる情報は一切含まれておりません。なお、ユーザー等のブラウザ にて、クッキーの受け取りに関する設定が可能ですが、本ウェブサイトが提供するサービ スの大部分はクッキーが必須となっておりますので、あらかじめご了承ください。
           </li>
           <li>
            外部リンクに関して<br>
            本ウェブサイトは、いくつかの外部サイトへのリンクを含みますが、利用者情報報を共有 するものではありません。リンク先ウェブサイトにて行われる個人情報の収集に関して は、リンク先ウェブサイトのプライバシーポリシー等を必ずご参照下さい。
           </li>
           <li>
            広告に関して<br>
            Google を含む第三者配信事業者は、Cookie を使用して、本ウェブサイトへの過去のアク セス情報に基づいて広告を配信します。ユーザー等はGoogle 広告のオプトアウトページに アクセスして、Google によるCookie の使用を無効にできます(または、Network Advertising Initiative のオプトアウトページにアクセスして、第三者配信事業者による Cookie の使用を無効にできます)。
           </li>
           <li>
            セキュリティに関して<br>
            本ウェブサイトは、ユーザー等の皆様に対してより良いサービスをご提供する為に、必要 な情報をご登録いただいております。皆様の大切な利用者情報をご登録いただくにあた り、甲では必要がある場合、データ伝送を保護するために業界標準のSSL暗号を使用しま す。また、グーグル社が提供する様々な安全対策技術を活用して、不正アクセス、紛失、 破壊、改ざん、漏洩等を防止する為に努めております。
           </li>
          </ol>
          <h2 class="section-head mb-3 mt-3">第10条(お問い合わせ窓口)</h2>
          <p>
           ご意見、ご質問、苦情のお申出その他利用者情報の取扱いに関するお問い合わせは、下記 の窓口までお願いいたします。<br>
           住所:神奈川県横浜市中区竹之丸88ー3−103<br>
           エルソウル株式会社 担当部署:カスタマーサービスセンター<br>
           E-mail:<a href="mailto:info@el-soul.com">info@el-soul.com</a>
          </p>
          <h2 class="section-head mb-3 mt-3">第11条(プライバシーポリシーの変更手続)</h2>
          <p>
           甲は、利用者情報の取扱いに関する運用状況を適宜見直し、継続的な改善に努めるものと し、必要に応じて、本ポリシーを予告なしに変更することがあります。この変更について は、本ウェブサイトに掲載します。この場合、その後の本サービスの利用については、変 更後の規約が適用されるものとします。定期的にご確認下さいますようお願い申し上げま す。
          </p>
          <br>
          <p>
           改訂履歴<br>【2018年3月1日制定】
          </p>
         </div>
        </div>
       </v-card>
      </v-flex>
     </v-layout>
    </v-container>
   </v-content>
 </v-app>
</template>

<script>
export default {
  layout: 'help',
  data() {
    return {
      drawerRight: true,
      section: 0
    }
  }
}
</script>
<style scoped lang="stylus">
.page-other{
 .mate-card1{
  &.v-card{
   padding:0;
   .page-other_head{
    background-size: cover;
    background-repeat: no-repeat;
    h1{
     font-weight: 700;
     font-size: 2.7rem;
     color: #fff;
     line-height:1.2;
    }
   }
   .page-other_container{
    width: 70%;
    margin: 0 auto;
    padding: 0;
   }
   .page-other_logo{
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
    padding-top: 10rem;
    h1{
     font-weight: 700;
     font-size: 2.7rem;
     color: #6c7293;
     line-height:1.2;
    }
    a{
     text-align: right;
     padding:0;
    }
   }
   .page-other_desc{
    text-align: left;
    display: block;
    padding: 1rem 0 4rem 0;
    font-weight: 400;
    color: #6c7293;
    font-size: 1.1rem;
    border-bottom:1px solid #ebedf2;
    span{
     display:block;
    }
   }
   .page-other_body{
    padding: 4rem 0 1rem 0;

   }
  }
 }
}


</style>
