import React, { FC } from 'react'
import { Clear, PlayCircleOutline } from '@material-ui/icons'
import REPLButton from '../REPLButton/REPLButton'

interface REPLGroupButton {
    clearAction: () => void
    runAction: () => void
}

const REPLGroupButton: FC<REPLGroupButton> = ({ clearAction, runAction }): JSX.Element =>
    <div>
        <REPLButton Icon={PlayCircleOutline} action={runAction} />
        <REPLButton Icon={Clear} action={clearAction} />
    </div>

export default REPLGroupButton