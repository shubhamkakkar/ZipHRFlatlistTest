import { StyleSheet } from 'react-native';
import theme from '../../../theme';

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: theme.primaryColor + 80,
  },
  cardDescription: {
    marginHorizontal: 20,
    marginTop: 20,
  },
});

export default styles;
