import '../CSS/index.css';
import Header from './header';
import Card from './card';
import cards from './data';

function App() {
  const cardDetails = cards.map(item => {
    return <Card 
      key={item.id}
      item={item}
    />
  })


  return (
    <div>
      <Header />
      {cardDetails}
    </div>
  );
}

export default App;
