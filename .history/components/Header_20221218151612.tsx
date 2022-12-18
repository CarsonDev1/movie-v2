import { SearchIcon } from "@heroicons/react/solid";

function Header() {
	return (
		<header>
			<div className="flex items-center space-x-2 md:space-x-10">
				<img
					src="../logo.png"
					width={70}
					height={70}
					className="cursor-pointer object-contain"
				/>
				<ul className="hidden space-x-4 md:flex">
					<li className="headerLink">Home</li>
					<li className="headerLink">TV Shows</li>
					<li className="headerLink">Movies</li>
					<li className="headerLink">New & Popular</li>
					<li className="headerLink">My List</li>
				</ul>
			</div>
			<div>
				<SearchIcon className="hidden h-6 w-6 sm:inline" />
				<p>Kid</p>
			</div>
		</header>
	);
}

export default Header;
