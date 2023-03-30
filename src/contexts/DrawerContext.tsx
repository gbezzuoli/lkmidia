import { Drawer } from "@/components/Drawer";
import { Overlay } from "@/components/Drawer/overlay";
import { createContext, useContext, useState } from "react";

interface DrawerContextData {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

interface DrawerProviderProps {
  children: React.ReactNode;
}

const DrawerContext = createContext({} as DrawerContextData);

export const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <DrawerContext.Provider value={{ isOpen, onClose, onOpen }}>
      <Drawer isOpen={isOpen} onClose={onClose} />
      <Overlay isOpen={isOpen} />
      {children}
    </DrawerContext.Provider>
  );
};

export const useDrawerHandler = (): DrawerContextData =>
  useContext(DrawerContext);
