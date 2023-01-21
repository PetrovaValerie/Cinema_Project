import React, {useState} from "react";
import {HomeWrap, HomeContainer, BtnFilmLoader, LoaderMoreBtn} from './style'
import { GetAllCards} from "../../utils/customHooks/showAllCards";
import {MovieCard} from "../../components/common/movieCard";
import {ALL} from "../../utils/constants";
import {Loader} from "../../other/loader";
import {FilterByCategory} from "../../components/common/categoryFilter";
import {SearchPageBlock, SearchWrapper} from "../searchPage/style";

export const Home = () => {

    const cardsArray = GetAllCards(ALL)
    const [buttonLoad, setButtonLoad] = useState(false)
    // const [stateAdvSearch, setStateAdvSearch] = useState(false)

    const params = new URLSearchParams(document.location.search);
    const keywordParams = params.get('keyword') || ''
    const [valueSearch, setValueSearch] = useState(keywordParams)

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValueSearch(e.target.value)
    }

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
        <SearchPageBlock>
            <SearchWrapper>
            {cardsArray.cards.length ?

                <HomeWrap>
                    <HomeContainer>
                            {cardsArray.cards.map((e) => e.items.
                            map(card => <MovieCard props={card} key={card.kinopoiskId}/>))}
                    </HomeContainer>
                    {cardsArray.page < 5 &&
                        <BtnFilmLoader onClick={getCards}>
                            LOAD MORE
                            {buttonLoad && <LoaderMoreBtn/>}
                        </BtnFilmLoader>}
                </HomeWrap> : <Loader/>}
                </SearchWrapper>

            <FilterByCategory valueSearch={valueSearch} handleSubmitValue={handleSubmit}/>
        </SearchPageBlock>
    )
}
