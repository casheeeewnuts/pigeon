import React from "react";
import {Card, Container, createStyles, Divider, Grid, IconButton, makeStyles, Paper, Theme} from "@material-ui/core";
import {Dehaze} from "@material-ui/icons";
import Layout from '../components/Layout'

import {useLoading} from "../hooks/useLoading";
import {useSwitchableAside} from "../hooks/useSwitchableAside";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
            height: 100
        },
    }),
);

const IndexPage = () => {
    const [toggleLoading, Loading] = useLoading();
    const [opened, toggleOpened, close, Aside] = useSwitchableAside();
    const classes = useStyles();

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
                    <Grid container item xs={12} spacing={2}>
                        <Grid item xs={1}>
                            <Card className={classes.paper}>item</Card>
                        </Grid>
                        <Grid item xs={1}>
                            <Card className={classes.paper}>item</Card>
                        </Grid>
                        <Grid item xs={1}>
                            <Card className={classes.paper}>item</Card>
                        </Grid>
                        <Grid item xs={1}>
                            <Card className={classes.paper}>item</Card>
                        </Grid>
                        <Grid item xs={1}>
                            <Card className={classes.paper}>item</Card>
                        </Grid>
                        <Grid item xs={1}>
                            <Card className={classes.paper}>item</Card>
                        </Grid>
                        <Grid item xs={1}>
                            <Card className={classes.paper}>item</Card>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <Loading/>
        </Layout>
    )
}

export default IndexPage
