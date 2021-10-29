import {React , useEffect, useState} from 'react';
import myKey from "../../context/config";
import axios from "axios";
import { Link } from 'react-router-dom';


 const Technology = () => {
     
     const [technology, setTechnology] = useState([]);
     const API_KEY = myKey.apiKey;
     
  //    useEffect(() => {
  //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=50&categories=technology&languages=en&sort=published_desc`)
  // .then((data)=>setTechnology(data.data.data.filter((item)=> item.image).slice(0,6)))
  // .catch((err) => console.log(`Your had an ${err}`));
      
  // }, [])
  // console.log(technology);

  const technolgyNews = technology.map((item,i)=>{
    const {author, title, image, url, description} = item;
    return(
                   <div key={i}>          
                      <div className="sportswrapper">
                           <div className="imgFather">
                                               <img className="imgGeneral" src={image} alt={title} width="200px" height="250px"   />
        </div>               
                       <div className="othersportsFather">
                       <h1 className="sportsTitle"><a href={url}>{title}</a></h1>
                        <p style={{height: "8vh"}} className="sportsDescription">{description}</p>
                       <p className="sportsAuthor">{author}</p> 
                     </div>           
                    </div>
                        </div> 
               )
  })
    return (
     <div >
     <Link to="/technologyredirect" > 
          <div id="technology" className="technology">TECHNOLOGY</div> </Link>
    <div  className="sportsFather">     
              {technolgyNews}
       </div>    
            </div>
       
    )
}
export default Technology;