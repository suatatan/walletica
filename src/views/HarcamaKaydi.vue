<template>
  <div>
    <br>
    <div class="box" v-show="!kayitBasariliMi">
      <h2 class="title">Gider Ekle</h2>
    <form  action="index.html" method="post">
        <input type="hidden" v-model="mevcutKullanici_email"/>
        <input type="hidden" v-model="mevcutKullanici_uid"/>
        <label class="label" for="">Tutar</label>
        <input class="input" type="number" v-model="tutar" required><br>
        <!--
        <label for="">Tarih</label>
        <input required type="date" name="tarih" name="tutar" value="">
        -->
        <label class="label" for="">Açıklama</label>
        <input class="input"  type="text" v-model="aciklama"> <br>
        <label class="label" for="">Harcama Kategori</label>
        <select  class="input" v-model="kategori">
          <option value="market">Market</option>
          <option value="akaryakıt">Akaryakıt</option>
          <option value="disarida_yemek">Dışarıda Yemek</option>
          <option value="giyim">Giyim</option>
          <option value="egitim">Eğitim</option>
          <option value="fatura">Fatura (Su,Elektrik, İnternet, Telefon)</option>
          <option value="kredi_karti">Kredi kartı ödemesi</option>
          <option value="diger">Diğer</option>
          <option value=""></option>
        </select><br>
        <label class="label" for="">Ödeme Tipi</label>
        <select class="input" v-model="odeme_tipi">
          <option value="nakit">Nakit</option>
          <option value="kredi_karti">Kredi Kartı</option>
        </select>
        <br>
        <br>
        <button class="button is-success" @click="harcama_kaydet"  type="button">Kaydet</button>
      </form>
    </div>
      <div v-if="kayitBasariliMi" class="notification is primary">

        {{tutar}} tutarındaki  {{aciklama}} harcamanız kaydedildi
        <br>
        <button class="button is-info" @click="yeni_kayit">Yeni Kayıt</button>

      </div>
  </div>
</template>

<script>
import harcama_karti from '@/myjs/harcama_karti'
export default {
  name: 'HarcamaEkle',
  data(){
    return {
        mevcutKullanici_email: this.$store.state.currentUser.email,
        mevcutKullanici_uid: this.$store.state.currentUser.uid,
        tutar: "100",
        aciklama : "",
        kategori: "diger",
        odeme_tipi: "nakit",
        kayitBasariliMi: false
    }
  },
  methods: {
    deneme_metod(){
      alert(this.aciklama)
    },
    yeni_kayit() {
      this.kayitBasariliMi= false;
      this.tutar = 0;
      this.aciklama = ""
    },
    sonuc_goster(){
      this.kayitBasariliMi = true
    },
    harcama_kaydet() {
      var state = this.$store.state

      var yollanacak_data={
        tutar: this.tutar,
        aciklama: this.aciklama,
        kategori: this.kategori,
        odeme_tipi: this.odeme_tipi,
        user_email: this.mevcutKullanici_email,
        user_uid: this.mevcutKullanici_uid,
        tarih:  new Date()
      }
      if(harcama_karti.yevmiye_ekle(state,yollanacak_data)){
        this.sonuc_goster()
      }


    }
  }
}
</script>
