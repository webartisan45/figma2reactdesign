import Top from "@/components/pagetop/Top";
import TabHead from "@/components/tab/TabHead";
import MainLayout from "@/layouts/MainLayout";


export default function Home() {
  return (
    <div>
      <MainLayout>
        <Top />
        <TabHead />
      </MainLayout>
    </div>
  );
}
