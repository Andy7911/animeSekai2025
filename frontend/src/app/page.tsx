import Image from "next/image";
import Hero from "@/components/Hero";
import example from '../../public/img/tokyo-thumb.jpeg'

export default function Home() {

  return (
    <div className="container home">
      <Hero />

      <section className="recommend">
        <h3>Sélection Recommender</h3>
        <div className="recommend__list">
          <a className="recommend__thumbnail">
            <Image alt="thumbnail" src={example} />

          </a>
          <a className="recommend__thumbnail">
            <Image alt="thumbnail" src={example} />

          </a>

        </div>

      </section>
      <section className="last_released">

      </section>

    </div>
  );
}
