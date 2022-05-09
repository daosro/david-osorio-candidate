import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    display: 'flex',
    backgroundColor: '#202020',
    position: 'sticky',
    bottom: 0,
    height: '50px',
    fontSize: '25px',
    padding: '0 15px',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& a': {
      color: '#ffffff',
    },
    '& a.active': {
      color: '#e1a21e',
    }
  },
}, { name: 'BottomTabs' });