import { useDCAStore } from "@/src/store/dca";
import DCAConfirm from "../DCA/DCAConfirm";
import DCASuccess from "../DCA/DCASuccess";
import DCAError from "../DCA/DCAError";

export default function DCAConfirmSheet() {
  const { txHash, error } = useDCAStore();

  if (txHash) return <DCASuccess />;

  if (error) return <DCAError />;

  return <DCAError />;
}
