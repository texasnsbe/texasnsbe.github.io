import { Link } from "react-router-dom";

export default function OfficersButton() {
  return (
    <div className="flex justify-center py-[8vh] mb-[4vh]">
      <Link
        to="/officers"
        className="inline-flex items-center justify-center rounded-[24px] bg-orange-700 startm px-8 py-3 text-center font-semibold text-white hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-all hover:scale-105 duration-300 ease-out buttondarkbg"
      >
        Meet Our Officers
      </Link>
    </div>
  );
}
