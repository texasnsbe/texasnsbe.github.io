import LoopingVideo from './LoopingVideo'

export default function NewHeroSect() {
    return ( 
        <div className='flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className="herostyle tracking-tight transition-all hover:scale-105 duration-300 ease-out">
                    WELCOME!
                </h1>
                <div> 
                    <LoopingVideo />
                </div>  
            </div>
        </div>
    )
}
