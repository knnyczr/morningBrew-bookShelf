import { useContext } from 'react'
import Head from 'next/head';
import NavBarComponent from '../components/NavBarComponent';
import { GlobalProvider, initialValues } from '../components/GlobalState'
import { GlobalContext } from '../components/GlobalState'
import { GetStaticProps } from 'next'
import fetch from 'isomorphic-unfetch'

// import { google } from 'googleapis'


export default function Home(props) {
  const { sheetData } = props
  const { books } = useContext(GlobalContext)
  console.log(books, sheetData.values)
  return (
    <GlobalProvider>
      <div className="container">
        <Head>
          <title>Morning Brew | bookShelf</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
        </Head>
        <main>
          <NavBarComponent />
          
        </main>
      </div>
    </GlobalProvider>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  // const res = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
  const res = await fetch(
    `https://sheets.googleapis.com/v4/spreadsheets/${
        process.env.googleSheetsID
      }/values/${process.env.range}?key=${
        process.env.apiKey
      }`
  )
  const sheetData = await res.json()

  return {props: { sheetData }}
}