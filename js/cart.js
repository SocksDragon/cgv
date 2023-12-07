let cartList = JSON.parse(localStorage.getItem("allItem"));

//console.log(cartList.length);
function listing() {
  if (cartList.length) {
    let grandTotal = 0;

    cartList.forEach((productInfo) => {
      $("#cartFor").append(`
    <div class="product">
    
      <div class="product-image">
      <a href="javascript:;">  
        <img src="${productInfo.image}" class="imgHref">
        </a> 
      </div>
      
      <div class="product-details">
        <div class="product-title">${productInfo.productName}</div>
        <p class="product-description">${productInfo.productComposition}</p>
      </div>
      <div class="product-price">${productInfo.price}원</div>

      <div class="product-quantity">
        <a href="javascript:;" class="qty__minus">-</a>
        <span class="com_form_count com_form_count0">${productInfo.count}</span>
        <a href="javascript:;" class="qty__plus">+</a>
      </div>

      <div class="product-removal">
        <button class="remove-product">
          삭제
        </button>
      </div>
      <div class="product-line-price cart-total">${(
        productInfo.price.toString().replace(",", "") * productInfo.count
      )
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </div>
    </div>
    `);
      grandTotal =
        productInfo.price.toString().replace(",", "") * productInfo.count +
        grandTotal;
    });

    $("#cartTotal").append(`
    <div class="totals">
      <div class="totals-item totals-item-total">
        <label>합계</label>
        <div class="totals-value" id="cart-total">${grandTotal
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</div>
      </div>
    </div>
        <button class="checkout">결제</button>
  
  `);
  }
}

listing();

$("body").on("click", ".qty__plus", function () {
  // $(".qty__input").val() = input 상자에 입력된 값 문자로 추출(parseInt로 묶으면 문자는 무시하고 숫자로 변환해줌)
  let count = $(this).prev().text(); // 지역변수quantity에 this(클릭한qty__plus)의 next(다음요소의 값(input))을 추출해서 대입
  let myprice = $(this).parent().prev().text();
  let total = 0;

  if (count) {
    count = count;
    $(this).prev().text(++count); // select, input에 값을 넣어줄때 val(값)(val() 빈칸일 때는 현재값을 추출해줌)
    total = count * parseInt(myprice.toString().replace(",", ""));
  } else {
    count = 1;
    $(this).prev().text(count);
    total = count * parseInt(myprice.toString().replace(",", ""));
  }
  $(this)
    .parent()
    .next()
    .next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");

  getTotal();
});

// - 누르면
$("body").on("click", ".qty__minus", function () {
  count = $(this).next().text(); // prev = 이전요소 // 지역변수quantity에 this(클릭한qty__minus)의 prev(이전요소의 값(input))을 추출해서 대입
  let myprice = $(this).parent().prev().text();
  let total = 0;
  if (count > 1) {
    $(this).next().text(--count);
    total = count * parseInt(myprice.toString().replace(",", ""));
  } else {
    count = 1;
    $(this).next().text(count);
    total = count * parseInt(myprice.toString().replace(",", ""));
  }
  $(this)
    .parent()
    .next()
    .next()
    .text(total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원");

  getTotal();
});

// 한 제품 total 금액 구하는 함수
function getTotal() {
  let total = 0;
  $(".cart-total").each(function () {
    $(this).text().toString().replace(",", "");
    total += parseInt($(this).text().toString().replace(",", ""));
  });
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  $(".totals-value").text(total + "원");
}

// 삭제버튼
$("body").on("click", ".remove-product", function () {
  let tRnum = $(this).parent().parent().index();
  console.log(tRnum);
  cartList.splice(tRnum, 1);

  localStorage.setItem("allItem", JSON.stringify(cartList));
  $("#cartTotal").empty();
  $("#cartFor").empty();
  listing();
});

$("body").on("click", ".order button", function () {
  let myid = sessionStorage.getItem("userid");
  if (!myid) {
    alert("로그인 후 구매 가능");
    location.href = "./login.html";
  } else {
    location.href = "./buy.html";
    localStorage.clear();
  }
});

$("body").on("click", ".product-image .imgHref", function () {
  let productName = $(this)
    .parent()
    .parent()
    .next()
    .find(".product-title")
    .text();

  $(location).attr("href", `./storeDetail.html?target=${productName}`);
});
