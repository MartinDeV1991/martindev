
import martinImage from './martin2.jpg';

const Info = () => {

    const fullName = "Martin de Valois";
    const jobTitle = "Software developer";


    const projects = `
    Welkom op mijn website! Op deze website kun je informatie vinden over mijn werkervaring, opleidingen en technische vaardigheden.
    Daarnaast zijn hier ook enkelen van mijn projecten te zien.
    `;

    return (
        <div className='cv-container' >
            <div className='info-section'>
                <div>
                    <div style={{ fontWeight: '900', fontSize: '32px', margin: '0px' }}>{fullName}</div>
                    <div style={{ fontWeight: '700', fontSize: '32px', marginBottom: '50px' }}>{jobTitle}</div>

                    <div className='intro-section'>
                        {projects}
                    </div>
                </div>
                <img className='profile-image' src={martinImage} alt="Martin" />
            </div>
        </div>
    )
}
export default Info;