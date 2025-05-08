import { LANG } from "../utils/langConstant";

const About = ({lang}) => {
    const data = LANG[lang]
    return (
        <div>
            <h1 className="font-bold text-2xl">{data.title}</h1>
            <p>{data.desc}</p>
        </div>
    )
}
export default About;