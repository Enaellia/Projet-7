import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Carrousel from "../components/Carrousel";


function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <main className="logement-page">
      <Carrousel pictures={logement.pictures} />
      
      <div className="logement-top">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          {/* Tags ici */}
        </div>

        <div className="logement-host">
          <div className="host">
            <p>{logement.host.name}</p>
            <img src={logement.host.picture} alt={logement.host.name} />
          </div>
          {/* Rating (étoiles) ici */}
        </div>
      </div>

      {/* Accordéons ici */}
    </main>
  );
}

export default Logement;
