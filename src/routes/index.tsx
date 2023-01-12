import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {Aside} from "../other/aside";
import {Home} from "../pages/homePage";
import {SearchMoviePage} from "../pages/searchPage";
import {NotExistingPage} from "../pages/notExistingPage";
import {SelectedCard} from "../pages/selectedCard";

export const RoutesComponent = () => {

    return (
        <Routes>
                <Route path="/" element = {<Home />} />
                <Route path='movies' element={<SearchMoviePage />} />

                <Route path='selected/:id' element={<SelectedCard />} />

                <Route path="*" element={<NotExistingPage />} />
        </Routes>
    )
}