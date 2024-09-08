import { useQuery } from "@tanstack/react-query";
import ms from 'ms'
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

export interface Platform {
    id: number;
    name: string;
    slug: string
}

interface PlatformResponse {
    count: number;
    results: Platform[];
}

const usePlatforms = () => useQuery<PlatformResponse>({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: platforms
})

export default usePlatforms