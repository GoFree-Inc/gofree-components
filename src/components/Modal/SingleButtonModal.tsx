import { View, Text } from 'react-native'
import React from 'react'
import { Modal, Portal } from 'react-native-paper';
import ButtonMediumPrimary from '../Buttons/ButtonMediumPrimary';

type DoubleButtonModalProps = {
    buttonText: string;
    visible: boolean;
    onSubmit: () => void;
    onDismiss: () => void
} & React.ComponentProps<typeof Modal>;

export default function SingleButtonModal({ visible, buttonText, onDismiss, onSubmit, children }: DoubleButtonModalProps) {
  return (
    <Portal>
        <Modal 
            visible={visible} 
            onDismiss={onDismiss}
            contentContainerStyle={{
                backgroundColor: "white",
                width: 343,
                height: 224,
                borderRadius: 24,
                alignSelf: "center",
            }}
        >
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "600",
                    color: "#000000",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 41,
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
                    top: 110
                }}
            >
                <ButtonMediumPrimary onPress={onSubmit} children={buttonText} />
            </View>
        </Modal>
    </Portal>
  )
}