import React from "react";
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

import StarBorder from "@material-ui/icons/StarBorder";
import "./Xanthan.css";
import NavBar from "../../NavBar/NavBar";
const product1 = [
	{ item: "Appearance", standard: "Cream-White" },
	{ item: "Viscosity 1% Solution in 1% KCl", standard: "13200-1800 cps" },
	{ item: "pH 1% Solution", standard: "6.0-8.0" },
	{ item: "Moisture", standard: "Maximum 13%" },
	{ item: "Ash", standard: "Maximum 13%" },
	{ item: "Particle Size", standard: "Min 95% through 200 Mesh" },
	{ item: "V1/V2", standard: "1.02-1.45" },
	{ item: "Pyruvic Acid", standard: "Minimum 1.5%" },
	{ item: "Heavy Metal ", standard: "Max 20 ppm" },
	{ item: "Lead", standard: "Max 2 ppm" },
	{ item: "Arsenic", standard: "Max 3 ppm" },
	{ item: "Ispropyl Alcohol", standard: "Max 500 ppm" },
	{ item: "Sincerity (purity or assay)", standard: "92-108%" },
	{ item: "Total Plate Count", standard: "Not more than 500 cfu/g" },
	{ item: "Yeast/Moulds", standard: "Not more than 500 cfu/g" },
	{ item: "E. Coli", standard: "Absent /25g" },
];
const product1Benefits = [
	"Minimized pumping friction in lime, freshwater and saltwater muds.",
	"Maximized drill bit penetration.",
	"Accelerated drilling rates in low viscosity/high shear conditions.",
	"High viscosity at low concentrations.",
	"Decreased solids buildup in drilling fluids.",
	"Handling high gravel concentrations.",
	"Efficient suspension/solids transport in high viscosity/low shear conditions.",
	"Stabilization of hole-cleaning fluids.",
	"Decreased damage to oil formation.",
];
function Xanthan() {
	return (
		<div className='xanthan-container'>
			<div className='xanthan-hero animate__animated animate__fadeIn'>
			<NavBar />
				<div className='xanthan-hero-overlay '>
					
					<div className='xanthan-hero-info'>
						<h1>Xanthan Gum</h1>
					</div>
				</div>
			</div>
			<div className='xanthan-card-container'>
				<div className='xanthan-modal-container animate__animated animate__fadeIn'>
					<div className='xanthan-modal-left-div '>
						<img
							className='xanthan-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1605206691/Xanthum_Gum_dajnoh.jpg'
							alt='Xanthan Gum'
						/>
						<Paper elevation={5} className='xanthan-modal-heading'>
							<h2>Applications</h2>
						</Paper>
						<List>
							{product1Benefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color: "#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="xanthan-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
					<div className='xanthan-modal-right-div'>
						<TableContainer className='xanthan-modal-table-container'>
							<Table className='xanthan-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="xanthan-table-text-headings">Characteristics</TableCell>
										<TableCell className="xanthan-table-text-headings">Specifications</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{product1.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="xanthan-table-text">
												{row.item}
											</TableCell>
											<TableCell className="xanthan-table-text">{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Xanthan;
