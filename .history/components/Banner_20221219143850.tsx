import Image from "next/image";
import React from "react";
import { Movie } from "../typings";

interface Props {
	netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
	return (
		<div>
			<div className="">{/* <Image src= /> */}</div>
		</div>
	);
};

export default Banner;
