import React, { useState } from "react";
import StarBorder from "@material-ui/icons/StarBorder";
import {
	Card,
	CardActionArea,
	CardContent,
	CardActions,
	Button,
	Typography,
	Modal,
	Paper,
	TableContainer,TableBody,Table,TableHead,TableRow,TableCell,List,ListItem,ListItemIcon,ListItemText, Dialog
} from "@material-ui/core";
import Carousel from 'react-material-ui-carousel';
import "./Amino.css";
import NavBar from "../../NavBar/NavBar";
const aminoTable = [
	{ item: "", standard1: "50-55%", standard2:"80-85%", standard3:"90-95%" },
	{ item: "Appearance", standard1: "White", standard2:"Cream Powder", standard3:"Off white" },
	{ item: "Total Protein", standard1: "50-55%", standard2:"80-85%", standard3:"90-95%" },
	{ item: "Total Nitrogen", standard1: "10-11%", standard2:"12-13%", standard3:"15-16%" },
	{ item: "pH", standard1: "3.5-5.5", standard2:"6-7", standard3:"6-7" },
	{ item: "Loss on drying", standard1: "4-5%", standard2:"4-5%", standard3:"3-3.5%" },
	{ item: "Odour", standard1: "Protein Odour", standard2:"Protein Odour", standard3:"Protein Odour" },
	{ item: "Water solubility", standard1: "100%", standard2:"100%", standard3:"100%" },
];
const aminoBenefits = [
	"Stimulates plant growth and increases the output of plants.",
	"Improve the quality of product & also promotes the development of root & shoots",
	"A good supplementary nutrilizer to N,P,K fertilizers & pesticides",
];
const fulvicTable = [
	{ item: "FAS(Dry basis)", standard: "70%-80% min"},
	{ item: "Water Soluble(Dry Basis)", standard: "95%- 100% min"},
	{ item: "Moisture", standard: "10% max"},
	{ item: "pH", standard: "5-6"},
	{ item: "Appearance", standard: "Brown/Black Powder/ Flake"}
];
const fulvicBenefits = [
	"Chelate with plant nutrients to improve their uptake by plants, and reduce their immobilization in the soil.",
	"Quicker seed germination and faster root and shoot growth.",
	"Improve moisture retention in plants and reduce moisture stress.",
	"Prevent and cure the plant pathema.",
	"Enhance the uptake of available nutrition.",
	"Improve the function of fertilizer and pesticides.",
	"Promote residue decomposition.",
	"Enhance plant germination and growth.",
	"Provide valuable source of carbon for soil microbes.",
];
function Amino() {
	const [modals, setModals] = useState([false, false, false]);
	const handleClose = ()=>{
			let dialog = document.body.querySelector("#dialog");
			dialog.animate([
				// keyframes
				{ opacity: 1 }, 
				{ opacity: 0}
			  ], { 
				// timing options
				duration: 700,
			  });
			  setTimeout(() => {
				setModals([false,false,false]);
			}, 350);

	}
	return (
		<div className='amino-container'>
			<div className='amino-hero animate__animated animate__fadeIn'>
			<NavBar />
				<div className='amino-hero-overlay '>
					
					<div className='amino-hero-info'>
						<h1>Amino & Fulvic Acid Series</h1>
					</div>
				</div>
			</div>
			<div className='amino-card-container'>
				<Card className='amino-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([true, false, false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1606229184/White_Amino_Powder_yqqwy4.jpg'
							alt='amino powder'
							className='amino-card-image'
						/>
						<CardContent style={{ height: "40%" }} className="amino-card-content">
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Amino Acid Powder
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								Organic amino is an eco-friendly fertilizer, which helps in improving the quality &
								fertility of soil and hence make the produce healthy & nutritious. It enriches the
								soil with micro-organisms & restore the depleted nutrients of the soil.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='amino-card-footer-container'>
						<div className='amino-card-footer'>
							<Button
								variant='outlined'
								className='amino-card-button'
								onClick={() => {
									setModals([true, false, false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='amino-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, true, false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_3456,w_5184/v1606228744/Amino_acid_granules_1_toh9d0.jpg'
							alt='amino granules'
							className='amino-card-image'
						/>
						<CardContent style={{ height: "40%" }} className="amino-card-content">
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Amino Acid Granules
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								Mycorrhizae is a biofertilizer that helps in promotion of plant growth in an
								eco friendly manner as well as providing several other benefits to
								cultivation. We offer commercial production of viable, healthy genetically
								pure & high quality mycorrhizae without contamination.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='amino-card-footer-container'>
						<div className='amino-card-footer'>
							<Button
								variant='outlined'
								className='amino-card-button'
								onClick={() => {
									setModals([false, true, false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='amino-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, false, true]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1606228765/Fulvic_acid_POWDER_ztefpl.jpg'
							alt='Fulvic Acid'
							className='amino-card-image'
						/>
						<CardContent className="amino-card-content">
							<Typography
								gutterBottom
								variant='h5'
								component='h2'
								style={{ marginBottom: "20px", color: "white" }}
							>
								Fulvic Acid
							</Typography>
							<Typography variant='body2' color='textSecondary' component='p'>
								The Seaweed extract is natural organic concentrate that are extracted from marine
								plants. These natural and non-toxic extracts are rich in minor elements and natural
								growth hormones and trace elements like auxins, gibberellins and cytokinins.
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='amino-card-footer-container'>
						<div className='amino-card-footer'>
							<Button
								variant='outlined'
								className='amino-card-button'
								onClick={() => {
									setModals([false, false, true]);
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
						<img
							className='product-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1606229184/White_Amino_Powder_yqqwy4.jpg'
							alt='amino powder'
						/>
						<Paper elevation={5} className='amino-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
						<List className="product-dialog-list">
							{aminoBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="amino-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
					<div className='amino-dialog-right-div'>
					<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="amino-table-text-headings">Item</TableCell>
										<TableCell></TableCell>
										<TableCell className="amino-table-text-headings">Standard</TableCell>
										<TableCell></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{aminoTable.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="amino-table-text">
												{row.item}
											</TableCell>
											<TableCell className="amino-table-text">{row.standard1}</TableCell>
											<TableCell className="amino-table-text">{row.standard2}</TableCell>
											<TableCell className="amino-table-text">{row.standard3}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>

					</div>
				</div>
			</Dialog>
			<Dialog open={modals[1]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">

				<div className='product-dialog-container '>
					<div className='amino-dialog-left-div '>
						<img
							className='product-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1606228744/Amino_acid_granules_1_toh9d0.jpg'
							alt='amino granules'
						/>
						<Paper elevation={5} className='amino-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
						<List className="product-dialog-list">
							{aminoBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="amino-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
					<div className='amino-dialog-right-div'>
					<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="amino-table-text-headings">Item</TableCell>
										<TableCell></TableCell>
										<TableCell className="amino-table-text-headings">Standard</TableCell>
										<TableCell></TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{aminoTable.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="amino-table-text">
												{row.item}
											</TableCell>
											<TableCell className="amino-table-text">{row.standard1}</TableCell>
											<TableCell className="amino-table-text">{row.standard2}</TableCell>
											<TableCell className="amino-table-text">{row.standard3}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>

					</div>
				</div>
			</Dialog>
			<Dialog open={modals[2]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">

				<div className='product-dialog-container '>
					<div className='amino-dialog-left-div'>
					<Carousel className="amino-carousel" interval={4000}>
                            <div>
                                <img
                                    className='slide-container'
                                    src="https://res.cloudinary.com/maximuscloud/image/upload/v1606228765/Fulvic_acid_POWDER_ztefpl.jpg"
                                    style={{
                                        width:"100%",
                                        margin: "0 auto",
                                        height: "45vh",
                                    }}
                                />
                                
                                <div className='amino-slide-info'>
                                    <h2>Amino Acid Powder</h2>
                                </div>
                            </div>
                            <div>
                                    <img
                                    className='slide-container'
                                    src="https://res.cloudinary.com/maximuscloud/image/upload/v1606228908/Fulvic_acid_flakes_cjklhl.jpg"
                                    style={{
                                        width:"100%",
                                        margin: "0 auto",
                                        height: "45vh",
                                    }}
                                />
                                    <div className='amino-slide-info'>
                                        <h2>Amino Acid Flakes</h2>
                                    </div>
                                
                            </div>
						</Carousel>
						<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="amino-table-text-headings">Item</TableCell>
										<TableCell className="amino-table-text-headings">Standard</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{fulvicTable.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="amino-table-text">
												{row.item}
											</TableCell>
											<TableCell className="amino-table-text">{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
						
						
					</div>
					<div className='amino-dialog-left-div'>
					<Paper elevation={5} className='amino-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
					<List className="product-dialog-list">
							{fulvicBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color: "#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="amino-list-text-big"></ListItemText>
								</ListItem>
							))}
						</List>
					

					</div>
				</div>
			</Dialog>
		</div>
	);
}

export default Amino;
