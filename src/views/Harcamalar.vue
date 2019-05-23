<template lang="pug">
div.content
  h1 Aylık Harcamalar
  table
    tr
      th Açıklama
      th Ödeme Tipi
      th Kategori
      th Tutar
      th Tarih
    tr(v-for="kayit in list")
      td {{kayit.aciklama}}
      td {{kayit.odeme_tipi}}
      td {{kayit.kategori}}
      td {{kayit.tutar}}
      td {{kayit.tarih|formatDate}}
</template>

<script>
import harcama_karti from '@/myjs/harcama_karti'
import moment from 'moment'
import 'moment/locale/tr'
moment.locale('tr')

export default {
    name: "Harcamalar",
    data() {
      return{
        msg: "HarcamalarVue",
        list: []
      }
    },
    created() {
      console.log("Harcamalar modülü => created")
      this.list = harcama_karti.yevmiye_listele(this.$store.state,11)
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
