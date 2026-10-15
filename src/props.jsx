

function User(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>Age: {props.age}</p>
      <p>Country: {props.country}</p>
    </div>
  );
}


export default User;