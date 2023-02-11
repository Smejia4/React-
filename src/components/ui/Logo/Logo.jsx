import './logo.css'

export const Logo = () => {
    const urlLogo = "https://res.cloudinary.com/dymawfuwu/image/upload/v1676061311/React-Rozo/logo_py1tl9.svg";
  return (
    <div className='containerLogo'>
        <img src={urlLogo} alt="image logo" className='imgLogo'/>
    </div>
  )
}
