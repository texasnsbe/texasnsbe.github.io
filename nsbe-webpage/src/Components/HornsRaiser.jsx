import slackimage from "../assets/hornraise.png";

export default function HornsRaiser() {
  return (
    <>
      <div className="flex justify-center py-[5vh]">
        <div className="flex flex-col">
          <p className="miniheader sm:text-xl font-semibold tracking-wider  text-black">
            Join Fundraiser!
          </p>
          <h2 className="subheaderstyle text-gray-900 transition-all hover:scale-105 duration-300 ease-out mb-3">
            Donate Here
          </h2>
          <a
            href="https://hornraiser.utexas.edu/project/44046?clid=ZO2UL49IVFQ39XP6eB9Ck7&utm_campaign=amb_share&utm_medium=plain&utm_source=scalefunder&utm_content=ixggnkvgvw8jzxc0xikvv38"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={slackimage}
              className="object-cover h-[75vh] w-[75vw] max-lg:h-[60vh] max-md:h-[50vh] max-sm:h-[35vh] max-sm:w-[90vw] darkbg transition-all hover:scale-105 duration-300 ease-out"
            />
          </a>
        </div>
      </div>
    </>
  );
}