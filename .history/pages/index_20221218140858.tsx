import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>Home - Movie_v2</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				{/*Banner*/}
				<section>{/*Row*/}</section>
			</main>
			{/*Modal*/}
			<footer></footer>
		</div>
	);
};

export default Home;
