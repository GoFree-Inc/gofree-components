import { Controller, Control } from "react-hook-form"
import { View } from "react-native"
import { TextInput, HelperText, useTheme } from "react-native-paper"

type ControlledInputProps = {
    control: Control;
    name: string
} & React.ComponentProps<typeof TextInput>;

export default function ControlledInput ({ control, name, ...textInputProps }: ControlledInputProps) {
    const theme = useTheme();

    return (
        <Controller 
            control={control}
            name={name}
            render={({ field: { value, onChange, onBlur }, fieldState: { error, invalid } }) => (
                <View style={{ flex: 1 }}>
                    <TextInput 
                        mode="outlined"
                        {...textInputProps}
                        style={{ 
                            backgroundColor: theme.colors.background, 
                            height: 51,
                        }}
                        value={value}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        error={invalid}
                        outlineStyle={{ borderRadius: 24, borderWidth: 1 }}
                        contentStyle={{
                            paddingTop: 16,
                            paddingRight: 24,
                            paddingBottom: 16,
                            paddingLeft: 24 
                        }}
                        activeOutlineColor="#2F95DC"
                    />
                    <HelperText type="error" visible={invalid}>
                        {error?.message}
                    </HelperText>
                </View>
            )}
        />
    )
}