//izah: import ile çağrılabili metot
//izah: bu metot src/myjs altından şöyle çağrılır: import harcama_karti from '@/myjs/harcama_karti'
//izah: iç metot şöyle çağrılır: harcama_karti.ekle(state)
var harcama_karti = {
  //---- Yeni harcama kartı ekle başlangıç ---
  ekle(state) {
    let yollanacak_data = {
      //user_email: state.currentUser.email,
      user_uid: state.currentUser.email,
      ilk_giris: new Date()
    }
    var doc_id = state.currentUser.email
    state.db.collection("harcama_kartlari").doc(doc_id).set(yollanacak_data).then(doc => {
      console.log("Yeni kullanıcı oluşturuldu: ", doc_id);
    }).then(() => {
      //this.sonuc_goster()
    }).catch(err => {
      console.log(err)
      alert("Bir hata oluştu:" + err)
    })
    //---- Yeni harcama kartı ekle bitiş ---
  },

  yoksa_ekle(state,) {
        var docRef = state.db.collection("harcama_kartlari").doc(state.currentUser.email);
        docRef.get().then(function(doc) {
          if (doc.exists) {
            console.log("Bu kullanıcı daha önce giriş yapmış o yüzden tekrar harcama kartı oluşturulmayacak", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("Böyle bir kullanıcı veritabanında yok! Haydi yenisini oluşturalım");
            harcama_karti.ekle(state) // izah this bu modül içinden çağırırken de bu şekilde çağırmalısın
          }
        }).catch(function(error) {
          console.log("Kolleksiyondan veritabanı çekilirken hata oluştu:", error);
        });
  }

}
export default harcama_karti
