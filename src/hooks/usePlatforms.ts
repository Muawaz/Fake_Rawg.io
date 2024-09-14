import { useQuery } from "@tanstack/react-query";
import ms from 'ms'
import platforms from "../data/platforms";
import APIClient, { FetchResponse } from "../services/api-client";
import { Platform } from "../entities/Platform";

const apiClient = new APIClient<Platform>('/platforms/lists/parents')

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