import React from 'react'

interface AnimeProps{
    params:{
        id:String
    }
}

export default function AnimePage({params}:AnimeProps) {
    const {id} = params
  return (
    <div>
        My anime page {id}
    </div>
  )
}
