import React, {FC, Dispatch, SetStateAction} from "react";
import {SearchWrap, SearchBar, SearchIcon} from './style';
import {useNavigate, createSearchParams} from "react-router-dom";
import {SearchSvg} from "../../../../other/icon/icon";

export type SearchInputProps = {
    setStateSearch: Dispatch<SetStateAction<boolean>>,
    submitBtnValue: (e: React.ChangeEvent<HTMLInputElement>) => void
    itemSearch: string
}

export const SearchInput: FC<SearchInputProps> = ({setStateSearch, submitBtnValue, itemSearch}) => {

    const navigate = useNavigate()

    const passSearchParams = () => {
        if (itemSearch) {
            navigate({
                pathname: "movies",
                search: `?${createSearchParams({keyword: itemSearch})}`
            });
        }
    }
    const SearchingMovie = (e: React.KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter' && itemSearch) {
            e.preventDefault()
            e.stopPropagation()
            navigate({
                pathname: "movies",
                search: `?${createSearchParams({keyword: itemSearch})}`
            });
        }
    }
        return (
            <SearchWrap>
                <SearchBar
                    placeholder='Search'
                    onChange={submitBtnValue}
                    onKeyDown={SearchingMovie}
                    value={itemSearch}
                />
                <SearchIcon>
                    <SearchSvg/>
                </SearchIcon>

            </SearchWrap>
        )
}