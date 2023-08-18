import style from "./PlayListHeader.module.scss";

/**
 * @component PlayListHeader
 * @returns
 */
const PlayListHeader = () => {
  return (
    <div className={style["play-list-header"]}>
      <h3>
        <img src="/icons/icon-play-list.png" />
        Your Library
      </h3>
      <button className={style["play-list__add"]} title="Add new playlist">
        <span>+</span>
      </button>
    </div>
  );
};

export default PlayListHeader;
