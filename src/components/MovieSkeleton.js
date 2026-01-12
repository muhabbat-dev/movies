import React from 'react'
import Skeleton from 'react-loading-skeleton'
export default function MovieSkeleton() {
  return (
    <div className='skeletonWrapper'>
        <Skeleton />
        <div className='skeleton'>
        </div>
        <Skeleton height={200} />
        <Skeleton count={3} />
        <Skeleton />
    </div>
  )
}

