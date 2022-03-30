import {ReactComponent as Pin} from '../../src/assets/fill-219location.svg';

export default function Card (props) {
    return (
        <section>
            <div className='card-component'>
                <img src={props.item.imageUrl} />

                <div className='details'>
                    <div className="location-div">
                        <div className="location-text-and-pin">
                            <Pin className='pin'/>
                            <p>{props.item.location}</p>
                        </div>
                        <a href={props.item.googleMapsUrl} target='_blank'>View on Google Maps</a>
                    </div>

                    <h3>{props.item.title}</h3>
                    <h4>{props.item.startDate} - {props.item.endDate}</h4>
                    <p>{props.item.description}</p>
                </div>

            </div>
        </section>
        
    )
}