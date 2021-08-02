import React from "react";
import {
    Card, CardHeader,
    CardMedia,
    Container,
    createStyles,
    Divider,
    Grid,
    IconButton,
    makeStyles,
    Paper,
    Theme
} from "@material-ui/core";
import {Dehaze, MoreVert} from "@material-ui/icons";
import Layout from '../components/Layout'

import {useLoading} from "../hooks/useLoading";
import {useSwitchableAside} from "../hooks/useSwitchableAside";
import {BookCard} from "../components/book";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
    }),
);

const IndexPage = () => {
    const [toggleLoading, Loading] = useLoading();
    const [opened, toggleOpened, close, Aside] = useSwitchableAside();
    const classes = useStyles();
    global.api.hi()

    return (
        <Layout>
            <Aside opened={opened} close={close}/>
            <div onClick={toggleOpened}>
                <IconButton>
                    <Dehaze/>
                </IconButton>
            </div>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid container item xs={12} spacing={3}>
                        <Grid item xs={2}>
                            <BookCard book={{title: '', cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}} />
                        </Grid>
                        <Grid item xs={2}>
                            <BookCard book={{title: '', cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}} />
                        </Grid>
                        <Grid item xs={2}>
                            <BookCard book={{title: '', cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}} />
                        </Grid>
                        <Grid item xs={2}>
                            <BookCard book={{title: '', cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}} />
                        </Grid>
                        <Grid item xs={2}>
                            <BookCard book={{title: '', cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}} />
                        </Grid>
                        <Grid item xs={2}>
                            <BookCard book={{title: '', cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}} />
                        </Grid>
                        <Grid item xs={2}>
                            <BookCard book={{title: '', cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}} />
                        </Grid>
                        <Grid item xs={2}>
                            <BookCard book={{title: '', cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'}} />
                        </Grid>
                    </Grid>
                    <Divider/>
                </Grid>
            </div>
            <Loading/>
        </Layout>
    )
}

export default IndexPage
