
export type PaginationType = {
    changePage: (selectedItem: {selected : number}) => void,
    pageCount:  number,
    forcePage: number
}