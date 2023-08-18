import { merge } from "lodash";
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
  searchTerm: string;
};

const SearchContext = createContext<
  | {
      state: State;
      dispatch: Dispatch;
    }
  | undefined
>(undefined);
SearchContext.displayName = "search-context";

const intialState = {
  searchTerm: "",
};

/**
 * @reducer
 * @param state
 * @param action
 * @returns
 */
const reducer = (state: any, action: any) => {
  state = { ...state, ...{ searchTerm: action?.searchTerm } };
  return state;
};

/**
 * @method SearchContextProvider
 * @param props
 * @returns
 */
const SearchContextProvider = (props: ISearchContextProvider) => {
  const [state, dispatch] = useReducer(useCallback(reducer, []), intialState);
  const val = { state, dispatch };

  return (
    <SearchContext.Provider value={val}>
      {props.children}
    </SearchContext.Provider>
  );
};

/**
 * @method useSearchContext
 * @returns
 */
const useSearchContext = (): any => {
  const context = useContext(SearchContext);
  return context;
};

export { SearchContextProvider };

export default useSearchContext;
