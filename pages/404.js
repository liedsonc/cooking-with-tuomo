import Image from 'next/image';
import img from '../public/images/404.png';
import Link from 'next/link';


const page404 = () => {
    return ( 
        <div
        style={{ 
            backgroundColor: 'primary',
        }}>
            <div className="right" 
            style={{ 
            float: 'right', 
            margin:"100px 150px"
            }}>

                <Image 
                src={img} 
                alt="404"
                width={500}
                height={500}
                />

            </div>


            <div 
            className="left"
            style={{
                float: 'left',
                marginLeft: '100px'
            }}
            >
                <h1 style={{
                    fontSize: '150px',
                    marginBottom: '50px',
                    marginTop: '150px'
                }}>404</h1>
                <h3
                style={{
                    marginTop: '-50px',
                    fontSize: '50px',
                }}
                >Ops...</h3>
                <br />
                <p
                style={{
                    marginTop: '-50px'
                }}
                >The page you are looking for is not found.</p>

                <Link href={'/'}>
                    <button 
                    style={{
                        padding: '30px 70px',
                        backgroundColor: 'transparent',
                        borderRadius: '20px',
                        borderColor: '#000',
                        fontColor: '#fff',
                        fontSize: '17px',
                    }}
                    >
                        Back to Homepage
                    </button>

                </Link>

                

            </div>

        </div>
     );
}
 
export default page404;