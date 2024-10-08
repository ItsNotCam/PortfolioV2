export default function Header() {
  return (
    <div
      id="header"
      className="flex flex-row gap-4 h-header min-w-full p-4 bg-custom-off-dark-800 items-center"
    >
      <div className="flex flex-row gap-2">
        <div className="bg-custom-red size-window-buttons rounded-full"></div>
        <div className="bg-custom-yellow size-window-buttons rounded-full"></div>
        <div className="bg-custom-green size-window-buttons rounded-full"></div>
      </div>
      <span className="text-base text-custom-off-dark-300">cameron_young</span>
    </div>
  );
}
