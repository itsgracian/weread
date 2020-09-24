import { StyleSheet } from 'react-native';
import { Colors, Fonts } from '../../../theme';
import fonts from '../../../theme/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: Colors.white,
  },
  logoView: {
    marginTop: 100,
  },
  logo: {
    resizeMode: 'contain',
  },
  sloganView: {
    marginTop: 38,
  },
  sloganText: {
    fontFamily: Fonts.tomorrow.regular,
    fontSize: 14,
  },
  btnText: {
    fontSize: 14,
    fontFamily: Fonts.tomorrow.bold,
    color: Colors.white,
    marginLeft: 18,
  },
  githubFollow: {
    flexDirection: 'row',
    marginTop: 156,
  },
  githubFollowText: {
    fontSize: 14,
    marginLeft: 12,
    fontFamily: Fonts.tomorrow.medium
  },
  footer: {
    marginTop: 59,
    fontFamily: Fonts.tomorrow.regular
  }
});
