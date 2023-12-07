$.ajax({
  type: "GET",
  url: "./json/movieData.json",
  dataType: "json",
  success(response) {
    let target = new URLSearchParams(location.search).get("target");

    let movieObj = response.movie;
    let storeObj = response.store;

    let movieDetailInfo = movieObj.filter((value) => value.name == target);

    console.log(movieDetailInfo);
    //해당하는 영화의 정보들
    if (movieDetailInfo.length >= 1) {
      const {
        name,
        director,
        actors,
        price,
        genre,
        sating,
        showtime,
        mainSummary,
        summary,
        releaseDate,
        reservationRate,
        imgAlt,
      } = movieDetailInfo[0];

      const [img1, img2, img3, img4, img5] = movieDetailInfo[0].image;

      const [coment1, coment2, coment3, coment4, coment5, coment6] =
        movieDetailInfo[0].coments;

      $("body").append(`
    <header></header>
    <div id="cgvwrap">
      <div id="contaniner" class="">
        <div id="contents" class="">
          <div class="search_wrap">
            <div
              id="ctl00_PlaceHolderContent_reserveTitleLine"
              class="preOrderMovie_wrap"
            >
              <strong
                id="ctl00_PlaceHolderContent_reserveTitle"
                class="search_title"
                >지금 예매 가능한 영화</strong
              >
              <ul class="preOrderMovie_list" id="preOrderMovie_list">
                <li>
                  <a
                    href="/movies/detail-view/?midx=87175"
                    class="img_wrap"
                    title="포스터 크게 보기 새창"
                    ><img
                      src="${img1}"
                      alt="${imgAlt}"
                      onerror="errorImage(this)"
                  /></a>

                  <div class="preOrderMovie_info_wrap">
                    <strong class="preOrderMovieName"
                      >${name}<i class="cgvIcon etc age15">15</i></strong
                    >
                    <span>예매율 ${reservationRate}</span>
                    <span
                      ><div>
                        <img
                          src="https://img.cgv.co.kr/R2014/Images/common/egg/eggGoldenegggreat.png"
                        />
                        <span>92%</span>
                      </div></span
                    >
                    <span>${releaseDate} 개봉</span>
                    <div class="screenType_wrap"></div>
                    <div class="preOrderMovie_explicate">
                      <strong
                        >${mainSummary}</strong
                      ><br />
                      ${summary}
                    </div>

                    <div class="btn_wrap">
                      <a
                        href="/movies/detail-view/?midx=87175"
                        class="btn_borderStyle1"
                        >상세보기</a
                      >
                      <a
                        href="/ticket/?MOVIE_CD=20033397&amp;MOVIE_CD_GROUP=20033175"
                        class="btn_style1"
                        >예매하기</a
                      >
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div class="searchingMovieResult_wrap" id="searchMovieResult">
              <!-- S > CASE 1: 검색결과 있음 -->

              <strong class="search_title"
                >영화검색 결과<span id="movieCount">1</span></strong
              >

              <ul class="searchingMovieResult_list">
                <li>
                  <a href="/movies/detail-view/?midx=87175" class="img_wrap">
                    <img
                      src="${img1}"
                      alt="오펜하이머"
                      onerror="errorImage(this)"
                    />
                    <p class="movieState screening">
                      <strong>상영중</strong><span> 예매율44.1%</span>
                    </p>
                  </a>
                  <div class="searchingMovieResult_info_wrap">
                    <strong class="searchingMovieName"
                      >${name}
                      <!-- 영상물 등급 노출 변경 2022.08.24 -->
                      <i class="cgvIcon etc age15">15</i>
                      <!-- <img src="https://img.cgv.co.kr/R2014/images/common/flag/age/15.png" alt="15세이상"> -->
                    </strong>
                    <span>${releaseDate} 개봉</span>
                    <span
                      ><div>
                        <img
                          src="https://img.cgv.co.kr/R2014/Images/common/egg/eggGoldenegggreat.png"
                        />
                        <span>92%</span>
                      </div></span
                    >
                  </div>
                </li>
              </ul>
              <!--?xml version="1.0" encoding="utf-8"?-->
              <div class="paging"></div>
              <!-- S > CASE 2: 검색결과 없음 -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <script>
      $("header").load("header.html");
    </script>
    `);
    } else if (movieDetailInfo.length <= 1) {
      $("body").append(`
      <header></header>
      <div id="cgvwrap">
        <div id="contaniner" class="">
          <div id="contents" class="">
            <div class="search_wrap">
              <div class="searchingMovieResult_wrap">
                <ul class="searchingMovieResult_list">
                  <li class="noData">
                    <img
                      src="https://img.cgv.co.kr/R2014/images/common/popconi/state0.png"
                      alt="검색 결과 없음"
                    />
                    <strong id="search_result"
                      >"${target}" 검색결과가 없습니다.</strong
                    >
                    <span id="search_result_re"
                      >영화 또는 인물명을 확인 후 다시 검색해주세요!</span
                    >
                    <p>
                      도움이 필요하시면 고객센터로 문의해주세요.
                      <a
                        onclick="gaEventLog('PC_검색','검색결과없음_고객센터바로가기', '');"
                        href="http://www.cgv.co.kr/support/default.aspx"
                        >고객센터 바로가기</a
                      >
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer></footer>
      <script>
      $('header').load('./header.html')
      $('footer').load('./footer.html')
      </script>
      `);
    }
  },
  error(xhr) {
    alert(xhr.status + "/" + xhr.errorText);
  },
});
