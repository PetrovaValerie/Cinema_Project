import React from "react";
import {HomeContainer} from './style'
import {MoviesList} from "./MoviesList";
import {ALL, GetHomeCards} from "../data";
import {Loader} from "../loader";
import {MovieCard} from "./MovieCard";

export const Home = () => {

    const cardsArray = GetHomeCards(ALL)

    return (
        <>
        {cardsArray.cards.length ? <HomeContainer>
                {/*{cardsArray.cards.map((e) => e.items.map(card => <MovieCard props={card} key={card.kinopoiskId}/>))}*/}
                {cardsArray.cards.map((e) => e.items.slice(7, 17).map(card => <MovieCard props={card} key={card.kinopoiskId}/>))}
        </HomeContainer> : <Loader/>}
        </>
    )
}
