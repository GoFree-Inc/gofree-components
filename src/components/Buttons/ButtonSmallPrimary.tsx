import { GestureResponderEvent } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';

type ButtonProps = {
    width?: number;
    onPress: (e: GestureResponderEvent) => void;
} & React.ComponentProps<typeof Button>;

export default function ButtonSmallPrimary({ onPress, children, width, ...buttonProps }: ButtonProps) {
  return (
    <Button 
        {...buttonProps}
        mode="contained" 
        style={{
            borderRadius: 24,
            height: 48,
            width: width ? width : 180,
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