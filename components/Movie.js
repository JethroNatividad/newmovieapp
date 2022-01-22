import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

const Movie = ({ movie }) => {
    return (
        <div className='p-2 drop-shadow-2xl group sm:hover:scale-105 transition-all duration-300 cursor-pointer m-2 shadow-lg hover:shadow-black'>
            <Image className='rounded-sm' layout='responsive' src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`} height={1080} width={1920} alt={movie.title} />
            <div className='p-1'>
                <h1 className='text-2xl font-bold mb-2'>{movie.title || movie.original_name}</h1>
                <p className='max-w-screen-sm truncate mb-2'>{movie.overview}</p>
                <p className='flex items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>{`${movie.release_date || movie.first_air_date || movie?.media_type} •`} <ThumbUpIcon className='h-5 mx-2' /> {movie.vote_count}</p>
            </div>
        </div>
    )
}

export default Movie
