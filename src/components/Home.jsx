<div className="gallery">
  {logements.map((logement) => (
    <Card key={logement.id} logement={logement} />
  ))}
</div>