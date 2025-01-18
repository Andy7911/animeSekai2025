

export interface Anime {
id:Number,
documentId:String,
name:Sting,
description:String,
notation:number,
highline_title:String,
categories:String,
gif: Media,
musique: Media
Episodes:Episode[]
}

export interface Episode{
id:Number,
documentId:String,
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