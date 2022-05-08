import { createUseStyles } from 'react-jss';

export default createUseStyles({
  root: {
    display: 'flex',
    backgroundColor: '#000000',
    position: 'sticky',
    bottom: 0,
    height: '50px',
    fontSize: '25px',
    padding: '0 15px',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& a': {
      color: '#ffffff',
    }
  },
}, { name: 'BottomTabs' });