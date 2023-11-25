import React,  { useContext }  from "react"; //1. Import hook useContext
import { Context } from "../store/appContext.js" //2.Import Context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { BtnLearnMore } from "../component/BtnLearnMore.jsx";


export const Planets = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const urlImg = "https://starwars-visualguide.com/assets/img/planets/";
    const handleError = (event) =>{
        event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }
        
    return(
        <div>
            <h1 className="text-warning m-3 text-center">Planets</h1>
            <div className= "container d-flex flex-wrap align-items-row">
            {store.planets.map((planet, index) => {
                  
                  return (
                    
                    <div key={planet.uid} className="card m-3 bg-dark text-white rounded" style={{ width: "25rem"}}>
                    <img src= {`${urlImg}${planet.uid}.jpg`} onError={handleError} className="card-img" alt="planet image" />
                    <div className="card-body">
                    <h5 className="card-title">{planet.name}</h5>
                        <p className="card-text">{`Gender: ${planet.gender}`}</p>             {/*DOESNT WORK!! same for the 3 <p> */}
                        <p className="card-text">{`Height: ${planet.height}`}</p>
                        <p className="card-text">{`Homeworld: ${planet.homeworld}`}</p>
                        <BtnLearnMore />
                        <span className="btn btn-outline-warning" onClick={() => actions.addFavorites({type: "planet", name: planet.name})}>      {/*DOESNT WORK!! NOT SURE HOW TO DO IT */}
                        <FontAwesomeIcon icon={faHeart} />
                        </span>
                    </div>
                    </div>
                    )
                })
            }
        </div> 
        </div>
        );
        };