"use client";
import React, {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from "react";

// Define types for state and action
type State = {
  modal: {
    modalOpen: boolean;
    modalPosition: any;
    display: any;
    scrollTop: any;
  };
};

type Action = { type: string; payload: any };

// Define your initial state
const initialState: State = {
  modal: {
    modalOpen: false,
    modalPosition: undefined,
    display: undefined,
    scrollTop: undefined,
  },
};

// Create a reducer function
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setModal":
      return {
        ...state,
        modal: {
          ...state.modal,
          modalOpen: true,
          modalPosition: action.payload,
          display: "block",
        },
      };
    case "closeModal":
      return {
        ...state,
        modal: {
          ...state.modal,
          modalOpen: false,
          modalPosition: action.payload,
          scrollTop: undefined,
          display: undefined,
        },
      };
    case "setScroll":
      return {
        ...state,
        modal: {
          ...state.modal,
          scrollTop: true,
        },
      };
    default:
      return state;
  }
};

// Create a context
type ContextType = {
  state: State;
  dispatch: Dispatch<Action>;
};

const MyContext = createContext<ContextType | undefined>(undefined);

export const MyContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to consume the context in components
export const useMyContext = (): ContextType => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }
  return context;
};
