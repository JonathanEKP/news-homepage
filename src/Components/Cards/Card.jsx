import './Cards.css'


function Card({sourceImage, number, title, text}){
    return(<div className='card border-0'>
        <div className="row g-0 gap-3">

            <div className="col-3">
                <img src={sourceImage} alt="Image to represent content" className='card-img'/>
            </div>

            <div className='col-8'>
                <div className='card-body p-0 m-0'>
                    <div className='card-number'>
                        <p className='p-0 m-0'>{number}</p>
                    </div>

                    <div className='card-title'>
                        <p className='p-0 m-0'>{title}</p>
                    </div>

                    <div className='card-text'>
                        <p className='p-0 m-0'>{text}</p>
                    </div>

                </div>
            </div>

        </div>
    </div>)
}



export default Card