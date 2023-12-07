$.ajax({
  type: "GET",
  url: "./json/storeData.json",
  dataType: "json",
  success(response) {
    //해당하는 store의 정보들
    let storeInfo = response.store;
    //const [img1, img2, img3, img4] = movieInfo.movie[0].image;
    $("body").append(
      `<header id="header"></header>
      <section id="section">
        <article id="contents" class="article">
          <div class="category_product_wrap">
            <div class="tit-heading-wrap">
              <h3>스토어</h3>
            </div>
            <ul class="category_product_list">
              <li>
                <ul class="category_product_inner_list">
                  <li class="storeDetail">
                    <a href="./storeDetail.html" class="btn_category_product">
                      <span class="best_product_img_wrap">
                        <img src="${storeInfo[0].image}" alt="${storeInfo[0].name}" />
                      </span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${storeInfo[0].name}</span>
                        <span class="best_product_text_name">${storeInfo[0].productComposition}</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">
                            ${storeInfo[0].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100364', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100364', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100364', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                  <li class="storeDetail">
                    <a href="./storeDetail.html" class="btn_category_product">
                      <span class="best_product_img_wrap">
                        <img src="${storeInfo[1].image}" alt="${storeInfo[1].name}" />
                      </span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${storeInfo[1].name}</span>
                        <span class="best_product_text_name">${storeInfo[1].productComposition}</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">
                            ${storeInfo[1].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100364', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100364', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100364', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                  <li class="storeDetail">
                    <a href="./storeDetail.html" class="btn_category_product">
                      <span class="best_product_img_wrap">
                        <img src="${storeInfo[2].image}" alt="${storeInfo[2].name}" />
                      </span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${storeInfo[2].name}</span>
                        <span class="best_product_text_name">${storeInfo[2].productComposition}</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">
                            ${storeInfo[2].price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                          </span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100364', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100364', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100364', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                  <li class="storeDetail">
                    <a href="./storeDetail.html" class="btn_category_product">
                      <span class="best_product_img_wrap"><img src="${storeInfo[3].image}"
                          alt="${storeInfo[3].name}" /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${storeInfo[3].name}</span>
                        <span class="best_product_text_name">${storeInfo[3].productComposition}</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">${storeInfo[3].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100364', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100364', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100364', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                </ul>
              </li>
              <li>
                <strong class="category_product_title2">
                음료
                </strong>
                <ul class="category_product_inner_list">
                  <li class=" ">
                    <a href="javascript:;" class="btn_category_product">
                      <span class="best_product_img_wrap"><img src="${storeInfo[4].image}"
                          alt="${storeInfo[4].name}" /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${
                          storeInfo[4].name
                          }</span>
                        <span class="best_product_text_name">${storeInfo[4].explaination}</span>
    
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">${storeInfo[4].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100083', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100083', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100083', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" class="btn_category_product">
                      <span class="best_product_img_wrap"><img src="${storeInfo[9].image}"
                          alt="${storeInfo[9].name}" /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${storeInfo[9].name}</span>
                        <span class="best_product_text_name">${storeInfo[9].explaination}</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">${storeInfo[9].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100089', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100089', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100089', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                  <li class=" ">
                    <a href="javascript:;" class="btn_category_product">
                      <span class="best_product_img_wrap"><img src="${storeInfo[7].image}"
                          alt="${storeInfo[7].name}" /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${storeInfo[7].name}</span>
                        <span class="best_product_text_name">${storeInfo[7].explaination}</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">${storeInfo[7].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100090', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100090', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100090', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                </ul>
              </li>
              <li>
                <strong class="category_product_title2">
                스낵
                </strong>
                <ul class="category_product_inner_list">
                  <li class="">
                    <a href="javascript:;" class="btn_category_product">
                      <span class="best_product_img_wrap"><img src="${storeInfo[5].image}"
                          alt="${storeInfo[5].name}" /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${storeInfo[5].name}</span>
                        <span class="best_product_text_name">${storeInfo[5].explaination}</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">${storeInfo[5].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100089', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100089', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100089', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" class="btn_category_product">
                      <span class="best_product_img_wrap"><img src="${storeInfo[6].image}"
                          alt="${storeInfo[6].name}" /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${storeInfo[6].name}</span>
                        <span class="best_product_text_name">${storeInfo[6].explaination}</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">${storeInfo[6].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100089', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100089', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100089', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                  <li class="">
                    <a href="javascript:;" class="btn_category_product">
                      <span class="best_product_img_wrap"><img src="${storeInfo[8].image}"
                          alt="${storeInfo[8].name}" /></span>
                      <span class="best_product_text_wrap">
                        <span class="best_product_text_title">${storeInfo[8].name}</span>
                        <span class="best_product_text_name">${storeInfo[8].explaination}</span>
                        <span class="best_product_sale_price_wrap">
                          <span class="store_deatail_source_price">${storeInfo[6].price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</span>
                        </span>
                      </span>
                    </a>
                    <a href="#none" onclick="javascript:fnMoveLink('1', '100089', '0', ''); return false;"
                      class="btn_category_product_cart">1</a>
                    <a href="#none" onclick="javascript:fnMoveLink('2', '100089', '0', '1'); return false;"
                      class="btn_category_product_gift">2</a>
                    <a href="#none" onclick="javascript:fnMoveLink('3', '100089', '0', '1'); return false;"
                      class="btn_category_product_buy">3</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="info_use_wrap">
            <a href="javascript:;" class="btn_info_use">
              <span class="btn_info_use_title">CGV 기프트샵 이용안내</span>
              <span class="btn_info_use_subtitle">새롭게 리뉴얼한 CGV 기프트샵와 함께<br />CGV에서 또 다른
                즐거움을 누려보세요.</span>
            </a>
            <div class="info_use">
              <strong>CGV 고객센터</strong>
              <span class="info_use_telnum">1544-1122</span>
              <span>상담가능 시간 : 월~금 09:00~18:00</span>
              <span>*이 외 시간은 자동 응답 안내 가능</span>
            </div>
          </div>
        </article>
      </section>
      <footer id="footer"></footer>
          
      <script>
        $("header").load("header.html");
        $("footer").load("footer.html");
    
      </script>`
    );
  },
  error(xhr) {
    alert(xhr.status + "/" + xhr.errorText);
  },
});

$("body").on("click", ".best_product_img_wrap ", function () {
  let target = $(this).find("img").attr("alt");
  let info = "";
  $.ajax({
    type: "GET",
    url: "./json/storeData.json",
    dataType: "json",
    success: function (response) {
      info = response.store;
      $(location).attr("href", `./storeDetail.html?target=${target}`);
    },
    error: function (xhr) {
      alert(xhr.status + "/" + xhr.errorText);
    },
  });
});

$("body").on("click", ".btn_category_product_cart", function () {
  let price = $(this)
    .prev()
    .find(
      ".best_product_text_wrap .best_product_sale_price_wrap .store_deatail_source_price"
    )
    .text();

  let total = price;
  let image = $(this).prev().find(".best_product_img_wrap img").attr("src");

  let count = 1;
  let productName = $(this)
    .prev()
    .find(".best_product_img_wrap img")
    .attr("alt");

  let productComposition = $(this)
    .prev()
    .find(".best_product_text_wrap .best_product_text_name")
    .text();

  let newItem = {
    productName: productName,
    price: price,
    total: total.toString().replace(",", ""),
    image: image,
    count: count,
    productComposition: productComposition,
  };

  let itemList = JSON.parse(localStorage.getItem("allItem")); // allItem이라는게 없으니 null값으로 출력
  if (itemList == null) {
    itemList = [];
  }

  itemList.push(newItem);
  localStorage.setItem("allItem", JSON.stringify(itemList));

  $(location).attr("href", `./cart.html?newItem=${newItem}`);
});
