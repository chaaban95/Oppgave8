import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className='btnContainer'>
                <Link className='btn' to="movies">
                    See all Movies
                </Link>
                <Link className='btn' to="actors">
                    See all Actors
                </Link>
            </div>
        </>
    )
}