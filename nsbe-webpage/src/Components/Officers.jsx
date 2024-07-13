const top_v = [
  {
    name: 'Anna Idontknow',
    role: { name: 'President', zone: "Membership Zone"},
    imageUrl:
      'https://i.imgur.com/lMlOpa1.jpeg',
  },
  {
  name: 'Selasie Tse',
  role: { name: 'Vice President', zone: "Communications Zone" },
  imageUrl:
    'https://i.imgur.com/xkNt2Ys.jpeg',
  },
  {
    name: 'Selasie Tse',
    role: { name: 'Vice President', zone: "Communications Zone" },
    imageUrl:
      'https://i.imgur.com/xkNt2Ys.jpeg',
    },
    {
      name: 'Selasie Tse',
      role: { name: 'Vice President', zone: "Communications Zone" },
      imageUrl:
        'https://i.imgur.com/xkNt2Ys.jpeg',
      },
      {
        name: 'Selasie Tse',
        role: { name: 'Vice President', zone: "Communications Zone" },
        imageUrl:
          'https://i.imgur.com/xkNt2Ys.jpeg',
        },
]
const officers = [
    {
        id: "Communications Zone",
        name: 'Hailey Anderson',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
    {
        id: "Communications Zone",
        name: 'Kevin Uduji',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: "Communications Zone",
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: "Communications Zone",
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        id: "Communications Zone",
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      
    // More people...
  ]
  
  export default function Officers() {
    return (
      <>
      {top_v.map((chairperson) => (
      <div className="bg-white py-24 sm:py-16">
        <h1 className="mx-auto max-w-7xl px-6 lg:px-8 text-3xl mb-10 font-bold tracking-tight text-gray-900 sm:text-7xl">{chairperson.role.zone}</h1>
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-5xl w-96 mx-auto lg:max-w-none">
            <img className="rounded-2xl mb-3 object-cover items-center justify-center w-full h-60" src="https://i.imgur.com/xkNt2Ys.jpeg" alt="" />
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{chairperson.name}</h2>
            <p className="mt-1 text-lg  text-gray-600">
              {chairperson.role.name}
            </p>
          </div>
          <ul role="list" className="grid gap-x-4 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {officers.map((person) => (
              person.id == chairperson.role.zone ? (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img alt="" src={person.imageUrl} className="h-20 w-auto rounded-full" />
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
  