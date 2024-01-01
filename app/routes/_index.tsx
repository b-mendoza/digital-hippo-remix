import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import type { LucideIcon } from 'lucide-react';
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react';

import { MaxWidthWrapper } from '~/components/max-width-wrapper';
import { Button, buttonVariants } from '~/components/ui/button';

export const meta: MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

type Perk = {
  description: string;
  icon: LucideIcon;
  name: string;
};

const PERKS: Perk[] = [
  {
    description:
      'Get your assets delivered to your email in seconds and download them right away.',
    icon: ArrowDownToLine,
    name: 'Instant Delivery',
  },
  {
    description:
      'Every asset on our platform is verified by our team to ensure our highest quality standards. Not happy? We offer a 30-day money-back guarantee.',
    icon: CheckCircle,
    name: 'Guaranteed Quality',
  },
  {
    description:
      "We've pledged 1% of sales to the preservation and restoration of the natural environment.",
    icon: Leaf,
    name: 'For the planet',
  },
];

export default function Index() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="mx-auto flex max-w-3xl flex-col items-center py-20 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Your market place for high-quality{' '}
            <span className="text-blue-600">digital assets</span>.
          </h1>

          <p className="mt-6 max-w-prose text-lg text-muted-foreground">
            Welcome to DigitalHippo. Every asset on our platform is verified by
            our team to ensure our highest quality standards
          </p>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row">
            <Link to="/products" className={buttonVariants()} prefetch="intent">
              Browse Trending
            </Link>

            <Button variant="ghost">Our quality promise &rarr;</Button>
          </div>
        </div>

        {/* TODO: list products */}
      </MaxWidthWrapper>

      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0">
            {PERKS.map((perk) => {
              const Icon = perk.icon;

              return (
                <div
                  key={perk.name}
                  className="text-center md:flex md:text-left lg:block lg:text-center"
                >
                  <div className="flex justify-center md:flex-shrink-0">
                    <div className="flex size-16 items-center justify-center rounded-full bg-blue-100 text-blue-900">
                      <Icon className="size-1/3" />
                    </div>
                  </div>

                  <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                    <h3 className="text-base font-medium text-gray-900">
                      {perk.name}
                    </h3>

                    <p className="mt-3 text-sm text-muted-foreground">
                      {perk.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
