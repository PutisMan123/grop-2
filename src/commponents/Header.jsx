import logo from "./../assets/logo.png";
import catalog from "./../assets/catalog.png";
import sales from "./../assets/sales.png";
import cart from "./../assets/cart.png";
import contacts from "./../assets/contacts.png";
import Search from "./Search";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-around items-center fixed">
      <div className="bg-neutral-300 opacity-50 rounded-b-full absolute size-full"></div>
      <div className="flex justify-around items-center relative z-10 w-full">
        <img src={logo} />
        <nav className="header-nav">
          <ul className="flex xl:gap-11 lg:gap-4">
            <li>
              <Link to="./catalog" className="flex gap-1">
                <img src={catalog} />
                Каталог
              </Link>
            </li>
            <li>
              <Link to="sales" className="flex gap-1">
                <img src={sales} />{" "}
                {/* Чтобы сделать якорь прописать <div id="sales"></div> */}
                Скидки
              </Link>
            </li>
            <li>
              <Link to="cart" className="flex gap-1">
                <img src={cart} />
                Корзина
              </Link>
            </li>
            <li>
              <Link to="footer" className="flex gap-1">
                <img src={contacts} /> {/* Якорь на подвал*/}
                Контакты
              </Link>
            </li>
          </ul>
        </nav>
        <Search />
        <Link to="#" className="header__profile-link">
          Личный кабинет
        </Link>
      </div>
    </header>
  );
}
