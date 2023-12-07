$.ajax({
    type: "GET",
    url: "./json/special_theaters.json",
    dataType: "json",
    success(response) {
      let specialTheater = response.special;
       
      $("body").append(`<div id="wrap">
      <header class="index_header">
      </header>
      <section id="section">
          <article class="specialtheater_title row">
              <div class="contents">
                  <br>
                  <br>
                  <strong>CGV만의 특별함이 있는 영화관을 소개합니다.</strong>
                  <ul class="specialtheater_hash_list">
                      <li>#TECHNOLOGY</li>
                      <li>#PRESTIGE</li>
                      <li>#CONCEPT</li>
                  </ul>
              </div>
          </article>
          <article class='specialtheater_category row'>
              <div class='contents'>
                  <h4 class='specialtheater_category_title_wrap'>
                      <strong class='specialtheater_category_title'>TECHNOLOGY</strong>
                      <span class='specialtheater_category_comment'>진화된 3S(Screen, Sound, Seat) 기술로 컨텐츠 몰입도를 극대화하여 영화 관람에 최적화된 환경을 제공합니다.</span>
                  </h4>
                  <ul class='specialtheater_category_list'>
                      <li class='wide'>
                          <a href='#'>
                              <div class='img_wrap'>
                                  <img src="${specialTheater[0].image}" alt='궁극의 몰입감'>
                              </div> 
                              <strong>${specialTheater[0].title}</strong>
                              <span>${specialTheater[0].contents}</span>
                          </a>
                      </li>
                      <li>
                          <a href='#'>
                              <div class='img_wrap'>
                                  <img src='${specialTheater[1].image}' alt='특별한 오감체험'>
                              </div>
                              <strong>${specialTheater[1].title}</strong> 
                              <span>${specialTheater[1].contents}</span>
                          </a>
                      </li>
                      <li> 
                          <a href='#'>
                              <div class='img_wrap'> 
                                  <img src='${specialTheater[2].image}' alt='최대치의 공감각'> 
                              </div> 
                              <strong>${specialTheater[2].title}</strong> 
                              <span>${specialTheater[2].contents}</span>
                          </a>
                      </li>
                      <li class='wide'> 
                          <a href='#'>
                              <div class='img_wrap'> 
                                  <img src='${specialTheater[3].image}' alt='3면 확장 스크린'> 
                                  </div> 
                                  <strong>${specialTheater[3].title}</strong> 
                                  <span>${specialTheater[3].contents}</span>
                          </a>
                      </li>
                      <li class='wide'> 
                          <a href='#'>
                              <div class='img_wrap'>
                                  <img src='${specialTheater[4].image}' alt='진화된 스크린'> 
                              </div> 
                              <strong>${specialTheater[4].title}</strong>
                              <span>${specialTheater[4].contents}</span>
                          </a>
                      </li>
                      <li> 
                          <a href='#'>
                              <div class='img_wrap'> <img
                                      src='${specialTheater[5].image}' alt='3D 입체음향'> 
                              </div> 
                              <strong>${specialTheater[5].title}</strong> 
                              <span>${specialTheater[5].contents}</span>
                          </a></li>
                      <li> 
                          <a href='#'>
                              <div class='img_wrap'> 
                                  <img src='${specialTheater[6].image}' alt='초대형 스크린'>
                              </div>
                              <strong>${specialTheater[6].title}</strong>
                              <span>${specialTheater[6].contents}</span>
                          </a>
                      </li>
                      <li class='wide'> 
                          <a href='#'>
                              <div class='img_wrap'> 
                                  <img src='${specialTheater[7].image}' alt='차세대 몰입형 사운드'> 
                              </div> 
                              <strong>${specialTheater[7].title}</strong> 
                              <span>${specialTheater[7].contents}</span>
                          </a>
                      </li>
                  </ul>
              </div>
          </article>
          <article class='specialtheater_category row'>
                      <div class='contents'>
                          <h4 class='specialtheater_category_title_wrap'> 
                              <strong class='specialtheater_category_title'>PRESTIGE</strong>
                              <span class='specialtheater_category_comment'>세련된 인테리어와 프리미엄 서비스로 진정한 품격을 느낄 수 있는 최고급 영화 관람 환경을 선사합니다.</span> 
                          </h4>
                          <ul class='specialtheater_category_list'>
                              <li class='wide'> 
                                  <a href='#'>
                                      <div class='img_wrap'> 
                                          <img src='${specialTheater[8].image}' alt='박스형 프리미엄 상영관'> 
                                      </div> 
                                      <strong>${specialTheater[8].title}</strong> 
                                      <span>${specialTheater[8].contents}</span>
                                  </a>
                              </li>
                              <li> 
                                  <a href='#'>
                                      <div class='img_wrap'> 
                                          <img src='${specialTheater[9].image}' alt='호텔형 프리미엄 상영관'> 
                                      </div> 
                                      <strong>${specialTheater[9].title}</strong>
                                      <span>${specialTheater[9].contents}</span>
                                  </a>
                              </li>
                              <li> 
                                  <a href='#'>
                                      <div class='img_wrap'> 
                                          <img src='${specialTheater[10].image}'
                                              alt='쉐프가 있는 영화관'> </div> 
                                              <strong>${specialTheater[10].title}</strong> 
                                              <span>${specialTheater[10].contents}</span>
                                  </a>
                              </li>
                              <li class='wide'> 
                                  <a href='#'>
                                      <div class='img_wrap'> 
                                          <img src='${specialTheater[11].image}'
                                              alt='리클라이닝 침대 상영관'> 
                                      </div> 
                                      <strong>${specialTheater[11].title}</strong>
                                      <span>${specialTheater[11].contents}</span>
                                  </a>
                              </li>
                              <li> 
                                  <a href='#'>
                                      <div class='img_wrap'> 
                                          <img src='${specialTheater[12].image}'
                                              alt='프리미엄 소파 상영관'> 
                                      </div>
                                      <strong>${specialTheater[12].title}</strong> 
                                      <span>${specialTheater[12].contents}</span>
                                  </a>
                              </li>
                              <li> 
                                  <a href='#'>
                                      <div class='img_wrap'> 
                                          <img src='${specialTheater[13].image}'
                                              alt='대관형 프리미엄 상영관'> 
                                      </div> 
                                      <strong>${specialTheater[13].title}</strong>
                                      <span>${specialTheater[13].contents}</span>
                                  </a></li>
                              <li> 
                                  <a href='#'>
                                      <div class='img_wrap'>
                                          <img src='${specialTheater[14].image}'
                                              alt='리클라이너 상영관'> 
                                      </div> 
                                      <strong>${specialTheater[14].title}</strong> 
                                      <span>${specialTheater[14].contents}</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
          </article>
          <article class='specialtheater_category row'>
                      <div class='contents'>
                          <h4 class='specialtheater_category_title_wrap'> <strong class='specialtheater_category_title'>CONCEPT</strong>
                              <span class='specialtheater_category_comment'>유니크한 테마로 구성된 컨셉 상영관으로 특별한 추억을 만들 수 있는 다양한 영화 관람 경험을 선물합니다.
                              </span> 
                          </h4>
                          <ul class='specialtheater_category_list'>
                              <li> 
                                  <a href='#'>
                                      <div class='img_wrap'> 
                                          <img src="${specialTheater[15].image}" alt='자연 컨셉의 힐링 상영관'> 
                                      </div> 
                                      <strong>${specialTheater[15].title}</strong>
                                      <span>${specialTheater[15].contents}</span>
                                  </a>
                              </li>
                              <li> 
                                  <a href='#'>
                                      <div class='img_wrap'> 
                                          <img src="${specialTheater[16].image}" alt='신개념 소셜 상영관'> 
                                      </div> 
                                      <strong>${specialTheater[16].title}</strong>
                                      <span>${specialTheater[16].contents}</span>
                                  </a>
                              </li>
                              <li> 
                                  <a href='#'>
                                      <div class='img_wrap'> 
                                          <img src="${specialTheater[17].image}" alt='키즈 전용 상영관'> 
                                      </div> 
                                      <strong>${specialTheater[17].title}</strong>
                                      <span>${specialTheater[17].contents}</span>
                                  </a>
                              </li>
                          </ul>
                      </div>
          </article>  
      </section>
  </div>
  <footer id="footer"></footer>
  <script>
      $("header").load("header.html");
      $("footer").load("footer.html");
  </script>`);
    },
    error(xhr) {
      alert(xhr.status + "/" + xhr.errorText);
    },
  });
  
  