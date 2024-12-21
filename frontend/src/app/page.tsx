import Image from "next/image";
import HeroComponent from "@/components/Hero";
import example from '../../public/img/tokyo-thumb.jpeg'
import Recommend from "@/components/Recommend";
import LastRealese from "@/components/LastRealese";

interface Picture{
  url:String
}
interface Media{
  url:String
}
interface Anime{
 id:Number,
 Name:String,
 description:String,
 notation:number,
 Highline_title:String
 categories:String
 gif:Media,
 musique:Media
 
}

interface Hero { 
id:number,
Headline:String,
SubHeadline:String,
Description:String,
Picture: Picture,
anime:Anime

}
interface Recommends{
anime:Anime

}
interface HomeRespose{
  data:{
  Hero:Hero,
  Recommends:Recommends[]
}
}

export default async function Home() {
async function getData():Promise<HomeRespose>{
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/home-page?populate[Hero][populate][anime][populate]=*&populate[Hero][populate]=Picture&populate[Recommends][populate]=*`,{
    headers:{'Authorization':`Bearer ${process.env.TOKEN_API}  `}
  })
  await new Promise((resolve=>setTimeout(resolve,4000)))
  return res.json();
} 

let res = await getData();
const {Hero , Recommends} = res.data;
console.log(Hero.anime);
  return (
    <div className="container home">
      <HeroComponent  Headline={Hero.Headline} Picture={Hero.Picture} Description={Hero.Description} Anime={Hero.anime} gif={Hero.anime.gif}  SubHeadline={Hero.SubHeadline} mu/>

   
    
 <Recommend />
      
    <LastRealese/>
    
<section className="watching" style={{height:500,width:1200}}>
  <h4>Vos visionnnement </h4>

</section>
    </div>
  );
}
