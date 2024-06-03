import "./MainPage.scss";
import Stats from "../../components/Stats/Stats";
import Feature from "../../components/Feature/Feature";

export default function MainPage() {
  return (
    <>
      <main className="main">
        <section className="main__stats">
          <Stats
            title="Total Tails Found this Month:"
            number="16"
            info="TailFinder is an exciting new platform that helps reunite lost pets
          with their families. Let's bring those furry friends back where they
          belong!"
          />
          <Stats
            title="Tails we’re looking for:"
            number="36"
            info="Losing a pet is a distressing experience. Pets cannot communicate their location, and microchips do not provide real-time tracking and is not readily-accessible by owners.
            "
          />
          <Stats
            title="Total Reunions:"
            number="132"
            info="With TailFinder, we make finding lost pets easier through community posting and map pinning features. TailFinder is here to help make that happen, turning tearful moments into happy reunions!"
          />
        </section>
        <Feature />
      </main>
    </>
  );
}
