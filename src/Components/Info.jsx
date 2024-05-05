
import martinImage from './martin.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Info = () => {

    const fullName = "Martin de Valois";
    const jobTitle = "Software developer";
    const linkedIn = "linkedin.com/in/martindevalois";
    const email = "martin_de_v@hotmail.com"

    const info = [
        { name: "LinkedIn: ", info: linkedIn, icon: faLinkedin },
        { name: "E-mail: ", info: email, icon: faEnvelope },
    ]
    return (
        <div className='cv-container' >
            <div className='info-section'>
                <div>
                    <div style={{ fontWeight: '900', fontSize: '32px', margin: '0px' }}>{fullName}</div>
                    <div style={{ fontWeight: '700', fontSize: '32px', marginBottom: '50px' }}>{jobTitle}</div>
                    <div>
                        {info.map((item, itemIndex) => (
                            <div style={{ marginTop: '10px' }} key={itemIndex}>
                                <span style={{ fontWeight: '900', fontSize: '16px', verticalAlign: 'middle' }}>
                                    <FontAwesomeIcon icon={item.icon}></FontAwesomeIcon> {item.info}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <img className='profile-image' src={martinImage} alt="Martin" style={{  }} />
            </div>
        </div>
    )
}
export default Info;