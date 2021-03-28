import React from 'react'
import StarBorder from "@material-ui/icons/StarBorder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
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
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography
} from "@material-ui/core";
import "./Zinc.css";
import NavBar from "../../NavBar/NavBar";
const zincTable = [
	{ item: "Formula", standard: "ZnO" },
	{ item: "Molar Mass", standard: "81.38 g/mol" },
    { item: "CAS-Number", standard: "1314-13-2" },
    { item: "Appearance", standard: "White Powder/Tablets" },
];
const zincBenefits = [
	"Zinc oxide is recognized as an essential micronutrient to plants and grains. It can substitute zinc sulphate in most of fertilizers’ formula as a source for the essential element zinc.",
	"It is an Organic Compound formed from Top Dross , Bottom Dross , Pure Raw Ingot, is odorless and is highly soluble in water ",
	"The use of zinc oxide as an inorganic micronutrient fertilizer includes direct application to soils to correct the zinc deficiency, root dipping and seed coating before crop transplant but also as ingredient for foliar applications of zinc.",
];
const zincChemBenefits = [
	"Paper industry: bleaching of mechanical pulp, de-inked pulp and kaolin clay",
	"Textiles: reducing vat dyes (indigo), decolorizing dyes, bleaching fibres, yarn and fabrics",
	"Specialist chemicals: a powerful reducing agent used in the chemical and pharmaceutical industries, metals and antioxidants.",
];
function Zinc() {
    return (
        <div className='zinc-container'>
			<div className='zinc-hero animate__animated animate__fadeIn'>
			<NavBar />
				<div className='zinc-hero-overlay '>
					<div className='zinc-hero-info'>
						<h1>Zinc Oxide Series</h1>
					</div>
				</div>
			</div>
			<div className='zinc-card-container'>
				<div className='zinc-modal-container animate__animated animate__fadeIn'>
					<div className='zinc-modal-left-div '>
						<img
							className='zinc-modal-image'
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1606227022/cover_optional_jey52z.jpg'
							alt='zinc oxide'
						/>
						<TableContainer className='zinc-modal-table-container'>
							<Table className='zinc-modal-table'>
								<TableHead>
									<TableRow>
										<TableCell className="zinc-table-text-headings">Item</TableCell>
										<TableCell className="zinc-table-text-headings">Standard</TableCell>
									</TableRow>
								</TableHead>
								<TableBody>
									{zincTable.map((row) => (
										<TableRow key={row.item}>
											<TableCell component='th' scope='row' className="zinc-table-text">
												{row.item}
											</TableCell>
											<TableCell className="zinc-table-text">{row.standard}</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						</TableContainer>
					</div>
					<div className='zinc-modal-right-div'>
						
						<List>
							{zincBenefits.map((benefit) => (
								<ListItem>
									<ListItemIcon style={{color: "#3a5a40"}}>
										<StarBorder />
									</ListItemIcon>
									<ListItemText primary={benefit} className="zinc-list-text"></ListItemText>
								</ListItem>
							))}
						</List>
                        <Paper elevation={5} className='zinc-modal-heading'>
							<h2>Applications</h2>
						</Paper>
                        <Accordion className="zinc-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: "#dad7cd"}}/>}
                            >
                                <Typography>Fertilizers</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Zinc Oxide acts as a Nutrition for better growth of plants and crops 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="zinc-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: "#dad7cd"}}/>}
                            >
                            <Typography>Pharmaceuticals</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Because of its many useful properties (such as UV absorption, mild antiseptic effects, healing of chapped skin) zinc oxide is used in a wide range of cosmetics and personal care products including makeup, bandages, diapers, nail products, bath soaps and foot powders and also acts as an antiseptic which is added in medicines .
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="zinc-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: "#dad7cd"}}/>}
                            >
                            <Typography>Chemicals and Lubricants</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Because of its many useful properties (such as UV absorption, mild antiseptic effects, healing of chapped skin) zinc oxide is used in a wide range of cosmetics and personal care products including makeup, bandages, diapers, nail products, bath soaps and foot powders and also acts as an antiseptic which is added in medicines .
                                <List>
                                    {zincChemBenefits.map((benefit) => (
                                        <ListItem>
                                            <ListItemIcon style={{color: "#dad7cd"}}>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary={benefit} className="zinc-accordion-list-text"></ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="zinc-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: "#dad7cd"}}/>}
                            >
                            <Typography>Paints and Coating</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Zinc Oxide acts as anti-corrosion agent and avoid Cracking in coatings 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="zinc-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: "#dad7cd"}}/>}
                            >
                            <Typography>Glass and Ceramic Industry</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Zinc Oxide acts as a Fluxing Agent in manufacturing of frits  and tiles.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="zinc-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: "#dad7cd"}}/>}
                            >
                            <Typography>Rubber Products</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Zinc Oxide is used as Activator in Vulcanization process of rubber and it also contribute to the physical properties of the finished rubber product. 
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="zinc-accordion">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon style={{color: "#dad7cd"}}/>}
                            >
                            <Typography>Footwear and Foam</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Zinc Oxide increases durability and acts as an Activator in Vulcanization process of Rubber.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
					</div>
				</div>
			</div>
		</div>
    )
}

export default Zinc
