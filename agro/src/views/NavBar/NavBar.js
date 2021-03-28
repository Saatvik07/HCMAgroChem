import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
	ClickAwayListener,
	Tooltip,
	withStyles,
	IconButton,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	useMediaQuery,
	Menu,
	MenuItem,
	Drawer
} from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
const CustomTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: "#3a5a40",
		color: "#dad7cd",
		maxWidth: 220,
		fontSize: theme.typography.pxToRem(14),
	},
}))(Tooltip);
function NavBar() {
	const [callTool, setCallTool] = useState(false);
	const [mailTool, setMailTool] = useState(false);
	const [menu, setMenu] = useState(false);

	const handleClick = () => {
		setMenu(true);
	};

	const handleClose = () => {
		setMenu(false);
	};
	const matches = useMediaQuery("(max-width:1075px)");
	return (
		<div className='navBar'>
			{matches ? (
				<>
					<div className='navBar-left'>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1604101145/output-onlinepngtools_16_k5noco.png'
							alt='logo'
							className='navBar-logo-phone'
						></img>
						<MenuIcon onClick={handleClick} />
						<Drawer anchor="top" open={menu} onClose={handleClose} className="menu-drawer">
							<List>
								<ListItem>
									<Link to='/' className='router-link'>
										<h3 className='navBar-link'>Home</h3>
									</Link>
								</ListItem>
							</List>
							<List>
								<ListItem>
									<Link to='/about' className='router-link'>
										<h3 className='navBar-link'>About Us</h3>
									</Link>
								</ListItem>
							</List>
							<List>
								<ListItem>
									<Link to='/products' className='router-link'>
										<h3 className='navBar-link'>Products</h3>
									</Link>
								</ListItem>
							</List>
							<List>
								<ListItem>
									<Link to='/contact' className='router-link'>
										<h3 className='navBar-link'>Contact Us</h3>
									</Link>
								</ListItem>
							</List>
						</Drawer>
					</div>
					<div className='navBar-right-phone'>
						<ClickAwayListener
							onClickAway={() => {
								setCallTool(false);
							}}
						>
							<CustomTooltip
								title={
									<p>
										011-25267064
										<br />
										011-40192472
									</p>
								}
								onClose={() => {
									setCallTool(false);
								}}
								open={callTool}
								disableFocusListener
								disableTouchListener
								disableHoverListener
								placement='bottom'
							>
								<IconButton
									aria-label='call us'
									className='contact-btn-phone'
									onClick={() => {
										if (callTool) {
											setCallTool(false);
										} else {
											setCallTool(true);
										}
									}}
								>
									<CallIcon />
								</IconButton>
							</CustomTooltip>
						</ClickAwayListener>
						<ClickAwayListener
							onClickAway={() => {
								setMailTool(false);
							}}
						>
							<CustomTooltip
								title='info@hcmagroproducts.com'
								onClose={() => {
									setMailTool(false);
								}}
								open={mailTool}
								disableFocusListener
								disableTouchListener
								disableHoverListener
								placement='right'
							>
								<IconButton
									aria-label='mail us'
									className='contact-btn-phone'
									onClick={() => {
										if (mailTool) {
											setMailTool(false);
										} else {
											setMailTool(true);
										}
									}}
								>
									<MailIcon />
								</IconButton>
							</CustomTooltip>
						</ClickAwayListener>
					</div>
				</>
			) : (
				<>
					<div className='navBar-left'>
						<img
							src='https://res.cloudinary.com/maximuscloud/image/upload/v1604101145/output-onlinepngtools_16_k5noco.png'
							alt='logo'
							className='navBar-logo'
						></img>

						<Link to='/' className='router-link'>
							<h3 className='navBar-link'>Home</h3>
						</Link>
						<Link to='/about' className='router-link'>
							<h3 className='navBar-link'>About Us</h3>
						</Link>
						<Link to='/products' className='router-link'>
							<h3 className='navBar-link'>Products</h3>
						</Link>
						<Link to='/contact' className='router-link'>
							<h3 className='navBar-link'>Contact Us</h3>
						</Link>
					</div>
					<div className='navBar-right'>
						<ClickAwayListener
							onClickAway={() => {
								setCallTool(false);
							}}
						>
							<CustomTooltip
								title={
									<p>
										011-25267064
										<br />
										011-40192472
									</p>
								}
								onClose={() => {
									setCallTool(false);
								}}
								open={callTool}
								disableFocusListener
								disableTouchListener
								disableHoverListener
								placement='bottom'
							>
								<IconButton
									aria-label='call us'
									className='contact-btn'
									onClick={() => {
										if (callTool) {
											setCallTool(false);
										} else {
											setCallTool(true);
										}
									}}
								>
									<CallIcon />
								</IconButton>
							</CustomTooltip>
						</ClickAwayListener>
						<ClickAwayListener
							onClickAway={() => {
								setMailTool(false);
							}}
						>
							<CustomTooltip
								title='info@hcmagroproducts.com'
								onClose={() => {
									setMailTool(false);
								}}
								open={mailTool}
								disableFocusListener
								disableTouchListener
								disableHoverListener
								placement='right'
							>
								<IconButton
									aria-label='mail us'
									className='contact-btn'
									onClick={() => {
										if (mailTool) {
											setMailTool(false);
										} else {
											setMailTool(true);
										}
									}}
								>
									<MailIcon />
								</IconButton>
							</CustomTooltip>
						</ClickAwayListener>
					</div>
				</>
			)}
		</div>
	);
}

export default NavBar;
