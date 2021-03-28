import React from 'react'
import StarBorder from "@material-ui/icons/StarBorder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
	Paper,
	List,
	ListItem,
	ListItemIcon,
    ListItemText,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from "@material-ui/core";
import "./ZincEDTA.css";
import NavBar from "../../NavBar/NavBar";
const zincBenefits = [
    "Chelated Zinc EDTA fertilizer is compatible with other fertilizers and nutrients and is ideal for maintenance application before deficiency appears.",
    "Chelated Zinc EDTA is highly efficient and available to support plant growth, resulting in higher yields. This fertilizer can be used from seedlings to the mid-season application which can be done through irrigation or foliar sprays.",
    "In addition to being highly water soluble, Chelated Zinc EDTA holds onto trace elements thus preventing precipitation with other components. This ensures adequate absorption by leaves, roots, and plants tissue with a broad compatibility.",
    "It is compatible and useful in a wide range of crop field, but it is best for hydroponic agriculture. While Chelated Zinc EDTA can be used for a number of growing methods, if you are growing hydroponically, Chelated Zinc EDTA is the most effective zinc fertilizer.",
];
const zincChemBenefits = [
    "It has highly and fully chelated zinc elements",
    "It contains organic substance with a minimum salt index",
    "Contains highly and readily available nutrients",
];
const zincExtendedBenefits = [
    "Is quickly taken in by plants since it requires low energy to absorb the nutrient",
    "Is highly compatible with nutrients and other fungicides",
    "Can be used both in hydroponics agriculture and for soil application",
    "Chelated Zinc EDTA can be safely applied by spraying, as a liquid fertilizer, as a side dressing or through irrigation delivery systems. You can be assured that the nutrients will last long after binding with EDTA chelate."
]
function ZincEDTA() {
    return (
        <div className='zincEDTA-container'>
			<div className='zincEDTA-hero animate__animated animate__fadeIn'>
			<NavBar />
				<div className='zincEDTA-hero-overlay '>
					<div className='zincEDTA-hero-info'>
						<h1>Zinc-EDTA Series</h1>
					</div>
				</div>
			</div>
			<div className='zincEDTA-card-container'>
				<div className='zincEDTA-modal-container animate__animated animate__fadeIn'>
					<div className='zincEDTA-modal-left-div '>
						<img
							className='zincEDTA-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1606231203/zinc_tabs_sn7sns.jpg'
							alt='Zinc EDTA'
						/>
						<Accordion className="zincEDTA-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: "#dad7cd"}}/>}
                            >
                                <Typography>Other Features</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <List>
                                    {zincChemBenefits.map((benefit) => (
                                        <ListItem>
                                            <ListItemIcon style={{color: "#dad7cd"}}>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary={benefit} className="zincEDTA-accordion-list-text"></ListItemText>
                                        </ListItem>
                                    ))}
                            </List>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="zincEDTA-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: "#dad7cd"}}/>}
                            >
                            <Typography>Extended Benefits</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <List>
                                    {zincExtendedBenefits.map((benefit) => (
                                        <ListItem>
                                            <ListItemIcon style={{color: "#dad7cd"}}>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary={benefit} className="zincEDTA-accordion-list-text"></ListItemText>
                                        </ListItem>
                                    ))}
                            </List>
                            </AccordionDetails>
                        </Accordion>
					</div>
					<div className='zincEDTA-modal-right-div'>
                        <Paper elevation={5} className='zincEDTA-modal-heading'>
							<h2>Benefits</h2>
						</Paper>
						<List>
							{zincBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color: "#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="zincEDTA-list-text"></ListItemText>
								</ListItem>
							))}
						</List>

                        
					</div>
				</div>
			</div>
		</div>
    )
}

export default ZincEDTA
