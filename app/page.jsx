import Feed from "@/components/Feed"


const Home = () => {
  return (
    <section className="
    w-full
    flex-center
    flex-col">
        <h1 className="
        head_text
        text-center">
            Create & Share
            <br />
            <span className="indigo_gradient text-center">
                Human-Powered Ideas
            </span>
        </h1>
        <p className="desc text-center">
            This workspace is released to store your ideas and keep it in source which does not required to waste papers to make creative notes :-)
        </p>
        <Feed />
    </section>
  )
}

export default Home