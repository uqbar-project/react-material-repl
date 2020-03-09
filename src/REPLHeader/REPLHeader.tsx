import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import FillWithEmptySpace from '../FillWithEmptySpace'
import REPLGroupButton from '../REPLButtonGroup/REPLButtonGroup'
import useStyles from "./styles"

interface REPLHeaderProps {
    welcomeMessage: string
    clearAction: () => void
    runAction: () => void
  }

const REPLHeader: FC<REPLHeaderProps> = ({ welcomeMessage, clearAction, runAction }: REPLHeaderProps): JSX.Element => {

    const classes = {
        ...useStyles()
    }

    return (
        <div className={classes.root}>
            <Typography className={classes.title}>
                {welcomeMessage}
            </Typography>
            <FillWithEmptySpace />
            <REPLGroupButton runAction={runAction} clearAction={clearAction} />
        </div>
    )
}

export default REPLHeader