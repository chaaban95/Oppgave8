import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getActor } from '../lib/movieService'
import Title from './Title'

function Picture({ img }) {
    return (
        <>
        <img className='actors' 
            src={img}
            alt={""}
        />
        </>
    )
}

export default function Actor () {
    const { slug } = useParams()
    const [data, setData] = useState(null)

    useEffect(()=>{
        const getActorData = async () => {
            const actorData = await getActor(slug)
            setData(actorData)
            console.log(actorData)
        }
        getActorData()
    }, [slug])
    
    return (
        <>
            <p className='breadcrumb'>Home / Actors / {data?.slug}</p>
            <Title title={data?.name}/>
            <Picture img={data?.image?.asset?.url}/>
        </>
    )
}