export default function DisplayPoints() {
    return (
      <>
       <div className="purple-bg py-16 sm:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
            <p className="mt-2 font-semibold text-lg tracking-wider leading-8 text-black mx-auto">
              Check out NSBE's most active members!
            </p>
            <h2 className="text-3xl headerstyle subheaderstyle text-gray-900 sm:text-7xl transition-all hover:scale-105 duration-300 ease-out pb-10">Leaderboard</h2>
            
          </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
          <iframe
            src="https://script.google.com/macros/s/AKfycbyNfzaTwzEEDc45ZqGRdDVbjS2XCpv2cn8KLFxG_rgPKd8Qt9EH5mYJWWTsO92d0qaD/exec"
            style={{width: "100%", minHeight: "600px" }}
            className="darkbg transition-all hover:scale-105 duration-300 ease-out"
            height="600"
            frameBorder="0"
            scrolling="no"
          />
        </div>
        </div>
      </div>
      </>
    );
  };