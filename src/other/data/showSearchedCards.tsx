import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {API_KEY} from "../constants";
import {CardsHomeType} from "../../components/common/movieCard/types";

export const GetSearchCards = () => {

    const params = useLocation().search;
    const [cards, setCards] = useState<CardsHomeType>()
    const [page, setPage] = useState(1)

    const URLSearchCards = `https://kinopoiskapiunofficial.tech/api/v2.2/films${params}&page=${page}`;

    useEffect(() => {

        fetch(URLSearchCards, {
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


    }, [URLSearchCards, params, page])

        return {cards, page, setPage}
}