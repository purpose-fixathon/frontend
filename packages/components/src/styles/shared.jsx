import { StyleSheet } from 'react-native'
import { getColors } from './colors';

const shared = StyleSheet.create({
    navBar: {
        margin: 25,
        height: 36,
        flexDirection: 'row',
        alignItems: 'center',
    },
    navItem: {
        flex: 1,
        height: 36,
        justifyContent: 'center',
        alignItems: 'center',
    },
    navRight: {
        flex: 1,
        alignItems: 'flex-end',
    },
    navLeft: {
        flex: 1,
        alignItems: 'flex-start',
    },
    columnBar: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 25,
        marginRight: 25,
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    columnItem: {
        flex: 1,
        justifyContent: 'flex-start'
    },
    columnLabel: {
        marginBottom: 25,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: getColors(false).gray,
    }, 
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        fontWeight: 'bold',
        fontSize: '15px',
    },
    viewLabelText: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    input: {
        display: 'block',
        borderRadius: 10,
        width: '100%',
        height: 10,
    },
    textArea: {
        backgroundColor: getColors(false).lightGray,
        borderRadius: 10,
        width: '100%',
        height: 150
    },
    paddingSides: {
        paddingLeft: 25,
        paddingRight: 25,
    }
})



export default shared