import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    console.log(search);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Hello</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input 
            name='search'
            id='search'
            type='text'
            required
            />
          <button>Buscar</button>
        </form>

      </main>

    </div>
  )
}
