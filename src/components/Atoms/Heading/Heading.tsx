
type props = {
    text: string;
} 

export default function Heading({text}: props) {
    return (
        <h2 className="text-marks-600 text-2xl font-semibold my-5">{text}</h2>
    )


}