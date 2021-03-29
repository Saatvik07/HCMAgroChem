import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route, Link, useHistory } from "react-router-dom";
import Home from "../Home/Home";
import Products from "../Products/Products";
import About from "../About/About";
import Amino from "../Products/Amino/Amino";
import Humates from "../Products/Humates/Humates";
import {
	Button,
	TableBody,
	TableCell,
	TableHead,
	Table,
	TableRow,
	ListItem,
	ListItemIcon,
	ListItemText,
	TextField,
	useMediaQuery,
	CircularProgress,
	IconButton,
} from "@material-ui/core";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Manure from "../Products/Manure/Manure";
import EmailIcon from "@material-ui/icons/Email";
import Contact from "../Contact/Contact";
import Xanthan from "../Products/Xanthan/Xanthan";
import Silicon from "../Products/Silicon/Silicon";
import Silica from "../Products/Silica/Silica";
import ScrollTop from "../../utils/ScrollTop";
import {sendCatalogue} from "../../utils/helpers";
import Seaweed from "../Products/Seaweed/Seaweed";
import Zinc from "../Products/Zinc/Zinc";
import PVA from "../Products/PVA/PVA";
import ZincEDTA from "../Products/ZincEDTA/ZincEDTA";
import 'primereact/resources/themes/saga-green/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
function App() {
	const [email, setEmail] = useState("");
	const [mailLoader, setMailLoader] = useState(false);
	const [prompt, setPrompt] = useState(null);
	const matches = useMediaQuery("(max-width:1250px)");
	const handleSendClick = () =>{
		setMailLoader(true);
		setPrompt(<div style={{background:"linear-gradient(90deg, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%)", display:"flex", justifyContent:"space-evenly", alignItems:"center",padding:"20px",color:"#DAD7CD", maxWidth:"100vw"}} className="animate__animated animate__fadeIn">
		<h3>Hang in there, sending the catalog might take a minute or two due to the size of PDF file</h3>
		<IconButton onClick={()=>{
			setPrompt(null);
		}}>
			<HighlightOffIcon className="closePrompt-button"/>
		</IconButton>
	</div>);
		window.scrollBy(0,-120);
		sendCatalogue(email).then(result=>{
			if(result==="Not sent"){
				setMailLoader(false);
				setPrompt(<div style={{background:"linear-gradient(90deg, hsla(52, 82%, 52%, 1) 0%, hsla(1, 92%, 47%, 1) 100%)", display:"flex", justifyContent:"space-evenly", alignItems:"center",padding:"20px",color:"#DAD7CD", maxWidth:"100vw"}} className="animate__animated animate__headShake">
				<h3>Sorry there was an issue, please try again later or with some other email address</h3>
				<IconButton onClick={()=>{
					setPrompt(null);
				}}>
					<HighlightOffIcon className="closePrompt-button"/>
				</IconButton>
			</div>);
				window.scrollBy(0,-120);
			}
			else if(result==="Catalog sent"){
				setMailLoader(false);
				setPrompt(<div style={{background:"linear-gradient(90deg,hsla(140, 73%, 36%, 1) 0%,hsla(152, 85%, 50%, 1) 100%)", display:"flex", justifyContent:"space-evenly", alignItems:"center",padding:"20px",color:"#DAD7CD", maxWidth:"100vw"}} className="animate__animated animate__fadeIn">
				<h3>Successfully sent, please check your email for confirmation</h3>
				<IconButton onClick={()=>{
					setPrompt(null);
				}}>
					<HighlightOffIcon className="closePrompt-button"/>
				</IconButton>
				</div>);
				window.scrollBy(0,-120);
			}
		});
		
	}
	useEffect(()=>{
		setPrompt(null);
	},[])
	return (
		<div className={matches ? "content-footer-phone" : "content-footer"}>
			<BrowserRouter>
				<ScrollTop/>
				<div className='content'>
					<Switch>
						<Route exact path='/' component={Home}></Route>
						<Route exact path='/about' component={About}></Route>
						<Route path='/products' component={Products}></Route>
						<Route path='/manure' component={Manure}></Route>
						<Route path='/xanthan' component={Xanthan}></Route>
						<Route path='/silicon' component={Silicon}></Route>
						<Route path='/contact' component={Contact}></Route>
						<Route path = "/amino" component={Amino}></Route>
						<Route path="/humate" component={Humates}></Route>
						<Route path="/seaweed" component={Seaweed}></Route>
						<Route path="/zinc-oxide" component={Zinc}></Route>
						<Route path="/pva" component={PVA}></Route>
						<Route path="/zinc-edta" component={ZincEDTA}></Route>
						<Route path="/silica" component={Silica}></Route>
					</Switch>
				</div>
				{matches ? (
					<>
						<footer>
							<div className='footer-container-phone' style={{marginTop:"30px"}}>
								<div className='footer-left-phone'>
									<div className='footer-left-table'>
										<Table className="footer-left-table-container">
											<TableHead>
												<TableRow>
													<TableCell className='footer-tableCell' colSpan={2}>
														<ListItem className='footer-table-listItem'>
															
															<ListItemText
																primary='Quick Links'
																className='footer-link'
															></ListItemText>
														</ListItem>
													</TableCell>
												</TableRow>
											</TableHead>
											<TableBody>
												<TableRow>
													<TableCell className='footer-tableCell'>
														<Link to='/' className='router-link'>
															<ListItem className='footer-table-listItem'>
																<ListItemText primary='Home' className='footer-link'></ListItemText>
															</ListItem>
														</Link>
													</TableCell>
													<TableCell className='footer-tableCell'>
														<Link to='/about' className='router-link'>
															<ListItem className='footer-table-listItem'>
																
																<ListItemText
																	primary='About Us'
																	className='footer-link'
																></ListItemText>
															</ListItem>
														</Link>
													</TableCell>
												</TableRow>
											</TableBody>
										</Table>
										<div className="footer-center-left-bottom-phone">
											<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101143/output-onlinepngtools_15_ddd6ej.png" alt="facebook" className="footer-social-icon-phone"/>
											<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101143/output-onlinepngtools_14_rcfpvw.png" alt="instagram" className="footer-social-icon-phone"/>
											<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1606176122/output-onlinepngtools_18_vvdvub.png" alt="mail" className="footer-social-icon-phone"/>
										</div>
									</div>
									
								</div>
								<div className='footer-right-phone'>
								<div className="footer-left-email-iconbar" style={{width:"65%",margin:"0px auto 10px auto"}}>
											<EmailIcon style={{ color: "#DAD7CD", marginRight:"10px"}} />
											<ListItemText primary='Get the Catalogue' className='get-catalogue-label' />
										</div>
										<TextField
											className='footer-input phone'
											variant='outlined'
											label='Email'
											onChange={(event) => {
												setEmail(event.target.value);
											}}
										/>
										{mailLoader? <CircularProgress className="footer-sendBtn"/> :<Button variant='outlined' className='footer-sendBtn' onClick={handleSendClick}>
											Send
										</Button>}
									
								</div>
							</div>
							<div className='footer-bottom'>
								<Link to="/">
									<img
										src='https://res.cloudinary.com/maximuscloud/image/upload/v1604101145/output-onlinepngtools_16_k5noco.png'
										alt='logo'
										className='footer-logo-phone'
										
									></img>
								</Link>
								<h5>© 2020 HCM Agro Products Pvt Ltd. All Rights Reserved.</h5>
							</div>
						</footer>
					</>
				) : (
					<>
						<footer>
							<div className='footer-container'>
								<div className='footer-left'>
									<Link to="/">
										<img
											src='https://res.cloudinary.com/maximuscloud/image/upload/v1604101145/output-onlinepngtools_16_k5noco.png'
											alt='logo'
											className='footer-logo'
											
										></img>
									</Link>	
									<h5>© 2020 HCM Agro Products Pvt Ltd. All Rights Reserved.</h5>
								</div>
								<div className='footer-center'>
									<div className='footer-center-left'>
										<div className="footer-center-left-top">
											<Table>
												<TableHead>
													<TableRow>
														<TableCell className='footer-tableCell'>
															<ListItem className='footer-table-listItem'>
																
																<ListItemText
																	primary='Quick Links'
																	className='footer-link'
																></ListItemText>
															</ListItem>
														</TableCell>
													</TableRow>
												</TableHead>
												<TableBody>
													<TableRow>
														<TableCell className='footer-tableCell'>
															<Link to='/' className='router-link'>
																<ListItem className='footer-table-listItem'>
																	
																	<ListItemText primary='Home' className='footer-link'></ListItemText>
																</ListItem>
															</Link>
														</TableCell>
														<TableCell className='footer-tableCell'>
															<Link to='/about' className='router-link'>
																<ListItem className='footer-table-listItem'>
																	
																	<ListItemText
																		primary='About Us'
																		className='footer-link'
																	></ListItemText>
																</ListItem>
															</Link>
														</TableCell>
													</TableRow>
													
												</TableBody>
											</Table>
										</div>
										<div className="footer-center-left-bottom">
											<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101143/output-onlinepngtools_15_ddd6ej.png" alt="facebook" className="footer-social-icon"/>
											<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101143/output-onlinepngtools_14_rcfpvw.png" alt="instagram" className="footer-social-icon"/>
											<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1606176122/output-onlinepngtools_18_vvdvub.png" alt="mail" className="footer-social-icon"/>
										</div>
									</div>
										
									
								</div>
								<div className='footer-right'>
									<ListItem style={{width:"60%",margin:"0px auto"}}>
										<ListItemIcon>
											<EmailIcon style={{ color: "#DAD7CD" }} />
										</ListItemIcon>
										<ListItemText primary='Get the Catalogue' />
									</ListItem>

									<TextField
										className='footer-input'
										variant='outlined'
										label='Email'
										onChange={(event) => {
											setEmail(event.target.value);
										}}
									/>
									{mailLoader? <CircularProgress className="footer-sendBtn"/> :<Button variant='outlined' className='footer-sendBtn' onClick={handleSendClick}>
										Send
									</Button>}
								</div>
							</div>
						</footer>
						
					</>
				)}
				{prompt}
			</BrowserRouter>
		</div>
	);
}

export default App;
//Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>