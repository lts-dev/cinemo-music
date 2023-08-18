import style from "./SongGrid.module.scss";

interface ISongGrid {
  uid: string;
  title: string;
  album: string;
  coverUrl: string;
}

const SongGrid = ({ title, album, coverUrl }: ISongGrid) => {
  return (
    <div className={style["songs-grid"]}>
      <img src={coverUrl} />
      <h4>{title}</h4>
      <h6>{album}</h6>
    </div>
  );
};

export default SongGrid;
