import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import FillWithEmptySpace from '../FillWithEmptySpace'
import useStyles from "./styles"

interface REPLFooterProps {
    version: string
}

const REPLFooter: FC<REPLFooterProps> = ({ version }: REPLFooterProps): JSX.Element => {

    const classes = {
        ...useStyles()
    }

    return (
        <div className={classes.root}>
            <FillWithEmptySpace />
            <Typography className={classes.version}>
                {version}
            </Typography>
        </div>
    )
}

export default REPLFooter