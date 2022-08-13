import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function Projects() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Navbar />

			<main className={styles.main}>
				<div>hi projects</div>
			</main>

			<Footer />

		</div>
	)
}
