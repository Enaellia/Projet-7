import logements from "../data/logements.json";
import Banner from "../components/Banner";
import Card from "../components/Card";
import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <Banner />
      <div className="gallery">
        {logements.map((logement) => (
          <Link key={logement.id} to={`/logement/${logement.id}`}>
            <Card logement={logement} />
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Home;
