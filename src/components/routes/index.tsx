import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {Aside} from "../aside";
import {Home} from "../home";

export const RoutesComponent = () => {

    return (
        <Routes>
                <Route path="/" element = {<Aside />} />
                {/*<Route path="/" element = {<Aside />} />*/}
                {/*<Route path="/" element = {<Home />} />*/}
        </Routes>
    )
}