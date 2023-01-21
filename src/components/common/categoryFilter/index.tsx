import React, {FC} from 'react';
import {SearchCategoryProps} from "./type";
import {createSearchParams, useNavigate} from "react-router-dom";
import {GetGenresAndCountries} from "../../../utils/customHooks/showFilmParams";
import {FilterWrapper, FilterForm, SearchFilterField, ApplyFilterBtn} from './style';


export const FilterByCategory: FC<SearchCategoryProps> = ({
                                                             valueSearch,
                                                             handleSubmitValue
                                                         }) => {
    const navigate = useNavigate();
    const GenresAndCountries = GetGenresAndCountries();
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const params = e.currentTarget
        const {value, ratingFrom, ratingTo, yearFrom, yearTo, type, genres, countries} = params

        if (value.value || ratingFrom.value || ratingTo.value || yearFrom.value || yearFrom.value || type.value || genres.value || countries.value) {
            navigate({
                pathname: "movies",
                search: `?${createSearchParams({
                    keyword: value.value,
                    ratingFrom: ratingFrom.value,
                    ratingTo: ratingTo.value,
                    yearFrom: yearFrom.value,
                    yearTo: yearTo.value,
                    type: type.value,
                    genres: genres.value,
                    countries: countries.value
                })}`

            });
        }
    }
    const params = new URLSearchParams(document.location.search);


        return (
            <FilterWrapper>
                <FilterForm onSubmit={handleSubmit}>
                    <h2>FILTERS</h2>

                    <SearchFilterField>
                        <div>
                            <input type="text"
                                   name="value"
                                   placeholder="Поиск..."
                                   value={valueSearch}
                                   onChange={handleSubmitValue}/>
                        </div>
                    </SearchFilterField>

                    <SearchFilterField>
                        <label>Country:</label>
                        <select name="countries" defaultValue={params.get('countries') || ''}>
                            <option value=''>Любая страна</option>
                            {GenresAndCountries.arrayList?.countries &&
                                GenresAndCountries.arrayList.countries.map(e =>
                                    <option value={e.id} key={e.country + e.id}>{e.country}</option>)}
                        </select>
                    </SearchFilterField>

                    <SearchFilterField>
                        <label>Release Year:</label>
                        <div>
                            <input type="text" name="yearFrom" placeholder="от 1970"
                                   defaultValue={params.get('yearFrom') || ''}/>
                            <input type="text" name="yearTo" placeholder="до 2023"
                                   defaultValue={params.get('yearTo') || ''}/>
                        </div>
                    </SearchFilterField>

                    <SearchFilterField>
                        <label>Type:</label>
                        <select name="type" defaultValue={params.get('type') || ''}>
                            <option value="">Выберите тип</option>
                            <option value="ALL">Все</option>
                            <option value="FILM">Фильмы</option>
                            <option value="TV_SERIES">Сериалы</option>
                            <option value="MINI_SERIES">Мини-сериалы</option>
                            <option value="TV_SHOW">ТВ шоу</option>
                        </select>
                    </SearchFilterField>

                    <SearchFilterField>
                        <label>Genres:</label>
                        <select name="genres" defaultValue={params.get('genres') || ''}>
                            <option value=''>Любой жанр</option>
                            {GenresAndCountries.arrayList?.genres.length &&
                                GenresAndCountries.arrayList.genres.map(e =>
                                    <option value={e.id} key={e.genre + e.id}>{e.genre}</option>)}
                        </select>
                    </SearchFilterField>

                    <SearchFilterField>
                        <label>Rating:</label>
                        <div>
                            <input type="text" name="ratingFrom" placeholder="от 0"
                                   defaultValue={params.get('ratingFrom') || ''}/>
                            <input type="text" name="ratingTo" placeholder="до 10"
                                   defaultValue={params.get('ratingTo') || ''}/>
                        </div>
                    </SearchFilterField>

                    <ApplyFilterBtn type="submit" value='APPLY FILTER' />
                </FilterForm>
            </FilterWrapper>
        );
};
