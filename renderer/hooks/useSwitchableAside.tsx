import React, {useState} from "react";
import {Aside} from "../components/aside";

export function useSwitchableAside(): [boolean, React.MouseEventHandler, React.MouseEventHandler, typeof Aside] {
    const [isOpened, setOpened] = useState(false);
    const close = () => {
        setOpened(false)
    };

    const toggleOpened = () => {
        setOpened(!isOpened);
    };

    return [isOpened, toggleOpened, close, Aside];
}