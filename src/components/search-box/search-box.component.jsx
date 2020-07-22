import React from 'react';

import '../search-box/search-box.styles.css';

// functional components DOES NOT HAVE ACCESS TO STATE BECAUSE THEY DONOT HAVE ACCESSS TO CONSTRUCTORS.
//they also do not have access to the life cycle methods
export const SearchBox = ({placeholder,handleChange})=>(
<input type = 'search' 
       className = 'search'
       placeholder ={placeholder}
       onChange= {handleChange}
       />

);