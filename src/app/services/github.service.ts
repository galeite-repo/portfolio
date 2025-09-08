import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface Project {
  name: string;
  description: string;
  tech: string[];          // Linguagem principal + topics
  github: string;          // URL do repositório
  live: string | null;     // URL do deploy (homepage)
  stars: number;           // Quantidade de estrelas
  forks: number;           // Quantidade de forks
  watchers: number;        // Quantidade de watchers
  lastCommit: Date | null; // Data do último commit (pushed_at)
}

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private baseUrl = 'https://api.github.com/users/galeite-repo/repos';

  constructor(private http: HttpClient) {}

  getPublicProjects(): Observable<Project[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
     map(repos => repos
  .filter(repo => !repo.private)
  .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  .slice(0, 6)
  .map(repo => ({
    name: repo.name,
    description: repo.description || 'Sem descrição',
    tech: [
      ...(repo.language ? [repo.language] : []),
      ...(repo.topics || [])
    ],
    github: repo.html_url,
    live: repo.homepage || null,
    stars: repo.stargazers_count,
    forks: repo.forks_count,
    watchers: repo.watchers_count,
    lastCommit: repo.pushed_at ? new Date(repo.pushed_at) : null
  }))
)
    );
  }
}
