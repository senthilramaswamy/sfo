import type { Person } from '@/lib/content';
import { withBasePath } from '@/hooks/useRouter';

interface PeopleProps {
  people: Person[];
}

export function People({ people }: PeopleProps) {
  return (
    <section id="people" className="py-[110px] max-[600px]:py-[76px]">
      <div className="mx-auto max-w-site px-8 max-[600px]:px-[22px]">
        <div className="mb-16 max-w-[600px] animate-reveal">
          <div className="mb-[18px] h-px w-10 bg-gold" />
          <div className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-gold">
            People
          </div>
          <h2 style={{ fontSize: 'clamp(30px, 3.4vw, 42px)' }}>
            Two generations. One long-term perspective.
          </h2>
        </div>

        {people.map((person) => (
          <div
            key={person.position}
            className="flex animate-reveal gap-[26px] border-t border-line py-[46px] max-[600px]:flex-col"
          >
            <div className="h-[132px] w-[106px] shrink-0 overflow-hidden rounded-[4px]">
              <img
                src={withBasePath(person.image)}
                alt={person.name}
                loading="lazy"
                className={`h-full w-full object-cover ${
                  person.name === 'Manas Jain'
                    ? 'scale-[1.55] object-[center_24%]'
                    : 'object-top'
                }`}
              />
            </div>
            <div>
              <span className="mb-2 block font-mono text-xs uppercase tracking-[0.1em] text-gold">
                {person.role}
              </span>
              <h3 className="mb-[14px] text-[25px]">{person.name}</h3>
              <p className="text-[16px] font-light text-ink-soft" style={{ maxWidth: '620px' }}>
                {person.bio}
              </p>
            </div>
          </div>
        ))}
        <div className="border-b border-line" />
      </div>
    </section>
  );
}
