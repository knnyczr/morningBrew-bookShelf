import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import { GlobalContext } from "../components/GlobalState";


export const MyApp = ({ Component, pageProps }) => {
    const [ googleData, setGoogleData ] = useState({})

    useEffect(()  => {
      const fetchData = async () => {
        const res = await fetch(
            `https://sheets.googleapis.com/v4/spreadsheets/${
                process.env.googleSheetsID
              }/values/${process.env.range}?key=${
                process.env.apiKey
              }`
          )
          const sheetData = await res.json()
          setGoogleData(sheetData)
      }
      fetchData();
    },[])

    return (
        <GlobalContext.Provider value={{
          sheetData: googleData
        }}>
            <Component {...pageProps} />
        </GlobalContext.Provider>
    )
}

export default MyApp