import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = (props) => {
  const monsters = props.monsters;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return (
          <div key={monster.id}>
            <Card monster={monster} />
          </div>
        );
      })}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           return (
//             <div key={monster.id}>
//               <Card monster={monster} />
//             </div>
//           );
//         })}
//       </div>
//     );
//   }
// }

export default CardList;
