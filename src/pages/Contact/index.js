import './styles.css'
import {Nav} from "react-bootstrap";

const data = [
    {name: 'phone', logo: '', content: '+62 822-8935-4014'},
    {name: 'email', logo: '', content: 'fitri.tpdua@gmail.com'},
    {name: 'address', logo: '', content: 'Jakarta, Indonesia'},
]

export const Contact = () => {
    return(
        <div className='footer' id="contact">
            <h1>Contact Info</h1>
            {data.map((item) => (
                <li>{item.content}</li>
            ))}
        </div>
    )
}