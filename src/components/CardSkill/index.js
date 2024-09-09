import './CardSkill.css'

const CardSkill = (props) => {
    return (

        <div className='card-skill'>
            <img src={props.img} alt={props.alt}></img>
        </div>

    )
}

export default CardSkill;