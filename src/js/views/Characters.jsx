import React,  { useContext }  from "react"; //1. Import hook useContext
import { Context } from "../store/appContext.js" //2.Import Context
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { BtnLearnMore } from "../component/BtnLearnMore.jsx";


export const Characters = () =>{
    const  {store, actions } = useContext (Context); //3. destructuring store & actions
    const urlImg = "https://starwars-visualguide.com/assets/img/characters/";
    const handleError = (event) =>{
        event.target.src ="https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }

    return(
        <div>
            <h1 className="text-warning m-3 text-center">Characters</h1>
            <div className= "container d-flex flex-wrap align-items-row">
            {store.characters.map((character, index) => {
                  const position = index + 1;

                  return (
                    
                    <div key={index} className="card m-3 bg-dark text-white" style={{ width: "25rem"}}>
                    <img src= {`${urlImg}${position}.jpg`} onError={handleError} className="card-img" alt="character image" />
                    <div className="card-body">
                    <h5 className="card-title">{character.name}</h5>
                        <p className="card-text">{`Birth year: ${character.birth_year}`}</p>
                        <p className="card-text">{`Gender: ${character.gender}`}</p>
                        <p className="card-text">{`Height: ${character.height}`}</p>
                        <p className="card-text">{`Homeworld: ${character.homeworld}`}</p>
                        <BtnLearnMore />
                        <button className="btn btn-outline-warning">
                        <FontAwesomeIcon icon={faHeart} />
                        </button>
                    </div>
                    </div>
                    )
                })
            }
        </div> 
        </div>
        );
        };