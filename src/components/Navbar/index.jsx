import React from 'react'
import "./navbar.css"
import { Link, NavLink } from 'react-router-dom'

function Navbar (props) {
  return (
    <div className="bg-continental pt-4 pb-4">
      <div className="container px-5">
        <div className="row justify-content-between">
          <div className="col-3 text-white">
            <h2>
              <NavLink to="/">
                Континенталь
              </NavLink>
            </h2>
          </div>
          <div className="col-9 align-self-center">
            <ul className="nav">
              <li className="nav-item nav-link">
                <NavLink to="/">
                  ГЛАВНАЯ
                </NavLink>
              </li>
              <li className="nav-item nav-link">
                <div className="dropdown">
                  <NavLink to="/activity">
                    ВИДЫ ДЕЯТЕЛЬНОСТИ
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <NavLink to="/activity/pravo" className="dropdown-item">
                      <div className="dropdown">
                          Правозащитная
                        <ul className="dropdown-menu dropright" aria-labelledby="dropdownMenuButton1">
                          <NavLink to="/activity/pravo/practics" className="dropdown-item">Правозащитная практика</NavLink>
                        </ul>
                      </div>
                    </NavLink>
                    <li className="dropdown-item">Ювенальная</li>
                    <li className="dropdown-item">Межконфессиональная</li>
                    <NavLink to="/activity/medic" className="dropdown-item">
                      <div className="dropdown">
                        Медицинская
                        <ul className="dropdown-menu dropright" aria-labelledby="dropdownMenuButton1">
                          <NavLink to="/activity/medic/buro" className="dropdown-item">
                            Бюро независимой медицинской экспертизы
                          </NavLink>
                        </ul>
                      </div>
                    </NavLink>
                  </ul>
                </div>
              </li>
              <li className="nav-item nav-link">
                <div className="dropdown">
                  <NavLink to="/board">
                    КОЛЛЕГИИ
                  </NavLink>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li>
                      <NavLink to="/activity/pravo" className="dropdown-item">
                        По гражданским правам
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/board/legal" className="dropdown-item">
                        Юридическая коллегия
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/board/juvenile" className="dropdown-item">
                        Ювенальная коллегия
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/activity/medic/buro" className="dropdown-item">
                        Бюро независимой медицинской экспертизы
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/board/interethnic" className="dropdown-item">
                        Межэтническая коллегия
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/board/military" className="dropdown-item">
                        Военная коллегия
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item nav-link">
                АЛЬТЕРНАТИВНОЕ СУДОПРОИЗВОДСТВО
              </li>
              <li className="nav-item nav-link">
                <NavLink to="/contacts">
                  КОНТАКТЫ
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar