import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import { baseUrl } from "../constants/movie";
import { Movie } from "../typings";

interface Props {
	netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
	const [movie, setMovie] = useState<Movie | null>(null);
	useEffect(() => {
		setMovie(
			netflixOriginals[
				Math.floor(Math.random() * netflixOriginals.length)
			]
		);
	}, [netflixOriginals]);
	console.log(movie);

	return (
		<div>
			<div className=" absolute top-0 left-0 -z-10 h-[95vh] w-screen">
				<Image
					alt=""
					src={`${baseUrl}${
						movie?.backdrop_path || movie?.poster_path
					}`}
					layout="fill"
					objectFit="cover"
				/>
			</div>
			<h1 className="text-2xl lg:text-7xl">
				{movie?.title || movie?.name || movie?.original_name}
			</h1>
			<p>{movie?.overview}</p>
		</div>
	);
};

export default Banner;
