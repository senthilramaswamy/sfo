import type { Company } from '@/lib/content';
import { withBasePath } from '@/hooks/useRouter';

interface ResearchProps {
  companies: Company[];
  onNavigate: (path: string) => void;
}

export function Research({ companies, onNavigate }: ResearchProps) {
  return (
    <section id="research" className="bg-sand py-[110px] max-[600px]:py-[76px]">
      <div className="mx-auto max-w-site px-8 max-[600px]:px-[22px]">
        <div className="mb-16 max-w-[600px] animate-reveal">
          <div className="mb-[18px] h-px w-10 bg-gold" />
          <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">
            Selected Companies / Research
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 42px)' }}>
            Selected companies / research.
          </h2>
        </div>

        <div className="grid grid-cols-5 gap-4 animate-reveal max-[900px]:grid-cols-3 max-[600px]:grid-cols-2 max-[600px]:gap-3">
          {companies.map((company) => (
            <a
              key={company.slug}
              href={withBasePath(`/company/${company.slug}`)}
              aria-label={`Read research about ${company.company}`}
              onClick={(event: React.MouseEvent<HTMLAnchorElement>) => {
                event.preventDefault();
                onNavigate(`/company/${company.slug}`);
              }}
              className="group overflow-hidden border border-line bg-cream transition-all duration-300 hover:-translate-y-1 hover:border-gold hover:shadow-[0_14px_30px_rgba(54,35,20,0.12)]"
            >
              <div
                className="relative aspect-[7/10] overflow-hidden bg-cream bg-no-repeat transition-transform duration-500 group-hover:scale-[1.03]"
                style={{
                  backgroundImage: `url('${withBasePath('/images/companies/Portfolio_Group.png')}')`,
                  backgroundPosition: `${(company.tilePosition % 5) * 25}% ${Math.floor(company.tilePosition / 5) * 100}%`,
                  backgroundSize: '500% 200%',
                  filter: 'sepia(0.5) saturate(1.15) hue-rotate(-15deg) brightness(0.96)',
                }}
              >
                <div
                  className="pointer-events-none absolute inset-0 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-0"
                  style={{
                    background: 'linear-gradient(160deg, rgba(107,42,32,0.22) 0%, rgba(244,234,217,0.06) 50%, rgba(61,22,15,0.18) 100%)',
                  }}
                />
              </div>
            </a>
          ))}
        </div>

        <p className="mt-[26px] font-serif text-[13.5px] italic text-ink-soft">
          Detailed notes are shared directly in conversations with promoters and management teams.
        </p>
      </div>
    </section>
  );
}
