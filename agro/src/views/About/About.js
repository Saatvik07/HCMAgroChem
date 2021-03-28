import React, { useEffect, useState } from "react";
import AOS from "aos";
import "./About.css";
import "aos/dist/aos.css";

import { List, ListItem, ListItemIcon, ListItemText, useMediaQuery, CircularProgress} from "@material-ui/core";

import { Parallax } from "react-parallax";
import NavBar from "../NavBar/NavBar";

function About() {
	const [loading, setLoading] = useState(true);
	const matches = useMediaQuery("(max-width:1250px)");
	const backgroundPic = matches
		? "https://res.cloudinary.com/maximuscloud/image/upload/v1602886111/pexels-karolina-grabowska-4207907_qntcox.jpg"
		: "https://res.cloudinary.com/maximuscloud/image/upload/v1604110262/pexels-ketut-subiyanto-4132369_thzhs0.jpg";
	useEffect(()=>{

		if(!loading){
			document.getElementById("loader").style.display="none";
			document.querySelector(".parallax-container").classList.remove("not-loaded");
			setLoading(true);
			AOS.init();
		}
		console.log(loading);
	})
	useEffect(()=>{
		document.querySelector(".parallax-background").id="parallax-image";
		document.getElementById("parallax-image").onload = ()=>{
			setLoading(false);
		}
	})
	return (
		<div className='about-container'>
			<div className="parallax-container not-loaded">
			<Parallax
				bgImage={backgroundPic}
				strength={1500}
				bgClassName="parallax-background"
			>
				<div className='about-hero '>
					<div className='about-hero-overlay '>
						<NavBar />
						<div className='products-hero-info animate__animated animate__fadeInLeft animate__fast'>
							<h1>About Us</h1>
						</div>
					</div>
				</div>
				<div className='about-first-overlay '>
					<div
						className='about-first-info-container'
						data-aos='fade-left'
						data-aos-mirror='true'
						data-aos-once='false'
					>
						{matches ? (
							<>
								<List>
									<ListItem>
										<ListItemText
											primary='HCM Agro Products is the key enterprise in the field of agriculture focusing
									relentlessly on quality and empowering our customers with a stunning and
									innovative range of products.'
											className='phone-about-first-list'
										></ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText
											primary='Our broad vision propels us forward in the direction of sustainable agriculture
											with minimal impact on the environment which encompasses several aspects.'
											className='phone-about-first-list'
										></ListItemText>
									</ListItem>
									<ListItem>
										<ListItemText
											primary='With years of experience in the market through unremitting innovation specialising
											in R&D through comprehensive and meticulous service to provide best solutions
											embedded in our products, we were able to set up 2 units that strengthen the roots
											of HCM Agro Products Private Ltd.'
											className='phone-about-first-list'
										></ListItemText>
									</ListItem>
								</List>
							</>
						) : (
							<>
								<p>
									HCM Agro Products is the key enterprise in the field of agriculture focusing
									relentlessly on quality and empowering our customers with a stunning and
									innovative range of products. Our broad vision propels us forward in the direction
									of sustainable agriculture with minimal impact on the environment which
									encompasses several aspects.
								</p>
								<p>
									With years of experience in the market through unremitting innovation specialising
									in R&D through comprehensive and meticulous service to provide best solutions
									embedded in our products, we were able to set up 2 units that strengthen the roots
									of HCM Agro Products Private Ltd.
								</p>
							</>
						)}
					</div>
					<div
						className='about-fourth-info-container'
						data-aos='fade-right'
						data-aos-mirror='true'
						data-aos-once='false'
					>
						<h1 className='about-headings'>Our values</h1>
						<p>
							At HCM we win together, we lose together. We own our jobs. We serve customers
							throughout their journeys. We reflect, plan and act. We keep learning, improving and
							excelling at what we do the best.
						</p>
						<List>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600912279/excellence_jlmimu.png'
										alt='Excellence'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='EXELLENCE: we constantly strive to be excellent in all that we do'
									className='about-list-text'
								></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600910525/shield_voo9sa.png'
										alt='Safety'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='SAFETY- We ensure proper safety '
									className='about-list-text'
								></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600912441/customer_qe80yv.png'
										alt='Customers'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='CUSTOMERS- We place them at the heart of our business and relentlessly meet their expectations'
									className='about-list-text'
								></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600912441/teamwork_lo4mt1.png'
										alt='People'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='PEOPLE- We develop the talent, reward exceptional performance and growth and respect the right of our employees'
									className='about-list-text'
								></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1600912443/group_vacnyd.png'
										alt='Community'
										className='about-list-icon'
									/>
								</ListItemIcon>
								<ListItemText
									primary='COMMUNITY - We are active in the communities we serve to generate economic, social and environmental value'
									className='about-list-text'
								></ListItemText>
							</ListItem>
						</List>
					</div>
					<div
						className='about-second-info-container'
						data-aos='fade-left'
						data-aos-mirror='true'
						data-aos-once='false'
					>
						<h1 className='about-headings'>Our vision</h1>
						<p>
							To establish an everlasting relationship with our customers, focusing relentlessly on
							quality by consistently delivering high performing products which offers great values.
						</p>
					</div>
					<div
						className='about-third-info-container'
						data-aos='fade-right'
						data-aos-mirror='true'
						data-aos-once='false'
					>
						<h1 className='about-headings'>Our mission</h1>
						<p>
							To establish an everlasting relationship with our customers, focusing relentlessly on
							quality by consistently delivering high performing products which offers great values.
						</p>
					</div>
				</div>
			</Parallax>
			</div>
			
			<CircularProgress id="loader" style={{height:"200px", width:"200px",color:"#3a5a40", marginTop:"50px"}}/>
		</div>
	);
}

export default About;
//<span>Photo by <a href="https://unsplash.com/@polarmermaid?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Anne Nygård</a> on <a href="https://unsplash.com/s/photos/core-values?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>////
//https://res.cloudinary.com/maximuscloud/image/upload/v1600908571/anne-nygard-E5j_w4OHhSs-unsplash_ip0jlv.jpg/
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/phatplus" title="phatplus">phatplus</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
