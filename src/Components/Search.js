import React from 'react';
import pic from '../Images/shopping.png';


function Search({ searchCourse, courseSearchUserFunction }) {
return (
<header className="App-header">
    <div className='images'>
     <img src={pic}/>
    </div>
    <div className='title'>
<h1>Kids Shopping Cart</h1>
<div className="search-bar">
<input
type="text"
placeholder="Search for Kids Products..."
value={searchCourse}
onChange={courseSearchUserFunction}
/>
</div>
</div>
</header>
);
}


export default Search