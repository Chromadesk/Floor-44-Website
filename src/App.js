function NavBar() {
  return (
    <div className="NavBar">
      <label><h3>Floor44</h3></label>
      <label>ABOUT</label>
      <label>MENU</label>
    </div>
  )
}

function PhotoSeparator() {
  return (
    <div>{/* Image */}</div>
  )
}

function AboutSection() {
  return (
    <div>
      <h2>A NEW DINING EXPERIENCE</h2>
      <p>Exhilarating to the eyes and tastebuds alike, Azia Restaurant
        & Lounge offers bright flavors of the Far East in a surreal
        atmosphere that marries the serenity of Asia with the flamboyance
        of the Caribbean. Ornate asian decor and zen details open the
        senses into setting the stage for pan-Asian fare inspired by
        multiple traditions that transcends into something delicious for
        just about everyone. Menu features dim sum, sushi, soups, meat &
        seafood and favorite house specialties that pair delightfully</p>
      <div> {/* Image */} </div>
    </div>
  )
}

function GallerySection() {
  return (
    <div>
      <h2>GALLERY</h2>
      {/* image Carousel */}
    </div>
  )
}

function ReviewSection() {
  return (
    <div>
      <h2>Reviews</h2>
      <div className="Review">
        <h3>Title</h3>
        <p>Body</p>
        <label>Credit</label>
      </div>
    </div>
  )
}

function PageBottom() {
  return (
    <div>
      <h3>Floor 44</h3>

      <h3>Opening Hours</h3>
      <p>Sunday - Thursday: 5pm - 12am
        Friday - Saturday: 5pm - 1am
        Delivery service: 5pm - 9:30pm</p>

      <h3>Address</h3>
      <p>1228 Astronomy Rd
        44th Floor
        Suite B
        Philadelphia PA 11043</p>

      <h3>Contact</h3>
      <p>TEL 215-512-2418
        yisraeleliyah@gmail.com
        Created by Chromadesk</p>
      <div>{/*media buttons*/}</div>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <NavBar />
      <PhotoSeparator />
      <AboutSection />
      <GallerySection />
      <ReviewSection />
      <PhotoSeparator />
      <PageBottom />
    </div>
  );
}

export default App;
