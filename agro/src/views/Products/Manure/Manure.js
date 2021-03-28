import React from "react";
import StarBorder from "@material-ui/icons/StarBorder";
import {
	TableContainer,
	TableHead,
	TableCell,
	TableRow,
	Table,
	TableBody,
	Paper,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
} from "@material-ui/core";
import "./Manure.css";
import NavBar from "../../NavBar/NavBar";

const product1 = [
	{ item: "Moisture % by wt.Max", standard: "25.0" },
	{ item: "Total organic carbon % by wt. Min.", standard: "14.0" },
	{ item: "Total N, P2O5, K2O nutrient should not be less than 3%", standard: ">3%" },
];
const product1Benefits = [
	"Very Cost effective.",
	"Supplies organic carbon to soil.",
	"Improves quality of crop.",
	"Suitable for all crops, plants, vegetables and fruit trees.",
	"Absorbs nitrogen from atmosphere.",
	"Easy to spread and absorb.",
	"Eco friendly and non-toxic.",
	"100% Organic from natural agro mineral source.",
	"Strengthens roots system of plants.",
	"Improve soil quality by adding organic carbon.",
];
function Manure() {
	return (
		<div className='manure-container'>
			<div className='manure-hero animate__animated animate__fadeIn'>
			<NavBar />
				<div className='manure-hero-overlay '>
					
					<div className='manure-hero-info'>
						<h1>Organic Manure</h1>
					</div>
				</div>
			</div>
			<div className='manure-card-container'>
				<div className='manure-modal-container animate__animated animate__fadeIn'>
					<div className='manure-modal-left-div '>
						<img
							className='manure-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1600566657/WhatsApp_Image_2020-09-18_at_22.32.15_bhx166.jpg'
							alt='Organic Manure'
						/>
						<TableContainer className='manure-modal-table-container'>
							<Table className='manure-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="manure-table-text-headings">Item</TableCell>
										<TableCell className="manure-table-text-headings">Standard</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{product1.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="manure-table-text">
												{row.item}
											</TableCell>
											<TableCell className="manure-table-text">{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
					<div className='manure-modal-right-div'>
						<Paper elevation={5} className='manure-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
						<List>
							{product1Benefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color: "#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="manure-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Manure;
