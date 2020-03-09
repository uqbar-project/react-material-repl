import React, { FC } from 'react'
import { Typography } from '@material-ui/core'
import clsx from 'clsx'
import { not } from 'ramda'
import REPLSentencesLine from '../REPLSentencesLine/REPLSentencesLine'
import useStyles from "./styles"

export type SentencesLineEvaluation = ({
    hasError?: boolean
    output: string
    sentences: string
})

const REPLSentencesLineWithEvaluation: FC<SentencesLineEvaluation> = ({ hasError, output, sentences }: SentencesLineEvaluation): JSX.Element => {

    const classes = {
        ...useStyles()
    }

    return (
        <div>
            <REPLSentencesLine content={sentences} />
            <Typography>
                <span className={clsx(classes.evaluation, {
                    [classes.evaluationWithError]: hasError,
                    [classes.evaluationWithoutError]: not(hasError)
                })}>{output}</span>
            </Typography >
        </div >
    )
}

export default REPLSentencesLineWithEvaluation
