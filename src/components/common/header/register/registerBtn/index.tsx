import React, {useState} from "react";
import {RgstrBtnWrap} from "./style";
import {RegistryNav} from "../registryNav";

export const RegBtn = () => {

    const [open, setOpen] = useState(false);
    return (
        <RgstrBtnWrap open = {open}
                      onClick={() => setOpen(!open)}>
            <p>REGISTER</p>
            <RegistryNav open={open} />
        </RgstrBtnWrap>
    )
}