import Link from 'next/link'
import { ReactNode } from 'react'
import ArticleLink from '../components/ArticleLink'
import BaseScreen from '../components/BaseScreen'
import Card from '../components/Card'

const ToolTip = ({
  children,
  toolText,
  text,
}: {
  children?: ReactNode
  toolText?: string
  text: string
}) => (
  <span className="has-tooltip relative">
    <span className="tooltip left-1/2 text-sm whitespace-pre -translate-x-1/2 rounded-xl shadow-lg px-3 py-1 bg-slate-800 -mt-7 duration-300">
      {children ? children : toolText}
    </span>
    <span className="decoration-dashed underline">{text}</span>
  </span>
)

export default function Home(props: any) {
  return (
    <BaseScreen className="flex flex-col items-center space-y-6">
      {/* TOP INFO */}
      <h1 className="text-6xl font-bold text-center hover:scale-125 duration-150">
        Thomas Forbes
      </h1>
      <p className="text-slate-300 text-center">
        I am an Irish secondary school student trying to be a full stack
        entrepreneur
        {/* <ToolTip
            text="full stack entrepreneur"
            toolText="Being pro at all roles"
          /> */}
      </p>
      {/* MAIN CONTENT */}
      <div className="flex flex-col max-w-4xl w-full lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        {/* COL 1 */}
        <div className="basis-4/12 flex flex-col sm:flex-row lg:flex-col sm:space-x-6 sm:space-y-0 space-y-6 lg:space-y-6 lg:space-x-0 space-x-0 w-full">
          {/* ABOUT ME */}
          <div className="flex-1 flex flex-col items-center border border-slate-700 shadow-lg rounded-xl p-6 md:p-8 space-y-3 lg:h-fit">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <ul className="flex flex-col w-fit space-y-1">
              {[
                {
                  emoji: '🧑',
                  text: `${Math.abs(
                    new Date(
                      Date.now() - new Date(2005, 8, 10).getTime()
                    ).getUTCFullYear() - 1970
                  )} years old`,
                  toolTip: (
                    <div className="flex flex-row items-center space-x-1">
                      Alive
                      <div className="w-2 h-2 rounded-xl block bg-green-600 animate-pulse ml-1" />
                    </div>
                  ),
                },
                {
                  emoji: String.fromCodePoint(
                    ...props.location.country
                      .toUpperCase()
                      .split('')
                      .map((char: string) => 127397 + char.charCodeAt(0))
                  ),
                  text: `Currently in ${props.location.city}, ${props.location.country}`,
                  toolTip: (
                    <div className="flex flex-row items-center space-x-1">
                      <a
                        href="https://nomadlist.com/@thomasforbes"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        Nomad List
                      </a>
                      <div className="w-2 h-2 rounded-xl block bg-green-600 animate-pulse ml-1" />
                    </div>
                  ),
                },
                { emoji: '👨‍💻', text: 'Indie Hacker' },
              ].map((item) => (
                <li
                  className="text-slate-300 flex flex-row items-center"
                  key={item.text}
                >
                  <span className="mr-2">{item.emoji}</span>
                  {item?.toolTip ? (
                    <ToolTip text={item.text}>{item.toolTip}</ToolTip>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
          {/* EMAIL SIGN UP */}
          <div className="flex-1 border border-slate-700 shadow-lg rounded-xl p-6 md:p-8 space-y-3 lg:h-fit">
            <h2 className="text-xl font-semibold text-center">
              Stay up to date
            </h2>
            <p className="text-slate-400 text-center">
              Get notified when I do something interesting
            </p>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="example@example.com"
                className="min-w-0 flex-auto appearance-none rounded-md border px-3 py-2 shadow-md shadow-zinc-800/5 focus:outline-none focus:ring-4 border-zinc-700 bg-zinc-700/[0.15] text-zinc-200 placeholder:text-zinc-500 focus:border-cyan-600 focus:ring-cyan-600/10 sm:text-sm duration-300"
              />
              <button
                className="rounded-md py-2 px-3 text-sm outline-offset-2 font-semibold bg-cyan-800 hover:bg-cyan-700 active:bg-cyan-800 active:text-white/70 duration-150 hover:border-cyan-600 hover:ring-cyan-600/10 hover:ring-4"
                type="submit"
              >
                Join
              </button>
            </div>
          </div>
        </div>
        {/* COL 2 */}
        {/* WRITING */}
        <div className="basis-8/12">
          <Card className="space-y-6">
            {/* TOP LINK */}
            <Link href="/writing">
              <h2 className="text-2xl font-semibold hover:text-slate-500 duration-300 cursor-pointer">
                Writing &rarr;
              </h2>
            </Link>
            {/* ARTICLES */}
            <div className="flex flex-col space-y-5">
              {[
                {
                  title: 'Ur momma soooo fat',
                  description:
                    'The legendary story of the heaviest object in the universe',
                  link: '/writing/ur-momma-so-fat',
                  createdAt: new Date('2069-04-20'),
                },
                {
                  title: 'test',
                  description: 'test',
                  link: '/test',
                  createdAt: new Date(),
                },
              ].map((article, idx) => (
                <ArticleLink
                  article={article}
                  divider={idx > 0}
                  key={article.title}
                />
              ))}
            </div>
          </Card>
        </div>
      </div>
    </BaseScreen>
  )
}

export const getStaticProps = async () => {
  // const locData = await (
  //   await fetch('https://nomadlist.com/@thomasforbes.json')
  // ).json()
  // const loc = {
  //   city: locData.location.now.city || 'Earth',
  //   country:
  //     locData.location.now.country_code === 'UK'
  //       ? 'GB'
  //       : locData.location.now.country_code,
  // }
  const loc = { city: 'Dublin', country: 'IE' }

  return {
    props: {
      location: loc,
    },
  }
}