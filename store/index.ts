import { DriverStore, LocationStore, MarkerData } from "@/types/types";
import { create } from "zustand";

export const useLocationStore = create<LocationStore>((set) => ({
  userAddress: null,
  userLongitude: null,
  destinationAddress: null,
  destinationLatitude: null,
  destinationLongitude: null,
  userLatitude: null,
  setUserLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      userLatitude: latitude,
      userLongitude: longitude,
      userAddress: address,
    }));
  },
  setDestinationLocation: ({
    latitude,
    longitude,
    address,
  }: {
    latitude: number;
    longitude: number;
    address: string;
  }) => {
    set(() => ({
      destinationLatitude: latitude,
      destinationLongitude: longitude,
      destinationAddress: address,
    }));
  },
}));

export const useDriverStore = create<DriverStore>((set) => ({
  driverLocation: null,
  drivers: [] as MarkerData[],
  selectedDriver: null,
  setSelectedDriver: (driveId: number) =>
    set(() => ({
      selectedDriver: driveId,
    })),
  setDrivers: (drivers: MarkerData[]) =>
    set(() => ({
      drivers: drivers,
    })),
  clearSelectedDriver: () => set(() => ({ selectedDriver: null })),
}));
