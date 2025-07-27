const SkeletonLoading = () => {
  return (
    <div className='w-[400px] h-[500px]'>
      <div className='skeleton w-[75%] h-[75%] rounded-sm'></div>
      <div className='skeleton w-[75%] h-4 rounded-sm my-4'></div>
      <div className='skeleton w-[25%] h-4 rounded-sm my-4'></div>
    </div>
  )
}
export default SkeletonLoading
