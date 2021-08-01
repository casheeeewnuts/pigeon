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
            position: 'relative'
        },
        cardMedia: {
            height: 200,
            position: 'relative'
        }
    }),
);

export const BookCard: React.VFC<Props> = ({book}) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.cardMedia} image={book.cover}>
                <FavoriteButton favored={true} />
            </CardMedia>
        </Card>
    )
}

