import { Card } from '../../Components/Card';
import './style.css';

export function Home() {
  return (
    <>
      <div className="container">
        <h1>Lista de Presença</h1>
        <input type="text" placeholder="Digite o nome..." />
        <button type="button">Adcionar</button>
        
        <Card name="Eduardo Silva" time="10:55:25" />
      </div>
    </>
  )
}