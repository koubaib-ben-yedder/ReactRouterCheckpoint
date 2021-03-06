import React from 'react'
import {Table} from "react-bootstrap"

import "../compoment/css/MovieList.css";

function MovieList({data,filter}) {


  


  

  return (

   
    <div className='MovieListss'>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>title</th>
                <th>image</th>
                <th>description</th>
                <th>rating</th>
                </tr>
            </thead>
            <tbody>
                {  data.filter((el)=> Object.values(filter).includes(el.title) || Object.values(filter).includes(el.rating)).map((el,idx)=>(
                
                    <tr key={idx}>
                        <td>{el.title}</td>
                        <img style={{backgroundImage:"url("+el.posteUrl+")" ,backgroundSize:"cover",width: "10rem",height: "14rem"}} />
                        <td>{el.description}</td>
                        <td>{el.rating}</td>
                    </tr>
                ))

                }
               
                  
            </tbody>
        </Table>
    </div>
  )
}

export default MovieList