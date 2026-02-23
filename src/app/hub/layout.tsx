import Sidebar from "@/components/Sidebar";
import WalletBar from "@/components/WalletBar";
import NeoAssistant from "@/components/NeoAssistant";

export default function HubLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-base transition-colors duration-300">
      <Sidebar />
      <div className="min-h-screen lg:ml-64">
        <WalletBar />
        <main>{children}</main>
      </div>
      <NeoAssistant />
    </div>
  );
}
