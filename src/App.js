import './App.css';
import Nav from './components/navbar.jsx';
import Main from './components/main.jsx';
import Card from './components/card.jsx';
import data from "./data.js";

function App() {
  const cards = data.map(item => {
    return (
      <Card
        img={item.coverImg}
        rating={item.stats.rating}
        reviewCount={item.stats.reviewCount}
        location={item.location}
        title={item.title}
        price={item.price}
      />
    )
  })

  return (
    <div>
      <Nav />
      <Main/ >
      <section className="cards-list">
        {cards}
      </section>
    </div>
  )

}

export default App;
