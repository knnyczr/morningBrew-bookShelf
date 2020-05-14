import { useContext } from 'react';
import { GlobalContext } from '../components/GlobalState'

export default function Month() {
    const { sheetData } = useContext(GlobalContext)

    const getMonth = () => {
        const excalmIndex = sheetData.range.indexOf("!"); 
        return sheetData.range.slice(0, excalmIndex)
    };

    return(
        // dropdown from bootstrap here
        // will need to split or splice by ! character to get the month out
        
        // will need to think of ways to split the monthy description for the enter key
        <>
            {
                sheetData.values[1] && (
                    <>
                        <h1>{getMonth()}</h1>
                        <p>{sheetData.values[1][0]}</p>
                    </>
                )
            }
        </>
    )
}