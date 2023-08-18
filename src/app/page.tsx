"use client";

import styles from "./page.module.scss";
import Menu from "./components/menu/Menu";
import PlayList from "./components/playList/PlayList";
import Search from "./components/search/Search";
import { SearchContextProvider } from "./hooks/useSarchContext";
import SongsList from "./components/songsList/SongsList";
import { PlaylistContextProvider } from "./hooks/usePlayListContext";

export default function Home() {
  return (
    <main className={styles.main}>
      <PlaylistContextProvider>
        <div className={styles["right-panel"]}>
          <Menu />
          <PlayList />
        </div>
        <div className={styles["main-content"]}>
          <SearchContextProvider>
            <Search />
            <SongsList />
          </SearchContextProvider>
        </div>
      </PlaylistContextProvider>
    </main>
  );
}
