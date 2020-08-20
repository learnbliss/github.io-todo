import {withStyles} from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';

const CustomSwitch = withStyles({
    switchBase: {
        color: '#FEC041',
        '&$checked': {
            color: '#6DDBF7',
        },
        '&$checked + $track': {
            backgroundColor: '#57a1b9',
        },
    },
    checked: {},
    track: {},
})(Switch);

export default CustomSwitch;
