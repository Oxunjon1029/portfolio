import { HomeFilled, InfoCircleFilled, PhoneFilled, PieChartFilled, SlidersFilled, SnippetsFilled } from "@ant-design/icons";

export const menuItems = [
  {
    name: 'Home',
    id: 'home',
    key: 1,
    icon: <HomeFilled  style={{marginRight:'10px',fontSize:"20px"}} />
  },
  {
    name: 'About',
    id: 'info',
    key: 2,
    icon: <InfoCircleFilled  style={{marginRight:'10px',fontSize:"20px"}} />
  },
  {
    name: 'Resume',
    id: 'resume',
    key: 3,
    icon: <SnippetsFilled  style={{marginRight:'10px',fontSize:"20px"}} />
  },
  {
    name: 'Work',
    id: 'work',
    key: 4,
    icon: <PieChartFilled  style={{marginRight:'10px',fontSize:"20px"}} />
  },
  {
    name: 'Testimonial',
    id: 'testimonial',
    key: 5,
    icon: <SlidersFilled  style={{marginRight:'10px',fontSize:"20px"}} />
  },
  {
    name: 'Contact',
    id: 'contact',
    key: 6,
    icon: <PhoneFilled  style={{marginRight:'10px',fontSize:"20px"}} />
  },
]