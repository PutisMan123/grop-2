import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Link } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <div className="center">
      <div className="oneScrean">
        <div className="right">
          <div className="right">
            <div className="icons-loco"></div>
            <h4>г. Вологда</h4>
          </div>
          <div className="right">
            <div className="icons-phone"></div>
            <h4>+7 (967) 672 - 45 - 62</h4>
          </div>
        </div>
        <div className="space-content">
          <div className="space-text">
            <h1>
              Куда бы вы ни отправились, у вас <br></br>будет все необходимое.
            </h1>
            <h2>Подготовьтесь к новым приключениям прямо сейчас.</h2>
          </div>
          <a href="./pages/catalog.jsx" className="button-catalog">
            ПЕРЕЙТИ В КАТАЛОГ
          </a>
        </div>
      </div>
      <div className="twoScrean">
        <div className="BG2">
          <div>
            <div className="text-TS1">
              Что можно приобрести в нашем магазине?
            </div>
            <h3>
              В нашем магазине туристического снаряжения вы найдете все
              необходимое для активного отдыха на природе. Мы <br></br>гордимся
              качеством своих товаров, которые соответствуют высоким стандартам.
              У нас есть все, что нужно для <br></br>комфортного и безопасного
              отдыха на свежем воздухе.
            </h3>
          </div>
          <div className="catalog">
            <div className="tov1">
              <div className="text-tovB">Одежда</div>
              <div className="text-tov">
                адаптированная под различные погодные условия - от солнечной
                жары до холодного ветра и дождя
              </div>
            </div>
            <div className="tov2">
              <div className="text-tovB">Рюкзаки</div>
              <div className="text-tov">
                разной вместимости и конструкции, подходящие для длительных
                походов и кратких прогулок
              </div>
            </div>
            <div className="tov3">
              <div className="text-tovB">Палатки</div>
              <div className="text-tov">
                различных типов и размеров, подходящих для походов, кемпинга и{" "}
                <br></br>туризма
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </React.StrictMode>,
);
