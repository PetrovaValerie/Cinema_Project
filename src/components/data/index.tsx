import {useEffect, useState} from "react";

export const random = Math.round(Math.random() * 10)
export const random2 = 2000 + Math.round(Math.random() * 10)
export const random3 = 2010 + Math.round(Math.random() * 10)

export const ALL = 'ALL'
export const FILM = 'FILM'
export const TV_SHOW = 'TV_SHOW'
export const TV_SERIES = 'TV_SERIES'
export const MINI_SERIES = 'MINI_SERIES'

export const TOP_100 = 'TOP_100_POPULAR_FILMS'
export const TOP_250 = 'TOP_250_BEST_FILMS'

export type CountriesType = {
    country: string
}

export type GenresType = {
    genre: string
}

export type ItemsType = {
    // countries: CountriesType[],
    genres: GenresType[],
    imdbId: string,
    kinopoiskId: number,
    // filmLength: string,
    // nameEn?: string | null,
    // nameOriginal?: string,
    nameOriginal: string,
    // nameRu: string | null,
    posterUrl: string,
    // posterUrlPreview: string,
    ratingImdb: number,
    // ratingKinopoisk: number,
    // type: string,
    // year: string
}

export type CardsHomeType = {
    total: number,
    totalPages: number,
    items: ItemsType[]
}

export const GetHomeCards = (type: string) => {

    const [cards, setCards] = useState<CardsHomeType[]>([])
    // const [page, setPage] = useState(1)

    const URLHomeCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films?order=NUM_VOTE&type=${type}&ratingFrom=${random}&ratingTo=10&yearFrom=${random2}&yearTo=${random3}`;

// console.log(URLHomeCards)
    useEffect(() => {


            fetch(URLHomeCards, {
                method: 'GET',
                headers: {
                    'X-API-KEY': '88d541ef-2a7a-4314-81cb-47abad1833b6',
                    'Content-Type': 'application/json',
                },
            })
                .then(res => res.json())
                .then(json => {
                    setCards([...cards, json])
                })
                .catch(err => console.log(err))
    }, [URLHomeCards])

    return {cards}

}
