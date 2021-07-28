import React from "react";
import {render} from "react-dom";
import {Main} from "./main";

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');
    if (root == null) {
        return;
    }

    render(<Main/>, root);
})