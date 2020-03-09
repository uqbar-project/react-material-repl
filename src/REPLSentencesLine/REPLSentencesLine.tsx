import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import REPLPrompt from '../REPLPrompt/REPLPromt'

interface SentencesLine {
    content: string
    focussed?: boolean
}

const REPLSentencesLine: FC<SentencesLine> = ({ content, focussed = false }: SentencesLine): JSX.Element =>
    <Typography>
        {`> ${content}`}<REPLPrompt visibility={focussed} />
    </Typography >

export default REPLSentencesLine