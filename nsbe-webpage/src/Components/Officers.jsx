import top_v from '../assets/Officers/top_five.js'
import officers from '../assets/Officers/officers.js'

  const Officers = () => {
    return (
      <>
      {top_v.map((chairperson) => (
      <div className="purple-bg py-24 sm:py-16">
        <h1 className="mx-auto max-w-7xl px-6 lg:px-8 text-3xl mb-10 subheaderstyle text-gray-900 sm:text-7xl transition-all hover:scale-105 duration-300 ease-out">{chairperson.role.zone}</h1>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-5xl w-96 mx-auto lg:max-w-none">
            <div className="h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-auto darkbg ">
              <img className="object-cover transition-all hover:scale-110 duration-300 ease-out " src={chairperson.imageUrl} alt="" />
            </div>
            <h2 className="mt-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{chairperson.name}</h2>
            <p className="mt-1 text-lg text-gray-600 font-semibold">
              {chairperson.role.name}
            </p>
          </div>
          <ul role="list" className="sm:ml-16 grid gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {officers.map((person) => (
              person.id == chairperson.role.zone ? (
                <li key={person.name}>
                  <div className=" flex items-center gap-x-6 transition-all hover:scale-110 duration-300 ease-out">
                    <img alt="" src={person.imageUrl} className="h-24 w-auto rounded-full darkbg" />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
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
    )
  }

  export default Officers
  