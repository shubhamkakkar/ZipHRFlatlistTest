import { StyleSheet } from 'react-native';
import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginTop: 5,
  },
  listHeaderTitleContainer: {
    borderRadius: 20,
    backgroundColor: theme.darkestShadePrimaryColor + 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  title: {
    color: theme.darkestShadePrimaryColor,
    fontWeight: 'bold',
  },
});

export default styles;
