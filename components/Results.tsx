import { NewsModel } from "@/types";
import React from "react";
import { Card } from "./Card";

export default function HomeResults({ results }: { results: NewsModel[] | any[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-x-2 gap-y-2 mt-4">
      {results.map((news: NewsModel) => (
        <Card key={news.url} news={news} />
      ))}
    </div>
  );
}
