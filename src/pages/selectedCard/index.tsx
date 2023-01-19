import React from 'react';
import {SelectedCardWrap, SelectRow, SelectImgWrap, SelectImg, TitleBlock,
        SelectedDescr, SelectTitle} from "./styles/main";
import {RatingInfo, RatingItem, RatingNmbr} from "./styles/rating";
import {InfoItem, SelectParams} from "./styles/info";

import {ShowSelected} from "../../utils/customHooks/showSelectedCard";
import {useParams} from "react-router-dom";
import {SelectSimilar} from "../../components/common/similarMovies";
import {colorChange} from "../../utils/functions/ratingColorChange";


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
                    <TitleBlock>
                        <SelectTitle>{card.nameRu}</SelectTitle>
                        <RatingInfo>
                            {<RatingItem colorChange={colorChange(card.ratingKinopoisk)}>
                                <p>Кинопоиск:</p>
                                <p>{card.ratingKinopoisk ? card.ratingKinopoisk : '-'}</p>
                                <RatingNmbr>Голосов: {card.ratingKinopoiskVoteCount}</RatingNmbr>
                            </RatingItem>}
                            {<RatingItem colorChange={colorChange(card.ratingImdb)}>
                                <p>IMDb:</p>
                                <p>{card.ratingImdb ? card.ratingImdb : '-'}</p>
                                <RatingNmbr>Голосов: {card.ratingImdbVoteCount}</RatingNmbr>
                            </RatingItem>}
                            {<RatingItem colorChange={colorChange(card.ratingFilmCritics)}>
                                <p>Критики:</p>
                                <p>{card.ratingFilmCritics ? card.ratingFilmCritics : '-'}</p>
                                <RatingNmbr>Голосов: {card.ratingFilmCriticsVoteCount}</RatingNmbr>
                            </RatingItem>}
                        </RatingInfo>
                    </TitleBlock>
                        <SelectParams>
                                {card.genres && <InfoItem>
                                    <span>{card.genres.map(e => e.genre).join(' · ')}</span>
                                </InfoItem>}
                                {card.year && <InfoItem>
                                    <span>Год выпуска:</span>{card.year}
                                </InfoItem>}
                                {card.countries && <InfoItem>
                                    <span>Страна:</span><p>{card.countries.map(e => e.country).join(', ')}</p>
                                </InfoItem>}
                                {card.filmLength && <InfoItem>
                                    <span>Продолжительность:</span><p>{card.filmLength} мин.</p>
                                </InfoItem>}
                                {card.shortDescription && <InfoItem>
                                   <p>{card.shortDescription}</p>
                                </InfoItem>}
                        </SelectParams>
                </SelectedDescr>
                </SelectRow>

                 <SelectSimilar />

                </>
            }
        </SelectedCardWrap>
    );
};
