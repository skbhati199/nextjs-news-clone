export interface NewsModel {
    author?: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
    source?: Source
}

export interface Source {
    id: string;
    name?: string
}