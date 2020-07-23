import React, { createContext, useReducer } from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import LoadingBtn from "./components/LoadingBtn";
import CounterBox from "./components/CounterBox";
// import customTheme from "./theme";
const initialState = {
  firstCounter: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "DEC":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "RES":
      return initialState;
    default:
      return state;
  }
};

export const HelloContext = createContext();
export const CountContext = createContext();

function App() {
  /**
   * count の中身は {firstCounter: 0}
   */
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      {/* <ThemeProvider theme={customTheme}> */}
      <ThemeProvider>
        <CSSReset />
        <HelloContext.Provider value={"Hello"}>
          <LoadingBtn />
        </HelloContext.Provider>
        <CountContext.Provider
          value={{ countState: count, countDispatch: dispatch }}
        >
          {/* CounterBox内でdispatchを呼び出して値(count.firstCounter)を更新すると、LoadingBtnも再レンダリングされる。
          これは、Appコンポーネントで保持している値がdispatchにより書き換えられ、Appコンポーネント内のコンポーネントは全てレンダリングされるから。
          これは孫、ひ孫...コンポーネントまで再レンダリングされてしまう */}
          <CounterBox />
        </CountContext.Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
