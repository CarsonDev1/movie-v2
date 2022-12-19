import Image from "next/image";
import React, { useState } from "react";
import { Movie } from "../typings";

interface Props {
	netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
	const [movie, setMovie] = useState<Movie | null>(null);
	return (
		<div>
			<div className="">{/* <Image src= /> */}</div>
		</div>
	);
};

export default Banner;
