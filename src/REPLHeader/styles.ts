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
        title: {
            color: "#999",
            paddingLeft: theme.spacing(2.4)
        },
    })
)