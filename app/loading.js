import { BeatLoader } from "react-spinners";
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <BeatLoader color="#36d7b7" />
    </div>
  );
}
