import React, { useRef } from "react";
import "./App.css";

function App() {
  const ref = useRef(null);

  const scrollToElem = () => ref.current.scrollIntoView;
  return (
    <div className="App">
      <header ref={ref}>
        <img src="/logo.png" alt="" />
        <div className="button__container">
          <a>Жители фермы</a>
          <a>Онлайн запись</a>
          <a>Контакты</a>
        </div>
        <div style={{ width: "90px" }}></div>
      </header>
      <div className="invite">
        <div className="invite__left">
          <div className="invite__title">
            Приглашаем <br /> на нашу ферму <br /> LLAMA{" "}
          </div>
          <div className="invite__description">
            Наши пушистые жители ждут вас
            <br /> в гости. Для посещения фермы
            <br /> необходима предварительная <br /> запись!
          </div>
          <button className="invite__button">Оставить заявку</button>
        </div>
        <img src="/Yummy-Video-Cute-lit.gif" alt="" style={{ zIndex: 2 }} />
      </div>
      <img
        src="/wave_background.svg"
        alt=""
        style={{ width: "100%", marginTop: "-50vh" }}
      />
      <img
        src="/wave_grass.svg"
        alt=""
        style={{ width: "100%", marginTop: "-15vh" }}
      />
      <div className="home">
        <div className="home__title">Жители фермы</div>

        <hr />
        <div className="home__imgBox">
          <div className="img__box">
            <img src="/left.png" alt="" />
          </div>
          <div className="img__box">
            <img src="/right.png" alt="" />
          </div>
        </div>
      </div>

      <div className="contacts">
        <div className="contacts__title">Онлайн запись</div>
        <hr />
        <div className="contacts__body">
          <div className="left">
            <img src="/lama3.png" alt="" />
          </div>
          <div className="right">
            <div>
              <div className="input__row">
                <div>Ваше Имя</div>
                <input />
              </div>
              <div className="input__row">
                Контактный телефон
                <input />
              </div>
              <div className="input__row">
                Желаемая дата
                <br />
                посещения
                <input />
              </div>
              <div className="input__row">
                Ваше Имя
                <input />
              </div>
              <button className="invite__button">Отправить </button>
            </div>
            <div className="contacts__footer">
              После отправки заявки оператор свяжется с вами для <br />
              согласования всх деталей
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <div className="map__title">Контакты</div>
        <hr />
        <div className="map__footer">
          <div className="map__left">
            <div>+7 (900) 800-80-00 Администратор</div>
            <div>Мы находимся по адресу</div>
            <div>Курорт ОХТА ПАРК</div>
            <div>д.Мистолово, ул. Людмилы Кедриной, д.1А</div>
          </div>
          <div className="map__right">
            <img src="/maps.png" />
          </div>
        </div>
      </div>
      <footer>
        <div className="footer__link">
          <a onClick={scrollToElem}>Жители фермы</a>
          <a>Онлайн запись</a>
          <a>Контакты</a>
        </div>
        <a href="tel:88008008000" className="footer__number">
          +7 (900) 800-80-00
        </a>
      </footer>
    </div>
  );
}

export default App;
