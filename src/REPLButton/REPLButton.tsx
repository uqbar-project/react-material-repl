import React, { FC } from 'react'
import { IconButton } from '@material-ui/core'

interface REPLButtonProps {
    Icon: any
    action: () => void
  }

const REPLButton: FC<REPLButtonProps> = ({ Icon, action }: REPLButtonProps): JSX.Element =>
    <IconButton component="span" onClick={action}>
        <Icon />
    </IconButton>

export default REPLButton