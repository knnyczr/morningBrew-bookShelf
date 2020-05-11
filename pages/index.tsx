import { useContext } from 'react'
import Head from 'next/head';
import NavBarComponent from '../components/NavBarComponent';
import { Button } from 'react-bootstrap'
import { GlobalProvider, initialValues } from '../components/GlobalState'
import { GlobalContext } from '../components/GlobalState'


export default function Home() {
  const { books } = useContext(GlobalContext)
  console.log(books)
  return (
    <GlobalProvider>
      <div className="container">
        <Head>
          <title>Morning Brew | bookShelf</title>
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" ></link>
        </Head>
        <main>
          <NavBarComponent />
          
        </main>
      </div>
    </GlobalProvider>
  )
}
