import React from "react";
import {IconButton, makeStyles} from "@material-ui/core";
import {MoreVert} from "@material-ui/icons";



export const MoreButton: React.VFC<{handler: React.MouseEventHandler}> = ({handler}) => {
    const style = (makeStyles({
        button: {
            padding: 8
        }
    }))();

    return (
        <IconButton className={style.button} onClick={handler}>
            <MoreVert/>
        </IconButton>
    )
}