import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

const useAppStore = create()(
  persist(
    (set) => ({
      deliveryAddresses: [],
      saveDeliveryAddress: (addresses) => {
        set({ deliveryAddresses: addresses });
      },
      primaryAddress: {},
      setPrimaryAddress: (address) => {
        set({ primaryAddress: address });
      },
      cartData: {},
      saveToCart: (data) => {
        set({ cartData: data });
      },
      paymentInfo: {},
      setPaymentInfo: (info) => {
        set({ paymentInfo: info });
      },
      authToken: '',
      user: {},
      setAuthToken: (data) => {
        set({ authToken: data });
      },
      setUserData: (data) => {
        set({ user: data });
      },
    }),
    {
      name: 'jenari-storage',
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);

export default useAppStore;
export const setAppStoreState = useAppStore.setState;
