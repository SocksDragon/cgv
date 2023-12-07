$.ajax({
  type: "GET",
  url: "./json/movieData.json",
  dataType: "json",
  success(response) {
    let target = new URLSearchParams(location.search).get("target");
    let moiveObj = response.movie;

    let movieDetailInfo = moiveObj.filter((value) => value.name == target);

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
    } = movieDetailInfo[0];

    const [img1, img2, img3, img4, img5] = movieDetailInfo[0].image;

    const [coment1, coment2, coment3, coment4, coment5, coment6] =
      movieDetailInfo[0].coments;

    $("body").append(`
      <html xmlns="http://www.w3.org/1999/xhtml" xml:lang="ko" lang="ko">
    <header></header>
    <div id="cgvwrap">
      <div id="contaniner" class="">
        <div id="contents" class="">
          <div class="wrap-movie-detail" id="select_main">
            <div class="sect-base-movie" style="margin-top: 40px">
              <h3><strong>오펜하이머</strong>기본정보</h3>
              <div class="box-image">
                <a
                  href="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87175/87175_1000.jpg"
                  title="포스터 크게 보기 새창"
                  target="_blank"
                >
                  <span class="thumb-image">
                    <img
                      src="${img1}"
                      alt="오펜하이머 포스터 새창"
                      onerror="errorImage(this)"
                    />
                    <span class="ico-posterdetail">포스터 크게 보기</span>
                    <i class="cgvIcon etc age15">15</i>
                  </span>
                </a>
              </div>
              <div class="box-contents">
                <div class="title">
                  <strong>${name}</strong>
                  <em class="round lightblue"><span>현재상영중</span></em>

                  <p>Oppenheimer</p>
                </div>
                <div class="score">
                  <strong class="percent"
                    >예매율&nbsp;<span>${reservationRate}</span></strong
                  >
                </div>
                <div class="spec">
                  <dl>
                    <dt>감독 :&nbsp;${director}</dt>
                    <dd>
                      <a href="/movies/persons/?pidx=11015"></a>
                    </dd>

                    <dd></dd>

                    <dt>&nbsp;/ 배우 :&nbsp;</dt>
                    <dd class="on">
                      ${actors}
                    </dd>

                    <dt>장르 :&nbsp;${genre}</dt>
                    <dd></dd>
                    <dt>&nbsp;/ 기본 정보 :&nbsp;</dt>
                    <dd class="on">
                      ${sating},&nbsp;${showtime}
                    </dd>
                    <dt>개봉 :&nbsp;</dt>
                    <dd class="on">${releaseDate}</dd>
                  </dl>
                </div>
              </div>
            </div>

            <div
              class="layer-wrap"
              id="movie-pre-select"
              style="top: 100px; display: none"
            >
              <div
                class="popwrap"
                style="width: 516px; margin-top: 0px; margin-left: -268px"
              >
                <h1>프리에그 선택</h1>
                <div class="pop-contents">
                  <!-- Contents Addon -->
                  <div class="movie-pre-select">
                    <div class="header">
                      <p class="main"></p>
                    </div>
                    <div class="box">
                      <div class="desc">
                        <div class="main">이 영화가 기대되시나요?</div>
                        <div class="sub">
                          <em>'기대돼요!'</em>를 선택하시면
                          <em>'기대되는 영화'에 추가</em>됩니다.
                        </div>
                      </div>
                      <div class="wrap_btn">
                        <a href="javascript:void(0);" class="btn good">
                          <span class="sprite_preegg big favor"></span>
                          <span>기대돼요!</span>
                        </a>
                        <a href="javascript:void(0);" class="btn bad">
                          <span class="sprite_preegg big hate"></span>
                          <span>글쎄요..</span>
                        </a>
                        <input type="hidden" id="preegg_useyn" value="" />
                      </div>
                    </div>
                  </div>
                  <!-- //Contents Addon -->
                  <div class="set-btn fix-width">
                    <button type="submit" id="btnSave" class="round inred">
                      <span>확인</span>
                    </button>
                  </div>
                </div>
                <button type="button" class="btn-close">
                  프리에그 팝업 닫기
                </button>
              </div>
            </div>

            <div class="cols-content" id="menu">
              <div class="col-detail">
                <!-- 메뉴가 선택되면 a 에 title="선택" 이라고 넣는다 -->

                <div class="sect-story-movie">
                  <strong>${mainSummary}</strong
                  ><br />
                  ${summary}
                </div>
                <!-- .sect-staff -->
                <div
                  id="ctl00_PlaceHolderContent_Section_Trailer"
                  class="sect-trailer"
                >
                  <div class="heading">
                    <h4>트레일러</h4>
                    <span
                      id="ctl00_PlaceHolderContent_TrailerTotalCount"
                      class="count"
                      >10건</span
                    ><a class="link-more" href="trailer.aspx?midx=87175"
                      >더보기</a
                    >
                  </div>
                  <ul>
                    <!-- 사진 동영상 조회 -->

                    <li>
                      <div class="box-image">
                        <!-- TODO : 동영상 팝업 창 작업 후 링크 걸어야 함 //-->
                        <a
                          href="#"
                          title="새창"
                          class="movie_player_popup"
                          data-gallery-idx="217720"
                        >
                          <span class="thumb-image">
                            <img
                              src="${img2}"
                              alt="[오펜하이머]5분 하이라이트 영상"
                              onerror="errorImage(this, {'type':'landscape'})"
                            />
                            <span class="ico-play">영상보기</span>
                          </span>
                        </a>
                      </div>
                      <div class="box-contents">
                        <a
                          href="#"
                          title="새창"
                          class="movie_player_popup"
                          data-gallery-idx="217720"
                        >
                          <strong class="title">
                            <span class="ico-trailer hd">HD</span>
                            5분 하이라이트 영상
                          </strong>
                        </a>
                        <span class="txt-info">2023.08.11</span>
                      </div>
                    </li>

                    <li>
                      <div class="box-image">
                        <!-- TODO : 동영상 팝업 창 작업 후 링크 걸어야 함 //-->
                        <a
                          href="#"
                          title="새창"
                          class="movie_player_popup"
                          data-gallery-idx="217600"
                        >
                          <span class="thumb-image">
                            <img
                              src="${img3}"
                              alt="[오펜하이머]세상을 바꾼 사람들"
                              onerror="errorImage(this, {'type':'landscape'})"
                            />
                            <span class="ico-play">영상보기</span>
                          </span>
                        </a>
                      </div>
                      <div class="box-contents">
                        <a
                          href="#"
                          title="새창"
                          class="movie_player_popup"
                          data-gallery-idx="217600"
                        >
                          <strong class="title">
                            <span class="ico-trailer hd">HD</span>
                            세상을 바꾼 사람들
                          </strong>
                        </a>
                        <span class="txt-info">2023.08.08</span>
                      </div>
                    </li>

                    <li>
                      <div class="box-image">
                        <!-- TODO : 동영상 팝업 창 작업 후 링크 걸어야 함 //-->
                        <a
                          href="#"
                          title="새창"
                          class="movie_player_popup"
                          data-gallery-idx="217533"
                        >
                          <span class="thumb-image">
                            <img
                              src="${img4}"
                              alt="[오펜하이머]세상을 바꾼 순간"
                              onerror="errorImage(this, {'type':'landscape'})"
                            />
                            <span class="ico-play">영상보기</span>
                          </span>
                        </a>
                      </div>
                      <div class="box-contents">
                        <a
                          href="#"
                          title="새창"
                          class="movie_player_popup"
                          data-gallery-idx="217533"
                        >
                          <strong class="title">
                            <span class="ico-trailer hd">HD</span>
                            세상을 바꾼 순간
                          </strong>
                        </a>
                        <span class="txt-info">2023.08.04</span>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- .sect-trailer -->
                <div
                  id="ctl00_PlaceHolderContent_Section_Still_Cut"
                  class="sect-stillcut"
                >
                  <div class="heading">
                    <h4>스틸컷</h4>
                    <span class="count"
                      ><strong id="stillcut_current">4</strong>/38건</span
                    ><a class="link-more" href="still-cut.aspx?midx=87175"
                      >더보기</a
                    >
                  </div>
                  <div class="slider-wrap">
                    <div class="slider" id="still_motion">
                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217484_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217484_727.jpg"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217481_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217483_727.jpg"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217482_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217482_727.jpg"
                          />
                        </div>
                      </div>

                      <div class="item-wrap on">
                        <div class="item" style="width: 122%; height: 450px">
                          <img
                            data-src="${img5}"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                            src="${img5}"
                            style="width: 100%; margin-bottom: 200px"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217480_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217480_727.jpg"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217479_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217478_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217091_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217090_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217087_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217086_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217085_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217083_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217082_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217081_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217080_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217079_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217078_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217077_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217076_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217075_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175217074_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216906_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216905_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216904_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216903_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216902_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216901_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216900_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216899_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216756_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216502_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216501_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216500_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216499_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216498_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216497_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                          />
                        </div>
                      </div>

                      <div class="item-wrap">
                        <div
                          class="item"
                          style="width: 122%; height: 450px; display: none"
                        >
                          <img
                            data-src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216491_727.jpg"
                            alt="오펜하이머"
                            onerror="errorImage(this)"
                            src="https://img.cgv.co.kr/Movie/Thumbnail/StillCut/000087/87175/87175216491_727.jpg"
                            style="height: 100%"
                          />
                        </div>
                      </div>
                      <button type="button" class="btn-prev">
                        이전 페이지 이동
                      </button>
                      <button type="button" class="btn-next">
                        다음 페이지 이동
                      </button>
                    </div>
                  </div>
                </div>
                <!-- .sect-stillcut -->

                <div class="sect-grade" style="padding-top: 230px">
                  <!-- preegg.css 연관 UI -->
                  <div class="movie_grade">
                    <a
                      class="info"
                      id="goldenEggAlert"
                      href="javascript:void(0);"
                      ><img
                        src="https://img.cgv.co.kr/R2014/images/common/ico/ico-question-mark.png"
                        alt="?"
                    /></a>
                  </div>
                  <div class="real-rating">
                    <p class="title">
                      관람일 포함 7일 이내 관람평을 남기시면
                      <strong>CJ ONE 20P</strong>가 적립됩니다.
                    </p>
                    <p class="desc">
                      <span
                        ><em>9,634</em> 명의 실관람객이 평가해주셨습니다.</span
                      >
                    </p>
                    <div class="wrap_btn">
                      <a class="link-gradewrite" href="javascript:void(0);"
                        ><span>평점작성</span></a
                      ><a
                        class="link-reviewwrite"
                        href="/movies/point/my-list.aspx"
                        ><span>내 평점</span></a
                      >
                    </div>
                  </div>
                  <!-- //preegg.css 연관 UI -->
                  <ul class="sort" id="sortTab">
                    <li class="sortTab on" data-order-type="0" id="test">
                      <a href="javascript:void(0);" title="현재선택"
                        >최신순<span class="arrow-down"></span
                      ></a>
                    </li>
                    <li class="sortTab" data-order-type="3">
                      <a href="javascript:void(0);"
                        >추천순<span class="arrow-down"></span
                      ></a>
                    </li>
                  </ul>

                  <div class="wrap-persongrade">
                    <!-- 평점 목록 -->
                    <ul id="movie_point_list_container" class="point_col2">
                      <li
                        class=""
                        id="liCommentFirst34702102"
                        data-spoilercnt="0"
                        data-reportcnt="0"
                      >
                        <a
                          href="javascript:return false;"
                          class="screen_spoiler"
                          >&nbsp;</a
                        >
                        <div class="box-image">
                          <span class="thumb-image">
                            <img
                              src="http://img.cgv.co.kr/R2014/images/common/default_profile.gif"
                              alt="사용자 프로필"
                              onerror="errorImage(this, {'type':'profile'})"
                            />
                            <span class="profile-mask"> </span>
                            <div class="theater-sticker"></div>
                          </span>
                        </div>
                        <div class="box-contents">
                          <ul class="writerinfo">
                            <li class="writer-name">
                              <span class="egg-icon good"></span>${coment1.id}
                            </li>
                            <li class="writer-etc">
                              <span class="day">${coment1.date}</span>
                              <span
                                class="like point_like"
                                id="34702102"
                                data-ismygood="false"
                                data-commentidx="34702102"
                              >
                                <a
                                  href="javascript:return false;"
                                  class="btn_point_like"
                                  ><span
                                    ><img
                                      src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png"
                                      alt="like"
                                      class="like_red" /></span
                                  ><span id="idLikeValue">0</span></a
                                >
                              </span>
                            </li>
                            <li class="point_notify">
                              <a href="" class="btn_notify"
                                >스포일러, 욕설/비방 신고</a
                              >
                              <div class="notify_wrap">
                                <ul>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_spoiler"
                                      data-commentidx="34702102"
                                      data-ismyspoiler="false"
                                      data-spoilercnt="0"
                                      ><span>스포일러 신고</span></a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_swearword"
                                      data-commentidx="34702102"
                                      data-ismyreport="false"
                                      data-reportcnt="0"
                                      ><span>욕설/비방 신고</span></a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="box-comment">
                          <p>
                          ${coment1.coment}
                          </p>
                        </div>
                      </li>
                      <li
                        class=""
                        id="liCommentFirst34702100"
                        data-spoilercnt="0"
                        data-reportcnt="0"
                      >
                        <a
                          href="javascript:return false;"
                          class="screen_spoiler"
                          >&nbsp;</a
                        >
                        <div class="box-image">
                          <span class="thumb-image">
                            <img
                              src="${coment1.profileImage}"
                              alt="사용자 프로필"
                              onerror="errorImage(this, {'type':'profile'})"
                            />
                            <span class="profile-mask"> </span>
                            <div class="theater-sticker">
                              <span class="imax">IMAX</span>
                            </div>
                          </span>
                        </div>
                        <div class="box-contents">
                          <ul class="writerinfo">
                            <li class="writer-name">
                              <span class="egg-icon good"></span>${coment2.id}
                            </li>
                            <li class="writer-etc">
                              <span class="day">${coment2.date}</span>
                              <span
                                class="like point_like"
                                id="34702100"
                                data-ismygood="false"
                                data-commentidx="34702100"
                              >
                                <a
                                  href="javascript:return false;"
                                  class="btn_point_like"
                                  ><span
                                    ><img
                                      src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png"
                                      alt="like"
                                      class="like_red" /></span
                                  ><span id="idLikeValue">0</span></a
                                >
                              </span>
                            </li>
                            <li class="point_notify">
                              <a href="" class="btn_notify"
                                >스포일러, 욕설/비방 신고</a
                              >
                              <div class="notify_wrap">
                                <ul>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_spoiler"
                                      data-commentidx="34702100"
                                      data-ismyspoiler="false"
                                      data-spoilercnt="0"
                                      ><span>스포일러 신고</span></a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_swearword"
                                      data-commentidx="34702100"
                                      data-ismyreport="false"
                                      data-reportcnt="0"
                                      ><span>욕설/비방 신고</span></a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="box-comment">
                          <p>${coment2.coment}</p>
                        </div>
                      </li>
                      <li
                        class=""
                        id="liCommentFirst34702099"
                        data-spoilercnt="0"
                        data-reportcnt="0"
                      >
                        <a
                          href="javascript:return false;"
                          class="screen_spoiler"
                          >&nbsp;</a
                        >
                        <div class="box-image">
                          <span class="thumb-image">
                            <img
                              src="${coment2.profileImage}"
                              alt="사용자 프로필"
                              onerror="errorImage(this, {'type':'profile'})"
                            />
                            <span class="profile-mask"> </span>
                            <div class="theater-sticker"></div>
                          </span>
                        </div>
                        <div class="box-contents">
                          <ul class="writerinfo">
                            <li class="writer-name">
                              <span class="egg-icon good"></span>${coment2.id}
                            </li>
                            <li class="writer-etc">
                              <span class="day">${coment2.date}</span>
                              <span
                                class="like point_like"
                                id="34702099"
                                data-ismygood="false"
                                data-commentidx="34702099"
                              >
                                <a
                                  href="javascript:return false;"
                                  class="btn_point_like"
                                  ><span
                                    ><img
                                      src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png"
                                      alt="like"
                                      class="like_red" /></span
                                  ><span id="idLikeValue">0</span></a
                                >
                              </span>
                            </li>
                            <li class="point_notify">
                              <a href="" class="btn_notify"
                                >스포일러, 욕설/비방 신고</a
                              >
                              <div class="notify_wrap">
                                <ul>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_spoiler"
                                      data-commentidx="34702099"
                                      data-ismyspoiler="false"
                                      data-spoilercnt="0"
                                      ><span>스포일러 신고</span></a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_swearword"
                                      data-commentidx="34702099"
                                      data-ismyreport="false"
                                      data-reportcnt="0"
                                      ><span>욕설/비방 신고</span></a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="box-comment">
                          <p>
                            ${coment3.coment}
                          </p>
                        </div>
                      </li>
                      <li
                        class=""
                        id="liCommentFirst34702090"
                        data-spoilercnt="0"
                        data-reportcnt="0"
                      >
                        <a
                          href="javascript:return false;"
                          class="screen_spoiler"
                          >&nbsp;</a
                        >
                        <div class="box-image">
                          <span class="thumb-image">
                            <img
                              src="${coment3.profileImage}"
                              alt="사용자 프로필"
                              onerror="errorImage(this, {'type':'profile'})"
                            />
                            <span class="profile-mask"> </span>
                            <div class="theater-sticker">
                              <span class="imax">IMAX</span>
                            </div>
                          </span>
                        </div>
                        <div class="box-contents">
                          <ul class="writerinfo">
                            <li class="writer-name">
                              <span class="egg-icon good"></span>${coment4.id}
                            </li>
                            <li class="writer-etc">
                              <span class="day">${coment4.date}</span>
                              <span
                                class="like point_like"
                                id="34702090"
                                data-ismygood="false"
                                data-commentidx="34702090"
                              >
                                <a
                                  href="javascript:return false;"
                                  class="btn_point_like"
                                  ><span
                                    ><img
                                      src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png"
                                      alt="like"
                                      class="like_red" /></span
                                  ><span id="idLikeValue">0</span></a
                                >
                              </span>
                            </li>
                            <li class="point_notify">
                              <a href="" class="btn_notify"
                                >스포일러, 욕설/비방 신고</a
                              >
                              <div class="notify_wrap">
                                <ul>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_spoiler"
                                      data-commentidx="34702090"
                                      data-ismyspoiler="false"
                                      data-spoilercnt="0"
                                      ><span>스포일러 신고</span></a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_swearword"
                                      data-commentidx="34702090"
                                      data-ismyreport="false"
                                      data-reportcnt="0"
                                      ><span>욕설/비방 신고</span></a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="box-comment">
                          <p>명교수의 영상미 넘치는 3시간짜리 물리학 명강의</p>
                        </div>
                      </li>
                      <li
                        class=""
                        id="liCommentFirst34702082"
                        data-spoilercnt="0"
                        data-reportcnt="0"
                      >
                        <a
                          href="javascript:return false;"
                          class="screen_spoiler"
                          >&nbsp;</a
                        >
                        <div class="box-image">
                          <span class="thumb-image">
                            <img
                              src="${coment4.profileImage}"
                              alt="사용자 프로필"
                              onerror="errorImage(this, {'type':'profile'})"
                            />
                            <span class="profile-mask"> </span>
                            <div class="theater-sticker"></div>
                          </span>
                        </div>
                        <div class="box-contents">
                          <ul class="writerinfo">
                            <li class="writer-name">
                              <span class="egg-icon good"></span>${coment5.id}
                            </li>
                            <li class="writer-etc">
                              <span class="day">${coment5.date}</span>
                              <span
                                class="like point_like"
                                id="34702082"
                                data-ismygood="false"
                                data-commentidx="34702082"
                              >
                                <a
                                  href="javascript:return false;"
                                  class="btn_point_like"
                                  ><span
                                    ><img
                                      src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png"
                                      alt="like"
                                      class="like_red" /></span
                                  ><span id="idLikeValue">1</span></a
                                >
                              </span>
                            </li>
                            <li class="point_notify">
                              <a href="" class="btn_notify"
                                >스포일러, 욕설/비방 신고</a
                              >
                              <div class="notify_wrap">
                                <ul>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_spoiler"
                                      data-commentidx="34702082"
                                      data-ismyspoiler="false"
                                      data-spoilercnt="0"
                                      ><span>스포일러 신고</span></a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_swearword"
                                      data-commentidx="34702082"
                                      data-ismyreport="false"
                                      data-reportcnt="0"
                                      ><span>욕설/비방 신고</span></a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="box-comment">
                          <p>
                          ${coment5.coment}
                          </p>
                        </div>
                      </li>
                      <li
                        class=""
                        id="liCommentFirst34702077"
                        data-spoilercnt="0"
                        data-reportcnt="0"
                      >
                        <a
                          href="javascript:return false;"
                          class="screen_spoiler"
                          >&nbsp;</a
                        >
                        <div class="box-image">
                          <span class="thumb-image">
                            <img
                              src="${coment5.profileImage}"
                              alt="사용자 프로필"
                              onerror="errorImage(this, {'type':'profile'})"
                            />
                            <span class="profile-mask"> </span>
                            <div class="theater-sticker"></div>
                          </span>
                        </div>
                        <div class="box-contents">
                          <ul class="writerinfo">
                            <li class="writer-name">
                              <span class="egg-icon good"></span>${coment6.id}
                            </li>
                            <li class="writer-etc">
                              <span class="day">${coment6.date}</span>
                              <span
                                class="like point_like"
                                id="34702077"
                                data-ismygood="false"
                                data-commentidx="34702077"
                              >
                                <a
                                  href="javascript:return false;"
                                  class="btn_point_like"
                                  ><span
                                    ><img
                                      src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png"
                                      alt="like"
                                      class="like_red" /></span
                                  ><span id="idLikeValue">0</span></a
                                >
                              </span>
                            </li>
                            <li class="point_notify">
                              <a href="" class="btn_notify"
                                >스포일러, 욕설/비방 신고</a
                              >
                              <div class="notify_wrap">
                                <ul>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_spoiler"
                                      data-commentidx="34702077"
                                      data-ismyspoiler="false"
                                      data-spoilercnt="0"
                                      ><span>스포일러 신고</span></a
                                    >
                                  </li>
                                  <li>
                                    <a
                                      href="javascript:return false;"
                                      class="ico_swearword"
                                      data-commentidx="34702077"
                                      data-ismyreport="false"
                                      data-reportcnt="0"
                                      ><span>욕설/비방 신고</span></a
                                    >
                                  </li>
                                </ul>
                              </div>
                            </li>
                          </ul>
                        </div>
                        <div class="box-comment">
                          <p>연기력 최고 놀란 감독의 특유</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <!-- .sect-grade -->

                <div class="paging">
                  <ul id="paging_point">
                    <li class="on"><a href="#1" title="1페이지 선택">1</a></li>
                    <li class=""><a href="#2" title="">2</a></li>
                    <li class=""><a href="#3" title="">3</a></li>
                    <li class=""><a href="#4" title="">4</a></li>
                    <li class=""><a href="#5" title="">5</a></li>
                    <li class=""><a href="#6" title="">6</a></li>
                    <li class=""><a href="#7" title="">7</a></li>
                    <li class=""><a href="#8" title="">8</a></li>
                    <li class=""><a href="#9" title="">9</a></li>
                    <li class=""><a href="#10" title="">10</a></li>
                    <li class="paging-side">
                      <button class="btn-paging next" type="button">
                        다음 10개
                      </button>
                    </li>
                    <li class="paging-side">
                      <button class="btn-paging end" type="button">끝</button>
                    </li>
                  </ul>
                </div>

                <!-- 연관영화 -->
                <div class="sect-movielist" style="display: none">
                  <h3>
                    <img
                      src="https://img.cgv.co.kr/R2014/images/title/h3_relation_movie.gif"
                      alt="RELATION MOVIE"
                    />
                  </h3>
                  <ul>
                    <li>
                      <div class="box-image">
                        <a href="/movies/detail-view/?midx=87256">
                          <span class="thumb-image">
                            <img
                              src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87256/87256_126.jpg"
                              alt="안녕, 내일 또 만나 포스터"
                            />
                            <!-- 영상물 등급 노출 변경 2022.08.24 -->
                            <i class="cgvIcon etc age12">12</i>
                            <!-- <span class="ico-grade 12">12</span> -->
                          </span>
                        </a>
                      </div>
                      <div class="box-contents">
                        <a href="/movies/detail-view/?midx=87256"
                          ><strong>안녕, 내일 또 만나</strong></a
                        >
                      </div>
                    </li>

                    <li>
                      <div class="box-image">
                        <a href="/movies/detail-view/?midx=87254">
                          <span class="thumb-image">
                            <img
                              src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87254/87254_126.jpg"
                              alt="어파이어 포스터"
                            />
                            <!-- 영상물 등급 노출 변경 2022.08.24 -->
                            <i class="cgvIcon etc age12">12</i>
                            <!-- <span class="ico-grade 12">12</span> -->
                          </span>
                        </a>
                      </div>
                      <div class="box-contents">
                        <a href="/movies/detail-view/?midx=87254"
                          ><strong>어파이어</strong></a
                        >
                      </div>
                    </li>

                    <li>
                      <div class="box-image">
                        <a href="/movies/detail-view/?midx=87253">
                          <span class="thumb-image">
                            <img
                              src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87253/87253_126.jpg"
                              alt="더 버닝 씨 포스터"
                            />
                            <!-- 영상물 등급 노출 변경 2022.08.24 -->
                            <i class="cgvIcon etc age12">12</i>
                            <!-- <span class="ico-grade 12">12</span> -->
                          </span>
                        </a>
                      </div>
                      <div class="box-contents">
                        <a href="/movies/detail-view/?midx=87253"
                          ><strong>더 버닝 씨</strong></a
                        >
                      </div>
                    </li>

                    <li>
                      <div class="box-image">
                        <a href="/movies/detail-view/?midx=87251">
                          <span class="thumb-image">
                            <img
                              src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87251/87251_126.jpg"
                              alt="뮤직 샤펠 포스터"
                            />
                            <!-- 영상물 등급 노출 변경 2022.08.24 -->
                            <i class="cgvIcon etc age12">12</i>
                            <!-- <span class="ico-grade 12">12</span> -->
                          </span>
                        </a>
                      </div>
                      <div class="box-contents">
                        <a href="/movies/detail-view/?midx=87251"
                          ><strong>뮤직 샤펠</strong></a
                        >
                      </div>
                    </li>

                    <li>
                      <div class="box-image">
                        <a href="/movies/detail-view/?midx=87249">
                          <span class="thumb-image">
                            <img
                              src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87249/87249_126.jpg"
                              alt="그녀의 취미생활 포스터"
                            />
                            <!-- 영상물 등급 노출 변경 2022.08.24 -->
                            <i class="cgvIcon etc age15">15</i>
                            <!-- <span class="ico-grade 15">15</span> -->
                          </span>
                        </a>
                      </div>
                      <div class="box-contents">
                        <a href="/movies/detail-view/?midx=87249"
                          ><strong>그녀의 취미생활</strong></a
                        >
                      </div>
                    </li>

                    <li>
                      <div class="box-image">
                        <a href="/movies/detail-view/?midx=87244">
                          <span class="thumb-image">
                            <img
                              src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87244/87244_126.jpg"
                              alt="라모나 포스터"
                            />
                            <!-- 영상물 등급 노출 변경 2022.08.24 -->
                            <i class="cgvIcon etc age15">15</i>
                            <!-- <span class="ico-grade 15">15</span> -->
                          </span>
                        </a>
                      </div>
                      <div class="box-contents">
                        <a href="/movies/detail-view/?midx=87244"
                          ><strong>라모나</strong></a
                        >
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- .sect-movielist -->
                <!-- 연관영화 -->
              </div>
              <!-- .col-detail -->
              <iframe
                class="layer-wrap review_pop"
                name="ifrm_movie_time_table1"
                id="ifrm_movie_time_table1"
                style="display: none"
                title="상세리스트"
                height="993px"
                width="849px"
                frameborder="0"
                marginheight="0"
                marginwidth="0"
                scrolling="no"
                allowtransparency="true"
              ></iframe
              ><!--회원 평점 모아보기 iframe. mwpark_RR2015-->
              <form
                method="post"
                id="frmPointPopup"
                action="/movies/point/default-irm.aspx"
                novalidate="novalidate"
              >
                <input type="hidden" name="userid" id="frmPointUserId" />
                <input type="hidden" name="nick" id="frmPointNick" />
              </form>
            </div>
          </div>
          <span style="display: none" class="modifyCommentDummy"></span>
        </div>
      </div>
    </div>
    <script>
      $("header").load("header.html");
    </script>

`);
  },
  error(xhr) {
    alert(xhr.status + "/" + xhr.errorText);
  },
});
