import Link from "next/link";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";
import NewList from "@/components/new-list";

export default function NewsPage() {
  return (
    <>
      <div id="news">
        <h1>News Page</h1>
      </div>

      <NewList news={DUMMY_NEWS} />
    </>
  );
}
