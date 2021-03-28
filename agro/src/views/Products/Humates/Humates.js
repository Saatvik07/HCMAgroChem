import React, { useState } from "react";
import StarBorder from "@material-ui/icons/StarBorder";
import Carousel from 'react-material-ui-carousel';
import {
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Button,
	Typography,
	Paper,
	TableContainer,TableBody,Table,TableHead,TableRow,TableCell,List,ListItem,ListItemIcon,ListItemText, Dialog
} from "@material-ui/core";
import "./Humates.css";
import NavBar from "../../NavBar/NavBar";
const potassiumTable = [
    { item: "Organic Matter", standard: "60-65%"},
    { item: "Humic Acid(Dry Basis)", standard: "60-65%"},
    { item: "K2O", standard: "8-10"},
    { item: "pH value", standard: "8-10"},
    { item: "Solubility", standard: "100% Min"},
];
const superPotassiumTable = [
    { item: "Organic Matter", standard: "60-65%"},
    { item: "Humic Acid(Dry Basis)", standard: "70-75%"},
    { item: "K2O", standard: "10-12"},
    { item: "pH value", standard: "9-11"},
    { item: "Solubility", standard: "100% Min"},
];
const sodiumTable = [
    { item: "Solubility", standard: "90-95%"},
    { item: "Humic Acid(Dry Basis)", standard: "50-60%"},
    { item: "Organic Matter", standard: "60% Min"},
    { item: "pH value", standard: "4-6"},
    { item: "Appearance", standard: "60% Min"},
];
const humicTable = [
	{ item: "Organic Matter", standard: "60% min"},
	{ item: "Humic Acid(Dry Basis)", standard: "70%-80%"},
	{ item: "Moisture", standard: "20% max"},
	{ item: "Solubility", standard: "Insoluble"},
	{ item: "Particle Size", standard: "Powder 100 mesh"}
];
const boronTable = [
	{ item: "Humic Acid(Dry Basis)", standard: "50%-60% min"},
	{ item: "B2O3 (dry basis)", standard: "10%-15% min"},
	{ item: "pH value", standard: "8-10"},
	{ item: "Appearance", standard: "Powder/ granule"},
];
const potassiumBenefits = [
    "Potassium is an important component of chlorophyll, speed up the photosynthesis.",
    "Enhance the resistance of crops such as cold, drought, pest, disease and toppling resistance.",
    "Enhance nutrient uptake by combing nutrients with humic acids and keep a well-balanced nutrition.",
    "Improve soil structure increase ion exchange capacity of soil.",
    "Enhance resistance to stress for soil, especially reduce high salts in alkaline soils.",
    "Enhance nutrients uptake and increase the content of humus in soil.",
    "Prevent soil from contamination of heavy metallic ions as well as other harmful matters.",
    "Greatly improve the utilization of N & P.",
];
const sodiumBenefits = [
    "Increase physiological metabolism.",
    "Improves the immunity & metabolism of crops.",
    "Retain water and fight drought.",
    "Prevent corrosion of fruits.",
];
const sodiumBenefits2 = [
    "Promote metabolism, acclerate their growth and development.",
    "Improve meat quality, raise the yield of meat, eggs and milk.",
    "Make animal capillus bright.",
    "Used as organic feed additive.",
    "It improves animals immune system, in such a way that a thin protective coating is formed on the animals intestinal system.",
];
const sodiumBenefits3 = [
    "Petroleum drilling fluid decreasing and filtering agent.",
    "Boiler anti-scaling agent and water quality stabilizer.",
    "Cementing agent for pulverized coal shaping.",
    "Ceramic pug additive and dispersing agent.",
    "Ore dressing agent."
];

const humicBenefits = [
    "Prevent Fertilizer run off, keep effective of fertilizer.",
    "Modulate environment of microorganisms.",
    "Improve water holding capacity and aeration.",
    "Increase the fertility of soil.",
    "Increase soil aggregate structure.",
    "Prevent soil acidification.",
    "Reduce salinity of soil.",
    "Adjust soil pH value.",
    "Enhance resilience of fighting cold, drought, insect and lodging.",
    "Improve tensility of root, makes plant absorb better.",
    "Enhance crop physiological activity."
];

const boronBenefits = [
    "Boron is compounded into a humate colloid to create a slow-release fertilizer.",
    "Boron increases calcium efficiency and like calcium, is involved in cell wall strength and is important for good root development.",
    "Enhance plant’s anti-disease capabilities.",
    "Accelerate flower bud differentiation.",
    "Increase fruit livability, especially to beans, fruits or oil-bearing crops.",
    "Boron plays a critical role during the pollination stage of the reproduction process.",
    "Unlike traditional boron sources, this product can be safely included with seed."
];
function Humates() {
	const [modals, setModals] = useState([false, false, false, false,false]);
	const handleClose = ()=>{
			let dialog = document.body.querySelector("#dialog");
			dialog.animate([
				{ opacity: 1 }, 
				{ opacity: 0}
			  ], { 
				duration: 700,
			  });
			  setTimeout(() => {
				setModals([false,false,false,false,false]);
			}, 350);
	}
	return (
		<div className='humate-container'>
			<div className='humate-hero animate__animated animate__fadeIn'>
			<NavBar />
				<div className='humate-hero-overlay '>
					<div className='humate-hero-info'>
						<h1>Humate/Humic Series</h1>
					</div>
				</div>
			</div>
			<div className='humate-card-container'>
				<Card className='humate-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([true, false, false,false,false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1605189057/Humid_acid_granules_f5u9em.jpg'
							alt='Humic Acid'
							className='humate-card-image'
						/>
						<CardContent style={{ height: "40%" }} className="humate-card-content">
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Humic Acid
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
                            It is a powder or granular form of leonardite/Lignite & weathered coal. Humic Acid is basic raw material for manufacturers in agricultural and industrial products and it is a permanent humic substance and can not be degraded that fast by the microorganisms in the soil and increase fertility.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='humate-card-footer-container'>
						<div className='humate-card-footer'>
							<Button
								variant='outlined'
								className='humate-card-button'
								onClick={() => {
									setModals([true, false, false, false,false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='humate-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, true, false,false,false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/c_fill,h_2520,w_4048/v1605189289/Potassium_Flakes_uzsxrs.jpg'
							alt='Granule Organic amino'
							className='humate-card-image'
						/>
						<CardContent style={{ height: "40%" }} className="humate-card-content">
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Potassium Humate
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
                                Potassium Humate is extracted from natural leonardite. It is black powder, flake or crystal granular, soluble in water, which perfectly combine humic acids and nutrients. It improves the structure of soil, increase the buffering power of soil. Optimize N,P,K absorption by plants.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='humate-card-footer-container'>
						<div className='humate-card-footer'>
							<Button
								variant='outlined'
								className='humate-card-button'
								onClick={() => {
									setModals([false, true, false,false,false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='humate-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, false, true, false,false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_2520,w_4048/v1605200516/Sodium_humate_flakes_kqgnr6.jpg'
							alt='Granule Organic amino'
							className='humate-card-image'
						/>
						<CardContent className="humate-card-content">
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Sodium Humate
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
                            Sodium is used in agriculture as fertilizer additive to increase the efficiency of fertilizer especially Nitrogen & Phosphorus based fertilizers. Sodium Humate has the prominent property to absorb toxins, which decides this product is naturally an important for animal health. It also can be used in Aquaculture.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='humate-card-footer-container'>
						<div className='humate-card-footer'>
							<Button
								variant='outlined'
								className='humate-card-button'
								onClick={() => {
									setModals([false, false, true, false,false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
                <Card className='humate-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, false, false, true,false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_2520,w_4084/v1605204064/Boron_Humate_granules_jlt8vi.jpg'
							alt='Boron Humate'
							className='humate-card-image'
						/>
						<CardContent className="humate-card-content">
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
                                Boron Humate
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
                                Boron is an essential element for plants development, growth, crop yielding & seed development. It helps with the transfer of water & nutrition in plants. It contains rich humic acid and organic boron, which is an organic compound & microbial stimulator.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='humate-card-footer-container'>
						<div className='humate-card-footer'>
							<Button
								variant='outlined'
								className='humate-card-button'
								onClick={() => {
									setModals([false, false, false, true,false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
                <Card className='humate-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, false, false, false,true]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_2520,w_4048/v1605093672/Cover_Picture_Super_potassium_CRYSTALS_xqc3mz.jpg'
							alt='Super Potassium Humate'
							className='humate-card-image'
						/>
						<CardContent className="humate-card-content">
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
                                Super Potassium Humate
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
                                Info not available
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='humate-card-footer-container'>
						<div className='humate-card-footer'>
							<Button
								variant='outlined'
								className='humate-card-button'
								onClick={() => {
									setModals([false, false, false, false,true]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
			</div>
			<Dialog open={modals[0]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<div className='amino-dialog-left-div '>
						<Carousel className="humate-carousel" interval={4000}>
							<div>
								<img
									className='slide-container'
									src="https://res.cloudinary.com/maximuscloud/image/upload/v1605094326/Humic_acid_FLAKES_jxe4ka.jpg"
									style={{
										width:"100%",
										margin: "0 auto",
										height: "40vh",
									}}
								/>
								
								<div className='seaweed-slide-info'>
									<h2>Humic Acid Flakes</h2>
								</div>
							</div>

							
								
						
							<div>
									<img
									className='slide-container'
									src="https://res.cloudinary.com/maximuscloud/image/upload/v1605189057/Humid_acid_granules_f5u9em.jpg"
									style={{
										width:"100%",
										margin: "0 auto",
										height: "40vh",
									}}
								/>
									<div className='seaweed-slide-info'>
										<h2>Humic Acid Granules</h2>
									</div>
								
							</div>
						</Carousel>
						
						<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="humate-table-text-headings">Item</TableCell>
										<TableCell className="humate-table-text-headings">Standard</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{humicTable.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="humate-table-text">
												{row.item}
											</TableCell>
											<TableCell className="humate-table-text">{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
					<div className='amino-dialog-right-div'>
						<Paper elevation={5} className='humate-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
						<List className="product-dialog-list">
							{humicBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="humate-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Dialog>
			<Dialog open={modals[1]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<div className='amino-dialog-left-div'>
					<Carousel className="humate-carousel" interval={4000}>
							<div>
								<img
									className='slide-container'
									src="https://res.cloudinary.com/maximuscloud/image/upload/v1605189289/Potassium_Flakes_uzsxrs.jpg"
									style={{
										width:"100%",
										margin: "0 auto",
										height: "40vh",
									}}
								/>
								
								<div className='seaweed-slide-info'>
									<h2>Potassium Humate Flakes</h2>
								</div>
							</div>
							<div>
									<img
									className='slide-container'
									src="https://res.cloudinary.com/maximuscloud/image/upload/v1605189289/Potassium_Flakes_uzsxrs.jpg"
									style={{
										width:"100%",
										margin: "0 auto",
										height: "40vh",
									}}
								/>
									<div className='seaweed-slide-info'>
										<h3>Potassium Humate Crystals</h3>
									</div>
								
							</div>
						</Carousel>
						<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="humate-table-text-headings">Item</TableCell>
										<TableCell className="humate-table-text-headings">Standard</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{potassiumTable.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="humate-table-text">
												{row.item}
											</TableCell>
											<TableCell className="humate-table-text">{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						
						
					</div>
					<div className='amino-dialog-left-div'>
					<Paper elevation={5} className='manure-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
					<List className="product-dialog-list">
							{potassiumBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="humate-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					

					</div>
				</div>
			</Dialog>
			<Dialog open={modals[2]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container ' style={{alignItems:"flex-start"}}>
					<div className='amino-dialog-left-div'>
					<Carousel className="humate-carousel" interval={4000}>
							<div>
								<img
									className='slide-container'
									src="https://res.cloudinary.com/maximuscloud/image/upload/v1605200516/Sodium_humate_flakes_kqgnr6.jpg"
									style={{
										width:"100%",
										margin: "0 auto",
										height: "40vh",
									}}
								/>
								
								<div className='seaweed-slide-info'>
									<h2>Sodium Humate Flakes</h2>
								</div>
							</div>
						</Carousel>
						<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="humate-table-text-headings">Item</TableCell>
										<TableCell className="humate-table-text-headings">Standard</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{sodiumTable.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="humate-table-text" >
												{row.item}
											</TableCell>
											<TableCell className="humate-table-text">{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						<Paper elevation={5} className='manure-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
						<List className="product-dialog-list">
								{sodiumBenefits.map((benefit) => (
									<ListItem>
										<ListItemIcon style={{color:"#3a5a40"}}>
											<StarBorder />
										</ListItemIcon>
										<ListItemText primary={benefit} className="humate-list-text"></ListItemText>
									</ListItem>
								))}
						</List>
					</div>
					<div className='amino-dialog-left-div'>
					<Paper elevation={5} className='manure-modal-heading'>
							<h2>For Animals</h2>
						</Paper>
					<List className="product-dialog-list" style={{marginBottom:"50px"}}>
							{sodiumBenefits2.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="humate-list-text"></ListItemText>
								</ListItem>
							))}
					</List>
					<Paper elevation={5} className='manure-modal-heading'>
							<h2>For Industry</h2>
						</Paper>
					<List className="product-dialog-list">
							{sodiumBenefits3.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="humate-list-text"></ListItemText>
								</ListItem>
							))}
					</List>
					</div>
				</div>
			</Dialog>
			<Dialog open={modals[3]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<div className='amino-dialog-left-div'>
					<Carousel className="humate-carousel" interval={4000}>
						<div>
							<img className='slide-container' src="https://res.cloudinary.com/maximuscloud/image/upload/v1605204064/Boron_Humate_granules_jlt8vi.jpg" style={{width:"100%",margin: "0 auto",height: "40vh",}}/>
                                <div className='seaweed-slide-info'>
                                    <h2>Boron Humate Crystals</h2>
                                </div>
                        </div>
					</Carousel>
						<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="humate-table-text-headings">Item</TableCell>
										<TableCell className="humate-table-text-headings">Standard</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{boronTable.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="humate-table-text">
												{row.item}
											</TableCell>
											<TableCell className="humate-table-text">{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						
						
					</div>
					<div className='amino-dialog-left-div'>
					<Paper elevation={5} className='manure-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
					<List className="product-dialog-list">
							{boronBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="humate-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Dialog>
			<Dialog open={modals[4]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<div className='amino-dialog-left-div'>
					<Carousel className="humate-carousel" interval={4000}>
						<div>
							<img className='slide-container' src="https://res.cloudinary.com/maximuscloud/image/upload/v1605093672/Cover_Picture_Super_potassium_CRYSTALS_xqc3mz.jpg" style={{width:"100%",margin: "0 auto",height: "40vh",}}/>
                                <div className='seaweed-slide-info'>
                                    <h2>Boron Humate Crystals</h2>
                                </div>
                        </div>
					</Carousel>
						<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="humate-table-text-headings">Item</TableCell>
										<TableCell className="humate-table-text-headings">Standard</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{superPotassiumTable.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="humate-table-text">
												{row.item}
											</TableCell>
											<TableCell className="humate-table-text">{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						
						
					</div>
					<div className='amino-dialog-left-div'>
					<Paper elevation={5} className='manure-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
					<List className="product-dialog-list">
							{potassiumBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="humate-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					

					</div>
				</div>
			</Dialog>
		</div>
	);
}

export default Humates;
