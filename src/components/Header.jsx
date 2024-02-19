import { useContext } from "react";
import { ModalContext } from "../App";
import { Link } from "react-router-dom";

export default function Header() {
  const { setOpenRegister, token, setOpenLogin } = useContext(ModalContext);
  return (
    <div>
      {token ? (
        <div>
          <h1 onClick={() => setOpenRegister(true)}>Регистрация</h1>
          <h1 onClick={() => setOpenLogin(true)}>Вход</h1>
        </div>
      ) : (
        <Link to="/profile">Личный кабинет</Link>
      )}
    </div>
  );
}
