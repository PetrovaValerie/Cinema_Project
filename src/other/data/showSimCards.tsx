import {useEffect, useState} from "react";
import {API_KEY} from "../constants";
import {SimilarCardsProps} from "../../components/common/movieCard/types";

export const GetSimilar = (id: number) => {

    const [cards, setCards] = useState<SimilarCardsProps>()

    const URLSimilarCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}/similars`;

    useEffect(() => {

        fetch(URLSimilarCards, {
            method: 'GET',
            headers: {
                'X-API-KEY': API_KEY,
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(json => setCards(json)
            )
            .catch(err => console.log(err))

    }, [URLSimilarCards])

    return {cards}
}