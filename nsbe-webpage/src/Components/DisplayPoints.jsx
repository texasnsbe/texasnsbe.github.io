export default function DisplayPoints() {
    return (
      <>
        <div className="flex justify-center py-[5vh]">
          <div className="flex flex-col">
            <p className="miniheader sm:text-xl font-semibold tracking-wider leading-relaxed text-black">
              Most Active Members!
            </p>
            <h2 className="subheaderstyle text-gray-900 transition-all hover:scale-105 duration-300 ease-out mb-3">
              Leaderboard
            </h2>
            <iframe
              src="https://script.google.com/macros/s/AKfycbyNfzaTwzEEDc45ZqGRdDVbjS2XCpv2cn8KLFxG_rgPKd8Qt9EH5mYJWWTsO92d0qaD/exec"
              className="h-[73vh] w-[60vw] max-lg:h-[40vh] max-md:h-[35vh] max-sm:h-[35vh] max-sm:w-[90vw] darkbg transition-all hover:scale-105 duration-300 ease-out"
            />
          </div>
        </div>
      </>
    );
  };