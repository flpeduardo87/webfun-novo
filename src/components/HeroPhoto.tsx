export default function HeroPhoto() {
  return (
    <div className="hphoto">
      {/* Main tall photo */}
      <div className="hphoto-main">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=720&q=80&fit=crop&crop=faces,center"
          alt="Equipe em reunião de projeto"
          className="hphoto-img"
        />
        {/* Floating stat badge */}
        <div className="hphoto-badge">
          <div className="hphoto-badge-stars">★★★★★</div>
          <div className="hphoto-badge-val">4.8 no Google</div>
          <div className="hphoto-badge-sub">+50 projetos entregues</div>
        </div>
      </div>

      {/* Side column: small photo + tag */}
      <div className="hphoto-side">
        <div className="hphoto-sec">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&q=80&fit=crop&crop=faces,top"
            alt="Reunião de briefing"
            className="hphoto-img"
          />
        </div>
        <div className="hphoto-tag">
          <span className="hphoto-tag-dot" />
          Entrega em semanas
        </div>
      </div>
    </div>
  );
}
