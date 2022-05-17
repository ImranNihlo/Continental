import React from 'react'
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import "./contacts.css"
import rus from "../../Images/rus.jpg"
import turkey from "../../Images/turkey.jpg"
import czech from "../../Images/czech.png"
import phone from "../../Images/phone.png"
import email from "../../Images/email.png"

function Contacts (props) {
  const mapData = {
    center: [44.046340, 43.068972],
    zoom: 12,
  };

  const coordinates = [
    [44.046340, 43.068972],
  ];
  return (

    <div className="container">
      <div className="row pt-4 pb-4">
        <div className="col-7">
          <YMaps>
            <Map width="680px" height="400px" defaultState={mapData}>
              {coordinates.map(coordinate => <Placemark geometry={coordinate} />)}
            </Map>
          </YMaps>
        </div>
        <div className="col-5">
          <div className="row align-items-center mb-4">
            <div className="col">
              <img className="radius" src={rus} alt="rus"/>
            </div>
            <div className="col fs-5">
              Российская Федерация<br/> Ставропольский край
            </div>
          </div>
          <p className="m-0">
            Юридический адрес: г.Пятигорск, ул.Нежнова, 21/3
          </p>
          <p>
            Фактический адрес: г.Пятигорск, ул.Кузнечная, 8а
          </p>
          <img src={phone} width={24} height={24} alt="phone" className="mb-2"/> <span className="fs-3">Телефон</span>
          <p className="m-0">
            8(994) 999 5 333
          </p>
          <p>
            8(928) 968-69-80
          </p>
          <img src={email} alt={email} width={24} height={24} className="mb-2"/> <span className="fs-3">Email</span>
          <p>
            mpa-k@mail.ru
          </p>
        </div>
        <p className="fs-3">
          Представительство МПА «Континенталь» по СКФО:
        </p>
        <p className="m-0">
          1. Юридический адрес: Российская Федерация,367000 Республика Дагестан, г.Махачкала,ул.Дзержинского, дом 12, офис 2
        </p>
        <p className="m-0">
          Тел.: 8 994 999 5 333; 8 928 375 57 31
        </p>
        <p>
          E-mail: mpa-k@mail.ru
        </p>

        <p className="fs-3">
          Приемные МПА «Континенталь»
        </p>
        <p className="m-0">
          1. г.Ессентуки Российская Федерация, Ставропольский край, 357601, ул.Кисловодская д.106.
        </p>
        <p className="m-0">
          Тел.: 8928 968 69 80
        </p>
        <p>
          E-mail: mpa-k@mail.ru
        </p>

        <p className="m-0">
          2.ст. Советская 357329 Российская Федерация, Ставропольский край, ст. Советская, ул. Ленина, д. 49
        </p>
        <p className="m-0">
          Тел.: 8(909)772-52-97
        </p>
        <p>
          E-mail: shamanking-073@mail.ru
        </p>

        <p className="fs-3">
          Южный федеральный округ
        </p>
        <p className="m-0">
          1.Астрахань 414057 Российская Федерация, г. Астрахань, ул. Космонавтов, д. 14.
        </p>
        <p className="m-0">
          Тел.: 8(927) 566-80-99 / 8(917) 088-95-75
        </p>
        <p>
          E-mail: savvich-65@mail.ru
        </p>

        <p className="m-0">
          2. Ростов – на – Дону
        </p>
        <p>
          Тел.: 8(918) 500-94-39
        </p>

        <p className="fs-3">
          <img src={turkey} alt="turkey" width={100} height={70}/>
          <span className="mx-2">
            Приемная в Турции
          </span>
        </p>
        <p className="m-0">
          Buyukdere Caddesi 93/1 Mekidiyekoy/ Стамбул/ Турция
        </p>
        <p className="m-0">
          Тел.: +90-212-272-13-44
        </p>
        <p className="m-0">
          Факс: +90-212-356-32-13
        </p>
        <p>
          E-mail: fozsu@yahoo.com
        </p>

        <p className="fs-3">
          <img src={czech} alt="czech" width={100} height={70}/>
          <span className="mx-2">
            Приемная в Чехии
          </span>
        </p>
        <p className="m-0">
          BREMATECH a.s. Cemokostelecka 1168, CZ 100 00 Praha 10
        </p>
        <p className="m-0">
          Тел.: +420-220-303-964
        </p>
        <p className="m-0">
          Факс: +420-220-303-953
        </p>
        <p>
          E-mail: brettl@brematech.cz
        </p>
      </div>
    </div>
  );
}

export default Contacts;