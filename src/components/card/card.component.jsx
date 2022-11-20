import "./card.styles.css";

const Card = (props) => {
  const { id, name, email } = props.monster;

  return (
    <div className="card-container">
      <img
        alt={`monster ${name}`}
        key={id}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div className="card-container">
//         <img alt={`monster ${name}`} key={id} src={`https://robohash.org/${id}?set=set2&size=180x180`}/>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
