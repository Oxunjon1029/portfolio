import About from "../../components/About";
import Contact from "../../components/Contact";
import Experience from "../../components/Experience";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Home from "../../components/Home";
import MediaHeader from "../../components/MediaHeader";
import MyServices from "../../components/MyServices";
import Statistics from "../../components/Statistics";
import Testimonial from "../../components/Testimonial";
import Work from "../../components/Work";

export const componenstMap = [
  {
    id:0,
    component:<Header/>
  },
  {
    id:1,
    component:<MediaHeader/>
  },
  {
    id:2,
    component:<Home/>
  },
  {
    id:3,
    component:<About/>
  },
  {
    id:4,
    component:<MyServices/>
  },
  {
    id:5,
    component:<Statistics/>
  },
  {
    id:6,
    component:<Experience/>
  },
  {
    id:7,
    component:<Work/>
  },
  {
    id:8,
    component:<Testimonial/>
  },
  {
    id:9,
    component:<Contact/>
  },
  {
    id:10,
    component: <Footer />
  },
]