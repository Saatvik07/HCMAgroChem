import React,{useState,useEffect} from 'react'
import "./Seaweed.css";
import SwiperCore, { Navigation, A11y, Autoplay, EffectFlip} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/effect-flip/effect-flip.scss";
import Carousel from 'react-material-ui-carousel';
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
    useMediaQuery,
    CircularProgress
} from "@material-ui/core";
import NavBar from "../../NavBar/NavBar";
SwiperCore.use([Navigation, A11y, Autoplay, EffectFlip]);
const seaweedTable = [
	{ item: "Alginic Acid", standard: "15-19%" },
	{ item: "Nitrogen(N)", standard: "2-5%" },
    { item: "Phosphorous(P2O2)", standard: "2-3%" },
    { item: "Potassium(K2O)", standard: "16-20%" },
    { item: "Organic Matter", standard: "45-55%" },
    { item: "Solubility in water", standard: "100%" },
    { item: "pH", standard: "6-10" },
];
const seaweedBenefits = [
    "Multi-functioning organic fertilizer helps in rejuvenating and composting soil.",
    "Proven supplements to fertilizers.",
    "It is a naturally derived soil conditioner.",
    "Seaweed helps to keep the soil moist thus reducing the need to water.",
    "It helps to grow string, healthy crops and resist fungus and disease.",
    "It doesn’t blow away, seaweed (especially when it is stiff wet) won’t blow away in a stiff wind.",
];
function Seaweed() {
    const [loading,setLoading] = useState([false,false])
    useEffect(()=>{
		// if(loading[0]==true && loading[1]==true){
		// 	document.getElementById("loader").style.display="none";
		// 	document.getElementById("seaweed-container").classList.remove("not-loaded");
		// 	setLoading([false,false]);
        // }
        console.log(loading);
	})
    const matches = useMediaQuery("(max-width:720px)");
    return (
        <div style={{textAlign:"center"}}>
            <div id="seaweed-container" className='seaweed-container'>
                <div className='seaweed-hero animate__animated animate__fadeIn'>
                <NavBar />
                    <div className='seaweed-hero-overlay '>
                        <div className='seaweed-hero-info'>
                            <h1>Seaweed Extract</h1>
                        </div>
                    </div>
                </div>
                {matches?
                    <div className="seaweed-card-container">
                        <div className="seaweed-card-container-left">
                            <div style={{backgroundImage:"url(https://res.cloudinary.com/maximuscloud/image/upload/v1605050728/Seaweed_granules_yhjcmy.jpg)",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize: "cover", width:"80%", height:"40vh", display:"flex",alignItems:"flex-end",margin:"20px auto"}}>
                                <div className='seaweed-slide-info'>
                                    <h1>
                                        Seaweed Granules
                                    </h1>
                                </div>
                            </div>
                                <TableContainer className='seaweed-table-container'>
                                <Table className='seaweed-table'>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell className="seaweed-table-text-headings">Item</TableCell>
                                            <TableCell className="seaweed-table-text-headings">Standard</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {seaweedTable.map((row) => (
                                            <TableRow key={row.item}>
                                                <TableCell component='th' scope='row' className="seaweed-table-text">
                                                    {row.item}
                                                </TableCell>
                                                <TableCell  className="seaweed-table-text">{row.standard}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                        <div className="seaweed-card-container-right">
                            <Paper elevation={5} className='seaweed-heading'>
                                    <h2>Benefits</h2>
                                </Paper>
                                <List>
                                    {seaweedBenefits.map((benefit) => (
                                        <ListItem>
                                            <ListItemIcon style={{color:"#3a5a40"}}>
                                                <StarBorder />
                                            </ListItemIcon>
                                            <ListItemText primary={benefit} className="seaweed-list-text"></ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                                <Swiper
                            slidesPerView={1}
                            navigation
                            tag='ul'
                            effect='flip'
                            id='first'
                            className='animate__animated animate__fadeIn seaweed-swiper-container'
                            autoplay={{
                                delay: "3000",
                                stopOnLastSlide: false,
                                disableOnInteraction: false,
                            }}
                            onLoad={()=>{
                                setLoading([loading[0],true]);
                            }}
                            
                        >
                    <SwiperSlide tag='li'>
                        <div
                            className='slide-container'
                            style={{
                                width:"100%",
                                margin: "0 auto",
                                display:"flex",
                                flexDirection:"column",
                                justifyContent: "flex-end",
                                backgroundImage:
                                    "url(https://res.cloudinary.com/maximuscloud/image/upload/v1605050733/Seaweed_Powder_gjty5r.jpg)",
                            }}
                            
                        >
                            
                                <div className='seaweed-slide-info'>
                                    <h1>
                                        Seaweed Powder
                                    </h1>
                                </div>
                            
                        </div>
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <div style={{display:"flex",flexDirection:"column"}}>
                            <img
                                className='slide-container'
                                src='https://res.cloudinary.com/maximuscloud/image/upload/v1605050746/seaweed_flakess_zkivqb.jpg'
                                style={{
                                    width:"100%",
                                    margin: "0 auto",
                                }}
                            />
                            <div className='seaweed-slide-info'>
                                <h1>Seaweed Flakes</h1>
                            </div>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide tag='li'>
                        <div
                            className='slide-container'
                            style={{
                                width:"100%",
                                margin: "0 auto",
                                display:"flex",
                                flexDirection:"column",
                                justifyContent: "flex-end",
                                backgroundImage:
                                    "url(https://res.cloudinary.com/maximuscloud/image/upload/v1605050732/seaweed_gel_mg5iax.jpg)",
                            }}
                        >
                            
                                <div className='seaweed-slide-info'>
                                    <h1>Seaweed Gel</h1>
                                </div>
                            
                        </div>
                    </SwiperSlide>
                </Swiper>
                        </div>
                </div>
                :
                <div className="seaweed-card-container">
                    <div className="seaweed-card-container-left"  onLoad={()=>{
                            setLoading([true,loading[1]]);
                        }}>
                        <div style={{width:"80%", height:"50vh", display:"flex",alignItems:"flex-end",margin:"30px auto",flexDirection:"column"}}>
                            <img src="https://res.cloudinary.com/maximuscloud/image/upload/v1605050728/Seaweed_granules_yhjcmy.jpg" alt="seaweed granules" style={{width:"100%",height:"auto"}}/>
                            <div className='seaweed-slide-info'>
                                <h1>
                                    Seaweed Granules
                                </h1>
                            </div>
                        </div>
                    <TableContainer className='seaweed-table-container'>
                        <Table className='seaweed-table'>
                            <TableHead>
                                <TableRow>
                                    <TableCell className="seaweed-table-text-headings">Item</TableCell>
                                    <TableCell className="seaweed-table-text-headings">Standard</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {seaweedTable.map((row) => (
                                    <TableRow key={row.item}>
                                        <TableCell component='th' scope='row' className="seaweed-table-text">
                                            {row.item}
                                        </TableCell>
                                        <TableCell className="seaweed-table-text">{row.standard}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                
                            
                    </div>
                    <div className="seaweed-card-container-right">
                        <Paper elevation={5} className='seaweed-heading'>
                            <h2>Benefits</h2>
                        </Paper>
                        <List>
                            {seaweedBenefits.map((benefit) => (
                                <ListItem>
                                    <ListItemIcon style={{color:"#3a5a40"}}>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary={benefit} className="seaweed-list-text"></ListItemText>
                                </ListItem>
                            ))}
                        </List>
                        <Carousel className="humate-carousel" interval={4000}>
                            <div>
                                <img
                                    className='slide-container'
                                    src="https://res.cloudinary.com/maximuscloud/image/upload/v1605050733/Seaweed_Powder_gjty5r.jpg"
                                    style={{
                                        width:"100%",
                                        margin: "0 auto",
                                        height: "45vh",
                                    }}
                                />
                                
                                <div className='seaweed-slide-info'>
                                    <h2>Seaweed Extract Powder</h2>
                                </div>
                            </div>
                            <div>
                                    <img
                                    className='slide-container'
                                    src="https://res.cloudinary.com/maximuscloud/image/upload/v1605050746/seaweed_flakess_zkivqb.jpg"
                                    style={{
                                        width:"100%",
                                        margin: "0 auto",
                                        height: "45vh",
                                    }}
                                />
                                    <div className='seaweed-slide-info'>
                                        <h2>Seaweed Extract Flakes</h2>
                                    </div>
                                
                            </div>
                            <div>
                                    <img
                                    className='slide-container'
                                    src="https://res.cloudinary.com/maximuscloud/image/upload/v1605050732/seaweed_gel_mg5iax.jpg"
                                    style={{
                                        width:"100%",
                                        margin: "0 auto",
                                        height: "45vh",
                                    }}
                                />
                                    <div className='seaweed-slide-info'>
                                        <h2>Seaweed Extract Gel</h2>
                                    </div>
                                
                            </div>
						</Carousel>
                    </div>
                </div>}
            </div>
            {/* <CircularProgress id="loader" style={{height:"200px", width:"200px",color:"#3a5a40", marginTop:"50px"}}/> */}
        </div>
        
);
}

export default Seaweed
