import React, {FC} from "react";
import {CategoryList, CardItem, Img} from './style';
import {CardType} from "../MoviesList";

export const MovieCard: FC<CardType> = ({props}) => {

    return (
        <CardItem id={String(props.kinopoiskId)}>
            <article>
                <a>
                    <span>{props.ratingImdb}</span>
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
                </a>
            </article>
        </CardItem>
    )
}