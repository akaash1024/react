import { useRouteError } from "react-router-dom"


export const ErrorPage = ( ) => {
    const error = useRouteError();

    return (
        <>
            <h1>Oppsss !!! An Error Occured</h1>
            {error &&  <p>{error.data}</p>}
        </>
    )
} 