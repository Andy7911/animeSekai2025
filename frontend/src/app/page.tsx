import Image from "next/image";
import HeroComponent from "@/components/Home/Hero";
import example from '../../public/img/tokyo-thumb.jpeg'
import Recommend from "@/components/Home/Recommend";
import LastRealese from "@/components/Home/LastRelease";
import Schedule from "@/components/Home/Schedule";
import PopUp from "@/components/Home/PopUp";

import { Anime } from "@/types/anime";

interface Media {
  url: String
}


interface Hero {
  id: number,
  headline: String,
  subHeadline: String,
  description: String,
  picture: Media,
  anime: Anime
  categories:String

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
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate[Hero][populate][anime][populate]=*&populate[Hero][populate]=picture&populate[Recommends][populate][anime][populate]=*`, {
      headers: { 'Authorization': `Bearer ${process.env.TOKEN_API}  ` }
    })
    await new Promise((resolve => setTimeout(resolve, 4000)))
    return res.json();
  }

  let res = await getData();
  const { Hero, Recommends } = res.data;
  // function extractAnimes(recommends: Recommends[]): Recommends["anime"][] {
  //   return recommends.map((recommend) => recommend.anime);
  // }

  console.log('recomment',Recommends[0].anime)

let animes
  animes = Recommends.map((items,index)=>{

  
    return items.anime
  })
  console.log('anime',animes)
  return (
    <div className="container home">
      
      <div className="home__left">
        <HeroComponent headline={Hero.headline} picture={Hero.picture} description={Hero.description} Anime={Hero.anime}  subHeadline={Hero.subHeadline} />


        <Recommend anime={animes} />

        <LastRealese />

        <section className="watching" style={{ height: 500, width: 1200 }}>
          <h4>Continue Là Où Tu T’es Arrêté"</h4>
          <h5>Retrouve facilement tes derniers visionnements et replonge instantanément dans l’action</h5>

        </section>
        <Schedule/>
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
            <span className="btn__text">Filter <i className="fa-solid fa-shield-halved" aria-hidden="true">
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
              <Image src="http://localhost:1337/uploads/DALL_E_2024_10_22_21_18_52_An_anime_character_standing_in_a_13d47301d4.png" alt="main anime at this moment" width={296} height={196} />
              <div className="weekly__img_text">
                <span> 1</span>
                <h4>The new hero of grave</h4>
              </div>
            </div>
            <div className="weekly__cards">


              <div className="weekly__card">
                <span className="weekly__number"> 1</span>
                <Image src='http://localhost:1337/uploads/tokyo_reverger_c9ae4afe81.png' width={40} height={40} alt="Photo card" />
                <div className="weekly__card_content">
                  <h4>Tokyo revenger season 2</h4>
                  <div className="weekly__view">
                    <span><i className="fa-solid fa-eye" aria-hidden="true"></i>10,000</span>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </div>

        <div className="recently">

          <div className="recently__top">

            <h3>Recently add</h3>
            <a className="btn" href=""> View All</a>
          </div>
          <div className="recently__content">
            <div className="recently__card">
            <Image alt='card photo' src='http://localhost:1337/uploads/DALL_E_2024_10_22_21_18_52_An_anime_character_standing_in_a_13d47301d4.png' width={47} height={53}></Image>
            <div className="recently__card_text">
                  <h4>Jujutsu kaisen</h4>
                  <span>2018 EP. 12/14 </span>
            </div>
            </div>
            <div className="recently__card">
            <Image alt='card photo' src='http://localhost:1337/uploads/DALL_E_2024_10_22_21_18_52_An_anime_character_standing_in_a_13d47301d4.png' width={47} height={53}></Image>
            <div className="recently__card_text">
                  <h4>Jujutsu kaisen</h4>
                  <span>2018 EP. 12/14</span>
            </div>
            </div>
            <div className="recently__card">
            <Image alt='card photo' src='http://localhost:1337/uploads/DALL_E_2024_10_22_21_18_52_An_anime_character_standing_in_a_13d47301d4.png' width={47} height={53}></Image>
            <div className="recently__card_text">
                  <h4>Jujutsu kaisen</h4>
                  <span>2018 EP. 12/14</span>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
