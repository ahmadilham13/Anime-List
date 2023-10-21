import { useEffect } from "react"

const Pagination = ({page, lastPage, setPage}) => {

    const scrollTop = () => {
        scrollTo({
            behavior: "smooth",
            top: 0
        })
    }
    const handlerNextPage = () => {
        setPage((prevState) => prevState + 1)
        // scrollTop()
    }

    const handlerPrevtPage = () => {
        setPage((prevState) => prevState - 1)
        // scrollTop()
    }

    useEffect(() => {
        scrollTop()
    }, [page])

    return (
        <div className="flex justify-center items-center py-4 px-2 gap-2 text-customColor-primary text-2xl">
            <button onClick={handlerPrevtPage} className="transition-all p-1 bg-customColor-secondary disabled:text-customColor-dark hover:text-customColor-accent" disabled={page <= 1 ? true : false}>Prev</button>
            <p>{page} of {lastPage}</p>
            <button onClick={handlerNextPage} className="transition-all p-1 bg-customColor-secondary disabled:text-customColor-dark hover:text-customColor-accent" disabled={page == lastPage ? true : false}>Next</button>
        </div>
    )
}

export default Pagination