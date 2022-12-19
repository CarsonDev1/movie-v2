import Image from "next/legacy/image";
import { Movie } from "../typings";

interface Props {
	movie: Movie;
}

function Thumbnail({ movie }: Props) {
	return (
		<div className=" relative h-28 min-w-[128px]">
			<Image
				alt=""
				src={`https://image.tmdb.org/t/p/w500${
					movie.backdrop_path || movie.poster_path
				}`}
				className="rounded-sm object-cover md:rounded"
				layout="fill"
			/>
		</div>
	);
}

export default Thumbnail;
