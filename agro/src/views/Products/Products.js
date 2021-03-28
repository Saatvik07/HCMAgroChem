import React, { useState, useEffect} from "react";
import "./Products.css";
import {
	IconButton,
	Card,
	CardActionArea,
	Typography,
	CardContent,
	CardActions,
	Button,
	Collapse,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	CircularProgress
} from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import AOS from "aos";
import ArrowForwardOutlinedIcon from "@material-ui/icons/ArrowForwardOutlined";
import { useHistory } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
function Products() {
	const [expandSeaWeed, setExpandSeaWeed] = useState(false);
	const [expandBio, setExpandBio] = useState(false);
	const [expandHumate, setExpandHumate] = useState(false);
	const [expandAmino, setExpandAmino] = useState(false);
	const [expandZinc, setExpandZinc] = useState(false);
	const [expandFilm, setExpandFilm] = useState(false);
	const [expandSilica, setExpandSilica] = useState(false);
	const [expandZincEDTA, setExpandZincEDTA] = useState(false);
	const [loading,setLoading] = useState([false,false,false]);
	useEffect(()=>{
		if(loading[0]==true && loading[1]==true  && loading[2]==true){
			document.getElementById("loader").style.display="none";
			document.querySelector(".product-main-container").classList.remove("not-loaded");
		}
		console.log(loading);
	})
	const history = useHistory();
	useEffect(()=>{
		AOS.init();
	},[])
	return (
		<div className='products-container'>
			<div className="product-main-container not-loaded">
				<div className='products-hero animate__animated animate__fadeIn'>
					<NavBar />
					<div className='products-hero-overlay '>
						<div className='products-hero-info'>
							<h1>Products</h1>
						</div>
					</div>
				</div>
				<div className='products-card-container'>
					<Card className='products-card one animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								history.push("/manure");
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/v1605027376/cover_isnwao.jpg'
								alt='Organic Manure'
								onLoad={()=>{
									setLoading([true,loading[1],loading[2]]);
								}}
							/>
							<CardContent className='products-list-text'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Organic Manure
								</Typography>
								Organic Manure is an eco-friendly fertilizer, which helps in improving the quality &
								fertility of soil and hence make the produce healthy & nutritious. It enriches the
								soil with micro-organisms & restore the depleted nutrients of soil.
							</CardContent>
						</CardActionArea>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/manure");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card two animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								history.push("/xanthan");
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_3456,w_5184/v1605205885/Cover_picture_1_mveai5.jpg'
								alt='Xanthan gum'
								onLoad={()=>{
									setLoading([loading[0],true,loading[2]]);
								}}
							/>
							<CardContent className='products-list-text'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Xanthan Gum
								</Typography>
								Xanthan Gum is a high molecular weight exocellular polysaccharide derived from the
								bacterium Xanthomonas campestris using a natural, aerobic fermentation process, in a
								sterile, controlled environment.
							</CardContent>
						</CardActionArea>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/xanthan");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card three animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								history.push("/silicon");
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_3456,w_5185/v1605206808/pexels-skitterphoto-9311_qwaqkk.jpg'
								alt='Silicon Spreader'
								onLoad={()=>{
									setLoading([loading[0],loading[1],true]);
								}}
							/>
							<CardContent className='products-list-text'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Silicon Spreader
								</Typography>
								Silicon Spreader is a super wetting and agriculture spreading Agent, which have low
								molecular weight nonionic surfactant developed to improve the wetting, spreading and
								penetration of agriculture chemicals.
							</CardContent>
						</CardActionArea>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/silicon");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card one animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								setExpandSeaWeed(!expandSeaWeed);
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/v1605050499/COVER_PICTURE_yrfbvl.jpg'
								alt='seaweed extract'
							/>
							<CardContent className='products-card-info'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Sea Weed Extract
								</Typography>
								Seaweed extracts is a natural concentrate extracted from marine plants which
								demonstrate to possess novel mechanisms for increasing crop productivity.
								<br></br>
								<Button variant='outlined' className='products-card-expand-icon'>
									{expandSeaWeed ? "See Less" : "See More"}
								</Button>
							</CardContent>
						</CardActionArea>
						<Collapse in={expandSeaWeed} timeout='auto' unmountOnExit style={{ zIndex: 200 }}>
							<CardContent>
								<List>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Seaweed Extract Granules' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Seaweed Extract Powder' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Seaweed Extract Flakes' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Seaweed Extract Gel' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Green Seaweed Extract' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Brown Seaweed Extract' className='products-list-text' />
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/seaweed");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card two animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								setExpandBio(!expandBio);
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/v1606226784/pexels-markus-spiske-965740_jwlmyw.jpg'
								alt='bio fertilizer'
							/>
							<CardContent className='products-card-info'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Bio-Fertilizer
								</Typography>
								Mycorrhizae is a biofertilizer that helps in promotion of plant growth as well as
								providing several other benefits to cultivation of plants.
								<br></br>
								<Button variant='outlined' className='products-card-expand-icon'>
									SEE MORE
								</Button>
							</CardContent>
						</CardActionArea>
						<Collapse in={expandBio} timeout='auto' unmountOnExit>
							<CardContent>
								<List>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Rhizobium Biofertilizer' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Azotobacter Biofertilizer'
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Azospirillum  Biofertilizer'
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='phosphate solubilizing bacteria (PSB)  Biofertilizer'
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Mycorrhizal Biofertilizer '
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Potassium mobilizing Biofertilizer '
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Zinc solubilizing Biofertilizer'
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Acetobacter Biofertilizer '
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Carrier based consortia ' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Liquid consortia' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Phosphate Solubilizing Fungal Biofertilizer'
											className='products-list-text'
										/>
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/category2");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card three animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								setExpandHumate(!expandHumate);
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_3456,w_5184/v1605093672/Cover_Picture_Super_potassium_CRYSTALS_xqc3mz.jpg'
								alt='Humates'
							/>
							<CardContent className='products-card-info'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Humate/Humic Series
								</Typography>
								Humate is a key component in building a living soil. It is used as fertilizer additive
								that contributes naturally in increasing the soil fertility and accelerating plant
								growth.
								<br></br>
								<Button variant='outlined' className='products-card-expand-icon' >
									SEE MORE
								</Button>
							</CardContent>
						</CardActionArea>
						<Collapse in={expandHumate} timeout='auto' unmountOnExit>
							<CardContent>
								<List>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Humic Acid' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Potassium Humate' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Super Potassium Humate' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Boron Humate' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Sodium Humate' className='products-list-text' />
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/humate");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card one animate__animated animate__fadeIn'
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								setExpandAmino(!expandAmino);
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_3456,w_5184/v1605207095/Amino_acid_granules_iuuiao.jpg'
								alt='seaweed extract'
							/>
							<CardContent className='products-card-info'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Amino & Fulvic Acid Series
								</Typography>
								They are bio- organic products which play an important role in the nutrition
								development of the plant and promotes hormonal activity for higher yields
								<br></br>
								<Button variant='outlined' className='products-card-expand-icon'>
									SEE MORE
								</Button>
							</CardContent>
						</CardActionArea>
						<Collapse in={expandAmino} timeout='auto' unmountOnExit>
							<CardContent>
								<List>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Amino Acid Powder' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Amino Acid Granules' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Fulvic Acid' className='products-list-text' />
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/amino");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card two animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								setExpandZinc(!expandZinc);
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/v1606227022/cover_optional_jey52z.jpg'
								alt='zinc oxide powder'
							/>
							<CardContent className='products-card-info'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Zinc Oxide Series
								</Typography>
								In plants, zinc is a key constituent of many enzymes and proteins. It is needed by
								plants in small amounts, but yet crucial to plant development.
								<br></br>
								<Button variant='outlined' className='products-card-expand-icon'>
									SEE MORE
								</Button>
							</CardContent>
						</CardActionArea>
						<Collapse in={expandZinc} timeout='auto' unmountOnExit>
							<CardContent>
								<List>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Zinc Oxide Tablets' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Zinc Oxide Powder' className='products-list-text' />
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/zinc-oxide");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card three animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								setExpandFilm(!expandFilm);
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_3456,w_5184/v1605208615/COVER_1_ldrbvh.jpg'
								alt='water soluble PVA'
							/>
							<CardContent className='products-card-info'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Water Soluble Film
								</Typography>
								PVA film with properties of excellent gas barrier, water-soluble and biodegradable,
								has become one of the most successful eco-friendly materials in recent years.
								<br></br>
								<Button variant='outlined' className='products-card-expand-icon'>
									SEE MORE
								</Button>
							</CardContent>
						</CardActionArea>
						<Collapse in={expandFilm} timeout='auto' unmountOnExit>
							<CardContent>
								<List>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Water soluble film for agriculture'
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Water soluble film for embroidery '
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Water soluble films for laundry '
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Water soluble laundry pods'
											className='products-list-text'
										/>
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText
											primary='Water soluble laundry bags'
											className='products-list-text'
										/>
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/pva");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card one animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								setExpandZincEDTA(!expandZincEDTA);
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/v1606226837/zinc_tabs_COVER_lq8t95.jpg'
								alt='zinc EDTA'
							/>
							<CardContent className='products-card-info'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Zinc-EDTA Series
								</Typography>
								Zinc is an essential micronutrient for plants growth.Because Chelated Zinc is readily available for plants to absorb, it will improve zinc deficiencies faster
								<br></br>
								<Button variant='outlined' className='products-card-expand-icon'>
									SEE MORE
								</Button>
							</CardContent>
						</CardActionArea>
						<Collapse in={expandZincEDTA} timeout='auto' unmountOnExit>
							<CardContent>
								<List>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Zinc-EDTA Tablets' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Zinc-EDTA Powder' className='products-list-text' />
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/zinc-edta");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card two animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								setExpandSilica(!expandSilica);
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/v1606226799/Silica_Tablets_rq88oz.jpg'
								alt='Silica Tablets'
							/>
							<CardContent className='products-card-info'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Silica Series
								</Typography>
								Silicate fertilizer in effervescent form for paddy , upland and grass.
								<br></br>
								<Button variant='outlined' className='products-card-expand-icon'>
									SEE MORE
								</Button>
							</CardContent>
						</CardActionArea>
						<Collapse in={expandSilica} timeout='auto' unmountOnExit>
							<CardContent>
								<List>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Silica Tablets' className='products-list-text' />
									</ListItem>
									<ListItem>
										<ListItemIcon>
											<ChevronRightIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Silica Powder' className='products-list-text' />
									</ListItem>
								</List>
							</CardContent>
						</Collapse>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/silica");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
					<Card className='products-card three animate__animated animate__fadeIn' 
							data-aos-mirror='true'
							data-aos-once='false'>
						<CardActionArea
							onClick={() => {
								history.push("/glass-beads");
							}}
						>
							<img
								className='products-card-image'
								src='https://res.cloudinary.com/maximuscloud/image/upload/c_scale,h_3456,w_5184/v1606226780/IMG_6538_m0wvfc.jpg'
								alt='Glass beads'
							/>
							<CardContent className='products-card-info'>
								<Typography
									gutterBottom
									variant='h5'
									component='h2'
									style={{ marginBottom: "20px", color: "#DAD7CD" }}
								>
									Glass Beads
								</Typography>
								Info not available 
								<br></br>
								<Button variant='outlined' className='products-card-expand-icon'>
									SEE MORE
								</Button>
							</CardContent>
						</CardActionArea>
						<CardActions>
							<div className='products-card-footer'>
								<IconButton
									className='products-card-button'
									onClick={() => {
										history.push("/glass-beads");
									}}
								>
									<ArrowForwardOutlinedIcon />
								</IconButton>
							</div>
						</CardActions>
					</Card>
				</div>
			</div>
			<CircularProgress id="loader" style={{height:"200px", width:"200px",color:"#3a5a40", marginTop:"50px"}}/>
		</div>
	);
}

export default Products;
//Photo by Quang Nguyen Vinh from Pexels
//Photo by John Lambeth from Pexels
