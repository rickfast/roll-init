'use client';

import React, { createContext, ReactNode, useEffect } from "react";
import { useViewModel, ViewModel } from "./useViewModel";
import { store } from "./store";

// @ts-ignore
export const Context = createContext<ViewModel>();

interface Props {
    children: ReactNode;
}

export const ContextProvider: React.FC<Props> = ({ children }) => {
    const viewModel = useViewModel({
        bestiary: {}        
    });

    useEffect(() => {
        console.log("Loading initial data from store");
        store.load().then((data) => {
            viewModel.importMonsters(data.bestiary);
            viewModel.setCombatants(new Map(data.tracker?.combatants || []));
        });
    }, []);

    return (
        <Context.Provider value={viewModel}>
            {children}
        </Context.Provider>
    );
}