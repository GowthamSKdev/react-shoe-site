

// navbar//
export const nav_link = [
    { href: '/Men', lable:'Home'},
    { href: '#', lable:'Collection'},
    { href: '#', lable:'Men'},
    { href: '#', lable:'Women'},
    { href: '#', lable:'Children'},
  { href: '#', lable: 'About' },
    
]



import img_1 from "../assets/men/pngwing.com (1).png";
import img_2 from "../assets/men/pngwing.com (2).png";
import img_3 from "../assets/men/pngwing.com.png";

export const test_image = [
  { pic: img_1 },
  { pic: img_2 },
  { pic: img_3 },
];

export const router = [

  {path:'/' ,element:"<Home />", lable:'Home'},  
  {path:'/men' ,element:"<Men />", lable:'Men'},  
]