import { ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Card, useTheme } from "react-native-paper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PersonalInfoSchema, PersonalInfo } from "../../src/schema/checkout.schema";
import ControlledInput from "../../src/components/Forms/ControlledInput";
import { useCheckoutContext } from "../../src/context/CheckoutContext";
import ButtonLargePrimary from "../../src/components/Buttons/ButtonLargePrimary";
import SearchBarPrimary from "../../src/components/SearchBar/SearchBarPrimary";
import Contact from "../../src/components/Contact/Contact";
import ButtonSmallPrimary from "../../src/components/Buttons/ButtonSmallPrimary";
import DoubleButtonModal from "../../src/components/Modal/DoubleButtonModal";
import SingleButtonModal from "../../src/components/Modal/SingleButtonModal";
import IconModal from "../../src/components/Modal/IconModal";

export default function PersonalDetails() {
    const { control, handleSubmit } = useForm<PersonalInfo>({
        resolver: zodResolver(PersonalInfoSchema)
    });
    const { setPersonal } = useCheckoutContext();
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [visible, setVisible] = useState<boolean>(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const onChangeSearch = query => setSearchQuery(query);

    const router = useRouter();
    const theme = useTheme();

    const nextPage = (data: PersonalInfo) => {
        setPersonal(data);

        router.push("/checkout/delivery");
    }

    const onSubmit = () => {

    }
    return (
        <ScrollView 
            contentContainerStyle={{ gap: 15, maxWidth: 500, width: "100%", alignSelf: "center"  }} 
            showsVerticalScrollIndicator={false}
        >
            <Card style={{ backgroundColor: theme.colors.background }}>
                <Card.Title title="Personal infomation" titleVariant="titleLarge" />
                <Card.Content style={{ gap: 10 }}>
                    <SearchBarPrimary 
                        onChangeText={onChangeSearch}
                        value={searchQuery}                    
                    />
                    <ControlledInput
                        control={control} 
                        name="name"
                        placeholder="Name"
                        label="Name"
                    />

                    <ControlledInput
                        control={control}
                        name="email"
                        placeholder="hey@gmail.com"
                        label="Email"
                    />

                    <ControlledInput
                        control={control}
                        name="password"
                        label="Password"
                        // secureTextEntry
                    />

                    <ControlledInput
                        control={control}
                        name="confirmPassword"
                        label="Confirm Password"
                        // secureTextEntry
                    />

                    <Contact 
                        title="Contact name"
                        subTitle="Details"
                    />
                </Card.Content>
            </Card>

            {/* <DoubleButtonModal 
                visible={visible}
                onDismiss={hideModal}
                children={"Are you sure you want to freeze this card?"}
                onSubmit={onSubmit}
            /> */}

            {/* <SingleButtonModal 
                visible={visible}
                onDismiss={hideModal}
                children={"Pop up success message"}
                buttonText="Done"
                onSubmit={onSubmit}
            /> */}

            <IconModal
                visible={visible}
                onDismiss={hideModal}
                children={"You’ve successfully withdrawn $50 to \n                   your USD wallet"}
                buttonText="Done"
                onSubmit={onSubmit}
            />

            <ButtonLargePrimary onPress={handleSubmit(nextPage)} children={"Next"} />
            <ButtonSmallPrimary onPress={showModal} children={"show modal"} />
        </ScrollView>
    )
}