import React, { FC } from 'react';
import {
  SafeAreaView,
  Image,
  View,
  TouchableOpacity,
  YellowBox,
} from 'react-native';
import { Text, Button } from '@ui-kitten/components';
import { styles } from './styles';
import { logoBlack } from '../../../assets';
import { Ionicons } from '@expo/vector-icons';
import * as Google from 'expo-google-app-auth';
import { Config } from '../../../utils';
import { connect } from 'react-redux';
import { loginWithGoogle, setError, RootState } from '../../../redux';
import { Loading } from '../../../components';
YellowBox.ignoreWarnings(['Setting a timer']);

interface Props {
  loginWithGoogle: typeof loginWithGoogle;
  setError: typeof setError;
  loading?: boolean;
}

const SocialAuth: FC<Props> = (props) => {
  const { loginWithGoogle, setError, loading } = props;

  const signIn = async () => {
    try {
      const res = await Google.logInAsync({
        androidClientId: Config.androidClientId,
        scopes: ['profile', 'email'],
      });
      if (res.type === 'success' && res.accessToken) {
        return loginWithGoogle(res.accessToken);
      }
    } catch (error) {
      return setError('Something went wrong. Try again');
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logoView}>
        <Image source={logoBlack} style={styles.logo} />
      </View>
      <View style={styles.sloganView}>
        <Text style={styles.sloganText}>
          a place to read and listen to audio books
        </Text>
      </View>
      <View style={{ marginTop: 95, width: 243 }}>
        <Button
          accessoryLeft={() => (
            <Ionicons size={25} name='logo-google' style={{ color: 'white' }} />
          )}
          style={{ borderRadius: 20 }}
          onPress={() => signIn()}
        >
          {() => <Text style={styles.btnText}>Sign in with google</Text>}
        </Button>
      </View>
      <TouchableOpacity style={styles.githubFollow}>
        <Ionicons size={26.25} name='logo-github' />
        <Text style={styles.githubFollowText}>gratien</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>
        All right reserved {new Date().getFullYear()}
      </Text>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: RootState) => {
  const { loading } = state.Auth;

  return { loading };
};

export default connect(mapStateToProps, { loginWithGoogle, setError })(
  SocialAuth
);
