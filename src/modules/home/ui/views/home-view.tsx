"use client";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Router } from "lucide-react";
import router, { useRouter } from "next/navigation";

const HomeView = ()=>{
  const router =  useRouter();
  const { data:session } = authClient.useSession();
  if(!session){
    return(
      <p>Loading...</p>
    )
  }
  return(
        <div className="flex flex-col p-4 gap-y-4">
            <p>Connecté en tant que: {session.user.email}</p>
            <Button onClick={() => authClient.signOut({
              fetchOptions:{onSuccess:()=>router.push("/sign-in")
              }
            })
            }>
              Sign out
            </Button>
        </div>
        )

}
export default HomeView;