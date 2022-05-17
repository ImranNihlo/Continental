import React from 'react'
import mefidaAndMolot from "../../Images/mefida&molot.png"

function Activity (props) {
  return (
    <div className="container">
      <div className="row px-5 pt-4 pb-4">
        <div className="col-4">
          <h4 className="text-center">
            Виды деятельности:
          </h4>
          <img src={mefidaAndMolot} alt="mefidaAndMolot"/>
        </div>
        <div className="col-8 pt-4">
          <p>
            Центральный аппарат Партнёрства
          </p>
          <p>
            Правозащитная Медицинская Альтернативное судопроизводство
          </p>
          <p>
            Альтернативное судопроизводство
          </p>
          <p>
            Обособленные подразделения Партнерства
          </p>
          <p>
            Ювенальная Межэтническая Институт уполномоченного по правам человека
          </p>
          <p>
            Обособленные подразделения Партнерства
          </p>
          <p>
            Постоянно действующий третейский суд «Арбитраж»
          </p>
          <p>
            Судебная практика
          </p>
          <p>
            ПДТС "Арбитраж"
          </p>
        </div>
      </div>
    </div>
  )
}

export default Activity