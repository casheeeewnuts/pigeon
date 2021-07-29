import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import {Drawer, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  aside: {
    minWidth: 240,
  }
}));

const MainPage: React.VFC = () => {
  const classes = useStyles();

  return (
      <Layout>
        <Drawer anchor='left' open={true} className={classes.aside} classes={{paper: classes.aside}}>
          <p>
            <Link href="/about">
              <a>About</a>
            </Link>
          </p>
          <p>
            <Link href="/main">
              <a>Main</a>
            </Link>
          </p>
        </Drawer>
      </Layout>
  )
}

export default MainPage