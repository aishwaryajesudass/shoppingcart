
import './App.css';
import Search from './Components/Search';
import Show from './Components/Show';
import UserCart from './Components/Usercart';
import { useState } from 'react';
import cloth from './Images/cloth.webp';
import bag from './Images/bag.webp';
import shoe from './Images/shoe.webp';
import toy from './Images/toy.webp';
import thar from './Images/thar.webp';
import bag1 from './Images/bag1.webp';
import shirt from './Images/tshirt.webp';
import midi from './Images/midi.webp';
import mini from './Images/mini.webp';
import box from './Images/lunchbox.webp';
import teddy from './Images/teddy.webp';
import watch from './Images/watch.webp';

function App() {
  const [courses, setCourses] = useState([
    
    { id: 1,
    name:'Casual sweatshirt Track pants Boys & Girls',
    price: 378,
    image:cloth,
    
    },
    { id: 2,
    name: 'Frantic Kids soft Animal Cartoon School Bag',
    price: 369,
    image:bag,
    },
    { id: 3,
    name: 'Lace Running Shoes for Boys & Girls',
    price: 320,
    image:shoe,
    
    },
     { id: 4,
    name: 'Kids Labtop with LED Display & Music',
    price: 388,
    image:toy,
    
    },
    
    { id: 5,
      name: 'Kids Digital Watch Boys & Girls',
      price: 589,
      image:watch,
      
      },
      { id: 6,
        name: 'Boys Slim Fit Solid Cascual Shirt',
        price: 349,
        image:shirt,
        
        },
        { id: 7,
          name: 'Panda Premium Quality Soft children Bag',
          price: 159,
          image:bag1,
          
          },
          { id: 8,
            name: 'Baby Girl Mini',
            price: 290,
            image:mini,
            
            },
            { id: 9,
              name: 'Baby Girl Midi',
              price: 195,
              image:midi,
              
              },
              { id: 10,
                name: 'Britt Teddybear SkyBlue',
                price: 455,
                image:teddy,
                
                },
                { id: 11,
                  name: 'SPEACK Steel Tiffin for Kid 2 Containers Lunch Box',
                  price: 409,
                  image:box,
                  
                  },
                  { id: 12,
                    name: 'Unbreakable Die Cast Mini Thar',
                    price: 396,
                    image:thar,
                    
                    },
    ]);
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
    const addCourseToCartFunction = (GFGcourse) => {
    const alreadyCourses = cartCourses
    .find(item => item.product.id === GFGcourse.id);
    if (alreadyCourses) {
    const latestCartUpdate = cartCourses.map(item =>
    item.product.id === GFGcourse.id ? {
    ...item, quantity: item.quantity + 1 }
    : item
    );
    setCartCourses(latestCartUpdate);
    } else {
    setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
    }
    };
    const deleteCourseFromCartFunction = (GFGCourse) => {
    const updatedCart = cartCourses
    .filter(item => item.product.id !== GFGCourse.id);
    setCartCourses(updatedCart);
    };
    const totalAmountCalculationFunction = () => {
    return cartCourses
    .reduce((total, item) =>
    total + item.product.price * item.quantity, 0);
    };
    const courseSearchUserFunction = (event) => {
    setSearchCourse(event.target.value);
    };
    const filterCourseFunction = courses.filter((course) =>
    course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
    return (
    <div className="App">
    <Search searchCourse={searchCourse}
    courseSearchUserFunction=
    {courseSearchUserFunction} />
    <main className="App-main">
    <Show
    courses={courses}
    filterCourseFunction={filterCourseFunction}
    addCourseToCartFunction={addCourseToCartFunction}
    />
    <UserCart
    cartCourses={cartCourses}
    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
    totalAmountCalculationFunction={
    totalAmountCalculationFunction
    }
    setCartCourses={setCartCourses}
    />
    </main>
    </div>
    );
    }


export default App;
