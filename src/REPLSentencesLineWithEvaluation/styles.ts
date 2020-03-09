import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
    createStyles({
        evaluation: {
            paddingLeft: theme.spacing(2.4)
        },
        evaluationWithError: {
            color: "#c80000"
        },
        evaluationWithoutError: {
            color: "#999999"
        },
    })
)