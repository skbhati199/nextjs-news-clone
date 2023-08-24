import * as React from "react";
import { FiCalendar } from "react-icons/fi";

import { NewsModel } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import ImageFallback from "./ImageFallback";
import { imagePlaceHolder } from "@/lib/image-data";

export function Card({ news }: { news: NewsModel }) {
  return (
    <div
      className="cursor-pointer  dark:sm:hover:shadow-green-400
    dark:sm:border-green-50 dark:hover:sm:border-green-200 sm:hover:shadow-slate-00 sm:border-slate-400 sm:shadow-md 
    sm:border  sm:m-2 rounded-lg transition-shadow"
    >
      <Link href={news.url} target="_blank">
        {news.urlToImage && (
          <Image
            src={news.urlToImage}
            alt="Image"
            width={500}
            height={300}
            className="sm:rounded-t-lg 
              group-hover:opacity-80 
              transition-opacity duration-200 bg-cover"
            placeholder={`data:image/${imagePlaceHolder}`}
            blurDataURL="loading.svg"
            loading="lazy"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        )}
        <div className="sm:p-3 p-2 flex flex-col">
          <h2 className="line-clamp-2 text-lg font-bold">{news.title}</h2>

          <p
            className="line-clamp-3"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />
          <div className="flex flex-row mr-3 mt-2 text-sm text-muted-foreground items-start">
            {news.author && <p>{news.author}</p>}
            <div className="flex flex-row">
              {news.publishedAt && (
                <div className="flex flex-row ml-4 items-center">
                  <FiCalendar className="h-5 w-5 mr-1" />
                  <p>{format(new Date(news.publishedAt), "dd MMM, yyyy")}</p>
                </div>
              )}
              <div className="flex justify-end ml-4 hover:text-green-600">
                <p>{news?.source?.name}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
