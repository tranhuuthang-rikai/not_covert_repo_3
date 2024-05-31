//LONG用
let count_img_all = document.querySelectorAll(".cp_bunner");

//アミューズ店舗用の処理 1回目だけでかいバナーに変更する
// JavaScriptで最初の出現箇所のみを対象にclassを書き換える
  var ctaAreas = document.querySelectorAll(".spring_camp");
   //console.log(ctaAreas,ctaAreas.length);
  // 最初の要素のみを対象にループ
  for (var i = 0; i < ctaAreas.length; i++) {
     
    var cpBunnerSP = ctaAreas[i].querySelector(".cp_bunner_sp");
    var cpBunnerPC = ctaAreas[i].querySelector(".cp_bunner_pc");

    if (cpBunnerSP && cpBunnerPC) {
      // 新しいバナーのURLを指定
      var newBannerURLSP = "/all_inc_img/count_down/20240401/bnr_0yen_spring_sp.jpg";
      var newBannerURLPC = "/all_inc_img/count_down/20240401/bnr_0yen_spring_pc.jpg";
      
      // 既存のバナーを新しいバナーに置き換える
      cpBunnerSP.src = newBannerURLSP;
      cpBunnerPC.src = newBannerURLPC;
      break;
    }
      
  }