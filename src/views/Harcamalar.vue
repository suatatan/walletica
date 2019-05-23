<template lang="pug">
div.panel
  div#bas.panel-heading
    h1 Aylık Harcamalar
  div#boyun.panel-block
    div.columns
      div.column
        label.label Ay:
          div.control
            input(v-model="insanAy",type="number",v-on:change="tarihe_git",class="input")
      div.column
        label.label Yıl:
          div.control
            input(v-model="cariYil",type="number",v-on:change="tarihe_git",class="input")
  div#govde.panel-block
    table.table
      tr
        th Açıklama
        th Ödeme Tipi
        th Tutar
        th Tarih
      tr(v-for="kayit in list")
        td {{kayit.aciklama}} ({{kayit.kategori}})
        td {{kayit.odeme_tipi}}
        td {{kayit.tutar}}
        td {{kayit.tarih|formatDate}}
</template>

<script>
import harcama_karti from '@/myjs/harcama_karti'
import moment from 'moment'
import 'moment/locale/tr'
moment.locale('tr')
var d = new Date()

export default {
    name: "Harcamalar",
    data() {
      return{
        msg: "HarcamalarVue",
        // cariAy:  d.getMonth() , //null değer mevcut ayı gösterir
        cariYil: d.getFullYear(), //null değer mevcut yılı gösterir,
        insanAy: d.getMonth()+1,
        list: null
      }
    },
    methods: {
      tarihe_git() {
        console.log(this.insanAy)
        this.list = harcama_karti.yevmiye_listele(this.$store.state,this.insanAy-1,this.cariYil)
      }
    },
    created() {
      console.log("Harcamalar modülü => created")
      this.list = harcama_karti.yevmiye_listele(this.$store.state,this.insanAy-1,this.cariYil)
      console.log(this.list)
    },
    filters: {
        //IZAH: Javascript nesnesi olan tarihleri düzenlemek için declarative içinde kullanılacak
        formatDate(val) {
            if (!val) { return '-' }
            let date = val.toDate()
            return moment(date).fromNow()
        },
        trimLength(val) {
          //IZAH metinleri kısaltmak için
            if (val.length < 200) { return val }
            return `${val.substring(0, 200)}...`
        }
    },

}
</script>

<style lang="scss">
$parmakboy: 75px;
.kinput{
  width: $parmakboy
}
</style>
