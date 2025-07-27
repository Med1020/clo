import SkeletonLoading from './skeletonLoading'

export const ProductCardSkeleton = () => {
  return (
    <div className='flex flex-wrap'>
      {Array(8)
        .fill(0)
        .map((_,i) => (
          <div key={i}>
            <SkeletonLoading />
          </div>
        ))}
    </div>
  )
}
