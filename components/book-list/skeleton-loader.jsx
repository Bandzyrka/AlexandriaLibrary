import React from 'react'

const SkeletonBookCard = () => (
    <div className="w-[300px] h-[580px] border-2 animate-pulse flex flex-col p-4 m-4">
            <div className="w-[200px] h-[250px] bg-gray-400 animate-pulse mx-auto mb-4" />
            <div className="w-[200px] h-[15px] bg-gray-400 animate-pulse mx-auto mt-2" />
            <div className="w-[50px] h-[15px] bg-gray-400 animate-pulse mx-auto mt-2 mb-4" /> 
            <div className="w-[150px] h-[20px] rounded-full bg-gray-400 animate-pulse mx-auto mt-2" />         
            <div className="w-[150px] h-[20px] rounded-full bg-gray-400 animate-pulse mx-auto mt-2" />         
            <div className="w-[150px] h-[20px] rounded-full bg-gray-400 animate-pulse mx-auto mt-2" />         
            <div className="w-[150px] h-[20px] rounded-full bg-gray-400 animate-pulse mx-auto mt-2" />         
        </div>
)

const SkeletonLoader = () => {
  return (
    <div className="flex flex-wrap items-center justify-center " >
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
        <SkeletonBookCard />
    </div>
  )
}

export default SkeletonLoader