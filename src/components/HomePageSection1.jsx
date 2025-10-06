'use client'
import CountUp from './CountUp'
import GradientText from './GradientText'

export default function HomePageSection1() {
  return (
    <div className='m-10 rounded-2xl'>
      <div className="flex justify-center items-center px-0 xl:px-30 py-2 xl:gap-20 xl:flex-row flex-col-reverse">

          <div className="flex justify-center items-center w-full h-150 hover:scale-105 transition-all duration-300">
            <img src="https://placehold.co/400x500" className="object-cover h-full w-full rounded-2xl shadow-[5px_4px_0px_2px_#000000] border-2 border-black" alt="" />
          </div>

          <div className="flex flex-col justify-center">

            <div className="flex flex-col">
              <div className="w-fit hidden xl:block">
                <h5 className="font-bold text-2xl">Welcome to <span className="text-blue-500">Fair Education Point School</span></h5>
              </div>
              <h1 className="text-6xl font-extrabold mt-4">Where Young Minds Blossom and <span className="text-red-500">Dreams Take Flight.</span></h1>
              <p className="text-[14px] mt-2">At Fair Education Point School, dreams take flight as young minds are guided with wisdom, compassion, and creativity. We believe in nurturing the soul through knowledge, empowering every student to discover their strengths, pursue excellence, and inspire a brighter tomorrow.</p>
            </div>

            <div className="flex mt-6 w-fit p-3 rounded-2xl">

                <div className="flex flex-col p-5 justify-center items-center">
                <GradientText
                  colors={["#c1020c", "#4079ff", "#c1020c", "#4079ff", "#c1020c"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class text-5xl"
                >
                    <div>
                      #
                        <CountUp
                            from={0}
                            to={1}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text font-extrabold text-5xl"
                        />
                  </div>

                </GradientText>
                  
                <p className="text-[16px] font-bold">School</p>
              </div>

              <div className="flex flex-col p-5 justify-center items-center">
                <GradientText
                  colors={["#c1020c", "#4079ff", "#c1020c", "#4079ff", "#c1020c"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class text-5xl"
                >
                    <div>
                      +
                        <CountUp
                            from={0}
                            to={15}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text font-extrabold text-5xl"
                        />
                  </div>

                </GradientText>
                  
                <p className="text-[16px] font-bold">Educators</p>
              </div>

              <div className="flex flex-col p-5 justify-center items-center">
                <GradientText
                  colors={["#c1020c", "#4079ff", "#c1020c", "#4079ff", "#c1020c"]}
                  animationSpeed={3}
                  showBorder={false}
                  className="custom-class text-5xl"
                >
                    <div>
                      +
                        <CountUp
                            from={0}
                            to={100}
                            separator=","
                            direction="up"
                            duration={1}
                            className="count-up-text font-extrabold text-5xl"
                        />
                  </div>

                </GradientText>
                  
                <p className="text-[16px] font-bold">Amenities</p>
              </div>

            </div>
            
          </div>

        </div>
    </div>
  )
}
