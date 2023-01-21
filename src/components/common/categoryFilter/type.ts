import React, {Dispatch, SetStateAction} from 'react';

export type SearchCategoryProps = {
    // stateAdvSearch: boolean,
    // setStateAdvSearch: Dispatch<SetStateAction<boolean>>,
    valueSearch: string,
    handleSubmitValue: (e: React.ChangeEvent<HTMLInputElement>) => void
}