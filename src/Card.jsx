
import profilePic from './assets/Darwish.jpg'

function Card() {
  return (
    <div className="Card">
      <img className="card-image" src={profilePic} alt="Darwish profile" />
      <h2 className="card-title"> Darwish Lab </h2>
      <p  className="card-text"> i make youtube videos and also
     playing videos gaming </p>
    </div>
  );
}

export default Card;
