import { GestureResponderEvent } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

type ButtonProps = {
    onPress: (e: GestureResponderEvent) => void;
} & React.ComponentProps<typeof Button>;

export default function ButtonLargeSecondary({ onPress, children, ...buttonProps }: ButtonProps) {
  return (
    <Button 
        {...buttonProps}
        mode="outlined" 
        style={{
            borderRadius: 24,
            height: 56,
            width: 343,
            justifyContent: "center",
            borderColor: "#2F95DC",
            alignSelf: "center"
        }}
        labelStyle={{
            fontSize: 16,
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