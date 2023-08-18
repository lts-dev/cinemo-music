import { useRef, useState } from "react";
import style from "./PlayList.module.scss";
import PlayListHeader from "./playListHeader/PlayListHeader";
import usePlayListContext from "@/app/hooks/usePlayListContext";

/**
 * @component PlayList
 * @returns
 */
const PlayList = () => {
  const [showNameInput, setShowNameInput] = useState(false);
  const nameInputRef: any = useRef(null);
  const { dispatch, state } = usePlayListContext();

  //#. Format play list grid
  const playListGrid = state?.playList?.map((item: any) => {
    return (
      <ul className={style["play-list-grid"]}>
        <li>
          <a>{item}</a>
        </li>
      </ul>
    );
  });

  /**
   * @method createNewPlayList
   * @description Create new playlist
   */
  const createNewPlayList = () => {
    setShowNameInput(true);
  };

  /**
   * @method addNewPlayList
   * @description Create new playlist
   */
  const addNewPlayList = () => {
    const name = nameInputRef?.current?.value;
    dispatch({ type: "play-list", payload: name });
  };

  // #. TODO - do the component sepearation
  return (
    <div className={style["play-list"]}>
      <PlayListHeader />
      {!showNameInput && (
        <a className={style["new-play-list"]} onClick={createNewPlayList}>
          + Create New Playlist
        </a>
      )}
      {showNameInput && (
        <div className={style["play-list__add-block"]}>
          <input
            type="text"
            placeholder="Enter playlist name"
            ref={nameInputRef}
          />

          <button
            className={style["play-list__add"]}
            title="Add new playlist"
            onClick={addNewPlayList}
          >
            <span>+</span>
          </button>
        </div>
      )}
      {state?.playList?.length > 0 && playListGrid}
    </div>
  );
};

export default PlayList;
