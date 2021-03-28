import React, {useEffect, useState} from "react";
import "./Silicon.css";
import { Paper, List, ListItem, ListItemIcon, ListItemText, Button, Dialog, useMediaQuery } from "@material-ui/core";
import StarBorder from "@material-ui/icons/StarBorder";
import NavBar from "../../NavBar/NavBar";
import "../../../../node_modules/video-react/dist/video-react.css"; 
const product1Benefits = [
	"Facilitate uptake of chemicals into the plant tissue.",
	"Easy dispersion in aqueous systems.",
	"Produces very rapid wetting and spreading on hard to wet surface such as waxy leaves.",
	"Enhance the performance of agricultural chemicals and plant growth regulator.",
	"It can be used as formulation ingredient in pesticide products, or as tank-mix adjuvant for foliar applied chemicals.",
];
function Silicon() {
	const [modal, setModal] = useState(false);
	const [videoDimension, setVideoDimension] = useState([900,515]);
	const [videoLink, setVideoLink] = useState("https://res.cloudinary.com/maximuscloud/video/upload/v1604114828/WhatsApp_Video_2020-10-31_at_12.56.00_AM_ia0aif.mp4");
	const handleClose = ()=>{
			let dialog = document.body.querySelector("#dialog");
			dialog.animate([
				{ opacity: 1 }, 
				{ opacity: 0}
			  ], { 
				duration: 700,
			  });
			  setTimeout(() => {
				setModal(false);
			}, 350);
	}
	const matches = useMediaQuery("(max-width:720px)");
	const matches1 = useMediaQuery("(max-width:1200px)");
	const matches2 = useMediaQuery("(min-width:721px)");
	useEffect(()=>{
		if(matches1 && matches2){
			setVideoDimension([700,400]);
			console.log("Go");
		}
		else if (matches){
			setVideoLink("https://res.cloudinary.com/maximuscloud/video/upload/v1604114817/WhatsApp_Video_2020-10-31_at_12.56.00_AM_1_mk2lkk.mp4");
			setVideoDimension([300,600]);
		}
	},[matches,matches1]);
	return (
		<div className='silicon-container'>
			<div className='silicon-hero animate__animated animate__fadeIn'>
				<NavBar />
				<div className='silicon-hero-overlay '>
					<div className='silicon-hero-info'>
						<h1>Silicon Spreader</h1>
					</div>
				</div>
			</div>
			<div className='silicon-card-container animate__animated animate__fadeIn'>
				<div className='silicon-headline'>
					<h2>
						Our Silicon Spreader is processed by experienced professionals using optimum quality,
						chemical compounds and progressive technology in adherence with norms.
					</h2>
				</div>
				<Button variant="outlined" className="home-learn-button" size="large" onClick={() => {
								setModal(true);
							}}>  
							Learn More
				</Button>
				<div className='silicon-modal-container '>
					<div className='silicon-modal-left-div '>
						<img
							className='silicon-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1605208356/COVER_svqrlp.jpg'
							alt='Silicon Spreader'
						/>
					</div>
					
					<div className='silicon-modal-right-div'>
						<Paper elevation={5} className='silicon-modal-heading'>
							<h2>Advantages</h2>
						</Paper>
						<List>
							{product1Benefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="silicon-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</div>
			<Dialog open={modal} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<video width={videoDimension[0]} height={videoDimension[1]} controls>
						<source src={videoLink} type="video/mp4"/>
						Your browser does not support the video tag.
					</video>
				</div>
			</Dialog>
		</div>
	);
}

export default Silicon;
