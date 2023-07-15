import React from 'react';
import { Text, View } from 'react-native';

import HeaderStyles from "../styles/headerStyles";
import TextStyles from '../styles/textStyles';

// A temporary header containing the name of the app.
// This likely won't be used after completion.
export const Header = () => {
    return (
        <View style = {HeaderStyles.header}>
            <Text style = {TextStyles.title}>DubLineup</Text>
        </View>
    );
}

export default Header;