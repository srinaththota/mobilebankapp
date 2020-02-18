import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Dashboard from '../screens/Dashboard'
import applyLoan from '../screens/ApplyLoan';
import accountSummary from '../screens/AccountSummary';
import ViewTransactions from '../screens/ViewTransactions';
import transferMoney from '../screens/TransferMoney';
import offers from '../screens/Offers';
import creditCards from '../screens/CreditCard';
import Input from '../screens/Input';

const appNavigator=createStackNavigator(
    {
        input:Input,
        dashboard:Dashboard,
        Loan:applyLoan,
        Summary:accountSummary,
        Transactions:ViewTransactions,
        transfer:transferMoney,
        creditCards:creditCards,
        offers:offers
    }
);

export default createAppContainer(appNavigator);