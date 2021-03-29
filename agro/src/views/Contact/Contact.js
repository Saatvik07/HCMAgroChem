import React, { useState, useEffect } from "react";


import "./Contact.css";
import {
	ListItemIcon,
	ListItemText,
	List,
	ListItem,
	TextField,
	InputAdornment,
	Button,
	CircularProgress,
	IconButton,
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import PinDropIcon from "@material-ui/icons/PinDrop";
import BusinessIcon from "@material-ui/icons/Business";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ModeCommentIcon from "@material-ui/icons/ModeComment";
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import NavBar from "../NavBar/NavBar";
import { sendQuery } from "../../utils/helpers";
function Contact() {
	const [email,setEmail] = useState("");
	const [name,setName] = useState("");
	const [query, setQuery] = useState("");
	const [mailLoader, setMailLoader] = useState(false);
	const [prompt, setPrompt] = useState(null);
	const [loading, setLoading] = useState(true);
	useEffect(()=>{
		if(!loading){
			document.getElementById("loader").style.display="none";
			document.querySelector(".contact-container").classList.remove("not-loaded");
			setLoading(true);
		}
	})
	const handleSend = async()=>{
		if(query===""||name===""||email===""){
			setPrompt(<div className="prompt-alert animate__animated animate__headShake">
						<h3>All the fields are required, please fill out all of them</h3>
						<IconButton onClick={()=>{
							setPrompt(null);
						}}>
							<HighlightOffIcon className="closePrompt-button"/>
						</IconButton>
					</div>);
		}
		else{
			setMailLoader(true);
			// emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
			// .then((result) => {
			// 	console.log(result.text);
			// }, (error) => {
			// 	console.log(error.text);
			// })
			sendQuery(name,email,query).then(result=>{
				if(result==="message sent"){
					setMailLoader(false);
					setPrompt(<div className="prompt-success animate__animated animate__fadeIn">
						<h3>Query received by us, please check your email for confirmation</h3>
						<IconButton onClick={()=>{
							setPrompt(null);
						}}>
							<HighlightOffIcon className="closePrompt-button"/>
						</IconButton>
					</div>);
				}
				else if(result==="not sent"){
					setMailLoader(false);
					setPrompt(<div className="prompt-alert animate__animated animate__headShake">
						<h3>Sorry there was some issue sending your message, try again later or try using another email address</h3>
						<IconButton onClick={()=>{
							setPrompt(null);
						}}>
							<HighlightOffIcon className="closePrompt-button"/>
						</IconButton>
					</div>);
				}
				setName("");
				setEmail("");
				setQuery("");
			});
		}
		
		
		
	}
	return (
		<div style={{textAlign:"center"}}>
			<div className='contact-container  not-loaded animate__animated animate__fadeIn'>
				<div className='contact-hero animate__animated animate__fadeIn'>
					<NavBar />
					<div className='contact-hero-overlay '>
						
						<div className='contact-hero-info'>
							<h1>Contact Us</h1>
						</div>
					</div>
				</div>
				<div className='contact-main-container'>
					<div className='contact-main-left animate__animated animate__fadeIn'>
						<h2>Get in Touch</h2>

						<List className='get-in-touch-list'>
							<ListItem>
								<ListItemIcon>
									<PinDropIcon style={{ color: "#DAD7CD" }} />
								</ListItemIcon>
								<ListItemText primary='Regd. Office: RR -29, 1st Floor, Mainwali Nagar, New Delhi - 110087'></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<BusinessIcon style={{ color: "#DAD7CD" }} />
								</ListItemIcon>
								<ListItemText primary='Unit-1: 1/18, Kirari Road, Near Bhalla Factory, Nangloi, New Delhi-110041'></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<BusinessIcon style={{ color: "#DAD7CD" }} />
								</ListItemIcon>
								<ListItemText primary='Unit-2: 5 K.M. Stone, Beri Dighal Road, Sampla, Distt-Rohtak, Haryana-124501'></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<CallIcon style={{ color: "#DAD7CD" }} />
								</ListItemIcon>
								<ListItemText primary='Tel:011-25267064, 011-40192472'></ListItemText>
							</ListItem>
							<ListItem>
								<ListItemIcon>
									<MailIcon style={{ color: "#DAD7CD" }} />
								</ListItemIcon>
								<ListItemText primary='Email: info@hcmagroproducts.com'></ListItemText>
							</ListItem>
						</List>
						<div className="contact-social-container">
									<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101143/output-onlinepngtools_15_ddd6ej.png" alt="facebook" className="footer-social-icon"/>
									<img src="https://res.cloudinary.com/maximuscloud/image/upload/v1604101143/output-onlinepngtools_14_rcfpvw.png" alt="instagram" className="footer-social-icon"/>
						</div>
					</div>
					<div className='contact-main-right animate__animated animate__fadeIn'>
						<h2>Want to hear from us ?</h2>
						<h5>Write to us and expect a reply within two working days :)</h5>
						<div className='contact-input-container'>
							<List>
								<ListItem>
									<TextField
										label='Name'
										variant='outlined'
										className='contact-input'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<AccountCircle style={{ color: "#DAD7CD" }} />
												</InputAdornment>
											),
										}}
										onChange= {(event)=>{
											setName(event.target.value);
										}}
									/>
								</ListItem>
								<ListItem>
									<TextField
										
										label='Email'
										variant='outlined'
										className='contact-input'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<MailIcon style={{ color: "#DAD7CD" }} />
												</InputAdornment>
											),
										}}
										onChange= {(event)=>{
											setEmail(event.target.value);
										}}
									/>
								</ListItem>
							</List>
							<List>
								<ListItem>
									<TextField
										label='Query/Comment'
										variant='outlined'
										multiline
										rows={5}
										className='contact-input'
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>
													<ModeCommentIcon style={{ color: "#DAD7CD" }} />
												</InputAdornment>
											),
										}}
										onChange= {(event)=>{
											setQuery(event.target.value);
										}}
									/>
								</ListItem>
							</List>
						</div>
						{mailLoader ? <CircularProgress className="contact-sendBtn"/> : <Button variant='outline' className='contact-sendBtn' onClick={handleSend}>Send a Message</Button>}
						
					</div>
				</div>
				{prompt}
				<iframe
					title='map'
					src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.311571363517!2d77.08296015073024!3d28.680324982312612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0414a7999a27%3A0x1011012beb136944!2sHcm%20Agro%20Products%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1600995850294!5m2!1sen!2sin'
					className='contact-map animate__animated animate__fadeIn'
					onLoad= {()=>{
						setLoading(false);
					}}
				></iframe>
			</div>
			<CircularProgress id="loader" style={{height:"200px", width:"200px",color:"#3a5a40", marginTop:"50px"}}/>
		</div>
	);
}

export default Contact;
