interface OverlayProps {
  isOpen: boolean;
}
export const Overlay = ({ isOpen }: OverlayProps) => {
  return (
    <div
      className={`${
        isOpen ? "flex" : "hidden"
      } opacity-80 transition-all lg:hidden fixed top-0 left-0 w-screen h-screen bg-neutral-900 z-40`}
    ></div>
  );
};
