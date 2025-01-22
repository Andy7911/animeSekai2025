

export interface Anime {
id:Number,
documentId:string,
name:sting,
description:string,
notation:number,
highline_title:string,
categories:string,
gif: Media,
musique: Media
Episodes:Episode[]
thumbnail:Media
imgTitle:Media
}

export interface Episode{
id:Number,
documentId:string,
Season:Number,
Nb_episode:Number,
release_date:Date,
videos:Video[]

}
export interface Media{
    url: String
}

export interface Video{
    id:Number,
    documentId:String,
    Langues:String,
    Url:String,
    publishedAt:Date
}