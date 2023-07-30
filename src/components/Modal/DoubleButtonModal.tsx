import { View, Text } from 'react-native'
import React from 'react'
import { Modal, Portal } from 'react-native-paper';
import ButtonSmallPrimary from '../Buttons/ButtonSmallPrimary';
import ButtonSmallSecondary from '../Buttons/ButtonSmallSecondary';

type DoubleButtonModalProps = {
    visible: boolean;
    onSubmit: () => void;
    onDismiss: () => void
} & React.ComponentProps<typeof Modal>;

export default function DoubleButtonModal({ visible, onDismiss, onSubmit, children }: DoubleButtonModalProps) {
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
                    marginHorizontal: 10,
                    color: "#000000",
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    top: 41,
                    // width: 280,
                }}
            >
                {children}
            </Text>
            <View
                style={{
                    flex: 1,
                    width: 300,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    alignSelf: "center",
                    top: 20
                }}
            >
                <ButtonSmallSecondary width={140} onPress={onDismiss} children={"No"} />
                <ButtonSmallPrimary width={140} onPress={onSubmit} children={"Yes"} />
            </View>
        </Modal>
    </Portal>
  )
}