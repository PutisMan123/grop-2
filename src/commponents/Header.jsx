import logo from "./../assets/logo.png";
import catalog from "./../assets/catalog.png";
import sales from "./../assets/sales.png";
import cart from "./../assets/cart.png";
import contacts from "./../assets/contacts.png";
import Search from "./Search";

export default function Header() {
  return (
    <header className="flex justify-around items-center relative">
      <div className="bg-neutral-300 opacity-50 rounded-b-full absolute size-full"></div>
      <div className="flex justify-around items-center relative z-10 w-full">
        <img src={logo} />
        <nav className="header-nav">
          <ul className="flex xl:gap-11 lg:gap-4">
            <li>
              <a href="" className="flex gap-1">
                <img src={catalog} />
                Каталог
              </a>
            </li>
            <li>
              <a href="" className="flex gap-1">
                <img src={sales} />
                Скидки
              </a>
            </li>
            <li>
              <a href="" className="flex gap-1">
                <img src={cart} />
                Корзина
              </a>
            </li>
            <li>
              <a href="" className="flex gap-1">
                <img src={contacts} />
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <Search />
        <a href="#" className="header__profile-link">
          Личный кабинет
        </a>
      </div>
    </header>
  );
}
