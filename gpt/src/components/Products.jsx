import mango from '../assets/mango.png'
import lichi from '../assets/Lichi.png'
import orange from '../assets/orange.png'
import jack from '../assets/jack.jpg'
const Products = () => {
  return (
    <section classsName="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img src={mango} alt="" className='object-cover object-center w-full h-full block' />
        </a>
        <div className="mt-4">
          <h3 className="text-white text-xs tracking-widest title-font mb-1">CATEGORY1</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Mango</h2>
          <p className="mt-1">$5.00 Per KG</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img src={lichi} alt="" className='object-cover object-center w-full h-full block' />
        </a>
        <div className="mt-4">
          <h3 className="text-white text-xs tracking-widest title-font mb-1">CATEGORY2</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Lichi</h2>
          <p className="mt-1">$4.15 per 100pc</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img src={orange} alt="" />
        </a>
        <div className="mt-4">
          <h3 className="text-white text-xs tracking-widest title-font mb-1">CATEGORY3</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Orange</h2>
          <p className="mt-1">$3.00 per KG</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img src={jack} alt="" />
        </a>
        <div className="mt-4">
          <h3 className="text-white text-xs tracking-widest title-font mb-1">CATEGORY4</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">Jack Fruit</h2>
          <p className="mt-1">$2.00 per pcs</p>
        </div>
      </div>
      
    </div>
  </div>
</section>
  )
}

export default Products
