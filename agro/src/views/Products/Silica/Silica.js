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
import "./Silica.css";
import NavBar from "../../NavBar/NavBar";

const product1 = [
	{ item: "Moisture % by wt.Max", standard: "25.0" },
	{ item: "Total organic carbon % by wt. Min.", standard: "14.0" },
	{ item: "Total N, P2O5, K2O nutrient should not be less than 3%", standard: ">3%" },
];
const product1Benefits = [
    "Throw silicate tablets/ powder into field or put it into water tank for foliar application",
    "The field should be filled with water (over 7 cm height)",
    "Apply silica after 3 to 5 days if the water is filled in dry levee.",
    "Keep in the field with water for about 3 to 5 days after application.",
    "Recommended to apply between tillering and panicle stage.",
];
function Silica() {
	return (
		<div className='silica-container'>
			<div className='silica-hero animate__animated animate__fadeIn'>
			<NavBar />
				<div className='silica-hero-overlay '>
					
					<div className='silica-hero-info'>
						<h1>Silica Series</h1>
					</div>
				</div>
			</div>
			<div className='silica-card-container'>
                    <p>
                        Silica supplies essential silicic acid for crops and is applicable for both fertigation and foliar
                        application. It is easy to apply with minimal dosage ( saves time and labour cost). Increases
                        resistance against disease and pest and prevents lodging by avoiding overgrowth. Thus, increasing
                        yield and quality of rice, crop and grass.
                    </p>
				<div className='silica-modal-container animate__animated animate__fadeIn'>
					<div className='silica-modal-left-div '>
						<img
							className='silica-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1606226799/Silica_Tablets_rq88oz.jpg'
							alt="Silica Series"
						/>
						
					</div>
					<div className='silica-modal-right-div'>
						<Paper elevation={5} className='silica-modal-heading'>
							<h2>How to Apply</h2>
						</Paper>
						<List>
							{product1Benefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color: "#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="silica-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Silica;
