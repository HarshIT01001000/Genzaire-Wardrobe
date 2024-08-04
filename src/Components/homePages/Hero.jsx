import Hero1 from "/ImageUse/Hero1.jpeg";

function Hero() {
  return (
    <>
  <div
  className="hero md:min-h-screen "
  style={{
    backgroundImage: "url(/ImageUse/Hero1.jpeg)",
    height:"500px"
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn bg-white">Shop Now</button>
    </div>
  </div>
</div>
    </>
  );
}

export default Hero;
