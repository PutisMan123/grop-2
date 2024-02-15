export default function Pages() {
  return (
    <>
      <div id="sidebar">
        <h1>Главная страница</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Поиск"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
          <form method="post">
            <button href={`/catalog.jsx`} type="submit">
              Каталог
            </button>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href={`/contacts/1`}>fdf</a>
            </li>
            <li>
              <a href={`/contacts/2`}></a>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail"></div>
    </>
  );
}
