import React from 'react';
import {SelectedCardWrap, SelectRow, SelectImgWrap, SelectImg, SelectInfoList,
        SelectedDescr, SelectTitle, InfoItem, SelectPlot
} from "./style";
import {ShowSelected} from "../../other/data/showSelectedCard";
import {useParams} from "react-router-dom";
import {SelectSimilar} from "../similar";


export const SelectedCard = () => {

    const params = useParams()
    const paramsId = Number(params.id)
    const cardSelect = ShowSelected(paramsId)
    const card = cardSelect.cards

    return (
        <SelectedCardWrap>
            {card &&
                <>
                <SelectRow>
                <SelectImgWrap>
                    <SelectImg src={`${card.posterUrl}`}/>
                </SelectImgWrap>

                <SelectedDescr>
                    <SelectTitle>{card.nameRu}</SelectTitle>
                    <SelectInfoList>
                        {card.year && <InfoItem>
                            <span>Год выпуска:</span>{card.year}
                        </InfoItem>}
                        {card.countries && <InfoItem>
                            <span>Страна:</span><p>{card.countries.map(e => e.country).join(', ')}</p>
                        </InfoItem>}
                        {card.genres && <InfoItem>
                            <span>Жанр:</span><p>{card.genres.map(e => e.genre).join('/ ')}</p>
                        </InfoItem>}
                        {card.filmLength && <InfoItem>
                            <span>Продолжительность:</span><p>{card.filmLength} мин.</p>
                        </InfoItem>}
                        {card.ratingKinopoisk && <InfoItem>
                            <span>Рейтинг Кинопоиска:</span><p>{card.ratingKinopoisk}</p>
                        </InfoItem>}
                        {card.ratingFilmCritics && <InfoItem>
                            <span>Рейтинг Кинокритиков:</span><p>{card.ratingFilmCritics}</p>
                        </InfoItem>}
                        {card.ratingImdb && <InfoItem>
                            <span>Рейтинг IMDb:</span><p>{card.ratingImdb}</p>
                        </InfoItem>}

                     </SelectInfoList>
                </SelectedDescr>
                </SelectRow>

                <SelectPlot>
                    <p>Описание фильма: </p>
                    <p>{card.description}</p>
                </SelectPlot>
                 <SelectSimilar />
                </>
            }
        </SelectedCardWrap>
    );
};
