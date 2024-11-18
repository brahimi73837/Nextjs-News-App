import Link from 'next/link';
import Image from 'next/image';
import { DUMMY_NEWS } from "@/dummy-news";


export default function NewList({ news }) {
    return (
        <ul className="news-list">
        {news.map((newsItem) => (
          <li key={newsItem.id}>
            <Link href={`/news/${newsItem.slug}`}>
              <Image
                src={`/images/news/${newsItem.image}`}
                alt={newsItem.title}
                width={300}
                height={200}
              />
              {newsItem.title}
            </Link>
          </li>
        ))}
      </ul>
    )
}