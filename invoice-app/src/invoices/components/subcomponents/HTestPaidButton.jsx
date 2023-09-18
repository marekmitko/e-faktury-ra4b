import * as React from 'react';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
// import { createStyles, makeStyles } from '@mui/material/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';

// const useStyles = makeStyles()((theme) => {
//         return {
//           root: {
//             color: theme.palette.primary.main,
//           },
//         };
//       });
// const theme = createTheme();



const FRUITS = [
  '🍏 Apple',
  '🍌 Banana',
  '🍍 Pineapple',
  '🥥 Coconut',
  '🍉 Watermelon',
];


const ColoredBox = ({ children }) => (
    <Box p={2} style={{ backgroundColor: "orange", border: "1px solid black" }}>
      {children}
    </Box>
  );


function renderItem({ item, handleRemoveFruit }) {
  return (
    <ListItem
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          title="Delete"
          onClick={() => handleRemoveFruit(item)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={item} />
    </ListItem>
  );
}

export default function HGroupExample() {
  const [fruitsInBasket, setFruitsInBasket] = React.useState(FRUITS.slice(0, 3));

  const handleAddFruit = () => {
    const nextHiddenItem = FRUITS.find((i) => !fruitsInBasket.includes(i));
    if (nextHiddenItem) {
      setFruitsInBasket((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const handleRemoveFruit = (item) => {
    setFruitsInBasket((prev) => [...prev.filter((i) => i !== item)]);
  };

  const addFruitButton = (
    <Button
      variant="contained"
      disabled={fruitsInBasket.length >= FRUITS.length}
      onClick={(event) => {
            event.stopPropagation();
            handleAddFruit();
        }
    }
      >
      <CurrencyExchangeIcon />
    </Button>
  );


//   const classes = useStyles();
  const [columns, setColumns] = React.useState([]);

  const addColumn = () => {
    setColumns((prev) => [...prev, {}]);
     };


  return (
    <div>
      {addFruitButton}
      <List sx={{ mt: 1 }}>
      <Button variant="contained"  
        onClick={(event) => {
            event.stopPropagation();
            addColumn();
            }
        }
        >
        Add column
      </Button>
      <TransitionGroup style={{ display: "flex" }}>
        {columns.map((_, i) =>
          i >= columns.length - 2 ? (
            <CSSTransition
              key={i}
              timeout={300}
            //   classNames={{
            //     appear: classes["slide-enter"],
            //     appearActive: classes["slide-active-enter"],
            //     appearDone: classes["slide-done-enter"],
            //     enter: classes["slide-enter"],
            //     enterActive: classes["slide-active-enter"],
            //     enterDone: classes["slide-done-enter"],
            //     exit: classes["slide-exit"],
            //     exitActive: classes["slide-active-exit"],
            //     exitDone: classes["slide-done-exit"]
            //   }}
            >
              <ColoredBox>
              Content-{i} 
              <input />
              </ColoredBox>
            </CSSTransition>
          ) : null
        )}
      </TransitionGroup>
      </List>
    </div>
  );
}