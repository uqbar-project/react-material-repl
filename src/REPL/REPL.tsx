import React, { FC, KeyboardEvent, useEffect, useState } from 'react'
import { Card, CardContent, ClickAwayListener } from '@material-ui/core'
import { append, subtract, take } from 'ramda'
import shortid from 'shortid'
import FillWithEmptySpace from '../FillWithEmptySpace'
import REPLFooter from '../REPLFooter/REPLFooter'
import REPLHeader from '../REPLHeader/REPLHeader'
import REPLSentencesLine from '../REPLSentencesLine/REPLSentencesLine'
import REPLSentencesLineWithEvaluation, { SentencesLineEvaluation } from '../REPLSentencesLineWithEvaluation/REPLSentencesLineWithEvaluation'
import useStyles from "./styles"

interface REPLProps {
    height?: number
    version?: string
    welcomeMessage?: string
    evaluate: (args: string) => SentencesLineEvaluation
}

const REPL: FC<REPLProps> = ({ evaluate, height = 230, welcomeMessage = "Interactive Console:", version = "" }: REPLProps): JSX.Element => {

    const classes = {
        ...useStyles()
    }

    const input: HTMLInputElement | null = document.getElementById('repl-input') as HTMLInputElement
    const [focussed, setFocussed] = useState<boolean>(false)
    const [evaluations, setEvaluations] = useState<SentencesLineEvaluation[]>([])
    const [inputValue, setInputValue] = useState<string>("")

    useEffect(() => {
        requestFocus()
    })

    const handleInput = (value: string): void => {
        if (input) input.value = value
        setInputValue(value)
    }

    const handleEvaluation = (sentencesLineEvaluation: SentencesLineEvaluation): void => {
        setEvaluations(append(sentencesLineEvaluation, evaluations))
    }

    const requestFocus = (): void => {
        setFocussed(true)
        input?.focus()
    }

    const lostFocus = (): void => {
        setFocussed(false)
        input?.blur()
    }

    const clear = () => {
        setEvaluations([])
    }

    const clearInput = () => {
        handleInput("")
    }

    const lastIndex = () => subtract(inputValue.length, 1)

    const onAcceptLine = () => {
        handleEvaluation(evaluate(inputValue))
        clearInput()
    }

    const onBackwardChar = () => {
        console.log("TODO: onBackwardChar")
    }

    const onBackwardDeleteChar = () => {
        handleInput(take(lastIndex(), inputValue))
    }

    const onBeginningOfLine = () => {
        console.log("TODO: onBeginningOfLine")
    }

    const onComplete = () => {
        console.log("TODO: onComplete")
    }

    const deleteChar = () => {
        console.log("TODO: deleteChar")
    }

    const onEndOfLine = () => {
        console.log("TODO: onEndOfLine")
    }

    const forwardChar = () => {
        console.log("TODO: forwardChar")
    }

    const onNextHistory = () => {
        console.log("TODO: onNextHistory")
    }

    const onPrefixMeta = () => {
        console.log("TODO: onPrefixMeta")
    }

    const onPreviousHistory = () => {
        console.log("TODO: onPreviousHistory")
    }

    const keyDown = (keyboardEvent: KeyboardEvent<HTMLInputElement>): void => {

        if (focussed) {
            switch (keyboardEvent.keyCode) {
                case 8:
                    onBackwardDeleteChar()
                    break
                case 9:
                    onComplete()
                    break
                case 13:
                    onAcceptLine()
                    break
                case 27:
                    onPrefixMeta()
                    break
                case 35:
                    onEndOfLine()
                    break
                case 36:
                    onBeginningOfLine()
                    break
                case 37:
                    onBackwardChar()
                    break
                case 38:
                    onPreviousHistory()
                    break
                case 39:
                    forwardChar()
                    break
                case 40:
                    onNextHistory()
                    break
                case 46:
                    deleteChar()
                    break
                default:
                    return
            }
            keyboardEvent.preventDefault()
        }

    }

    return (
        <ClickAwayListener onClickAway={lostFocus}>
            <Card className={classes.root} style={{ minHeight: height, maxHeight: height }} onClick={requestFocus}>
                <REPLHeader welcomeMessage={welcomeMessage} runAction={onAcceptLine} clearAction={clear} />
                <CardContent className={classes.content} onClick={requestFocus}>
                    {evaluations.map(({ sentences, output, hasError }: SentencesLineEvaluation) =>
                        <REPLSentencesLineWithEvaluation key={shortid.generate()} sentences={sentences} output={output} hasError={hasError} />)}
                    <div className={classes.currentLine}>
                        <REPLSentencesLine content={inputValue} focussed={focussed} />
                    </div>
                    <input type="text" id={'repl-input'} className={classes.input} onChange={({ target: { value } }) => handleInput(value)} onKeyDown={keyDown}></input>
                </CardContent>
                <FillWithEmptySpace />
                <REPLFooter version={version} />
            </Card>
        </ClickAwayListener >
    )
}

export default REPL