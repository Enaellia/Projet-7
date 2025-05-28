import Banner from "../components/Banner";
import Dropdown from "../components/Dropdown";
import "../styles/About.css";

function About() {
  const dropdownItems = [
    {
      title: "Fiabilité",
      content: "Les annonces postées sur Kasa garantissent une fiabilité totale..."
    },
    {
      title: "Respect",
      content: "La bienveillance fait partie des valeurs fondatrices de Kasa..."
    },
    {
      title: "Service",
      content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite..."
    },
    {
      title: "Sécurité",
      content: "La sécurité est la priorité de Kasa..."
    },
    
  ];

  return (
    <main className="about-page">
      <Banner banniere="/about.jpg" />

      <div className="about-dropdowns">
        {dropdownItems.map((item, index) => (
          <Dropdown key={index} title={item.title}>
            <p>{item.content}</p>
          </Dropdown>
        ))}
      </div>
    </main>
  );
}

export default About;