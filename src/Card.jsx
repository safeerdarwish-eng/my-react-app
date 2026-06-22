import profilepic from './assets/hero.png'

function Card() {
  return (
    <div className="card">
      <img className="img" src={profilepic} alt="Profile" />
      <h1>Hi i am darwish</h1>
      <p>this is my first React project</p>
    </div>
  );
}

export default Card;
 