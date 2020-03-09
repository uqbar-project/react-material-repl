import React, { FC } from 'react'

interface REPLPromptProps {
    visibility: boolean
}

const REPLPrompt: FC<REPLPromptProps> = ({ visibility }: REPLPromptProps): JSX.Element => {
    return visibility ? <span className={'command-prompt'} >█</span> : <span />
}

export default REPLPrompt