

import jsonjson from './tem.json'


const CountryCard = ({country}) => {

    const {name,capital, population, languages, funFact} = country;
    return (
        <>  
            <div>
                <h3>{name} - {capital}</h3>
                <h3>{population}</h3>
                <h3>
                    {
                        languages.length > 2  ?  `${languages[0] },  ${languages[1]}.. .` : languages[0]
                    }
                </h3>
                <h3> {funFact}</h3>

            </div>
        </>
    )
}

const App = () => {
    return(
        <>
            <h1>Country Application</h1>
            {
                jsonjson.countries.map((country, index) => < CountryCard key={index} country={country} />)
            }
        </>
    )
}
export default App;