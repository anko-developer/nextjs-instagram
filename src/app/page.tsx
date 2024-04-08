import FollowingBar from "@/components/FollowingBar/FollowingBar";
import PostList from "@/components/PostList/PostList";
import SideBar from "@/components/SideBar/SideBar";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function HomePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect("/auth/signin");
  }
  return (
    <section className="flex flex-col md:flex-row max-w-[850px] p-4">
      <div className="w-full">
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4'>
        <SideBar user={user} />
      </div>
      
    </section>
  )
}
