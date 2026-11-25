import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Project {
  name: string;
  description: string | null;
  tech: string[];           // Linguagem principal + topics
  github: string;           // URL do repositório
  live: string | null;      // URL do deploy (homepage)
  lastCommit: Date | null;  // Data do último commit (pushed_at)
}

interface GithubRepo {
  name: string;
  description: string | null;
  language: string | null;
  topics?: string[];
  html_url: string;
  homepage: string | null;
  private: boolean;
  created_at: string;
  pushed_at: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com/users/galeite-repo/repos';

  constructor(private http: HttpClient) {}

  getPublicProjects(): Observable<Project[]> {
    return this.http.get<GithubRepo[]>(this.baseUrl).pipe(
      map(repos => repos
        .filter(repo => !repo.private)
        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
        .slice(0, 6)
        .map(repo => ({
          name: repo.name,
          description: repo.description,
          // O Set evita repetir a linguagem quando ela também é um topic
          tech: [...new Set([...(repo.language ? [repo.language] : []), ...(repo.topics ?? [])])],
          github: repo.html_url,
          live: repo.homepage || null,
          lastCommit: repo.pushed_at ? new Date(repo.pushed_at) : null
        }))
      )
    );
  }
}
