import React from "react";

function Hero() {
  return (
    <div class="container">

    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-5">
        <img src="../img/Group13.png" class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
      </div>

      <div class="col-lg-7">"
        <h1 class="display-7 fw-bold text-body-emphasis lh-1 mb-3">сервис по поиску публикаций <br/>
            о компании <br/>
            по его ИНН</h1>
            <p class="hero-descr">Комплексный анализ публикаций, получение данных<br/> в формате PDF на электронную почту.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-bg btn-lg px-4 me-md-2">
            <a href="/search" class="btn-link-hero btn-custom">Запросить данные</a></button>
        
        </div>

      </div>
    </div>
    </div>

  );
}

export default Hero;
