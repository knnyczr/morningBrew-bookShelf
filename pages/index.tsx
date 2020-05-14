import { useContext } from 'react'
import { GlobalContext } from '../components/GlobalState'

import Head from 'next/head';
import NavBarComponent from '../components/NavBarComponent';
import Year from '../components/Year';
import HeroImage from '../components/HeroImage';
import Month from '../components/Month';
import BookFeed from '../components/BookFeed';


export default function Home(): JSX.Element {
  const { sheetData } = useContext(GlobalContext)
  console.log(sheetData)
  return (
      <div className="container">
        <Head>
          <title>Morning Brew | bookShelf</title>
        </Head>
        <main>
          {
            sheetData ? (
              <>
                <NavBarComponent />
                <HeroImage />
                <Year />
                <Month />
                <BookFeed />
              </>
            ) : (
              <h1>loading...</h1>
            )
          }
        </main>
      </div>
  )
}