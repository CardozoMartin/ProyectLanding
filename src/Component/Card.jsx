
import "./cardstyle.css"

const Card = (props) => {
    const { mesage, title, icon } = props;
  return (
 
      <div className="card">
        <div className="header">
          <span className="icon">
            {icon}
          </span>
          <p className="alert">{title}</p>
         
        </div>
        <p className="message">
         {mesage}
        </p>
       
      </div>
   
  );
}



export default Card;
