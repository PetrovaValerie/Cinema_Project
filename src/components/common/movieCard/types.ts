export type CountriesType = {
    country: string
}

export type GenresType = {
    genre: string
}

// export type ItemsType = {
//     genres: GenresType[],
//     imdbId: string,
//     kinopoiskId: number,
//     nameOriginal: string,
//     posterUrl: string,
//     ratingImdb: number,
//     type: string,
//     year: string
// }

// export type CardsHomeType = {
//     total: number,
//     totalPages: number,
//     items: ItemsType[]
// }

export type CardsHomeType = {
    total: number,
    totalPages: number,
    items: CardItemProp[]
}

export type CardItemProp = {
    countries: CountriesType[],
    genres: GenresType[],
    imdbId: string,
    kinopoiskId: number,
    filmLength: string,
    nameEn?: string | null,
    nameOriginal?: string,
    nameRu: string | null,
    posterUrl: string,
    posterUrlPreview: string,
    ratingImdb: number,
    ratingKinopoisk: number,
    type: string,
    year: string
}

// export type CardType = {
//     props: CardItemProp | SelectedCardProp
// }

// export type CardType = {
//     props: ItemsType | SelectedCardProp
// }

export type SelectedCardProp = {
    kinopoiskId: number,
    imdbId?: number,
    nameRu?: string,
    nameEn?: string,
    nameOriginal?: string,
    posterUrl: string,
    posterUrlPreview?: string,
    coverUrl?: string,
    logoUrl?: string,
    reviewsCount?: number,
    ratingGoodReview?: number,
    ratingGoodReviewVoteCount?: number,
    ratingKinopoisk: number,
    ratingKinopoiskVoteCount?: number,
    ratingImdb: number,
    ratingImdbVoteCount?: number,
    ratingFilmCritics: number,
    ratingFilmCriticsVoteCount?: number,
    ratingAwait?: number,
    ratingAwaitCount: number,
    ratingRfCritics: number,
    ratingRfCriticsVoteCount: number,
    webUrl: string,
    year: number,
    filmLength: number,
    slogan?: string,
    description?: string,
    shortDescription?: string,
    editorAnnotation?: string,
    isTicketsAvailable?: boolean,
    productionStatus?: string,
    type: string,
    ratingMpaa?: string,
    ratingAgeLimits: string,
    countries: CountriesType[],
    genres: GenresType[],
    startYear?: number,
    endYear?: number,
    serial?: string,
    shortFilm?: string,
    completed?: boolean,
    hasImax?: string,
    has3D?: string,
    lastSync?: string,
}

export type SimilarCardsProps = {
    total: number,
    items: ItemsSimilarProps[]
}

export type ItemsSimilarProps = {
    filmId: number,
    nameRu: string,
    nameEn: string,
    nameOriginal: string,
    posterUrl: string,
    posterUrlPreview: string,
    relationType: string
}