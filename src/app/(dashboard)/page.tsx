import { auth } from "@/lib/auth";
import HomeView from "@/modules/home/ui/views/home-view"
import { redirect } from "next/navigation";
import { headers } from "next/headers"
import { caller } from "@/trpc/server"; 
const Page = async () => {
  const greeting = await caller.hello({ text: "Moufdi server" });
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  
  if(!session){
    redirect("/sign-in");
  }
  return <p>{greeting.greeting}</p>
  return <HomeView/>
}
export default Page;