import { SignIn } from "@clerk/nextjs";

const Page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <SignIn />
    </div>
  );
};

export default Page;
