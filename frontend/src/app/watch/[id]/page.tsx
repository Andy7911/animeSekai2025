
import React from 'react'
interface WatchProps{
  params:{
    id:String
  }
}
export default function WatchPage({params}:WatchProps) {
const {id} = params;
  return (
    <div>
      watch page {id}
    </div>
  )
}
