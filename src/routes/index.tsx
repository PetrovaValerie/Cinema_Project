import * as React from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../pages/homePage";
import {SearchMoviePage} from "../pages/searchPage";
import {NotExistingPage} from "../pages/notExistingPage";
import {SelectedCard} from "../pages/selectedCard";

import {SignInPage} from "../pages/register/signIn";
import {SignUpPage} from "../pages/register/signUp";
import {SuccessRegPage} from "../pages/register/registrySuccess";

export const RoutesComponent = () => {

    return (
        <Routes>
                <Route path="/" element = {<Home />} />
                <Route path='movies' element={<SearchMoviePage />} />
                <Route path='selected/:id' element={<SelectedCard />} />
                <Route path='/signUp' element={<SignUpPage />} />
                <Route path='/signIn' element={<SignInPage />} />
                <Route path='/success' element={<SuccessRegPage />} />
                <Route path="*" element={<NotExistingPage />} />
        </Routes>
    )
}