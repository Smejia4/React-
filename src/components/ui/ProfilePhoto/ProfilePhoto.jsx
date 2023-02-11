import "./profilePhoto.css";

export const ProfilePhoto = () => {
    const urlProfilePhoto = "https://res.cloudinary.com/dymawfuwu/image/upload/v1676061717/React-Rozo/profilePhoto_w2yhxj.svg";
  return (
    <div className="containerProfilePhoto">
        <a href=""><img src={urlProfilePhoto} alt="" className="imgProfile"/></a>
    </div>
  )
}
