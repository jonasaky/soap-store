import * as React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import data from '../../data.json';
import './Card.css';

export default function Card() {
  const { id } = useParams();
  const item = data.items.find(i => i.id === parseInt(id));
  const formatter = Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

  return (
    item 
    ?
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
          <Button variant='contained' >Buy {formatter.format(item.price)}</Button>
        </div>
    </div>
    : <div style={{ display: 'flex', margin: 25 }}>Product Not Found</div>
  );
}
