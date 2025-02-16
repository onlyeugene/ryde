import { View, FlatList } from "react-native";
import React from "react";
import RideLayout from "@/components/ride-layout";
import DriverCard from "@/components/driver-card";
import CustomButton from "@/components/custom-button";
import { router } from "expo-router";
import { useDriverStore } from "@/store";

const ConfirmRide = () => {
  const { drivers, selectedDriver, setSelectedDriver } = useDriverStore();

  return (
    <RideLayout title="Choose a Driver" snapPoints={["65%", "85%"]}>
      <FlatList
        data={drivers}
        // keyExtractor={(item) => item.id} // Adding keyExtractor
        renderItem={({ item }) => (
          <DriverCard
            setSelected={() => setSelectedDriver(item.id!)}
            selected={selectedDriver!}
            item={item}
          />
        )}
        ListFooterComponent={() => (
          <View className="mx-10 mt-10">
            <CustomButton
              title="Select Ride"
              onPress={() => router.push("/(root)/book-ride")}
              className="py-3"
            />
          </View>
        )}
      />
    </RideLayout>
  );
};

export default ConfirmRide;
