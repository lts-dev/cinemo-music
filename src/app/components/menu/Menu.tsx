import style from "./Menu.module.scss";

/**
 * @component Menu
 * @returns
 */
const Menu = () => {
  return (
    <div className={style.menu}>
      <ul className={style["menu-list"]}>
        <li>
          <a>
            <img src="/icons/icon-home-white.svg" />
            <span>Home</span>
          </a>
        </li>
        <li>
          <a>
            <img src="/icons/icon-search-white.svg" />
            <span>Search</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
