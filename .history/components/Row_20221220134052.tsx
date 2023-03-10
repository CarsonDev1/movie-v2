import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { Movie } from "../typings";
import Thumbnail from "./Thumbnail";

interface Props {
	title: string;
	// when using firebase
	// movie: Movie | DocumentData[];
	movies: Movie[];
}

function Row({ title, movies }: Props) {
	const rowRef = useRef<HTMLDivElement>(null);
	return (
		<div className="h-40 space-y-0.5 md:space-y-2">
			<h2 className="w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl">
				{title}
			</h2>
			<div className="group relative md:-ml-2 ">
				<ChevronLeftIcon className=" absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />

				<div
					ref={rowRef}
					className="flex scrollbar-hide items-center space-x-0.5 overflow-x-scroll md:space-x-2.5 md:p-2"
				>
					{movies.map((movie) => (
						<Thumbnail key={movie.id} movie={movie} />
					))}
				</div>

				<ChevronRightIcon className=" absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100" />
			</div>
		</div>
	);
}

export default Row;
