import sicc from "./assets/images/sicc.png";

export default function Hero() {
  return (
    <div className="hero">
      <img src={sicc} alt="" />
      <p>
        "Get ready to tantalize your taste buds, impress your loved ones, and
        nourish your body with our diverse array of mouth-watering veggie
        creations. Let's embark on this unforgettable culinary adventure
        together!"
      </p>
    </div>
  );
}
