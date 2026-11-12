
import type { ReactElement } from 'react';
import { Appbar } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

export default function CustomAppBar({
  navigation,
  back,
  options,
// This specifies the type of properties received by the app bar.
}: NativeStackHeaderProps): ReactElement {
    return (
        <Appbar.Header>
            {/* Conditional rendering */}
            {back ? (
                <Appbar.BackAction
                    onPress={() => navigation.goBack()}
                />
            ) : null}
            
            <Appbar.Content title={options.title ?? 'Home'} />
            
            {/* If the “Back” button is missing, an arrow pointing to the right is displayed */}
            {!back ? (
                <Appbar.Action
                    // Use the MaterialCommunityIcons component directly
                    icon={({ size, color }) => (
                        <MaterialCommunityIcons
                            name="arrow-right"
                            size={size}
                            color={color}
                        />
                    )}
                    onPress={() => navigation.navigate('Second')}
                />
            ) : null}
        </Appbar.Header>
    );
}
