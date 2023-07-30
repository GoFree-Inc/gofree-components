import { View, Text } from 'react-native'
import React from 'react'
import { Modal, Portal } from 'react-native-paper';
import ButtonMediumPrimary from '../Buttons/ButtonMediumPrimary';
import { Avatar } from 'react-native-paper';

type DoubleButtonModalProps = {
    buttonText: string;
    visible: boolean;
    onSubmit: () => void;
    onDismiss: () => void
} & React.ComponentProps<typeof Modal>;

export default function IconModal({ visible, buttonText, onDismiss, onSubmit, children }: DoubleButtonModalProps) {
  return (
    <Portal>
        <Modal 
            visible={visible} 
            onDismiss={onDismiss}
            contentContainerStyle={{
                backgroundColor: "white",
                width: 343,
                height: 282,
                borderRadius: 24,
                alignSelf: "center",
            }}
        >
            <Avatar.Image 
                size={60} 
                style={{
                    alignSelf: "center",
                    top: 40
                }}
                source={require('../../../assets/success-icon.png')} 
            />
            <Text
                style={{
                    fontSize: 16,
                    fontWeight: "400",
                    marginHorizontal: 5,
                    color: "#1C2227",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 60,
                }}
            >
                {children}
            </Text>
            <View
                style={{
                    flex: 1,
                    width: 300,
                    alignItems: "center",
                    alignSelf: "center",
                    top: 90
                }}
            >
                <ButtonMediumPrimary onPress={onSubmit} children={buttonText} />
            </View>
        </Modal>
    </Portal>
  )
}