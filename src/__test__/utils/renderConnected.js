// test-utils.jsx
import React from "react";

import { render as rtlRender } from "@testing-library/react";

import { configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";

import dataReducer from '../../features/data/dataSlice';


function render(
  component,
  {
    preloadedState,
    store = configureStore({ reducer: { data: dataReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(component, { wrapper: Wrapper, ...renderOptions });
}


export * from "@testing-library/react";

export { render };
