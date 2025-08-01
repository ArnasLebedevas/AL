import { content } from "@/constants/content";
import { redirect } from "next/navigation";

export default function NotFound() {
  redirect(content.navigation.home.path);
}
