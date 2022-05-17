import React from 'react'
import medal from '../../../Images/medal.png'
import brith from '../../../Images/brith.jpg'

function LatestNews (props) {
  return (
    <div>
      <div className="row mt-3 mb-3 border-top m-0 pt-2">
        <img src={medal} alt="medal" className="col-2 p-0"/>
        <div className="col-9 px-2 align-self-center">
          <p className="m-0 fw-bold">
            О награждении
          </p>
          <p className="m-0 fst-italic text-secondary">
            Мар 07, 2022
          </p>
          <p className="m-0">
            Международная правовая
          </p>
        </div>
      </div>
      <div className="row mt-3 mb-3 border-top m-0 pt-2">
        <img src={brith} alt="brith" className="col-2 p-0"/>
        <div className="col-9 px-2 align-self-center">
          <p className="m-0 fw-bold">
            Именинники марта
          </p>
          <p className="m-0 fst-italic text-secondary">
            Мар 02, 2022
          </p>
          <p className="m-0">
            Именинники: 2 марта -
          </p>
        </div>
      </div>
      <div className="row mt-3 mb-3 border-top m-0 pt-2">
        <img src={medal} alt="medal" className="col-2 p-0"/>
        <div className="col-9 px-2 align-self-center">
          <p className="m-0 fw-bold">
            О награждении
          </p>
          <p className="m-0 fst-italic text-secondary">
            Фев 02, 2022
          </p>
          <p className="m-0">
            Международная правовая
          </p>
        </div>
      </div>
    </div>
  )
}

export default LatestNews