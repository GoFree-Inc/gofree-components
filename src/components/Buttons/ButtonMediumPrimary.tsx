import { GestureResponderEvent } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

type ButtonProps = {
    onPress: (e: GestureResponderEvent) => void;
} & React.ComponentProps<typeof Button>;

export default function ButtonMediumPrimary({ onPress, children, ...buttonProps }: ButtonProps) {
  return (
    <Button 
        {...buttonProps}
        mode="contained" 
        style={{
            borderRadius: 24,
            height: 56,
            width: 280,
            justifyContent: "center",
            alignSelf: "center"
        }}
        labelStyle={{
            fontSize: 14,
            fontWeight: "600",
            lineHeight: 24,
        }}
        buttonColor='#2F95DC'
        onPress={onPress}
    >
        {children}
    </Button>
  )
}