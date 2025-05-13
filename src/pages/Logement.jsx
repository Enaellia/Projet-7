import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import Carrousel from "../components/Carrousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import Dropdown from "../components/Dropdown";


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
                    <div className="logement-tags">
                        {logement.tags.map((tag, index) => {
                            const isMobile = window.innerWidth <= 768;
                            const label = isMobile ? tag.split(" ")[0] : tag;

                            return <Tag key={index} label={label} />;
                        })}
                    </div>

                </div>

                <div className="logement-host">
                    <div className="host">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} alt={logement.host.name} />
                    </div>
                    <Rating rating={logement.rating} />
                </div>

            </div>

            <div className="logement-dropdowns">
                <Dropdown title="Description">
                    <p>{logement.description}</p>
                </Dropdown>
                <Dropdown title="Équipements">
                    <ul>
                        {logement.equipments.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </Dropdown>
            </div>

        </main>
    );
}

export default Logement;
