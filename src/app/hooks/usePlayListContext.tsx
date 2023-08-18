import React, {
  createContext,
  useCallback,
  useContext,
  useReducer,
} from "react";

// #. Decalre the types
type Action = { type?: string; payload?: any };
type Dispatch = (action: Action) => void;

interface ISearchContextProvider {
  children: React.ReactNode;
}

type State = {
  playList: string[];
  playListItems: { playListName: string; songs: string[] }[];
};

const PlaylistContext = createContext<
  | {
      state: State;
      dispatch: Dispatch;
    }
  | undefined
>(undefined);
PlaylistContext.displayName = "playlist-context";

const intialState = {
  playList: [],
  playListItems: [],
};

/**
 * @reducer
 * @param state
 * @param action
 * @returns
 */
const reducer = (state: any, action: any) => {
  if (action?.type === "play-list") {
    state = { ...state, playList: [...state?.playList, action?.payload] };
  } else {
    // state = { ...state, ...{ playListItems: action?.playList } };
  }
  return state;
};

/**
 * @method SearchContextProvider
 * @param props
 * @returns
 */
const PlaylistContextProvider = (props: ISearchContextProvider) => {
  const [state, dispatch] = useReducer(useCallback(reducer, []), intialState);
  const val = { state, dispatch };

  return (
    <PlaylistContext.Provider value={val}>
      {props.children}
    </PlaylistContext.Provider>
  );
};

/**
 * @method useSearchContext
 * @returns
 */
const usePlayListContext = (): any => {
  const context = useContext(PlaylistContext);
  return context;
};

export { PlaylistContextProvider };

export default usePlayListContext;
