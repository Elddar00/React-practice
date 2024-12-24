export default function Entry() {
  return (
    <article className="journal-entry">
      <img
        className="main-image"
        src="https://scrimba.com/links/travel-journal-japan-image-url"
        alt="mount fuji"
      />
      <div>
        <img src="/marker.png" alt="map marker icon" />
        <span>Japan</span>
        <a href="https://maps.app.goo.gl/6RLYZDuuuqJ7kNGZ9">
          View on Google Maps
        </a>
      </div>
    </article>
  );
}
