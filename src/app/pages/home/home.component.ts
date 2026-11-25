import { DatePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';
import {
  CERTIFICATIONS,
  CLIENTS,
  EDUCATION,
  EXPERIENCES,
  LANGUAGES,
  PRODUCTS,
  PROFILE,
  SKILLS,
} from '../../data/portfolio.data';
import { GithubService, Project } from '../../services/github.service';

@Component({
  selector: 'app-home',
  imports: [DatePipe],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  readonly profile = PROFILE;
  readonly clients = CLIENTS;
  readonly experiences = EXPERIENCES;
  readonly products = PRODUCTS;
  readonly skills = SKILLS;
  readonly education = EDUCATION;
  readonly languages = LANGUAGES;
  readonly certifications = CERTIFICATIONS;
  readonly year = new Date().getFullYear();

  readonly nav = [
    { id: 'sobre', label: 'Sobre' },
    { id: 'experiencia', label: 'Experiência' },
    { id: 'produtos', label: 'Produtos' },
    { id: 'habilidades', label: 'Habilidades' },
    { id: 'formacao', label: 'Formação' },
  ];

  readonly menuOpen = signal(false);

  /** undefined = carregando; lista vazia = sem repositórios ou falha na API (a seção some). */
  readonly repos = toSignal(
    inject(GithubService).getPublicProjects().pipe(catchError(() => of<Project[]>([]))),
  );
}
