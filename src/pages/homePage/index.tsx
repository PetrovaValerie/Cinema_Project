import React, {useState} from "react";
import {HomeWrap, HomeContainer, BtnFilmLoader, LoaderMoreBtn} from './style'
import { GetAllCards} from "../../utils/customHooks/showAllCards";
import {MovieCard} from "../../components/common/movieCard";
import {ALL} from "../../utils/constants";
import {Loader} from "../../other/loader";
// import GlobalLoading from "../../other/loader/GlobalLoader";

export const Home = () => {

    const cardsArray = GetAllCards(ALL)
    const [buttonLoad, setButtonLoad] = useState(false)


    const getButtonLoad = () => {
        setButtonLoad(true)

        setTimeout(() => {
            setButtonLoad(false)
        }, 1100)
    }
    const getCards = () => {
        getButtonLoad()
        cardsArray.setPage(page => page + 1)
    }

    return (
        <>
            {cardsArray.cards.length ?

                <HomeWrap>
                    <HomeContainer>
                            {cardsArray.cards.map((e) => e.items.map(card => <MovieCard props={card}
                                                                                   key={card.kinopoiskId}/>))}
                    </HomeContainer>
                    {cardsArray.page < 5 &&
                        <BtnFilmLoader onClick={getCards}>
                            LOAD MORE
                            {buttonLoad && <LoaderMoreBtn/>}
                        </BtnFilmLoader>}
                </HomeWrap>

            : <Loader/>}
        </>
    )
}
