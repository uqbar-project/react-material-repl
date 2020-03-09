import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'start',
            background: "#efefef",
            overflow: "hidden",
            margin: theme.spacing(1)
        },
        content: {
            padding: theme.spacing(0),
            margin: theme.spacing(0, 0, 0, 2.4),
            overflowY: "auto"
        },
        currentLine: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start'
        },
        input: {
            padding: theme.spacing(0),
            margin: theme.spacing(0),
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            opacity: 0
        }
    })
)