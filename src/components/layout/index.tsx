import {ReactNode} from "react";
import {LayoutMain} from "./style";
import {GlobalStyle} from '../../styles'
import {useThemeSelector} from "../../redux/store/rootReducer";
import {Header} from "../header";

export type LayoutProps = {
    children: ReactNode;
}

export type ThemeReducerType = {
    background?: string,
    color?: string
}


export const Layout = ({children}: LayoutProps) => {

     const selectTheme = useThemeSelector(state => state.themeReducer);
    return (
        <>
            <GlobalStyle props={selectTheme} />
                <Header />
                <LayoutMain>
                    {children}
                </LayoutMain>
                {/*<Footer />*/}
        </>
    )
}