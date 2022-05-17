import React from 'react'
import mefida from '../../../Images/mefida.png'
import molot from '../../../Images/molot.png'
import konsalting from '../../../Images/konsalting.png'
import galereya from '../../../Images/galereya.png'
import mysli from '../../../Images/mysli.jpg'
import info from '../../../Images/info.jpg'
import { NavLink } from 'react-router-dom'

function Cards (props) {
  return (
    <div className="col-9 row justify-content-between">
      <div className="card col-4 border-0 animate__animated animate__bounceInUp border-bottom">
        <div className="text-center">
          <img src={mefida} className="card-img-top" alt="mefida"/>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold text-center height">Правозащитная деятельность</h5>
          <p className="card-text">
            <ul className="list-group shadow">
              <NavLink to="/activity/pravo" className="list-group-item">
                Положение о Коллегии по гражданским правам Международной правовой ассоциации "Континенталь"
              </NavLink>
              <NavLink to="/activity/pravo/practics" className="list-group-item">
                Правозщитная практика
              </NavLink>
            </ul>
          </p>
        </div>
      </div>
      <div className="card col-4 border-0 animate__animated animate__bounceInUp border-bottom">
        <div className="text-center">
          <img src={molot} className="card-img-top" alt="molot"/>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold text-center height">Альтернативное судопроизводство</h5>
          <p className="card-text">
            <ul className="list-group shadow">
              <NavLink to="/akti" className="list-group-item">
                Нормативные акты
              </NavLink>
            </ul>
          </p>
        </div>
      </div>
      <div className="card col-4 border-0 animate__animated animate__bounceInUp border-bottom">
        <div className="text-center">
          <img src={konsalting} className="card-img-top" alt="konsalting"/>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold text-center height pt-2">Консалтинг</h5>
          <p className="card-text">
            <ul className="list-group shadow">
              <li className="list-group-item">Посредничество:</li>
              <NavLink to="/arbitration-proceedings" className="list-group-item">
                — в проведении третейского разбирательства
              </NavLink>
              <NavLink to="/construction-expertise" className="list-group-item">
                — в проведении строительной экспертизы
              </NavLink>
              <NavLink to="/activity/medic/buro" className="list-group-item">
                — в проведении медицинских экспертиз
              </NavLink>
            </ul>
          </p>
        </div>
      </div>
      <div className="card col-4 border-0 animate__animated animate__bounceInUp mt-4">
        <div className="text-center">
          <img src={galereya} className="card-img-top" alt="galereya"/>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold text-center height">Правозащитная деятельность</h5>
          <p className="card-text">
            <ul className="list-group shadow">
              <li className="list-group-item">...</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="card col-4 border-0 animate__animated animate__bounceInUp mt-4">
        <div className="text-center">
          <img src={mysli} className="card-img-top" alt="mysli"/>
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bold text-center height pt-2">Статьи, мысли...</h5>
          <p className="card-text">
            <ul className="list-group shadow">
              <NavLink to="/propal_rebenok" className="list-group-item">
                В России заработал Национальный центр поиска пропавших детей.
              </NavLink>
              <NavLink to="frendship" className="list-group-item">
                О дружбе, испытанной временем.
              </NavLink>
              <NavLink to="/mysli_vsluh" className="list-group-item">
                «Жаренный петух» или «Рак на горе».
              </NavLink>
              <NavLink to="/konec_budet" className="list-group-item">Сколько веревочке не виться…</NavLink>
              <NavLink to="/sos_prezumpcii_nevinovnosti" className="list-group-item">
                SОS презумпции невиновности!
              </NavLink>
              <NavLink to="/prokrustovo_lozhe" className="list-group-item">
                Прокрустово ложе для полиции.
              </NavLink>
            </ul>
          </p>
        </div>
      </div>
      {/*<div className="card col-4 border-0 animate__animated animate__bounceInUp mt-4">*/}
      {/*  <div className="text-center">*/}
      {/*    <img src={info} className="card-img-top" alt="info"/>*/}
      {/*  </div>*/}
      {/*  <div className="card-body">*/}
      {/*    <h5 className="card-title fw-bold text-center height pt-2">Информация для ОВД</h5>*/}
      {/*    <p className="card-text">*/}
      {/*      <ul className="list-group shadow">*/}
      {/*        <li className="list-group-item">С 01 сентября 2017г. в соответствии с Федеральным законом от*/}
      {/*          29 декабря 2015 года № 382-ФЗ «Об арбитраже (третейском разбирательстве) в Российской Федерации»:*/}
      {/*          ПРЕКРАТИТЬ  ПОЛНОМОЧИЯ  СУДЬИ ПДТС «АРБИТРАЖ» И СЧИТАТЬ  НЕДЕЙСТВИТЕЛЬНЫМИ  УДОСТОВЕРЕНИЯ СУДЬИ*/}
      {/*          ПДТС «АРБИТРАЖ» см. далее…</li>*/}
      {/*      </ul>*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </div>
  )
}

export default Cards