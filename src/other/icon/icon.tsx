import React from "react";
import {SvgProp} from "../../types/props";

export const SearchSvg = ({state}:SvgProp) => {
    return (
        <>
            <svg width="25" height="25" viewBox="0 0 16 20" fill="#fff">
                <path d = "M 11.742 10.344 a 6.5 6.5 0 1 0 -1.397 1.398 h -0.001 c 0.03 0.04 0.062 0.078 0.098 0.115 l 3.85 3.85 a 1 1 0 0 0 1.415 -1.414 l -3.85 -3.85 a 1.007 1.007 0 0 0 -0.115 -0.1 Z M 12 6.5 a 5.5 5.5 0 1 1 -11 0 a 5.5 5.5 0 0 1 11 0 Z"/>
            </svg>
        </>
    )
}