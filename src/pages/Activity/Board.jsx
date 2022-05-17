import React from 'react'
import board from '../../Images/board.png'
import { NavLink } from 'react-router-dom'

function Board (props) {
  return (
    <div className="container">
      <div className="row px-5 pt-4 pb-4">
        <div className="col-4">
          <img src={board} alt="board"/>
        </div>
        <div className="col-8 pt-4">
          <p>
            <NavLink to="/activity/pravo" className="dropdown-item">
              По гражданским правам
            </NavLink>
          </p>
          <p>
            <NavLink to="/board/legal" className="dropdown-item">
              Юридическая коллегия
            </NavLink>
          </p>
          <p>
            <NavLink to="/board/juvenile" className="dropdown-item">
              Ювенальная коллегия
            </NavLink>
          </p>
          <p>
            <NavLink to="/activity/medic/buro" className="dropdown-item">
              Бюро независимой медицинской экспертизы
            </NavLink>
          </p>
          <p>
            <NavLink to="/board/interethnic" className="dropdown-item">
              Межэтническая коллегия
            </NavLink>
          </p>
          <p>
            <NavLink to="/board/military" className="dropdown-item">
              Военная коллегия
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Board
