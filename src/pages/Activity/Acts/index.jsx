import React from 'react'
import "./acts.css"
import Sidebar from '../../Content/Sidebar'

function Acts (props) {
  return (
    <div className="container">
      <div className="row justify-content-between px-5 pt-4 pb-4">
        <div className="col-9">
          <h1 className="text-center fw-bold mb-5 text-primary">
            Нормативные акты
          </h1>
          <a className="acts" href="https://base.garant.ru/10101354/">
            <h2>
              1. Закон РФ от 7 июля 1993 г. N 5338-I «О международном коммерческом арбитраже»
            </h2>
          </a>
          <a className="acts" href="https://base.garant.ru/71295378/">
            <h2>
              2. Федеральный закон № 382-ФЗ от 29.12.2015г. «Об арбитраже (третейском разбирательстве) в Российской Федерации».
            </h2>
          </a>
        </div>
        <Sidebar />
      </div>
    </div>
  )
}

export default Acts
