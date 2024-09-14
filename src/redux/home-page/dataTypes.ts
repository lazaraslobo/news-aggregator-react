// Define EachArticleInformationType for individual articles
export type EachArticleInformationType = {
    source: string;
    title: string;
    description: string;
    url: string;
    imageSrc: string;
    publishedAt: string;
    content: string;
    topic: string;
    author: string;
};

// Define the BaseArticleType with a generic type T for the article content
type BaseArticleType<T> = {
    topics: string[];
    authors: { [key: string]: number };
    sources: { [key: string]: number };
    articles: {
        [key: string]: {
            [key: string]: T[];
        };
    };
};

// ArticlesFetchApiResponseType will use EachArticleInformationType as the generic type T
export type ArticlesFetchApiResponseType = BaseArticleType<EachArticleInformationType>;

// HomePageStateType will extend BaseArticleType with the additional state properties
export type HomePageStateType = BaseArticleType<EachArticleInformationType> & {
    isProcessing: boolean;
    isFailed: boolean;
    isSuccess: boolean;
};
