import React from "react";
import {
    Box,
    Card, CardHeader,
    CardMedia,
    Container,
    createStyles,
    Divider,
    Grid,
    IconButton,
    makeStyles,
    Paper, TextField,
    Theme
} from "@material-ui/core";
import {Dehaze, MoreVert, SearchRounded} from "@material-ui/icons";
import Layout from '../components/Layout'

import {useLoading} from "../hooks/useLoading";
import {useSwitchableAside} from "../hooks/useSwitchableAside";
import {BookCard} from "../components/book";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        header: {
            height: 60
        },
        textArea: {
            margin: '0 auto',
            width: '25%'
        }
    }),
);

const IndexPage = () => {
    const [toggleLoading, Loading] = useLoading();
    const [opened, toggleOpened, close, Aside] = useSwitchableAside();
    const classes = useStyles();

    return (
        <Layout>
            <Aside opened={opened} close={close}/>
            <Box className={classes.header}>
                <Grid container xs={12}>
                    <Grid item xs>
                        <div>
                            <IconButton onClick={toggleOpened}>
                                <Dehaze/>
                            </IconButton>
                        </div>
                    </Grid>
                    <Grid item xs={10} justifyContent='space-around'>
                        <Grid item className={classes.textArea}>
                            {/*<SearchRounded/>*/}
                            <TextField fullWidth={true}/>
                        </Grid>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
            </Box>
            <Container maxWidth='lg'>
                <div className={classes.root}>
                    <Grid container spacing={3}>
                        <Grid container item xs={12} spacing={3}>
                            <Grid item xs={2}>
                                <BookCard book={{
                                    title: '',
                                    cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                }}/>
                            </Grid>
                            <Grid item xs={2}>
                                <BookCard book={{
                                    title: '',
                                    cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                }}/>
                            </Grid>
                            <Grid item xs={2}>
                                <BookCard book={{
                                    title: '',
                                    cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                }}/>
                            </Grid>
                            <Grid item xs={2}>
                                <BookCard book={{
                                    title: '',
                                    cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                }}/>
                            </Grid>
                            <Grid item xs={2}>
                                <BookCard book={{
                                    title: '',
                                    cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                }}/>
                            </Grid>
                            <Grid item xs={2}>
                                <BookCard book={{
                                    title: '',
                                    cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                }}/>
                            </Grid>
                            <Grid item xs={2}>
                                <BookCard book={{
                                    title: '',
                                    cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                }}/>
                            </Grid>
                            <Grid item xs={2}>
                                <BookCard book={{
                                    title: '',
                                    cover: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'
                                }}/>
                            </Grid>
                        </Grid>
                        <Divider/>
                    </Grid>
                </div>
            </Container>
            <Loading/>
        </Layout>
    )
}

export default IndexPage
