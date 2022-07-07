import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Milo Weinberg</title>
        <link rel="icon" type="image/png" href="images/petus-circle.png"></link>

        <meta name="title" content="Iapetus-11" />
        <meta name="keywords" content="iapetus11, iapetus-11, milo, weinberg, milo weinberg" />

        {/* meta for embeds in discord and facebook */}
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Milo / Iapetus11"/>
        <meta property="og:description" content="A personal/portfolio site for (and by) Milo / Iapetus11"/>
        <meta property="og:url" content="https://iapetus11.me/"/>
        <meta property="og:image" content="https://iapetus11.me/static/images/petus-circle.png"/>

        {/* meta for embeds in twitter */}
        <meta name="twitter:card" content="summary"/>
        <meta name="twitter:title" content="Milo / Iapetus11"/>
        <meta name="twitter:description" content="A personal/portfolio site for (and by) Milo / Iapetus11"/>
        <meta name="twitter:url" content="https://iapetus11.me/"/>
        <meta name="twitter:image" content="https://iapetus11.me/static/images/petus-circle.png"/>

        {/* font awesome */}
        <script async src="https://kit.fontawesome.com/8b5bae0343.js" crossOrigin="anonymous"></script>
      </Head>

      <div className="select-none bg-gradient-to-r from-dark-dark via-dark-normal via-dark-light via-dark-normal to-dark-dark h-screen lg:pb-12">
        <div className="flex flex-row flex-wrap md:flex-nowrap items-center justify-center w-full h-full lg:-ml-24">

          {/* profile picture, mobile nav, name, and bio */}
          <div className="flex flex-col space-y-3 px-3 md:px-0 md:items-center">
            {/* mobile pfp and nav buttons on either side of pfp */}
            <div className="flex md:hidden flex-row items-center justify-center space-x-4 text-base text-white text-center">
              <div className="flex flex-col space-y-2">
                <a href="/projects" className="flex items-center justify-center fin fin-1 py-1 px-4 align-middle hover:bg-aqua-dark transform duration-100 md:hover:scale-110 border hover:border-opacity-0 border-white rounded-md">
                  <p className="leading-tight">Projects</p>
                </a>

                <a href="https://github.com/Iapetus-11" target="_blank" className="flex items-center justify-center fin fin-2 py-1 px-4 align-middle hover:bg-aqua-dark transform duration-100 md:hover:scale-110 border hover:border-opacity-0 border-white rounded-md" rel="noreferrer">
                  <p className="leading-tight">Github</p>
                </a>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */ }
              <img src="/images/petus-circle.png" draggable="false" className="fin fin-0 w-1/3 py-6 self-center" alt="Iapetus11's profile picture" />

              <div className="flex flex-col space-y-2">
                <a href="https://discord.bio/p/Iapetus11" target="_blank" className="fin fin-3 py-2 text-white hover:text-aqua-normal transform duration-100 md:hover:scale-110" rel="noreferrer">
                  <i className="fab fa-discord"></i>
                </a>

                <a href="https://twitter.com/iapetus_11" target="_blank" className="fin fin-4 py-2 text-white hover:text-aqua-normal transform duration-100 md:hover:scale-110" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            {/* desktop pfp */}
            {/* eslint-disable-next-line @next/next/no-img-element */ }
            <img src="/images/petus-circle.png" className="hidden md:flex fin fin-0 w-1/3 pb-6 self-center" draggable="false" alt="Iapetus11's profile picture" layout="fill" objectFit="cover" />

            <h1 className="fin fin-1 text-3xl text-center text-aqua-normal font-semibold w-full max-w-sm self-center">Milo <span className="text-white">/</span> Iapetus11</h1>

            <span className="fin fin-2 text-lg text-left text-white font-semibold max-w-md self-center text-center">
              Hey! I&lsquo;m an 18 year-old developer who enjoys creating innovative and fun software, as well
              as pushing the limits of the programming languages I know!
            </span>
          </div>

          {/* desktop nav and lists */}
          <div className="flex flex-col items-center md:items-start space-y-7">
            {/* cool links for desktop */}
            <div className="hidden md:flex flex-col items-start">
              <div className="flex flex-row flex-wrap justify-start text-lg text-white space-x-4 space-y-1 max-w-xl">
                <div className="w-0 p-0 -m-2 md:m-0"></div> {/* for some reason, size of next div is fucked if I don't do this */}

                <a href="/projects" className="flex items-center justify-center fin fin-1 py-1 px-4 align-middle hover:bg-aqua-dark transform duration-100 md:hover:scale-110 border hover:border-opacity-0 border-white rounded-md">
                  <p className="leading-tight">Projects</p>
                </a>

                <a href="https://github.com/Iapetus-11" target="_blank" className="flex items-center justify-center fin fin-2 py-1 px-4 align-middle hover:bg-aqua-dark transform duration-100 md:hover:scale-110 border hover:border-opacity-0 border-white rounded-md" rel="noreferrer">
                  <p className="leading-tight">Github</p>
                </a>

                <div className="px-1"></div>

                <a href="https://discord.bio/p/Iapetus11" target="_blank" className="fin fin-3 py-2 text-white hover:text-aqua-normal transform duration-100 md:hover:scale-110" rel="noreferrer">
                  <i className="fab fa-discord"></i>
                </a>

                <a href="https://twitter.com/iapetus_11" target="_blank" className="fin fin-4 py-2 text-white hover:text-aqua-normal transform duration-100 md:hover:scale-110" rel="noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            </div>

            {/* list of programming languages */}
            <div className="flex flex-col items-center md:items-start px-5 md:px-0">
              <span className="fin fin-1 text-2xl text-aqua-normal text-left md:text-center font-semibold pb-2">Programming Languages</span>

              <div className="flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start text-base md:text-lg text-white space-x-2 space-y-2 max-w-xl">
                <div className="fin fin-2 w-0 p-0 -m-2 md:m-0"></div> {/* for some reason, size of next div is fucked if I don't do this */}

                <div className="fin fin-3 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fab fa-python text-aqua-normal"></i> <span>Python</span>
                </div>

                <div className="fin fin-4 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fab fa-solid fa-hashtag text-aqua-normal"></i> <span>C#</span>
                </div>

                <div className="fin fin-5 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fas fa-database text-aqua-normal"></i> <span>SQL</span>
                </div>

                <div className="fin fin-6 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fab fa-node-js text-aqua-normal"></i> <span>Node.js</span>
                </div>

                <div className="fin fin-7 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fas fa-crown text-aqua-normal"></i> <span>Nim</span>
                </div>

                <div className="fin fin-8 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fab fa-java text-aqua-normal"></i> <span>Java</span>
                </div>
              </div>
            </div>

            {/* list of tools/software/other/etc... */}
            <div className="flex flex-col items-center md:items-start px-5 md:px-0">
              <span className="fin fin-2 text-2xl text-aqua-normal text-left md:text-center font-semibold pb-2">Technologies / Tools</span>

              <div className="flex flex-row flex-wrap items-center justify-center md:items-start md:justify-start text-base md:text-lg text-white space-x-2 space-y-2 max-w-xl">
                <div className="w-0 p-0 -m-2 md:m-0"></div> {/* for some reason, size of next div is fucked if I don't do this */}

                <div className="fin fin-2 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fab fa-github text-aqua-normal"></i> <span>GitHub</span>
                </div>

                <div className="fin fin-3 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fas fa-code-branch text-aqua-normal"></i> <span>Git</span>
                </div>

                <div className="fin fin-4 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fas fa-bolt text-aqua-normal"></i> <span>FastAPI</span>
                </div>

                <div className="fin fin-5 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fab fa-js text-aqua-normal"></i> <span>Express</span>
                </div>

                <div className="fin fin-6 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fab fa-solid fa-diagram-project text-aqua-normal"></i> <span>Asp.Net</span>
                </div>

                <div className="fin fin-7 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fas fa-database text-aqua-normal"></i> <span>PostgreSQL</span>
                </div>

                <div className="fin fin-8 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fa-solid fa-table-columns text-aqua-normal"></i> <span>Entity Framework</span>
                </div>

                <div className="fin fin-9 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fab fa-aws text-aqua-normal"></i> <span>AWS</span>
                </div>

                <div className="fin fin-10 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fas fa-terminal text-aqua-normal"></i> <span>SSH</span>
                </div>

                <div className="fin fin-11 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fas fa-layer-group text-aqua-normal"></i> <span>NGINX</span>
                </div>

                <div className="fin fin-12 py-2 px-4 bg-black bg-opacity-30 rounded-md">
                  <i className="fab fa-ubuntu text-aqua-normal"></i> <span>Ubuntu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
