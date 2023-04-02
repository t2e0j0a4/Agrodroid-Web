import React from "react";

import Carousel from "react-material-ui-carousel";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea,} from "@mui/material";

import C1 from "../Images/Certificate.jpg";
import C2 from "../Images/Clean India Republic Day Instagram Story.png";

var items = [
  {
    id:1,
    name: "Build Your Brand",
    description: "We Acquired 1st First Prize in Build Your Brand Competition Conducted by AIC T-Hub in Collaboration with Institute of Aeronautical Engineering (IARE).",
    date: '28/10/2022',
    img:C1
  },
  {
    id:2,
    name: "Startup India Recognition",
    description: "Recognized by Department for Promotion of Industry and Internal Trade(DPIIT), Govt of India",
    date: '27/12/2022',
    img:C2
  },
  
];

const Achivements = () => {
  return (
    <>
      <main
        id="achievements"
        className="w-[100%] h-[100%] overflow-x-hidden overflow-y-hidden pt-8 px-4 bg-gray-50"
      >
        <section className="w-[100%] overflow-x-hidden overflow-y-hidden">
          <div
            className="text-3xl font-nunitosans mt-4 my-2 text-[#004346] ml-4 pt-2 text-left"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            Achievements
          </div>
          <div
            id="sub-head"
            className="w-52 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4 "
            data-aos="zoom-in"
            data-aos-duration="700"
          ></div>
          <div
            id="sub-head"
            className="w-56 h-[0.15rem] rounded font-[Poppins] font-[600] mb-2 ml-4 text-left"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            Our Potential Glance
          </div>

          <div className="card-wrapper w-[100%] h-[100%] mt-4 lg:mt-8 lg:mb-8 mb-4 md:mb-16"  data-aos="zoom-out"
            data-aos-duration="800"
            data-aos-offset="200">
            <Carousel 
              animation="fade" 
              interval="10000" 
              duration="500"
              autoPlay={true} 
              indicators={false}
              sx={{display:'flex' , alignItems:'center' , marginX:'auto' , width:'100%' , marginTop:{
                xs:'1rem' , lg:'3rem'
              }, height:'50vh'}}
            >
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>
          
          <div className="animated-arrows relative">
            <div className="scroll-down down-1"></div>
            <div className="scroll-down down-2"></div>
          </div>
        </section>
      </main>
    </>
  );
};



export default Achivements;

function Item(props) {
  return (
    <Card className="shadow-md"
      sx={{width:{xs:'95%' , md:'70%'} , marginX: 'auto' , display : 'flex' , alignItems:'center', height:'100%' }} 
    >
      <CardActionArea sx={{ display: "flex", flexDirection:{
        xs:'column' , md:'row'
      } , alignItems:'center' ,justifyContent :'space-between' , height:'100%'}}>
        <CardMedia loading="lazy" 
          component="img"
          sx = {{width : '35%',height:'100%',display:{
            xs:'none' , lg:'block'
          }}}
          image={props.item.img}
          alt="Image"
        />
        <CardContent sx={{width : {xs:'90%',md:'90%',lg:'60%'}}}>
          <Typography gutterBottom variant="h5" component="div" sx={{marginY:'10px' , fontFamily:'Poppins' , color:'#252525'}}>
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{marginY:'10px', fontFamily : 'Poppins' , color:'#252525'}}>
            {props.item.description}
          </Typography>
          <Typography variant="body1" component="div" sx={{marginY:'10px', fontFamily : 'Poppins' , color:'#252525'}}>
            {props.item.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
