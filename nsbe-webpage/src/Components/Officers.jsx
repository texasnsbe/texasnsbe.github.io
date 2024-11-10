import top_v from "../assets/Officers/top_five.js";
import officers from "../assets/Officers/officers.js";

export default function Officers() {
  return (
    <>
      <div className="pb-10">
        {top_v.map((chairperson) => (
          <div className="py-6 mx-[12.5vw]">
            <h1 className="my-10 max-xl:text-center subheaderstyle sm:text-7xl transition-all hover:scale-105 duration-300 ease-out">
              {chairperson.role.zone}
            </h1>
            <div className="grid max-w-7xl gap-x-8 gap-y-20 xl:grid-cols-3 max-lg:grid-cols-1">
              <div className="flex flex-col max-xl:items-center max-xl:text-center">
                <img
                  className="max-xl:w-[40vw] max-sm:w-[90vw] object-cover darkbg transition-all hover:scale-110 duration-300 ease-out"
                  src={chairperson.imageUrl}
                />
                <h2 className="mt-10 tracking-tight text-gray-900 sm:text-4xl startl">
                  {chairperson.name}
                </h2>
                <p className="mt-1 text-4xl max-md:text-3xl font-semibold start-topv-title">
                  {chairperson.role.name}
                </p>
                <a href={chairperson.linkedin}>
                  <img
                    src="https://i.imgur.com/KJP9wXt.png"
                    width="50vw"
                    className="mt-4 object-center"
                  />
                </a>
              </div>
          
              <ul
                role="list"
                className="sm:ml-16 grid gap-x-3 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
              >
                {officers.map((person) =>
                  person.id == chairperson.role.zone ? (
                    <li key={person.name}>
                      <div className="flex items-center gap-x-6 transition-all hover:scale-110 duration-300 ease-out">
                        <img
                          alt=""
                          src={person.imageUrl}
                          className="h-[16vh] w-auto rounded-full darkbg"
                        />
                        <div>
                          <h3 className="text-base font-semibold leading-7 tracking-tight text-stone-100 startm">
                            {person.name}
                          </h3>
                          <p className="font-semibold leading-6 text-yellow-400 start-title">
                            {person.role}
                          </p>
                          <a href={person.linkedin}>
                            <img
                              alt=""
                              src="https://i.imgur.com/KJP9wXt.png"
                              width="25vw"
                              height=""
                              className="mt-2"
                            />
                          </a>
                        </div>
                      </div>
                    </li>
                  ) : null
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
