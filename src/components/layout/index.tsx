import {ReactNode} from "react";
import {LayoutMain, FlexContainer} from "./style";
import {GlobalStyle} from '../../styles'
import {useThemeSelector} from "../../redux/store/rootReducer";
import {Header} from "../common/header";
import {Footer} from "../common/footer";
import {LayoutProps} from "./types";

export const Layout = ({children}: LayoutProps) => {

     const selectTheme = useThemeSelector(state => state.themeReducer);
    return (
        <>
            <GlobalStyle props={selectTheme} />
            <FlexContainer>
                <Header />
                <LayoutMain>
                    {children}
                </LayoutMain>
                <Footer />
            </FlexContainer>
        </>
    )
}