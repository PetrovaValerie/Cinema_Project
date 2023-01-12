import { PaginateWrapper } from "./style";
import ReactPaginate from "react-paginate";
import {PaginationType} from "./types";

export const PaginateForward = ({ changePage, pageCount, forcePage }: PaginationType) => {

    return (
        <>
            <PaginateWrapper>
                {<ReactPaginate
                    forcePage={forcePage}
                    className="pagination"
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={changePage}
                    pageRangeDisplayed={4}
                    pageCount={pageCount < 21 ? pageCount : 20}
                    previousLabel="<"
                />}
            </PaginateWrapper>
        </>
    );
};