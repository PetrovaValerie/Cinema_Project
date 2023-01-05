export type PayloadType = {
    background: string,
    color: string
}

export type StateType = {
    background?: string,
    color?: string,
}

export type ActionThemeType = {
    type?: string,
    theme?: PayloadType
}