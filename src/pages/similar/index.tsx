import React from 'react';
import {useParams} from "react-router-dom";
import {GetSimilar} from "../../other/data/showSimCards";
import {SimWrap, SimContainer, Simcontent} from "./style";


export const SelectSimilar = () => {

    const params = useParams()
    const paramsId = Number(params.id)
    const cardsSimilar =  GetSimilar(paramsId)
    const card = cardsSimilar.cards

    return (
        <>
            {card && <SimWrap>
                <SimContainer>
                    <Simcontent>
                        <p>С этим фильмом чаще всего смотрят: </p>
                        <span>{card.total}</span>
                    </Simcontent>
                </SimContainer>
            </SimWrap>}
        </>
    );
};
