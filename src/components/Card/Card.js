import * as React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Alert, Button } from '@mui/material';
import data from '../../data.json';
import './Card.css';

export default function Card() {
  const { id } = useParams();
  const item = data.items.find(i => i.id === parseInt(id));
  const formatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
  const [showAlert, setShowAlert] = React.useState(false);
  const visibility = showAlert ? 'visible' : 'hidden';

  const buyItem = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 2000);
  };

  return (
    item 
    ?
    <>
      <div className='container'>
          <img className='card-img' src={item.img} alt={item.name} style={{ marginRight: 25, maxWidth: 300, objectFit: 'cover' }} loading='lazy'/>
          <div style={{ textAlign: 'initial' }}>
            <Typography gutterBottom variant="h5" component="div">
              { item.name }
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {item.description}
            </Typography>
            <br />
            <Button variant='contained' onClick={() => buyItem()} >Buy {formatter.format(item.price)}</Button>
          </div>
      </div>
      <Alert severity="success" className='alert' style={{ visibility }}>Thanks for your purchase!</Alert>
    </>
    : <div style={{ display: 'flex', margin: 25 }}>Product Not Found</div>
  );
}
