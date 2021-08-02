import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  createStyles,
  IconButton,
  makeStyles,
  Theme
} from "@material-ui/core";
import {MoreVert} from "@material-ui/icons";
import {MoreButton} from "./buttons/more-button";
import {FavoriteButton} from "./buttons/favorite-button";


export type Book = {
  title?: string,
  cover?: string
}

type Props = {
  book: Book
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      card: {
        padding: 0,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        height: 200,
        width: 150,
      },
      cardMedia: {
        height: 200,
        width: 150,
        position: 'relative'
      },
      favoriteButton: {
        position: 'absolute',
        top: 0,
        right: 0
      }
    }),
);

export const BookCard: React.VFC<Props> = ({book}) => {
  const classes = useStyles();

  return (
      <div>
        <Card className={classes.card}>
          <CardMedia className={classes.cardMedia} image={book.cover}>
            <div className={classes.favoriteButton}>
              <FavoriteButton />
            </div>
          </CardMedia>
        </Card>
      </div>
  )
}

