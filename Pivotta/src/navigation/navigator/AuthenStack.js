import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import Authen from 'src/screens/authen/Authen';
import ChangePassword from 'src/screens/authen/ChangePassword';
import CommonBranchScreen from 'src/screens/authen/CommonBranchScreen';
import Login from 'src/screens/authen/Login';
import RegistrationInfo from 'src/screens/authen/CompanyOnboarding1';
import componentNames from 'src/utils/constant/componentNames';
import CompanyOnboarding1 from 'src/screens/authen/CompanyOnboarding1';
import CompanyOnboarding2 from 'src/screens/authen/CompanyOnboarding2';
import CompanyOnboarding3 from 'src/screens/authen/CompanyOnboarding3';
import LoginAdvisor from 'src/screens/authen/Advisor/LoginAdvisor';
import SignUpTemporary from 'src/screens/authen/Advisor/SignUpTemporary';
import AuthenRegistration from 'src/screens/authen/Advisor/AuthenRegistration';
import AdvisorOnboarding1 from 'src/screens/authen/Advisor/AdvisorOnboarding1';
import AdvisorOnboarding2 from 'src/screens/authen/Advisor/AdvisorOnboarding2';
import AdvisorOnboarding3 from 'src/screens/authen/Advisor/AdvisorOnboarding3';
import AdvisorOnboarding4 from 'src/screens/authen/Advisor/AdvisorOnboarding4';
import AdvisorOnboarding5 from 'src/screens/authen/Advisor/AdvisorOnboarding5';
import AdvisorWorkHistory from 'src/screens/authen/Advisor/AdvisorWorkHistory';
import AdvisorRegiterSuccess from 'src/screens/authen/Advisor/AdvisorRegiterSuccess';
import AdvisorUnderReview from 'src/screens/authen/Advisor/AdvisorUnderReview';
import AdvisorJudgmentFailure from 'src/screens/authen/Advisor/AdvisorJudgmentFailure';
import AdvisorPassedExam from 'src/screens/authen/Advisor/AdvisorPassedExam';
import AdvisorProfileRegistration from 'src/screens/authen/Advisor/AdvisorProfileRegistration';
import IntroductionMySelf from 'src/screens/authen/Advisor/IntroductionMySelf';
import RegisterCareerMySelf from 'src/screens/authen/Advisor/RegisterCareerMySelf';
import AdvisorAchievement from 'src/screens/authen/Advisor/AdvisorAchievement';

const Navigation = createStackNavigator();
const AuthenStack = () => (
  <Navigation.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName={componentNames.AUTHEN}>
    <Navigation.Screen
      name={'CommonBranchScreen'}
      component={CommonBranchScreen}
    />
    <Navigation.Screen name={'Login'} component={Login} />
    <Navigation.Screen name={'ChangePassword'} component={ChangePassword} />
    <Navigation.Screen
      name={'CompanyOnboarding1'}
      component={CompanyOnboarding1}
    />
    <Navigation.Screen
      name={'CompanyOnboarding2'}
      component={CompanyOnboarding2}
    />
    <Navigation.Screen
      name={'CompanyOnboarding3'}
      component={CompanyOnboarding3}
    />
    <Navigation.Screen name={'LoginAdvisor'} component={LoginAdvisor} />
    <Navigation.Screen name={'SignUpTemporary'} component={SignUpTemporary} />
    <Navigation.Screen
      name={'AuthenRegistration'}
      component={AuthenRegistration}
    />
    <Navigation.Screen
      name={'AdvisorOnboarding1'}
      component={AdvisorOnboarding1}
    />
    <Navigation.Screen
      name={'AdvisorOnboarding2'}
      component={AdvisorOnboarding2}
    />
    <Navigation.Screen
      name={'AdvisorOnboarding3'}
      component={AdvisorOnboarding3}
    />
    <Navigation.Screen
      name={'AdvisorOnboarding4'}
      component={AdvisorOnboarding4}
    />
    <Navigation.Screen
      name={'AdvisorOnboarding5'}
      component={AdvisorOnboarding5}
    />
    <Navigation.Screen
      name={'AdvisorWorkHistory'}
      component={AdvisorWorkHistory}
    />
    <Navigation.Screen
      name={'AdvisorRegiterSuccess'}
      component={AdvisorRegiterSuccess}
    />
    <Navigation.Screen
      name={'AdvisorUnderReview'}
      component={AdvisorUnderReview}
    />
    <Navigation.Screen
      name={'AdvisorJudgmentFailure'}
      component={AdvisorJudgmentFailure}
    />
    <Navigation.Screen
      name={'AdvisorPassedExam'}
      component={AdvisorPassedExam}
    />
    <Navigation.Screen
      name={'AdvisorProfileRegistration'}
      component={AdvisorProfileRegistration}
    />
    <Navigation.Screen
      name={'IntroductionMySelf'}
      component={IntroductionMySelf}
    />
    <Navigation.Screen
      name={'RegisterCareerMySelf'}
      component={RegisterCareerMySelf}
    />
    <Navigation.Screen
      name={'AdvisorAchievement'}
      component={AdvisorAchievement}
    />
  </Navigation.Navigator>
);

export default AuthenStack;
