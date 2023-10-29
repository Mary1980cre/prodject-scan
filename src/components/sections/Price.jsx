import React from "react";

function Price() {
  return (
    <div class="container">


    <h2 class="hero-car">
      Наши Тарифы
  </h2>

  <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">


    <div class="col">

      <div class="card mb-4 rounded-3 shadow-sm">

        <div class="card-header py-3 price-box">
       <h4 class="my-0 fw-normal">Beginner</h4>
            <p class="price-descr">Для небольшого исследования</p>
         
              <img src="/img/171274215.png" alt="icon" class="prise-img" />
          
        
        </div>


        <div class="card-body">
          <div class="card-body_box">
            <span class="card-body_tarif">Текущий тариф</span>
          </div>
          <h4 class="card-body_price">799 ₽<span class="price-sale">1 200 ₽</span></h4>
          <p class="card-body_text">или 150 ₽/мес. при рассрочке на 24 мес.</p>
          <p class="item-title">В тариф входит:</p>
          <ul class="list-unstyled mt-3 mb-4">
            <li><img src="./img/check.png" alt="icon" />Безлимитная история запросов</li>
            <li><img src="./img/check.png" alt="icon" />Безопасная сделка</li>
            <li><img src="./img/check.png" alt="icon" />Поддержка 24/7</li>
            
          </ul>
          <button type="button" class="w-100 btn btn-lg btn-custom-1">Перейти в личный кабинет</button>
        </div>

      </div>
      </div>
  



      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">

          <div class="card-header py-3 price-box-2">
         <h4 class="my-0 fw-normal">Pro</h4>
              <p class="price-descr">Для HR и фрилансеров</p>
           
                <img src="./img/Group 1171274216.png" alt="icon" class="prise-img" />
            
          
          </div>


          <div class="card-body">
            <div class="card-body_box">
              <span class="card-body_tarif">Текущий тариф</span>
            </div>
         
            <h4 class="card-body_price">1 299 ₽<span class="price-sale">2 600 ₽</span></h4>
            <p class="card-body_text">или 279 ₽/мес. при рассрочке на 24 мес.</p>
            <p class="item-title">В тариф входит:</p>
            <ul class="list-unstyled mt-3 mb-4">
              <li><img src="./img/check.png" alt="icon" />Все пункты тарифа Beginner</li>
              <li><img src="./img/check.png" alt="icon" />Экспорт истории</li>
              <li><img src="./img/check.png" alt="icon" />Рекомендации по приоритетам</li>
              
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Подробнее</button>
          </div>
        </div>
        </div>
    
  

      <div class="col">
        <div class="card mb-4 rounded-3 shadow-sm">

          <div class="card-header py-3 price-box-3">
         <h4 class="my-0 fw-normal">Business</h4>
              <p class="price-descr">Для корпоративных клиентов</p>
           
                <img src="./img/Group 1171274214.png" alt="icon" class="prise-img" />
            
          
          </div>


          <div class="card-body">
            <div class="card-body_box">
              <span class="card-body_tarif">Текущий тариф</span>
            </div>
         
            <h4 class="card-body_price custom-card">2 379 ₽<span class="price-sale">3 700 ₽</span></h4>
            <p class="card-body_text"></p>
            <p class="item-title">В тариф входит:</p>
            <ul class="list-unstyled mt-3 mb-4">
              <li><img src="./img/check.png" alt="icon" />Все пункты тарифа Pro</li>
              <li><img src="./img/check.png" alt="icon" />Безлимитное количество запросов</li>
              <li><img src="./img/check.png" alt="icon" />Приоритетная поддержка</li>
              
            </ul>
            <button type="button" class="w-100 btn btn-lg btn-primary">Подробнее</button>
          </div>
        </div>
        </div>

        </div>
        </div>
 

  );
}

export default Price;
