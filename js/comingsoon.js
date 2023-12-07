$.ajax({
    type: "GET",
    url: "./json/movieData.json",
    dataType: "json",
    success(response) {
      //해당하는 store의 정보들
      let movieListInfo = response.movie;
      //const [img1, img2, img3, img4] = movieInfo.movie[0].image;
      $("body").append(
        `<header id="header"></header>
        <section id="section">
          <article id="contents" class="article">
            <div class="wrap-movie-chart">
              <div class="tit-heading-wrap">
                <h3>상영예정작</h3>
              </div>
              <div class="sect-movie-chart">
                <h4 class="hidden">무비차트 - 예매율순</h4>
                <ol>
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.1</strong>
                      <a href="/movies/detail-view/?midx=87175">
                        <span class="thumb-image">
                          <img src="${movieListInfo[0].image[0]}" alt="${movieListInfo[0].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
      
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87175">
                        <strong class="title">${movieListInfo[0].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[0].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위1~ 3위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">92%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[0].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.2</strong>
                      <a href="/movies/detail-view/?midx=87175">
                        <span class="thumb-image">
                          <img src="${movieListInfo[1].image[0]}" alt="${movieListInfo[1].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
      
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87175">
                        <strong class="title">${movieListInfo[1].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[1].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위1~ 3위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">92%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[1].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.3</strong>
                      <a href="/movies/detail-view/?midx=87175">
                        <span class="thumb-image">
                          <img src="${movieListInfo[2].image[0]}" alt="${movieListInfo[2].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
      
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87175">
                        <strong class="title">${movieListInfo[2].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[2].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위1~ 3위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">92%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[2].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.4</strong>
                      <a href="/movies/detail-view/?midx=87175">
                        <span class="thumb-image">
                          <img src="${movieListInfo[3].image[0]}" alt="${movieListInfo[3].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
      
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87175">
                        <strong class="title">${movieListInfo[3].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[3].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위1~ 3위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">92%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[3].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
                </ol>
                <ol>
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.5</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[4].image[0]}" alt="${movieListInfo[4].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[4].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[4].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[4].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.6</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[5].image[0]}" alt="${movieListInfo[5].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[5].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[5].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[5].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.7</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[6].image[0]}" alt="${movieListInfo[6].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[6].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[6].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[6].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                      <span class="like">
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.8</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[0].image[0]}" alt="${movieListInfo[0].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[0].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[0].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[0].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                      <span class="like">
                    </div>
                  </li>
                </ol>
                <ol class="list-more">
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.9</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[1].image[1]}" alt="${movieListInfo[1].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[1].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[1].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[1].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.10</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[2].image[1]}" alt="${movieListInfo[2].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[2].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[2].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[2].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.11</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[3].image[1]}" alt="${movieListInfo[3].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[3].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[3].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[3].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.12</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[4].image[1]}" alt="${movieListInfo[4].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[4].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[4].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[4].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.13</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[5].image[1]}" alt="${movieListInfo[5].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[5].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[5].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[5].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.14</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[6].image[1]}" alt="${movieListInfo[6].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[6].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[6].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[6].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.15</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[0].image[2]}" alt="${movieListInfo[0].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[0].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[0].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[0].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
      
                  <li>
                    <div class="box-image">
                      <strong class="rank">No.16</strong>
                      <a href="/movies/detail-view/?midx=87136">
                        <span class="thumb-image">
                          <img src="${movieListInfo[1].image[2]}" alt="${movieListInfo[1].name}" onerror="errorImage(this)" />
                          <!-- 영상물 등급 노출 변경 2022.08.24 -->
                          <i class="cgvIcon etc age15">15</i>
                          <!-- <span class="ico-grade 15">15</span> -->
                        </span>
                      </a>
                    </div>
                    <div class="box-contents">
                      <a href="/movies/detail-view/?midx=87136">
                        <strong class="title">${movieListInfo[1].name}</strong>
                      </a>
      
                      <div class="score">
                        <strong class="percent">예매율<span>${movieListInfo[1].reservationRate}</span></strong>
                        <!-- 2020.05.07 개봉전 프리에그 노출, 개봉후 골든에그지수 노출변경 (적용 범위4~ 7위)-->
                        <div class="egg-gage small">
                          <span class="egg great"></span>
                          <span class="percent">89%</span>
                        </div>
                      </div>
      
                      <span class="txt-info">
                        <strong>
                          ${movieListInfo[1].releaseDate}
                          <span>개봉</span>
                        </strong>
                      </span>
                    </div>
                  </li>
                </ol>
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
  
  $("body").on("click", ".box-image a .thumb-image ", function () {
    let target = $(this).find("img").attr("alt");
    let info = "";
    $.ajax({
      type: "GET",
      url: "./json/movieData.json",
      dataType: "json",
      success: function (response) {
        info = response.store;
        $(location).attr("href", `./movieDetail.html?target=${target}`);
      },
      error: function (xhr) {
        alert(xhr.status + "/" + xhr.errorText);
      },
    });
  });
  