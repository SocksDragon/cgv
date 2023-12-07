function getTotal(quantity) {
  let total = 0;
  let price = parseInt($(".com_total_price").text().replace(",", ""));

  total = parseInt(quantity) * price;
  total = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  $(".com_product_total_price").text(total);
}

$("body").on("click", ".com_btn_plus", function () {
  // $(".qty__input").val() = input 상자에 입력된 값 문자로 추출(parseInt로 묶으면 문자는 무시하고 숫자로 변환해줌)
  quantity = parseInt($(".com_form_count").text());
  if (quantity) {
    quantity = parseInt(quantity);
    $(".com_form_count").text(++quantity); // select, input에 값을 넣어줄때 val(값)(val()에 값이 없을때는 값을 추출해줌)
    getTotal(quantity);
  } else {
    quantity = 1;
    $(".com_form_count").text(quantity);
    getTotal(quantity);
  }
});

// - 누르면
$("body").on("click", ".com_btn_minus", function () {
  quantity = parseInt($(".com_form_count").text());
  if (quantity > 1) {
    $(".com_form_count").text(--quantity);
    getTotal(quantity);
  } else {
    quantity = 1;
    $(".com_form_count").text(quantity);
    getTotal(quantity);
  }
});
