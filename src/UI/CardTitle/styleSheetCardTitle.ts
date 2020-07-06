import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  containerCardTitle: {
    borderBottomWidth: 1,
    borderBottomColor: theme.primaryColor + 80,
    paddingBottom: 5,
    marginHorizontal: 10,
    paddingTop: 10,
  },
  cardTitleContainer: {
    flex: 1,
  },
  cardTitleText: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
  },
});

export default styles;
