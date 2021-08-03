import { useEffect, useState } from "react";

const getSavedState = (key, initialState) => {
    const savedState = localStorage.getItem(key);
    console.log(key, savedState, JSON.parse(savedState));
    if (savedState) return JSON.parse(savedState);

    if (initialState instanceof Function) return initialState();
    return initialState;
};

const useLocalStorage = (key, initialState) => {
    const [state, setState] = useState(() => {
        return getSavedState(key, initialState);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);

    return [state, setState];
};

export default useLocalStorage;
