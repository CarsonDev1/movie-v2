import React from "react";
import { Movie } from "../typings";

interface Props {
	netflixOriginals: Movie[];
}

const Banner = ({ netflixOriginals }: Props) => {
	return (
		<div>
			<div className="">
				<Image />
			</div>
		</div>
	);
};

export default Banner;
