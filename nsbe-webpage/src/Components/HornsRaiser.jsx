import image from "../assets/eweek.jpg";

export default function HornsRaiser() {
  return (
    <>
      <div className="flex justify-center py-[5vh]">
        <div className="flex flex-col">
          <p className="miniheader sm:text-xl font-semibold tracking-wider  text-black">
            Build Community w/ Engineers
          </p>
          <h2 className="subheaderstyle text-gray-900 transition-all hover:scale-105 duration-300 ease-out mb-3">
            E-Week is HERE!
          </h2>
          <a
            href="https://join.slack.com/t/snapeweek2025/shared_invite/zt-2zoce5g0i-XlMwgJuwFH56SomE9iwBxg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={image}
              className="object-cover h-[73vh] w-[60vw] max-lg:h-[40vh] max-md:h-[35vh] max-sm:h-[35vh] max-sm:w-[90vw] darkbg transition-all hover:scale-105 duration-300 ease-out"
            />
          </a>
        </div>
      </div>
    </>
  );
}