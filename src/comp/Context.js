import React, { createContext, useState } from "react";

export const myContext = createContext("");

function Context({ children }) {
    const [src, setSrc] = useState("");
    const [data, setData] = useState("");
    const [hehe, setHehe] = useState("");

    const testNum = () => {
        console.log("test");
    };

    return (
        <myContext.Provider
            value={{ src, setSrc, data, setData, hehe, setHehe, testNum }}
        >
            {children}
        </myContext.Provider>
    );
}

export default Context;

//데이터를 중앙에서 정리하는
