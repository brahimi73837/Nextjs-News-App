import NewList from "@/components/new-list";
import { getLatestNews } from "@/lib/news";

export default function LatestNewsPage() {
    const latestNews = getLatestNews()
    return (
        <>
        <h2>Latest News</h2>
        <NewList news={latestNews} />
        </>
    );
}