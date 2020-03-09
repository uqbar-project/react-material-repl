import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'

export default makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            margin: theme.spacing(0),
            color: "#444"
        },
        version: {
            color: "#999999",
            padding: theme.spacing(1, 2.4, 1, 1)
        }
    })
)