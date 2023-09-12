import { Navigate, useNavigate, useParams } from "react-router-dom"
import { getHeroById } from "../helpers";
import { useMemo } from "react";
import '../../ui/App.css';
import '../../heroes/pages/style.css';


export const HeroPage = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const hero = useMemo( () => getHeroById( id ), [ id ] );

  const onNavigateBack = () => {
    navigate( -1 );
  }

  if ( !hero ) {
    return <Navigate to="/marvel" />
  }
  const heroImageUrl = `/heroes/${ id }.jpg`;
  return (
    <div className="row mt-5">
      <div className="col-4">
        <article>
          <img 
            // src={ `/assets/heroes/${ id }.jpg` }
            src={ `/heroes/${ id }.jpg` }
            alt={ hero.superhero }
            // className="img-thumbnail animate__animated animate__flipInX"
          />
          <img 
            // src={ `/assets/heroes/${ id }.jpg` }
            src={ `/heroes1/${ id }.png` }
            // className="img-thumbnail animate__animated animate__flipInX"
          />
        </article>
      </div>

      <div className="col-8 animate__animated animate__lightSpeedInRight">
        <h3>{ hero.superhero }</h3>
        <ul className="list-group list-group-flush">
          <li className="list-group-item"> <b>Alter ego:</b> { hero.alter_ego }</li>
          <li className="list-group-item"> <b>Publisher:</b> { hero.publisher }</li>
          <li className="list-group-item"> <b>First Appearance:</b> { hero.first_appearance }</li>
        </ul>

        <h5 className="mt-3"> Characters </h5>
        <p>{ hero.characters }</p>

        <button 
          className="btn btn-outline-primary"
          onClick={ onNavigateBack }
        >
          Regresar
        </button>
      </div>

      <div className="color__block__right"></div>
      {/* <div className="color__block__left"></div> */}
    </div>

    
  )
}
