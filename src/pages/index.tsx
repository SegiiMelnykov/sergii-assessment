
import TodoView from "@/modules/todo/view/todo-view";

import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
 
  return (
    <main>
        <TodoView />
    </main>
  );
}
