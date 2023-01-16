import React from 'react';
import Slider from "react-slick";
import {useNavigate, useParams} from "react-router-dom";
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import {SimSliderWrap, SliderContainer, SliderImgBlock, SliderImg} from "./style";
import {GetSimilar} from "../../../utils/customHooks/showSimCards";

export const SlickButton = ({currentSlide, slideCount, children, ...props} : any) => (
    <span {...props}  style={{ cursor:'pointer'}}>{children}</span>
);

export const SimSlider = () => {

    const params = useParams()
    const paramsId = Number(params.id)
    const cardsSimilar = GetSimilar(paramsId)
    const card = cardsSimilar.cards
    const navigate = useNavigate()

    const clickCard = (id: number) => {
        navigate(`/selected/${id}`)
        window.scroll({top: 0})
    }

    const sliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: false,
        speed: 300,
        prevArrow: (<SlickButton><FaChevronLeft/></SlickButton>),
        nextArrow: (<SlickButton><FaChevronRight/></SlickButton>),
    }
    return (
        <SimSliderWrap>
            {card && <Slider {...sliderSettings}>
                {card.items.map(e =>
                    <SliderContainer key={e.filmId} onClick={() => clickCard(e.filmId)}>
                        <SliderImgBlock>
                            <SliderImg src={e.posterUrl}/>
                        </SliderImgBlock>
                    </SliderContainer>)}
            </Slider>}
        </SimSliderWrap>
    );
};
