export type SvgProp = {
    state?: number,
}

export type GenresArrayType = {
    id: number,
    genre: string
}

export type CountriesArrayType = {
    "id": number,
    "country": string
}

export type GenresCountriesType = {
    genres: GenresArrayType[],
    countries: CountriesArrayType[]
}
