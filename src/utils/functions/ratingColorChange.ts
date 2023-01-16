import {COLORS} from "../../styles";

export const colorChange = (rating: number) => {
    switch (rating !== 0) {
        case rating >= 7 :
            return `${COLORS.green}`;
        case rating < 7 && rating > 5 :
            return `${COLORS.yellow}`;
        case rating <= 5 && rating > 0:
            return `${COLORS.orange}`;
        default:
            // return `${COLORS.secondary}`;
            return `display: none`;
    }
}