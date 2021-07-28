import React from "react";
import {AppBar, Card, CardContent, Paper, Toolbar, Typography} from "@material-ui/core";

export const Main: React.VFC = () => {
    return (
        <>
            {/*<AppBar style={{height: '50px'}}></AppBar>*/}
            <main>
                <Paper>
                    <Card>
                        <CardContent>
                            <Typography variant='h6'>
                                Software Design
                            </Typography>
                        </CardContent>
                    </Card>
                </Paper>
            </main>
        </>
    )
}