import React, { useState } from "react";
import StarBorder from "@material-ui/icons/StarBorder";
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
import "./PVA.css";
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

const agroBenefits = [
    "The replacement of the use of fragile glass to contain liquid pesticide/ chemical/ detergent effective reduce the transport costs, minimize the leakage risk and resolve the problems of environmental pollution.",
    "Avoid the use of regular plastic bags (non-water-soluble packaging) which generate large amount of chemical residues.",
    "Reduce the chemical pollution caused by pesticide / chemical/detergent residues left in the regular plastic bags and avoid contamination to soil and water.",
    "Greatly reduce the infection from toxic or irritable materials such as pesticide, chemicals and washing and disinfectant",
    "Act as excellent container of oil, fat and other organic solvent.",
    "The fixed weight of bags increase the dosage accuracy and avoid the wastage in packaging.",
];
const agroBenefits2 = [
    "Chemicals used in agriculture are usually highly toxic which cause severe pollution and endanger to our health.",
    "Therefore more and more attention have been paid to the safety of agricultural packaging materials. ",
    " Due to its biodegradability and water solubility, PVA films have been widely used in the packaging of fertilizer and pesticide in recent years.",
];

const embroideryBenefits2 = [
    "For more vivid, elegant and brighter embroidery designs use water soluble PVA film as embroidery underlay.",
    " Water soluble PVA film dissolves completely in cold water and does not negatively effect the pattern on embroidery, but increase the production efficiency and saves the energy.",
];
const embroideryBenefits = [
    "No pollution, non-toxic, fully biodegradable.",
    "It dissolves completely in cold water with no jell or residue. Production efficiency will be increased and energy is saved.",
    "It replaces paper or non-woven fabrics as it does not deform or fade in high temperature.",
];
const cementBenefits = [
    "Dyes, cement additives and enzymes are alkali, acidic and neutral in nature.Commonly used outdoors, cement additives can easily cause harm to the eyes and skin of the operators, if not managed.",
    "To avoid personal harm, operators protect themselves by using a range of protective clothing and accessories.",
    "The mixing operations have become simpler with the use of water soluble films and the additive measures are more precise and accurate",
];
const podsBenefits = [
    "This application hinges on the principle of using Water Soluble Film packaging to deliver unit dosage amounts of liquid detergent products.In Water Soluble Films, active concentrates of liquid detergent ingredients are packed.",
    "Our Water Soluble Film is designed in such a manner, which makes it compatible with the liquid detergent for purposes of packaging, shipping, storage and usage.",
    "The film is compatible with various different compositions of liquid detergents.",
];
const bagsBenefits = [
    "Water Soluble Film laundry bags are used in hospitals to avoid contact with infected clothing and bedding by hospital staff. Dirty items are put into these special bags, which are then placed directly into the washing machine.",
    "Because Water Soluble Films are soluble in water, the bags dissolve and are washed down the drain with the dirty water. Clean clothes are removed from the washing machine at the completion of the washing cycle.",
];
const detergentBenefits = [
    "Water Soluble Film for powdered detergent pouches usually contains powdered ingredients that effectively dissolve in water.",
    "Some products in the market hold concentrated, powdered detergent in one compartment and grease cutter in the other, providing consumers with one product that does the work of multiple products and the convenience of a single unit-dose packet.",
    "WSF is manufactured with highest quality standards which helps in avoiding pinholes while packaging powdered detergents.",
];
function PVA() {
	const [modals, setModals] = useState([false, false, false, false,false,false]);
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
		<div className='pva-container'>
			<div className='pva-hero animate__animated animate__fadeIn'>
			<NavBar />
				<div className='pva-hero-overlay '>
					<div className='pva-hero-info'>
						<h1>Water Soluble PVA Films</h1>
					</div>
				</div>
			</div>
			<div className='pva-card-container'>
				<Card className='pva-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([true, false, false,false,false,false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='Granule Organic pva'
							className='pva-card-image'
						/>
						<CardContent style={{ height: "40%" }} className="pva-card-content">
							<Typography
								gutterBottom
								variant='h6'
								component='h2'
								style={{ marginBottom: "15px", color: "white", }}
							>
								Water Soluble Films for agriculture
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='pva-card-footer-container'>
						<div className='pva-card-footer'>
							<Button
								variant='outlined'
								className='pva-card-button'
								onClick={() => {
									setModals([true, false, false, false,false,false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='pva-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, true, false,false,false,false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566655/WhatsApp_Image_2020-09-18_at_22.32.15_1_fhjpq0.jpg'
							alt='Granule Organic pva'
							className='pva-card-image'
						/>
						<CardContent style={{ height: "40%" }} className="pva-card-content">
							<Typography
								gutterBottom
								variant='h6'
								component='h2'
								style={{ marginBottom: "15px", color: "white" }}
							>
								Water Soluble Films for embroidery
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='pva-card-footer-container'>
						<div className='pva-card-footer'>
							<Button
								variant='outlined'
								className='pva-card-button'
								onClick={() => {
									setModals([false, true, false,false,false,false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
				<Card className='pva-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, false, true, false,false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566656/WhatsApp_Image_2020-09-18_at_22.31.30_x9y8d4.jpg'
							alt='Granule Organic pva'
							className='pva-card-image'
						/>
						<CardContent className="pva-card-content">
							<Typography
								gutterBottom
								variant='h6'
								component='h2'
								style={{ marginBottom: "15px", color: "white" }}
							>
								Water Soluble Films for Cement
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='pva-card-footer-container'>
						<div className='pva-card-footer'>
							<Button
								variant='outlined'
								className='pva-card-button'
								onClick={() => {
									setModals([false, false, true, false,false,false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
                <Card className='pva-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, false, false, true,false,false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566656/WhatsApp_Image_2020-09-18_at_22.31.30_x9y8d4.jpg'
							alt='Granule Organic pva'
							className='pva-card-image'
						/>
						<CardContent className="pva-card-content">
							<Typography
								gutterBottom
								variant='h6'
								component='h2'
								style={{ marginBottom: "15px", color: "white" }}
							>
                                Water Soluble Laundry Pods
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='pva-card-footer-container'>
						<div className='pva-card-footer'>
							<Button
								variant='outlined'
								className='pva-card-button'
								onClick={() => {
									setModals([false, false, false, true,false,false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
                <Card className='pva-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, false, false, false,true,false]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566656/WhatsApp_Image_2020-09-18_at_22.31.30_x9y8d4.jpg'
							alt='Granule Organic pva'
							className='pva-card-image'
						/>
						<CardContent className="pva-card-content">
							<Typography
								gutterBottom
								variant='h6'
								component='h2'
								style={{ marginBottom: "15px", color: "white" }}
							>
                                Water Soluble Laundry Bags
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='pva-card-footer-container'>
						<div className='pva-card-footer'>
							<Button
								variant='outlined'
								className='pva-card-button'
								onClick={() => {
									setModals([false, false, false,false,true,false]);
								}}
							>
								Learn More
							</Button>
						</div>
					</CardActions>
				</Card>
                <Card className='pva-card animate__animated animate__fadeIn'>
					<CardActionArea
						onClick={() => {
							setModals([false, false, false, false,false,true]);
						}}
					>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566656/WhatsApp_Image_2020-09-18_at_22.31.30_x9y8d4.jpg'
							alt='Granule Organic pva'
							className='pva-card-image'
						/>
						<CardContent className="pva-card-content">
							<Typography
								gutterBottom
								variant='h6'
								component='h2'
								style={{ marginBottom: "15px", color: "white" }}
							>
                                Water Soluble Films for Detergents
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className='pva-card-footer-container'>
						<div className='pva-card-footer'>
							<Button
								variant='outlined'
								className='pva-card-button'
								onClick={() => {
									setModals([false, false, false,false,false,true]);
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
					<div className='pva-dialog-left-div '>
						<img
							className='pva-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
                        <List className="product-dialog-list" style={{marginTop:"30px"}}>
							{agroBenefits2.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="pva-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
					<div className='pva-dialog-right-div'>
						<Paper elevation={5} className='pva-modal-heading'>
							<h2>Advantages of water soluble packaging bag</h2>
						</Paper>
						<List className="product-dialog-list">
							{agroBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="pva-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Dialog>
			<Dialog open={modals[1]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<div className='pva-dialog-left-div'>
						<img
							className='pva-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						<List className="product-dialog-list" style={{marginTop:"30px"}}>
							{embroideryBenefits2.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="pva-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
					<div className='pva-dialog-left-div'>
					<Paper elevation={5} className='manure-modal-heading'>
							<h2>Advantages</h2>
						</Paper>
					<List className="product-dialog-list">
							{embroideryBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="pva-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					

					</div>
				</div>
			</Dialog>
			<Dialog open={modals[2]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<div className='pva-dialog-left-div'>
						<img
							className='pva-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						
					</div>
					<div className='pva-dialog-left-div'>
                    <Paper elevation={5} className='manure-modal-heading'>
							<h2>Advantages</h2>
					</Paper>
                    <List className="product-dialog-list">
							{cementBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="pva-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Dialog>
            <Dialog open={modals[3]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<div className='pva-dialog-left-div'>
						<img
							className='pva-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						
					</div>
					<div className='pva-dialog-left-div'>
                    <Paper elevation={5} className='manure-modal-heading'>
							<h2>Advantages</h2>
					</Paper>
                    <List className="product-dialog-list">
							{podsBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="pva-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Dialog>
            <Dialog open={modals[4]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<div className='pva-dialog-left-div'>
						<img
							className='pva-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						
					</div>
					<div className='pva-dialog-left-div'>
                    <Paper elevation={5} className='manure-modal-heading'>
							<h2>Advantages</h2>
					</Paper>
                    <List className="product-dialog-list">
							{bagsBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="pva-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Dialog>
            <Dialog open={modals[5]} onClose={handleClose} scroll="paper" className="product-dialog animate__animated animate__fadeIn" id="dialog">
				<div className='product-dialog-container '>
					<div className='pva-dialog-left-div'>
						<img
							className='pva-dialog-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='product1'
						/>
						
					</div>
					<div className='pva-dialog-left-div'>
                    <Paper elevation={5} className='manure-modal-heading'>
							<h2>Advantages</h2>
					</Paper>
                    <List className="product-dialog-list">
							{detergentBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color:"#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="pva-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</Dialog>
			
		</div>
	);
}

export default PVA;
