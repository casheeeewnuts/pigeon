import React, {useState} from "react";
import {IconButton, makeStyles} from "@material-ui/core";
import {Favorite, FavoriteBorder, MoreVert} from "@material-ui/icons";

type Props = {
    handler?: React.MouseEventHandler,
    // favored: boolean
}

export const FavoriteButton: React.VFC<Props> = ({handler}) => {
    const style = (makeStyles({
        button: {
            padding: 8,
        }
    }))();

    const [isFavored, setIsFavored] = useState(false);

    return (
        <IconButton className={style.button} onClick={() => setIsFavored(!isFavored)}>
            {
                isFavored
                    ? <Favorite color="secondary"/>
                    : <FavoriteBorder color='secondary'/>
            }
        </IconButton>
    )
}