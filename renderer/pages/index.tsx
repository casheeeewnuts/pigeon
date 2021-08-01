import React from "react";
import {Container, IconButton} from "@material-ui/core";
import {Dehaze} from "@material-ui/icons";
import Layout from '../components/Layout'

import {useLoading} from "../hooks/useLoading";
import {useSwitchableAside} from "../hooks/useSwitchableAside";


const IndexPage = () => {
    const [toggleLoading, Loading] = useLoading();
    const [opened, toggleOpened, close, Aside] = useSwitchableAside();

    return (
        <Layout>
            <Aside opened={opened} close={close}/>
            <div onClick={toggleOpened}>
                <IconButton>
                    <Dehaze/>
                </IconButton>
            </div>
            <Container>
                <div>

                </div>
            </Container>
            <Loading/>
        </Layout>
    )
}

export default IndexPage
