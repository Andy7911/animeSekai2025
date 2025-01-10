import Image from "next/image";
import HeroComponent from "@/components/Hero";
import example from '../../public/img/tokyo-thumb.jpeg'
import Recommend from "@/components/Recommend";
import LastRealese from "@/components/LastRealese";

interface Picture {
  url: String
}
interface Media {
  url: String
}
interface Anime {
  id: Number,
  Name: String,
  description: String,
  notation: number,
  Highline_title: String
  categories: String
  gif: Media,
  musique: Media

}

interface Hero {
  id: number,
  Headline: String,
  SubHeadline: String,
  Description: String,
  Picture: Picture,
  anime: Anime

}
interface Recommends {
  anime: Anime

}
interface HomeRespose {
  data: {
    Hero: Hero,
    Recommends: Recommends[]
  }
}

export default async function Home() {
  async function getData(): Promise<HomeRespose> {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate[Hero][populate][anime][populate]=*&populate[Hero][populate]=Picture&populate[Recommends][populate]=*`, {
      headers: { 'Authorization': `Bearer ${process.env.TOKEN_API}  ` }
    })
    await new Promise((resolve => setTimeout(resolve, 4000)))
    return res.json();
  }

  let res = await getData();
  const { Hero, Recommends } = res.data;
  console.log(Hero.anime);
  return (
    <div className="container home">
      <div className="home__left">
        <HeroComponent Headline={Hero.Headline} Picture={Hero.Picture} Description={Hero.Description} Anime={Hero.anime} gif={Hero.anime.gif} SubHeadline={Hero.SubHeadline} mu />


        <Recommend />

        <LastRealese />

        <section className="watching" style={{ height: 500, width: 1200 }}>
          <h4>Vos visionnnement </h4>

        </section>
      </div>
      <div className="home__right">

        <div className="filter">
          <h4>Quick filter</h4>
          <div className="filter__content">
            <div className="filter__item">
              <div className="filter__dropdown">

                Genre <span> All</span>
              </div>
              <div className="filter__menu">

              </div>

            </div>
            <div className="filter__item">
              <div className="filter__dropdown">

                Genre <span> All</span>
              </div>
              <div className="filter__menu">

              </div>

            </div>

            <input type="text" />
          </div>


          <a className="btn">
            <span className="btn__text">Filter <i className="fa-solid fa-shield-halved">
            </i></span>

          </a>

        </div>
        <div className="weekly">

          <div className="weekly__top">
            <div className="weekly__day">
              Days
            </div>
            <div className="weekly__day">
              Week
            </div>
            <div className="weekly__day">
              Mouth
            </div>

          </div>
          <div className="weekly__content">

            <div className="weekly__img_wrap">
              <Image src="http://localhost:1337/uploads/DALL_E_2024_10_22_21_18_52_An_anime_character_standing_in_a_13d47301d4.png" alt="main anime at this moment"   width={296} height={196}/>
              <div className="weekly__img_text">
              <span> 1</span>
              <h4>The new hero of grave</h4>
              </div>
            </div>
<div className="weekly__card">
  <span className="weekly__number"> 1</span>
  <Image src='http://localhost:1337/uploads/tokyo_reverger_c9ae4afe81.png'  width={30} height={40}  alt="Photo card"/>
  <div className="weekly__card_content">
<h4>Tokyo Revenger</h4>
<div className="weekly__view">
<span><i className="fa-solid fa-eye"></i>10,000</span>
</div>

  </div>

</div>
          </div>

        </div>

      </div>
    </div>
  );
}
