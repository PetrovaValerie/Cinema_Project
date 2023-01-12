import React, {useState} from 'react';
import {GetSearchCards} from "../../other/data/showSearchedCards";
import {MovieCard} from "../../components/common/movieCard";
import {HomeWrap, HomeContainer} from "../homePage/style";
import {SearchWrapper} from "./style";
import {Loader} from "../../other/loader";
import {PaginateForward} from "../../components/common/paginateForward";


export const SearchMoviePage = () => {

    const [force, setForce] = useState(0)
    const searchCards = GetSearchCards()

    const changePage = (e: { selected: number }) => {
        searchCards.setPage(e.selected + 1)
        window.scroll({top: 0})
        setForce(e.selected)
    }

    return (
        <SearchWrapper>
            {searchCards.cards?.items.length ? <HomeWrap>
                <HomeContainer>
                    {searchCards.cards?.items.length  &&
                        searchCards.cards.items.map((e) =>  <MovieCard props={e} key={e.kinopoiskId}/>)}
                </HomeContainer>

                <PaginateForward pageCount={searchCards.cards.totalPages} forcePage={force} changePage={changePage}/>
            </HomeWrap> : <Loader/>}

        </SearchWrapper>
    );
};
