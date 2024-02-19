import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import AppRoutes from "./AppRoutes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Router>
        <AppRoutes />
        <footer>
          <div class="block">
            <p class="text">
              Оферта Политика конфиденциальности Пользовательское соглашение
              Поддержка
            </p>
            <b class="text2">Категории</b>
            <p class="text3">
              © 2008 - 2023 «CAMPING PARADISE». ВСЕ ПРАВА ЗАЩИЩЕНЫ. Веб-сайт не
              является основанием для предъявления претензий и рекламаций,
              информация является ознакомительной, технические характеристики
              товаров могут отличаться от указанных на сайте.
            </p>
            <p href="" class="txt">
              Палатки и тенты
            </p>
            <p href="" class="txt2">
              Рюкзаки
            </p>
            <p href="" class="txt3">
              Спальные мешки
            </p>
            <p href="" class="txt4">
              Матрасы
            </p>
            <p href="" class="txt5">
              Фонарики
            </p>
            <p href="" class="txt6">
              Одежда
            </p>
            <p href="" class="txt7">
              Туристические коврики
            </p>
            <p href="" class="txt8">
              Посуда
            </p>
            <p href="" class="txt9">
              Горелки и лампы
            </p>
            <p href="" class="txt10">
              Ножи и инструменты
            </p>
            <p href="" class="txt11">
              Палки для хотьбы
            </p>
            <p href="" class="txt12">
              Обувь
            </p>
            <p class="email1">@campingparadise</p>
            <p class="email2">@campingparadise</p>
            <p class="email3">@campingparadise</p>
            <p class="email4">@campingparadise</p>
            <p class="email5">+7 (967) 672 - 45 - 62</p>
            <p class="email6">г. Вологда</p>
          </div>
        </footer>
      </Router>
    </>
  );
}

export default App;
