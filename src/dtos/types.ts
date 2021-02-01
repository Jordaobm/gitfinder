export interface Profile {
    avatar_url: string;
    login: string;
    name: string;
    location: string;
    public_repos: number;
    followers: number;
    following: number;
    repos_url:string;
}

export interface Repositories {
    name: string;
    language: string;
    created_at: string;
    updated_at: string;
    html_url: string;
}