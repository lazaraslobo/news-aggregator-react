import { AxiosResponse } from "axios";

// Define your custom response type
type ApiInnerType<T = any> = {
    data: T;
    message: string;
    status: number;
};

export type AxiosResponseType<T = any> = AxiosResponse<ApiInnerType<T>>;
