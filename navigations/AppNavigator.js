import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Login from '../screens/Login'
import applyLoan from '../screens/ApplyLoan';
import accountSummary from '../screens/AccountSummary';
import ViewTransactions from '../screens/ViewTransactions';

const appNavigator=createStackNavigator(
    {
        login:Login,
        Loan:applyLoan,
        Summary:accountSummary,
        Transactions:ViewTransactions
    }
);

export default createAppContainer(appNavigator);