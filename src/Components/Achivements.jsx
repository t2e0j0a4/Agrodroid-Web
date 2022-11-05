import React from "react";

import Carousel from "react-material-ui-carousel";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea,} from "@mui/material";

import Cover from "../Images/Gold.png";

var items = [
  {
    name: "Achievement #1",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut odit ex at vero ducimus tenetur corporis doloremque reprehenderit similique?",
    date: '01/01/2022'
  },
  {
    name: "Achievement #2",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ut odit ex at vero ducimus tenetur corporis doloremque reprehenderit similique?",
    date : '02/02/2022'
  },
];

const Achivements = () => {
  return (
    <>
      <main
        id="achievements"
        className="w-[100%] h-[100%] overflow-x-hidden overflow-y-hidden pt-8 px-4 bg-gray-50"
      >
        <section className="">
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

          <div className="card-wrapper w-[100%] h-[100%] mt-8 mb-2 md:mb-4">
            <Carousel 
              animation="fade" 
              interval="10000" 
              duration="1000"
              autoPlay={true} 
              indicators={false}
              sx={{display:'flex' , alignItems:'center' , marginX:'auto' , width:'100%' , marginTop:'3rem' , height:{
                xs:'100%' , md:'300px'
              }}}
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
    <Card
      sx={{width:{xs:'90%' , md:'80%'} , marginX: 'auto' , display : 'flex' , alignItems:'center' , boxShadow:'0px 1px 8px 2px #000000a0'}}
    >
      <CardActionArea sx={{ display: "flex", flexDirection: {
        xs:'col' , md:'row'
      }, justifyContent:'space-around' }}>
        <CardMedia 
        className="hidden md:block"
          component="img"
          sx = {{width : '20%', display:{
            xs:'hidden' , md:'block' 
          }}}
          image={Cover}
          alt="Image"
        />
        <CardContent sx={{width : '100%'}}>
          <Typography gutterBottom variant="h5" component="div">
            {props.item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.item.description}
          </Typography>
          <Typography variant="h6" component="div">
            {props.item.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
