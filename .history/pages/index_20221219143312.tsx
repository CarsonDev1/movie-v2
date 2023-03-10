import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { Movie } from "../typings";
import requests from "../utils/requests";

interface Props {
	netflixOriginals: Movie[];
	trendingNow: Movie[];
	topRated: Movie[];
	actionMovies: Movie[];
	comedyMovies: Movie[];
	horrorMovies: Movie[];
	romanceMovies: Movie[];
	documentaries: Movie[];
	products: Product[];
}

const Home = ({ netflixOriginals }: Props) => {
	console.log(netflixOriginals);

	return (
		<div className="relative h-screen bg-gradient-to-b from-gray-900/10 to-[#010511] lg:h-[140vh]">
			<Head>
				<title>Home - Movie_v2</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<main>
				<Banner />
				<section>{/*Row*/}</section>
			</main>
			{/*Modal*/}
			<footer></footer>
		</div>
	);
};

export default Home;

export const getServerSideProps = async () => {
	const [
		netflixOriginals,
		trendingNow,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries,
	] = await Promise.all([
		fetch(requests.fetchNetflixOriginals).then((res) => res.json()),
		fetch(requests.fetchTrending).then((res) => res.json()),
		fetch(requests.fetchTopRated).then((res) => res.json()),
		fetch(requests.fetchActionMovies).then((res) => res.json()),
		fetch(requests.fetchComedyMovies).then((res) => res.json()),
		fetch(requests.fetchHorrorMovies).then((res) => res.json()),
		fetch(requests.fetchRomanceMovies).then((res) => res.json()),
		fetch(requests.fetchDocumentaries).then((res) => res.json()),
	]);
	return {
		props: {
			netflixOriginals: netflixOriginals.results,
			trendingNow: trendingNow.results,
			topRated: topRated.results,
			actionMovies: actionMovies.results,
			comedyMovies: comedyMovies.results,
			horrorMovies: horrorMovies.results,
			romanceMovies: romanceMovies.results,
			documentaries: documentaries.results,
		},
	};
};
