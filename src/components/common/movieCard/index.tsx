import React, {FC} from "react";
import {CategoryList, CardItem, CardRating, Img, Year, Genre} from './style';
import {CardType} from "./types";
import {useNavigate} from "react-router-dom";

export const MovieCard: FC<CardType> = ({props}) => {

    const navigate = useNavigate()
    const selectCard = (id: number) => {
        navigate(`/selected/${id}`)
        window.scroll({top: 0})
    }

    return (
        <CardItem id={String(props.kinopoiskId)} onClick={() => selectCard(props.kinopoiskId)}>
            <article>
                <a>
                    <CardRating rating={props.ratingImdb}>{props.ratingImdb}</CardRating>
                    <Img image={props.posterUrl} />
                    <h3>{props.nameOriginal}</h3>
                    <CategoryList>
                        <li>
                            {props.genres.map(e => ' ' + e.genre).slice(0, 1).toString()}
                        </li>
                        <li>
                            {props.genres.map(e => ' ' + e.genre).slice(1, 2).toString()}
                        </li>
                        <li>
                            {props.genres.map(e => ' ' + e.genre).slice(2, 3).toString()}
                        </li>
                    </CategoryList>
                    <Year year={props.year}>{props.year}</Year>
                    <Genre>{props.type}</Genre>
                </a>
            </article>
        </CardItem>
    )
}