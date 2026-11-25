import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EXPERIENCES } from '../../data/portfolio.data';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  const reposUrl = 'https://api.github.com/users/galeite-repo/repos';
  let fixture: ComponentFixture<HomeComponent>;
  let http: HttpTestingController;
  let el: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    http = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    el = fixture.nativeElement;
  });

  afterEach(() => http.verify());

  it('renders every project and opens only the current one', () => {
    http.expectOne(reposUrl).flush([]);
    const total = EXPERIENCES.flatMap(e => e.projects).length;
    expect(el.querySelectorAll('details.project').length).toBe(total);
    expect(el.querySelectorAll('details.project[open]').length).toBe(1);
  });

  it('lists GitHub repositories', () => {
    http.expectOne(reposUrl).flush([{
      name: 'demo', description: null, language: 'TypeScript', topics: ['angular'],
      html_url: 'https://github.com/galeite-repo/demo', homepage: '', private: false,
      created_at: '2025-01-01T00:00:00Z', pushed_at: '2025-02-01T00:00:00Z',
    }]);
    fixture.detectChanges();
    expect(el.querySelector('#github h3')?.textContent).toContain('demo');
  });

  it('hides the GitHub section when the API fails', () => {
    http.expectOne(reposUrl).flush(null, { status: 403, statusText: 'rate limited' });
    fixture.detectChanges();
    expect(el.querySelector('#github')).toBeNull();
  });

  it('toggles the mobile menu', () => {
    http.expectOne(reposUrl).flush([]);
    el.querySelector<HTMLButtonElement>('button[aria-controls="menu"]')!.click();
    fixture.detectChanges();
    expect(el.querySelector('#menu')).not.toBeNull();
  });
});
