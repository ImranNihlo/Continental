import React from 'react'
import continental2 from "../../Images/continental2.png"
import continental3 from "../../Images/continental3.png"

function Carousel (props) {
  return (
    <div className="bg-info">
      <div className="container">
        <div id="carouselExampleIndicators" className="carousel slide px-5 pt-3" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner pb-5">
            <div className="carousel-item active">
              <div className="row justify-content-between">
                <div className="col-3">
                  <img src={continental2} className="d-block w-100" alt="continental2"/>
                </div>
                <div className="col-9 align-self-center">
                  <strong>Международная правовая организация «Континенталь»</strong> учреждена гражданами Абхазии,
                  Белоруссии, Бельгии, Германии, Голландии, Италии, Объединенных Арабских Эмиратов, России, Турции,
                  Украины, Чехии, Южной Осетии <br/> и зарегистрировано в Министерстве Юстиции Российской Федерации
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-between">
                <div className="col-3">
                  <img src={continental2} className="d-block w-100" alt="continental2"/>
                </div>
                <div className="col-9 align-self-center">
                  <strong>Международная правовая организация «Континенталь»</strong> учреждена гражданами Абхазии,
                  Белоруссии, Бельгии, Германии, Голландии, Италии, Объединенных Арабских Эмиратов, России, Турции,
                  Украины, Чехии, Южной Осетии <br/> и зарегистрировано в Министерстве Юстиции Российской Федерации
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row justify-content-between">
                <div className="col-3">
                  <img src={continental3} className="d-block w-100" alt="continental3"/>
                </div>
                <div className="col-9 align-self-center">
                  Целевая <strong>Программа обеспечения и защиты прав и свобод человека и гражданина</strong> в РФ
                  на <span className="text-secondary">2012-2016</span> годы <br/>(далее - Концепция) - документ,
                  разработанный в соответствии с полномочиями МПА «Континенталь». Концепция отражает совокупность
                  официально принятых взглядов на цели и стратегию действия органов государственной<br/> власти, органов
                  местного самоуправления в сфере защиты конституционных прав и свобод граждан в РФ.
                </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Предыдущий</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Следующий</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Carousel