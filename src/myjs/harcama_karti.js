//izah: import ile çağrılabili metot
var harcama_karti = {
  //---- Yeni harcama kartı ekle başlangıç ---
  ekle(state) {
    let yollanacak_data = {
      //user_email: state.currentUser.email,
      user_uid: state.currentUser.email,
      ilk_giris: new Date()
    }
    var doc_id = state.currentUser.email
    state.db.collection("harcama_kartlari/" + doc_id + "/kullanici_bilgisi").add(yollanacak_data).then(doc => {
      console.log("Yeni kullanıcı oluşturuldu: ", doc.id);
    }).then(() => {
      //this.sonuc_goster()
    }).catch(err => {
      console.log(err)
      alert("Bir hata oluştu:" + err)
    })
    //---- Yeni harcama kartı ekle bitiş ---
  }
}
export default harcama_karti
