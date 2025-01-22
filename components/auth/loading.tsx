import Image from "next/image";

export const Loading = () => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-y-4">
      <Image
        src="/logo.svg"
        alt="logo"
        width={120}
        height={120}
        className="animated-pulse duration-700"
      />
    </div>
  );
};
