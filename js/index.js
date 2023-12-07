$.ajax({
    type: "GET",
    url: "./json/storeData.json",
    dataType: "json",
    success(response) {
      //해당하는 store의 정보들
      let storeInfo = response.store;
      //const [img1, img2, img3, img4] = movieInfo.movie[0].image;
      $("body").append(``);
    },
    error(xhr) {
      alert(xhr.status + "/" + xhr.errorText);
    },
  });
  
  $("body").on("click", ".img_wrap", function () {
    let productName = $(this)
      .next()
      .find("span")
      .text();
  
    $(location).attr("href", `./storeDetail.html?target=${productName}`);
  });
  