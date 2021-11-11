import {React, useState, useEffect} from 'react'
import axios from "axios";
import myKey from "../context/config";
import {useHistory, Link} from "react-router-dom";


const LanguagesCollection = (props) => {
    const [language, setLanguage] = useState(props.location.language);
    const [langArr, setLangArr] = useState([]);
    const API_KEY = myKey.apiKey;
const history = useHistory();
    // useEffect(() => {
    //     axios.get(`http://api.mediastack.com/v1/news?access_key=${API_KEY}&limit=100&&languages=${language}&sort=published_desc`)
    //           .then((data)=>setLangArr(data.data.data.filter((item)=> item.image)))
    //     .catch((err) => console.log(`Your had an ${err}`));
                    
    // }, [])
    // console.log(langArr);
    // console.log(language);

    
        
    const showNews =  Object.entries(langArr).map(([key, value], i) =>{
    
        return(
                       <div  >          
                          <div className="redirectContainer">
                               <div className="redirectimgFather" >
                                                   <img className="imgRedirect" src={value.image} alt={value.title} width="200px" height="250px"   />
            </div>               
                           <div className="otherredirectFather">
                           <h3 className="redirectTitle"onClick={()=>{
                               if(i === 0 || i){
                            history.push({pathname: "/linkscollection",state:{value} })
                           }}}
                   
                   >{value.title}</h3>
                           <p className="redirectPuplished">{value.published_at}</p>
                            <p  className="redirectDescription">{value.description}</p>
                            <div className="down">
                         <div className="authorFather"><p className="redirectAuthorWord">Author: </p> <p className="redirectAuthor"> {value.author}</p></div>
                         <div className="authorFather"><p className="redirectAuthorWord">Source: </p> <p className="redirectSource"> {value.source}</p></div>
                         </div> 
     
                         </div>           
                        </div>
                            </div> 
                   )
      });
        return (
         <div >
        <div  className="redirectFather">     
                  {showNews}
                  <Link className="backLink" to="/home"><p className="back">Back</p></Link>
           <div className="goUpRedirect"><a className="goUpanchor" href="#img">˄</a></div>
           <p className="goupwordRedirect">Go up</p>

           </div> 
          
               
                </div>
           
        )
}
export default LanguagesCollection;