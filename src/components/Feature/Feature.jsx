import "./Feature.scss";

export default function Feature() {
  return (
    <>
      <section className="feature">
        <section className="feature__card">
          <h2 className="feature__title">Meet Mona:</h2>
          <article className="feature__content">
            When Cheryl's adventurous Siamese cat, Mona, went missing, she felt
            lost without her. Turning to TailFinder, she posted Mona's details
            and was overwhelmed by the community's quick and caring responses.
            After a few days, a neighbor named Alex spotted Mona and pinned the
            sighting on the map. Cheryl rushed to the park and, with a joyous
            heart, reunited with Mona. Thanks to the supportive TailFinder
            community, Cheryl and Mona's heartwarming reunion was a beautiful
            reminder of the power of coming together to help.
          </article>
          <img
            className="feature__img"
            src="../../../src/assets/images/mona-main.png"
          />
        </section>
        <section className="feature__card feature__card--reverse">
          <article className="feature__content">
            When Tim's beloved puppy, Wasabi, went missing, a profound
            sadness settled over him. Hoping to find his little friend, Tim
            turned to TailFinder, a beacon of hope amidst his worry. He shared
            Wasabi's details and some of his favorite photos, hoping the
            community would empathize with his plight. The response was both
            swift and heartfelt. People shared sightings and encouraging words,
            creating a path for Tim to follow. After two long, worrisome days, a
            kind neighbor named Sarah spotted Wasabi near the local playground
            and marked the location. Their reunion, made possible by the
            compassionate TailFinder community, was a poignant reminder of the
            kindness and solidarity that bind us all.
          </article>
          <h2 className="feature__title">Meet Wasabi:</h2>
          <img
            className="feature__img"
            src="../../../src/assets/images/wasabi-main.jpg"
          />
        </section>
      </section>
    </>
  );
}
