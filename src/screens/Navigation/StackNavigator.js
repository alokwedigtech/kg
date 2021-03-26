import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from '../auth/login/login';
import SplashScreen from '../../components/splash';
import RegisterProfile from '../auth/registration/registration';
import Professionaldetails from '../auth/registration/professionaldetails';
import About from '../auth/registration/about';
import Socialmedia from '../auth/registration/socialmedia';
import Council from '../auth/registration/council';
import Selfassestement from '../auth/registration/selfassessment';
import Verifyotp from '../auth/registration/verifyotp';
import Timeslot from '../auth/registration/timeslot';
import Subscriptionplan from '../auth/registration/Subscriptionplan';
import Subscriptionmarketing from '../auth/registration/subscriptionmarketing';
import Feessummery from '../auth/registration/feessummery';
import Payout from '../auth/registration/Payout';
import Avsetting from '../auth/registration/Avsetting';
import Notification from '../auth/registration/Notification';
import Registrationdone from '../auth/registration/Registrationdone';
import Consultdash from '../auth/registration/Consult'
import Contact from "./Contact";
import QandA from '../auth/registration/QandA'

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="RegisterProfile"
              component={RegisterProfile}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Professionaldetails"
              component={Professionaldetails}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="About"
              component={About}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Socialmedia"
              component={Socialmedia}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Council"
              component={Council}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Selfassestement"
              component={Selfassestement}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Verifyotp"
              component={Verifyotp}
              options={{headerShown: true, title: 'Lawyer Registration'}}
            />
            <Stack.Screen
              name="Timeslot"
              component={Timeslot}
              options={{headerShown: true, title: 'Time Slot Management'}}
            />
            <Stack.Screen
              name="Subscriptionplan"
              component={Subscriptionplan}
              options={{headerShown: true, title: 'Subscription'}}
            />
            <Stack.Screen
              name="Subscriptionmarketing"
              component={Subscriptionmarketing}
              options={{headerShown: true, title: 'Subscription'}}
            />
            <Stack.Screen
              name="Feessummery"
              component={Feessummery}
              options={{headerShown: true, title: 'Subscription'}}
            />
            <Stack.Screen
              name="Payout"
              component={Payout}
              options={{headerShown: true, title: 'Payouts'}}
            />
            <Stack.Screen
              name="Avsetting"
              component={Avsetting}
              options={{headerShown: true, title: 'A/v Setting'}}
            />
            <Stack.Screen
              name="Notification"
              component={Notification}
              options={{headerShown: true, title: 'Notifications'}}
            />
            <Stack.Screen
              name="Registrationdone"
              component={Registrationdone}
              options={{headerShown: true, title: 'Registration Done'}}
            />
             <Stack.Screen
              name="Consultdash"
              component={Consultdash}
              options={{headerShown: true, title: 'Consult'}}
            />
          </Stack.Navigator>
  );
}

const ContactStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    );
  }

  const QandAStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="QandA" component={QandA} />
      </Stack.Navigator>
    );
  }

export default MainStackNavigator
// export { MainStackNavigator, ContactStackNavigator,QandAStackNavigator };
