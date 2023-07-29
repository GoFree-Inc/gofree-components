import React from 'react'
import { Searchbar, useTheme } from 'react-native-paper';

type SearchProps = {
    onChangeText: (query: string) => void
} & React.ComponentProps<typeof Searchbar>;

export default function SearchBarPrimary({ onChangeText, value, ...searchProps }: SearchProps) {
    const theme = useTheme();

  return (
    <Searchbar
        {...searchProps}
        placeholder="Search..."
        onChangeText={onChangeText}
        value={value}
        iconColor='#A3A3A3'
        placeholderTextColor="#A3A3A3"
        style={{
            backgroundColor: theme.colors.background, 
            borderRadius: 24,
            borderWidth: value ? 1 : 0.7,
            borderColor: value ? "#2F95DC" : null,
            height: 48,
            paddingTop: 8,
            paddingBottom: 8,
            paddingRight: 24,
            paddingLeft: 24
        }}
        inputStyle={{
            alignSelf: "center",
            justifyContent: "center",
            fontSize: 14,
            fontWeight: "400",
            color: "black"
        }}
    />
  )
}