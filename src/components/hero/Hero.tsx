import './hero.css';

import { HiChevronRight, HiPlay } from 'react-icons/hi2';

import TitleIcon from '../../assets/title-icon.svg';
import HeroBtn from '../../assets/hero-button-img.jpg';
import HeroBanner from '../../assets/hero-banner.png';

const Hero = () => {
	return (
		<main>
			<article>
				<section
					className="section hero has-bg-image"
					style={{ backgroundImage: '../../assets/hero-bg.jpg' }}>
					<div className="container">
						<div className="hero-content">
							<p className="hero-subtitle">
								Explore the world
								<img src={TitleIcon} alt="title icon" width="20" height="20" />
							</p>

							<h1 className="h1 title hero-title">
								It's a Big World Out There, Go Explore
							</h1>
							<p className="hero-text">
								We always make our customer happy by providing as many choices
								as possible
							</p>

							<div className="wrapper">
								<button className="btn btn-secondary">
									<span className="span">Plane a Trip</span>
									<HiChevronRight />
								</button>

								<button className="hero-btn">
									<div className="btn-img">
										<img
											src={HeroBtn}
											alt="our story"
											width="100"
											height="100"
											className="img-cover"
										/>
										<HiPlay className="icon" />
									</div>

									<p className="text">Watch our Story</p>
								</button>
							</div>
						</div>

						<figure className="hero-banner">
							<img
								src={HeroBanner}
								alt="hero banner"
								className="w-100"
								height="735"
							/>
						</figure>
					</div>
				</section>
			</article>
		</main>
	);
};

export default Hero;
