import useSearchContext from "@/app/hooks/useSarchContext";
import style from "./SongsList.module.scss";
import useFetch from "@/app/hooks/useFetch";
import SongGrid from "./songGrid/SongGrid";

/**
 * @component SongsList
 * @returns
 */
const SongsList = () => {
  const { state } = useSearchContext();

  const { data } = useFetch(
    `http://localhost:3000/search?searchstring=${state.searchTerm || ""}`
  );

  // #. Get the data
  const songListItems: any = data?.results;

  // #. Formulate the grid
  // todo - seperate the component
  const songGrid = songListItems?.map((songItem: any) => {
    return (
      <div className={style["songs-grid"]} key={songItem?.title}>
        <img src={songItem?.coverUrl} />
        <h4>{songItem?.title}</h4>
        <h6>{songItem?.album}</h6>
      </div>
    );
  });

  return (
    <div className={style["songs-list"]}>
      {songListItems?.length > 0 ? songGrid : <h2>No items found</h2>}
    </div>
  );
};

export default SongsList;
