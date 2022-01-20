import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import data from '../../data.json';
import './Home.css';
import { useUserContext } from '../../userContext';
import { ImageListItemBar } from '@mui/material';

function Home() {
  const context = useUserContext();
  const { state: { user } } = context;
  return (
    <>
      <main>
        {user?.isLogged ? <h2>Welcome {user?.first}!</h2>  : <h2>Welcome to the Soap Store!</h2>}
        <p>You will find a whole bubble new experience.</p>
        <Box className='box-container'>
            <ImageList variant="masonry" cols={3} gap={8}>
                {data.items.map((item) => (
                <Link to={`/card/${item.id}`} key={item.id}>
                    <ImageListItem>
                      <img
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.name}
                      loading="lazy"
                      />
                      <ImageListItemBar
                        title={item.name}
                        subtitle={item.description}
                      />
                    </ImageListItem>
                </Link>
                ))}
            </ImageList>
        </Box>
      </main>
    </>
  );
}

export default Home;
