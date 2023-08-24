// react/no-unescaped-entities
import React from 'react'

export default function AboutPage() {
  return (
       <main className="container mx-auto mt-8 p-4 bg-background text-foreground rounded shadow">
    <h1 className="text-3xl text-green-600 font-bold mb-4">About NextNews</h1>
    <p >
      NextJs-News-Clone is a news aggregator app that provides you with the latest news articles from around the world. Our team of dedicated journalists curates news stories on various topics to keep you informed and engaged.
    </p>
    <p className="mt-2">
      Whether you&apos;re interested in politics&lsquo; technology&lsquo; entertainment&lsquo; or sports&lsquo; NextNews has you covered. Our mission is to deliver accurate and timely news that matters to you.
    </p>
    <p className=" mt-2">
      Stay connected with NextNews to stay updated on the most important stories shaping our world.
    </p>
  </main>
  )
}
