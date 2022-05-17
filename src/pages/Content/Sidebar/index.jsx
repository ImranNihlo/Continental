import React from 'react'
import dagestan from "../../../Images/dagestan.jpg"
import stavropol from "../../../Images/stavropol.jpg"
import ingushetia from "../../../Images/ingushetia.jpg"
import "./sidebar.css"
import LatestNews from './LatestNews'
import { NavLink } from 'react-router-dom'

function Sidebar (props) {
  return (
    <div className="col-3">
      <div className="btn btn-danger animate__animated animate__wobble w-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
             className="bi bi-broadcast-pin mb-1" viewBox="0 0 16 16">
          <path
            d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707zm2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708zm5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708zm2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM6 8a2 2 0 1 1 2.5 1.937V15.5a.5.5 0 0 1-1 0V9.937A2 2 0 0 1 6 8z"/>
        </svg>
        <span className="mx-2">
          <NavLink to="/latest_news">
            Последние новости
          </NavLink>
        </span>
      </div>
      <LatestNews />
      <div className="btn btn-success animate__animated animate__wobble w-100">
        <span>
          © Наши филиалы
        </span>
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-inner px-5 pt-3 pb-2 border-bottom">
          <div className="carousel-item active">
            <img className="d-block radius" src={dagestan} alt="dagestan"/>
            <h5 className="text-center">
              Республика Дагестан
            </h5>
          </div>
          <div className="carousel-item">
            <img className="d-block radius" src={stavropol} alt="stavropol"/>
            <h5 className="text-center">
              Ставропольский край
            </h5>
          </div>
          <div className="carousel-item">
            <img className="d-block radius" src={ingushetia} alt="ingushetia"/>
            <h5 className="text-center">
              Республика Ингушетия
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar