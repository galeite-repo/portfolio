import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { GithubService, Project } from '../../services/github.service';

export interface Experience {
  company: string;
  period: string;
  role: string;
  location: string;
  type: string;
  clients?: {
    name: string;
    project: string;
    year: string;
    role: string;
    description?: string[];
    technologies?: string[];
  }[];
}

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  projects: Project[] = [];
  typedText = '';
  showCursor = true;
  private typeTimer?: number;
  private cursorTimer?: number;


  constructor(private githubService: GithubService) { }

  fullText = "Engenheiro de Software";

  skills = [
    'JavaScript', 'TypeScript', 'Angular', 'Node.js',
    'Python', 'Java', 'Springboot', 'Microserviços', 'Docker', 'AWS', 'PostgreSQL', 'MongoDB'
  ];

  experiences: Experience[] = [
    {
      company: 'IBM',
      period: 'jun 2020 - atual (5 anos 3 meses)',
      role: 'Senior Full Stack Developer',
      location: 'São Paulo, Brasil · Remoto',
      type: 'Tempo integral',
      clients: [
        {
          name: 'Banco Itau',
          project: 'Plataforma de Inteligência artificial',
          year: '2025 - atual',
          role: 'Frontend Angular Specialist',
          description: [
            'Atuação exclusiva como especialista em Angular em projeto de Inteligência Artificial.',
            'Desenvolvimento de interfaces avançadas para visualização e interação de modelos de IA.',
            'Integração com APIs backend e consumo de serviços em nuvem AWS.',
            'Infraestrutura totalmente baseada em AWS: Lambda, S3, API Gateway e outros recursos.',
            'Garantia de alta performance, escalabilidade e boas práticas de código.'
          ],
          technologies: [
            'Angular', 'AWS Lambda', 'S3', 'API Gateway', 'CI/CD', 'TypeScript'
          ]
        },
        {
          name: 'Petrobras',
          project: 'Gestão e Monitoramento de Sondas',
          year: '2023 - 2025',
          role: 'Frontend Angular & Backend Java',
          description: [
            'Desenvolvimento de aplicação robusta e escalável para monitoramento e gestão de operações em plataformas de petróleo.',
            'Frontend em Angular com Lazy Loading, NgRx (state management) e SSR (Server-Side Rendering).',
            'Backend com microsserviços em Java (Spring Boot, JPA, Hibernate).',
            'Mentoria de desenvolvedores juniores, promovendo boas práticas.',
            'Implementação de pipelines CI/CD com Docker, Kubernetes e Jenkins.'
          ],
          technologies: [
            'Angular', 'NgRx', 'Java', 'Spring Boot', 'Hibernate',
            'Docker', 'Kubernetes', 'Jenkins'
          ]
        },
        {
          name: 'TIM | OI | VTAL',
          project: 'Solução de Automação em Telecomunicações',
          year: '2020-2023',
          role: 'Tech Lead Full-Stack',
          description: [
            'Ambiente de testes automatizados usando Robot Framework e Python.',
            'Frontend em Angular integrado a APIs backend.',
            'Backend em Node.js para suportar UI e dashboards.',
            'Liderança de equipe focada em automação e testes de regressão.',
            'Integração com Salesforce e pipeline Jenkins + Docker para execução paralela de testes.'
          ],
          technologies: [
            'Robot Framework', 'Python', 'Angular', 'Node.js',
            'Salesforce', 'Jenkins', 'Docker'
          ]
        }
      ]
    },
    {
      company: 'WFS Web Cloud',
      period: 'fev 2015 - mai 2020 (5 anos 4 meses)',
      role: 'Founder & Lead Developer',
      location: 'São Paulo, Brasil · Remota',
      type: 'Autônomo',
      clients: [
        {
          name: 'Diversos clientes',
          project: 'Solução Completa de Gestão Empresarial',
          year: '2015-2020',
          role: 'Full-Stack Developer',
          description: [
            'Desenvolvimento de solução ponta a ponta para empresas do setor de guindastes e içamentos.',
            'Frontend em Angular com RxJS e design responsivo (Bootstrap).',
            'Backend em Spring Boot e Spring Cloud.',
            'Arquitetura de microsserviços com Eureka e API Gateway.',
            'Atuação direta com clientes para levantamento de requisitos e entregas sob medida.'
          ],
          technologies: [
            'Angular', 'RxJS', 'Bootstrap',
            'Java', 'Spring Boot', 'Spring Cloud',
            'Eureka', 'API Gateway'
          ]
        }
      ]
    },
    {
      company: 'JRM Automação Empresarial',
      period: 'jan 2012 - fev 2015 (3 anos 2 meses)',
      role: 'Software Developer',
      location: 'São Paulo, Brasil · Híbrida',
      type: 'Tempo integral',
      clients: [
        {
          name: 'Porto Seguro',
          project: 'Automação de Processamento de Documentos',
          year: '2012-2015',
          role: 'Backend Java Developer',
          description: [
            'Configuração e otimização de Newgen OmniDocs e OmniFlow para captura e extração automática de dados.',
            'Desenvolvimento de regras de reconhecimento para OCR.',
            'Integração com sistemas internos da Porto Seguro.',
            'Scripts em Java para automação e integração de processos.',
            'Redução significativa de trabalho manual no fluxo de documentos médicos.'
          ],
          technologies: [
            'Java', 'Newgen OmniDocs', 'OmniFlow',
            'OCR', 'Integrações corporativas'
          ]
        }
      ]
    }
  ];


  ngOnInit() {
    this.githubService.getPublicProjects().subscribe(data => {
      this.projects = data;
      console.log('Projetos carregados:', this.projects);
    });
    this.startTypingAnimation();
    this.startCursorBlink();
  }

  ngOnDestroy() {
    if (this.typeTimer) {
      clearInterval(this.typeTimer);
    }
    if (this.cursorTimer) {
      clearInterval(this.cursorTimer);
    }
  }

  private startTypingAnimation() {
    let i = 0;
    this.typeTimer = window.setInterval(() => {
      if (i < this.fullText.length) {
        this.typedText = this.fullText.slice(0, i + 1);
        i++;
      } else {
        if (this.typeTimer) {
          clearInterval(this.typeTimer);
        }
      }
    }, 100);
  }

  private startCursorBlink() {
    this.cursorTimer = window.setInterval(() => {
      this.showCursor = !this.showCursor;
    }, 500);
  }
}