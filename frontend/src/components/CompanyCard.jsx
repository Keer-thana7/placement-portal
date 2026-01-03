function CompanyCard({ logo, name, onClick }) {
  return (
    <div 
      className="company-card"
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "15px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        cursor: "pointer"
      }}
    >
      <img src={logo} alt={name} style={{ width: "50px", height: "50px" }} />
      <h3>{name}</h3>
    </div>
  );
}

export default CompanyCard;
