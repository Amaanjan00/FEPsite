import { Crown, FlagTriangleRight, GraduationCap, LeafyGreen, Megaphone, Users2 } from "lucide-react"

export default function OurBenefits() {
  return (
    <div className='mt-20'>
      <div className='flex flex-col gap-5 w-full justify-center items-center'>
        <h1 className='font-extrabold text-5xl'>Our Benefits</h1>
        <p className='xl:px-70 px-6 text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam quasi aspernatur minus, nisi a, reprehenderit vitae facilis id quos beatae voluptatem optio ea nesciunt! Deleniti praesentium asperiores est quos quibusdam.</p>
      </div>

      <div className='inline-grid xl:grid-cols-3 sm:grid-cols-2 gap-8 gap-y-15 xl:p-20 p-10 xl:px-50'>

        <div className='bg-white border-2 border-black hover:scale-105 transition-all duration-300 shadow-[6px_6px_0px_-1px_#000000] p-10 rounded-2xl'>
          <div className='bg-red-300 border-2 border-black w-fit p-2 rounded-2xl -mt-15 mb-5'>
            <FlagTriangleRight />
          </div>
          <h1>ABC</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique rem, facere hic voluptate voluptatibus totam maiores voluptatum saepe laudantium dicta non sint itaque ab quae blanditiis, magni inventore ullam.</p>
        </div>

        <div className='bg-white border-2 border-black hover:scale-105 transition-all duration-300 shadow-[6px_6px_0px_-1px_#000000] p-10 rounded-2xl'>
          <div className='bg-yellow-300 border-2 border-black w-fit p-2 rounded-2xl -mt-15 mb-5'>
            <GraduationCap />
          </div>
          <h1>ABC</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique rem, facere hic voluptate voluptatibus totam maiores voluptatum saepe laudantium dicta non sint itaque ab quae blanditiis, magni inventore ullam.</p>
        </div>

        <div className='bg-white border-2 border-black hover:scale-105 transition-all duration-300 shadow-[6px_6px_0px_-1px_#000000] p-10 rounded-2xl'>
          <div className='bg-purple-300 border-2 border-black w-fit p-2 rounded-2xl -mt-15 mb-5'>
            <Crown />
          </div>
          <h1>ABC</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique rem, facere hic voluptate voluptatibus totam maiores voluptatum saepe laudantium dicta non sint itaque ab quae blanditiis, magni inventore ullam.</p>
        </div>

        <div className='bg-white border-2 border-black hover:scale-105 transition-all duration-300 shadow-[6px_6px_0px_-1px_#000000] p-10 rounded-2xl'>
          <div className='bg-blue-300 border-2 border-black w-fit p-2 rounded-2xl -mt-15 mb-5'>
            <Megaphone />
          </div>
          <h1>ABC</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique rem, facere hic voluptate voluptatibus totam maiores voluptatum saepe laudantium dicta non sint itaque ab quae blanditiis, magni inventore ullam.</p>
        </div>

        <div className='bg-white border-2 border-black hover:scale-105 transition-all duration-300 shadow-[6px_6px_0px_-1px_#000000] p-10 rounded-2xl'>
          <div className='bg-green-300 border-2 border-black w-fit p-2 rounded-2xl -mt-15 mb-5'>
            <Users2 />
          </div>
          <h1>ABC</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique rem, facere hic voluptate voluptatibus totam maiores voluptatum saepe laudantium dicta non sint itaque ab quae blanditiis, magni inventore ullam.</p>
        </div>

        <div className='bg-white border-2 border-black hover:scale-105 transition-all duration-300 shadow-[6px_6px_0px_-1px_#000000] p-10 rounded-2xl'>
          <div className='bg-amber-400 border-2 border-black w-fit p-2 rounded-2xl -mt-15 mb-5'>
            <LeafyGreen />
          </div>
          <h1>ABC</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae similique rem, facere hic voluptate voluptatibus totam maiores voluptatum saepe laudantium dicta non sint itaque ab quae blanditiis, magni inventore ullam.</p>
        </div>

      </div>
    </div>
  )
}
