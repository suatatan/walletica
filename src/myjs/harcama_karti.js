//izah: import ile çağrılabili metot
//izah: bu metot src/myjs altından şöyle çağrılır: import harcama_karti from '@/myjs/harcama_karti'
//izah: iç metot şöyle çağrılır: harcama_karti.ekle(state)
var harcama_karti = {
  //---- Yeni harcama kartı ekle başlangıç ---
  _ekle(state) {
    console.log("Harcama Kartı ==> Yoksa Ekle => Ekle")
    let yollanacak_data = {
      //user_email: state.currentUser.email,
      user_email: state.currentUser.email,
      ilk_giris: new Date()
    }
    var doc_id = state.currentUser.uid
    state.db.collection("harcama_kartlari").doc(doc_id).set(yollanacak_data).then(doc => {
      console.log("Yeni kullanıcı oluşturuldu: ", doc_id);
      return true
    }).then(() => {
      //this.sonuc_goster()
    }).catch(err => {
      console.log(err)
      alert("Bir hata oluştu:" + err)
      return false
    })
    //---- Yeni harcama kartı ekle bitiş ---
  },

  yoksa_ekle(state,) {
        console.log("Harcama Kartı ==> Yoksa Ekle")
        var docRef = state.db.collection("harcama_kartlari").doc(state.currentUser.uid);
        docRef.get().then(function(doc) {
          if (doc.exists) {
            console.log("Bu kullanıcı daha önce giriş yapmış o yüzden tekrar harcama kartı oluşturulmayacak", doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("Böyle bir kullanıcı veritabanında yok! Haydi yenisini oluşturalım");
            if(harcama_karti._ekle(state)){ // izah this bu modül içinden çağırırken de bu şekilde çağırmalısın
              return true
            }else{
              return false
            }

          }
        }).catch(function(error) {
          console.log("Kolleksiyondan veritabanı çekilirken hata oluştu:", error);
          return false
        });
  },

  yevmiye_ekle(state,yollanacak_data){
        state.db.collection("harcama_kartlari/" + state.currentUser.uid + "/harcamalar").add(yollanacak_data).then(doc => {
          console.log("Yevmiye kaydı eklendi ID: ", doc.id);
        }).then(() => {
          //this.sonuc_goster()
          return true
        }).catch(err => {
          console.log(err)
          return false
        })
  },

  yevmiye_listele(state,cariAy=null,cariYil=null){
    console.log("Yevmiye listele çalıştırıldı")

    let list = []
    let d = new Date();
    cariAy = cariAy == null ? d.getMonth() : cariAy
    cariYil = cariYil == null ? d.getFullYear() : cariYil
    var baslangic = new Date(cariYil,cariAy,1)
    var bitis = new Date(cariYil,cariAy,31)
    let query = state.db.collection("harcama_kartlari/"+state.currentUser.uid+"/harcamalar")
    query = query.where("tarih",">=",baslangic)
    query = query.where("tarih","<=",bitis)
    query = query.orderBy("tarih","desc")
    query = query.limit(150).get()
    query.then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                  list.push(doc.data())
              });
          });
    return list
  }

}//modül sonu
export default harcama_karti
