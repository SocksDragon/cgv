$("body").on("keyup", ".area_search fieldset .home .type_text", function (key) {
  if (key.keyCode && key.keyCode === 13) {
    let target = $(this).val();
    let info = "";
    $.ajax({
      type: "GET",
      url: "./json/movieData.json",
      dataType: "json",
      success: function (response) {
        info = response.store;
        $(location).attr("href", `./search.html?target=${target}`);
      },
      error: function (xhr) {
        alert(xhr.status + "/" + xhr.errorText);
      },
    });
  }
});
