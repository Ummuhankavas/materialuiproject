import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';



const Categories = () => {

    const [category, setCategory] = useState([]);

    const baseUrl = 'https://fakestoreapi.com/products/categories';

    const getCategories = () => {
        axios
        .get(baseUrl)
        .then((res)=>{
        console.log(res.data);
        setCategory(res.data)
      
    })
};
useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
    <FormControl>
      <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
            <FormControlLabel value="female" control={<Radio />} label="All" />

            {category.map((item,i)=>(
                    <FormControlLabel 
                    key={i}
                    value={item} 
                    control={<Radio />} 
                    label={item} />
                ))
            }
        
        
      </RadioGroup>
    </FormControl>
    </div>
  )
};

export default Categories;