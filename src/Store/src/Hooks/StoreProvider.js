// eslint-disable-next-line no-use-before-define
import React, { useCallback, useState } from "react";

export const Context = React.createContext();

const StoreProvider = ({ defaultStore, children }) => {
  const [state, change] = useState(defaultStore);

  const setStore = useCallback((callback, paths = []) => {
    change((prevStore) => {
      if (typeof callback !== "function") {
        return callback;
      }
      const newState = callback(
        prevStore,
        [...paths].reduce((acc, path) => acc[path], prevStore)
      );

      if (typeof newState === "function") {
        newState(setStore, setState);
        return prevStore;
      }

      return newState;
    });

    //eslint-disable-next-line
  }, []);

  const setState = useCallback((callback, paths = []) => {
    change((prevStore) => {
      console.log(typeof callback);
      if (typeof callback !== "function") {
        let obj = { ...prevStore };
        paths.reduce((acc, path) => {
          if (path === paths[paths.length - 1]) {
            acc[path] = callback;
          }
          return acc[path];
        }, obj);

        return callback;
      }

      const newState = callback(
        prevStore,
        [...paths].reduce((acc, path) => acc[path], prevStore)
      );

      if (typeof newState === "function") {
        newState(setStore, setState);
        return prevStore;
      }

      let obj = {};
      if (paths.length > 0) {
        obj = { ...prevStore };
        paths.reduce((acc, path) => {
          if (path === paths[paths.length - 1]) {
            acc[path] = newState;
          }
          return acc[path];
        }, obj);
      }
      return paths.length > 0 ? obj : newState;
    });
    //eslint-disable-next-line
  }, []);

  // console.log(state)

  return (
    <Context.Provider
      value={{
        state,
        setStore,
        setState,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default StoreProvider;
