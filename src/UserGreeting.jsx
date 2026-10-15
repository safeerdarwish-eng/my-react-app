
function UserGreeting(props) {
  
  const loginMassage = <h2 className="login-Massage">welcome {props.username}</h2>
  
  const notLogin = <h2 className="not-Login"> please loggedin to continue</h2>;
  
  return (props.isLoggedin ? loginMassage : notLogin);
  
}; 
  
  
export default UserGreeting;
