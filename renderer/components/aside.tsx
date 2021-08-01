import React from "react";
import Link from "next/link"
import {Divider, Drawer, IconButton, makeStyles} from "@material-ui/core";
import {ChevronLeft} from "@material-ui/icons";

type Props = {
    collections?: [],
    opened: boolean,
    close?: React.MouseEventHandler
}

const useStyles = makeStyles({
    base: {
        minWidth: 240,
        maxWidth: 240,
        position: "relative"
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    noMarkedList: {
        listStyle: 'none',
        paddingLeft: 10
    },
    nestedNoMarkedList: {
        listStyle: 'none',
        paddingLeft: 20
    },
    content: {}
})

const Aside: React.VFC<Props> = ({opened = false, close}) => {
    const style = useStyles();

    return (
        <Drawer
            className={style.base}
            anchor="left"
            open={opened}
            classes={{
                paper: style.base
            }}
        >
            <div className={style.header} onClick={close}>
                <IconButton>
                    <ChevronLeft/>
                </IconButton>
            </div>
            <Divider/>
            <div className={style.content}>
                <ul className={style.noMarkedList}>
                    <li>
                        <p>Libraries</p>
                        <ul className={style.nestedNoMarkedList}>
                            <li>
                                <Link href="/">
                                    <a>All</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Favorites</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/">
                                    <a>Readings</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <p>Collections</p>
                        <ul className={style.nestedNoMarkedList}>
                            <li>
                                <Link href="/main">
                                    <a>Main</a>
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </Drawer>
    )
}

export {Aside}
