import { GestureResponderEvent } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

type ButtonProps = {
    onPress: (e: GestureResponderEvent) => void;
} & React.ComponentProps<typeof Button>;

export default function ButtonMediumSecondary({ onPress, children, ...buttonProps }: ButtonProps) {
  return (
    <Button 
        {...buttonProps}
        mode="outlined" 
        style={{
            borderRadius: 24,
            height: 56,
            width: 280,
            justifyContent: "center",
            alignSelf: "center",
            borderColor: "#2F95DC"
        }}
        labelStyle={{
            fontSize: 14,
            fontWeight: "600",
            lineHeight: 24,
        }}
        textColor='#2F95DC'
        onPress={onPress}
    >
        {children}
    </Button>
  )
}