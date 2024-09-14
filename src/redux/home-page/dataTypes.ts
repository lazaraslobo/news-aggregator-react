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

export type ArticlesFetchApiResponseType = BaseArticleType<EachArticleInformationType>;

export type HomePageStateType = BaseArticleType<EachArticleInformationType> & {
    isProcessing: boolean;
    isFailed: boolean;
    isSuccess: boolean;
    userFilterSelections: {
        [key: string]: string[];
    }
};
