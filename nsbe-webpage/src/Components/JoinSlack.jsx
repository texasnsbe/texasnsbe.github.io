import slackimage from '../assets/slackimage.png'

export default function JoinSlack() {
  return (
    <>
        <div className="flex justify-center py-[7vh]">
          <div className="flex flex-col">
            <p className="miniheader sm:text-lg font-semibold tracking-wider leading-relaxed text-black">
                Everything NSBE!
            </p>
            <h2 className="subheaderstyle md:text-7xl text-gray-900 transition-all hover:scale-105 duration-300 ease-out mb-10">
                Join Slack
            </h2> 
            <a href="https://join.slack.com/t/nsbemembers/shared_invite/zt-2tubhomb7-AAXwyNg0wrWSqWtu1eUeYA">
                <img
                src={slackimage}
                className="object-cover h-[75vh] w-[75vw] max-lg:h-[60vh] max-md:h-[50vh] max-sm:h-[35vh] max-sm:w-[90vw] darkbg transition-all hover:scale-105 duration-300 ease-out"
                /> 
            </a>
            
          </div>
        </div>
    </>
  );
};