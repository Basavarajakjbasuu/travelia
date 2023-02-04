import './service.css';

import serviceCard from '../constant';
const Service = () => {
	return (
		<section className="section service">
			<div className="container">
				{/* title wrapper */}
				<div className="title-wrapper">
					<p className="section-subtitle">What We Serve</p>

					<h2 className="h2 title section-title">Top Values For You</h2>

					<p className="section-text">
						Try a variety of benefits when using our services.
					</p>
				</div>

				{serviceCard.map(item => (
					<div className="service-card" key={item.id}>
						<div className="card-icon">
							<img
								src={item.icon}
								width="60"
								height="60"
								loading="lazy"
								alt="icon"
							/>
						</div>

						<h3 className="h3 title card-title">{item.title}</h3>

						<p className="card-text">{item.subText}</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Service;
