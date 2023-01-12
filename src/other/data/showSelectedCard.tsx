import {useEffect, useState} from "react";
import {SelectedCardProp} from "../../components/common/movieCard/types";
import {API_KEY} from "../constants";

export const ShowSelected = (id: number) => {

    const [cards, setCards] = useState<SelectedCardProp>()
    const URLReviewCard = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${id}`;

    useEffect(() => {

        fetch(URLReviewCard, {
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


    }, [URLReviewCard])

    return {cards}
}