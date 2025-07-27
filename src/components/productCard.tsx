import type { ProductApiResponse } from '../types/productType'

type ProductCardPropType = {
  products: ProductApiResponse[] | []
}

const ProductCard = ({ products }: ProductCardPropType) => {
  return (
    <>
      {products.length > 0 &&
        products.map(
          ({ id, creator, imagePath, price, pricingOption, title }) => {
            return (
              <div key={id} className='text-lg w-full'>
                <div className=' lg:h-[350px] xl:h-[500px] '>
                  <img
                    src={imagePath}
                    alt={title}
                    className='w-full h-full object-cover rounded-sm'
                  />
                </div>

                <div className='flex justify-between pt-2 px-2'>
                  <div className='flex flex-col justify-center items-start '>
                    <p className='font-semibold'>{title}</p>
                    <p>{creator}</p>
                  </div>
                  <p className='text-xl font-semibold'>
                    {pricingOption === 0
                      ? '$' + price
                      : pricingOption === 1
                      ? 'Free'
                      : 'View Only'}
                  </p>
                </div>
              </div>
            )
          }
        )}
    </>
  )
}
export default ProductCard
