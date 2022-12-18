function Header() {
	return (
		<header>
			<div className="">
				<img
					src="../logo.png"
					width={100}
					height={100}
					className="cursor-pointer object-contain"
				/>
				<ul>
					<li>Home</li>
					<li>TV Shows</li>
					<li>Movies</li>
					<li>New & Popular</li>
					<li>My List</li>
				</ul>
			</div>
			<div className=""></div>
		</header>
	);
}

export default Header;
