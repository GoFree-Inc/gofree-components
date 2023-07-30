import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Checkbox } from 'react-native-paper';

type ContactProps = {
    title: string,
    subTitle: string
}

export default function Contact({ title, subTitle }: ContactProps) {
    const [checked, setChecked] = React.useState(false);
  return (
    <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }} >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Avatar.Image size={50} source={require('../../../assets/profile.png')} />
            <View
                style={{
                    left: 20,
                }}
            >
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: "600",
                        color: "#414040"
                    }}
                >
                    {title}
                </Text>
                <Text
                    style={{
                        fontSize: 14,
                        fontWeight: "400",
                        color: "#000000",
                        top: 5
                    }}
                >
                    {subTitle}
                </Text>
            </View>
        </View>
        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
                setChecked(!checked);
            }}
            color='#2F95DC'
        />
    </View>
  )
}