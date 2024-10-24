import top_v from '../assets/Officers/top_five.js'
import officers from '../assets/Officers/officers.js'

export default function Officers() {
    return (
      <>
      <div className='purple-bg about-padding'></div>
      {top_v.map((chairperson) => (
      <div className="purple-bg sm:py-12">
        <h1 className="mx-auto max-w-7xl px-6 lg:px-8 text-3xl my-10 subheaderstyle text-gray-900 sm:text-7xl transition-all hover:scale-105 duration-300 ease-out">{chairperson.role.zone}</h1>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-5xl w-96 mx-auto lg:max-w-none">
            <div className="overflow-hidden rounded-lg  lg:order-last lg:h-auto darkbg">
              <img className="object-cover h-auto w-auto transition-all hover:scale-110 duration-300 ease-out " src={chairperson.imageUrl} alt="" />
            </div>
            <h2 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl startl">{chairperson.name}</h2>
            <p className="mt-1 text-4xl text-rose-800 font-semibold start-topv-title">
              {chairperson.role.name}
            </p>
            <a href={chairperson.linkedin}>
                        <img
                          alt=""
                          src="https://i.imgur.com/KJP9wXt.png"
                          width="15%"
                          height=""
                          className='mt-4'
                        />
                      </a>
          </div>
          
          <ul role="list" className="sm:ml-16 grid gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {officers.map((person) => (
              person.id == chairperson.role.zone ? (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6 transition-all hover:scale-110 duration-300 ease-out">
                    <img alt="" src={person.imageUrl} className="h-28 w-auto rounded-full darkbg" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-stone-100 startm">{person.name}</h3>
                      <p className="text-lg font-semibold leading-6 text-yellow-400 start-title">{person.role}</p>
                      <a href={person.linkedin}>
                        <img
                          alt=""
                          src="https://i.imgur.com/KJP9wXt.png"
                          width="13%"
                          height=""
                          className='mt-2'
                        />
                      </a>
                    </div>
                  </div>
                </li>
              ) : null
            ))}
          </ul>
        </div>
      </div>
      ))}
      </>
    );
  };
  