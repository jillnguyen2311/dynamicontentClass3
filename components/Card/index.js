export default function Card({
    degree = "",
    employeeInfo = "",
    colour = "purple",
    font = 0,
    image = 'icon/personTwo.png'
}) {
    return(
        <div style={{backgroundColor: colour, fontSize: font}}>
        {
            colour === "pink" ? <img src={'icon/person.png'} width= "50"/> :
            colour === "lightblue" ? <img src={image} width = "50"/> :
                                <img src={'icon/personThree.png'} width = "50"/>
        }

        {degree}
        {employeeInfo}

        </div>
    )
}