export default function GoogleCal() {
  return (
    <>
     <div className="purple-bg py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <p className="mt-2 font-semibold text-lg tracking-wider leading-8 text-black mx-auto">
            Never miss an event, everything is here!
          </p>
        <h2 className="text-3xl headerstyle subheaderstyle text-gray-900 sm:text-7xl transition-all hover:scale-105 duration-300 ease-out pb-10">Calendar</h2> 
        </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex justify-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FChicago&bgcolor=%23ffffff&showTitle=0&showNav=0&showDate=0&showPrint=0&showTz=0&showCalendars=0&showTabs=0&src=c2VjcmV0YXJ5dXRuc2JlQGdtYWlsLmNvbQ&src=MmE2bDFobHR0MWM0MGk0cnZmdG1sb2xnaWdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=bG9vNG1ldW1mYmg0OTlpcDdyN29mbmV0b2tAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%234285F4&color=%23F4511E&color=%23F6BF26&color=%237CB342"
          style={{width: "100%", minHeight: "400px"}}
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