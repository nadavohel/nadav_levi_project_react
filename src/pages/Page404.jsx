import { Link } from 'react-router-dom';
import imgPage404 from '../images/page404/imgPage404.png'

export default function Page404() {

    return (
        <div className="page404">
            <div>
                <div className="img404">
                    <img src={imgPage404} alt="Cartoon character crying" />
                    <div>
                        <h1>404:</h1>
                        <h1>Page Not Found</h1>
                    </div>
                </div>
                <div className='ohOh404'>
                    <div>
                        <h1>oh oh</h1>
                        <h1>I'm sure it will work one day!!!</h1>
                    </div>
                </div>
            </div>
            <Link
                className='linkEndGoBackTo' 
                to='/'
            >
                <h1 className='linkToHome'>Go to Home Page Now</h1>
            </Link>
        </div>
    );
}