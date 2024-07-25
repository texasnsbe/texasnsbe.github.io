export default function GoogleCal() {
  return (
    <>
     <div className="purple-bg py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl headerstyle subheaderstyle text-gray-900 sm:text-7xl transition-all hover:scale-105 duration-300 ease-out">Calendar</h2>
          <p className="mt-2 text-lg tracking-wider leading-8 text-gray-600 border-b border-gray-200 mx-auto pb-10">
            Never miss an event, everything is on our calendar!
          </p>
        </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
        <iframe
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23eee9f7&mode=MONTH&showPrint=0&showTitle=0&showTz=0&src=dGV4YXNuc2JldGVsZWNvbW11bmljYXRpb25zQGdtYWlsLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%23039BE5&color=%2333B679&color=%230B8043"
        style={{width: "75%", minHeight: "600px" }}
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