export interface Location {
  type: string;
  coordinates: number[];
}

export const getLocation = async (): Promise<Location> => {
  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location: Location = {
            type: "Point",
            coordinates: [position.coords.latitude, position.coords.longitude]
          };
          resolve(location);
        },
        (error) => {
          reject("Geolocation is not supported or permission denied.");
        }
      );
    } else {
      reject("Geolocation is not supported by this browser.");
    }
  });
};
