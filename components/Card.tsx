import * as React from "react";
import { FiCalendar } from "react-icons/fi";

import { NewsModel } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

export function Card({ news }: { news: NewsModel }) {
  return (
    <div className="cursor-pointer sm:p-3 dark:sm:hover:shadow-green-400
    dark:sm:border-green-50 dark:hover:sm:border-green-200 sm:hover:shadow-slate-00 sm:border-slate-400 sm:shadow-md 
    sm:border  sm:m-2 rounded-lg transition-shadow">
      <Link href={news.url} target="_blank">
        <Image
          src={news.urlToImage}
          alt={news.title}
          width={500}
          height={300}
          className="sm:rounded-t-lg 
          group-hover:opacity-80 
          transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="loading.svg"
          style={{
            maxWidth: "100%",
            height: "auto",
          }}
        />
        <div className="p-2">
          <p className="line-clamp-2">{news.content}</p>
          <h2 className="truncate text-lg font-bold">
            {news.title}
          </h2>
          <div className="flex flex-row mr-3 mt-2">
            {news.author && <p>{news.author}</p>}
            {news.publishedAt && <div className="flex flex-row ml-4 items-center">
              <FiCalendar className="h-5 w-5 mr-1" />
              <p>{format(new Date(news.publishedAt), "dd MMM, yyyy")}</p>
            </div>}
          </div>
        </div>
      </Link>
    </div>
  );
}
