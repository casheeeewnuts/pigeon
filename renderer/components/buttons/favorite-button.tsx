import React from "react";
import {IconButton, makeStyles} from "@material-ui/core";
import {Favorite, FavoriteBorder, MoreVert} from "@material-ui/icons";

type Props = {
    handler?: React.MouseEventHandler,
    favored: boolean
}

export const FavoriteButton: React.VFC<Props> = ({handler, favored}) => {
    const style = (makeStyles({
        button: {
            padding: 8
        }
    }))();

    return (
        <IconButton className={style.button} onClick={handler}>
            {
                favored
                    ? <Favorite color="secondary"/>
                    : <FavoriteBorder color='secondary'/>
            }
        </IconButton>
    )
}