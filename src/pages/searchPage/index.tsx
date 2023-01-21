import React, {useState} from 'react';
import {GetSearchCards} from "../../utils/customHooks/showSearchedCards";
import {MovieCard} from "../../components/common/movieCard";
import {HomeWrap, HomeContainer} from "../homePage/style";
import {SearchPageBlock, SearchWrapper} from "./style";
import {Loader} from "../../other/loader";
import {PaginateForward} from "../../components/common/paginateForward";
import {FilterByCategory} from "../../components/common/categoryFilter";


export const SearchMoviePage = () => {

    const [force, setForce] = useState(0);
    const searchCards = GetSearchCards();

    const params = new URLSearchParams(document.location.search);
    const keywordParams = params.get('keyword') || ''
    const [valueSearch, setValueSearch] = useState(keywordParams)

    const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setValueSearch(e.target.value)
    }

    const changePage = (e: { selected: number }) => {
        searchCards.setPage(e.selected + 1)
        window.scroll({top: 0})
        setForce(e.selected)
    }

    return (
        <SearchPageBlock>

            <SearchWrapper>
                {searchCards.cards?.items.length ? <HomeWrap>
                    <HomeContainer>
                        {searchCards.cards?.items.length  &&
                            searchCards.cards.items.map((e) =>  <MovieCard props={e} key={e.kinopoiskId}/>)}
                    </HomeContainer>

                    <PaginateForward pageCount={searchCards.cards.totalPages} forcePage={force} changePage={changePage}/>
                </HomeWrap> : <Loader/>}
            </SearchWrapper>

            <FilterByCategory valueSearch={valueSearch} handleSubmitValue={handleSubmit}/>
        </SearchPageBlock>
    );
};
